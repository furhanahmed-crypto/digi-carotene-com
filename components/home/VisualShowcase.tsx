import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"

import { VisualBentoGrid } from "./visual-showcase/visual-bento-grid"

export function VisualShowcase() {
  const { visualShowcase } = homeContent

  return (
    <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
      <Container>
        <Reveal>
          <SectionMark>{visualShowcase.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow="Campaign & activation"
            title={visualShowcase.headline}
            body={visualShowcase.body}
          />
        </Reveal>

        <VisualBentoGrid />
      </Container>
    </section>
  )
}
