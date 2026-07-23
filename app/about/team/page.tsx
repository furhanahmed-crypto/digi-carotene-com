"use client"

import * as React from "react"
import { ArrowRight, Sparkles, Users } from "lucide-react"
import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

export default function TeamPage() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  const team = [
    {
      name: "Strategy Leaders",
      role: "Campaign Architecture & Vision",
      description: "Directing the fusion of physical experiential activations with generative search optimizations.",
      bgGradient: "from-emerald-500/5",
      borderColor: "group-hover:border-emerald-500/20 hover:shadow-emerald-500/5",
      renderVisual: (isHovered: boolean) => (
        <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
          <g opacity="0.2" className="stroke-emerald-500/30">
            <circle cx="159" cy="50" r="30" strokeWidth="0.75" strokeDasharray="3 3" />
          </g>
          <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}>
            <circle cx="159" cy="50" r="10" fill="var(--card)" stroke="#10b981" strokeWidth="1.5" />
            <line x1="159" y1="20" x2="159" y2="80" stroke="var(--border)" strokeWidth="1" />
            <line x1="129" y1="50" x2="189" y2="50" stroke="var(--border)" strokeWidth="1" />
            <circle cx="159" cy="20" r="3" fill="#10b981" />
            <circle cx="159" cy="80" r="3" fill="#10b981" />
            <circle cx="129" cy="50" r="3" fill="#10b981" />
            <circle cx="189" cy="50" r="3" fill="#10b981" />
          </g>
        </svg>
      )
    },
    {
      name: "SEO / GEO Engineers",
      role: "Conversational Citation Specialists",
      description: "Mapping out semantic indexing protocols so LLM databases cite your brand voice correctly.",
      bgGradient: "from-purple-500/5",
      borderColor: "group-hover:border-purple-500/20 hover:shadow-purple-500/5",
      renderVisual: (isHovered: boolean) => (
        <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
          <g opacity="0.2" className="stroke-purple-500/30">
            <line x1="0" y1="50" x2="318" y2="50" strokeWidth="0.75" />
          </g>
          <g className="transition-transform duration-500" style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}>
            <rect x="110" y="25" width="98" height="50" rx="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="120" y="44" fill="var(--foreground)" className="text-[7px] font-mono">Generative Query</text>
            <rect x="120" y="52" width="78" height="14" rx="3" fill="rgba(168,85,247,0.06)" stroke="rgba(168,85,247,0.2)" strokeWidth="1" />
            <text x="126" y="61" fill="#a855f7" className="text-[6px] font-bold font-mono">CITATION RATE: 98%</text>
          </g>
        </svg>
      )
    },
    {
      name: "Experiential Creators",
      role: "Physical Activations & Popups",
      description: "Designing end-to-end mall activations, campus roadshows, and highly interactive brand events.",
      bgGradient: "from-blue-500/5",
      borderColor: "group-hover:border-blue-500/20 hover:shadow-blue-500/5",
      renderVisual: (isHovered: boolean) => (
        <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
          <g opacity="0.2" className="stroke-blue-500/30">
            <circle cx="159" cy="50" r="35" strokeWidth="0.75" strokeDasharray="4 4" />
          </g>
          <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}>
            <polygon points="159,25 124,75 194,75" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
            <circle cx="159" cy="25" r="3" fill="#3b82f6" />
            <rect x="149" y="50" width="20" height="25" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
          </g>
        </svg>
      )
    },
  ]

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title="Our Team"
        description="The multi-disciplinary creators, engineers, and strategists behind Digi Carotene."
        accentColor="from-emerald-500/10"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Team" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 mt-8 md:mt-10 space-y-14">
        {/* Intro */}
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-3">
            <Users className="size-3.5" /> EXPERT COLLABORATORS
          </span>
          <h2 className="font-lustria text-3xl font-normal tracking-tight">
            Crafting the Intersection of Physical & Conversational Marketing
          </h2>
        </div>

        {/* Team Grid with Animated visual cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const isHovered = hoveredCard === index
            return (
              <div
                key={member.name}
                className={`group relative rounded-3xl border border-border bg-card/20 overflow-hidden flex flex-col justify-between h-[380px] transition-all duration-500 hover:shadow-xl ${member.borderColor}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Radial Glow Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${member.bgGradient} via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* SVG Visual Header */}
                <div className="relative h-32 w-full border-b border-border/40 bg-muted/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px]" />
                  {member.renderVisual(isHovered)}
                </div>

                {/* Info Content details */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-1">
                      {member.role}
                    </span>
                    <h3 className="font-lustria text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light">
                      {member.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary mt-4">
                    <Sparkles className="size-3.5 animate-pulse" /> Unified Performance
                  </div>
                </div>

                {/* Glowing Outer drop shadow outline layer */}
                <div className={`absolute inset-px -z-10 rounded-[22px] bg-gradient-to-tr ${member.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              </div>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center border-t border-border/50 pt-16">
          <Button nativeButton={false} render={<Link href={contactHref} />} size="lg" className="rounded-xl px-6 h-12 text-base font-medium group">
            <span className="flex items-center gap-1.5">
              Connect with our Team
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
