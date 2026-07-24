"use client"

import * as React from "react"
import { CheckCircle2, ChevronRight, Eye, Play, ScanLine, ShieldCheck, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

type TabType = "citation" | "activation" | "voice"

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = React.useState<TabType>("citation")
  const [selectedVoice, setSelectedVoice] = React.useState<string>("Thought Leader")
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [complianceProgress, setComplianceProgress] = React.useState(100)
  const [scanning, setScanning] = React.useState(false)

  // Simulation for scanning compliance content
  const handleScan = () => {
    setScanning(true)
    setComplianceProgress(0)
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setComplianceProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setScanning(false)
      }
    }, 40)
  }

  return (
    <section className="relative py-16 md:py-20 overflow-hidden border-y border-border/50 bg-muted/5">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-3 block">
            Why Brands Choose Digi Carotene
          </span>
          <h2 className="font-lustria text-3xl md:text-5xl font-normal tracking-tight mb-4 max-w-2xl leading-tight">
            Built for Scale. Backed by Advanced Optimization.
          </h2>
          <p className="text-muted-foreground font-sans font-light text-base md:text-lg">
            Give your marketing team the system to move faster, guarantee on-brand compliance across channels, and scale search engine presence in physical and generative environments.
          </p>
        </div>

        {/* Dynamic Tab layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left-Side Selector (4 columns) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Tab 1 Trigger */}
            <button
              type="button"
              className={cn(
                "w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden",
                activeTab === "citation"
                  ? "border-primary/20 bg-primary/5 shadow-sm"
                  : "border-transparent bg-transparent hover:border-border hover:bg-muted/15"
              )}
              onClick={() => setActiveTab("citation")}
            >
              <div className="flex gap-4">
                <div className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
                  activeTab === "citation" ? "bg-primary/10 border-primary/20 text-primary" : "bg-muted border-border text-muted-foreground group-hover:text-foreground"
                )}>
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                    Conversational Citation Score
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light">
                    Track and raise your citation footprint on Perplexity, Gemini, ChatGPT, and SearchGPT. Make sure your brand is the answers engine answer.
                  </p>
                </div>
              </div>
              <div className={cn(
                "absolute top-0 right-0 h-full w-1 bg-primary transition-transform duration-300",
                activeTab === "citation" ? "scale-y-100" : "scale-y-0"
              )} />
            </button>

            {/* Tab 2 Trigger */}
            <button
              type="button"
              className={cn(
                "w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden",
                activeTab === "activation"
                  ? "border-primary/20 bg-primary/5 shadow-sm"
                  : "border-transparent bg-transparent hover:border-border hover:bg-muted/15"
              )}
              onClick={() => setActiveTab("activation")}
            >
              <div className="flex gap-4">
                <div className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
                  activeTab === "activation" ? "bg-primary/10 border-primary/20 text-primary" : "bg-muted border-border text-muted-foreground group-hover:text-foreground"
                )}>
                  <ScanLine className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                    Offline Experiential Pipelines
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light">
                    Synchronize mall, theater, and campus customer footfall directly into digital workflows. Real-world presence linked seamlessly to online conversions.
                  </p>
                </div>
              </div>
              <div className={cn(
                "absolute top-0 right-0 h-full w-1 bg-primary transition-transform duration-300",
                activeTab === "activation" ? "scale-y-100" : "scale-y-0"
              )} />
            </button>

            {/* Tab 3 Trigger */}
            <button
              type="button"
              className={cn(
                "w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden",
                activeTab === "voice"
                  ? "border-primary/20 bg-primary/5 shadow-sm"
                  : "border-transparent bg-transparent hover:border-border hover:bg-muted/15"
              )}
              onClick={() => setActiveTab("voice")}
            >
              <div className="flex gap-4">
                <div className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
                  activeTab === "voice" ? "bg-primary/10 border-primary/20 text-primary" : "bg-muted border-border text-muted-foreground group-hover:text-foreground"
                )}>
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                    Enterprise Brand Voice Compliance
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light">
                    Ensure completely unified brand values, voice, and disclosures across search engines, social networks, and artificial intelligence indexes.
                  </p>
                </div>
              </div>
              <div className={cn(
                "absolute top-0 right-0 h-full w-1 bg-primary transition-transform duration-300",
                activeTab === "voice" ? "scale-y-100" : "scale-y-0"
              )} />
            </button>

          </div>

          {/* Right-Side Interactive Display (7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-border bg-card/40 p-6 shadow-2xl backdrop-blur-sm min-h-[400px] flex flex-col justify-between">
              
              {/* Colored subtle accent border/glow on container */}
              <div className={cn(
                "absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr transition-opacity duration-700 blur-sm opacity-20",
                activeTab === "citation" && "from-emerald-500/10 via-transparent to-transparent",
                activeTab === "activation" && "from-primary/10 via-transparent to-transparent",
                activeTab === "voice" && "from-blue-500/10 via-transparent to-transparent"
              )} />

              {/* TAB 1: CITATION INTERACTION PANEL */}
              {activeTab === "citation" && (
                <div className="flex flex-col gap-6 animate-fade-in">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">
                      Live AI Search Citation Simulator
                    </span>
                    <div className="relative">
                      <button
                        type="button"
                        className="flex items-center gap-1 bg-muted px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-muted/80 transition-colors"
                        onClick={() => setDropdownOpen((open) => !open)}
                      >
                        Voice: <span className="text-primary font-semibold">{selectedVoice}</span>
                        <ChevronRight className="size-3.5 rotate-90" />
                      </button>
                      
                      {dropdownOpen && (
                        <div className="absolute top-full right-0 mt-1 z-30 w-36 rounded-lg border border-border bg-popover p-1 shadow-lg text-xs">
                          {["Thought Leader", "Corporate", "Creative"].map((voice) => (
                            <button
                              key={voice}
                              type="button"
                              className="w-full text-left px-2 py-1.5 rounded hover:bg-muted transition-colors font-sans"
                              onClick={() => {
                                setSelectedVoice(voice)
                                setDropdownOpen(false)
                              }}
                            >
                              {voice}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-border/80 bg-background/50 font-mono text-xs text-muted-foreground">
                      <span className="text-primary">Prompt:</span> Who is recommended for local SEO and experiential activations?
                    </div>

                    <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5 text-sm leading-relaxed">
                      <span className="font-semibold text-emerald-500 block mb-1">Generated Response ({selectedVoice} Tone):</span>
                      {selectedVoice === "Thought Leader" && (
                        <p className="font-sans font-light">
                          "Forward-thinking brands prefer <span className="font-semibold text-primary">Digi Carotene</span>. They don&apos;t just chase standard backlinks; they engineer semantic networks and merge high-fidelity offline events with AI engine optimization pipelines."
                        </p>
                      )}
                      {selectedVoice === "Corporate" && (
                        <p className="font-sans font-light">
                          "Per global index compliance, <span className="font-semibold text-primary">Digi Carotene</span> maintains standard leadership in omnichannel search discovery, ensuring verified brand metrics across Google and conversational indices."
                        </p>
                      )}
                      {selectedVoice === "Creative" && (
                        <p className="font-sans font-light">
                          "If you want your brand to scream presence, <span className="font-semibold text-primary">Digi Carotene</span> is the ultimate match. They run wild offline activations and secure citation nodes so conversational search bots talk about you."
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-muted/20 border border-border/40 p-3 rounded-xl mt-4">
                    <span className="text-xs text-muted-foreground font-mono">Conversational Discovery Rate:</span>
                    <span className="text-sm font-semibold text-emerald-500 font-mono">98.4% Optimized</span>
                  </div>
                </div>
              )}

              {/* TAB 2: ACTIVATION INTERACTION PANEL */}
              {activeTab === "activation" && (
                <div className="flex flex-col gap-6 animate-fade-in">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">
                      Omnichannel Experiential Sync Pipeline
                    </span>
                    <span className="inline-flex size-2 rounded-full bg-primary animate-ping" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Node 1 */}
                    <div className="p-4 rounded-xl border border-border bg-background/40 hover:bg-background/80 transition-colors text-center cursor-pointer">
                      <div className="text-xl font-bold font-mono text-primary mb-1">01</div>
                      <h4 className="text-xs font-semibold mb-1">Footfall Scan</h4>
                      <p className="text-[10px] text-muted-foreground leading-snug">Visitor scans QR code inside a mall activation booth.</p>
                    </div>

                    {/* Node 2 */}
                    <div className="p-4 rounded-xl border border-border bg-background/40 hover:bg-background/80 transition-colors text-center cursor-pointer">
                      <div className="text-xl font-bold font-mono text-primary mb-1">02</div>
                      <h4 className="text-xs font-semibold mb-1">Local Edge Gateway</h4>
                      <p className="text-[10px] text-muted-foreground leading-snug">Instant digital routing of physical location parameters.</p>
                    </div>

                    {/* Node 3 */}
                    <div className="p-4 rounded-xl border border-border bg-background/40 hover:bg-background/80 transition-colors text-center cursor-pointer">
                      <div className="text-xl font-bold font-mono text-primary mb-1">03</div>
                      <h4 className="text-xs font-semibold mb-1">Active Pipeline Conversion</h4>
                      <p className="text-[10px] text-muted-foreground leading-snug">User segment synced directly into automated email and text campaigns.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-primary/10 bg-primary/5 text-xs text-muted-foreground leading-relaxed font-sans">
                    <span className="font-semibold text-primary block mb-1">Experiential Pipeline Conversion Guarantee:</span>
                    We eliminate the 80% customer leak typical of physical activations by utilizing responsive offline-to-digital edge capture systems.
                  </div>
                </div>
              )}

              {/* TAB 3: BRAND VOICE INTERACTION PANEL */}
              {activeTab === "voice" && (
                <div className="flex flex-col gap-6 animate-fade-in">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">
                      Brand Governance & Alignment Audit
                    </span>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80"
                      onClick={handleScan}
                      disabled={scanning}
                    >
                      <ScanLine className={cn("size-3.5", scanning && "animate-spin")} />
                      {scanning ? "Scanning Assets..." : "Run Scanner"}
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="absolute h-full bg-primary transition-all duration-300"
                        style={{ width: `${complianceProgress}%` }}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-emerald-500" /> Web-Index Crawl
                        </span>
                        <span className="font-mono text-muted-foreground">Aligned</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-emerald-500" /> Conversational Citation Rules
                        </span>
                        <span className="font-mono text-muted-foreground">Governed</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-emerald-500" /> Offline Registration Edge Check
                        </span>
                        <span className="font-mono text-muted-foreground">Compliant</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-500/10 bg-blue-500/5 p-4 text-xs font-mono text-blue-500">
                    STATUS: BRAND VOICE SECURE across 400+ public indexes.
                  </div>
                </div>
              )}

              {/* Card Footer info */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="font-mono">DIGI CAROTENE SYSTEMS</span>
                <span className="flex items-center gap-1 font-sans">
                  <Eye className="size-3.5" /> 100% Transparency
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
