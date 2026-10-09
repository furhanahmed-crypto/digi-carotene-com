import type { MouseEvent } from "react"
import Link from "next/link"

import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"

type CapabilityItem = {
  label: string
  body: string
  href: string
}

type CapabilityPillarProps = {
  id: string
  title: string
  summary: string
  image: string
  items: readonly CapabilityItem[]
  knowMoreLabel: string
  onEnter: (src: string, event: MouseEvent) => void
  onMove: (event: MouseEvent) => void
  onLeave: () => void
  articleRef: (node: HTMLElement | null) => void
}

export function CapabilityPillar({
  id,
  title,
  summary,
  image,
  items,
  knowMoreLabel,
  onEnter,
  onMove,
  onLeave,
  articleRef,
}: CapabilityPillarProps) {
  return (
    <article
      id={id}
      data-pillar-id={id}
      ref={articleRef}
      className="relative scroll-mt-30"
      onMouseEnter={(event) => onEnter(image, event)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="-mx-1 py-3 lg:sticky lg:top-17.5 lg:z-10 lg:mx-0 lg:bg-background/95 lg:backdrop-blur-md">
        <SectionMark>{title}</SectionMark>
      </div>
      <p className="mt-6 max-w-2xl text-base leading-body text-muted-foreground md:text-lg">
        {summary}
      </p>

      <ul className="mt-8 border-t border-border">
        {items.map((item, index) => (
          <li
            key={item.label}
            className="grid gap-5 border-b border-border py-6 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:py-8"
          >
            <div className="border-carotene md:col-span-4 md:border-l-2 md:pl-6">
              <p className="text-xs font-medium tracking-label text-muted-foreground uppercase">
                {index + 1}
              </p>
              <p className="mt-1 text-[13px] font-medium tracking-caption text-foreground uppercase md:text-sm">
                {item.label}
              </p>
            </div>
            <div className="flex flex-col gap-5 md:col-span-8">
              <p className="text-base leading-body text-muted-foreground">
                {item.body}
              </p>
              <Button
                nativeButton={false}
                render={<Link href={item.href} />}
                size="sm"
                className="w-fit"
              >
                {knowMoreLabel}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
