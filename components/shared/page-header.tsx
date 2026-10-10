import type { ReactNode } from "react"

import { Reveal } from "@/components/motion/reveal"
import { pageHeaderDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
  /** Page H1. Omit on article pages that render their own H1 in the body. */
  title?: string
  description?: string
  /** SectionMark label — paper tone on the accent banner. */
  mark?: string
  /** Optional motif to the right of the SectionMark. */
  adornment?: ReactNode
  /** CTA row under the description (homepage hero language). */
  actions?: ReactNode
  /** Background line-art — defaults to pageHeaderDecor. */
  decor?: ReactNode
  className?: string
  /** Compact band (mark + optional description) — no hero title. */
  size?: "hero" | "banner"
  /** @deprecated Image backdrops removed — ignored. */
  imageIndex?: number
}

/**
 * Inner-page banner — accent `SectionLayout` band (homepage language).
 * No breadcrumbs, photo backdrops, or glass cards.
 */
export function PageHeader({
  title,
  description,
  mark = "Overview",
  adornment,
  actions,
  decor = pageHeaderDecor,
  className,
  size = "hero",
}: PageHeaderProps) {
  return (
    <SectionLayout
      tone="yellow"
      size="hero"
      decor={decor}
      className={cn(
        size === "banner" && "pb-10 md:pb-12",
        className
      )}
      aria-label="Page header"
    >
      <Reveal className="max-w-4xl">
        <SectionMark data-reveal="eyebrow" tone="paper" adornment={adornment}>
          {mark}
        </SectionMark>

        {title ? (
          <h1
            data-reveal="heading"
            className="mt-6 font-display text-4xl leading-display-sm font-medium tracking-display text-ink md:text-[52px] lg:text-6xl dark:text-foreground"
          >
            {title}
          </h1>
        ) : null}

        {description ? (
          <p
            data-reveal="text"
            className={cn(
              "max-w-2xl text-base leading-body text-ink/75 md:text-lg dark:text-muted-foreground",
              title ? "mt-5" : "mt-4"
            )}
          >
            {description}
          </p>
        ) : null}

        {actions ? (
          <div data-reveal="cta" className="mt-8 flex flex-col gap-3">
            {actions}
          </div>
        ) : null}
      </Reveal>
    </SectionLayout>
  )
}
