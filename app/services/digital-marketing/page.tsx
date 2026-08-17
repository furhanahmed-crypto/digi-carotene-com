import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { ListingCard } from "@/components/shared/listing-card"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/shared/reveal"
import { contactHref } from "@/constants/home/navigation"

const digitalServices = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    desc: "Highly targeted, high-intent paid search and social campaigns that convert impressions into pipeline and profit.",
  },
  {
    slug: "growth-marketing",
    title: "Growth Marketing",
    desc: "Data-driven, full-funnel experimentation and customer acquisition strategies that scale brand presence and revenue.",
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    desc: "Traditional and conversational organic search positioning that keeps your brand authority first on Google.",
  },
  {
    slug: "content",
    title: "Content Marketing",
    desc: "On-brand copy and storytelling assets designed to answer audience queries and fuel SEO and AEO pipelines.",
  },
  {
    slug: "social",
    title: "Social Media Marketing",
    desc: "Community building, brand narrative distribution, and platform-specific content that drives engagement.",
  },
  {
    slug: "graphic-design",
    title: "Graphic Designing",
    desc: "Visual identities, brand graphics, and presentation assets that share one language.",
  },
  {
    slug: "web",
    title: "Web Design & Development",
    desc: "Bespoke, fast websites with architectures built for SEO and AEO.",
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    desc: "Positioning founders and leaders as industry authorities through guided storytelling.",
  },
  {
    slug: "email",
    title: "Email Marketing",
    desc: "Direct communications that stay on-brand and useful — not filler newsletters.",
  },
  {
    slug: "insta-shoot",
    title: "Insta Shoot",
    desc: "Brand and content shoots made for campaigns, reels, and immediate marketing use.",
  },
]

export default function DigitalMarketingLandingPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Digital Marketing"
        description="Every capability needed to make a brand visible, indexable, and cited — from performance to the site itself."
        breadcrumbs={[
          { label: "Services", href: "/services/digital-marketing" },
          { label: "Digital Marketing" },
        ]}
        mark="Services"
        imageIndex={1}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {digitalServices.map((service, index) => (
              <Reveal key={service.slug} delayMs={index * 40}>
                <ListingCard
                  href={`/services/digital-marketing/${service.slug}`}
                  index={index}
                  title={service.title}
                  body={service.desc}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <PageCta
              title="Need a plan, not a channel menu?"
              label="Start a conversation"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
