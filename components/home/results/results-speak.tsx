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
        <h2
          data-reveal="heading"
          className="mt-6 max-w-xl min-w-0 font-display text-[26px] leading-display font-medium tracking-display break-words min-[360px]:text-[30px] sm:text-[32px] md:text-[44px]"
        >
          {results.headline}
        </h2>

        <div data-reveal-group className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.slug} data-reveal="card">
              <ScenarioCard item={card} tone="home" />
            </div>
          ))}
        </div>

        <div data-reveal="cta" className="mt-8">
          <Link
            href="/growth-scenarios"
            className="link-underline text-[13px] font-medium tracking-soft uppercase"
          >
            See all growth stories
          </Link>
        </div>
      </Reveal>
    </SectionLayout>
  )
}
