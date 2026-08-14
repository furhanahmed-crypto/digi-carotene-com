import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function Industries() {
  const { industries } = homeContent

  return (
    <section id="industries" className="bg-secondary py-[72px] lg:py-[140px]">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-medium tracking-[0.03em] text-muted-foreground uppercase md:text-sm">
            {industries.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-[30px] leading-[1.1] font-medium md:text-[44px]">
            {industries.headline}
          </h2>
          <p className="mt-5 text-base leading-[1.6] text-muted-foreground md:text-lg">
            {industries.body}
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {industries.items.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 30}>
              <article
                id={item.id}
                className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <h3 className="font-display text-[21px] leading-[1.2] font-medium md:col-span-4 md:text-[26px]">
                  {item.title}
                </h3>
                <p className="text-base leading-[1.6] text-muted-foreground md:col-span-8 md:text-lg">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
