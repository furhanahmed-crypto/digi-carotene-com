"use client"

import * as React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Compass, Milestone, ShieldCheck, Cpu } from "lucide-react"

import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

const serviceData: Record<string, {
  title: string
  description: string
  accentColor: string
  narrative: string
  steps: string[]
  deliverables: string[]
  kpiName: string
  kpiValue: string
  details: string[]
  renderVisual: (isHovered: boolean) => React.ReactNode
}> = {
  "mall-activations": {
    title: "Mall Activations",
    description: "Immersive, high-footfall real-world brand setups inside premium retail malls that capture active consumers.",
    accentColor: "from-orange-500/10",
    narrative: "Immersive, high-footfall setups in luxury shopping hubs. We custom-engineer sleek modular kiosks paired with interactive touchscreens, direct sensory displays, and friction-free QR registration pipelines designed to bridge offline foot traffic into online brand relationships.",
    steps: [
      "Modular Blueprint Design & CAD Layouts",
      "Interactive Interface & POS Software Integration",
      "Staff Coordination & Real-time Traffic Audits"
    ],
    deliverables: [
      "Modular Blueprint CAD Structural Files",
      "Interactive Software Kiosk Layouts",
      "Post-Event Traffic & Lead Conversion Audits"
    ],
    kpiName: "Average Weekly Footfall Interactions",
    kpiValue: "12,500+",
    details: [
      "Bespoke modular design built with high-quality visual aesthetics.",
      "Interactive digital touchscreens and augmented-reality engagement.",
      "Professional event staffing and immediate conversion tracking via QR.",
      "Strategically mapped locations in prime retail centers."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="60" stroke="#ff5000" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <rect x="50" y="65" width="100" height="70" rx="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="50" y="65" width="100" height="18" rx="10" fill="rgba(255,80,0,0.06)" stroke="rgba(255,80,0,0.2)" strokeWidth="1.5" />
          <line x1="70" y1="100" x2="130" y2="100" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
          <line x1="70" y1="115" x2="110" y2="115" stroke="#ff5000" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    )
  },
  "residential-activations": {
    title: "Residential Activations",
    description: "Hyper-local, community-focused roadshows directly in premium housing societies and high-end residential towers.",
    accentColor: "from-blue-500/10",
    narrative: "Hyper-local community popups directly inside premium housing high-rises. We construct targeted kiosks that introduce direct brand trials, home testing opportunities, and immediate community signups, establishing deep baseline brand loyalty.",
    steps: [
      "Society Selection & Income Profiling Audits",
      "Sleek Modular Canopy Production",
      "Direct Trial Signups & Lead Processing"
    ],
    deliverables: [
      "Demographic Housing Cluster Profile Deck",
      "Pop-Up Construction Blueprint Plans",
      "Lead Capture Databases & Signup Logs"
    ],
    kpiName: "Household Trial Enrollment Rate",
    kpiValue: "28.4%",
    details: [
      "Direct residential community engagement and trial zones.",
      "Bespoke popups and kiosks aligned with resident profiles.",
      "Interactive contests, family-friendly events, and lead capture.",
      "Targeted localization based on household income demographics."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="70" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-5px)" : "translateY(0)" }}>
          <rect x="50" y="55" width="45" height="90" rx="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="105" y="35" width="45" height="110" rx="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="62" cy="75" r="3" fill="#3b82f6" />
          <circle cx="82" cy="75" r="3" fill="#3b82f6" />
          <circle cx="118" cy="55" r="3" fill="var(--border)" />
          <circle cx="138" cy="55" r="3" fill="var(--border)" />
          <circle cx="118" cy="75" r="3" fill="#3b82f6" />
          <circle cx="138" cy="75" r="3" fill="#3b82f6" />
        </g>
      </svg>
    )
  },
  "theatre-marketing": {
    title: "Theatre Marketing",
    description: "Immersive on-screen advertising and experiential lobby popups inside premium multiplexes and cinema screens.",
    accentColor: "from-purple-500/10",
    narrative: "Commanding attention inside multiplexes. We integrate cinematic pre-show video placements with high-end lobby photo booths and digital product demo stands, ensuring complete, focused engagement with premium moviegoers.",
    steps: [
      "Target Multiplex & Premiere Screen Selection",
      "Cinema Projection Video-Format Tuning",
      "Lobby Demo Installation & Engagement Setup"
    ],
    deliverables: [
      "Multiplex Screen Placement Schedules",
      "Lobby Experience Construct Outlines",
      "Interactive Screen Engagement Analytics"
    ],
    kpiName: "Verified Brand Recall Increase",
    kpiValue: "76.5%",
    details: [
      "Stunning on-screen video ads played before high-anticipation premieres.",
      "Lobby activations, photo booths, and product trials.",
      "Direct conversion triggers sync'd to showtimes and movie profiles.",
      "Exclusive partnerships with premium cinema complexes."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <polygon points="100,170 30,50 170,50" fill="rgba(168,85,247,0.03)" />
        <g className="transition-all duration-500" style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}>
          <rect x="30" y="45" width="140" height="80" rx="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="36" y="51" width="128" height="68" rx="8" fill="rgba(168,85,247,0.06)" stroke="rgba(168,85,247,0.2)" strokeWidth="1" />
          <circle cx="100" cy="85" r="14" fill="var(--card)" stroke="#a855f7" strokeWidth="1.5" />
          <polygon points="98,80 105,85 98,90" fill="#a855f7" />
        </g>
      </svg>
    )
  },
  "campus-activations": {
    title: "Campus Activations",
    description: "Highly energetic, culture-forward activations in major universities and campuses targeting Gen-Z consumers.",
    accentColor: "from-yellow-500/10",
    narrative: "Connecting directly inside regional universities and colleges. We develop competitive gaming booths, secure strategic student ambassador partnerships, and build mobile-first incentive maps tailored for rapid social sharing.",
    steps: [
      "University Collaboration Approvals & Pitching",
      "Interactive Gaming/Challenge Booth Construction",
      "Student Influencer & Ambassador Integration"
    ],
    deliverables: [
      "Campus Coordination & Partnership Packs",
      "Booth Software Logic & UI Schemes",
      "Direct Brand Registrations Database Logs"
    ],
    kpiName: "Gen-Z Social Shares Rate",
    kpiValue: "+580%",
    details: [
      "Interactive college festival setups and creative game booths.",
      "Gen-Z focused student ambassador and influencer partnerships.",
      "High-energy stage contests and direct-to-mobile product trials.",
      "Seamless digital conversion pipelines via social-first QR mechanics."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="60" stroke="#eab308" strokeWidth="0.5" opacity="0.3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <path d="M40,150 L40,65 L160,65 L160,150" stroke="var(--border)" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="65" y="45" width="70" height="25" rx="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="100" cy="58" r="4" fill="#eab308" />
          <polygon points="100,72 108,76 100,80 92,76" fill="#eab308" />
          <line x1="100" y1="80" x2="100" y2="86" stroke="#eab308" strokeWidth="1" />
        </g>
      </svg>
    )
  },
  "corporate-events": {
    title: "Corporate Events",
    description: "High-end corporate gatherings, brand roadshows, and executive networking events in premium business districts.",
    accentColor: "from-indigo-500/10",
    narrative: "Sleek, business-district product displays. We target high-value corporate employees during office downtime inside premier IT hubs and complexes, providing exclusive brand trials and immediate conversion perks.",
    steps: [
      "Corporate Tech District Site Audits",
      "Sleek Executive Lounge Blueprint Drafts",
      "Exclusive Corporate Incentive Signups"
    ],
    deliverables: [
      "Corporate Park Location Audits",
      "Lounge Display & Canopy Production CADs",
      "Qualified Professional Contact Database"
    ],
    kpiName: "Qualified Professional Leads",
    kpiValue: "2,400+",
    details: [
      "High-end corporate product trials and premium display popups.",
      "Bespoke tech lounges and networking configurations.",
      "Targeted corporate employee perks and immediate registrations.",
      "Located in the heart of major corporate IT hubs and business parks."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <polygon points="100,20 40,120 160,120" fill="rgba(99,102,241,0.03)" />
        <g className="transition-all duration-500" style={{ transform: isHovered ? "scale(1.02)" : "scale(1)" }}>
          <rect x="40" y="85" width="120" height="50" rx="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="90" y="55" width="20" height="30" rx="3" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="100" cy="70" r="3" fill="#6366f1" />
        </g>
      </svg>
    )
  },
  "festival-marketing": {
    title: "Festival Marketing",
    description: "High-impact brand presences at major national festivals, food events, music gigs, and cultural exhibitions.",
    accentColor: "from-pink-500/10",
    narrative: "Scale-architected public pavilions at cultural events, exhibitions, and gigs. Designed to accommodate immense crowd flows, we integrate physical brand photo moments with point-of-sale systems for direct conversions.",
    steps: [
      "Festival Site Footprint & Flow Audits",
      "Immersive Pavilion CAD & Structural Layouts",
      "Cashless Point-of-Sale System Integration"
    ],
    deliverables: [
      "Immersive Pavilion Structural CAD Layouts",
      "POS & Queue Management Guidelines",
      "Footfall & Direct Campaign Sales Audits"
    ],
    kpiName: "Direct Event Sales / Signs",
    kpiValue: "18,900+",
    details: [
      "Immersive scale pavilions built for heavy footfall capacities.",
      "Exclusive brand experiential zones with photo-sharing mechanics.",
      "Bespoke festival-themed brand content and custom packaging.",
      "Synchronized offline sales with immediate real-time tracking."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="65" stroke="#ec4899" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <polygon points="100,45 40,135 160,135" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="100" y1="45" x2="100" y2="135" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="100" cy="45" r="4" fill="#ec4899" />
          {isHovered && (
            <g className="stroke-pink-500 animate-pulse">
              <path d="M40,55 L50,65 M160,55 L150,65" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          )}
        </g>
      </svg>
    )
  },
  "popup-stores": {
    title: "Popup Stores",
    description: "Temporary, high-design retail points that create brand urgency, exclusive product trials, and high sales volume.",
    accentColor: "from-red-500/10",
    narrative: "Urgency-focused high-concept retail structures. We design, produce, and launch premium temporary storefronts paired with synchronized influencer events, digital reservation queues, and physical POS platforms.",
    steps: [
      "Location Demographics & Visual Mapping",
      "Premium Interior Spatial Layout Creation",
      "Seamless Cashless Checkout Setup"
    ],
    deliverables: [
      "Popup Location Assessment File",
      "Interior Spatial CAD Construction Blueprints",
      "Transaction Processing & Conversion Audits"
    ],
    kpiName: "Popup Retail Sales Velocity",
    kpiValue: "+340%",
    details: [
      "Sleek architectural structural design with premium visual appeal.",
      "Limited-edition drop models that generate high brand urgency.",
      "Fully integrated, cashless physical-to-digital POS mechanics.",
      "Synchronized with digital influencers and press-release events."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <rect x="25" y="25" width="150" height="150" rx="12" stroke="var(--border)" strokeWidth="0.75" opacity="0.2" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-3px)" : "translateY(0)" }}>
          <rect x="40" y="55" width="120" height="70" rx="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="55" y="80" width="30" height="45" rx="3" fill="var(--card)" stroke="var(--border)" strokeWidth="1.25" />
          <rect x="100" y="75" width="50" height="35" rx="3" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.2)" strokeWidth="1.25" />
          <text x="111" y="96" fill="#ef4444" className="text-[9px] font-mono font-bold tracking-widest uppercase">OPEN</text>
        </g>
      </svg>
    )
  },
  "influencer-campaigns": {
    title: "Influencer Campaigns",
    description: "Connecting offline activations with premium digital content creators who broadcast your physical footprint.",
    accentColor: "from-cyan-500/10",
    narrative: "Bridging real-world setups with digital creator networks. We bring tier-1 content creators directly on-site to stream, film, and share your physical experiences, generating immediate digital reach spikes and conversion velocity.",
    steps: [
      "Curated Local Creator Matchmaking Profiles",
      "On-site Dynamic Creative Studio Setup",
      "Direct Content Amplification Launch"
    ],
    deliverables: [
      "Influencer Outreach & Campaign Specifications",
      "On-site Media Concept Guidelines",
      "Creator Amplified Engagement Analytics"
    ],
    kpiName: "Total Integrated Reach Views",
    kpiValue: "4.2M views",
    details: [
      "Hand-selected tier-1 digital influencers with high audience metrics.",
      "On-site creation setups matching the aesthetic theme of the event.",
      "Viral reel and post creation that translates to footfall spikes.",
      "End-to-end management from brief to detailed metrics analysis."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="70" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}>
          <circle cx="100" cy="90" r="30" fill="rgba(6,182,212,0.04)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="100" cy="90" r="24" fill="var(--card)" stroke="#06b6d4" strokeWidth="2.5" />
          <rect x="88" y="78" width="24" height="40" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1" className="shadow" />
          <circle cx="100" cy="90" r="4" fill="#06b6d4" />
        </g>
      </svg>
    )
  },
  "metro-branding": {
    title: "Metro Branding",
    description: "High-visibility transit advertisement, train wraps, and digital screen takeovers at major metropolitan stations.",
    accentColor: "from-emerald-500/10",
    narrative: "Transit takeovers. We wrap major metropolitan lines with clean brand graphics and take over high-traffic exit gate digital video displays, driving maximum daily commuter recall frequency.",
    steps: [
      "Transit Station & Route Volume Audits",
      "Train Wrap Layout & Artwork Systems",
      "Media Schedule Setup & Launch Coordination"
    ],
    deliverables: [
      "Station Volume & Impression Schedules",
      "High-Fidelity Train Wrap Graphic Layouts",
      "Media Launch Logs & Verification Records"
    ],
    kpiName: "Daily Transit Impressions",
    kpiValue: "850,000",
    details: [
      "Full metro train wraps with premium typography and artwork.",
      "Digital screen takeovers at high-traffic entry/exit gates.",
      "Interactive QR codes for direct mobile-based couponing.",
      "Unparalleled daily brand impressions and recall frequency."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <line x1="20" y1="105" x2="180" y2="105" stroke="var(--border)" strokeWidth="1.5" opacity="0.3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateX(8px)" : "translateX(0)" }}>
          <rect x="30" y="65" width="140" height="40" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" className="shadow" />
          <rect x="30" y="85" width="140" height="10" rx="2" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
          <rect x="45" y="72" width="16" height="8" rx="1.5" fill="var(--border)" />
          <rect x="75" y="72" width="16" height="8" rx="1.5" fill="var(--border)" />
          <rect x="105" y="72" width="16" height="8" rx="1.5" fill="#10b981" />
          <rect x="135" y="72" width="16" height="8" rx="1.5" fill="var(--border)" />
        </g>
      </svg>
    )
  }
}

