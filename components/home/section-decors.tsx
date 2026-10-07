import { SectionDecor } from "@/components/decor"

/**
 * Homepage line-art — ink/opacity come from SectionLayout tone.
 * Tall sections get denser clusters; positions stay asymmetric
 * (not mirrored L/R corners) with mixed float axes for life.
 */

export const heroDecor = (
  <>
    <SectionDecor
      variant="search-ripple"
      mobile="show"
      immediate
      float="xy"
      floatDistance={12}
      className="top-16 -right-10 h-40 w-48 rotate-6 md:top-28 md:right-[4%] md:h-52 md:w-64 lg:right-[8%]"
    />
    <SectionDecor
      variant="carrot-sprig"
      float="x"
      floatDistance={-8}
      floatDuration={6.8}
      className="top-[42%] -left-12 hidden h-40 w-32 -rotate-12 md:block md:left-0 lg:top-[38%] lg:left-[1%]"
    />
    <SectionDecor
      variant="sparkles"
      parallax
      className="right-[22%] bottom-[18%] hidden h-24 w-24 rotate-3 xl:block"
    />
  </>
)

export const marqueeDecor = (
  <SectionDecor
    variant="carrot-sprig"
    float="x"
    floatDistance={6}
    className="top-1/2 -left-8 h-24 w-20 -translate-y-1/2 -rotate-6 md:left-2 md:h-28 md:w-24"
  />
)

/** Tall cream discovery band — more motifs across the height. */
export const searchRankingDecor = (
  <>
    <SectionDecor
      variant="search-ripple"
      mobile="show"
      float="xy"
      floatDistance={11}
      className="top-10 -left-14 h-36 w-44 -rotate-8 md:top-14 md:left-[1%] md:h-44 md:w-52 lg:left-[3%]"
    />
    <SectionDecor
      variant="chat-citation"
      float="y"
      floatDistance={9}
      floatDuration={6}
      className="top-[22%] -right-10 h-32 w-36 rotate-8 md:top-[18%] md:right-[2%] md:h-40 md:w-44 lg:right-[5%]"
    />
    <SectionDecor
      variant="sparkles"
      float="x"
      floatDistance={-7}
      className="top-[46%] left-[4%] hidden h-24 w-24 -rotate-12 md:block lg:left-[7%]"
    />
    <SectionDecor
      variant="magnifier"
      float="xy"
      floatDistance={8}
      floatDuration={7.2}
      className="top-[58%] right-[10%] hidden h-28 w-28 rotate-[-4deg] lg:block xl:right-[14%]"
    />
    <SectionDecor
      variant="node-graph"
      parallax
      className="bottom-[12%] -left-8 h-28 w-36 md:bottom-16 md:left-[2%] lg:left-[6%]"
    />
    <SectionDecor
      variant="radar-sweep"
      float="y"
      floatDistance={7}
      className="right-[3%] bottom-[6%] hidden h-32 w-32 rotate-6 xl:block"
    />
  </>
)

export const differentiatorsDecor = (
  <>
    <SectionDecor
      variant="compass"
      mobile="show"
      float="xy"
      floatDistance={10}
      className="top-[34%] -left-10 h-32 w-32 -rotate-6 md:top-[40%] md:left-0 md:h-36 md:w-36"
    />
    <SectionDecor
      variant="shield-check"
      float="x"
      floatDistance={-8}
      className="top-8 right-[8%] h-32 w-24 rotate-8 md:top-12 md:right-[4%] lg:right-[9%]"
    />
    <SectionDecor
      variant="gauge"
      float="y"
      floatDistance={6}
      className="right-[16%] bottom-8 hidden h-24 w-32 -rotate-3 lg:block"
    />
    <SectionDecor
      variant="dotted-path"
      parallax
      className="bottom-[28%] left-[10%] hidden h-12 w-48 xl:block"
    />
  </>
)

