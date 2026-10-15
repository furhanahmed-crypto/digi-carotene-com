import type { Metadata } from "next"

import { WebsiteDevelopmentLanding } from "@/components/landing/website-development-landing"
import {
  WEBSITE_DEV_HYD_PATH,
  websiteDevHydMeta,
} from "@/constants/landing/website-development-hyderabad"
import { buildWebsiteDevHydJsonLd } from "@/lib/landing/website-development-json-ld"

export const metadata: Metadata = {
  title: { absolute: websiteDevHydMeta.title },
  description: websiteDevHydMeta.description,
  alternates: { canonical: WEBSITE_DEV_HYD_PATH },
  openGraph: {
    title: websiteDevHydMeta.title,
    description: websiteDevHydMeta.ogDescription,
    url: WEBSITE_DEV_HYD_PATH,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: websiteDevHydMeta.title,
    description: websiteDevHydMeta.ogDescription,
  },
}

export default function WebsiteDevelopmentCompanyHyderabadPage() {
  const jsonLd = buildWebsiteDevHydJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebsiteDevelopmentLanding />
    </>
  )
}
