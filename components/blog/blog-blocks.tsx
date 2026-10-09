import { BlogTable } from "@/components/blog/blog-table"
import type { BlogBlock } from "@/types/blog"

type BlogBlocksProps = {
  blocks: BlogBlock[]
}

export function BlogBlocks({ blocks }: BlogBlocksProps) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={index}
              className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]"
            >
              {block.text}
            </p>
          )
        }

        if (block.type === "list") {
          const Tag = block.ordered ? "ol" : "ul"
          return (
            <Tag
              key={index}
              className={
                block.ordered
                  ? "mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted-foreground md:text-[17px]"
                  : "mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground md:text-[17px]"
              }
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Tag>
          )
        }

        return (
          <BlogTable
            key={index}
            headers={block.headers}
            rows={block.rows}
            caption={block.caption}
          />
        )
      })}
    </>
  )
}