export const servicePanelsDecor = (
  <>
    <SectionDecor
      variant="megaphone"
      mobile="show"
      float="y"
      floatDistance={11}
      className="top-12 -right-10 h-32 w-36 rotate-12 md:top-16 md:right-[1%] md:h-40 md:w-44"
    />
    <SectionDecor
      variant="magnifier"
      float="x"
      floatDistance={8}
      className="top-[48%] -left-8 h-28 w-28 md:left-[1%] md:h-32 md:w-32"
    />
    <SectionDecor
      variant="newspaper"
      float="xy"
      floatDistance={7}
      className="top-[62%] right-[10%] hidden h-24 w-32 -rotate-3 xl:block"
    />
    <SectionDecor
      variant="trend-line"
      parallax
      className="bottom-10 left-[18%] hidden h-20 w-40 lg:block"
    />
  </>
)

export const audiencesDecor = (
  <>
    <SectionDecor
      variant="rocket"
      mobile="show"
      float="xy"
      floatDistance={12}
      className="top-12 -left-10 h-40 w-28 rotate-[-10deg] md:top-10 md:left-[2%] md:h-44 md:w-32"
    />
    <SectionDecor
      variant="map-pin"
      float="y"
      floatDistance={9}
      className="top-[36%] -right-6 h-32 w-24 md:right-[3%] md:h-36 md:w-28 lg:right-[7%]"
    />
    <SectionDecor
      variant="handshake"
      float="x"
      floatDistance={-6}
      className="top-[58%] left-[6%] hidden h-24 w-36 lg:block"
    />
    <SectionDecor
      variant="storefront"
      parallax
      className="right-[12%] bottom-10 hidden h-28 w-32 xl:block"
    />
    <SectionDecor
      variant="campus-cap"
      float="xy"
      floatDistance={8}
      className="bottom-[22%] left-[22%] hidden h-24 w-28 -rotate-6 xl:block"
    />
  </>
)

export const frameworkDecor = (
  <>
    <SectionDecor
      variant="gear"
      mobile="show"
      float="x"
      floatDistance={7}
      floatDuration={8}
      className="top-10 -right-8 h-28 w-28 rotate-12 md:top-12 md:right-[2%] md:h-32 md:w-32"
    />
    <SectionDecor
      variant="node-graph"
      float="y"
      floatDistance={8}
      className="bottom-10 -left-10 h-28 w-32 md:bottom-14 md:left-[1%] lg:left-[3%]"
    />
    <SectionDecor
      variant="dotted-path"
      className="top-[44%] left-1/2 hidden h-14 w-[min(88%,680px)] -translate-x-1/2 lg:block"
    />
    <SectionDecor
      variant="compass"
      float="xy"
      floatDistance={6}
      className="top-[30%] left-[8%] hidden h-24 w-24 -rotate-8 xl:block"
    />
  </>
)

export const visualShowcaseDecor = (
  <>
    <SectionDecor
      variant="spotlight"
      mobile="show"
      float="y"
      floatDistance={10}
      className="top-[26%] -right-12 h-44 w-36 rotate-6 md:top-20 md:right-0 md:h-48 md:w-40 lg:right-[2%]"
    />
    <SectionDecor
      variant="camera"
      float="x"
      floatDistance={-9}
      className="bottom-8 left-[6%] h-28 w-36 -rotate-6 md:bottom-12 md:left-[3%] md:h-36 md:w-44"
    />
    <SectionDecor
      variant="film-strip"
      float="xy"
      floatDistance={7}
      className="top-14 left-[18%] hidden h-16 w-40 xl:block"
    />
    <SectionDecor
      variant="confetti"
      parallax
      className="right-[18%] bottom-[20%] hidden h-28 w-32 rotate-3 lg:block"
    />
  </>
)

