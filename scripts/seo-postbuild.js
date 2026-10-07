// Post-build SEO fixes, run after `quartz build` (called from copy-markdown.js).
//  1. sitemap.xml: drop <lastmod> on generated tag pages (they have no real date,
//     so Quartz stamps them with the build time).
//  2. index.xml: rebuild the RSS feed from dated intelligence items (threat
//     entries, Radar, Breach/Vulnerability Watch, ICS/OT, Tanya) using their
//     frontmatter dates, instead of tag pages stamped with the build time.
import { existsSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"

const SITE = "https://rectifyq.com"
const contentDir = "content"
const outputDir = "public"
const RSS_LIMIT = 30
const FEED_SECTIONS = [
  "my-threat-landscape/threats/",
  "my-threat-landscape/radar/",
  "my-threat-landscape/breaches/",
  "my-threat-landscape/vulnerabilities/",
  "ics-ot/threats/",
  "tanya-rectifyq/",
]

const escapeXml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

function frontmatter(md) {
  const m = md.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = {}
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_-]+):\s*(.*)$/)
    if (kv) fm[kv[1]] = kv[2].trim().replace(/^"(.*)"$/, "$1").replace(/\\"/g, '"')
  }
  return fm
}

// 1. Sitemap
const sitemapPath = join(outputDir, "sitemap.xml")
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, "utf8")
  const fixed = sitemap.replace(
    /(<url>\s*<loc>[^<]*\/tags\/[^<]*<\/loc>)\s*<lastmod>[^<]*<\/lastmod>/g,
    "$1",
  )
  writeFileSync(sitemapPath, fixed)
}

// 2. RSS
const indexPath = join(outputDir, "static", "contentIndex.json")
if (existsSync(indexPath)) {
  const index = JSON.parse(readFileSync(indexPath, "utf8"))
  const items = []
  for (const entry of Object.values(index)) {
    const fp = entry.filePath ?? ""
    if (!FEED_SECTIONS.some((s) => fp.startsWith(s)) || fp.endsWith("index.md")) continue
    const src = join(contentDir, fp)
    if (!existsSync(src)) continue
    const fm = frontmatter(readFileSync(src, "utf8"))
    const date = new Date(fm.date)
    if (isNaN(date.getTime())) continue
    items.push({
      title: fm.title || entry.title,
      url: `${SITE}/${encodeURI(entry.slug)}`,
      date,
      description: fm.description || "",
      section: fp.split("/").slice(0, -1).join("/"),
    })
  }
  items.sort((a, b) => b.date - a.date)
  const now = new Date().toUTCString()
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rectifyq: Threat Intelligence focusing on Malaysia</title>
    <link>${SITE}/</link>
    <atom:link href="${SITE}/index.xml" rel="self" type="application/rss+xml" />
    <description>Latest Malaysian threat intelligence from Rectifyq: threat entries, ransomware and data-breach claims, and the monthly Rectifyq Radar.</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
${items
  .slice(0, RSS_LIMIT)
  .map(
    (i) => `    <item>
      <title>${escapeXml(i.title)}</title>
      <link>${i.url}</link>
      <guid isPermaLink="true">${i.url}</guid>
      <pubDate>${i.date.toUTCString()}</pubDate>
      <category>${escapeXml(i.section)}</category>
      <description>${escapeXml(i.description)}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`
  writeFileSync(join(outputDir, "index.xml"), rss)
  console.log(`✅ SEO post-build: sitemap tag dates removed, RSS rebuilt (${Math.min(items.length, RSS_LIMIT)} items)`)
}
