import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function WhyUs() {
  const { whyUs } = homeContent

  return (
    <section id="why" className="py-[72px] lg:py-[140px]">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-medium tracking-[0.03em] text-muted-foreground uppercase md:text-sm">
            {whyUs.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-[30px] leading-[1.1] font-medium md:text-[44px]">
            {whyUs.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {whyUs.points.map((point, index) => (
            <Reveal
              key={point.title}
              delayMs={index * 40}
              className="bg-background p-6 md:p-8"
            >
              <h3 className="font-display text-[21px] leading-[1.2] font-medium md:text-[26px]">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-[1.6] text-muted-foreground">
                {point.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
