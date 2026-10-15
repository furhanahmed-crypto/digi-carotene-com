import type { MetadataRoute } from "next"

import { pageMetaBySlug } from "@/lib/seo/page-meta"

/** Required for `output: "export"` — sitemap must be fully static. */
export const dynamic = "force-static"

const SITE = "https://digicarotene.com"

/** Static sitemap from page-meta slugs (excludes redirect aliases). */
export default function sitemap(): MetadataRoute.Sitemap {
  const skip = new Set(["/case-studies"])

  return (Object.keys(pageMetaBySlug) as (keyof typeof pageMetaBySlug)[])
    .filter((slug) => !skip.has(slug))
    .map((slug) => ({
      url: slug === "/" ? `${SITE}/` : `${SITE}${slug}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority:
        slug === "/"
          ? 1
          : slug === "/website-development-company-hyderabad" ||
              slug === "/digital-marketing-agency-in-hyderabad"
            ? 0.9
            : 0.7,
    }))
}
