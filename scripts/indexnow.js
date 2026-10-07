// Notify IndexNow (Bing, and through it ChatGPT search / Copilot; also Yandex, Seznam,
// Naver) about new or updated pages. Run after a deploy is live:
//
//   node scripts/indexnow.js                 # pages whose sitemap lastmod is in the last 7 days
//   node scripts/indexnow.js --days 30       # ...last 30 days
//   node scripts/indexnow.js --all           # every URL in the live sitemap (initial submission)
//   node scripts/indexnow.js <url> [<url>…]  # specific URLs
//
// The key file content/<KEY>.txt must be live at https://rectifyq.com/<KEY>.txt.
const HOST = "rectifyq.com"
const KEY = "1179c5f1169a410fae4470ba37f62932"
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const args = process.argv.slice(2)

async function sitemapUrls({ all, days }) {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
  const urls = []
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]
    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]
    if (!loc) continue
    if (all || (lastmod && new Date(lastmod).getTime() >= cutoff)) urls.push(loc)
  }
  return urls
}

const keyCheck = await fetch(KEY_LOCATION)
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  console.error(`❌ Key file not live at ${KEY_LOCATION}. Deploy first.`)
  process.exit(1)
}

const explicit = args.filter((a) => a.startsWith("http"))
const daysIdx = args.indexOf("--days")
const urlList = explicit.length
  ? explicit
  : await sitemapUrls({ all: args.includes("--all"), days: daysIdx >= 0 ? Number(args[daysIdx + 1]) : 7 })

if (urlList.length === 0) {
  console.log("Nothing to submit.")
  process.exit(0)
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
})
// 200 = submitted, 202 = accepted (key validation pending); 403 = bad key; 422 = URL/host mismatch
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URL(s)`)
if (res.status >= 300) {
  console.error(await res.text())
  process.exit(1)
}
