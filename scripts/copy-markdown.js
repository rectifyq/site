import { cpSync, existsSync } from "fs"

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
  filter: (src) => src.endsWith(".md") || !src.includes("."),
  force: false,
  errorOnExist: false,
})

console.log("✅ Markdown source copied to public/")