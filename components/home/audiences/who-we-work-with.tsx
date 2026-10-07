import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function WhoWeWorkWith() {
  const { audiences } = homeSections

  return (
    <section className="border-b border-border bg-[#f3efe6] py-14 md:py-20 dark:bg-secondary">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
            {audiences.eyebrow}
          </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]">
              {audiences.headline}
            </h2>
            <p className="max-w-md text-sm text-muted-foreground md:text-base">
              {audiences.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.items.map((item) => (
            <Reveal key={item.id}>
              <article className="rounded-2xl border border-border bg-white p-5 dark:bg-card">
                <h3 className="font-display text-xl font-medium">{item.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
