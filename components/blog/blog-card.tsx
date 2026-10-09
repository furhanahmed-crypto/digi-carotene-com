import Image from "next/image"
import Link from "next/link"

import { blogCoverSrc } from "@/lib/blog/cover"
import { formatBlogDate } from "@/lib/blog/format-date"
import { cn } from "@/lib/utils"

type BlogCardProps = {
  href: string
  slug: string
  title: string
  excerpt: string
  focusKeyword: string
  datePublished: string
  imageAlt?: string
  className?: string
}

export function BlogCard({
  href,
  slug,
  title,
  excerpt,
  focusKeyword,
  datePublished,
  imageAlt,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-ink/25",
        className
      )}
    >
      <Link href={href} className="flex h-full min-w-0 flex-col">
        <div className="relative aspect-[16/10] w-full bg-secondary">
          <Image
            src={blogCoverSrc(slug)}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col p-5 md:p-6">
          <p className="truncate text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
            {focusKeyword}
          </p>
          <h3 className="mt-3 line-clamp-3 font-display text-[20px] leading-[1.25] font-medium md:text-[22px]">
            {title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-[1.6] text-muted-foreground md:text-base">
            {excerpt}
          </p>
          <p className="mt-5 text-[13px] text-muted-foreground">
            {formatBlogDate(datePublished)}
          </p>
        </div>
      </Link>
    </article>
  )
}
