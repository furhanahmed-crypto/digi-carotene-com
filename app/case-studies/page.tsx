"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"

const caseStudies = [
  {
    client: "Zephyr Cloud Platform",
    metric: "+320% AI Citations",
    challenge: "Traditional technical SEO wasn't translating into recommendations inside Perplexity, ChatGPT, or Claude search systems.",
    solution: "We restructured Zephyr's API docs, organization schemas, and curated high-authority founder storyboards to seed LLM crawling vectors.",
    tag: "AEO / GEO Optimization",
    bgGradient: "from-purple-500/5",
    borderColor: "group-hover:border-purple-500/20 hover:shadow-purple-500/5",
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="35" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 3" />
        <g className="transition-transform duration-700 ease-out" style={{ transform: isHovered ? "rotate(10deg) scale(1.03)" : "rotate(0) scale(1)" }}>
          <rect x="35" y="35" width="30" height="30" rx="6" fill="var(--card)" stroke="#a855f7" strokeWidth="1.5" />
          <line x1="50" y1="20" x2="50" y2="35" stroke="var(--border)" strokeWidth="1.25" />
          <line x1="50" y1="65" x2="50" y2="80" stroke="var(--border)" strokeWidth="1.25" />
          <circle cx="50" cy="20" r="3.5" fill="#a855f7" />
          <circle cx="50" cy="80" r="3.5" fill="#a855f7" className="animate-ping" />
        </g>
      </svg>
    )
  },
  {
    client: "Apex Premium Retail",
    metric: "45k Mall Conversions",
    challenge: "E-commerce customer acquisition costs (CAC) were rising rapidly, and digital-only ads lacked tactile brand recall.",
    solution: "We engineered a highly aesthetic modular mall popup paired with instant geo-targeted search triggers and QR-based rewards.",
    tag: "Offline Experiential",
    bgGradient: "from-orange-500/5",
    borderColor: "group-hover:border-orange-500/20 hover:shadow-orange-500/5",
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="35" stroke="#ff5000" strokeWidth="0.5" opacity="0.3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}>
          <rect x="30" y="45" width="40" height="25" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="30" y="45" width="40" height="7" rx="4" fill="rgba(255,80,0,0.06)" stroke="rgba(255,80,0,0.15)" strokeWidth="1.5" />
          <circle cx="85" cy="50" r="8" fill="var(--card)" stroke="#ff5000" strokeWidth="1.5" />
          <circle cx="85" cy="50" r="2" fill="#ff5000" />
        </g>
      </svg>
    )
  },
]

export default function CaseStudiesPage() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title="Real-World Impact"
        description="Explore how we help modern brands secure citations from generative AI engines and build high-converting physical experiences."
        accentColor="from-purple-500/10"
        breadcrumbs={[
          { label: "Resources" },
          { label: "Case Studies" },
        ]}
      />

      <div className="mx-auto max-w-5xl px-6 mt-8 md:mt-10 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => {
            const isHovered = hoveredCard === index
            return (
              <div
                key={study.client}
                className={`group relative rounded-3xl border border-border bg-card/15 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-xl ${study.borderColor}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Radial background color fade overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${study.bgGradient} via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
                  {/* Visual Left icon block for secondary depth */}
                  <div className="md:col-span-2 hidden md:flex items-center justify-center">
                    <div className="relative size-24 rounded-2xl border border-border/60 bg-muted/5 flex items-center justify-center overflow-hidden shrink-0">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:8px_8px]" />
                      {study.renderVisual(isHovered)}
                    </div>
                  </div>

                  {/* Challenge & Solution details */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-primary font-semibold tracking-wider flex items-center gap-1">
                        <Sparkles className="size-3 animate-pulse" /> {study.tag}
                      </span>
                    </div>

                    <h3 className="font-lustria text-2xl font-normal text-foreground group-hover:text-primary transition-colors leading-tight">
                      {study.client}
                    </h3>

                    <div className="space-y-3 font-sans font-light text-sm text-muted-foreground leading-relaxed">
                      <p>
                        <strong className="text-foreground/85 font-mono text-[10px] uppercase tracking-widest block mb-1">THE CHALLENGE:</strong>
                        {study.challenge}
                      </p>
                      <p>
                        <strong className="text-foreground/85 font-mono text-[10px] uppercase tracking-widest block mb-1">THE SOLUTION:</strong>
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlight metric card */}
                  <div className="md:col-span-4 rounded-2xl border border-border/50 bg-background/50 p-6 flex flex-col items-center justify-center text-center self-stretch min-h-[160px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-2 translate-x-2 size-24 bg-primary/5 rounded-full blur-xl" />
                    <TrendingUp className="size-6 text-primary mb-2 animate-bounce" style={{ animationDuration: "3s" }} />
                    <span className="text-2xl sm:text-3xl font-lustria font-normal text-primary">{study.metric}</span>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mt-1">PROVEN IMPACT</span>
                  </div>
                </div>

                {/* Ambient drop shadow layer */}
                <div className={`absolute inset-px -z-10 rounded-[22px] bg-gradient-to-tr ${study.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
