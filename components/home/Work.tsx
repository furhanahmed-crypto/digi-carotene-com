import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"

export function Work() {
  const { work } = homeContent

  return (
    <section id="work" className="border-t border-border bg-background py-[72px] lg:py-[140px]">
      <Container>
        <Reveal>
          <SectionMark>{work.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow="Case studies"
            title={work.headline}
            body={work.body}
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {work.placeholders.map((item, index) => (
            <Reveal
              key={item.id}
              delayMs={index * 50}
              className="bg-background"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-[16/10] bg-secondary">
                  <span className="bg-carotene absolute top-0 left-0 h-full w-1" />
                  <p className="font-display text-ink-muted absolute inset-0 flex items-center justify-center text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-3 border-t border-line p-5">
                  <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
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
