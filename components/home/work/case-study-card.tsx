import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { getPlaceholderImage } from "@/lib/placeholder-images"

type CaseStudyCardProps = {
  index: number
  meta: string
  label: string
  summary: string
}

export function CaseStudyCard({
  index,
  meta,
  label,
  summary,
}: CaseStudyCardProps) {
  return (
    <article className="flex h-full min-h-[420px] flex-col border border-line bg-background">
      <div className="relative shrink-0 overflow-hidden">
        <span
          className="bg-carotene absolute top-0 left-0 z-10 h-full w-1"
          aria-hidden="true"
        />
        <ImagePlaceholder
          label={`Case study ${String(index + 1).padStart(2, "0")}`}
          src={getPlaceholderImage(index)}
          className="aspect-video w-full"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-line p-5">
        <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
          {meta}
        </p>
        <h3 className="font-display text-[21px] leading-[1.2] font-medium">
          {label}
        </h3>
        <p className="line-clamp-3 text-base leading-[1.6] text-muted-foreground">
          {summary}
        </p>
      </div>
    </article>
  )
}
