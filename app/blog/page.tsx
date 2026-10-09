import type { Metadata } from "next"

import { BlogPostList } from "@/components/blog/blog-post-list"
import { Reveal } from "@/components/motion/reveal"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { PageHeader } from "@/components/shared/page-header"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { getBlogIndex } from "@/lib/blog/load-posts"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/blog")

export default function BlogPage() {
  const posts = getBlogIndex()

  return (
    <div className="min-h-svh">
      <PageHeader
        title="Marketing Insights You Can Actually Use"
        description="No fluff, no recycled listicles. Practical guides on search, AI, ads, social and on-ground marketing, written by the people running campaigns every day in Hyderabad and Bangalore."
        mark="The Journal"
      />

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">Our Journal</SectionMark>
          <SectionHeading
            eyebrowProps={{ "data-reveal": "eyebrow" }}
            titleProps={{ "data-reveal": "heading" }}
            bodyProps={{ "data-reveal": "text" }}
            className="mt-6"
            eyebrow="Insights"
            title="Guides for buyers comparing cost, channels and agencies"
            body={`${posts.length} pieces in The Journal on performance, growth, local SEO and AI search — written to answer the questions people type into Google and ChatGPT.`}
          />
          <BlogPostList posts={posts} />
        </Reveal>
      </SectionLayout>
    </div>
  )
}
