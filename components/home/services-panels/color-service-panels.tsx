import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { servicePanelsDecor } from "@/components/home/section-decors"
import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
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
    <SectionLayout tone="white" decor={servicePanelsDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">{servicePanels.eyebrow}</SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
        >
          {servicePanels.headline}
        </h2>
        <p data-reveal="text" className="mt-4 max-w-2xl text-muted-foreground">
          {servicePanels.body}
        </p>

        <div
          data-reveal-group
          className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
        >
          {servicePanels.panels.map((panel) => (
            <Link
              key={panel.id}
              href={panel.href}
              data-reveal="card"
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
          ))}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
