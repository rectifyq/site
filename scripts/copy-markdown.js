import { cpSync, existsSync, readFileSync } from "fs"

// Draft pages are excluded from the HTML build; don't publish their raw Markdown either
const isDraft = (path) => {
  const fm = readFileSync(path, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/)
  return fm !== null && /^draft:\s*true\s*$/m.test(fm[1])
}

const contentDir = "content"
const outputDir = "public"

if (!existsSync(contentDir)) {
  console.error("❌ content/ not found — run from repo root")
  process.exit(1)
}

if (!existsSync(outputDir)) {
  console.error("❌ public/ not found — run after quartz build")
  process.exit(1)
}

cpSync(contentDir, outputDir, {
  recursive: true,
  filter: (src) => (src.endsWith(".md") && !isDraft(src)) || !src.includes("."),
  force: false,
  errorOnExist: false,
})

console.log("✅ Markdown source copied to public/")

await import("./seo-postbuild.js")