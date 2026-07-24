"use client"

import * as React from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useLenis } from "lenis/react"

// Definition of each service with its custom-coded premium vector visual
const digitalServices = [
  {
    title: "Pay Per Click",
    description: "Highly targeted, high-intent paid search and social campaigns that convert impressions into pipeline and profit.",
    themeColor: "group-hover:border-emerald-500/20 hover:shadow-emerald-500/5",
    accentText: "text-emerald-500",
    bgGradient: "from-emerald-500/5",
    href: "/services/digital-marketing/ppc",
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 120" fill="none">
        <g opacity="0.3" className="stroke-emerald-500/30">
          <line x1="0" y1="30" x2="318" y2="30" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="0" y1="70" x2="318" y2="70" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="100" y1="0" x2="100" y2="120" strokeWidth="0.75" />
          <line x1="200" y1="0" x2="200" y2="120" strokeWidth="0.75" />
        </g>
        {/* Animated Graph Line */}
        <path
          d="M30,90 Q80,85 120,45 T210,35 T280,15"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="transition-all duration-700"
          style={{ strokeDasharray: "300", strokeDashoffset: isHovered ? "0" : "20" }}
        />
        {/* Metric indicator node */}
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translate(210px, 35px) scale(1.1)" : "translate(210px, 35px)" }}>
          <circle r="12" fill="var(--card)" stroke="#10b981" strokeWidth="1.5" />
          <circle r="4" fill="#10b981" />
          {/* Sparkle on Peak */}
          {isHovered && <circle r="20" stroke="#10b981" strokeWidth="1" className="animate-ping opacity-30" />}
        </g>
      </svg>
    )
  },
  {
    title: "Search Engine Optimization",
    description: "Traditional and conversational organic search positioning that keeps your brand authority first on Google.",
    themeColor: "group-hover:border-purple-500/20 hover:shadow-purple-500/5",
    accentText: "text-purple-500",
    bgGradient: "from-purple-500/5",
    href: "/services/digital-marketing/seo",
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 120" fill="none">
        <g opacity="0.3" className="stroke-purple-500/30">
          <line x1="0" y1="60" x2="318" y2="60" strokeWidth="0.75" />
          <line x1="159" y1="0" x2="159" y2="120" strokeWidth="0.75" strokeDasharray="3 3" />
        </g>
        {/* Search Bar Widget */}
        <g className="transition-all duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <rect x="60" y="35" width="198" height="34" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <path d="M75,52 L83,52 M79,48 L79,56" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" />
          <text x="95" y="56" fill="var(--foreground)" className="text-[10px] font-mono tracking-wide">digicarotene</text>
          {/* Animated Cursor caret */}
          <line x1="165" y1="45" x2="165" y2="58" stroke="#a855f7" strokeWidth="1.5" className={isHovered ? "animate-pulse" : ""} />
          
          {/* Verified Organic Badge */}
          <rect x="180" y="42" width="68" height="20" rx="4" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.2)" strokeWidth="1" />
          <text x="188" y="54" fill="#a855f7" className="text-[8px] font-bold tracking-wider uppercase font-mono">Rank #1</text>
        </g>
      </svg>
    )
  },
  {
    title: "Content Marketing",
    description: "Publishing on-brand, rich copy and storytelling assets designed to answer audience queries and fuel SEO/AEO pipelines.",
    themeColor: "group-hover:border-blue-500/20 hover:shadow-blue-500/5",
    accentText: "text-blue-500",
    bgGradient: "from-blue-500/5",
    href: "/services/digital-marketing/content",
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 120" fill="none">
        <g opacity="0.3" className="stroke-blue-500/30">
          <line x1="0" y1="40" x2="318" y2="40" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="0" y1="80" x2="318" y2="80" strokeWidth="0.75" strokeDasharray="3 3" />
        </g>
        {/* Connected document nodes */}
        <g className="transition-all duration-500" style={{ transform: isHovered ? "scale(1.02)" : "scale(1)" }}>
          <rect x="40" y="30" width="60" height="60" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="218" y="30" width="60" height="60" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          
          {/* Text line representations */}
          <line x1="50" y1="45" x2="90" y2="45" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="58" x2="80" y2="58" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="71" x2="70" y2="71" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />

          {/* Connection line with flow indicator */}
          <path d="M100,60 L218,60" stroke="url(#blue-grad-line)" strokeWidth="2" strokeDasharray="4 4" className="stroke-blue-500" />
          <circle cx="159" cy="60" r="12" fill="var(--card)" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />
          <polygon points="157,56 163,60 157,64" fill="#3b82f6" className={isHovered ? "translate-x-1 transition-transform" : ""} />

          {/* Content Outputs */}
          <line x1="228" y1="45" x2="268" y2="45" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
          <line x1="228" y1="58" x2="258" y2="58" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        </g>
        <defs>
          <linearGradient id="blue-grad-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--border)" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    title: "Social Media Marketing",
    description: "Dynamic community building, brand narrative distribution, and platform-specific content that drives viral engagement.",
    themeColor: "group-hover:border-pink-500/20 hover:shadow-pink-500/5",
    accentText: "text-pink-500",
    bgGradient: "from-pink-500/5",
    href: "/services/digital-marketing/social",
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 120" fill="none">
        <g opacity="0.3" className="stroke-pink-500/30">
          <circle cx="159" cy="60" r="40" strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1="159" y1="0" x2="159" y2="120" strokeWidth="0.75" />
        </g>
        {/* Viral Node network */}
        <g className="transition-transform duration-700 ease-out" style={{ transform: isHovered ? "rotate(15deg)" : "rotate(0)" }}>
          <circle cx="159" cy="60" r="14" fill="var(--card)" stroke="#ec4899" strokeWidth="2" />
          <path d="M156,58 Q159,54 162,58 T162,64 T156,58" fill="#ec4899" /> {/* Heart shape */}
          
          {/* Satellite interaction nodes */}
          <circle cx="119" cy="30" r="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="199" cy="30" r="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="119" cy="90" r="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="199" cy="90" r="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          
          <line x1="159" y1="60" x2="119" y2="30" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="159" y1="60" x2="199" y2="30" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="159" y1="60" x2="119" y2="90" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="159" y1="60" x2="199" y2="90" stroke="var(--border)" strokeWidth="1.5" />
        </g>
      </svg>
    )
  },
  {
    title: "Graphic Designing",
    description: "High-end visual identities, bespoke brand graphics, and presentation assets that reflect premium brand design standards.",
    themeColor: "group-hover:border-cyan-500/20 hover:shadow-cyan-500/5",
    accentText: "text-cyan-500",
    bgGradient: "from-cyan-500/5",
    href: "/services/digital-marketing/graphic-design",
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 120" fill="none">
        <g opacity="0.3" className="stroke-cyan-500/30">
          <rect x="40" y="20" width="238" height="80" rx="8" strokeWidth="0.75" strokeDasharray="4 4" />
        </g>
        {/* Pen tool / Bezier Vector Visual */}
        <g className="transition-all duration-500" style={{ transform: isHovered ? "translateY(-2px)" : "translateY(0)" }}>
          <path d="M60,80 C110,20 208,20 258,80" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          
          {/* Bezier Handles */}
          <line x1="159" y1="35" x2="119" y2="35" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="159" y1="35" x2="199" y2="35" stroke="var(--border)" strokeWidth="1.5" />
          
          <circle cx="159" cy="35" r="5" fill="var(--card)" stroke="#06b6d4" strokeWidth="1.5" />
          <rect x="115" y="31" width="8" height="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="195" y="31" width="8" height="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          
          <circle cx="60" cy="80" r="4" fill="#06b6d4" />
          <circle cx="258" cy="80" r="4" fill="#06b6d4" />
        </g>
      </svg>
    )
  },
  {
    title: "Web-Design & Development",
    description: "Bespoke, blazingly fast websites built with Framer-level motion details and fully optimized SEO/AEO architectures.",
    themeColor: "group-hover:border-orange-500/20 hover:shadow-orange-500/5",
    accentText: "text-orange-500",
    bgGradient: "from-orange-500/5",
    href: "/services/digital-marketing/web",
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 120" fill="none">
        <g opacity="0.3" className="stroke-orange-500/30">
          <line x1="0" y1="20" x2="318" y2="20" strokeWidth="0.75" />
          <line x1="80" y1="20" x2="80" y2="120" strokeWidth="0.75" />
        </g>
        {/* Code IDE Mockup layout */}
        <g className="transition-all duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          {/* Main wireframe pane */}
          <rect x="100" y="35" width="138" height="60" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" className="shadow" />
          
          {/* Mock layout structure */}
          <rect x="110" y="45" width="50" height="15" rx="3" fill="rgba(255,80,0,0.06)" stroke="rgba(255,80,0,0.2)" strokeWidth="1" />
          <rect x="110" y="65" width="118" height="6" rx="1.5" fill="var(--border)" />
          <rect x="110" y="75" width="80" height="6" rx="1.5" fill="var(--border)" />
          
          {/* Tag layout element */}
          <text x="170" y="56" fill="#ff5000" className="text-[9px] font-mono font-semibold">&lt;div /&gt;</text>
        </g>
      </svg>
    )
  },
  {
    title: "Personal Branding",
    description: "Positioning founders, executives, and leaders as key industry authorities through guided storytelling and profile optimization.",
    themeColor: "group-hover:border-indigo-500/20 hover:shadow-indigo-500/5",
    accentText: "text-indigo-500",
    bgGradient: "from-indigo-500/5",
    href: "/services/digital-marketing/personal-branding",
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 120" fill="none">
        <g opacity="0.3" className="stroke-indigo-500/30">
          <circle cx="159" cy="60" r="50" strokeWidth="0.75" strokeDasharray="2 2" />
        </g>
        {/* Profile / Influence visual */}
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px) scale(1.02)" : "translateY(0) scale(1)" }}>
          <rect x="90" y="35" width="138" height="54" rx="12" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" className="shadow" />
          
          {/* Avatar frame */}
          <circle cx="120" cy="62" r="16" fill="var(--border)" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
          <circle cx="120" cy="58" r="6" fill="var(--background)" />
          <path d="M110,74 C110,68 114,68 120,68 C126,68 130,68 130,74" fill="var(--background)" />

          {/* Influence badge (Checkmark badge) */}
          <circle cx="132" cy="50" r="6" fill="#6366f1" />
          <path d="M129,50 L131,52 L135,48" stroke="var(--card)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

          {/* Text representations */}
          <line x1="145" y1="55" x2="210" y2="55" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
          <line x1="145" y1="65" x2="190" y2="65" stroke="rgba(99,102,241,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    )
  },
  {
    title: "Email Marketing",
    description: "Direct-to-human, beautifully typeset email communications that avoid spam folders and foster direct customer relations.",
    themeColor: "group-hover:border-red-500/20 hover:shadow-red-500/5",
    accentText: "text-red-500",
    bgGradient: "from-red-500/5",
    href: "/services/digital-marketing/email",
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 120" fill="none">
        <g opacity="0.3" className="stroke-red-500/30">
          <line x1="0" y1="60" x2="318" y2="60" strokeWidth="0.75" />
        </g>
        {/* Mail pipeline escaping spam box */}
        <g className="transition-all duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          {/* Inbox Widget */}
          <rect x="80" y="35" width="158" height="50" rx="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" className="shadow" />
          
          {/* Inbox Header */}
          <rect x="80" y="35" width="158" height="15" rx="10" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.15)" strokeWidth="1.5" />
          <circle cx="95" cy="42" r="3" fill="#ef4444" />
          <text x="105" y="46" fill="var(--foreground)" className="text-[8px] font-mono font-semibold tracking-wider">PRIMARY_INBOX</text>

          {/* Letter / Message widget */}
          <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateX(10px)" : "translateX(0)" }}>
            <rect x="110" y="58" width="88" height="20" rx="4" fill="var(--background)" stroke="var(--border)" strokeWidth="1" />
            <line x1="115" y1="68" x2="165" y2="68" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            <polygon points="175,64 181,68 175,72" fill="#ef4444" />
          </g>
        </g>
      </svg>
    )
  },
  {
    title: "Insta Shoot",
    description: "Bespoke brand and content shoots tailored for high-quality social reels, campaigns, and immediate marketing deployment.",
    themeColor: "group-hover:border-yellow-500/20 hover:shadow-yellow-500/5",
    accentText: "text-yellow-500",
    bgGradient: "from-yellow-500/5",
    href: "/services/digital-marketing/insta-shoot",
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 120" fill="none">
        <g opacity="0.3" className="stroke-yellow-500/30">
          <rect x="30" y="15" width="258" height="90" rx="12" strokeWidth="0.75" strokeDasharray="3 3" />
        </g>
        {/* Shutter / Camera focus overlay */}
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}>
          {/* Center focus bracket */}
          <path d="M149,50 L149,45 L154,45" stroke="#eab308" strokeWidth="1.5" />
          <path d="M169,50 L169,45 L164,45" stroke="#eab308" strokeWidth="1.5" />
          <path d="M149,70 L149,75 L154,75" stroke="#eab308" strokeWidth="1.5" />
          <path d="M169,70 L169,75 L164,75" stroke="#eab308" strokeWidth="1.5" />
          
          {/* Shutter/Lens Circle */}
          <circle cx="159" cy="60" r="24" fill="rgba(234,179,8,0.04)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="159" cy="60" r="12" fill="var(--card)" stroke="#eab308" strokeWidth="2" />
          <circle cx="159" cy="60" r="4" fill="#eab308" />

          {/* Shutter lines */}
          <line x1="135" y1="60" x2="140" y2="60" stroke="var(--border)" strokeWidth="1" />
          <line x1="183" y1="60" x2="178" y2="60" stroke="var(--border)" strokeWidth="1" />
        </g>
      </svg>
    )
  }
]

