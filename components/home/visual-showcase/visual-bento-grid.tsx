import { homeContent } from "@/lib/home-content"
import { getPlaceholderImage } from "@/lib/placeholder-images"

import { VisualBentoItem } from "./visual-bento-item"

export function VisualBentoGrid() {
  const { items } = homeContent.visualShowcase

  return (
    <div className="mt-14 grid auto-rows-[minmax(140px,1fr)] grid-cols-12 gap-2 md:auto-rows-[160px]">
      {items.map((item, index) => (
        <VisualBentoItem
          key={item.id}
          label={item.label}
          layout={item.layout}
          src={getPlaceholderImage(index)}
        />
      ))}
    </div>
  )
}
