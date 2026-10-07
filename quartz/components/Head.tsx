import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../../.quartz/plugins"

// Sections whose (non-index) pages are dated intelligence items → schema.org Article
const ARTICLE_SECTIONS = [
  "my-threat-landscape/threats/",
  "my-threat-landscape/radar/",
  "my-threat-landscape/breaches/",
  "my-threat-landscape/vulnerabilities/",
  "ics-ot/threats/",
  "tanya-rectifyq/",
]
const DATASET_SLUG = "my-threat-landscape/ransomware"

// Breadcrumb labels for folder segments (fallback: title-cased segment)
const SEGMENT_NAMES: Record<string, string> = {
  "my-threat-landscape": "MY Threat Landscape",
  threats: "Threat Watch",
  radar: "Rectifyq Radar",
  breaches: "Breach Watch",
  vulnerabilities: "Vulnerability Watch",
  "ics-ot": "ICS/OT Watch",
  "tanya-rectifyq": "Tanya Rectifyq",
  "intel-program": "Intelligence Program",
  resources: "Resources",
  "threat-intelligence-platform": "Threat Intelligence Platform",
}

const toDate = (value: unknown): Date | undefined => {
  if (value === undefined || value === null || value === "") return undefined
  const d = value instanceof Date ? value : new Date(String(value))
  return isNaN(d.getTime()) ? undefined : d
}

