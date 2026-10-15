import type { Metadata } from "next"

import { DigitalMarketingAgencyLanding } from "@/components/landing/digital-marketing-agency-landing"
import {
  DM_HYD_PATH,
  dmHydMeta,
} from "@/constants/landing/digital-marketing-hyderabad"
import { buildDigitalMarketingHydJsonLd } from "@/lib/landing/digital-marketing-json-ld"

export const metadata: Metadata = {
  title: { absolute: dmHydMeta.title },
  description: dmHydMeta.description,
  alternates: { canonical: DM_HYD_PATH },
  openGraph: {
    title: dmHydMeta.title,
    description: dmHydMeta.ogDescription,
    url: DM_HYD_PATH,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: dmHydMeta.title,
    description: dmHydMeta.ogDescription,
  },
}

export default function DigitalMarketingCompanyHyderabadPage() {
  const jsonLd = buildDigitalMarketingHydJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigitalMarketingAgencyLanding />
    </>
  )
}
