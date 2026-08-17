import { homeContent } from "@/lib/home-content"
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
  const { faq } = homeContent

  return (
    <section id="faq" className="border-t border-border bg-background py-[72px] lg:py-[140px]">
      <Container>
        <Reveal>
          <SectionMark>{faq.eyebrow}</SectionMark>
          <SectionHeading
            className="mt-6"
            eyebrow={faq.kicker}
            title={faq.headline}
          />
        </Reveal>

        <Accordion className="mt-10 border border-line">
          {faq.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="border-line not-last:border-b px-4"
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
