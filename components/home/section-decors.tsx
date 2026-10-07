import { SectionDecor } from "@/components/decor"

/**
 * Homepage line-art — ink/opacity come from SectionLayout tone
 * (white #E6C55C/70 · cream #D9B040/65 · yellow #C99A12/70; softer gold in dark).
 * Positions vary per section (not always top-left + bottom-right).
 */

export const heroDecor = (
  <>
    <SectionDecor
      variant="search-ripple"
      mobile="show"
      immediate
      float
      className="top-16 -right-10 h-40 w-48 rotate-6 md:top-28 md:right-[4%] md:h-52 md:w-64 lg:right-[8%]"
    />
    <SectionDecor
      variant="carrot-sprig"
      parallax
      className="top-[55%] -left-12 hidden h-44 w-36 -rotate-12 md:block md:left-0 lg:top-[48%] lg:left-2"
    />
  </>
)

export const marqueeDecor = (
  <SectionDecor
    variant="carrot-sprig"
    className="top-1/2 -left-8 h-24 w-20 -translate-y-1/2 -rotate-6 md:left-2 md:h-28 md:w-24"
  />
)

export const searchRankingDecor = (
  <>
    <SectionDecor
      variant="chat-citation"
      mobile="show"
      float
      className="top-1/3 -right-12 h-40 w-48 rotate-[-8deg] md:top-20 md:right-0 md:h-44 md:w-52 lg:right-4"
    />
    <SectionDecor
      variant="search-ripple"
      parallax
      className="bottom-[12%] -left-14 h-36 w-44 md:bottom-16 md:left-0 lg:left-[6%]"
    />
  </>
)

export const differentiatorsDecor = (
  <>
    <SectionDecor
      variant="compass"
      mobile="show"
      float
      className="top-[38%] -left-10 h-32 w-32 -rotate-6 md:top-1/2 md:left-0 md:-translate-y-1/2 md:h-36 md:w-36"
    />
    <SectionDecor
      variant="shield-check"
      parallax
      className="top-10 -right-8 h-36 w-28 rotate-8 md:top-16 md:right-[2%] lg:right-[6%]"
    />
    <SectionDecor
      variant="gauge"
      className="right-[18%] bottom-6 hidden h-24 w-32 lg:block"
    />
  </>
)

export const servicePanelsDecor = (
  <>
    <SectionDecor
      variant="megaphone"
      mobile="show"
      float
      className="top-12 -right-10 h-32 w-36 rotate-12 md:top-20 md:right-0 md:h-40 md:w-44"
    />
    <SectionDecor
      variant="magnifier"
      parallax
      className="bottom-[20%] -left-8 h-28 w-28 md:bottom-24 md:left-2 md:h-32 md:w-32"
    />
    <SectionDecor
      variant="newspaper"
      className="top-[55%] right-[12%] hidden h-24 w-32 -rotate-3 xl:block"
    />
  </>
)

export const audiencesDecor = (
  <>
    <SectionDecor
      variant="rocket"
      mobile="show"
      float
      className="top-14 -left-10 h-40 w-28 rotate-[-10deg] md:top-12 md:left-2 md:h-44 md:w-32"
    />
    <SectionDecor
      variant="map-pin"
      parallax
      className="bottom-[18%] -right-6 h-32 w-24 md:right-4 md:bottom-20 md:h-36 md:w-28 lg:right-[8%]"
    />
    <SectionDecor
      variant="handshake"
      className="top-[42%] left-[8%] hidden h-24 w-36 lg:block"
    />
  </>
)

export const frameworkDecor = (
  <>
    <SectionDecor
      variant="gear"
      mobile="show"
      float
      className="top-10 -right-8 h-28 w-28 rotate-12 md:top-14 md:right-[3%] md:h-32 md:w-32"
    />
    <SectionDecor
      variant="node-graph"
      parallax
      className="bottom-10 -left-10 h-28 w-32 md:bottom-16 md:left-0 lg:left-[4%]"
    />
    <SectionDecor
      variant="dotted-path"
      className="top-[46%] left-1/2 hidden h-14 w-[min(88%,680px)] -translate-x-1/2 lg:block"
    />
  </>
)

export const visualShowcaseDecor = (
  <>
    <SectionDecor
      variant="spotlight"
      mobile="show"
      float
      className="top-[30%] -right-12 h-44 w-36 rotate-6 md:top-24 md:right-0 md:h-48 md:w-40 lg:right-2"
    />
    <SectionDecor
      variant="camera"
      parallax
      className="bottom-8 left-[8%] h-28 w-36 -rotate-6 md:bottom-12 md:left-[4%] md:h-36 md:w-44"
    />
    <SectionDecor
      variant="film-strip"
      className="top-16 left-[22%] hidden h-16 w-40 xl:block"
    />
  </>
)

export const reelsDecor = (
  <>
    <SectionDecor
      variant="confetti"
      mobile="show"
      float
      className="top-[42%] -left-10 h-32 w-36 rotate-[-6deg] md:top-1/2 md:left-0 md:-translate-y-1/2 md:h-36 md:w-40"
    />
    <SectionDecor
      variant="sparkles"
      parallax
      className="top-8 right-[6%] h-28 w-28 md:top-12 md:right-[4%] md:h-32 md:w-32 lg:right-[10%]"
    />
  </>
)

export const resultsDecor = (
  <>
    <SectionDecor
      variant="trend-line"
      mobile="show"
      float
      className="top-12 -left-12 h-24 w-44 md:top-16 md:left-0 md:h-28 md:w-48 lg:left-[5%]"
    />
    <SectionDecor
      variant="bar-chart"
      parallax
      className="bottom-[15%] -right-10 h-32 w-36 rotate-3 md:right-2 md:bottom-14 md:h-36 md:w-40"
    />
  </>
)

export const workDecor = (
  <>
    <SectionDecor
      variant="target-arrow"
      mobile="show"
      float
      className="top-[35%] -right-12 h-36 w-36 rotate-8 md:top-24 md:right-0 md:h-40 md:w-40 lg:right-[5%]"
    />
    <SectionDecor
      variant="trophy"
      parallax
      className="bottom-12 left-[4%] h-32 w-28 -rotate-6 md:bottom-16 md:left-2 md:h-40 md:w-32"
    />
  </>
)

export const faqDecor = (
  <>
    <SectionDecor
      variant="speech-bubbles"
      mobile="show"
      float
      className="top-10 -left-12 h-36 w-44 rotate-[-4deg] md:top-16 md:left-0 md:h-40 md:w-48 lg:left-[2%]"
    />
    <SectionDecor
      variant="question-mark"
      parallax
      className="bottom-[22%] -right-8 h-40 w-28 md:right-2 md:bottom-16 md:h-48 md:w-32 lg:right-[6%]"
    />
  </>
)

export const ctaDecor = (
  <>
    <SectionDecor
      variant="score-magnifier"
      mobile="show"
      float
      className="top-[28%] -left-10 h-36 w-36 -rotate-8 md:top-1/2 md:left-2 md:-translate-y-1/2 md:h-40 md:w-40"
    />
    <SectionDecor
      variant="radar-sweep"
      parallax
      className="top-8 -right-10 h-36 w-36 md:top-12 md:right-0 md:h-44 md:w-44 lg:right-4"
    />
    <SectionDecor
      variant="scan-lines"
      className="right-[14%] bottom-8 hidden h-24 w-40 xl:block"
    />
  </>
)
