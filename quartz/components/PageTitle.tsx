import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/header_icon.png")
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="Logo" src={iconPath} alt={title}/>{title}
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.45rem;
  margin: 0;
  font-family: var(--titleFont);
}
.Logo {
  max-height: 1.2rem;
  max-width: 1.2rem;
  margin: 0;
}
/* Desktop Styles */
@media all and (min-width: 800px) {
  .page-title {
    font-size: 1.75rem; /* Larger Title for Desktop */
  }

  .Logo {
    max-height: 1.75rem; /* Larger Logo for Desktop */
    max-width: 1.75rem;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
