import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"

import { IndustryCardStack } from "./industries/industry-card-stack"

export function Industries() {
  const { industries } = homeContent

  return (
    <section id="industries" className="border-t border-border bg-secondary">
      <Container className="pt-[72px] pb-6 lg:pt-[100px] lg:pb-8">
        <Reveal>
          <SectionMark data-reveal="eyebrow">{industries.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow="Verticals"
            title={industries.headline}
            body={industries.body}
            eyebrowProps={{ "data-reveal": "eyebrow" }}
            titleProps={{ "data-reveal": "heading" }}
            bodyProps={{ "data-reveal": "text" }}
          />
        </Reveal>
      </Container>

      <IndustryCardStack />
    </section>
  )
}
