import { SectionDecor } from "@/components/decor"
import { ctaDecor, faqDecor } from "@/components/home/section-decors"

/** Yellow page-banner motifs — used by every inner PageHeader. */
export const pageHeaderDecor = (
  <>
    <SectionDecor
      variant="radar-sweep"
      mobile="show"
      immediate
      float="xy"
      floatDistance={15}
      className="top-10 -right-10 h-40 w-40 rotate-6 md:top-20 md:right-[3%] md:h-48 md:w-48"
    />
    <SectionDecor
      variant="carrot-sprig"
      float="x"
      floatDistance={-10}
      parallax
      className="bottom-6 -left-10 hidden h-40 w-32 -rotate-12 md:block md:left-2 lg:bottom-10"
    />
    <SectionDecor
      variant="sparkles"
      float
      floatDistance={12}
      className="top-[42%] right-[18%] hidden h-24 w-24 xl:block"
    />
  </>
)

/** White content band on inner pages. */
export const pageWhiteDecor = (
  <>
    <SectionDecor
      variant="node-graph"
      mobile="show"
      float="xy"
      floatDistance={14}
      className="top-12 -right-8 h-32 w-36 md:top-16 md:right-2"
    />
    <SectionDecor
      variant="compass"
      parallax
      float
      floatDistance={11}
      className="bottom-10 -left-8 h-32 w-32 -rotate-6 md:bottom-14 md:left-2"
    />
  </>
)

/** Cream content band on inner pages. */
export const pageCreamDecor = (
  <>
    <SectionDecor
      variant="chat-citation"
      mobile="show"
      float="xy"
      floatDistance={13}
      className="top-10 -left-10 h-36 w-44 md:top-14 md:left-2"
    />
    <SectionDecor
      variant="magnifier"
      parallax
      float="x"
      floatDistance={9}
      className="right-0 bottom-12 h-32 w-32 rotate-8 md:right-4 md:bottom-16"
    />
  </>
)

/** Services / capability listing bands. */
export const pageServicesDecor = (
  <>
    <SectionDecor
      variant="megaphone"
      mobile="show"
      float="xy"
      floatDistance={14}
      className="top-14 -right-10 h-36 w-40 rotate-12 md:top-20 md:right-2"
    />
    <SectionDecor
      variant="newspaper"
      parallax
      float
      className="bottom-10 -left-8 h-28 w-36 md:bottom-14 md:left-2"
    />
  </>
)

export const pageFaqDecor = faqDecor
export const pageCtaDecor = ctaDecor
