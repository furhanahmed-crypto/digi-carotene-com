import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"

import { VisualBentoGrid } from "./visual-showcase/visual-bento-grid"

export function VisualShowcase() {
  const { visualShowcase } = homeContent

  return (
    <section className="border-b border-border bg-brand-yellow py-16 text-ink md:py-24 dark:bg-secondary dark:text-foreground">
      <Container>
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
      </Container>
    </section>
  )
}
