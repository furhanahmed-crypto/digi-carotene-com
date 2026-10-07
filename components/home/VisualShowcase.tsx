import { homeContent } from "@/lib/home-content"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

import { VisualBentoGrid } from "./visual-showcase/visual-bento-grid"

export function VisualShowcase() {
  const { visualShowcase } = homeContent

  return (
    <SectionLayout tone="yellow">
      <Reveal>
        <SectionMark tone="paper">{visualShowcase.eyebrow}</SectionMark>
        <SectionHeading
          className="mt-6"
          eyebrow="Campaign & activation"
          title={visualShowcase.headline}
          body={visualShowcase.body}
        />
      </Reveal>

      <VisualBentoGrid />
    </SectionLayout>
  )
}
