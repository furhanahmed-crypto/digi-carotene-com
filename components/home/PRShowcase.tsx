"use client"

import { Award, Globe, Newspaper, Radio } from "lucide-react"

export function PRShowcase() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border/50 bg-muted/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase Side */}
          <div className="relative order-last lg:order-first">
            <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                {/* News card 1 */}
                <div className="flex gap-4 p-4 rounded-xl border border-border/80 bg-background/50">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                    <Newspaper className="size-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-1">TechCrunch Feature</span>
                    <h4 className="font-semibold text-sm mb-1">How Digi Carotene&apos;s Client Scaled to $20M ARR using GEO Strategies</h4>
                    <p className="text-xs text-muted-foreground">A deep-dive into conversational citations and modern programmatic marketing.</p>
                  </div>
                </div>

                {/* News card 2 */}
                <div className="flex gap-4 p-4 rounded-xl border border-border/80 bg-background/50">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-1">Bloomberg Business</span>
                    <h4 className="font-semibold text-sm mb-1">The End of the Classic Search Bar: What is Generative Engine Optimization?</h4>
                    <p className="text-xs text-muted-foreground">Why forward-thinking digital marketing agencies are building AI search indexes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-40 blur-sm" />
          </div>

          {/* Text/Content Side */}
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-3 block">
              PR & Brand Communications
            </span>
            <h2 className="font-lustria text-3xl md:text-4xl font-normal tracking-tight mb-6 leading-tight">
              PR That Drives Digital & Conversational Footprints
            </h2>
            <p className="text-muted-foreground font-sans font-light text-base md:text-lg mb-8 leading-relaxed">
              We construct brand narrative architectures that demand attention. Our PR solutions span high-authority media placements, executive narrative mapping, and crisis defense. Crucially, we optimize press distribution to serve as high-quality semantic data sources for AI answer engines—maximizing your citation score organically.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 text-primary">
                  <Radio className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs mb-1">Authority Backlink Networks</h4>
                  <p className="text-[11px] text-muted-foreground">Securing organic coverage in top-tier business and trade platforms.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 text-primary">
                  <Award className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs mb-1">Thought Leadership Mapping</h4>
                  <p className="text-[11px] text-muted-foreground">Placing founder stories and expertise columns in prominent spaces.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
