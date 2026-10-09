import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { BlogFaq } from "@/types/blog"

type BlogFaqSectionProps = {
  faqs: BlogFaq[]
}

export function BlogFaqSection({ faqs }: BlogFaqSectionProps) {
  if (faqs.length === 0) return null

  return (
    <section id="faqs" className="scroll-mt-28 border-t border-border pt-12">
      <h2 className="font-display text-[26px] leading-heading font-medium tracking-display md:text-[32px]">
        FAQs
      </h2>
      <Accordion
        multiple={false}
        defaultValue={["faq-0"]}
        className="mt-6 overflow-hidden rounded-2xl border border-border bg-background"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`faq-${index}`}
            className="border-border px-4 not-last:border-b sm:px-5"
          >
            <AccordionTrigger className="py-5 text-left font-display text-[17px] font-medium hover:no-underline md:text-[19px]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
