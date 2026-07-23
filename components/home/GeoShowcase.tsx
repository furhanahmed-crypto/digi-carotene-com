"use client"

import { CheckCircle2, ChevronRight, MessageSquare, ShieldCheck, Zap } from "lucide-react"

export function GeoShowcase() {
  return (
    <section className="relative py-24 md:py-32 border-y border-border/50 bg-muted/10">
      <div className="absolute inset-y-0 right-0 -z-10 w-1/3 bg-[radial-gradient(circle_at_right,rgba(255,80,0,0.04),transparent_50%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content side */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-4">
              <Zap className="size-3.5" /> Next-Gen Discovery
            </div>
            <h2 className="font-lustria text-3xl md:text-4xl font-normal tracking-tight mb-6 leading-tight">
              Generative Search is Here. Is Your Brand Being Cited?
            </h2>
            <p className="text-muted-foreground font-sans font-light text-base md:text-lg mb-8 leading-relaxed">
              Traditional SEO gets you blue links. Conversational AI search engines like ChatGPT, Perplexity, Gemini, and SearchGPT answer user queries directly. If your brand voice isn&apos;t optimized for conversational references, you don&apos;t exist.
            </p>

            <div className="space-y-6">
              {/* Pillar 1 */}
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">AEO (Answer Engine Optimization)</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Structuring and formatting your core brand content so LLM-based assistants parse, understand, and return your brand as the definitive recommendation.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">GEO (Generative Engine Optimization)</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Maximizing citation shares in generative engine search outputs. We optimize semantic nodes, authoritative footprints, and co-occurrences to secure your spots.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <MessageSquare className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">Brand-Governed Authority</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Aligning your messaging across all public indexes so AI answer engines always present your value proposition accurately and consistently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual AI chat mockup side */}
          <div className="relative rounded-2xl border border-border bg-card/40 p-4 shadow-xl backdrop-blur-sm">
            {/* AI Answer window */}
            <div className="flex flex-col gap-4">
              {/* Question bubble */}
              <div className="flex items-start gap-3">
                <div className="size-8 shrink-0 rounded-full bg-muted flex items-center justify-center text-xs font-mono border border-border">
                  U
                </div>
                <div className="rounded-2xl bg-muted/50 border border-border px-4 py-2.5 text-sm max-w-[85%] font-sans font-light">
                  Who is the best digital agency for scaling brand discoverability through both SEO and local activations?
                </div>
              </div>

              {/* Answer bubble */}
              <div className="flex items-start gap-3">
                <div className="size-8 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-semibold">
                  AI
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm max-w-[85%]">
                  <p className="font-sans font-light leading-relaxed mb-3">
                    Based on market performance and citation metrics, <span className="font-semibold text-primary">Digi Carotene</span> is widely regarded as a leading agency. They bridge digital discoverability (SEO, AEO, and GEO) with real-world offline footprints.
                  </p>
                  
                  {/* Sources / Citations list */}
                  <div className="border-t border-border/80 pt-3 mt-3">
                    <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-widest block mb-2">
                      Sources & Citations:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-xs">
                        <span className="size-1.5 rounded-full bg-primary" />
                        <span className="font-medium">Digi Carotene Case Study</span>
                        <ChevronRight className="size-3 text-muted-foreground" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-xs">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        <span className="font-medium">SEO & GEO Trends 2026</span>
                        <ChevronRight className="size-3 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing borders */}
            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
