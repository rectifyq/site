import * as ExternalPlugin from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"


ExternalPlugin.RecentNotes({
  title: "🔴 Latest Relevant 🇲🇾 Threat Articles",
  limit: 3,
  showTags: true,
  linkToMore: false,
  hideFolderPages: true,
  filter: (f) => f.slug!.startsWith("my-threat-landscape/threat-lists/"),
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
