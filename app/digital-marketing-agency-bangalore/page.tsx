import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

const services = [
  {
    title: "Growth and performance marketing",
    body: "Google, Meta and LinkedIn campaigns with rigorous testing and CAC-focused reporting.",
  },
  {
    title: "SEO, AEO and GEO",
    body: "Rank on Google and get cited by ChatGPT, Gemini and Perplexity, where Bangalore's tech-savvy buyers increasingly start.",
  },
  {
    title: "Social, content and founder branding",
    body: "Feeds and personal brands that earn trust in a city that reads reviews before it buys.",
  },
  {
    title: "Web and conversion",
    body: "Sites and landing pages built for speed, clarity and enquiry — not decoration.",
  },
  {
    title: "BTL activations",
    body: "Campus, mall, society and festival work with measurable follow-up into digital.",
  },
  {
    title: "PR and reputation",
    body: "Coverage and brand facts that shape what search and AI say about you.",
  },
]

export default function BangaloreAgencyPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Bengaluru Tests Everything. Your Marketing Should Too."
        description="Bangalore buyers read reviews, compare prices, ask AI and try the free trial before they commit. Investors ask about CAC and retention before revenue. Digi Carotene brings a data-led, test-and-learn approach to Bangalore brands, with 7+ years and 300+ clients of experience behind every recommendation."
        breadcrumbs={[{ label: "Locations" }, { label: "Bangalore" }]}
        mark="Digital Marketing Agency in Bangalore"
        imageIndex={1}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container className="space-y-16 lg:space-y-24">
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
            <SectionMark data-reveal="eyebrow">The market</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Compete on measurement"
              title="The most competitive digital market in India"
              body="Bangalore has more startups, more marketers and more ad spend per square kilometre than almost anywhere in India. Cost per click in categories like SaaS, edtech, healthcare and real estate is among the highest in the country. In a market like that, you do not win by spending more. You win by measuring better, testing faster and showing up where competitors are not, including AI answers and on the ground."
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
                eyebrow="Serving Bangalore"
                title="What we do for Bangalore brands"
              />

              <div
                data-reveal-group
                className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {services.map((item, index) => (
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

          <div className="rounded-2xl border border-border bg-[#f3efe6] p-6 md:p-8 dark:bg-secondary">
            <Reveal>
              <SectionMark data-reveal="eyebrow" tone="paper">
                Presence
              </SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="No invented address"
                title="Serving Bangalore with on-ground teams"
                body="We run campaigns across Bangalore — from Koramangala startups to Whitefield retail — with on-ground crews for shoots, activations and events. A staffed Bangalore office address will be published only if a real office exists."
              />
            </Reveal>
          </div>

          <Reveal>
            <div data-reveal="cta">
              <PageCta
                title="Ready to grow in Bangalore?"
                label="Get a Free Audit"
                href={contactHref}
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
