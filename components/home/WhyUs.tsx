import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"

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

        <ul className="mt-14 border-t border-line">
          {whyUs.points.map((point, index) => (
            <Reveal key={point.title} delayMs={index * 40}>
              <li className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-4">
                  <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                    {point.title}
                  </h3>
                </div>
                <p className="text-base leading-[1.6] text-muted-foreground md:col-span-8 md:text-lg">
                  {point.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
