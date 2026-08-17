import { Hero } from "@/components/home/Hero"
import { ClientsMarquee } from "@/components/home/ClientsMarquee"
import { Problem } from "@/components/home/Problem"
import { Capabilities } from "@/components/home/Capabilities"
import { Industries } from "@/components/home/Industries"
import { VisualShowcase } from "@/components/home/VisualShowcase"
import { Work } from "@/components/home/Work"
import { Approach } from "@/components/home/Approach"
import { WhyUs } from "@/components/home/WhyUs"
import { FAQ } from "@/components/home/FAQ"
import { CTA } from "@/components/home/CTA"

export default function Page() {
  return (
    <main className="relative flex min-h-svh flex-col">
      <Hero />
      <ClientsMarquee />
      <Problem />
      <Capabilities />
      <Industries />
      <VisualShowcase />
      <Work />
      <Approach />
      <WhyUs />
      <FAQ />
      <CTA />
    </main>
  )
}
