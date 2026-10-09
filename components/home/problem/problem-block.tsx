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
          className="mt-6 max-w-3xl min-w-0 font-display text-[26px] leading-display font-medium tracking-display break-words min-[360px]:text-[30px] sm:text-[32px] md:text-[44px]"
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
