import Link from "next/link"

import { MediaFrame } from "@/components/shared/media-frame"
import { getPlaceholderImage } from "@/lib/placeholder-images"

type ListingCardProps = {
  href: string
  index: number
  title: string
  body: string
}

export function ListingCard({ href, index, title, body }: ListingCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col border border-line bg-background transition-colors hover:border-carotene/40"
    >
      <MediaFrame
        src={getPlaceholderImage(index)}
        label={title}
        className="border-0 border-b"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-medium tracking-label text-muted-foreground uppercase">
          {index + 1}
        </p>
        <h3 className="font-display text-[21px] leading-title font-medium group-hover:underline group-hover:decoration-brand-yellow group-hover:underline-offset-4">
          {title}
        </h3>
        <p className="text-base leading-body text-muted-foreground">{body}</p>
      </div>
    </Link>
  )
}
