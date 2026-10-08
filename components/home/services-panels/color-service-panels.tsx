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

        {/* Equal-size 10-card grid — no card larger or placed above others (v2). */}
        <div
          data-reveal-group
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {servicePanels.panels.map((panel) => (
            <Link
              key={panel.id}
              href={panel.href}
              data-reveal="card"
              className={cn(
                "group flex h-full min-h-56 flex-col justify-between rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1",
                toneClass[panel.tone]
              )}
            >
              <div>
                <h3 className="font-display text-xl leading-tight font-medium">
                  {panel.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-90">
                  {panel.body}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium tracking-[0.06em] uppercase">
                Explore
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div
          data-reveal-group
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {servicePanels.secondary.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              data-reveal="card"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card/90 px-6 py-5 shadow-sm transition-colors hover:border-brand-yellow/50"
            >
              <div>
                <h3 className="font-display text-xl font-medium">{card.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{card.body}</p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>

        <div data-reveal="cta" className="mt-8">
          <Link
            href={servicePanels.exploreHref}
            className="link-underline text-[13px] font-medium tracking-[0.04em] uppercase"
          >
            {servicePanels.exploreLabel}
          </Link>
        </div>
      </Reveal>
    </SectionLayout>
  )
}
