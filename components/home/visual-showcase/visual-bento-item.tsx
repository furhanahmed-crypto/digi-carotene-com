import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { cn } from "@/lib/utils"

type VisualBentoItemProps = {
  label: string
  layout: "hero" | "wide" | "square" | "tall" | "banner"
  src: string
}

const layoutClasses: Record<VisualBentoItemProps["layout"], string> = {
  hero: "col-span-12 row-span-2 md:col-span-7",
  wide: "col-span-6 md:col-span-5",
  square: "col-span-6 md:col-span-5",
  tall: "col-span-12 md:col-span-4",
  banner: "col-span-12 md:col-span-8",
}

export function VisualBentoItem({ label, layout, src }: VisualBentoItemProps) {
  return (
    <ImagePlaceholder
      label={label}
      src={src}
      className={cn("h-full min-h-[140px] w-full", layoutClasses[layout])}
    />
  )
}