export function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)
  const sectionRef = React.useRef<HTMLElement>(null)
  const trackRef = React.useRef<HTMLDivElement>(null)
  const progressBarRef = React.useRef<HTMLDivElement>(null)
  const maxTranslateRef = React.useRef(0)
  const [scrollHeight, setScrollHeight] = React.useState("200vh")

  const measureTrack = React.useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const overflow = Math.max(track.scrollWidth - window.innerWidth, 0)
    maxTranslateRef.current = overflow
    setScrollHeight(`${window.innerHeight + overflow}px`)
  }, [])

  const updateProgress = React.useCallback(() => {
    const section = sectionRef.current
    const track = trackRef.current
    const bar = progressBarRef.current
    if (!section || !track) return

    const total = section.offsetHeight - window.innerHeight
    const progress =
      total <= 0
        ? 0
        : Math.min(Math.max(-section.getBoundingClientRect().top / total, 0), 1)

    track.style.transform = `translate3d(${-(maxTranslateRef.current * progress)}px, 0, 0)`

    if (bar) {
      bar.style.width = `${progress * 100}%`
    }
  }, [])

  React.useEffect(() => {
    measureTrack()
    updateProgress()

    const onResize = () => {
      measureTrack()
      updateProgress()
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [measureTrack, updateProgress])

  // Sync with Lenis RAF so progress updates during the smooth lerp, not only when it ends
  useLenis(() => {
    updateProgress()
  })

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: scrollHeight }}
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden py-10 md:py-12">
        <div className="mx-auto mb-8 max-w-6xl px-6 text-center md:mb-10">
          <span className="mb-2 block text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Digital Capabilities
          </span>
          <h2 className="mb-3 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text font-lustria text-3xl font-normal tracking-tight text-transparent md:text-4xl">
            Unified Digital Marketing Ecosystem
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            Scroll to explore — vertical motion drives these cards horizontally across the full capability set.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max gap-5 px-6 will-change-transform md:gap-6 md:px-10"
          >
            {digitalServices.map((service, index) => {
              const isHovered = hoveredCard === index
              return (
                <div
                  key={service.title}
                  className={`group relative flex h-[380px] w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/20 transition-all duration-500 hover:shadow-xl md:h-[400px] md:w-[340px] ${service.themeColor}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${service.bgGradient} via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative h-40 w-full overflow-hidden border-b border-border/40 bg-muted/10 md:h-44">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px]" />
                    {service.renderVisual(isHovered)}
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col justify-between p-5 md:p-6">
                    <div>
                      <div className="mb-2 flex items-center gap-1.5">
                        <Sparkles
                          className={`size-3.5 ${service.accentText} opacity-80 group-hover:animate-pulse`}
                        />
                        <h3 className="font-lustria text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                          {service.title}
                        </h3>
                      </div>
                      <p className="font-sans text-xs font-light leading-relaxed text-muted-foreground md:text-sm">
                        {service.description}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      className={`mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-semibold ${service.accentText} group/link`}
                    >
                      View Capability Architecture
                      <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  <div className="absolute inset-px -z-10 rounded-3xl bg-gradient-to-tr from-primary/5 to-transparent opacity-0 blur-sm transition-opacity group-hover:opacity-100" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-xs px-6">
          <div className="h-0.5 overflow-hidden rounded-full bg-border/60">
            <div
              ref={progressBarRef}
              className="h-full w-0 rounded-full bg-primary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
