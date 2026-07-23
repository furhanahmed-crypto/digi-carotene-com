"use client"

import Link from "next/link"
import { ArrowRight, Search, Sparkles, CheckCircle2, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.08),transparent_50%)]" />
      <div className="absolute top-20 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Banner/Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6 animate-fade-in">
          <Sparkles className="size-3.5" />
          <span>The Optimization Agency for the AI Era</span>
        </div>

        {/* Headline */}
        <h1 className="font-lustria text-4xl font-normal leading-tight tracking-tight sm:text-5xl md:text-6xl max-w-4xl mx-auto mb-8 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
          Win the New Front Door of Search & Discovery
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light">
          We help premium brands rank on Google, get cited by AI answer engines like Perplexity, and dominate local markets with unforgettable real-world marketing activations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button
            nativeButton={false}
            render={<Link href={contactHref} />}
            size="lg"
            className="rounded-xl px-6 h-12 text-base font-medium group"
          >
            <span>
              Get Your GEO Score
              <ArrowRight className="inline-block size-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/services" />}
            variant="outline"
            size="lg"
            className="rounded-xl px-6 h-12 text-base font-medium"
          >
            Explore Our Services
          </Button>
        </div>

        {/* Dashboard Mockup - Resend & Jasper style */}
        <div className="relative mx-auto max-w-4xl rounded-2xl border border-border bg-card/50 p-1 shadow-2xl backdrop-blur-sm">
          {/* Dashboard Header Bar */}
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 bg-muted/20 rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">digicarotene-aeo-diagnostics.com</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
              <span className="relative flex size-1.5 mr-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              GEO SCANNER ACTIVE
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-left">
            {/* Metric Card 1 */}
            <div className="rounded-xl border border-border/80 bg-background/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-mono">GEO Citation Share</span>
                <TrendingUp className="size-4 text-emerald-500" />
              </div>
              <div className="text-3xl font-lustria text-foreground mb-1">74.2%</div>
              <p className="text-[11px] text-muted-foreground">Average citation rate across Perplexity, Gemini & SearchGPT</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-500 font-mono bg-emerald-500/5 py-1 px-2 rounded w-fit border border-emerald-500/10">
                <CheckCircle2 className="size-3.5" /> +28.4% this quarter
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="rounded-xl border border-border/80 bg-background/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-mono">AEO Sentiment Score</span>
                <Search className="size-4 text-primary" />
              </div>
              <div className="text-3xl font-lustria text-foreground mb-1">94 / 100</div>
              <p className="text-[11px] text-muted-foreground">Tone and brand safety ranking in conversational answer results</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-primary font-mono bg-primary/5 py-1 px-2 rounded w-fit border border-primary/10">
                <CheckCircle2 className="size-3.5" /> Brand Governed
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="rounded-xl border border-border/80 bg-background/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-mono">Local Offline Lift</span>
                <TrendingUp className="size-4 text-emerald-500" />
              </div>
              <div className="text-3xl font-lustria text-foreground mb-1">+410%</div>
              <p className="text-[11px] text-muted-foreground">High-intent client footfall boost from mall & campus activations</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-500 font-mono bg-emerald-500/5 py-1 px-2 rounded w-fit border border-emerald-500/10">
                <CheckCircle2 className="size-3.5" /> High conversion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
