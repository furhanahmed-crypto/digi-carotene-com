"use client"

import * as React from "react"
import { ArrowRight, Sparkles, Building } from "lucide-react"
import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

export default function ClientsPage() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  const clients = [
    {
      name: "Premium Retail Brands",
      category: "Offline Activations & Popups",
      bgGradient: "from-orange-500/5",
      borderColor: "group-hover:border-orange-500/20 hover:shadow-orange-500/5",
      renderVisual: (isHovered: boolean) => (
        <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
          <g opacity="0.2" className="stroke-orange-500/30">
            <circle cx="159" cy="50" r="30" strokeWidth="0.75" strokeDasharray="3 3" />
          </g>
          <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}>
            <rect x="119" y="30" width="80" height="44" rx="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
            <rect x="119" y="30" width="80" height="12" rx="6" fill="rgba(255,80,0,0.06)" stroke="rgba(255,80,0,0.15)" strokeWidth="1.5" />
            <circle cx="159" cy="52" r="6" fill="#ff5000" />
          </g>
        </svg>
      )
    },
    {
      name: "Enterprise SaaS Platforms",
      category: "SEO, AEO & GEO Pipelines",
      bgGradient: "from-purple-500/5",
      borderColor: "group-hover:border-purple-500/20 hover:shadow-purple-500/5",
      renderVisual: (isHovered: boolean) => (
        <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
          <g opacity="0.2" className="stroke-purple-500/30">
            <line x1="0" y1="50" x2="318" y2="50" strokeWidth="0.75" />
          </g>
          <g className="transition-transform duration-500" style={{ transform: isHovered ? "scale(1.02)" : "scale(1)" }}>
            <rect x="110" y="25" width="98" height="50" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
            <circle cx="159" cy="50" r="12" stroke="#a855f7" strokeWidth="1.5" className="animate-pulse" />
            <circle cx="159" cy="50" r="4" fill="#a855f7" />
          </g>
        </svg>
      )
    },
    {
      name: "Local Growth Companies",
      category: "Omnichannel Discovery Engine",
      bgGradient: "from-blue-500/5",
      borderColor: "group-hover:border-blue-500/20 hover:shadow-blue-500/5",
      renderVisual: (isHovered: boolean) => (
        <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
          <g opacity="0.2" className="stroke-blue-500/30">
            <circle cx="159" cy="50" r="35" strokeWidth="0.75" strokeDasharray="4 4" />
          </g>
          <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}>
            <circle cx="159" cy="50" r="16" fill="var(--card)" stroke="#3b82f6" strokeWidth="1.5" />
            <circle cx="159" cy="50" r="6" fill="#3b82f6" />
          </g>
        </svg>
      )
    },
  ]

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title="Our Clients"
        description="We partner with premium brands seeking conversational discovery and memorable real-world activations."
        accentColor="from-blue-500/10"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Clients" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 mt-8 md:mt-10 space-y-14">
        {/* Title */}
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-3">
            <Building className="size-3.5" /> BRAND CO-PARTNERS
          </span>
          <h2 className="font-lustria text-3xl font-normal tracking-tight">
            Loved by Modern Marketing Innovators
          </h2>
        </div>

        {/* Client Sectors with custom SVG visuals and card hover highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const isHovered = hoveredCard === index
            return (
              <div
                key={client.name}
                className={`group relative rounded-3xl border border-border bg-card/20 overflow-hidden flex flex-col justify-between h-[360px] transition-all duration-500 hover:shadow-xl ${client.borderColor}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Radial Glow Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${client.bgGradient} via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* SVG Visual Header */}
                <div className="relative h-32 w-full border-b border-border/40 bg-muted/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px]" />
                  {client.renderVisual(isHovered)}
                </div>

                {/* Info Content details */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-1">
                      {client.category}
                    </span>
                    <h3 className="font-lustria text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary mt-4">
                    <Sparkles className="size-3.5" /> Active Optimization
                  </div>
                </div>

                {/* Glowing Outer drop shadow outline layer */}
                <div className={`absolute inset-px -z-10 rounded-[22px] bg-gradient-to-tr ${client.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              </div>
            )
          })}
        </div>

        {/* Action Bottom */}
        <div className="text-center border-t border-border/50 pt-16">
          <h3 className="font-lustria text-xl font-normal mb-6">
            Ready to become our next success story?
          </h3>
          <Button nativeButton={false} render={<Link href={contactHref} />} size="lg" className="rounded-xl px-6 h-12 text-base font-medium group">
            <span className="flex items-center gap-1.5">
              Get Partner Spec
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
