import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionMarkProps = {
  children: ReactNode
  className?: string
  tone?: "ink" | "paper"
}

export function SectionMark({
  children,
  className,
  tone = "ink",
}: SectionMarkProps) {
  return (
    <div
      className={cn(
        "inline-flex max-w-full items-center gap-3 px-5 py-3 pr-8 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_100%,0_100%)]",
        tone === "ink"
          ? "bg-ink text-paper"
          : "bg-paper text-ink",
        className
      )}
    >
      <span className="bg-carotene h-5 w-1 shrink-0" aria-hidden="true" />
      <span className="font-display text-[15px] leading-none font-medium tracking-[0.06em] uppercase md:text-[16px]">
        {children}
      </span>
    </div>
  )
}
