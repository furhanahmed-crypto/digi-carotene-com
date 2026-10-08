import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import {
  pageCreamDecor,
  pageServicesDecor,
  pageWhiteDecor,
} from "@/components/shared/page-decors"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"
import type { Metadata } from "next"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/about")


const beliefs = [
  {
    title: "Data decides",
    body: "Opinions are welcome in brainstorms. Decisions are made on data: search demand, audience behaviour, cost per lead, conversion rates and sales. You see the same dashboard we do.",
  },
  {
    title: "Results over activity",
    body: "Twenty posts a month is activity. Forty qualified enquiries a month is a result. We plan backwards from the result.",
  },
  {
    title: "Online and offline are one journey",
    body: "Your customer sees a reel on the metro, walks past your kiosk at the mall, then asks ChatGPT which brand to trust. We plan for the whole journey, not one channel.",
  },
  {
    title: "Honest partnership",
    body: "No guaranteed rankings, no fake reviews, no inflated numbers. Just clear goals, clear reporting and a team that picks up the phone.",
  },
] as const

export default function AboutPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="We Are Not Here to Make Marketing Look Busy. We Are Here to Make It Pay."
        description="Digi Carotene is a data-led, results-first marketing agency based in Hyderabad. For more than seven years we have helped 300+ clients in Hyderabad, Bangalore and across the globe get found, get chosen and grow — with every decision backed by numbers."
        breadcrumbs={[{ label: "About" }]}
        mark="About Digi Carotene"
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
              Work With Us
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/about/team" />}
              size="lg"
              variant="outline"
            >
              Meet the Team
            </Button>
          </div>

          <Reveal className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionMark data-reveal="eyebrow">Why we exist</SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="Results you can count"
                title="Most businesses we meet have been burned before."
                body="They have paid for posts that nobody saw, ads that brought clicks but no customers, and reports full of words like reach and impressions that never explained where the money went. We started Digi Carotene to fix that. Our rule is simple: if we cannot measure it, we do not sell it as a result."
              />
            </div>
            <div data-reveal="image" className="lg:col-span-6">
              <MediaFrame index={1} label="Studio" />
            </div>
          </Reveal>

          <Reveal>
            <SectionMark data-reveal="eyebrow">Why the name</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Carotene"
              title="Warm, concentrated, never just decoration."
              body="Carotene is a natural pigment. It is warm, concentrated and always there for a reason. That is how we think about marketing. Every rupee, every design and every word should be used with intent and should do a job you can see."
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionMark data-reveal="eyebrow">What we believe</SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="Principles"
                title="How we partner with brands"
              />

              <div
                data-reveal-group
                className="mt-10 grid gap-4 sm:grid-cols-2"
              >
                {beliefs.map((item) => (
                  <article
                    key={item.title}
                    data-reveal="card"
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <h3 className="font-display text-2xl font-medium">
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

          <div className="rounded-2xl border border-border bg-[#f3efe6] p-6 md:p-8 dark:bg-secondary">
            <Reveal>
              <SectionMark data-reveal="eyebrow" tone="paper">
                In numbers
              </SectionMark>
              <ul
                data-reveal="text"
                className="mt-6 space-y-3 text-base text-foreground"
              >
                <li>7+ years of building brands and campaigns.</li>
                <li>300+ clients served across industries and countries.</li>
                <li>
                  Full-stack delivery: strategy, ads, SEO, content, design, web,
                  production, activations and PR.
                </li>
                <li>
                  Teams covering strategy, performance media, SEO and AEO,
                  content, design, development, production, on-ground
                  activations and PR.
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <SectionMark data-reveal="eyebrow">Where we work</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Hyderabad · Bangalore · Global"
              title="Home in Hyderabad. Reach across Bangalore."
              body="Our home is Hyderabad, from Hitech City to Dilsukhnagar. We also run campaigns for brands across Bangalore — from Koramangala startups to Whitefield retail — and serve clients in other countries remotely."
            />
          </Reveal>

          <Reveal>
            <div data-reveal="cta">
              <PageCta
                title="Want to see if this fits your brand?"
                label="Start a conversation"
                href={contactHref}
              />
            </div>
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  )
}
