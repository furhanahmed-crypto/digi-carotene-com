import { Hero } from "@/components/home/Hero"
import { CredibilityStrip } from "@/components/home/CredibilityStrip"
import { Problem } from "@/components/home/Problem"
import { Capabilities } from "@/components/home/Capabilities"
import { Industries } from "@/components/home/Industries"
import { Work } from "@/components/home/Work"
import { Approach } from "@/components/home/Approach"
import { WhyUs } from "@/components/home/WhyUs"
import { CTA } from "@/components/home/CTA"

export default function Page() {
  return (
    <main className="relative flex min-h-svh flex-col">
      <Hero />
      <CredibilityStrip />
      <Problem />
      <Capabilities />
      <Industries />
      <Work />
      <Approach />
      <WhyUs />
      <CTA />
    </main>
  )
}
