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

import {
  faqContentClassName,
  faqItemClassName,
  faqTriggerClassName,
} from "@/constants/ui/faq-accordion"

import { FaqQuestionMark } from "./faq/faq-question-mark"

export function FAQ() {
  const { faq } = homeSections

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <SectionLayout id="faq" tone="cream" decor={faqDecor}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
              className="mt-5 text-[13px] font-medium tracking-label text-muted-foreground uppercase"
            >
              {faq.kicker}
            </p>
            <h2
              data-reveal="heading"
              className="mt-3 max-w-md min-w-0 font-display text-[26px] leading-display font-medium tracking-display break-words min-[360px]:text-[30px] sm:text-[32px] md:text-[44px]"
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
            {/* Answers stay in the HTML for crawlers (v2). Accordion is progressive enhancement. */}
            <Accordion
              data-reveal-group
              multiple={false}
              defaultValue={["faq-0"]}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-background shadow-[0_18px_50px_rgba(17,17,17,0.08)] dark:border-border dark:bg-card dark:shadow-none"
            >
              {faq.items.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  data-reveal="card"
                  className={faqItemClassName}
                >
                  <AccordionTrigger className={`${faqTriggerClassName} pr-2`}>
                    <span className="pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className={faqContentClassName}>
                    <p>{item.answer}</p>
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
