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

export const metadata: Metadata = metadataFor("/about/founders-story")

const promises = [
  "We will never sell you a metric that does not matter to your business.",
  "If something is not working, you will hear it from us before you notice it.",
  "Your growth is the only scoreboard we care about.",
]

export default function FoundersStoryPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title='It Started With a Simple Question: "Where Did the Money Go?"'
        description="How a Hyderabad founder built a data-led marketing agency trusted by 300+ clients over 7+ years — and why every campaign still starts with a number."
        mark="Founder's Story"
      />

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <div>
          <Reveal className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionMark data-reveal="eyebrow">
                The problem we kept seeing
              </SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="Origin"
                title="Spend without a clear return"
                body="Before Digi Carotene, we kept meeting business owners who had spent real money on marketing and could not answer one basic question: what did it bring back? They had beautiful posts. They had reports full of impressions. What they did not have was a clear line from spend to customers."
              />
            </div>
            <div data-reveal="image" className="lg:col-span-6">
              <MediaFrame label="Hyderabad studio" aspect="photo" />
            </div>
          </Reveal>

          <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
            <Reveal>
              <SectionMark data-reveal="eyebrow">The first client</SectionMark>
              <SectionHeading
                eyebrowProps={{ "data-reveal": "eyebrow" }}
                titleProps={{ "data-reveal": "heading" }}
                bodyProps={{ "data-reveal": "text" }}
                className="mt-6"
                eyebrow="Turning point"
                title="Start with the number that matters"
                body="The first engagements proved a simple rule: start with the number that matters to the business — leads, footfall, revenue — and work backwards into channels, creatives and tracking. That project taught us the operating system we still run on today."
              />
            </Reveal>

            <Reveal className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <SectionMark data-reveal="eyebrow">
                  Building Digi Carotene
                </SectionMark>
                <SectionHeading
                  eyebrowProps={{ "data-reveal": "eyebrow" }}
                  titleProps={{ "data-reveal": "heading" }}
                  bodyProps={{ "data-reveal": "text" }}
                  className="mt-6"
                  eyebrow="Seven years on"
                  title="One channel was never enough"
                  body="Over the next seven years, that rule turned into an agency. We added SEO, then performance marketing, then production, web development and on-ground activations, because our clients' customers were not living in one channel, so neither could we. Today we have worked with 300+ clients, from neighbourhood restaurants in Hyderabad to brands abroad. The tools have changed. AI search did not exist when we started. The question has not changed: where did the money go, and what did it bring back?"
                />
              </div>
              <div data-reveal="image">
                <MediaFrame label="Founder" aspect="photo" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionMark data-reveal="eyebrow">
                  What we promise every client
                </SectionMark>
                <SectionHeading
                  eyebrowProps={{ "data-reveal": "eyebrow" }}
                  titleProps={{ "data-reveal": "heading" }}
                  bodyProps={{ "data-reveal": "text" }}
                  className="mt-6"
                  eyebrow="Commitment"
                  title="Three promises, no theatre"
                />

                <ul data-reveal-group className="mt-10 border-t border-line">
                  {promises.map((promise, index) => (
                    <li
                      key={promise}
                      data-reveal="card"
                      className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
                    >
                      <div className="border-carotene md:col-span-2 md:border-l-2 md:pl-6">
                        <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <p className="text-base leading-[1.6] text-foreground md:col-span-10 md:text-lg">
                        {promise}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
                <div data-reveal="image">
                  <MediaFrame label="The Digi Carotene team" aspect="photo" />
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-16">
            <div data-reveal="cta">
              <PageCta
                title="Talk to the founders."
                label="Talk With Our Founders"
                href={contactHref}
              />
            </div>
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  )
}
