import { cn } from "@/lib/utils"

export type ProgressStep = {
  label: string
  title: string
  body: string
}

type ProgressStepsProps = {
  steps: readonly ProgressStep[]
  /** Desktop column count for the horizontal progress row. */
  columns: 4 | 6
}

/**
 * Horizontal progress timeline: label above the line, dot on the rail,
 * title + body below. Last step’s dot is filled yellow.
 */
export function ProgressSteps({ steps, columns }: ProgressStepsProps) {
  return (
    <ol
      data-reveal-group
      className={cn(
        "relative mt-12 grid gap-10 sm:grid-cols-2",
        columns === 4 && "lg:grid-cols-4 lg:gap-6",
        columns === 6 && "lg:grid-cols-3 xl:grid-cols-6 xl:gap-4"
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-0 left-0 hidden h-px bg-ink/15 dark:bg-foreground/20",
          /* Align with vertical center of the dots (below the stage labels). */
          "top-[2.15rem]",
          columns === 4 ? "lg:block" : "xl:block"
        )}
      />
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        return (
          <li key={step.title} data-reveal="card" className="relative min-w-0">
            <span className="block text-xs font-medium tracking-label text-brand-yellow uppercase">
              {step.label}
            </span>
            <span
              className={cn(
                "relative z-10 mt-3 mb-4 flex size-3.5 items-center justify-center rounded-full border-2",
                isLast
                  ? "border-brand-yellow bg-brand-yellow"
                  : "border-ink/25 bg-background dark:border-foreground/30 dark:bg-background"
              )}
              aria-hidden
            />
            <h3 className="font-display text-lg font-medium leading-title">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-body text-muted-foreground">
              {step.body}
            </p>
          </li>
        )
      })}
    </ol>
  )
}
