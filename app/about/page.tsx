import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/shared/reveal"
import { contactHref } from "@/constants/home/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="About Digi Carotene"
        description="A Hyderabad agency for brands that need to be found in search, cited by AI, and remembered in the room."
        breadcrumbs={[{ label: "About" }]}
        mark="Studio"
        imageIndex={0}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <SectionMark>Mission</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="Discoverable and unforgettable"
                title="Making brands both findable and memorable"
                body="Modern marketing needs technical precision and experiential craft. SEO still ranks you on Google. Answer Engine Optimization and Generative Engine Optimization help AI systems cite you. Offline activations connect those pipelines to real rooms, real footfall, and real recall."
              />
            </Reveal>
            <Reveal delayMs={40} className="lg:col-span-6">
              <MediaFrame index={1} label="Studio" />
            </Reveal>
          </div>

          <Reveal className="mt-16">
            <PageCta
              title="Want to see if this fits your brand?"
              label="Start a conversation"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
