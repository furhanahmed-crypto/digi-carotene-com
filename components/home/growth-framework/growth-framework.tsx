import { frameworkDecor } from "@/components/home/section-decors"
import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function GrowthFramework() {
  const { framework } = homeSections

  return (
    <SectionLayout tone="white" decor={frameworkDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">{framework.eyebrow}</SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl min-w-0 font-display text-[26px] leading-display font-medium tracking-display break-words min-[360px]:text-[30px] sm:text-[32px] md:text-[44px]"
        >
          {framework.headline}
        </h2>
        <p data-reveal="text" className="mt-4 max-w-2xl text-muted-foreground">
          {framework.body}
        </p>

        <div
          data-reveal-group
          className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {framework.steps.map((step) => (
            <article
              key={step.number}
              data-reveal="card"
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-[1px] md:p-7 dark:bg-secondary"
            >
              <span
                className="pointer-events-none absolute -top-4 -right-2 font-display text-[100px] leading-none font-medium text-foreground/5"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-semibold text-ink">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                {step.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-[11px] font-medium tracking-soft text-muted-foreground uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
