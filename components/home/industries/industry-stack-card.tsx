import * as React from "react"
import Link from "next/link"

import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getPlaceholderImage } from "@/lib/placeholder-images"

type IndustryStackCardProps = {
  index: number
  title: string
  body: string
  detail: string
  imageLabel: string
  knowMoreLabel: string
  knowMoreHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  zIndex: number
}

export const IndustryStackCard = React.forwardRef<
  HTMLElement,
  IndustryStackCardProps
>(function IndustryStackCard(
  {
    index,
    title,
    body,
    detail,
    imageLabel,
    knowMoreLabel,
    knowMoreHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    zIndex,
  },
  ref
) {
  const imageOnLeft = index % 2 === 0

  return (
    <article
      ref={ref}
      className={cn(
        "industry-stack-card absolute top-[42%] left-1/2 flex h-[68vh] w-[calc(100%-2.5rem)] max-w-[1280px] flex-col-reverse gap-5 overflow-hidden border border-line bg-background p-5 shadow-xl will-change-transform md:h-[540px] md:w-[calc(100%-4rem)] md:flex-row md:gap-8 md:p-8 lg:w-[calc(100%-6rem)] lg:p-10 xl:w-[calc(100%-12rem)]",
        imageOnLeft && "md:flex-row-reverse"
      )}
      style={{
        zIndex,
        transformOrigin: "bottom center",
      }}
    >
      <span
        className="bg-carotene absolute top-0 left-0 h-full w-1"
        aria-hidden="true"
      />
      <div className="flex min-h-0 flex-1 flex-col gap-4 md:gap-5">
        <p className="text-carotene shrink-0 text-[12px] font-medium tracking-[0.08em] uppercase">
          {String(index + 1).padStart(2, "0")} · Vertical
        </p>
        <div className="min-h-0 space-y-3 overflow-hidden md:space-y-4">
          <h3 className="font-display text-[22px] leading-[1.15] font-medium md:text-[30px] lg:text-[34px]">
            {title}
          </h3>
          <p className="text-sm leading-[1.65] text-muted-foreground md:text-base">
            {body}
          </p>
          <p className="text-sm leading-[1.65] text-muted-foreground md:text-[15px]">
            {detail}
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            nativeButton={false}
            render={<Link href={knowMoreHref} />}
            size="lg"
          >
            {knowMoreLabel}
          </Button>
          <Button
            nativeButton={false}
            render={<Link href={secondaryCtaHref} />}
            variant="outline"
            size="lg"
          >
            {secondaryCtaLabel}
          </Button>
        </div>
      </div>

      <div className="relative h-[170px] shrink-0 overflow-hidden md:h-full md:min-h-0 md:flex-1">
        <ImagePlaceholder
          label={imageLabel}
          src={getPlaceholderImage(index)}
          fill
        />
      </div>
    </article>
  )
})
