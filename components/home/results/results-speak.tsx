import Link from "next/link"

import { ScenarioCard } from "@/components/growth-scenarios/scenario-card"
import { resultsDecor } from "@/components/home/section-decors"
import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { getFeaturedScenarios } from "@/lib/growth-scenarios/load"

export function ResultsSpeak() {
  const { results } = homeSections
  const cards = getFeaturedScenarios()

  return (
    <SectionLayout tone="yellow" decor={resultsDecor}>
      <Reveal>
        <SectionMark tone="paper" data-reveal="eyebrow">
          {results.eyebrow}
        </SectionMark>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2
            data-reveal="heading"
            className="max-w-xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
          >
            {results.headline}
          </h2>
          <p
            data-reveal="text"
            className="max-w-md text-ink/70 dark:text-muted-foreground"
          >
            {results.body}
          </p>
        </div>

        <div data-reveal-group className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.slug} data-reveal="card">
              <ScenarioCard item={card} tone="home" />
            </div>
          ))}
        </div>

        <div data-reveal="cta" className="mt-8">
          <Link
            href="/case-studies"
            className="link-underline text-[13px] font-medium tracking-[0.04em] uppercase"
          >
            See all growth scenarios
          </Link>
        </div>
      </Reveal>
    </SectionLayout>
  )
}
