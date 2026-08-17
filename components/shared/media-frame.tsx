import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { getPlaceholderImage } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

type MediaFrameProps = {
  index?: number
  src?: string
  label?: string
  aspect?: "video" | "square" | "photo"
  className?: string
}

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  photo: "aspect-[4/3]",
}

export function MediaFrame({
  index = 0,
  src,
  label = "Image here",
  aspect = "video",
  className,
}: MediaFrameProps) {
  return (
    <div className={cn("relative overflow-hidden border border-line bg-background", className)}>
      <span
        className="bg-carotene absolute top-0 left-0 z-10 h-full w-1"
        aria-hidden="true"
      />
      <ImagePlaceholder
        src={src ?? getPlaceholderImage(index)}
        label={label}
        className={cn("w-full", aspectClass[aspect])}
      />
    </div>
  )
}
