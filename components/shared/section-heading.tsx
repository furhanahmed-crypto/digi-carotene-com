import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  body?: ReactNode
  className?: string
  inverted?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  className,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p
        className={cn(
          "text-[13px] font-medium tracking-[0.03em] uppercase md:text-sm",
          inverted ? "text-white/70" : "text-muted-foreground"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display mt-4 text-[30px] leading-[1.1] font-medium md:text-[44px]",
          inverted ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 text-base leading-[1.6] md:text-lg",
            inverted ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  )
}
