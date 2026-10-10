import Link from "next/link"

import { formatBlogDate } from "@/lib/blog/format-date"
import type { BlogAuthor } from "@/types/blog"

type BlogAuthorBoxProps = {
  author: BlogAuthor
  dateModified: string
}

export function BlogAuthorBox({ author, dateModified }: BlogAuthorBoxProps) {
  const linkedIn =
    author.linkedIn.startsWith("http") ? author.linkedIn : undefined

  return (
    <aside className="mt-12 flex flex-col gap-3 rounded-2xl border border-border bg-secondary/40 p-5 md:flex-row md:items-center md:justify-between md:p-6">
      <div>
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Author
        </p>
        <p className="mt-2 font-display text-xl font-medium">{author.name}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated {formatBlogDate(dateModified)}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <Link href={author.url} className="underline-offset-4 hover:underline">
          View team
        </Link>
        {linkedIn ? (
          <a
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
        ) : null}
      </div>
    </aside>
  )
}
