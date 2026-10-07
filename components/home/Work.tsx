import { workDecor } from "@/components/home/section-decors"
import { homeContent } from "@/lib/home-content"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

import { CaseStudiesCarousel } from "./work/case-studies-carousel"

export function Work() {
  const { work } = homeContent

  return (
    <SectionLayout id="work" tone="white" decor={workDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">{work.eyebrow}</SectionMark>
        <SectionHeading
          className="mt-6"
          eyebrow="Case studies"
          title={work.headline}
          body={work.body}
          titleProps={{ "data-reveal": "heading" }}
          bodyProps={{ "data-reveal": "text" }}
        />
        <CaseStudiesCarousel items={work.placeholders} />
      </Reveal>
    </SectionLayout>
  )
}
