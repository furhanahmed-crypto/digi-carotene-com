import Link from "next/link"

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
  "National news syndication and press release wire coverage.",
  "Narrative framing for publications that actually move the category.",
  "Executive profiles, media training, and talking-head placement.",
  "Event coverage that syncs offline activations with PR.",
]

export default function PRServicesPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Public relations"
        description="High-authority placements and narratives that build long-term brand equity — not a one-day mention."
        breadcrumbs={[
          { label: "Services", href: "/services/digital-marketing" },
          { label: "PR" },
        ]}
        mark="Services"
        imageIndex={0}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <SectionMark>PR</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="Narrative authority"
                title="Campaign architecture"
                body="We shape the story, then place it where search engines, journalists, and customers can find it."
              />
            </Reveal>
            <Reveal delayMs={40} className="lg:col-span-6">
              <MediaFrame index={1} label="PR" />
            </Reveal>
          </div>

          <ul className="mt-16 border-t border-line">
            {capabilities.map((item, index) => (
              <Reveal key={item} delayMs={index * 40}>
                <li className="grid gap-5 border-b border-line py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:py-10">
                  <div className="border-carotene md:col-span-4 md:border-l-2 md:pl-6">
                    <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                      {index + 1}
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 md:col-span-8">
                    <p className="text-base leading-[1.6] text-muted-foreground md:text-lg">
                      {item}
                    </p>
                    <Button
                      nativeButton={false}
                      render={<Link href={contactHref} />}
                      size="sm"
                      className="w-fit"
                    >
                      Know more
                    </Button>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-16">
            <PageCta
              title="Need a narrative, not a press blast?"
              label="Start a conversation"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
