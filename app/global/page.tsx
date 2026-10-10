import type { Metadata } from "next"

import { OpenEnquiryButton } from "@/components/enquiry/open-enquiry-button"
import { GlobalClientStories } from "@/components/global/global-client-stories"
import {
  InfoCardGrid,
  OutlineSection,
  PlaceholderBlock,
} from "@/components/inner/outline-section"
import { PageCta } from "@/components/shared/page-cta"
import { PageHeader } from "@/components/shared/page-header"
import { bannerCtaPrimaryClassName } from "@/constants/ui/banner-cta"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/global")

const steps = [
  {
    title: "Discovery call in your time zone",
    body: "Goals, markets and budgets.",
  },
  {
    title: "Market audit",
    body: "Your search, AI-citation and competitor landscape in each country.",
  },
  {
    title: "90-day plan and fixed scope",
    body: "Signed off before work starts.",
  },
  {
    title: "Dedicated pod",
    body: "Account manager, strategist, designer, writer, ads specialist, developer.",
  },
  {
    title: "Weekly updates, monthly reviews",
    body: "Shared dashboards, Slack or Teams, invoices in your currency.",
  },
]

const globalServices = [
  "International and multi-country SEO, AEO and GEO",
  "Google, Meta and LinkedIn ads for US, UK, GCC and APAC audiences",
  "LinkedIn marketing and B2B thought leadership",
  "Websites, landing pages and sales decks",
  "White-label services for agencies abroad",
  "India market-entry: launches, activations and PR for global brands entering India",
]

const markets = [
  {
    title: "United States",
    body: "B2B SaaS and enterprise tech: LinkedIn, account-based content, website revamps.",
  },
  {
    title: "UAE & GCC",
    body: "Retail, real estate, hospitality: bilingual campaigns, Meta and Google ads.",
  },
  {
    title: "United Kingdom & Europe",
    body: "E-commerce and services: SEO, content, paid social.",
  },
  {
    title: "Singapore & Australia",
    body: "D2C and professional services.",
  },
  {
    title: "Indian diaspora brands",
    body: "Businesses serving NRI audiences worldwide.",
  },
]

const timeZones = [
  "United States",
  "UAE & GCC",
  "United Kingdom & Europe",
  "Singapore & Australia",
]

const faqs = [
  "Do you work in our time zone?",
  "How do we pay?",
  "Who owns the ad accounts and content?",
  "Can you work white-label?",
  "Minimum engagement?",
]

export default function GlobalPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Global Digital Marketing Agency — Hyderabad Talent, Worldwide Results"
        description="Brands abroad work with Digi Carotene for one reason: a senior, full-stack marketing team that delivers like an in-house department — at a cost that makes long-term growth possible."
        mark="Global Markets"
        actions={
          <OpenEnquiryButton
            label="Enquire"
            className={bannerCtaPrimaryClassName}
          />
        }
      />

      <OutlineSection
        tone="white"
        mark="Process"
        eyebrow="Working together"
        title="How We Work With International Clients"
      >
        <InfoCardGrid items={steps} columns="3" />
      </OutlineSection>

      <OutlineSection
        tone="cream"
        mark="Services"
        eyebrow="Capabilities"
        title="What We Deliver for Global Brands"
      >
        <InfoCardGrid
          columns="3"
          items={globalServices.map((title) => ({ title }))}
        />
      </OutlineSection>

      <OutlineSection
        tone="white"
        mark="Markets"
        eyebrow="Where we work"
        title="Markets We Serve"
      >
        <InfoCardGrid items={markets} columns="3" />
      </OutlineSection>

      <OutlineSection
        tone="cream"
        mark="Hours"
        eyebrow="Time zones"
        title="How Collaboration Works Across Time Zones"
      >
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-secondary/60 text-xs tracking-loose text-muted-foreground uppercase">
              <tr>
                <th scope="col" className="px-5 py-3 font-medium">
                  Region
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Overlap
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Meetings
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {timeZones.map((region) => (
                <tr key={region}>
                  <th scope="row" className="px-5 py-4 font-medium">
                    {region}
                  </th>
                  <td className="px-5 py-4 text-muted-foreground">
                    Shared overlap with IST working hours
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">
                    Video calls booked in your preferred window
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </OutlineSection>

      <OutlineSection
        tone="white"
        mark="Trust"
        eyebrow="Contracts"
        title="Security, Contracts and Payments"
      >
        <PlaceholderBlock data-reveal="card">
          NDAs and data-protection on request. International payments and
          GST/export invoicing available — we confirm the right method on the
          discovery call.
        </PlaceholderBlock>
      </OutlineSection>

      <OutlineSection
        tone="cream"
        mark="Proof"
        eyebrow="Stories"
        title="Global Client Stories"
        body="From a 4,500-seat arena in New York to SAP and SaaS companies in Texas and California, here's how we help brands outside India find customers and grow."
      >
        <GlobalClientStories />
      </OutlineSection>

      <OutlineSection
        tone="white"
        mark="FAQs"
        eyebrow="Questions"
        title="FAQs for International Clients"
      >
        <div data-reveal-group className="grid gap-4 md:grid-cols-2">
          {faqs.map((question) => (
            <article
              key={question}
              data-reveal="card"
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-lg font-medium">{question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Ask us on the discovery call — or see Contact for a written
                reply within one working day.
              </p>
            </article>
          ))}
        </div>
      </OutlineSection>

      <PageCta
        band
        mark="Global clients"
        title="Ready to talk about your market?"
        action={
          <OpenEnquiryButton
            label="Enquire"
            className="bg-ink text-paper hover:bg-ink/90 dark:bg-brand-yellow dark:text-ink dark:hover:bg-brand-yellow/90"
          />
        }
      />
    </div>
  )
}
