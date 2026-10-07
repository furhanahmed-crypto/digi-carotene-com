import { Mic, Search } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

import { FeaturedResultCard } from "./featured-result-card"
import { SearchQueryTyper } from "./search-query-typer"

export function SearchRanking() {
  const { searchRanking } = homeSections

  return (
    <section className="relative border-b border-border bg-[#f3efe6] py-14 md:py-20 dark:bg-secondary">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.1) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-[13px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
            {searchRanking.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[28px] leading-[1.15] font-medium tracking-[-0.02em] md:text-[40px]">
            {searchRanking.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            {searchRanking.body}
          </p>
        </Reveal>

        <Reveal className="mx-auto max-w-[720px]">
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

          <FeaturedResultCard className="mt-8" />
        </Reveal>
      </Container>
    </section>
  )
}
