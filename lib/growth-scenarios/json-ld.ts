import type { GrowthScenario } from "@/types/growth-scenario"

const site = "https://digicarotene.com"

export function buildScenarioJsonLd(scenario: GrowthScenario) {
  const pageUrl = `${site}/growth-scenarios/${scenario.slug}`
  const graph: Record<string, unknown>[] = []

  if (scenario.schema.includes("Article")) {
    graph.push({
      "@type": "Article",
      headline: scenario.h1,
      description: scenario.metaDescription,
      image: `${site}/growth-scenarios/${scenario.slug}/cover.webp`,
      author: {
        "@type": "Organization",
        name: "Digi Carotene",
        url: site,
      },
      publisher: {
        "@type": "Organization",
        name: "Digi Carotene",
        logo: {
          "@type": "ImageObject",
          url: `${site}/logo/dc-logo-light.png`,
        },
      },
      mainEntityOfPage: pageUrl,
      keywords: scenario.metaKeywords.join(", "),
    })
  }

  if (scenario.schema.includes("FAQPage") && scenario.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: scenario.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    })
  }

  if (scenario.schema.includes("BreadcrumbList")) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Growth Scenarios",
          item: `${site}/case-studies`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: scenario.h1,
          item: pageUrl,
        },
      ],
    })
  }

  return { "@context": "https://schema.org", "@graph": graph }
}
