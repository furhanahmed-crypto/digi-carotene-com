"use client"

import * as React from "react"
import { ArrowRight, Compass, Users, Sparkles, MapPin } from "lucide-react"
import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

export default function AboutPage() {
  const [isVisualHovered, setIsVisualHovered] = React.useState(false)

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title="About Digi Carotene"
        description="We bridge generative search engine optimization (SEO, AEO, GEO) with real-world customer experiential footprints."
        accentColor="from-primary/10"
        breadcrumbs={[
          { label: "About" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 mt-8 md:mt-10 space-y-14">
        {/* Core Narrative Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Compass className="size-3.5" /> OUR MISSION
            </span>
            <h2 className="font-lustria text-3xl sm:text-4xl font-normal tracking-tight leading-tight">
              Making Brands Both Discoverable & Unforgettable
            </h2>
            <p className="text-muted-foreground font-sans font-light text-base leading-relaxed">
              At Digi Carotene, we believe that modern marketing demands both technical precision and experiential art. While traditional SEO helps your website rank on google, our advanced Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) processes make sure AI conversational systems directly cite and endorse your brand.
            </p>
            <p className="text-muted-foreground font-sans font-light text-base leading-relaxed">
              And because customer decisions are also forged in the physical world, we connect these online pipelines directly with high-impact, real-world offline experiential activations.
            </p>
          </div>

          <div 
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsVisualHovered(true)}
            onMouseLeave={() => setIsVisualHovered(false)}
          >
            <div className="relative rounded-2xl border border-border bg-card/30 p-6 shadow-2xl h-[300px] overflow-hidden flex items-center justify-center">
              {/* Subtle Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px]" />
              
              <svg className="size-full max-w-[200px] max-h-[200px]" viewBox="0 0 100 100" fill="none">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="35" 
                  stroke="var(--primary)" 
                  strokeWidth="0.5" 
                  strokeDasharray="3 3" 
                  opacity="0.3"
                  className="animate-[spin_30s_linear_infinite]"
                />
                <path d="M50,15 L50,85 M15,50 L85,50" stroke="var(--border)" strokeWidth="0.5" />
                
                {/* Floating, rotating core shapes */}
                <g className="transition-transform duration-700" style={{ transform: isVisualHovered ? "rotate(45deg) scale(1.05)" : "rotate(0) scale(1)" }}>
                  <rect x="35" y="35" width="30" height="30" rx="6" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="4" fill="var(--primary)" />
                  {isVisualHovered && <circle cx="50" cy="50" r="10" stroke="var(--primary)" strokeWidth="1" className="animate-ping opacity-40" />}
                </g>
              </svg>
              {/* Ambient Glowing border */}
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-40 blur-sm" />
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-border/50 py-12">
          <div className="text-center">
            <div className="font-lustria text-4xl font-normal text-foreground mb-1">100%</div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Omnichannel Sync</p>
          </div>
          <div className="text-center">
            <div className="font-lustria text-4xl font-normal text-foreground mb-1">98.4%</div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">GEO Citation Rate</p>
          </div>
          <div className="text-center">
            <div className="font-lustria text-4xl font-normal text-foreground mb-1">+410%</div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Offline Footfall Conversion</p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <Button nativeButton={false} render={<Link href={contactHref} />} size="lg" className="rounded-xl px-6 h-12 text-base font-medium group">
            <span className="flex items-center gap-1.5">
              Consult with our Strategists
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
