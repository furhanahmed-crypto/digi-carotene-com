import { cn } from "@/lib/utils"

type FaqQuestionMarkProps = {
  className?: string
}

/** Decorative FAQ mark — yellow fill, ink stroke, agency-scale presence. */
export function FaqQuestionMark({ className }: FaqQuestionMarkProps) {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
    >
      <circle
        cx="120"
        cy="128"
        r="108"
        className="fill-brand-yellow/35 dark:fill-brand-yellow/20"
      />
      <circle
        cx="120"
        cy="128"
        r="88"
        className="stroke-brand-yellow fill-brand-yellow"
        strokeWidth="3"
      />
      <path
        d="M96 104c0-18 12-32 30-32s30 12 30 28c0 14-8 22-18 28-12 8-18 14-18 28v6"
        className="stroke-ink"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="138" cy="188" r="9" className="fill-ink" />
    </svg>
  )
}
