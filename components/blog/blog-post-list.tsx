import { BlogCard } from "@/components/blog/blog-card"
import type { BlogIndexItem } from "@/types/blog"

type BlogPostListProps = {
  posts: BlogIndexItem[]
}

export function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div
      data-reveal-group
      className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      {posts.map((post) => (
        <div key={post.slug} data-reveal="card" className="min-w-0">
          <BlogCard
            href={`/blog/${post.slug}`}
            title={post.title}
            excerpt={post.excerpt}
            focusKeyword={post.focusKeyword}
            datePublished={post.datePublished}
          />
        </div>
      ))}
    </div>
  )
}
