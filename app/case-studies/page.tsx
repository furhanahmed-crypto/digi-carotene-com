import { homeContent } from "@/lib/home-content"
import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/shared/reveal"
import { CaseStudyCard } from "@/components/home/work/case-study-card"
import { contactHref } from "@/constants/home/navigation"

export default function CaseStudiesPage() {
  const { work } = homeContent

  return (
    <div className="min-h-svh">
      <PageHeader
        title="Proof, Not Promises: Real Results From Real Clients"
        description="Every agency says it delivers results. We would rather show you. These case studies share what our clients were facing, what we did and what changed, in numbers. Until confirmed, cards stay explicitly marked as to-confirm."
        breadcrumbs={[
          { label: "Resources" },
          { label: "Case Studies" },
        ]}
        mark="Case Studies"
        imageIndex={2}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <Reveal>
            <SectionMark>{work.eyebrow}</SectionMark>
            <SectionHeading
              className="mt-6"
              eyebrow="Results, not reports"
              title={work.headline}
              body={work.body}
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {work.placeholders.map((study, index) => (
              <Reveal key={study.id} delayMs={index * 40}>
                <CaseStudyCard
                  index={index}
                  meta={study.meta}
                  label={study.label}
                  summary={study.summary}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <PageCta
              title="Want results like these for your brand?"
              label="Get a Free Growth Audit"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
