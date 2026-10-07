import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function GrowthFramework() {
  const { framework } = homeSections

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
            {framework.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]">
            {framework.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{framework.body}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {framework.steps.map((step) => (
            <Reveal key={step.number}>
              <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm md:p-7 dark:bg-secondary">
                <span
                  className="pointer-events-none absolute -top-4 -right-2 font-display text-[100px] leading-none font-medium text-foreground/5"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-yellow text-sm font-semibold text-ink">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-[11px] font-medium tracking-[0.04em] text-muted-foreground uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
