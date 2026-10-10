import { OpenContactButton } from "@/components/contact-popup/open-contact-button"
import { OpenGrowthAuditButton } from "@/components/growth-audit/open-growth-audit-button"
import { IndustryFaqSection } from "@/components/inner/industry-faq-section"
import {
  InfoCardGrid,
  OutlineSection,
  type InfoCardItem,
} from "@/components/inner/outline-section"
import { PageCta } from "@/components/shared/page-cta"
import { PageHeader } from "@/components/shared/page-header"
import type { IndustryFaqBlock } from "@/constants/inner/industry-faqs"
import {
  bannerCtaPrimaryClassName,
  bannerCtaRowClassName,
} from "@/constants/ui/banner-cta"
import type { OutlineSectionData } from "@/types/inner-pages"

type IndustryOutlinePageProps = {
  title: string
  description: string
  mark: string
  sections: readonly OutlineSectionData[]
  faq: IndustryFaqBlock
  related: readonly InfoCardItem[]
  primaryCta: string
  ctaTitle: string
  ctaLabel: string
  auditIndustry?: string
  ctaKey: string
}

/** Industry detail shell — CR-10–13 (audit CTAs, FAQs, expert contact). */
export function IndustryOutlinePage({
  title,
  description,
  mark,
  sections,
  faq,
  related,
  primaryCta,
  ctaTitle,
  ctaLabel,
  auditIndustry,
  ctaKey,
}: IndustryOutlinePageProps) {
  let bandIndex = 0
  const nextTone = () =>
    (bandIndex++ % 2 === 0 ? "white" : "cream") as "white" | "cream"

  const topicSections = sections.filter((s) => !s.items?.length)
  const listSections = sections.filter((s) => (s.items?.length ?? 0) > 0)

  return (
    <div className="min-h-svh">
      <PageHeader
        title={title}
        description={description}
        mark={mark}
        actions={
          <div className={bannerCtaRowClassName}>
            <OpenGrowthAuditButton
              label={primaryCta}
              ctaLocation={`${ctaKey}_hero`}
              industry={auditIndustry}
              className={bannerCtaPrimaryClassName}
            />
          </div>
        }
      />

      {topicSections.length > 0 ? (
        <OutlineSection
          tone={nextTone()}
          mark={mark}
          eyebrow="Capabilities"
          title="How we help in this vertical"
        >
          <InfoCardGrid
            colorful
            columns="3"
            items={topicSections.map((section) => ({
              title: section.title,
              body:
                section.body ??
                `${section.title} — planned and reported as part of one growth system.`,
            }))}
          />
          <div className="mt-8">
            <OpenGrowthAuditButton
              label="Get a Free Growth Audit"
              ctaLocation={`${ctaKey}_mid`}
              industry={auditIndustry}
              className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
            />
          </div>
        </OutlineSection>
      ) : null}

      {listSections.map((section) => (
        <OutlineSection
          key={section.title}
          tone={nextTone()}
          mark={section.mark ?? mark}
          title={section.title}
        >
          <InfoCardGrid
            items={section.items!.map((item) => ({ title: item }))}
            columns="4"
            headingLevel="h3"
          />
        </OutlineSection>
      ))}

      <OutlineSection
        tone={nextTone()}
        mark="FAQs"
        eyebrow="Questions"
        title={faq.title}
        body={faq.body}
      >
        <IndustryFaqSection
          faq={faq}
          contactCtaLocation={`${ctaKey}_faq`}
          industry={auditIndustry}
        />
      </OutlineSection>

      <OutlineSection
        tone={nextTone()}
        mark="Keep exploring"
        eyebrow="Related"
        title="Keep Exploring"
      >
        <InfoCardGrid items={related} columns="3" />
      </OutlineSection>

      <PageCta
        band
        title={ctaTitle}
        action={
          <OpenContactButton
            label={ctaLabel}
            ctaLocation={`${ctaKey}_expert`}
            industry={auditIndustry}
            className="bg-ink text-paper hover:bg-ink/90 dark:bg-brand-yellow dark:text-ink dark:hover:bg-brand-yellow/90"
          />
        }
      />
    </div>
  )
}
