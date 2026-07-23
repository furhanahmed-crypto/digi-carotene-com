"use client"

import * as React from "react"
import { ArrowRight, Cpu, Network, Sparkles, Workflow } from "lucide-react"
import Link from "next/link"

import { contactHref } from "@/constants/home/navigation"

export function AgencyPlatform() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-3 block">
            The Digi Carotene Platform
          </span>
          <h2 className="font-lustria text-3xl md:text-5xl font-normal tracking-tight mb-4 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
            The Execution Platform for Modern Marketing
          </h2>
          <p className="text-muted-foreground font-sans font-light text-base md:text-lg">
            Digi Carotene is the comprehensive engine built for forward-thinking brand discovery. By bridging advanced AI search optimization with offline experiential events, we turn marketing strategy into flawless execution.
          </p>
        </div>

        {/* 3-Card Grid inspired by Jasper Platform */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: GEO Agent Engine (Greenish-teal theme) */}
          <div
            className="group relative rounded-3xl border border-border bg-card/20 overflow-hidden flex flex-col justify-between h-[450px] transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-500/20"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Soft Green background gradient block */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Visual Vector Container (Top half of the card) */}
            <div className="relative h-56 w-full border-b border-border/40 bg-muted/10 overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Beautiful interactive SVG matching the inspected elements */}
              <svg className="absolute inset-0 size-full" viewBox="0 0 318 172" fill="none">
                <g opacity="0.4" className="stroke-emerald-500">
                  <path d="M40 0V172" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M120 0V172" strokeWidth="1" />
                  <path d="M200 0V172" strokeWidth="1" />
                  <path d="M280 0V172" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M0 40H318" strokeWidth="1" />
                  <path d="M0 120H318" strokeWidth="1" />
                </g>
                
                {/* Floating Agent UI Widget */}
                <g className="transition-transform duration-700 ease-out" style={{ transform: hoveredCard === 1 ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)' }}>
                  {/* Backdrop Shadow Card */}
                  <rect x="70" y="35" width="178" height="102" rx="12" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" className="shadow-lg backdrop-blur-md" />
                  <rect x="70" y="35" width="178" height="32" rx="12" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" />
                  
                  {/* Little Dot indicators */}
                  <circle cx="90" cy="51" r="4" fill="#ef4444" />
                  <circle cx="102" cy="51" r="4" fill="#eab308" />
                  <circle cx="114" cy="51" r="4" fill="#22c55e" />
                  <text x="134" y="55" fill="var(--foreground)" className="text-[10px] font-mono font-medium tracking-wider">GEO_BOT_v1</text>
                  
                  {/* Inner contents */}
                  <line x1="85" y1="80" x2="215" y2="80" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="85" y1="95" x2="195" y2="95" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="85" y1="110" x2="155" y2="110" stroke="rgba(16,185,129,0.4)" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Glowing Sparkle on hover */}
                  <circle cx="215" cy="110" r="10" fill="rgba(16,185,129,0.15)" className="animate-pulse" />
                  <polygon points="215,105 217,110 222,110 218,112 219,117 215,114 211,117 212,112 208,110 213,110" fill="#10b981" />
                </g>
              </svg>
            </div>

            {/* Text description section */}
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs mb-3 font-semibold tracking-wider">
                  <Cpu className="size-4" /> ENGINE ONE
                </div>
                <h3 className="font-lustria text-2xl font-normal mb-3 group-hover:text-emerald-500 transition-colors">
                  GEO Agent Engine
                </h3>
                <p className="text-muted-foreground font-sans font-light text-xs md:text-sm leading-relaxed">
                  Bespoke algorithm targeting that indexes your brand voice into conversational citation databases. We programmatically optimize semantic nodes so ChatGPT, Gemini, and SearchGPT quote you directly.
                </p>
              </div>

              <Link
                href={contactHref}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-500 group/link mt-4"
              >
                Explore Agent Pipelines
                <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: Activation Pipelines (Salmon-orange theme) */}
          <div
            className="group relative rounded-3xl border border-border bg-card/20 overflow-hidden flex flex-col justify-between h-[450px] transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Soft Salmon/Orange background gradient block */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Visual Vector Container (Top half of the card) */}
            <div className="relative h-56 w-full border-b border-border/40 bg-muted/10 overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,80,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,80,0,0.04)_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Flowchart SVG */}
              <svg className="absolute inset-0 size-full" viewBox="0 0 318 172" fill="none">
                <g opacity="0.4" className="stroke-primary/40">
                  <path d="M0 86H318" strokeWidth="1" />
                  <path d="M86 0V172" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M232 0V172" strokeWidth="1" strokeDasharray="3 3" />
                </g>

                {/* Animated Pipeline Nodes */}
                <g className="transition-transform duration-700 ease-out" style={{ transform: hoveredCard === 2 ? 'translateY(-2px)' : 'translateY(0)' }}>
                  {/* Connection Line */}
                  <path d="M50 86H268" stroke="url(#gradient-line)" strokeWidth="3" strokeLinecap="round" className="stroke-primary" />
                  <circle cx="159" cy="86" r="16" fill="var(--card)" stroke="var(--primary)" strokeWidth="2" className="shadow" />
                  <circle cx="50" cy="86" r="12" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
                  <circle cx="268" cy="86" r="12" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
                  
                  {/* Icons over circles */}
                  <g className="text-muted-foreground">
                    <circle cx="50" cy="86" r="3" fill="currentColor" />
                    <circle cx="268" cy="86" r="3" fill="#ff5000" />
                  </g>
                  
                  {/* Central Node Visual */}
                  <polygon points="159,79 163,84 168,84 164,87 165,92 159,89 153,92 154,87 150,84 155,84" fill="#ff5000" />

                  {/* Flow Arrows/Dashes */}
                  <path d="M85 86 L95 86" stroke="#ff5000" strokeWidth="2" strokeLinecap="round" />
                  <path d="M210 86 L220 86" stroke="#ff5000" strokeWidth="2" strokeLinecap="round" />
                </g>

                <defs>
                  <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--border)" />
                    <stop offset="50%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--primary)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Text description section */}
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-primary font-mono text-xs mb-3 font-semibold tracking-wider">
                  <Workflow className="size-4" /> ENGINE TWO
                </div>
                <h3 className="font-lustria text-2xl font-normal mb-3 group-hover:text-primary transition-colors">
                  Activation Pipelines
                </h3>
                <p className="text-muted-foreground font-sans font-light text-xs md:text-sm leading-relaxed">
                  Repeatable, offline-to-online activation pathways. We construct high-impact mall popups, campus festivals, transit takeovers, and brand booths that direct real consumer intent directly into conversational workflows.
                </p>
              </div>

              <Link
                href={contactHref}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary group/link mt-4"
              >
                Explore Active Pipelines
                <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 3: Digi Carotene IQ / Governance (Blue-indigo theme) */}
          <div
            className="group relative rounded-3xl border border-border bg-card/20 overflow-hidden flex flex-col justify-between h-[450px] transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/20"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Soft Blue background gradient block */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Visual Vector Container (Top half of the card) */}
            <div className="relative h-56 w-full border-b border-border/40 bg-muted/10 overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Connected nodes SVG */}
              <svg className="absolute inset-0 size-full" viewBox="0 0 318 172" fill="none">
                <g opacity="0.4" className="stroke-blue-500/40">
                  <circle cx="159" cy="86" r="50" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="159" y1="0" x2="159" y2="172" strokeWidth="1" />
                  <line x1="0" y1="86" x2="318" y2="86" strokeWidth="1" />
                </g>

                {/* Nodes layout */}
                <g className="transition-transform duration-700 ease-out" style={{ transform: hoveredCard === 3 ? 'rotate(5deg)' : 'rotate(0)' }}>
                  {/* Connected points */}
                  <line x1="159" y1="86" x2="109" y2="56" stroke="var(--blue-500, #3b82f6)" strokeWidth="1.5" />
                  <line x1="159" y1="86" x2="209" y2="56" stroke="var(--blue-500, #3b82f6)" strokeWidth="1.5" />
                  <line x1="159" y1="86" x2="159" y2="136" stroke="var(--blue-500, #3b82f6)" strokeWidth="1.5" />
                  
                  {/* Central Node */}
                  <circle cx="159" cy="86" r="10" fill="#3b82f6" stroke="var(--card)" strokeWidth="2" className="shadow" />
                  
                  {/* Satellite Nodes */}
                  <circle cx="109" cy="56" r="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
                  <circle cx="209" cy="56" r="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
                  <circle cx="159" cy="136" r="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
                </g>
              </svg>
            </div>

            {/* Text description section */}
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-blue-500 font-mono text-xs mb-3 font-semibold tracking-wider">
                  <Network className="size-4" /> ENGINE THREE
                </div>
                <h3 className="font-lustria text-2xl font-normal mb-3 group-hover:text-blue-500 transition-colors">
                  Digi Carotene IQ
                </h3>
                <p className="text-muted-foreground font-sans font-light text-xs md:text-sm leading-relaxed">
                  Governed marketing compliance layer that audits all outbound assets. We ensure your brand narrative, disclaimers, and guidelines stay robustly compliant across web indexes, digital channels, and AI prompts.
                </p>
              </div>

              <Link
                href={contactHref}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-500 group/link mt-4"
              >
                Explore Brand Governance
                <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
