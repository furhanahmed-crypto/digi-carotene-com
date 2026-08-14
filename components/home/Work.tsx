import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function Work() {
  const { work } = homeContent

  return (
    <section id="work" className="py-[72px] lg:py-[140px]">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-medium tracking-[0.03em] text-muted-foreground uppercase md:text-sm">
            {work.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-[30px] leading-[1.1] font-medium md:text-[44px]">
            {work.headline}
          </h2>
          <p className="mt-5 text-base leading-[1.6] text-muted-foreground md:text-lg">
            {work.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {work.placeholders.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 50}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border">
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <div className="h-full w-full origin-center bg-secondary transition-transform duration-200 hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <p className="text-[13px] font-medium tracking-[0.03em] text-muted-foreground uppercase">
                    {item.meta}
                  </p>
                  <h3 className="font-display text-[21px] leading-[1.2] font-medium">
                    {item.label}
                  </h3>
                  <p className="text-base leading-[1.6] text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
