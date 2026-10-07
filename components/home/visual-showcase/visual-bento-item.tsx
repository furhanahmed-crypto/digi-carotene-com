import type { ComponentPropsWithoutRef } from "react"

import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { cn } from "@/lib/utils"

type VisualBentoItemProps = {
  label: string
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
  label,
  layout,
  src,
  className,
  ...rest
}: VisualBentoItemProps) {
  return (
    <ImagePlaceholder
      label={label}
      src={src}
      className={cn("w-full", layoutClasses[layout], className)}
      {...rest}
    />
  )
}
