import { homeContent } from "@/lib/home-content"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

import { CaseStudiesCarousel } from "./work/case-studies-carousel"

export function Work() {
  const { work } = homeContent

  return (
    <SectionLayout id="work" tone="white">
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
    </SectionLayout>
  )
}
