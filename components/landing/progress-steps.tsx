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
 * Progress timeline: vertical rail + dots on mobile; horizontal rail on
 * desktop (lg for 4 steps, xl for 6). Last step’s dot is filled yellow.
 */
export function ProgressSteps({ steps, columns }: ProgressStepsProps) {
  const desktopPl = columns === 4 ? "lg:pl-0" : "xl:pl-0"
  const desktopDotFlow =
    columns === 4
      ? "lg:relative lg:top-auto lg:left-auto lg:mt-3 lg:mb-4"
      : "xl:relative xl:top-auto xl:left-auto xl:mt-3 xl:mb-4"
  const showVerticalUntil = columns === 4 ? "lg:hidden" : "xl:hidden"
  const showHorizontalFrom = columns === 4 ? "lg:block" : "xl:block"

  return (
    <ol
      data-reveal-group
      className={cn(
        "relative mt-12 grid gap-10",
        columns === 4 && "lg:grid-cols-4 lg:gap-6",
        /* Stay single-column (vertical rail) until xl, then one horizontal row. */
        columns === 6 && "xl:grid-cols-6 xl:gap-4"
      )}
    >
      {/* Mobile / tablet vertical rail — centered on the step dots. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-1.5 bottom-1.5 w-px bg-ink/20 dark:bg-foreground/25",
          "left-[6px]",
          showVerticalUntil
        )}
      />
      {/* Desktop horizontal rail — aligns with the dots under the stage labels. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-0 left-0 hidden h-px bg-ink/15 dark:bg-foreground/20",
          "top-[2.15rem]",
          showHorizontalFrom
        )}
      />
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        return (
          <li
            key={step.title}
            data-reveal="card"
            className={cn("relative min-w-0 pl-8", desktopPl)}
          >
            <span className="block text-xs font-medium tracking-label text-brand-yellow uppercase">
              {step.label}
            </span>
            <span
              className={cn(
                "z-10 flex size-3.5 items-center justify-center rounded-full border-2",
                "absolute top-1 left-0",
                desktopDotFlow,
                isLast
                  ? "border-brand-yellow bg-brand-yellow"
                  : "border-ink/25 bg-background dark:border-foreground/30 dark:bg-background"
              )}
              aria-hidden
            />
            <h3
              className={cn(
                "mt-1.5 font-display text-lg font-medium leading-title",
                columns === 4 ? "lg:mt-0" : "xl:mt-0"
              )}
            >
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
