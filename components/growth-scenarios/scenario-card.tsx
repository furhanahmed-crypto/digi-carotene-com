import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { scenarioHref } from "@/lib/growth-scenarios/load"
import { cn } from "@/lib/utils"
import type { GrowthScenarioIndexItem } from "@/types/growth-scenario"

type ScenarioCardProps = {
  item: GrowthScenarioIndexItem
  className?: string
  tone?: "home" | "list"
}

export function ScenarioCard({
  item,
  className,
  tone = "list",
}: ScenarioCardProps) {
  const href = scenarioHref(item.slug)
  const isHome = tone === "home"

  return (
    <article
      className={cn(
        "relative flex h-full min-w-0 flex-col rounded-2xl border border-border bg-card shadow-sm transition-colors hover:border-ink/25",
        isHome ? "p-6" : "overflow-hidden",
        className
      )}
    >
      <Link
        href={href}
        className={cn("flex h-full min-w-0 flex-col", !isHome && "p-5 md:p-6")}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-medium">{item.industry}</p>
            <p className="truncate text-sm text-muted-foreground">
              {item.tags[0] ?? "Benchmark"}
            </p>
          </div>
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <p className="mt-8 font-display text-4xl font-medium tracking-tight">
          {item.headlineMetric}
        </p>
        <p className="mt-2 line-clamp-2 text-xs font-semibold tracking-label text-ink/55 uppercase dark:text-muted-foreground">
          {item.headlineMetricLabel}
        </p>
        <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.cardSummary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium tracking-soft text-muted-foreground uppercase">
            Benchmark
          </span>
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-[11px] font-medium tracking-soft text-muted-foreground uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  )
}
