import { ClientLogo } from "@/components/home/clients/client-logo"
import { clientLogos } from "@/constants/home/clients"
import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/motion/reveal"
import { contactHref } from "@/constants/home/navigation"
import type { Metadata } from "next"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/about/clients")


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
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Clients" }]}
        mark="Our Clients"
      />

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <div>
          <Reveal>
            <SectionMark data-reveal="eyebrow">
              Brands we have worked with
            </SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Layout reference"
              title="Familiar brand marks for spacing — not our client roster"
              body="These logos are layout references only so the grid reads like a real clients band. They are not Digi Carotene clients. Swap in permissioned marks before launch."
            />

            <div
              data-reveal-group
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {clientLogos.map((client, index) => (
                <div
                  key={client.id}
                  data-reveal="card"
                  className="border border-line bg-background"
                >
                  <div className="flex aspect-square items-center justify-center border-b border-line bg-secondary/30 p-8">
                    <ClientLogo logo={client} size="card" />
                  </div>
                  <div className="p-5">
                    <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-base leading-[1.6] text-muted-foreground">
                      {client.name} — layout reference only
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 border-t border-border pt-16 lg:mt-24 lg:pt-24">
            <Reveal>
              <SectionMark data-reveal="eyebrow">Industries</SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="Verticals"
                title="Industries we know inside out"
              />

              <div
                data-reveal-group
                className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {industries.map((item) => (
                  <article
                    key={item.title}
                    data-reveal="card"
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <h3 className="font-display text-xl font-medium md:text-2xl">
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

          <Reveal className="mt-16">
            <div data-reveal="cta">
              <PageCta
                title="Become client number 301."
                label="Get My Free Audit"
                href={contactHref}
              />
            </div>
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  )
}
