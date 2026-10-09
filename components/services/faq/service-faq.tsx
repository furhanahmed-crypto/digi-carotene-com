import { SpeechBubblesMotif } from "@/components/decor/motifs"
import { FaqQuestionMark } from "@/components/home/faq/faq-question-mark"
import { Reveal } from "@/components/motion/reveal"
import { pageFaqDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  faqItemClassName,
  faqTriggerClassName,
} from "@/constants/ui/faq-accordion"
import type { ServiceFaq } from "@/types/services"

type ServiceFaqSectionProps = {
  name: string
  faqs: ServiceFaq[]
}

/** Sticky FAQ column + accordion — mirrors homepage FAQ. */
export function ServiceFaqSection({ name, faqs }: ServiceFaqSectionProps) {
  return (
    <SectionLayout tone="cream" decor={pageFaqDecor}>
      <Reveal>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:col-span-5">
            <SectionMark
              data-reveal="eyebrow"
              adornment={<SpeechBubblesMotif />}
            >
              FAQ
            </SectionMark>
            <p
              data-reveal="text"
              className="mt-5 text-[13px] font-medium tracking-[0.08em] text-muted-foreground uppercase"
            >
              Clarity on {name}
            </p>
            <h2
              data-reveal="heading"
              className="mt-3 max-w-md font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
            >
              Questions we hear most.
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
              multiple={false}
              defaultValue={faqs.length > 0 ? ["faq-0"] : []}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-background shadow-[0_18px_50px_rgba(17,17,17,0.08)] dark:border-border dark:bg-card dark:shadow-none"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  data-reveal="card"
                  className={faqItemClassName}
                >
                  <AccordionTrigger className={faqTriggerClassName}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm font-normal leading-relaxed text-muted-foreground">
                    <p>{faq.answer}</p>
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
