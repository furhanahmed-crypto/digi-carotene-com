import { GearMotif } from "@/components/decor/motifs"
import { Reveal } from "@/components/motion/reveal"
import { pageCreamDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { cn } from "@/lib/utils"
import type { ServiceApproachStep } from "@/types/services"

type ServiceApproachProps = {
  steps: ServiceApproachStep[]
}

/** Numbered step cards — mirrors homepage Growth Framework. */
export function ServiceApproach({ steps }: ServiceApproachProps) {
  const cols =
    steps.length <= 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4"

  return (
    <SectionLayout tone="cream" decor={pageCreamDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow" adornment={<GearMotif />}>
          Approach
        </SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
        >
          How we implement it.
        </h2>
        <p data-reveal="text" className="mt-4 max-w-2xl text-muted-foreground">
          A clear sequence from diagnosis to optimisation — not a black-box
          retainer.
        </p>

        <div
          data-reveal-group
          className={cn("mt-12 grid items-stretch gap-6", cols)}
        >
          {steps.map((step, index) => {
            const number = String(index + 1).padStart(2, "0")
            return (
              <article
                key={step.title}
                data-reveal="card"
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-[1px] md:p-7 dark:bg-secondary"
              >
                <span
                  className="pointer-events-none absolute -top-4 -right-2 font-display text-[100px] leading-none font-medium text-foreground/5"
                  aria-hidden="true"
                >
                  {number}
                </span>
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-semibold text-ink">
                  {number}
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
