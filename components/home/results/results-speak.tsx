import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/shared/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function ResultsSpeak() {
  const { results } = homeSections

  return (
    <SectionLayout tone="yellow">
      <Reveal>
        <SectionMark tone="paper">{results.eyebrow}</SectionMark>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]">
            Results that{" "}
            <span className="underline decoration-ink decoration-[0.08em] underline-offset-[0.12em]">
              speak volumes.
            </span>
          </h2>
          <p className="max-w-md text-ink/70 dark:text-muted-foreground">
            {results.body}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {results.cards.map((card) => (
          <Reveal key={card.id} className="h-full">
            <article className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{card.client}</p>
                  <p className="text-sm text-muted-foreground">
                    {card.industry}
                  </p>
                </div>
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-ink text-paper">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <p className="mt-8 font-display text-4xl font-medium tracking-tight">
                {card.metric}
              </p>
              <p className="mt-2 text-[12px] font-semibold tracking-[0.08em] text-ink/55 uppercase">
                {card.metricLabel}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-[11px] font-medium tracking-[0.04em] text-muted-foreground uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Link
          href="/case-studies"
          className="link-underline text-[13px] font-medium tracking-[0.04em] uppercase"
        >
          See case studies
        </Link>
      </Reveal>
    </SectionLayout>
  )
}