export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const defaultDescription = i18n(cfg.locale).propertyDefaults.description
    const tagName = fileData.slug?.startsWith("tags/") ? fileData.slug.slice(5) : undefined
    const rawDescription =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() || defaultDescription)
    // Generated pages (tags, folders) have no text of their own — never ship the placeholder
    const description =
      rawDescription !== defaultDescription
        ? rawDescription
        : tagName
          ? `Rectifyq threat intelligence tagged "${tagName}": Malaysia-relevant threat entries, reports and analysis.`
          : `${fileData.frontmatter?.title ?? "Rectifyq"}: Rectifyq, threat intelligence focusing on Malaysia.`

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Canonical URL: folder pages resolve to their trailing-slash URL ("index" → "/")
    const site = `https://${cfg.baseUrl}`
    const slug = fileData.slug ?? ""
    const canonicalPath =
      slug === "index" || slug === "404" ? "" : slug.endsWith("/index") ? slug.slice(0, -5) : slug
    const socialUrl = `${site}/${encodeURI(canonicalPath)}`
    const canonicalUrl = socialUrl

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`
    const pageImage = usesCustomOgImage ? `${site}/${encodeURI(slug)}-og-image.webp` : ogImageDefaultPath

    // Structured data (schema.org JSON-LD) — one graph per page
    const plainTitle = String(fileData.frontmatter?.title ?? title)
    const isArticle =
      ARTICLE_SECTIONS.some((p) => slug.startsWith(p)) && !slug.endsWith("index")
    const isDataset = slug === DATASET_SLUG
    const datePublished = toDate(fileData.frontmatter?.date) ?? fileData.dates?.created
    // Quartz parses frontmatter dates in local time; never report modified < published
    const rawModified = fileData.dates?.modified ?? datePublished
    const dateModified =
      rawModified && datePublished && rawModified < datePublished ? datePublished : rawModified
    const orgId = `${site}/#organization`
    const pageId = `${canonicalUrl}#webpage`

    const segments = canonicalPath.split("/").filter((s) => s.length > 0)
    const breadcrumb = segments.length
      ? {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
            ...segments.map((seg, i) => {
              const isLast = i === segments.length - 1
              const name = isLast
                ? plainTitle
                : (SEGMENT_NAMES[seg] ??
                  seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
              const item = isLast
                ? canonicalUrl
                : `${site}/${encodeURI(segments.slice(0, i + 1).join("/"))}/`
              return { "@type": "ListItem", position: i + 2, name, item }
            }),
          ],
        }
      : undefined

    const graph: Record<string, unknown>[] = [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Rectifyq",
        url: `${site}/`,
        logo: { "@type": "ImageObject", url: `${site}/static/icon-512.png` },
        description:
          "Independent cyber threat intelligence initiative focused on Malaysia — threat entries, ransomware and data-breach claims, threat actor profiles, and MISP feeds for Malaysian defenders.",
        areaServed: { "@type": "Country", name: "Malaysia" },
        knowsAbout: [
          "Cyber threat intelligence",
          "Ransomware",
          "Data breaches",
          "Phishing",
          "Advanced persistent threats",
          "ICS/OT security",
          "Malaysia",
        ],
        sameAs: [
          "https://github.com/rectifyq",
          "https://linkedin.com/company/rectifyq",
          "https://x.com/_rectifyq",
          "https://t.me/rectifyq",
          "https://medium.com/@rectifyq",
          "https://www.tiktok.com/@rectifyq",
          "https://www.virustotal.com/gui/user/rectifyq",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        url: `${site}/`,
        name: "Rectifyq",
        description: "Threat intelligence focusing on Malaysia",
        inLanguage: "en",
        publisher: { "@id": orgId },
      },
      {
        "@type": isArticle ? ["WebPage", "ItemPage"] : "WebPage",
        "@id": pageId,
        url: canonicalUrl,
        name: plainTitle,
        description,
        inLanguage: "en",
        isPartOf: { "@id": `${site}/#website` },
        primaryImageOfPage: { "@type": "ImageObject", url: pageImage },
        ...(breadcrumb ? { breadcrumb: { "@id": breadcrumb["@id"] } } : {}),
        ...(datePublished ? { datePublished: datePublished.toISOString() } : {}),
        ...(dateModified ? { dateModified: dateModified.toISOString() } : {}),
      },
    ]
    if (breadcrumb) graph.push(breadcrumb)
    if (isArticle) {
      graph.push({
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        headline: plainTitle.length > 110 ? plainTitle.slice(0, 107) + "..." : plainTitle,
        description,
        image: pageImage,
        mainEntityOfPage: { "@id": pageId },
        author: { "@id": orgId },
        publisher: { "@id": orgId },
        inLanguage: "en",
        ...(fileData.frontmatter?.tags?.length ? { keywords: fileData.frontmatter.tags } : {}),
        ...(datePublished ? { datePublished: datePublished.toISOString() } : {}),
        ...(dateModified ? { dateModified: dateModified.toISOString() } : {}),
      })
    }
    if (isDataset) {
      graph.push({
        "@type": "Dataset",
        "@id": `${canonicalUrl}#dataset`,
        name: "Malaysia Ransomware Tracker",
        description,
        url: canonicalUrl,
        mainEntityOfPage: { "@id": pageId },
        creator: { "@id": orgId },
        publisher: { "@id": orgId },
        isAccessibleForFree: true,
        inLanguage: "en",
        keywords: [
          "Malaysia ransomware",
          "ransomware attacks Malaysia",
          "data breach Malaysia",
          "ransomware statistics",
          "cyber threat intelligence",
        ],
        spatialCoverage: { "@type": "Place", name: "Malaysia" },
        temporalCoverage: "2018/..",
        measurementTechnique:
          "Compiled from ransomware leak-site claims and news reports; entries remain unverified claims unless the organization confirms the incident. Victim names are masked.",
        variableMeasured: [
          "Alleged ransomware claims per year",
          "Alleged ransomware claims by sector",
          "Alleged ransomware claims by threat group",
        ],
        ...(dateModified ? { dateModified: dateModified.toISOString() } : {}),
      })
    }
    const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
      /</g,
      "\\u003c",
    )

    const coreStylesheet = css[0]?.content
    const coreScript = js.find(
      (r) => r.loadTime === "beforeDOMReady" && r.contentType === "external",
    )

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Basic SEO meta tags */}
        <meta name="description" content={description} />
        <meta name="author" content="Rectifyq" />
        <meta name="generator" content="Quartz" />

        {/* Language and region */}
        <meta name="language" content={cfg.locale} />

        {/* Robots meta tag */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Additional SEO tags */}
        {fileData.frontmatter?.tags && fileData.frontmatter.tags.length > 0 && (
          <meta name="keywords" content={fileData.frontmatter.tags.join(", ")} />
        )}

        {fileData.dates?.modified && (
          <meta name="revised" content={fileData.dates.modified.toISOString()} />
        )}
        {coreStylesheet && <link rel="preload" href={coreStylesheet} as="style" />}
        {coreScript && coreScript.contentType === "external" && (
          <link rel="preload" href={coreScript.src} as="script" />
        )}
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

        <meta property="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content={isArticle ? "article" : "website"} />
        <meta property="og:locale" content="en_MY" />
        {isArticle && datePublished && (
          <meta property="article:published_time" content={datePublished.toISOString()} />
        )}
        {isArticle && dateModified && (
          <meta property="article:modified_time" content={dateModified.toISOString()} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}

                {/* Link to Web App Manifest */}
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#1e1e2e" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link rel="apple-touch-icon" href="/static/icon-192.png" />
          {/* Service Worker Registration */}
          <script dangerouslySetInnerHTML={{__html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/static/sw.js');
              });
            }
          `}} />
        <link rel="describedby" href="/llms.txt" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" href="/index.xml" />
        <link rel="api-catalog" href="/.well-known/api-catalog" />
        <link rel="agent-skills" href="/agent-skills-index.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
