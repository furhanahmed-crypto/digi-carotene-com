import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/shared/reveal"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

const capabilities = [
  {
    title: "Media relations and press coverage",
    body: "Story angles journalists want, pitched to the right national, regional and trade publications, including Telugu and Kannada media.",
  },
  {
    title: "Founder and executive narrative",
    body: "Interviews, bylined articles, podcasts and panels that position your leaders as experts.",
  },
  {
    title: "Launch and announcement PR",
    body: "Funding rounds, product launches, expansions and milestones announced with impact.",
  },
  {
    title: "Crisis communication",
    body: "Prepared statements, response playbooks and rapid support when something goes wrong.",
  },
  {
    title: "Online reputation management",
    body: "Review monitoring and responses, search result improvement and correcting inaccurate information.",
  },
  {
    title: "AI and search reputation",
    body: "Consistent brand facts across trusted sources so Google and AI engines describe you correctly.",
  },
]

const process = [
  {
    title: "Audit",
    body: "What media, search and AI engines currently say about you and your competitors.",
  },
  {
    title: "Narrative",
    body: "Key messages, story angles and spokesperson preparation.",
  },
  {
    title: "Outreach",
    body: "Targeted pitching, placements and follow-through with journalists and platforms.",
  },
  {
    title: "Amplify and protect",
    body: "Owned-channel amplification, review response and ongoing reputation monitoring.",
  },
]

export default function PRServicesPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="When Someone Googles You, or Asks ChatGPT About You, What Comes Back?"
        description="Your reputation now lives in search results, news archives, review sites and AI answers. Investors, customers, partners and future hires all check it before they trust you. We help you earn coverage that matters and make sure the story told about you is accurate, consistent and working in your favour."
        breadcrumbs={[
          { label: "Services", href: "/services/digital-marketing" },
          { label: "PR" },
        ]}
        mark="PR and Reputation"
        imageIndex={0}
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
              Talk to Our PR Team
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <SectionMark>PR is now part of search</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="AEO & GEO"
                title="Coverage that becomes the record"
                body="AI engines like ChatGPT, Gemini and Perplexity build their answers from sources they consider trustworthy. A well-placed article does more than impress readers on the day it runs. It becomes part of the record that shapes how your brand is described for years."
              />
            </Reveal>
            <Reveal delayMs={40} className="lg:col-span-6">
              <MediaFrame index={1} label="PR" />
            </Reveal>
          </div>

          <div>
            <Reveal>
              <SectionMark>What we do</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="Capabilities"
                title="Reputation work that compounds"
              />
            </Reveal>
            <ul className="mt-10 border-t border-line">
              {capabilities.map((item, index) => (
                <Reveal key={item.title} delayMs={index * 30}>
                  <li className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
                    <div className="border-carotene md:col-span-4 md:border-l-2 md:pl-6">
                      <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display mt-2 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-base leading-[1.6] text-muted-foreground md:col-span-8 md:text-lg">
                      {item.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <SectionMark>Process</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="How we work"
                title="Our process"
              />
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => (
                <Reveal key={item.title} delayMs={index * 30}>
                  <article className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-3 text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <PageCta
              title="Need a narrative, not a press blast?"
              label="Talk to Our PR Team"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
