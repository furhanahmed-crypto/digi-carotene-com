"use client"

import { Fragment } from "react"

import { TrackedContactLink } from "@/components/landing/tracked-contact-link"
import { Reveal } from "@/components/motion/reveal"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteContact } from "@/constants/site/contact"
import {
  faqContentClassName,
  faqItemClassName,
  faqTriggerClassName,
} from "@/constants/ui/faq-accordion"

type LandingFaq = {
  question: string
  answer: string
}

type LandingFaqSectionProps = {
  title: string
  faqs: readonly LandingFaq[]
}

/** FAQ answers stay plain text for schema; phone display is linkified in the UI. */
function FaqAnswer({ answer }: { answer: string }) {
  const phone = siteContact.phoneDisplay
  if (!answer.includes(phone)) {
    return <p>{answer}</p>
  }

  const parts = answer.split(phone)
  return (
    <p>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 ? (
            <TrackedContactLink
              href={siteContact.phoneHref}
              event="call_click"
              buttonLocation="faq"
              className="font-medium text-foreground underline decoration-brand-yellow underline-offset-4 transition-colors hover:text-brand-yellow"
            >
              {phone}
            </TrackedContactLink>
          ) : null}
        </Fragment>
      ))}
    </p>
  )
}

/** Landing FAQ accordion — same single-open Accordion as homepage / service FAQ. */
export function LandingFaqSection({ title, faqs }: LandingFaqSectionProps) {
  return (
    <SectionLayout tone="white" decor={pageWhiteDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">FAQ</SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
        >
          {title}
        </h2>
        <Accordion
          data-reveal-group
          multiple={false}
          defaultValue={faqs.length > 0 ? ["faq-0"] : []}
          className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-background shadow-[0_18px_50px_rgba(17,17,17,0.08)] dark:border-border dark:bg-card dark:shadow-none"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              data-reveal="card"
              className={faqItemClassName}
            >
              <AccordionTrigger className={`${faqTriggerClassName} pr-2`}>
                <span className="pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className={faqContentClassName}>
                <FaqAnswer answer={faq.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </SectionLayout>
  )
}
