import { visualShowcaseDecor } from "@/components/home/section-decors"
import { homeContent } from "@/lib/home-content"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

import { VisualBentoGrid } from "./visual-showcase/visual-bento-grid"

export function VisualShowcase() {
  const { visualShowcase } = homeContent

  return (
    <SectionLayout tone="yellow" decor={visualShowcaseDecor}>
      <Reveal>
        <SectionMark tone="paper" data-reveal="eyebrow">
          {visualShowcase.eyebrow}
        </SectionMark>
        <SectionHeading
          className="mt-6"
          eyebrow="Campaign & activation"
          title={visualShowcase.headline}
          body={visualShowcase.body}
          titleProps={{ "data-reveal": "heading" }}
          bodyProps={{ "data-reveal": "text" }}
        />
        <VisualBentoGrid />
      </Reveal>
    </SectionLayout>
  )
}
