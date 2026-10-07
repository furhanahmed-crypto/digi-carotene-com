import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { ParallaxSection } from "@/components/shared/parallax-section"
import { Reveal } from "@/components/shared/reveal"
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
          <SectionMark>{approach.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow="Diagnose · Unify · Activate · Govern"
            title={approach.headline}
          />
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map((step, index) => (
            <Reveal
              key={step.number}
              delayMs={index * 50}
              className="bg-background"
            >
              <li className="relative h-full p-6 md:p-8">
                <span className="bg-carotene absolute top-0 left-0 h-full w-1" />
                <p className="text-[12px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                  {step.number}
                </p>
                <h3 className="font-display mt-4 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-[1.6] text-muted-foreground">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </ParallaxSection>
  )
}
