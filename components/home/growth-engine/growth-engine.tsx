import { homeSections } from "@/constants/home/sections"
import { frameworkDecor } from "@/components/home/section-decors"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function GrowthEngine() {
  const { growthEngine } = homeSections

  return (
    <SectionLayout tone="cream" decor={frameworkDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">{growthEngine.eyebrow}</SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
        >
          {growthEngine.headline}
        </h2>
        <p data-reveal="text" className="mt-4 max-w-2xl text-muted-foreground">
          {growthEngine.body}
        </p>

        <ol
          data-reveal-group
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {growthEngine.stages.map((stage) => (
            <li
              key={stage.number}
              data-reveal="card"
              className="rounded-2xl border border-border bg-background/90 p-6 shadow-sm"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-yellow text-sm font-semibold text-ink">
                {stage.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stage.body}
              </p>
            </li>
          ))}
        </ol>

        <p
          data-reveal="text"
          className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          {growthEngine.footnote}
        </p>
      </Reveal>
    </SectionLayout>
  )
}
