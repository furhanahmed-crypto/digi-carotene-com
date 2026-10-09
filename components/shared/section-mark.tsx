import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionMarkProps = {
  children: ReactNode
  className?: string
  tone?: "carotene" | "paper"
  /** Motif or mark sitting immediately to the right of the yellow badge. */
  adornment?: ReactNode
  wrapClassName?: string
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">

export function SectionMark({
  children,
  className,
  tone = "carotene",
  adornment,
  wrapClassName,
  ...rest
}: SectionMarkProps) {
  const mark = (
    <div
      className={cn(
        "inline-flex max-w-full items-center gap-3 px-5 py-3 pr-8 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_100%,0_100%)]",
        tone === "carotene"
          ? "bg-brand-yellow text-on-yellow"
          : "bg-paper text-on-yellow dark:bg-secondary dark:text-paper",
        className
      )}
      {...rest}
    >
      <span
        className={cn(
          "h-5 w-1 shrink-0",
          tone === "carotene" ? "bg-ink" : "bg-brand-yellow"
        )}
        aria-hidden="true"
      />
      <span className="font-display text-[15px] leading-none font-medium tracking-mark uppercase md:text-base">
        {children}
      </span>
    </div>
  )

  if (!adornment) return mark

  return (
    <div className={cn("inline-flex max-w-full items-center gap-3", wrapClassName)}>
      {mark}
      <div
        aria-hidden="true"
        className="pointer-events-none h-11 w-14 shrink-0 text-[color:var(--decor-ink)] opacity-[var(--decor-opacity,0.7)] md:h-12 md:w-16 [&_svg]:h-full [&_svg]:w-full"
      >
        {adornment}
      </div>
    </div>
  )
}
