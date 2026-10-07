import Link from "next/link"
import type { ReactNode } from "react"

import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { cn } from "@/lib/utils"

export type BreadcrumbItem = {
  label: string
  href?: string
}

type PageHeaderProps = {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  /** SectionMark label — paper tone on the yellow banner. */
  mark?: string
  /** Optional motif to the right of the SectionMark. */
  adornment?: ReactNode
  className?: string
  /** @deprecated Image backdrops removed — ignored. */
  imageIndex?: number
}

/**
 * Inner-page banner — yellow `SectionLayout` band (homepage language).
 * No photo backdrops or glass cards.
 */
export function PageHeader({
  title,
  description,
  breadcrumbs = [],
  mark,
  adornment,
  className,
}: PageHeaderProps) {
  const sectionMark = mark ?? breadcrumbs.at(-1)?.label ?? "Overview"

  return (
    <SectionLayout
      tone="yellow"
      size="hero"
      className={cn(className)}
      aria-label="Page header"
    >
      <Reveal className="max-w-4xl">
        {breadcrumbs.length > 0 ? (
          <nav
            data-reveal="eyebrow"
            className="mb-6 flex flex-wrap items-center gap-2 text-[13px] tracking-[0.03em] text-ink/70 uppercase dark:text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="transition-colors hover:text-ink dark:hover:text-foreground"
            >
              Home
            </Link>
            {breadcrumbs.map((item) => (
              <span key={item.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-ink dark:hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-ink dark:text-foreground">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        <SectionMark
          data-reveal="eyebrow"
          tone="paper"
          adornment={adornment}
        >
          {sectionMark}
        </SectionMark>

        <h1
          data-reveal="heading"
          className="mt-6 font-display text-[36px] leading-[1.08] font-medium tracking-[-0.02em] text-ink md:text-[52px] lg:text-[60px] dark:text-foreground"
        >
          {title}
        </h1>

        {description ? (
          <p
            data-reveal="text"
            className="mt-5 max-w-2xl text-base leading-[1.6] text-ink/75 md:text-lg dark:text-muted-foreground"
          >
            {description}
          </p>
        ) : null}
      </Reveal>
    </SectionLayout>
  )
}
