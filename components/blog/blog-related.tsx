import { BlogCard } from "@/components/blog/blog-card"
import type { BlogIndexItem } from "@/types/blog"

type BlogRelatedProps = {
  posts: Array<BlogIndexItem & { href: string }>
}

export function BlogRelated({ posts }: BlogRelatedProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16 w-full border-t border-border pt-12">
      <h2 className="font-display text-[26px] leading-[1.15] font-medium tracking-[-0.02em] md:text-[32px]">
        Related posts
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            href={post.href}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            focusKeyword={post.focusKeyword}
            datePublished={post.datePublished}
            imageAlt={post.featuredImageAlt}
          />
        ))}
      </div>
    </section>
  )
}
