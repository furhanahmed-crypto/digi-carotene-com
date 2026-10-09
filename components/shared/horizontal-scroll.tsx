"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type HorizontalScrollProps = {
  children: React.ReactNode
  className?: string
} & Omit<React.ComponentPropsWithoutRef<"div">, "className" | "children">

/**
 * Horizontal strip that never traps vertical page scroll (Lenis / wheel / touch).
 *
 * Do not put `data-lenis-prevent` or `touch-pan-x` alone on these rows —
 * that blocks Y scrolling while the pointer is over the strip.
 * Horizontal motion uses native overflow + trackpad deltaX / touch pan.
 */
export const HorizontalScroll = React.forwardRef<
  HTMLDivElement,
  HorizontalScrollProps
>(function HorizontalScroll({ children, className, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex min-w-0 overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]",
        // Explicit both axes so touch can scroll the page vertically over the strip
        "[touch-action:pan-x_pan-y]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
})
