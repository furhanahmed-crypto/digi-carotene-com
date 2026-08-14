import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function Approach() {
  const { approach } = homeContent

  return (
    <section id="approach" className="bg-secondary py-[72px] lg:py-[140px]">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-medium tracking-[0.03em] text-muted-foreground uppercase md:text-sm">
            {approach.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-[30px] leading-[1.1] font-medium md:text-[44px]">
            {approach.headline}
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {approach.steps.map((step, index) => (
            <Reveal key={step.number} delayMs={index * 50}>
              <li>
                <p className="font-display text-lg text-muted-foreground">
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
    </section>
  )
}
