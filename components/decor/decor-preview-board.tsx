"use client"

import { SectionDecor, type DecorVariant } from "@/components/decor/section-decor"

type DecorPreviewBoardProps = {
  variant: DecorVariant
}

/** Same gold recipes as SectionLayout tones (opacity baked into --decor-opacity). */
const SURFACES = [
  {
    id: "yellow",
    label: "Yellow",
    className:
      "bg-[#EEC643] text-ink [--decor-ink:#C99A12] [--decor-opacity:0.7] dark:bg-[#171717] dark:text-[#f5f5f5] dark:[--decor-ink:#E8C96A] dark:[--decor-opacity:0.34]",
  },
  {
    id: "white",
    label: "White",
    className:
      "bg-white text-foreground [--decor-ink:#E6C55C] [--decor-opacity:0.7] dark:bg-[#171717] dark:text-[#f5f5f5] dark:[--decor-ink:#E8C96A] dark:[--decor-opacity:0.38]",
  },
  {
    id: "cream",
    label: "Cream",
    className:
      "bg-[#F7F4EE] text-foreground [--decor-ink:#D9B040] [--decor-opacity:0.65] dark:bg-[#171717] dark:text-[#f5f5f5] dark:[--decor-ink:#E8C96A] dark:[--decor-opacity:0.36]",
  },
] as const

export function DecorPreviewBoard({ variant }: DecorPreviewBoardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-4 py-3">
        <p className="font-mono text-[12px] tracking-[0.04em] text-muted-foreground">
          {variant}
        </p>
      </div>
      <div className="grid grid-cols-3">
        {SURFACES.map((surface) => (
          <div
            key={surface.id}
            className={`relative h-36 overflow-hidden ${surface.className}`}
          >
            <p className="absolute top-2 left-2 z-10 text-[10px] font-medium tracking-[0.08em] uppercase opacity-50">
              {surface.label}
            </p>
            <SectionDecor
              variant={variant}
              immediate
              float={false}
              className="inset-3"
            />
          </div>
        ))}
      </div>
    </article>
  )
}
