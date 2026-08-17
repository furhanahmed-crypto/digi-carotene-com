import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/shared/reveal"
import { contactHref } from "@/constants/home/navigation"

const values = [
  {
    title: "Radical transparency",
    description:
      "No hidden algorithms and no black-box reporting. Process and metrics stay visible.",
  },
  {
    title: "Performance first",
    description:
      "We optimize for rankings, citations, and real-world footprints — not vanity clicks.",
  },
  {
    title: "Craft and detail",
    description:
      "Every site, campaign, and popup should feel like one brand in the room.",
  },
]

export default function FoundersStoryPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Founder's story"
        description="Why Digi Carotene exists: one studio for search, AI citation, and work that happens in public."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Founder's Story" },
        ]}
        mark="Studio"
        imageIndex={0}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <SectionMark>Origin</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="A different kind of agency"
                title="Built to close the gap between clicks and rooms"
                body="The market had split. Digital shops chased keywords. Experiential shops built events with no search spine. Digi Carotene sits in between — SEO, AEO, and GEO on one side, activations on the other, one plan."
              />
              <p className="mt-6 max-w-xl border-l-2 border-carotene pl-5 text-base leading-[1.6] text-muted-foreground">
                We don&apos;t just build campaigns. We build systems that search engines index and people remember.
              </p>
            </Reveal>
            <Reveal delayMs={40} className="lg:col-span-6">
              <MediaFrame index={2} label="Founders" />
            </Reveal>
          </div>

          <div className="mt-16 border-t border-border pt-16 lg:mt-24 lg:pt-24">
            <Reveal>
              <SectionMark>Principles</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="How we decide"
                title="Guiding philosophies"
              />
            </Reveal>
            <ul className="mt-10 border-t border-line">
              {values.map((value, index) => (
                <Reveal key={value.title} delayMs={index * 40}>
                  <li className="grid gap-5 border-b border-line py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:py-10">
                    <div className="border-carotene md:col-span-4 md:border-l-2 md:pl-6">
                      <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                        {index + 1}
                      </p>
                      <h3 className="font-display mt-2 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-base leading-[1.6] text-muted-foreground md:col-span-8 md:text-lg">
                      {value.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="mt-16">
            <PageCta
              title="Want the story in person?"
              label="Start a conversation"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
