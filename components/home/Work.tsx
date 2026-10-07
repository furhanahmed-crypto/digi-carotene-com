import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"

import { CaseStudiesCarousel } from "./work/case-studies-carousel"

export function Work() {
  const { work } = homeContent

  return (
    <section
      id="work"
      className="border-b border-border bg-background py-16 md:py-24"
    >
      <Container>
        <Reveal>
          <SectionMark>{work.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow="Case studies"
            title={work.headline}
            body={work.body}
          />
        </Reveal>

        <CaseStudiesCarousel items={work.placeholders} />
      </Container>
    </section>
  )
}
