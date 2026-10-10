import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { GlobalClientStories } from "@/components/global/global-client-stories"
import {
  InfoCardGrid,
  OutlineSection,
  PlaceholderBlock,
} from "@/components/inner/outline-section"
import { PageCta } from "@/components/shared/page-cta"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"
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
          <Button
            nativeButton={false}
            render={<Link href={contactHref} />}
            size="lg"
            className={bannerCtaPrimaryClassName}
          >
            Book a Call in Your Time Zone
            <ArrowRight className="size-4" />
          </Button>
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
        eyebrow="What we offer"
        title="Services for Global Brands"
      >
        <InfoCardGrid
          columns="3"
          items={globalServices.map((title) => ({
            title,
            body: "Delivered by one Hyderabad pod with overlap hours in your time zone.",
          }))}
        />
      </OutlineSection>

      <OutlineSection
        tone="white"
        mark="Markets"
        eyebrow="Where we work"
        title="Markets We Serve"
        body="We support international brands remotely and India market-entry on the ground."
      >
        <InfoCardGrid items={markets} colorful columns="3" />
      </OutlineSection>

      <OutlineSection
        tone="cream"
        mark="Why India"
        eyebrow="Why Hyderabad"
        title="Why Choose an Indian Agency — and Why Hyderabad"
        body="Hyderabad is one of India's largest technology hubs, home to global capability centres of major tech companies. That talent pool — strong in tech, data and English-first communication — is what our team is built from."
      />

      <OutlineSection
        tone="white"
        mark="Coverage"
        eyebrow="Availability"
        title="Time-Zone Coverage"
      >
        <div
          data-reveal="card"
          className="overflow-x-auto rounded-2xl border border-border bg-card"
        >
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="border-b border-border bg-secondary/60 text-xs tracking-label uppercase">
              <tr>
                <th scope="col" className="px-5 py-3 font-medium">
                  Client region
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Overlap hours (IST)
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Meeting windows
                </th>
              </tr>
            </thead>
            <tbody>
              {timeZones.map((region) => (
                <tr
                  key={region}
                  className="border-b border-border last:border-0"
                >
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
        tone="cream"
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
        tone="white"
        mark="Proof"
        eyebrow="Stories"
        title="Global Client Stories"
        body="From a 4,500-seat arena in New York to SAP and SaaS companies in Texas and California, here's how we help brands outside India find customers and grow."
      >
        <GlobalClientStories />
      </OutlineSection>

      <OutlineSection
        tone="cream"
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
        title="Book a call in your time zone."
        label="Book a Call"
        href={contactHref}
      />
    </div>
  )
}
