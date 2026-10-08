import { homeSections } from "@/constants/home/sections"
import { searchRankingDecor } from "@/components/home/section-decors"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function ProblemBlock() {
  const { problem } = homeSections

  return (
    <SectionLayout tone="cream" decor={searchRankingDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">{problem.eyebrow}</SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
        >
          {problem.headline}
        </h2>
        <p
          data-reveal="text"
          className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {problem.body}
        </p>
      </Reveal>
    </SectionLayout>
  )
}
