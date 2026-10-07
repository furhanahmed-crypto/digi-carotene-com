import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { Reveal } from "@/components/shared/reveal"

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
        breadcrumbs={[
          { label: "Resources" },
          { label: "Blog" },
        ]}
        mark="The Journal"
        imageIndex={1}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container>
          <Reveal>
            <SectionMark>Writing</SectionMark>
            <SectionHeading
              className="mt-6"
              eyebrow="Insights"
              title="Thought pieces on discovery"
              body="Each card is a placeholder until the full article, date, and image are locked."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.title} delayMs={index * 40}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card">
                  <MediaFrame
                    index={index}
                    label={post.title}
                    className="rounded-t-2xl border-0 border-b"
                  />
                  <div className="p-5">
                    <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                      {index + 1} · {post.tag}
                    </p>
                    <h3 className="font-display mt-3 text-[21px] leading-[1.2] font-medium">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base leading-[1.6] text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
