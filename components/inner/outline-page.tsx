import Link from "next/link"
import { ArrowRight } from "lucide-react"

import {
  InfoCardGrid,
  OutlineSection,
  PlaceholderBlock,
  type InfoCardItem,
} from "@/components/inner/outline-section"
import { PageCta } from "@/components/shared/page-cta"
import {
  PageHeader,
  type BreadcrumbItem,
} from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"
import type { OutlineSectionData } from "@/types/inner-pages"

type OutlinePageProps = {
  title: string
  description: string
  mark: string
  breadcrumbs: BreadcrumbItem[]
  sections: readonly OutlineSectionData[]
  /** FAQ questions from the v2 outline; answers stay placeholders. */
  faqs?: readonly string[]
  /** Show a permissioned-logos placeholder band (industry pages). */
  clientLogos?: boolean
  related: readonly InfoCardItem[]
  primaryCta: string
  ctaTitle: string
  ctaLabel: string
}

/**
 * Shell for v2 outline pages (industries, WhatsApp, ORM): H1 header, one band
 * per H2 with a placeholder body, visible FAQs, related links and a closing CTA.
 */
export function OutlinePage({
  title,
  description,
  mark,
  breadcrumbs,
  sections,
  faqs = [],
  clientLogos = false,
  related,
  primaryCta,
  ctaTitle,
  ctaLabel,
}: OutlinePageProps) {
  let bandIndex = 0
  const nextTone = () =>
    (bandIndex++ % 2 === 0 ? "white" : "cream") as "white" | "cream"

  return (
    <div className="min-h-svh">
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        mark={mark}
        actions={
          <Button
            nativeButton={false}
            render={<Link href={contactHref} />}
            size="lg"
            className="bg-ink text-paper hover:bg-ink/90 dark:bg-brand-yellow dark:text-ink dark:hover:bg-brand-yellow/90"
          >
            {primaryCta}
            <ArrowRight className="size-4" />
          </Button>
        }
      />

      {clientLogos ? (
        <OutlineSection
          tone={nextTone()}
          mark="Clients"
          eyebrow="Proof"
          title="Clients We Work With in This Sector"
        >
          <PlaceholderBlock data-reveal="card">
            [[2–3 permissioned client logos from this sector — to confirm]]
          </PlaceholderBlock>
        </OutlineSection>
      ) : null}

      {sections.map((section) => (
        <OutlineSection
          key={section.title}
          tone={nextTone()}
          mark={section.mark ?? "Overview"}
          title={section.title}
        >
          {section.items?.length ? (
            <InfoCardGrid
              items={section.items.map((item) => ({ title: item }))}
              columns="3"
              headingLevel="h3"
            />
          ) : (
            <PlaceholderBlock data-reveal="card">
              {section.body ?? "[[Section copy — to confirm]]"}
            </PlaceholderBlock>
          )}
        </OutlineSection>
      ))}

      <OutlineSection
        tone={nextTone()}
        mark="FAQs"
        eyebrow="Questions"
        title="FAQs"
        body="Answers are written into the page HTML (not click-only) and paired with FAQPage schema at launch."
      >
        {faqs.length ? (
          <div data-reveal-group className="grid gap-4 md:grid-cols-2">
            {faqs.map((question) => (
              <article
                key={question}
                data-reveal="card"
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg font-medium">{question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  [[Answer — to confirm]]
                </p>
              </article>
            ))}
          </div>
        ) : (
          <PlaceholderBlock data-reveal="card">
            [[FAQ questions and visible answers — to confirm]]
          </PlaceholderBlock>
        )}
      </OutlineSection>

      <OutlineSection
        tone={nextTone()}
        mark="Keep exploring"
        eyebrow="Related"
        title="Keep Exploring"
      >
        <InfoCardGrid items={related} columns="3" />
      </OutlineSection>

      <PageCta band title={ctaTitle} label={ctaLabel} href={contactHref} />
    </div>
  )
}
