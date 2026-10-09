import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/motion/reveal"
import { contactHref } from "@/constants/home/navigation"
import type { Metadata } from "next"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/about/team")


const leadership = [
  {
    name: "Founder",
    role: "Founder & Strategy",
    description:
      "Sets the growth targets and keeps every channel accountable to leads and revenue.",
  },
  {
    name: "Performance lead",
    role: "Performance & Analytics",
    description:
      "Owns paid media, tracking and weekly optimisation against cost per lead and ROAS.",
  },
  {
    name: "Creative lead",
    role: "Content & Production",
    description:
      "Runs content, design and shoots so campaigns look sharp and convert.",
  },
]

const departments = [
  {
    name: "Strategy and Account Management",
    description:
      "Your single point of contact. They own your targets, run reviews and make sure every team is working to the same plan.",
  },
  {
    name: "Performance Marketing and Analytics",
    description:
      "Google Ads, Meta Ads and tracking specialists who watch cost per lead and return on ad spend daily, not monthly.",
  },
  {
    name: "Search, AEO and Content",
    description:
      "SEO specialists and writers who make your brand rank on Google and get quoted by AI answer engines.",
  },
  {
    name: "Creative and Design",
    description:
      "Designers, video editors and copywriters who turn strategy into scroll-stopping work.",
  },
  {
    name: "Web and Technology",
    description:
      "Developers who build fast, SEO-ready websites, landing pages, WhatsApp and CRM automations.",
  },
  {
    name: "Production",
    description:
      "Photographers and videographers who handle Instagram shoots, brand films and event coverage.",
  },
  {
    name: "On-Ground Activations and PR",
    description:
      "The crew that runs mall, campus, residential and festival activations across Hyderabad and Bangalore, plus media relations.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="The People Behind the Numbers"
        description="Great marketing is part science and part craft. Our team brings both: analysts who live in spreadsheets, creatives who live in Figma and on set, and an on-ground crew that knows how to make a crowd stop and look."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Team" }]}
        mark="Our Team"
      />

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <div>
          <Reveal>
            <SectionMark data-reveal="eyebrow">Leadership</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Names to confirm"
              title="Leaders with real credentials"
              body="Photos, full names, titles, years of experience and LinkedIn links strengthen trust for Google and AI engines. Slots stay explicit until confirmed."
            />

            <div data-reveal-group className="mt-12 grid gap-5 md:grid-cols-3">
              {leadership.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  data-reveal="card"
                  className="border border-line bg-background"
                >
                  <MediaFrame
                    index={index}
                    label={member.name}
                    aspect="photo"
                    className="border-0 border-b"
                  />
                  <div className="p-5">
                    <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                      {index + 1} · {member.role}
                    </p>
                    <h3 className="mt-3 font-display text-[21px] leading-[1.2] font-medium">
                      {member.name}
                    </h3>
                    <p className="mt-3 text-base leading-[1.6] text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 border-t border-border pt-16 lg:mt-24 lg:pt-24">
            <Reveal>
              <SectionMark data-reveal="eyebrow">How we organise</SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="Departments"
                title="One plan, specialised crews"
              />

              <ul data-reveal-group className="mt-10 border-t border-line">
                {departments.map((dept, index) => (
                  <li
                    key={dept.name}
                    data-reveal="card"
                    className="grid gap-5 border-b border-line py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:py-10"
                  >
                    <div className="border-carotene md:col-span-4 md:border-l-2 md:pl-6">
                      <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-display text-[21px] leading-[1.2] font-medium md:text-[26px]">
                        {dept.name}
                      </h3>
                    </div>
                    <p className="text-base leading-[1.6] text-muted-foreground md:col-span-8 md:text-lg">
                      {dept.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mt-16">
            <div data-reveal="cta">
              <PageCta
                title="Meet the team on a call."
                label="Book a Discovery Call"
                href={contactHref}
              />
            </div>
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  )
}
