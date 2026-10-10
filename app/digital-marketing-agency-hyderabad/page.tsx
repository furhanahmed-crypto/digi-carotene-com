import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { OpenEnquiryButton } from "@/components/enquiry/open-enquiry-button"
import { OpenGrowthAuditButton } from "@/components/growth-audit/open-growth-audit-button"
import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { PageCta } from "@/components/shared/page-cta"
import { StaticReviews } from "@/components/shared/static-reviews"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { whatsappHref, siteContact } from "@/constants/home/navigation"
import {
  bannerCtaPrimaryClassName,
  bannerCtaRowClassName,
  bannerCtaSecondaryClassName,
} from "@/constants/ui/banner-cta"
import type { Metadata } from "next"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor(
  "/digital-marketing-agency-hyderabad"
)

const digitalServices = [
  {
    title: "Performance Marketing",
    body: "Google, Meta, YouTube and LinkedIn ads built around cost per lead and ROAS, targeted to the Hyderabad areas you serve.",
    href: "/services/digital-marketing/performance-marketing/",
  },
  {
    title: "Growth Marketing",
    body: "Funnel fixes, WhatsApp follow-ups, offers and referral programs that make every customer cheaper to win and quicker to return.",
    href: "/services/digital-marketing/growth-marketing/",
  },
  {
    title: "Social Media Marketing",
    body: "Reels, content calendars and community management in Telugu and English that turn followers into bookings.",
    href: "/services/digital-marketing/social/",
  },
  {
    title: "SEO, Google Maps & AI Search",
    body: 'Rank in the map pack for "near me" searches from Madhapur to Malakpet, and get named when people ask ChatGPT or Gemini.',
    href: "/services/digital-marketing/seo/",
  },
  {
    title: "Content Marketing",
    body: "Website copy, blogs and video scripts that answer what Hyderabad customers ask before they buy.",
    href: "/services/digital-marketing/content/",
  },
  {
    title: "Web Design & Development",
    body: "Fast, mobile-first websites and landing pages built to convert ad and search traffic into enquiries.",
    href: "/services/digital-marketing/web/",
  },
  {
    title: "Graphic Designing",
    body: "Brand identity, ad creatives and social designs that stop the scroll.",
    href: "/services/digital-marketing/graphic-design/",
  },
  {
    title: "Personal Branding",
    body: "Founders, doctors and experts positioned as the trusted name in their field.",
    href: "/services/digital-marketing/personal-branding/",
  },
  {
    title: "WhatsApp & Email Marketing",
    body: "Automated reminders, broadcasts and journeys that bring customers back.",
    href: "/services/digital-marketing/whatsapp-marketing/",
  },
  {
    title: "Insta Shoot",
    body: "In-house photo and reel shoots at your outlet, anywhere in Hyderabad.",
    href: "/services/digital-marketing/insta-shoot/",
  },
  {
    title: "BTL Activations",
    body: "Mall, society, campus and festival activations measured with QR, WhatsApp and offer codes.",
    href: "/services/offline-marketing/",
  },
  {
    title: "PR & Reputation",
    body: "Media coverage, Google review growth and reputation management that build trust.",
    href: "/services/pr/",
  },
] as const

export default function HyderabadAgencyPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="The Data-Led Digital Marketing Agency Hyderabad Businesses Trust"
        description="Hyderabad doesn't buy on hype. It buys on trust, then tells everyone. For 7+ years, Digi Carotene has helped Hyderabad restaurants, clinics, salons, colleges, real estate firms and tech companies earn that trust online and on the ground, with results measured in enquiries, footfall and revenue."
        mark="Digital Marketing Agency in Hyderabad"
        actions={
          <div className={bannerCtaRowClassName}>
            <OpenGrowthAuditButton
              label="Get a Free Growth Audit"
              ctaLocation="hyderabad_hero"
              className={bannerCtaPrimaryClassName}
            />
            <Button
              nativeButton={false}
              render={<a href={whatsappHref} />}
              size="lg"
              variant="outline"
              className={bannerCtaSecondaryClassName}
            >
              Chat on WhatsApp
              <ArrowRight className="size-4" />
            </Button>
          </div>
        }
      />

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <div className="space-y-16 lg:space-y-24">
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
                title="What We Do for Hyderabad Businesses"
                body="We don't sell fixed packages. We first study your business model — who buys, how they decide, what a customer is worth — then pick the services from our list that will grow it fastest, and report every month in leads and revenue."
              />

              <div
                data-reveal-group
                className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {digitalServices.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    data-reveal="card"
                    className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30"
                  >
                    <h3 className="font-display text-xl font-medium group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.body}
                    </p>
                  </Link>
                ))}
              </div>

              <div data-reveal="cta" className="mt-8">
                <OpenGrowthAuditButton
                  label="Get a Free Growth Audit"
                  ctaLocation="hyderabad_services"
                  className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
                />
              </div>
            </Reveal>
          </div>

          <StaticReviews title="What Hyderabad Clients Say" />

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
                action={
                  <OpenEnquiryButton
                    label="Contact Us"
                    className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
                  />
                }
              />
            </div>
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  )
}
