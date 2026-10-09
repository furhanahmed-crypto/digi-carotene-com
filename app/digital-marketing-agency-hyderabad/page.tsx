import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { GoogleReviews } from "@/components/shared/google-reviews"
import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { contactHref, siteContact } from "@/constants/home/navigation"
import type { Metadata } from "next"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/digital-marketing-agency-hyderabad")

const services = [
  {
    title: "Local SEO and Google Maps",
    body: 'Rank in the map pack for "near me" searches in your area, from Madhapur to Malakpet.',
  },
  {
    title: "AI search visibility",
    body: "Get recommended when someone asks ChatGPT or Gemini for the best option in Hyderabad.",
  },
  {
    title: "Google and Meta ads",
    body: "Paid campaigns built around cost per lead and city-level intent, not vanity reach.",
  },
  {
    title: "Social, content and web",
    body: "Feeds, answer-ready content and conversion-focused sites that match how Hyderabad buys.",
  },
  {
    title: "BTL activations",
    body: "Mall, society, campus and festival work measured with QR, WhatsApp and offer codes.",
  },
  {
    title: "PR and reputation",
    body: "Coverage and brand facts that strengthen what Google and AI say about you.",
  },
]

export default function HyderabadAgencyPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="The Data-Led Digital Marketing Agency Hyderabad Businesses Trust"
        description="Hyderabad doesn't buy on hype. It buys on trust, then tells everyone. For 7+ years, Digi Carotene has helped Hyderabad restaurants, clinics, salons, colleges, real estate firms and tech companies earn that trust online and on the ground, with results measured in enquiries, footfall and revenue."
        mark="Digital Marketing Agency in Hyderabad"
      />

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <div className="space-y-16 lg:space-y-24">
          <div className="flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href={contactHref} />}
              size="lg"
              className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
            >
              Get a Free Audit
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <Reveal>
            <SectionMark data-reveal="eyebrow">Why Hyderabad</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Two cities in one"
              title="Why Hyderabad needs a different marketing playbook"
              body="Hyderabad is two cities in one. There is the global IT city of HITEC City, Gachibowli, Kondapur and the Financial District, with young professionals who search in English, order online and compare everything. And there is the Hyderabad of Kukatpally, Dilsukhnagar, Secunderabad and the Old City, with large families, Telugu-first content and decisions made over WhatsApp. A campaign that works in one can fall flat in the other. We plan for both, often in the same campaign."
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionMark data-reveal="eyebrow">What we do</SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="Local + digital"
                title="What we do for Hyderabad businesses"
              />

              <div
                data-reveal-group
                className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {services.map((item) => (
                  <article
                    key={item.title}
                    data-reveal="card"
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <h3 className="font-display text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>

          <GoogleReviews title="What Hyderabad Clients Say" />

          <div className="rounded-2xl border border-border bg-[#f3efe6] p-6 md:p-8 dark:bg-secondary">
            <Reveal>
              <SectionMark data-reveal="eyebrow" tone="paper">
                Visit us
              </SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="Visit us"
                title="Hyderabad office"
                body={`${siteContact.addressOneLine}. Call ${siteContact.phoneDisplay}. ${siteContact.hours}.`}
              />
            </Reveal>
          </div>

          <Reveal>
            <div data-reveal="cta">
              <PageCta
                title="Ready to grow in Hyderabad?"
                label="Get a Free Audit"
                href={contactHref}
              />
            </div>
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  )
}
