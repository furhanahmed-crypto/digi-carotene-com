import * as React from "react"

import { ImagePlaceholder } from "@/components/shared/image-placeholder"

type IndustryStackCardProps = {
  index: number
  title: string
  body: string
  detail: string
  imageLabel: string
  zIndex: number
}

export const IndustryStackCard = React.forwardRef<
  HTMLElement,
  IndustryStackCardProps
>(function IndustryStackCard(
  { index, title, body, detail, imageLabel, zIndex },
  ref
) {
  return (
    <article
      ref={ref}
      className="industry-stack-card absolute top-[42%] left-1/2 flex h-[62vh] w-[calc(100%-2.5rem)] max-w-[1280px] flex-col-reverse gap-5 border border-line bg-background p-5 shadow-xl will-change-transform md:h-[500px] md:w-[calc(100%-4rem)] md:flex-row md:gap-8 md:p-8 lg:w-[calc(100%-6rem)] lg:p-10 xl:w-[calc(100%-12rem)]"
      style={{
        zIndex,
        transformOrigin: "bottom center",
      }}
    >
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
      </div>

      <div className="relative h-[170px] shrink-0 overflow-hidden md:h-full md:min-h-0 md:flex-1">
        <ImagePlaceholder label={imageLabel} fill />
      </div>
    </article>
  )
})
