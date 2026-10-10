import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { pageServicesDecor } from "@/components/shared/page-decors"
import { ListingCard } from "@/components/shared/listing-card"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/motion/reveal"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"
import {
  bannerCtaPrimaryClassName,
  bannerCtaRowClassName,
  bannerCtaSecondaryClassName,
} from "@/constants/ui/banner-cta"
import type { Metadata } from "next"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/services/offline-marketing")

const offlineServices = [
  {
    slug: "mall-activations",
    title: "Mall Activations",
    desc: "Kiosks, sampling and experiential booths where weekend shoppers are already in a buying mood.",
  },
  {
    slug: "residential-activations",
    title: "Residential Activations",
    desc: "Gated community and apartment events that reach hundreds of households in one place.",
  },
  {
    slug: "theatre-marketing",
    title: "Theatre Marketing",
    desc: "On-screen ads and lobby activations in front of focused multiplex audiences.",
  },
  {
    slug: "campus-activations",
    title: "Campus Activations",
    desc: "Fests, sponsorships and brand ambassador programmes for Gen Z.",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    desc: "Launches, conferences, dealer meets and employee engagement events.",
  },
  {
    slug: "festival-marketing",
    title: "Festival Marketing",
    desc: "Campaigns built around Sankranti, Bonalu, Bathukamma, Ugadi, Ganesh Chaturthi, Dasara, Diwali and more.",
  },
  {
    slug: "popup-stores",
    title: "Popup Stores",
    desc: "Temporary retail spaces for launches, seasonal drops and city tests before you sign a lease.",
  },
  {
    slug: "influencer-campaigns",
    title: "Influencer Campaigns",
    desc: "Hyderabad and Bangalore creators briefed, coordinated and measured against real outcomes.",
  },
  {
    slug: "metro-branding",
    title: "Metro Branding",
    desc: "Station, train and corridor branding on Hyderabad Metro and Namma Metro.",
  },
] as const

export default function OfflineMarketingLandingPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Some Moments Can't Be Scrolled Past."
        description="A sampling counter at a busy mall on a Sunday. A stall at the society gate during Diwali week. A takeover at the metro station a commuter passes every morning. Offline marketing puts your brand in front of real people at the exact moment they are ready to notice. We make sure every one of those moments is measured."
        mark="Offline and Experiential Marketing"
        actions={
          <div className={bannerCtaRowClassName}>
            <Button
              nativeButton={false}
              render={<Link href={contactHref} />}
              size="lg"
              className={bannerCtaPrimaryClassName}
            >
              Plan an Activation
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href={contactHref} />}
              size="lg"
              variant="outline"
              className={bannerCtaSecondaryClassName}
            >
              Talk to Our On-Ground Team
            </Button>
          </div>
        }
      />

      <SectionLayout tone="white" decor={pageServicesDecor}>
        <div className="space-y-16 lg:space-y-24">
          <Reveal>
            <SectionMark data-reveal="eyebrow">Measured offline</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Proof, not guesses"
              title="Offline is not old-school. Unmeasured offline is."
              body="The problem with offline was never reach; it was proof. We fix that with QR journeys, WhatsApp opt-ins, unique offer codes, lead capture tablets and follow-up retargeting, so footfall becomes a number in your dashboard, not a guess in a report."
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionMark data-reveal="eyebrow">Services</SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="BTL & experiential"
                title="Our offline marketing services"
              />

              <div
                data-reveal-group
                className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {offlineServices.map((service, index) => (
                  <div key={service.slug} data-reveal="card">
                    <ListingCard
                      href={`/services/offline-marketing/${service.slug}`}
                      index={index}
                      title={service.title}
                      body={service.desc}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div data-reveal="cta">
              <PageCta
                title="Want the work in the room, not just the feed?"
                label="Plan an Activation"
                href={contactHref}
              />
            </div>
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  )
}
