"use client"

import * as React from "react"
import { Sparkles, HelpCircle } from "lucide-react"

export function Problem() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Label & Title */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5">
              <HelpCircle className="size-3.5" /> THE COLD TRUTH
            </span>
            <h2 className="font-lustria text-3xl md:text-4xl font-normal tracking-tight leading-tight text-foreground">
              Have you outgrown random acts of marketing?
            </h2>
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans font-light text-lg md:text-xl text-muted-foreground leading-relaxed">
              Most businesses end up stitching together a fragmented network of freelancers, agencies, and vendors. The designer doesn&apos;t talk to the copywriter, the media buyer doesn&apos;t understand the business strategy, and the web developer is completely disconnected from SEO.
            </p>
            <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed">
              You end up with scattered strategies, inconsistent creatives, wasted ad budgets, and zero accountability. You don&apos;t need more random marketing tactics—you need <span className="text-foreground font-medium">one accountable partner</span> who owns the entire pipeline from strategy to execution.
            </p>
            
            {/* Callout box */}
            <div className="p-6 rounded-2xl border border-border bg-muted/5 font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1 translate-x-1 size-20 bg-accent/5 rounded-full blur-xl" />
              <span className="text-accent font-semibold block mb-2">// THE DIGI CAROTENE ANTIDOTE</span>
              We replace the chaos of multiple vendors with one unified, strategic team that aligns your brand positioning, creative assets, paid performance, and local footprint.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
