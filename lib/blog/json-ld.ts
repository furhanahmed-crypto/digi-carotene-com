import type { BlogPost } from "@/types/blog"

const site = "https://digicarotene.com"

export function buildBlogJsonLd(post: BlogPost) {
  const pageUrl = `${site}/blog/${post.slug}`
  const graph: Record<string, unknown>[] = []

  if (post.schema.includes("BlogPosting")) {
    graph.push({
      "@type": "BlogPosting",
      headline: post.h1,
      description: post.metaDescription,
      image: `${site}/blog/${post.slug}/cover.webp`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: {
        "@type": "Person",
        name: post.author.name,
        url: `${site}${post.author.url}`,
        sameAs: post.author.linkedIn.startsWith("http")
          ? post.author.linkedIn
          : undefined,
      },
      publisher: {
        "@type": "Organization",
        name: "Digi Carotene",
        logo: { "@type": "ImageObject", url: `${site}/logo/logo-light-1.png` },
      },
      mainEntityOfPage: pageUrl,
      keywords: post.metaKeywords.join(", "),
    })
  }

  if (post.schema.includes("FAQPage") && post.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    })
  }

  if (post.schema.includes("BreadcrumbList")) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog` },
        { "@type": "ListItem", position: 3, name: post.h1, item: pageUrl },
      ],
    })
  }

  return { "@context": "https://schema.org", "@graph": graph }
}
