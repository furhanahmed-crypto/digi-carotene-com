import { BlogBlocks } from "@/components/blog/blog-blocks"
import type { BlogSection as BlogSectionType } from "@/types/blog"

type BlogSectionProps = {
  section: BlogSectionType
}

export function BlogSection({ section }: BlogSectionProps) {
  return (
    <section id={section.id} className="scroll-mt-28 pt-10">
      {section.heading ? (
        <h2 className="font-display text-[26px] leading-[1.15] font-medium tracking-[-0.02em] md:text-[32px]">
          {section.heading}
        </h2>
      ) : null}
      <BlogBlocks blocks={section.blocks} />
    </section>
  )
}
