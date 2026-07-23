"use client"

import * as React from "react"
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Building, 
  Film, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  ShoppingBag, 
  Users, 
  Train 
} from "lucide-react"
import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"

const offlineServices = [
  {
    slug: "mall-activations",
    title: "Mall Activations",
    desc: "Engaging high-intent retail crowds with interactive popups, product sensory booths, and direct-to-consumer experiences.",
    accentColor: "text-emerald-500",
    bgGradient: "from-emerald-500/5",
    borderColor: "group-hover:border-emerald-500/20 hover:shadow-emerald-500/5",
    icon: MapPin,
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
        <g opacity="0.2" className="stroke-emerald-500/30">
          <circle cx="159" cy="50" r="30" strokeWidth="0.75" strokeDasharray="3 3" />
        </g>
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-2px)" : "translateY(0)" }}>
          <rect x="119" y="30" width="80" height="44" rx="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="119" y="30" width="80" height="12" rx="6" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.15)" strokeWidth="1.5" />
          <line x1="134" y1="52" x2="184" y2="52" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="134" y1="62" x2="164" y2="62" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    )
  },
  {
    slug: "residential-activations",
    title: "Residential Activations",
    desc: "Hyper-local community targeting inside premium residential complexes, establishing direct neighborhood trust and trials.",
    accentColor: "text-blue-500",
    bgGradient: "from-blue-500/5",
    borderColor: "group-hover:border-blue-500/20 hover:shadow-blue-500/5",
    icon: Building,
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
        <g opacity="0.2" className="stroke-blue-500/30">
          <line x1="0" y1="50" x2="318" y2="50" strokeWidth="0.75" />
        </g>
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}>
          <rect x="110" y="25" width="34" height="54" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="154" y="15" width="34" height="64" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="120" cy="38" r="2" fill="#3b82f6" />
          <circle cx="134" cy="38" r="2" fill="#3b82f6" />
          <circle cx="164" cy="28" r="2" fill="var(--border)" />
          <circle cx="178" cy="28" r="2" fill="var(--border)" />
          <circle cx="164" cy="42" r="2" fill="#3b82f6" />
          <circle cx="178" cy="42" r="2" fill="#3b82f6" />
        </g>
      </svg>
    )
  },
  {
    slug: "theatre-marketing",
    title: "Theatre Marketing",
    desc: "Capturing high-attention cinema audiences through immersive pre-show displays, on-screen ads, and foyer branding.",
    accentColor: "text-purple-500",
    bgGradient: "from-purple-500/5",
    borderColor: "group-hover:border-purple-500/20 hover:shadow-purple-500/5",
    icon: Film,
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
        <g opacity="0.2" className="stroke-purple-500/30">
          <line x1="70" y1="0" x2="159" y2="100" strokeWidth="0.75" strokeDasharray="2 2" />
          <line x1="248" y1="0" x2="159" y2="100" strokeWidth="0.75" strokeDasharray="2 2" />
        </g>
        <g className="transition-all duration-500" style={{ transform: isHovered ? "scale(1.02)" : "scale(1)" }}>
          <rect x="90" y="25" width="138" height="50" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="94" y="29" width="130" height="42" rx="6" fill="rgba(168,85,247,0.06)" stroke="rgba(168,85,247,0.15)" strokeWidth="1" />
          <polygon points="159,100 94,29 224,29" fill="rgba(168,85,247,0.03)" />
          <circle cx="159" cy="50" r="10" fill="var(--card)" stroke="#a855f7" strokeWidth="1.5" />
          <polygon points="157,47 163,50 157,53" fill="#a855f7" />
        </g>
      </svg>
    )
  },
  {
    slug: "campus-activations",
    title: "Campus Activations",
    desc: "Connect directly with Gen-Z and student demographics on university campuses through lively festivals and sponsorships.",
    accentColor: "text-orange-500",
    bgGradient: "from-orange-500/5",
    borderColor: "group-hover:border-orange-500/20 hover:shadow-orange-500/5",
    icon: GraduationCap,
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
        <g opacity="0.2" className="stroke-orange-500/30">
          <circle cx="159" cy="50" r="35" strokeWidth="0.75" />
        </g>
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}>
          <path d="M110,75 L110,35 L208,35 L208,75" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
          <rect x="134" y="25" width="50" height="18" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="159" cy="34" r="3" fill="#ff5000" />
          <polygon points="159,44 165,47 159,50 153,47" fill="#ff5000" />
          <line x1="159" y1="50" x2="159" y2="54" stroke="#ff5000" strokeWidth="1" />
        </g>
      </svg>
    )
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    desc: "Designing end-to-end corporate gatherings, executive product launches, summits, and customized workplace experiences.",
    accentColor: "text-indigo-500",
    bgGradient: "from-indigo-500/5",
    borderColor: "group-hover:border-indigo-500/20 hover:shadow-indigo-500/5",
    icon: Briefcase,
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
        <g opacity="0.2" className="stroke-indigo-500/30">
          <line x1="0" y1="75" x2="318" y2="75" strokeWidth="0.75" />
        </g>
        <g className="transition-all duration-500" style={{ transform: isHovered ? "scale(1.02)" : "scale(1)" }}>
          <rect x="100" y="45" width="118" height="30" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="149" y="30" width="20" height="20" rx="3" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <polygon points="159,10 134,45 184,45" fill="rgba(99,102,241,0.03)" />
          <circle cx="159" cy="40" r="2" fill="#6366f1" />
        </g>
      </svg>
    )
  },
  {
    slug: "festival-marketing",
    title: "Festival Marketing",
    desc: "Riding the wave of cultural attention during major public events and community festivals with high-visibility brand booths.",
    accentColor: "text-pink-500",
    bgGradient: "from-pink-500/5",
    borderColor: "group-hover:border-pink-500/20 hover:shadow-pink-500/5",
    icon: Sparkles,
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
        <g opacity="0.2" className="stroke-pink-500/30">
          <circle cx="159" cy="50" r="40" strokeWidth="0.75" strokeDasharray="3 3" />
        </g>
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}>
          <polygon points="159,18 119,70 199,70" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="159" y1="18" x2="159" y2="70" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="159" cy="18" r="3" fill="#ec4899" />
          {isHovered && (
            <g className="stroke-pink-500 animate-pulse">
              <path d="M109,25 L114,30 M209,25 L204,30" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          )}
        </g>
      </svg>
    )
  },
  {
    slug: "popup-stores",
    title: "Popup Stores",
    desc: "Bespoke, temporary physical retail spaces built to create brand urgency, visual storytelling, and high media hype.",
    accentColor: "text-cyan-500",
    bgGradient: "from-cyan-500/5",
    borderColor: "group-hover:border-cyan-500/20 hover:shadow-cyan-500/5",
    icon: ShoppingBag,
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
        <g opacity="0.2" className="stroke-cyan-500/30">
          <line x1="0" y1="65" x2="318" y2="65" strokeWidth="0.75" />
        </g>
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-2px)" : "translateY(0)" }}>
          <rect x="109" y="25" width="100" height="40" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="119" y="42" width="24" height="23" rx="2" fill="var(--card)" stroke="var(--border)" strokeWidth="1.25" />
          <rect x="159" y="38" width="40" height="27" rx="2" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.25" />
          <text x="169" y="52" fill="#06b6d4" className="text-[7px] font-mono font-bold tracking-widest uppercase">OPEN</text>
        </g>
      </svg>
    )
  },
  {
    slug: "influencer-campaigns",
    title: "Influencer Campaigns",
    desc: "Bridging the online-offline gap by aligning local macro/micro-influencers to show up and broadcast your physical events.",
    accentColor: "text-yellow-500",
    bgGradient: "from-yellow-500/5",
    borderColor: "group-hover:border-yellow-500/20 hover:shadow-yellow-500/5",
    icon: Users,
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
        <g opacity="0.2" className="stroke-yellow-500/30">
          <circle cx="159" cy="50" r="30" strokeWidth="0.75" strokeDasharray="4 4" />
        </g>
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}>
          <circle cx="159" cy="45" r="20" fill="rgba(234,179,8,0.04)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="159" cy="45" r="16" fill="var(--card)" stroke="#eab308" strokeWidth="2" />
          <rect x="151" y="37" width="16" height="26" rx="3" fill="var(--card)" stroke="var(--border)" strokeWidth="1" className="shadow" />
          <circle cx="159" cy="45" r="3" fill="#eab308" />
        </g>
      </svg>
    )
  },
  {
    slug: "metro-branding",
    title: "Metro Branding",
    desc: "Dominating daily high-frequency urban transit lines with platform banners, train wraps, and digital takeovers.",
    accentColor: "text-red-500",
    bgGradient: "from-red-500/5",
    borderColor: "group-hover:border-red-500/20 hover:shadow-red-500/5",
    icon: Train,
    renderVisual: (isHovered: boolean) => (
      <svg className="absolute inset-0 size-full" viewBox="0 0 318 100" fill="none">
        <g opacity="0.2" className="stroke-red-500/30">
          <line x1="0" y1="55" x2="318" y2="55" strokeWidth="0.75" />
        </g>
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateX(6px)" : "translateX(0)" }}>
          <rect x="79" y="30" width="158" height="30" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" className="shadow" />
          <rect x="79" y="44" width="158" height="8" rx="2" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
          <rect x="94" y="34" width="14" height="6" rx="1.5" fill="var(--border)" />
          <rect x="119" y="34" width="14" height="6" rx="1.5" fill="var(--border)" />
          <rect x="144" y="34" width="14" height="6" rx="1.5" fill="#ef4444" />
          <rect x="169" y="34" width="14" height="6" rx="1.5" fill="var(--border)" />
          <rect x="194" y="34" width="14" height="6" rx="1.5" fill="var(--border)" />
        </g>
      </svg>
    )
  }
]

