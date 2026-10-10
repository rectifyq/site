import * as ExternalPlugin from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"


ExternalPlugin.RecentNotes({
  title: "🔴 Latest Relevant 🇲🇾 Threat Articles",
  limit: 3,
  showTags: true,
  linkToMore: false,
  hideFolderPages: true,
  filter: (f) => f.slug!.startsWith("my-threat-landscape/threats/"),
})


// These functions are serialized into the page and run in the browser:
// keep them self-contained (no references to variables outside the function).
ExternalPlugin.Explorer({
  // Explorer shows intelligence and community content only. About/legal pages are
  // linked from the footer instead (they stay in the sitemap and search).
  filterFn: (node) => {
    const footerOnly = [
      "tags",
      "about",
      "contact",
      "contribute",
      "methodology",
      "recognition",
      "privacy",
      "terms",
      "intel-program",
    ]
    return !(node.slugSegments.length === 1 && footerOnly.includes(node.slugSegment))
  },
  // Show the TIP/MISP folder under Resources (display only; URLs are unchanged)
  // and give the FAQ a short label.
  mapFn: (node) => {
    if (node.slugSegments.length === 0) {
      const tip = node.children.find((c) => c.slugSegment === "threat-intelligence-platform")
      const resources = node.children.find((c) => c.slugSegment === "resources")
      if (tip && resources) {
        node.children = node.children.filter((c) => c !== tip)
        resources.children.push(tip)
      }
    }
    if (node.slugSegment === "malaysia-cyber-threats-faq") node.displayName = "Key Facts & FAQ"
  },
  sortFn: (a, b) => {
    // 1. Pinned pages first, in this order: Start Here, then Key Facts & FAQ.
    //    (No named helper functions here: the bundler wraps them in __name(),
    //    which doesn't exist in the browser where this code runs.)
    const aRank =
      a.slugSegment === "start-here" ? 0 : a.slugSegment === "malaysia-cyber-threats-faq" ? 1 : 2
    const bRank =
      b.slugSegment === "start-here" ? 0 : b.slugSegment === "malaysia-cyber-threats-faq" ? 1 : 2
    if (aRank !== bRank) return aRank - bRank

    // 2. Default Quartz sorting: folders first, then files alphabetically
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    
    if (!a.isFolder && b.isFolder) {
      return 1
    } else {
      return -1
    }
  }
})
const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
