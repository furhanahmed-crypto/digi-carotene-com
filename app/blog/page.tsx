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
import { Reveal } from "@/components/motion/reveal"
import type { Metadata } from "next"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/blog")


const posts = [
  {
    title: "Understanding GEO: ranking in AI search",
    excerpt:
      "How to format content so answer engines can parse, cite, and recommend a brand.",
    tag: "GEO & AEO",
  },
  {
    title: "Bridging digital intent with physical activations",
    excerpt:
      "Why search-led brands still need mall, campus, and popup work that people can walk into.",
    tag: "Experiential",
  },
  {
    title: "Schema that answer engines can trust",
    excerpt:
      "Entity markup and organization-level structure that helps machines verify who you are.",
    tag: "Technical SEO",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Marketing Insights You Can Actually Use"
        description="No fluff, no recycled listicles. Practical guides on search, AI, ads, social and on-ground marketing, written by the people running campaigns every day in Hyderabad and Bangalore."
        breadcrumbs={[{ label: "Resources" }, { label: "Blog" }]}
        mark="The Journal"
      />

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <div>
          <Reveal>
            <SectionMark data-reveal="eyebrow">Writing</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Insights"
              title="Thought pieces on discovery"
              body="Each card is a placeholder until the full article, date, and image are locked."
            />

            <div data-reveal-group className="mt-12 grid gap-5 md:grid-cols-3">
              {posts.map((post, index) => (
                <article
                  key={post.title}
                  data-reveal="card"
                  className="flex h-full flex-col rounded-2xl border border-border bg-card"
                >
                  <MediaFrame
                    index={index}
                    label={post.title}
                    className="rounded-t-2xl border-0 border-b"
                  />
                  <div className="p-5">
                    <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                      {index + 1} · {post.tag}
                    </p>
                    <h3 className="mt-3 font-display text-[21px] leading-[1.2] font-medium">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base leading-[1.6] text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  )
}
