import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

type VisualBentoItemProps = {
  title: string
  body: string
  layout: "hero" | "wide" | "square" | "tall" | "banner"
  src: string
} & Omit<ComponentPropsWithoutRef<"div">, "children">

const layoutClasses: Record<VisualBentoItemProps["layout"], string> = {
  hero: "col-span-12 row-span-2 min-h-[280px] md:col-span-7 md:min-h-0",
  wide: "col-span-6 min-h-[140px] md:col-span-5 md:min-h-[160px]",
  square: "col-span-6 min-h-[140px] md:col-span-5 md:min-h-[160px]",
  /** Last-row tiles — 16:9 so they read a bit taller than the old short strip. */
  tall: "col-span-12 aspect-video md:col-span-4",
  banner: "col-span-12 aspect-video md:col-span-8",
}

export function VisualBentoItem({
  title,
  body,
  layout,
  src,
  className,
  ...rest
}: VisualBentoItemProps) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden border border-line bg-secondary/40",
        layoutClasses[layout],
        className
      )}
      {...rest}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- local showcase assets */}
      <img
        src={src}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.1] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      {/* Starts at top: 100% (below the card); hover slides it up with translateY(-100%). */}
      <div
        className="absolute top-full left-0 w-full px-4 pt-14 pb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-full motion-reduce:transition-none md:px-5 md:pt-16 md:pb-5"
        style={{
          background:
            "linear-gradient(to top, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.78) 28%, rgba(17,17,17,0.42) 58%, rgba(17,17,17,0.12) 82%, rgba(17,17,17,0) 100%)",
        }}
      >
        <h3 className="font-display text-[18px] leading-snug font-medium text-paper md:text-[22px]">
          {title}
        </h3>
        <p className="mt-1.5 max-w-prose text-[13px] leading-relaxed text-paper/80 md:text-sm">
          {body}
        </p>
      </div>
    </div>
  )
}
