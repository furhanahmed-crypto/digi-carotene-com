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
  label: `Client ${index + 1}`,
  note: "[[Client / project name — to confirm]]",
}))

export default function ClientsPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Clients"
        description="Until names and assets are confirmed, this page stays honest. Real partnerships will live here — no borrowed logos."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Clients" },
        ]}
        mark="Studio"
        imageIndex={2}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <Reveal>
            <SectionMark>Partnerships</SectionMark>
            <SectionHeading
              className="mt-6"
              eyebrow="To confirm"
              title="Client marks go here when they are cleared to publish"
              body="Each slot is a placeholder for a confirmed brand, the work we ran, and an image you will provide."
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
                    <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                      {index + 1}
                    </p>
                    <p className="mt-2 text-base leading-[1.6] text-muted-foreground">
                      {client.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <PageCta
              title="Want to be on this wall for real?"
              label="Start a conversation"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
