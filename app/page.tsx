import { Hero } from "@/components/home/Hero"
import { GeoShowcase } from "@/components/home/GeoShowcase"
import { AgencyPlatform } from "@/components/home/AgencyPlatform"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { OfflineActivations } from "@/components/home/OfflineActivations"
import { PRShowcase } from "@/components/home/PRShowcase"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { CTA } from "@/components/home/CTA"

export default function Page() {
  return (
    <main className="relative flex flex-col min-h-svh">
      {/* Page Sections */}
      <Hero />
      <GeoShowcase />
      <AgencyPlatform />
      <ServicesGrid />
      <OfflineActivations />
      <PRShowcase />
      <WhyChooseUs />
      <CTA />
    </main>
  )
}
