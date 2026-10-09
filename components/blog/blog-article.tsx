import { BlogAuthorBox } from "@/components/blog/blog-author"
import { BlogCtaBox } from "@/components/blog/blog-cta"
import { BlogFaqSection } from "@/components/blog/blog-faq"
import { BlogQuickAnswer } from "@/components/blog/blog-quick-answer"
import { BlogReadingProgress } from "@/components/blog/blog-reading-progress"
import { BlogRelated } from "@/components/blog/blog-related"
import { BlogSection } from "@/components/blog/blog-section"
import { BlogToc } from "@/components/blog/blog-toc"
import { formatBlogDate } from "@/lib/blog/format-date"
import type { BlogIndexItem, BlogPost } from "@/types/blog"

type BlogArticleProps = {
  post: BlogPost
  related: Array<BlogIndexItem & { href: string }>
}

export function BlogArticle({ post, related }: BlogArticleProps) {
  return (
    <>
      <BlogReadingProgress />
      <div className="w-full">
        <article id="blog-article" className="mx-auto max-w-3xl">
          <p className="text-[13px] tracking-[0.04em] text-muted-foreground uppercase">
            {post.focusKeyword} · {formatBlogDate(post.datePublished)}
          </p>
          <h1 className="mt-4 font-display text-[34px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[48px]">
            {post.h1}
          </h1>
          <BlogQuickAnswer text={post.quickAnswer} />
          <BlogToc sections={post.sections} />
          <div className="mt-4">
            {post.sections.map((section) => (
              <BlogSection key={section.id} section={section} />
            ))}
          </div>
          <BlogFaqSection faqs={post.faqs} />
          <BlogCtaBox cta={post.cta} />
          <BlogAuthorBox
            author={post.author}
            dateModified={post.dateModified}
          />
        </article>
        <BlogRelated posts={related} />
      </div>
    </>
  )
}