export default function OfflineMarketingLandingPage() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title="Experiential Offline Activations"
        description="Connect with your audience where they live, shop, and gather with beautiful, sensory popups."
        accentColor="from-orange-500/10"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Offline Marketing" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 mt-8 md:mt-10 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>

        {/* Services Grid with Custom Animated SVGs, hover glows, and precise layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offlineServices.map((service, index) => {
            const isHovered = hoveredCard === index
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services/offline-marketing/${service.slug}`}
                className={`group relative rounded-3xl border border-border bg-card/20 overflow-hidden flex flex-col justify-between h-[380px] transition-all duration-500 hover:shadow-xl ${service.borderColor}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Radial background color bleed */}
                <div className={`absolute inset-0 bg-gradient-to-b ${service.bgGradient} via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* SVG Visual Header */}
                <div className="relative h-36 w-full border-b border-border/40 bg-muted/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px]" />
                  {service.renderVisual(isHovered)}
                </div>

                {/* Card details */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 ${service.accentColor} group-hover:bg-primary/10 group-hover:border-primary/20 transition-all`}>
                        <Icon className="size-3.5" />
                      </div>
                      <h3 className="font-lustria text-base font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light">
                      {service.desc}
                    </p>
                  </div>

                  <div className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold ${service.accentColor} group/link mt-4`}>
                    View Activation Spec
                    <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
                  </div>
                </div>

                {/* Ambient glowing outer shadow */}
                <div className={`absolute inset-px -z-10 rounded-[22px] bg-gradient-to-tr ${service.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
