import { homeContent } from "@/lib/home-content"
import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/motion/reveal"
import { CaseStudyCard } from "@/components/home/work/case-study-card"
import { contactHref } from "@/constants/home/navigation"
import type { Metadata } from "next"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/case-studies")


export default function CaseStudiesPage() {
  const { work } = homeContent

  return (
    <div className="min-h-svh">
      <PageHeader
        title="Proof, Not Promises: Real Results From Real Clients"
        description="Every agency says it delivers results. We would rather show you. These case studies share what our clients were facing, what we did and what changed, in numbers. Until confirmed, cards stay explicitly marked as to-confirm."
        breadcrumbs={[{ label: "Resources" }, { label: "Case Studies" }]}
        mark="Case Studies"
      />

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <div>
          <Reveal>
            <SectionMark data-reveal="eyebrow">{work.eyebrow}</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Results, not reports"
              title={work.headline}
              body={work.body}
            />

            <div
              data-reveal-group
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {work.placeholders.map((study, index) => (
                <div key={study.id} data-reveal="card">
                  <CaseStudyCard
                    index={index}
                    meta={study.meta}
                    label={study.label}
                    summary={study.summary}
                  />
                </div>
              ))}
            </div>
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
        </div>
      </SectionLayout>
    </div>
  )
}
