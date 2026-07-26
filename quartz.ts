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


ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // 1. Define the pinning conditions (checks both filename and display title)
    const aIsPinned = a.name === "start-here" || a.displayName.includes("Start Here")
    const bIsPinned = b.name === "start-here" || b.displayName.includes("Start Here")

    // If one of the nodes is the pinned page, place it at the absolute top
    if (aIsPinned && !bIsPinned) return -1
    if (!aIsPinned && bIsPinned) return 1

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
