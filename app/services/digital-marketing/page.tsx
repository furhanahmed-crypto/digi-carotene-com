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
import type { Metadata } from "next"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/services/digital-marketing")

const digitalServices = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    desc: "Google, Meta, LinkedIn and YouTube ads engineered around cost per lead and return on ad spend.",
  },
  {
    slug: "growth-marketing",
    title: "Growth Marketing",
    desc: "Full-funnel experiments, CRO and retention loops that compound growth month after month.",
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    desc: "Rank on Google, win Google Maps, and get recommended by ChatGPT, Gemini and Perplexity.",
  },
  {
    slug: "content",
    title: "Content Marketing",
    desc: "Blogs, guides, videos and answer-ready content that builds trust and search visibility.",
  },
  {
    slug: "social",
    title: "Social Media Marketing",
    desc: "Platform-native content, community management and paid social that turns followers into customers.",
  },
  {
    slug: "graphic-design",
    title: "Graphic Designing",
    desc: "Brand identities, campaign creatives, packaging and ad designs built to be noticed and remembered.",
  },
  {
    slug: "web",
    title: "Web Design and Development",
    desc: "Fast, mobile-first, SEO-ready websites and landing pages built to convert.",
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    desc: "LinkedIn and Instagram presence for founders and leaders who want to become the name people trust.",
  },
  {
    slug: "email",
    title: "Email and WhatsApp Marketing",
    desc: "Automated journeys that bring customers back, using the channels Indians actually open.",
  },
  {
    slug: "insta-shoot",
    title: "Insta Shoot",
    desc: "On-location photo and reel production made for the Instagram feed, not the billboard.",
  },
] as const

const differences = [
  "One strategy, many channels. SEO, ads and social share keywords, audiences and creative learning, so each makes the others cheaper.",
  "Tracking before spending. We set up GA4, conversion tracking, Meta Pixel and CAPI, call tracking and CRM integration before the first rupee goes live.",
  "Weekly optimisation, monthly clarity. We adjust budgets and creative every week and send one plain-English monthly report.",
  "AI-era ready. Every content asset is written to rank on Google and to be quoted by AI answer engines.",
]

export default function DigitalMarketingLandingPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Digital Marketing Services That Report in Revenue, Not Reach"
        description="Search, ads, social, content and your website are not separate jobs. They are one machine for winning customers. We build and run that machine for brands in Hyderabad, Bangalore and around the world, and we report it in the numbers your business runs on."
        mark="Digital Marketing Services"
      />

      <SectionLayout tone="white" decor={pageServicesDecor}>
        <div className="space-y-16 lg:space-y-24">
          <div className="flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href={contactHref} />}
              size="lg"
              className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
            >
              Get a Free Digital Audit
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href={contactHref} />}
              size="lg"
              variant="outline"
            >
              Talk to a Strategist
            </Button>
          </div>

          <Reveal>
            <SectionMark data-reveal="eyebrow">The shift</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="More channels. Less patience."
              title="More channels than ever. Less patience than ever."
              body="Digital now takes the biggest share of advertising money in India. That means more competition for the same eyeballs, higher costs per click, and buyers who decide faster. Doing a bit of everything no longer works. You need the right channels, connected, and measured against one goal."
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
                eyebrow="Full-service digital"
                title="Our digital marketing services"
              />

              <div
                data-reveal-group
                className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {digitalServices.map((service, index) => (
                  <div key={service.slug} data-reveal="card">
                    <ListingCard
                      href={`/services/digital-marketing/${service.slug}`}
                      index={index}
                      title={service.title}
                      body={service.desc}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <SectionMark data-reveal="eyebrow">How we work</SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="Difference"
                title="How our digital work is different"
              />

              <ul data-reveal-group className="mt-10 border-t border-line">
                {differences.map((item, index) => (
                  <li
                    key={item}
                    data-reveal="card"
                    className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
                  >
                    <div className="border-carotene md:col-span-2 md:border-l-2 md:pl-6">
                      <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <p className="text-base leading-[1.6] text-muted-foreground md:col-span-10 md:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <div data-reveal="cta">
              <PageCta
                title="Need a plan, not a channel menu?"
                label="Get a Free Digital Audit"
                href={contactHref}
              />
            </div>
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  )
}
