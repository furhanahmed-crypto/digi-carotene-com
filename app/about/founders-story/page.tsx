"use client"

import * as React from "react"
import { ArrowRight, Flame, Heart, Lightbulb, Compass, Sparkles } from "lucide-react"
import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

export default function FoundersStoryPage() {
  const [activeValue, setActiveValue] = React.useState<number | null>(null)

  const values = [
    {
      title: "Radical Transparency",
      description: "No hidden algorithms, no black-box reporting. We share our processes and metrics with absolute visibility.",
      icon: Compass,
    },
    {
      title: "Performance First",
      description: "We optimize for outcomes—rankings, citation shares, and customer footprints—not just raw click counts.",
      icon: Flame,
    },
    {
      title: "Craft & Detail",
      description: "Every pixel of a website and every element of an offline popup should be a beautiful on-brand experience.",
      icon: Heart,
    },
  ]

  return (
    <div className="min-h-svh pb-16">
      {/* Page Header Banner */}
      <PageHeader
        title="The Founder's Story"
        description="The vision, core philosophy, and origin of Digi Carotene."
        accentColor="from-orange-500/10"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Founder's Story" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 mt-8 md:mt-10">
        {/* Content Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-14">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Lightbulb className="size-3.5" /> THE ORIGIN
            </span>
            <h2 className="font-lustria text-3xl sm:text-4xl font-normal tracking-tight leading-tight">
              To Build a Different Kind of Agency
            </h2>
            <p className="text-muted-foreground font-sans font-light text-base leading-relaxed">
              Digi Carotene was born from a simple realization: the marketing landscape had split into two disconnected extremes. On one side stood purely digital agencies, chasing transient clicks and keyword hacks. On the other side stood traditional experiential agencies, building premium offline events that lacked digital integration and conversion tracking.
            </p>
            <p className="text-muted-foreground font-sans font-light text-base leading-relaxed">
              We founded Digi Carotene to bridge this gap. By combining conversational search engine optimization (AEO, GEO, and traditional SEO) with offline, real-world customer activations, we built a unified engine designed to make modern brands both visible and unforgettable.
            </p>
            <div className="p-4 rounded-xl border border-border bg-card/40 font-mono text-xs text-muted-foreground italic">
              "We don&apos;t just build campaigns. We build authoritative ecosystems that search engines index and real humans remember."
            </div>
          </div>

          {/* Premium Vector Image with Glows (Inspected-style geometry) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-border bg-card/30 p-6 shadow-2xl backdrop-blur-sm h-[380px] overflow-hidden flex items-center justify-center">
              
              {/* Radial background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,80,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,80,0,0.015)_1px,transparent_1px)] bg-[size:16px_16px]" />

              <svg className="size-full max-w-[280px] max-h-[280px]" viewBox="0 0 200 200" fill="none">
                {/* Visual Geometry */}
                <g className="stroke-primary/30">
                  <circle cx="100" cy="100" r="70" strokeWidth="0.75" strokeDasharray="3 3" />
                  <circle cx="100" cy="100" r="40" strokeWidth="0.75" />
                  <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.5" />
                  <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.5" />
                </g>

                {/* Overlapping Glassmorphism Shapes */}
                <g className="transition-transform duration-1000 ease-out hover:scale-105">
                  <rect x="50" y="50" width="80" height="80" rx="16" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" className="shadow" />
                  <rect x="75" y="75" width="80" height="80" rx="16" fill="rgba(255,80,0,0.04)" stroke="#ff5000" strokeWidth="1.5" />
                  
                  {/* Floating abstract core */}
                  <circle cx="100" cy="100" r="12" fill="#ff5000" />
                  <circle cx="100" cy="100" r="24" stroke="#ff5000" strokeWidth="1.5" className="animate-pulse" />
                </g>
              </svg>

              {/* Glowing Ambient Border */}
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-40 blur-sm" />
            </div>
          </div>

        </div>

        {/* Our Values Section */}
        <div className="border-t border-border/50 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-3 block">
              Core Principles
            </span>
            <h3 className="font-lustria text-2xl sm:text-3xl font-normal tracking-tight">
              Our Guiding Philosophies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              const isHovered = activeValue === idx
              return (
                <div
                  key={value.title}
                  className="group relative rounded-2xl border border-border bg-card/15 p-6 hover:bg-card/30 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                  onMouseEnter={() => setActiveValue(idx)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 text-primary mb-5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                      <Icon className="size-4.5" />
                    </div>
                    <h4 className="font-lustria text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light">
                      {value.description}
                    </p>
                  </div>

                  <div className="absolute inset-px -z-10 rounded-2xl bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <Button nativeButton={false} render={<Link href={contactHref} />} size="lg" className="rounded-xl px-6 h-12 text-base font-medium group">
            <span className="flex items-center gap-1.5">
              Start a Conversation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>

      </div>
    </div>
  )
}
