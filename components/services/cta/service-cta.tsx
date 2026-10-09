"use client"

import { Reveal } from "@/components/motion/reveal"
import { ConversationActions } from "@/components/enquiry/conversation-actions"
import { pageCtaDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

type ServiceCtaProps = {
  name: string
}

/** Yellow closing band — same CTA language as homepage AgencyCta. */
export function ServiceCta({ name }: ServiceCtaProps) {
  return (
    <SectionLayout tone="yellow" decor={pageCtaDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow" tone="paper">
          Next step
        </SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl font-display text-[36px] leading-[1.08] font-medium tracking-[-0.02em] md:text-[52px]"
        >
          Ready to put {name} to work?
        </h2>
        <p
          data-reveal="text"
          className="mt-4 max-w-2xl text-base text-ink/70 md:text-lg dark:text-muted-foreground"
        >
          Tell us where growth is stuck. We will map the first 90 days and the
          metrics that prove it.
        </p>
        <div data-reveal="cta" className="mt-8">
          <ConversationActions serviceName={name} />
        </div>
      </Reveal>
    </SectionLayout>
  )
}
