"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { OpenContactButton } from "@/components/contact-popup/open-contact-button"
import {
  faqContentClassName,
  faqItemClassName,
  faqTriggerClassName,
} from "@/constants/ui/faq-accordion"
import type { IndustryFaqBlock } from "@/constants/inner/industry-faqs"
import { siteContact } from "@/constants/site/contact"
import { cn } from "@/lib/utils"

type IndustryFaqSectionProps = {
  faq: IndustryFaqBlock
  contactCtaLocation: string
  industry?: string
}

export function IndustryFaqSection({
  faq,
  contactCtaLocation,
  industry,
}: IndustryFaqSectionProps) {
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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Accordion
        multiple={false}
        defaultValue={["faq-0"]}
        className="mt-2 overflow-hidden rounded-2xl border border-border bg-card"
      >
        {faq.items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className={cn(faqItemClassName)}
          >
            <AccordionTrigger className={faqTriggerClassName}>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className={faqContentClassName}>
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="mt-8 text-sm leading-relaxed text-muted-foreground md:text-base">
        Still have a question?{" "}
        <a
          href={siteContact.whatsappHref}
          className="font-medium text-foreground underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp us
        </a>{" "}
        or{" "}
        <span className="inline-flex align-baseline">
          <OpenContactButton
            label="Contact Us"
            ctaLocation={contactCtaLocation}
            industry={industry}
            size="sm"
            variant="link"
            showArrow={false}
            className="h-auto px-0 text-sm font-medium text-foreground underline underline-offset-2 md:text-base"
          />
        </span>{" "}
        — we reply within one working day.
      </p>
    </div>
  )
}
