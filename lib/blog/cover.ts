/** Featured Journal cover — lives under public/assets/blog/[slug]/cover.webp */
export function blogCoverSrc(slug: string): string {
  return `/assets/blog/${slug}/cover.webp`
}
