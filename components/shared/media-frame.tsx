import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { cn } from "@/lib/utils"

type MediaFrameProps = {
  /** Real or stock image URL. Omit for an empty labeled slot. */
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
  src,
  label = "Image here",
  aspect = "video",
  className,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background",
        src ? "border border-line" : "border border-dashed border-line",
        className
      )}
    >
      <span
        className="bg-carotene absolute top-0 left-0 z-10 h-full w-1"
        aria-hidden="true"
      />
      <ImagePlaceholder
        src={src}
        label={label}
        className={cn("w-full border-0", aspectClass[aspect])}
      />
    </div>
  )
}
