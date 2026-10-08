import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import {
  InfoCardGrid,
  OutlineSection,
  PlaceholderBlock,
} from "@/components/inner/outline-section"
import { PageCta } from "@/components/shared/page-cta"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { industries } from "@/constants/inner/industries"
import { contactHref } from "@/constants/home/navigation"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/industries")

export default function IndustriesPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Digital Marketing by Industry — Strategies Built for Your Business"
        description="[[Intro: industry-specific marketing for Hyderabad and global brands — to confirm]]"
        breadcrumbs={[{ label: "Industries" }]}
        mark="Industries"
        actions={
          <Button
            nativeButton={false}
            render={<Link href={contactHref} />}
            size="lg"
            className="bg-ink text-paper hover:bg-ink/90 dark:bg-brand-yellow dark:text-ink dark:hover:bg-brand-yellow/90"
          >
            Talk to an Industry Specialist
            <ArrowRight className="size-4" />
          </Button>
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
            body: "[[Proof line — to confirm]]",
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
          [[Why Industry Experience Matters — copy to confirm]]
        </PlaceholderBlock>
      </OutlineSection>

      <PageCta
        band
        mark="Industry specialist"
        title="Talk to an Industry Specialist"
        label="Get a Free Growth Audit"
        href={contactHref}
      />
    </div>
  )
}
