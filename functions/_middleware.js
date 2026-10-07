// Duplicate hostnames that serve the same site; 301 them to the canonical domain.
// Preview deployments (<hash>.site-3wq.pages.dev, <branch>.site-3wq.pages.dev) are left alone.
const CANONICAL_HOST = "rectifyq.com"
const REDIRECT_HOSTS = new Set(["www.rectifyq.com", "site-3wq.pages.dev"])

export async function onRequest({ request, next }) {
  const requestUrl = new URL(request.url)
  if (REDIRECT_HOSTS.has(requestUrl.hostname)) {
    requestUrl.protocol = "https:"
    requestUrl.hostname = CANONICAL_HOST
    requestUrl.port = ""
    return Response.redirect(requestUrl.toString(), 301)
  }

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