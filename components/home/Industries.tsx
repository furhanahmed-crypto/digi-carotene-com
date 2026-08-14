import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"

export function Industries() {
  const { industries } = homeContent

  return (
    <section id="industries" className="border-t border-border bg-secondary py-[72px] lg:py-[140px]">
      <Container>
        <Reveal>
          <SectionMark>{industries.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow="Verticals"
            title={industries.headline}
            body={industries.body}
          />
        </Reveal>

        <ul className="mt-14 border-t border-line">
          {industries.items.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 30}>
              <li
                id={item.id}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <div className="md:col-span-4">
                  <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base leading-[1.6] text-muted-foreground md:col-span-8 md:text-lg">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
