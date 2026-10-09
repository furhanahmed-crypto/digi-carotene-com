import type { BlogSection } from "@/types/blog"

type BlogTocProps = {
  sections: BlogSection[]
}

export function BlogToc({ sections }: BlogTocProps) {
  const items = sections.filter((section) => section.heading)
  if (items.length === 0) return null

  return (
    <nav
      className="mt-8 rounded-2xl border border-border bg-secondary/40 p-5 md:p-6"
      aria-label="Table of contents"
    >
      <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
        On this page
      </p>
      <ol className="mt-4 space-y-2">
        {items.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm leading-snug text-foreground/80 transition-colors hover:text-ink dark:hover:text-foreground"
            >
              <span className="mr-2 text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