export const reelsDecor = (
  <>
    <SectionDecor
      variant="confetti"
      mobile="show"
      float="xy"
      floatDistance={11}
      className="top-[38%] -left-10 h-32 w-36 rotate-[-6deg] md:top-[42%] md:left-[1%] md:h-36 md:w-40"
    />
    <SectionDecor
      variant="sparkles"
      float="y"
      floatDistance={8}
      className="top-8 right-[8%] h-28 w-28 md:top-10 md:right-[5%] md:h-32 md:w-32 lg:right-[11%]"
    />
    <SectionDecor
      variant="film-strip"
      float="x"
      floatDistance={6}
      className="bottom-12 right-[16%] hidden h-16 w-36 -rotate-3 xl:block"
    />
    <SectionDecor
      variant="camera"
      parallax
      className="bottom-[18%] left-[12%] hidden h-24 w-32 lg:block"
    />
  </>
)

export const resultsDecor = (
  <>
    <SectionDecor
      variant="trend-line"
      mobile="show"
      float="x"
      floatDistance={9}
      className="top-12 -left-12 h-24 w-44 md:top-14 md:left-[2%] md:h-28 md:w-48 lg:left-[5%]"
    />
    <SectionDecor
      variant="bar-chart"
      float="y"
      floatDistance={10}
      className="top-[40%] -right-10 h-32 w-36 rotate-3 md:right-[2%] md:h-36 md:w-40"
    />
    <SectionDecor
      variant="trophy"
      float="xy"
      floatDistance={8}
      className="bottom-12 left-[14%] hidden h-28 w-24 -rotate-6 lg:block"
    />
    <SectionDecor
      variant="target-arrow"
      parallax
      className="right-[12%] bottom-[16%] hidden h-28 w-28 xl:block"
    />
  </>
)

export const workDecor = (
  <>
    <SectionDecor
      variant="target-arrow"
      mobile="show"
      float="xy"
      floatDistance={11}
      className="top-[30%] -right-12 h-36 w-36 rotate-8 md:top-20 md:right-[1%] md:h-40 md:w-40 lg:right-[4%]"
    />
    <SectionDecor
      variant="trophy"
      float="y"
      floatDistance={9}
      className="bottom-12 left-[3%] h-32 w-28 -rotate-6 md:bottom-14 md:left-[1%] md:h-40 md:w-32"
    />
    <SectionDecor
      variant="bar-chart"
      float="x"
      floatDistance={-7}
      className="top-[52%] left-[10%] hidden h-24 w-28 lg:block"
    />
    <SectionDecor
      variant="sparkles"
      parallax
      className="right-[20%] bottom-[24%] hidden h-24 w-24 xl:block"
    />
  </>
)

/** Tall FAQ cream band — line-art around the accordion (left ? is content). */
export const faqDecor = (
  <>
    <SectionDecor
      variant="speech-bubbles"
      mobile="show"
      float="x"
      floatDistance={-8}
      className="top-20 -right-10 h-32 w-36 rotate-6 md:top-16 md:right-[2%] md:h-36 md:w-40 lg:right-[5%]"
    />
    <SectionDecor
      variant="sparkles"
      float="xy"
      floatDistance={7}
      className="top-[48%] -left-8 h-24 w-24 -rotate-8 md:left-[1%] lg:left-[2%]"
    />
    <SectionDecor
      variant="compass"
      float="y"
      floatDistance={9}
      className="bottom-[22%] right-[10%] hidden h-28 w-28 lg:block"
    />
    <SectionDecor
      variant="dotted-path"
      parallax
      className="bottom-10 left-[14%] hidden h-12 w-44 xl:block"
    />
  </>
)

export const ctaDecor = (
  <>
    <SectionDecor
      variant="score-magnifier"
      mobile="show"
      float="xy"
      floatDistance={11}
      className="top-[26%] -left-10 h-36 w-36 -rotate-8 md:top-[36%] md:left-[2%] md:h-40 md:w-40"
    />
    <SectionDecor
      variant="radar-sweep"
      float="y"
      floatDistance={8}
      className="top-8 -right-10 h-36 w-36 md:top-10 md:right-[1%] md:h-44 md:w-44 lg:right-3"
    />
    <SectionDecor
      variant="scan-lines"
      float="x"
      floatDistance={6}
      className="right-[12%] bottom-8 hidden h-24 w-40 xl:block"
    />
  </>
)
