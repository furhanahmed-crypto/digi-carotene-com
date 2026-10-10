import type { Metadata } from "next"

import { AgencyHero } from "@/components/home/hero/agency-hero"
import { ClientsMarquee } from "@/components/home/ClientsMarquee"
import { ProblemBlock } from "@/components/home/problem/problem-block"
import { ColorServicePanels } from "@/components/home/services-panels/color-service-panels"
import { GrowthEngine } from "@/components/home/growth-engine/growth-engine"
import { HyderabadGlobal } from "@/components/home/hyderabad-global/hyderabad-global"
import { WhoWeWorkWith } from "@/components/home/audiences/who-we-work-with"
import { ResultsSpeak } from "@/components/home/results/results-speak"
import { GrowthFramework } from "@/components/home/growth-framework/growth-framework"
import { Differentiators } from "@/components/home/ratings/differentiators"
// import { VisualShowcase } from "@/components/home/VisualShowcase"
import { CreativeReels } from "@/components/home/reels/creative-reels"
import { FAQ } from "@/components/home/FAQ"
import { AgencyCta } from "@/components/home/cta/agency-cta"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/")

export default function Page() {
  return (
    <main className="relative flex min-h-svh min-w-0 flex-col overflow-x-clip">
      <AgencyHero />
      <ClientsMarquee />
      <ProblemBlock />
      <ColorServicePanels />
      <GrowthEngine />
      <HyderabadGlobal />
      <WhoWeWorkWith />
      <ResultsSpeak />
      <GrowthFramework />
      <Differentiators />
      {/* Hidden for now — campaign assets pending confirmation
      <VisualShowcase />
      */}
      <CreativeReels />
      <FAQ />
      <AgencyCta />
    </main>
  )
}