export function OfflineServiceDetail({ service }: { service: string }) {
  const [isHovered, setIsHovered] = React.useState(false)
  const data = serviceData[service]

  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title={data.title}
        description={data.description}
        accentColor={data.accentColor}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Offline Marketing", href: "/services/offline-marketing" },
          { label: data.title },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 mt-8 md:mt-10 space-y-14">
        {/* Back Link */}
        <Link
          href="/services/offline-marketing"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> Back to Offline Services
        </Link>

        {/* Section A: In-Depth Service Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Compass className="size-3.5" /> EXPERIENTIAL CORE
            </span>
            <h2 className="font-lustria text-3xl md:text-4xl font-normal tracking-tight leading-tight">
              Physical Touchpoints. Tangible Authority.
            </h2>
            <p className="text-muted-foreground font-sans font-light text-base leading-relaxed">
              {data.narrative}
            </p>
            <div className="p-4 rounded-xl border border-border bg-card/40 font-mono text-xs text-muted-foreground italic">
              "Tactile, real-world nodes designed to anchor your brand identity deep inside regional community and retail hubs."
            </div>
          </div>

          {/* Glowing Focus Visual block */}
          <div 
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-3xl border border-border/80 bg-card/30 p-6 shadow-2xl h-[320px] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:12px_12px]" />
              <div className="size-48 flex items-center justify-center">
                {data.renderVisual(isHovered)}
              </div>
              <div className={`absolute -inset-px -z-10 rounded-[30px] bg-gradient-to-tr ${data.accentColor} to-transparent opacity-40 blur-md`} />
            </div>
          </div>
        </div>

        {/* Section B: Delivery Methodology */}
        <div className="border-t border-border/50 pt-12 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-3">
              <Milestone className="size-3.5" /> DEPLOYMENT TRACKS
            </span>
            <h3 className="font-lustria text-2xl md:text-3xl font-normal tracking-tight">
              Our 3-Phase Experiential Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.steps.map((step, idx) => (
              <div key={idx} className="group relative rounded-2xl border border-border bg-card/15 p-6 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="font-mono text-xs text-primary font-bold mb-4">PHASE 0{idx + 1}</div>
                <h4 className="font-lustria text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light">
                  Direct production, physical coordinate checking, on-site testing, and synchronized analytics tracking setups.
                </p>
                <div className="absolute inset-px -z-10 rounded-2xl bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Section C: Artifacts Grid & Technical benchmarks side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-border/50 pt-12 items-stretch">
          
          {/* Deliverables checklists (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <ShieldCheck className="size-3.5" /> PHYSICAL DELIVERABLES
            </span>
            <h3 className="font-lustria text-2xl font-normal">What We Produce</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.deliverables.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start p-4 rounded-xl border border-border bg-card/20">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground font-sans font-light leading-relaxed">{item}</span>
                </div>
              ))}
              {data.details.slice(0, 2).map((item, idx) => (
                <div key={idx + 10} className="flex gap-3 items-start p-4 rounded-xl border border-border bg-card/20">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground font-sans font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric KPI showcase block (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl border border-border/50 bg-background/50 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden h-full min-h-[220px]">
              <div className="absolute top-0 right-0 -translate-y-2 translate-x-2 size-32 bg-primary/5 rounded-full blur-2xl" />
              <Cpu className="size-8 text-primary mb-3 animate-[spin_10s_linear_infinite]" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-1">EXPECTED KPI OUTCOME</span>
              <span className="text-3xl sm:text-4xl font-lustria font-normal text-primary my-2">{data.kpiValue}</span>
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mt-1">{data.kpiName}</p>
            </div>
          </div>

        </div>

        {/* Dynamic CTA */}
        <div className="text-center pt-8 border-t border-border/50">
          <Button nativeButton={false} render={<Link href={contactHref} />} size="lg" className="rounded-xl px-6 h-12 text-base font-medium group">
            <span className="flex items-center gap-1.5">
              Get Started with {data.title}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
