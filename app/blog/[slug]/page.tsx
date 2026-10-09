import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogArticle } from "@/components/blog/blog-article"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { buildBlogJsonLd } from "@/lib/blog/json-ld"
import { getBlogPost, getBlogSlugs } from "@/lib/blog/load-posts"
import { getRelatedPostCards } from "@/lib/blog/related-posts"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  if (!getBlogSlugs().includes(slug)) return {}
  const post = getBlogPost(slug)
  const url = `/blog/${post.slug}`

  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    keywords: post.metaKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.ogTitle || post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  if (!getBlogSlugs().includes(slug)) notFound()

  const post = getBlogPost(slug)
  const related = getRelatedPostCards(post)
  const jsonLd = buildBlogJsonLd(post)

  return (
    <div className="min-h-svh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={post.focusKeyword}
        description="Practical Digi Carotene guides for search, ads, AI and growth."
        breadcrumbs={[
          { label: "Resources", href: "/blog" },
          { label: "Blog", href: "/blog" },
          { label: post.focusKeyword },
        ]}
        mark="The Journal"
      />
      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <BlogArticle post={post} related={related} />
      </SectionLayout>
    </div>
  )
}
