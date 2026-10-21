// Duplicate hostnames that serve the same site; 301 them to the canonical domain.
// Preview deployments (<hash>.site-3wq.pages.dev, <branch>.site-3wq.pages.dev) are left alone.
const CANONICAL_HOST = "rectifyq.com"
const REDIRECT_HOSTS = new Set(["www.rectifyq.com", "site-3wq.pages.dev"])

// Pages under these prefixes are served only to visitors Cloudflare geolocates to these countries.
// Pair with the WAF custom rule (runs before cache); this is the in-repo backstop.
const GEO_RESTRICTED_PREFIXES = ["/my-only"]
const GEO_ALLOWED_COUNTRIES = new Set(["MY"])

const GEO_BLOCK_HTML = `<!doctype html>
<html lang="ms"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Tidak tersedia | Not available</title></head>
<body style="font-family:system-ui,sans-serif;max-width:40rem;margin:4rem auto;padding:0 1rem">
<h1>Kandungan ini hanya tersedia di Malaysia.</h1>
<p>This content is only available to readers in Malaysia.</p>
<p><a href="https://rectifyq.com/">rectifyq.com</a></p>
</body></html>`

function isGeoRestricted(pathname) {
  let path = pathname
  try {
    path = decodeURIComponent(pathname)
  } catch (_) {
    // malformed escape — match on the raw path
  }
  path = path.replace(/\/{2,}/g, "/").toLowerCase()
  return GEO_RESTRICTED_PREFIXES.some(
    (p) => path === p || path.startsWith(p + "/") || path.startsWith(p + "."),
  )
}

export async function onRequest({ request, next }) {
  const requestUrl = new URL(request.url)
  if (REDIRECT_HOSTS.has(requestUrl.hostname)) {
    requestUrl.protocol = "https:"
    requestUrl.hostname = CANONICAL_HOST
    requestUrl.port = ""
    return Response.redirect(requestUrl.toString(), 301)
  }

  if (!isGeoRestricted(requestUrl.pathname)) {
    return serve(request, next)
  }

  // Missing country (local dev, unknown IPs, Tor = "T1") fails closed
  if (!GEO_ALLOWED_COUNTRIES.has(request.cf?.country)) {
    return new Response(GEO_BLOCK_HTML, {
      status: 403,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex",
      },
    })
  }

  // Never let a shared cache hand an allowed response to a visitor elsewhere
  const response = await serve(request, next)
  const restricted = new Response(response.body, response)
  restricted.headers.set("Cache-Control", "private, no-store")
  restricted.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive")
  return restricted
}

async function serve(request, next) {
  const accept = request.headers.get("accept") || ""

  // Normal browsers and crawlers: untouched, zero overhead
  if (!accept.includes("text/markdown")) {
    return next()
  }

  const url = new URL(request.url)
  let pathname = url.pathname.replace(/\/$/, "")
  if (pathname === "") pathname = "/index"

  // Skip requests that already target real files (css, js, images, .md itself)
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return next()
  }

  // Fetch the raw .md that copy-markdown.js placed alongside the HTML
  const mdUrl = `${url.origin}${pathname}.md`

  try {
    const mdResponse = await fetch(mdUrl)

    if (mdResponse.ok) {
      const markdown = await mdResponse.text()
      const tokens = Math.ceil(markdown.length / 4) // ~4 chars/token estimate

      return new Response(markdown, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "x-markdown-tokens": String(tokens),
          "Content-Signal": "ai-train=yes, search=yes, ai-input=yes",
          "Vary": "Accept",
          "Cache-Control": "public, max-age=3600",
          "Access-Control-Allow-Origin": "*",
        },
      })
    }
  } catch (_) {
    // .md fetch failed — fall through to HTML
  }

  return next()
}
