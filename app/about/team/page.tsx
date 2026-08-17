import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/shared/reveal"
import { contactHref } from "@/constants/home/navigation"

const team = [
  {
    name: "Strategy",
    role: "Campaign architecture",
    description:
      "Connecting search, AI citation, and physical activations into one plan.",
  },
  {
    name: "Search & GEO",
    role: "Citation and ranking",
    description:
      "SEO, AEO, and GEO work so people and answer engines can find the brand.",
  },
  {
    name: "Experiential",
    role: "Activations and events",
    description:
      "Mall, campus, festival, and popup work that turns local attention into demand.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Team"
        description="Strategists, search specialists, and experiential producers working as one studio."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Team" },
        ]}
        mark="Studio"
        imageIndex={1}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <Reveal>
            <SectionMark>People</SectionMark>
            <SectionHeading
              className="mt-6"
              eyebrow="The studio"
              title="Physical work and conversational marketing, same table"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delayMs={index * 40}>
                <div className="border border-line bg-background">
                  <MediaFrame
                    index={index}
                    label={member.name}
                    aspect="photo"
                    className="border-0 border-b"
                  />
                  <div className="p-5">
                    <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                      {index + 1} · {member.role}
                    </p>
                    <h3 className="font-display mt-3 text-[21px] leading-[1.2] font-medium">
                      {member.name}
                    </h3>
                    <p className="mt-3 text-base leading-[1.6] text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <PageCta
              title="Want to work with the people behind the work?"
              label="Start a conversation"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
