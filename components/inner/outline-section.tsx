import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { pageCreamDecor, pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { cn } from "@/lib/utils"

type OutlineSectionProps = {
  /** Band surface — only white or cream for inner content bands. */
  tone?: "white" | "cream"
  /** SectionMark label. */
  mark: string
  /** Small muted eyebrow above the H2. */
  eyebrow?: string
  /** H2 from the v2 outline. */
  title: string
  body?: ReactNode
  id?: string
  children?: ReactNode
}

/**
 * Inner-page content band: SectionLayout + SectionMark + SectionHeading (H2),
 * wrapped in Reveal with data-reveal attributes.
 */
export function OutlineSection({
  tone = "white",
  mark,
  eyebrow,
  title,
  body,
  id,
  children,
}: OutlineSectionProps) {
  return (
    <SectionLayout
      id={id}
      tone={tone}
      decor={tone === "cream" ? pageCreamDecor : pageWhiteDecor}
    >
      <Reveal>
        <SectionMark data-reveal="eyebrow">{mark}</SectionMark>
        <SectionHeading
          eyebrowProps={{ "data-reveal": "eyebrow" }}
          titleProps={{ "data-reveal": "heading" }}
          bodyProps={{ "data-reveal": "text" }}
          className="mt-6"
          eyebrow={eyebrow}
          title={title}
          body={body}
        />
        {children ? <div className="mt-10">{children}</div> : null}
      </Reveal>
    </SectionLayout>
  )
}

/** Dashed block marking copy that still needs to be supplied — never invented. */
export function PlaceholderBlock({
  children,
  className,
  ...rest
}: {
  children: ReactNode
  className?: string
} & Record<`data-${string}`, string | undefined>) {
  return (
    <p
      className={cn(
        "rounded-2xl border border-dashed border-ink/25 bg-background/70 p-6 text-base leading-[1.6] text-muted-foreground dark:border-border dark:bg-card/60",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  )
}

export type InfoCardItem = {
  title: string
  body?: string
  href?: string
}

const accentBorders = [
  "border-t-brand-blue",
  "border-t-brand-green",
  "border-t-brand-purple",
  "border-t-brand-red",
] as const

type InfoCardGridProps = {
  items: readonly InfoCardItem[]
  /** Multi-color top rules — services/industry cards on white bands only. */
  colorful?: boolean
  columns?: "2" | "3" | "4"
  headingLevel?: "h3" | "h4"
}

const columnClass = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
} as const

export function InfoCardGrid({
  items,
  colorful = false,
  columns = "3",
  headingLevel = "h3",
}: InfoCardGridProps) {
  const Heading = headingLevel

  return (
    <div data-reveal-group className={cn("grid gap-5", columnClass[columns])}>
      {items.map((item, index) => {
        const content = (
          <>
            <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <Heading className="mt-3 font-display text-[21px] leading-[1.2] font-medium">
              {item.title}
            </Heading>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.body ?? "Explore how this fits your growth plan."}
            </p>
            {item.href ? (
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-brand-yellow decoration-2 underline-offset-4">
                Explore
                <ArrowRight className="size-4" />
              </span>
            ) : null}
          </>
        )

        const className = cn(
          "flex h-full flex-col rounded-2xl border border-border bg-card p-6",
          colorful && "border-t-4",
          colorful && accentBorders[index % accentBorders.length],
          item.href && "transition-colors hover:border-carotene/50"
        )

        return item.href ? (
          <Link
            key={item.title}
            href={item.href}
            data-reveal="card"
            className={className}
          >
            {content}
          </Link>
        ) : (
          <article key={item.title} data-reveal="card" className={className}>
            {content}
          </article>
        )
      })}
    </div>
  )
}
