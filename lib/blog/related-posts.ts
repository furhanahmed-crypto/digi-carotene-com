import { getBlogIndex } from "@/lib/blog/load-posts"
import type { BlogIndexItem, BlogPost } from "@/types/blog"

export function getRelatedPosts(post: BlogPost): BlogIndexItem[] {
  const index = getBlogIndex()
  const bySlug = new Map(index.map((item) => [item.slug, item]))
  const related = post.relatedSlugs
    .map((slug) => bySlug.get(slug))
    .filter((item): item is BlogIndexItem => Boolean(item))

  if (related.length >= 3) return related.slice(0, 3)

  const extras = index.filter(
    (item) => item.slug !== post.slug && !post.relatedSlugs.includes(item.slug)
  )
  return [...related, ...extras].slice(0, 3)
}

export function getRelatedPostCards(post: BlogPost) {
  return getRelatedPosts(post).map((item) => ({
    ...item,
    href: `/blog/${item.slug}`,
  }))
}
