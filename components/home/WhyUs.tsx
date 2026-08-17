import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"

import { WhyUsList } from "./why-us/why-us-list"

export function WhyUs() {
  const { whyUs } = homeContent

  return (
    <section id="why" className="border-t border-border bg-background py-[72px] lg:py-[140px]">
      <Container>
        <Reveal>
          <SectionMark>{whyUs.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow="Search · Activations · Voice"
            title={whyUs.headline}
          />
        </Reveal>

        <WhyUsList />
      </Container>
    </section>
  )
}
