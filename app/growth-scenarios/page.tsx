import type { Metadata } from "next"

import { ScenarioList } from "@/components/growth-scenarios/scenario-list"
import { Reveal } from "@/components/motion/reveal"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { PageCta } from "@/components/shared/page-cta"
import { PageHeader } from "@/components/shared/page-header"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { contactHref } from "@/constants/home/navigation"
import { getScenarioIndex } from "@/lib/growth-scenarios/load"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/growth-scenarios")

export default function GrowthScenariosPage() {
  const scenarios = getScenarioIndex()

  return (
    <div className="min-h-svh">
      <PageHeader
        title="Digital Marketing Growth Scenarios by Industry"
        description="Benchmark-based growth scenarios for clinics, restaurants, salons, colleges and furniture brands: the strategy, the funnel and the numbers to expect."
        mark="Growth Scenarios"
      />

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">Benchmarks</SectionMark>
          <SectionHeading
            eyebrowProps={{ "data-reveal": "eyebrow" }}
            titleProps={{ "data-reveal": "heading" }}
            bodyProps={{ "data-reveal": "text" }}
            className="mt-6"
            eyebrow="Results, not reports"
            title="Industry patterns with measurable before and after"
            body={`${scenarios.length} benchmark scenarios across healthcare, restaurants, salons, education and furniture — each with objectives, moves, results tables and FAQs. Labelled clearly as modelled benchmarks — swap in approved client results when ready.`}
          />
          <ScenarioList items={scenarios} />
        </Reveal>

        <Reveal className="mt-16">
          <div data-reveal="cta">
            <PageCta
              title="Want results like these for your brand?"
              label="Get a Free Growth Audit"
              href={contactHref}
            />
          </div>
        </Reveal>
      </SectionLayout>
    </div>
  )
}
