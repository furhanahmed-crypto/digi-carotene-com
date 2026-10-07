import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/shared/reveal"
import { contactHref } from "@/constants/home/navigation"

const clientSlots = Array.from({ length: 8 }, (_, index) => ({
  id: `client-${index + 1}`,
  label: `Client ${String(index + 1).padStart(2, "0")}`,
  note: "[[Client logo / name — to confirm with written permission]]",
}))

const industries = [
  {
    title: "Restaurants, Cafes and QSR",
    body: "Zomato and Swiggy visibility, Google Maps rankings, reels that make people hungry and offers that fill tables on slow weekdays.",
  },
  {
    title: "Healthcare and Wellness",
    body: "Patient-first content, compliant ads and local SEO for clinics, hospitals, dermatology, dental and nutrition brands.",
  },
  {
    title: "Salons, Beauty and Fashion",
    body: "Instagram-led growth, bridal season campaigns, influencer collaborations and booking funnels.",
  },
  {
    title: "Education",
    body: "Admission campaigns, counselling-lead funnels, campus activations and parent-trust content for schools, colleges and edtech.",
  },
  {
    title: "Real Estate, Furniture and Home",
    body: "High-ticket lead generation, site-visit campaigns, residential activations and showroom footfall.",
  },
  {
    title: "Technology and B2B",
    body: "LinkedIn, founder branding, account-based campaigns, PR and AI search visibility for SaaS and service companies.",
  },
]

export default function ClientsPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="300+ Clients. One Thing in Common: They Wanted Proof."
        description="From neighbourhood favourites to fast-growing startups and international brands, our clients came to us for the same reason. They wanted marketing they could measure."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Clients" },
        ]}
        mark="Our Clients"
        imageIndex={2}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <Reveal>
            <SectionMark>Brands we have worked with</SectionMark>
            <SectionHeading
              className="mt-6"
              eyebrow="Logos with permission"
              title="Client marks go here when they are cleared to publish"
              body="Each slot is a placeholder for a confirmed brand with written permission. No borrowed logos."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clientSlots.map((client, index) => (
              <Reveal key={client.id} delayMs={index * 40}>
                <div className="border border-line bg-background">
                  <MediaFrame
                    index={index}
                    label={client.label}
                    aspect="square"
                    className="border-0 border-b"
                  />
                  <div className="p-5">
                    <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-base leading-[1.6] text-muted-foreground">
                      {client.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-16 lg:mt-24 lg:pt-24">
            <Reveal>
              <SectionMark>Industries</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="Verticals"
                title="Industries we know inside out"
              />
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item, index) => (
                <Reveal key={item.title} delayMs={index * 30}>
                  <article className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-display text-xl font-medium md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-16">
            <PageCta
              title="Become client number 301."
              label="Get My Free Audit"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
