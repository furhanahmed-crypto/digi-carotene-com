import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { cn } from "@/lib/utils"
import type { ServicePanelTone } from "@/types/home"

const toneClass: Record<ServicePanelTone, string> = {
  yellow: "bg-brand-yellow text-ink",
  green: "bg-brand-green text-white",
  blue: "bg-brand-blue text-white",
  purple: "bg-brand-purple text-white",
  red: "bg-brand-red text-white",
}

export function ColorServicePanels() {
  const { servicePanels } = homeSections

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
            {servicePanels.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]">
            {servicePanels.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {servicePanels.body}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {servicePanels.panels.map((panel) => (
            <Reveal key={panel.id}>
              <Link
                href={panel.href}
                className={cn(
                  "group flex h-full min-h-64 flex-col justify-between rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1",
                  toneClass[panel.tone]
                )}
              >
                <div>
                  <h3 className="font-display text-2xl leading-tight font-medium">
                    {panel.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">
                    {panel.body}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium tracking-[0.06em] uppercase">
                  Explore
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
