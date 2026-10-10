import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ScenarioArticle } from "@/components/growth-scenarios/scenario-article"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { buildScenarioJsonLd } from "@/lib/growth-scenarios/json-ld"
import {
  getScenario,
  getScenarioSlugs,
} from "@/lib/growth-scenarios/load"

type ScenarioPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getScenarioSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ScenarioPageProps): Promise<Metadata> {
  const { slug } = await params
  if (!getScenarioSlugs().includes(slug)) return {}
  const scenario = getScenario(slug)
  const url = `/growth-scenarios/${scenario.slug}`

  return {
    title: { absolute: scenario.metaTitle },
    description: scenario.metaDescription,
    keywords: scenario.metaKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: scenario.ogTitle || scenario.metaTitle,
      description: scenario.ogDescription || scenario.metaDescription,
      url,
      type: "article",
    },
  }
}

export default async function GrowthScenarioPage({ params }: ScenarioPageProps) {
  const { slug } = await params
  if (!getScenarioSlugs().includes(slug)) notFound()

  const scenario = getScenario(slug)
  const jsonLd = buildScenarioJsonLd(scenario)

  return (
    <div className="min-h-svh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        mark="Growth Scenarios"
        title={scenario.h1}
        size="banner"
      />
      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <ScenarioArticle scenario={scenario} />
      </SectionLayout>
    </div>
  )
}
