import { Bot, MapPin, Mic, Search, Sparkles } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/shared/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

import { FeaturedResultCard } from "./featured-result-card"
import { SearchQueryTyper } from "./search-query-typer"

const signals = [
  { label: "Google", icon: Search },
  { label: "ChatGPT", icon: Bot },
  { label: "AI Overviews", icon: Sparkles },
  { label: "Maps", icon: MapPin },
] as const

export function SearchRanking() {
  const { searchRanking } = homeSections

  return (
    <SectionLayout tone="cream">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center">
        <SectionMark>{searchRanking.eyebrow}</SectionMark>
        <h2 className="mt-5 font-display text-[28px] leading-[1.15] font-medium tracking-[-0.02em] md:text-[40px]">
          {searchRanking.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
          {searchRanking.body}
        </p>
      </Reveal>

      <Reveal className="mx-auto max-w-[760px]">
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-brand-yellow/35 bg-white/40 shadow-[0_30px_80px_rgba(32,33,36,0.1)] backdrop-blur-[2px] md:-inset-6 dark:border-brand-yellow/20 dark:bg-card/30"
            aria-hidden="true"
          />

          <ul className="relative mb-5 flex flex-wrap items-center justify-center gap-2">
            {signals.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-white/90 px-3 py-1.5 text-[11px] font-medium tracking-[0.06em] text-foreground uppercase shadow-sm dark:bg-card"
              >
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-yellow/25 text-ink">
                  <Icon className="size-3" aria-hidden="true" />
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
      </Reveal>
    </SectionLayout>
  )
}
