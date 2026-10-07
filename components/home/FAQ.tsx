import { faqDecor } from "@/components/home/section-decors"
import { SpeechBubblesMotif } from "@/components/decor/motifs"
import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { FaqQuestionMark } from "./faq/faq-question-mark"

export function FAQ() {
  const { faq } = homeSections

  return (
    <SectionLayout id="faq" tone="cream" decor={faqDecor}>
      <Reveal>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:col-span-5">
            <SectionMark
              data-reveal="eyebrow"
              adornment={<SpeechBubblesMotif />}
            >
              {faq.eyebrow}
            </SectionMark>
            <p
              data-reveal="text"
              className="mt-5 text-[13px] font-medium tracking-[0.08em] text-muted-foreground uppercase"
            >
              {faq.kicker}
            </p>
            <h2
              data-reveal="heading"
              className="mt-3 max-w-md font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
            >
              {faq.headline}
            </h2>
            <div
              data-reveal="image"
              className="mx-auto mt-8 max-w-[200px] sm:max-w-[240px] lg:mx-0 lg:max-w-[280px]"
            >
              <FaqQuestionMark />
            </div>
          </aside>

          <div className="lg:col-span-7">
            <Accordion
              data-reveal-group
              className="overflow-hidden rounded-2xl border border-ink/10 bg-background shadow-[0_18px_50px_rgba(17,17,17,0.08)] dark:border-border dark:bg-card dark:shadow-none"
            >
              {faq.items.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  data-reveal="card"
                  className="border-ink/10 px-2 transition-colors not-last:border-b hover:bg-brand-yellow/12 data-open:bg-brand-yellow/18 dark:border-border dark:hover:bg-brand-yellow/10 dark:data-open:bg-brand-yellow/14 sm:px-5"
                >
                  <AccordionTrigger className="rounded-none py-5 text-left font-display text-[17px] leading-[1.3] font-medium hover:no-underline data-panel-open:text-ink md:text-[20px] **:data-[slot=accordion-trigger-icon]:text-ink/45 data-panel-open:**:data-[slot=accordion-trigger-icon]:text-ink">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-[1.6] text-muted-foreground md:text-lg">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Reveal>
    </SectionLayout>
  )
}
