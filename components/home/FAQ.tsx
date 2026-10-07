import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const { faq } = homeSections

  return (
    <section
      id="faq"
      className="border-b border-border bg-[#f3efe6] py-16 text-ink md:py-24 dark:bg-secondary dark:text-foreground"
    >
      <Container>
        <Reveal>
          <SectionMark>{faq.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow={faq.kicker}
            title={faq.headline}
          />
        </Reveal>

        <Accordion className="mt-10 overflow-hidden rounded-2xl border border-border bg-white dark:border-border dark:bg-card">
          {faq.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="not-last:border-b border-border px-4"
            >
              <AccordionTrigger className="font-display rounded-none py-5 text-left text-[18px] leading-[1.3] font-medium hover:no-underline md:text-[21px]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-[1.6] text-muted-foreground md:text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
