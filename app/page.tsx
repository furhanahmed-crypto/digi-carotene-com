import { AgencyHero } from "@/components/home/hero/agency-hero"
import { ClientsMarquee } from "@/components/home/ClientsMarquee"
import { SearchRanking } from "@/components/home/search-ranking/search-ranking"
import { Differentiators } from "@/components/home/ratings/differentiators"
import { ColorServicePanels } from "@/components/home/services-panels/color-service-panels"
import { WhoWeWorkWith } from "@/components/home/audiences/who-we-work-with"
import { GrowthFramework } from "@/components/home/growth-framework/growth-framework"
import { VisualShowcase } from "@/components/home/VisualShowcase"
import { CreativeReels } from "@/components/home/reels/creative-reels"
import { ResultsSpeak } from "@/components/home/results/results-speak"
import { Work } from "@/components/home/Work"
import { FAQ } from "@/components/home/FAQ"
import { AgencyCta } from "@/components/home/cta/agency-cta"

export default function Page() {
  return (
    <main className="relative flex min-h-svh flex-col">
      <AgencyHero />
      <ClientsMarquee />
      <SearchRanking />
      <Differentiators />
      <ColorServicePanels />
      <WhoWeWorkWith />
      <GrowthFramework />
      <VisualShowcase />
      <CreativeReels />
      <ResultsSpeak />
      <Work />
      <FAQ />
      <AgencyCta />
    </main>
  )
}
