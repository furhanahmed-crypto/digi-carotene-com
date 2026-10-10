import type { Metadata } from "next"

import { OpenGrowthAuditButton } from "@/components/growth-audit/open-growth-audit-button"
import { IndustryFaqSection } from "@/components/inner/industry-faq-section"
import {
  InfoCardGrid,
  OutlineSection,
  PlaceholderBlock,
} from "@/components/inner/outline-section"
import { PageCta } from "@/components/shared/page-cta"
import { PageHeader } from "@/components/shared/page-header"
import { industries } from "@/constants/inner/industries"
import { industryHubFaqs } from "@/constants/inner/industry-faqs"
import { bannerCtaPrimaryClassName } from "@/constants/ui/banner-cta"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/industries")

export default function IndustriesPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Digital Marketing by Industry — Strategies Built for Your Business"
        description="Industry-specific marketing for Hyderabad businesses and global brands — playbooks shaped by how each sector buys."
        mark="Industries"
        actions={
          <OpenGrowthAuditButton
            label="Get a Free Growth Audit"
            ctaLocation="industry_hub_hero"
            className={bannerCtaPrimaryClassName}
          />
        }
      />

      <OutlineSection
        tone="white"
        mark="Industries"
        eyebrow="Seven verticals"
        title="Industries We Specialise In"
      >
        <InfoCardGrid
          colorful
          columns="4"
          items={industries.map((industry) => ({
            title: industry.name,
            body: "Sector playbook with services, proof frames and FAQs.",
            href: `/industries/${industry.slug}`,
          }))}
        />
      </OutlineSection>

      <OutlineSection
        tone="cream"
        mark="Why it matters"
        eyebrow="Experience"
        title="Why Industry Experience Matters"
      >
        <PlaceholderBlock data-reveal="card">
          Generic campaigns miss how each sector buys. Clinics need compliant
          content and Maps. Restaurants need food creatives and footfall offers.
          Education needs admission seasons. We plan channels around those
          realities — not a one-size template.
        </PlaceholderBlock>
      </OutlineSection>

      <OutlineSection
        tone="white"
        mark="FAQs"
        eyebrow="Questions"
        title={industryHubFaqs.title}
        body={industryHubFaqs.body}
      >
        <IndustryFaqSection
          faq={industryHubFaqs}
          contactCtaLocation="industry_hub_faq"
        />
      </OutlineSection>

      <PageCta
        band
        mark="Next step"
        title="Ready to grow in your industry?"
        action={
          <OpenGrowthAuditButton
            label="Get a Free Growth Audit"
            ctaLocation="industry_hub_final"
            className="bg-ink text-paper hover:bg-ink/90 dark:bg-brand-yellow dark:text-ink dark:hover:bg-brand-yellow/90"
          />
        }
      />
    </div>
  )
}
