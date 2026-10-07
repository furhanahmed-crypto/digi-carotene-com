import { Bot, MapPin, Mic, Search, Sparkles } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { searchRankingDecor } from "@/components/home/section-decors"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

import { cn } from "@/lib/utils"

import { FeaturedResultCard } from "./featured-result-card"
import { SearchQueryTyper } from "./search-query-typer"

const signals = [
  {
    label: "Google",
    icon: Search,
    chip: "border-[#4285f4]/25 bg-white dark:border-[#4285f4]/40 dark:bg-[#0f172a]",
    iconWrap: "bg-[#4285f4] text-white",
  },
  {
    label: "ChatGPT",
    icon: Bot,
    chip: "border-[#10a37f]/25 bg-white dark:border-[#10a37f]/40 dark:bg-[#0f172a]",
    iconWrap: "bg-[#10a37f] text-white",
  },
  {
    label: "AI Overviews",
    icon: Sparkles,
    chip: "border-brand-purple/25 bg-white dark:border-brand-purple/45 dark:bg-[#0f172a]",
    iconWrap: "bg-brand-purple text-white",
  },
  {
    label: "Maps",
    icon: MapPin,
    chip: "border-[#ea4335]/25 bg-white dark:border-[#ea4335]/40 dark:bg-[#0f172a]",
    iconWrap: "bg-[#ea4335] text-white",
  },
] as const

export function SearchRanking() {
  const { searchRanking } = homeSections

  return (
    <SectionLayout tone="cream" decor={searchRankingDecor}>
      <Reveal>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionMark data-reveal="eyebrow">{searchRanking.eyebrow}</SectionMark>
          <h2
            data-reveal="heading"
            className="mt-5 font-display text-[28px] leading-[1.15] font-medium tracking-[-0.02em] md:text-[40px]"
          >
            {searchRanking.headline}
          </h2>
          <p
            data-reveal="text"
            className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base"
          >
            {searchRanking.body}
          </p>
        </div>

        <div data-reveal="image" className="mx-auto max-w-[760px]">
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-brand-yellow/35 bg-white/40 shadow-[0_30px_80px_rgba(32,33,36,0.1)] backdrop-blur-[2px] md:-inset-6 dark:border-brand-yellow/20 dark:bg-card/30"
              aria-hidden="true"
            />

            <ul className="relative mb-5 flex flex-wrap items-center justify-center gap-2">
              {signals.map(({ label, icon: Icon, chip, iconWrap }) => (
                <li
                  key={label}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-foreground uppercase shadow-sm dark:text-white",
                    chip
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex size-6 items-center justify-center rounded-full shadow-sm",
                      iconWrap
                    )}
                  >
                    <Icon className="size-3.5" aria-hidden="true" strokeWidth={2.25} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="relative rounded-3xl border border-border/70 bg-white/70 p-3 shadow-[0_20px_50px_rgba(32,33,36,0.12)] md:p-5 dark:border-border dark:bg-card/70">
              <div className="mb-3 flex items-center gap-1.5 px-1">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 truncate text-[11px] tracking-[0.04em] text-muted-foreground uppercase">
                  Search · AI answers · Local
                </span>
              </div>

              <div className="rounded-full border border-black/10 bg-white px-4 py-2.5 shadow-[0_1px_6px_rgba(32,33,36,0.18)] dark:border-border dark:bg-card">
                <div className="flex items-center gap-3">
                  <Search
                    className="size-5 shrink-0 text-[#9aa0a6]"
                    aria-hidden="true"
                  />
                  <SearchQueryTyper queries={searchRanking.queries} />
                  <span className="hidden h-6 w-px bg-black/10 sm:block dark:bg-border" />
                  <Mic
                    className="hidden size-5 shrink-0 text-[#4285f4] sm:block"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <FeaturedResultCard className="mt-5" />
            </div>
          </div>
        </div>
      </Reveal>
    </SectionLayout>
  )
}
