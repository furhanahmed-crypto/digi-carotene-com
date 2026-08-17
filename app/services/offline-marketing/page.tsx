import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { ListingCard } from "@/components/shared/listing-card"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/shared/reveal"
import { contactHref } from "@/constants/home/navigation"

const offlineServices = [
  {
    slug: "mall-activations",
    title: "Mall Activations",
    desc: "Engaging high-intent retail crowds with interactive popups, product sensory booths, and direct-to-consumer experiences.",
  },
  {
    slug: "residential-activations",
    title: "Residential Activations",
    desc: "Hyper-local community targeting inside premium residential complexes.",
  },
  {
    slug: "theatre-marketing",
    title: "Theatre Marketing",
    desc: "High-attention cinema audiences through pre-show displays, on-screen ads, and foyer branding.",
  },
  {
    slug: "campus-activations",
    title: "Campus Activations",
    desc: "Connect with Gen-Z on campuses through festivals, bootcamps, and brand sponsorships.",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    desc: "Product launches, summits, and customized workplace experiences.",
  },
  {
    slug: "festival-marketing",
    title: "Festival Marketing",
    desc: "High-visibility brand booths during major public events and community festivals.",
  },
  {
    slug: "popup-stores",
    title: "Popup Stores",
    desc: "Temporary physical retail spaces built for urgency, storytelling, and media hype.",
  },
  {
    slug: "influencer-campaigns",
    title: "Influencer Campaigns",
    desc: "Aligning local influencers to show up and broadcast physical events.",
  },
  {
    slug: "metro-branding",
    title: "Metro Branding",
    desc: "High-frequency urban transit — platform banners, train wraps, and digital takeovers.",
  },
]

export default function OfflineMarketingLandingPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Offline Marketing"
        description="Premium activations that turn local attention into measurable brand footprint."
        breadcrumbs={[
          { label: "Services", href: "/services/offline-marketing" },
          { label: "Offline Marketing" },
        ]}
        mark="Services"
        imageIndex={2}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offlineServices.map((service, index) => (
              <Reveal key={service.slug} delayMs={index * 40}>
                <ListingCard
                  href={`/services/offline-marketing/${service.slug}`}
                  index={index}
                  title={service.title}
                  body={service.desc}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <PageCta
              title="Want the work in the room, not just the feed?"
              label="Start a conversation"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
