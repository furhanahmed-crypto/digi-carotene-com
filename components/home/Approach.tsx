import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { ParallaxSection } from "@/components/shared/parallax-section"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"

export function Approach() {
  const { approach } = homeContent

  return (
    <ParallaxSection
      id="approach"
      className="border-t border-border bg-secondary py-[72px] lg:py-[140px]"
    >
      <Container>
        <Reveal>
          <SectionMark data-reveal="eyebrow">{approach.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow="Diagnose · Unify · Activate · Govern"
            title={approach.headline}
            eyebrowProps={{ "data-reveal": "eyebrow" }}
            titleProps={{ "data-reveal": "heading" }}
          />

          <ol
            data-reveal-group
            className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4"
          >
            {approach.steps.map((step) => (
              <li
                key={step.number}
                data-reveal="card"
                className="relative h-full bg-background p-6 md:p-8"
              >
                <span className="absolute top-0 left-0 h-full w-1 bg-carotene" />
                <p className="text-xs font-medium tracking-loose text-muted-foreground uppercase">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-[21px] leading-title font-medium md:text-[26px]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-body text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </ParallaxSection>
  )
}
