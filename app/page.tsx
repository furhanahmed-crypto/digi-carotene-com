import { AgencyHero } from "@/components/home/hero/agency-hero"
import { SearchRanking } from "@/components/home/search-ranking/search-ranking"
import { ClientsMarquee } from "@/components/home/ClientsMarquee"
import { RatedByClients } from "@/components/home/ratings/rated-by-clients"
import { ColorServicePanels } from "@/components/home/services-panels/color-service-panels"
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
      <SearchRanking />
      <ClientsMarquee />
      <RatedByClients />
      <ColorServicePanels />
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
