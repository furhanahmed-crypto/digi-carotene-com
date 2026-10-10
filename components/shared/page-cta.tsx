import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { pageCtaDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"

type PageCtaProps = {
  title: string
  label?: string
  href?: string
  /** Custom button(s) — use for audit/contact popups. */
  action?: ReactNode
  /** When true, renders as a yellow full-bleed band (closing CTA). */
  band?: boolean
  mark?: string
}

export function PageCta({
  title,
  label,
  href,
  action,
  band = false,
  mark = "Next step",
}: PageCtaProps) {
  const button =
    action ??
    (href && label ? (
      <Button
        nativeButton={false}
        render={<Link href={href} />}
        size="lg"
        className={
          band
            ? "bg-ink text-paper hover:bg-ink/90 dark:bg-brand-yellow dark:text-ink dark:hover:bg-brand-yellow/90"
            : "bg-brand-yellow text-ink hover:bg-brand-yellow/90"
        }
      >
        {label}
        <ArrowRight className="size-4" />
      </Button>
    ) : null)

  const body = (
    <>
      <SectionMark tone={band ? "paper" : "carotene"}>{mark}</SectionMark>
      <h3 className="mt-5 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl">
        {title}
      </h3>
      {button ? <div className="mt-6">{button}</div> : null}
    </>
  )

  if (band) {
    return (
      <SectionLayout tone="yellow" size="default" decor={pageCtaDecor}>
        {body}
      </SectionLayout>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-[#f3efe6] p-6 md:p-8 dark:bg-secondary">
      {body}
    </div>
  )
}
