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
  ppc: {
    title: "Pay Per Click (PPC)",
    description: "Highly targeted, high-intent paid search and social campaigns that convert impressions into pipeline and profit.",
    accentColor: "from-emerald-500/10",
    narrative: "Our approach to paid acquisition revolves around high-intent extraction. We don't burn budgets on broad, speculative keywords. Instead, we structure hyper-targeted negative match matrices, dynamic landing variants, and sophisticated multi-touch attribution schemas that map straight to your enterprise pipelines and commercial targets.",
    steps: [
      "Bespoke Intent Mapping & Keyword Extraction",
      "Creative A/B Multi-variant Deployment",
      "Automated Bid-Modulation & Attribution Sync"
    ],
    deliverables: [
      "High-Intent Keyword Matrix & Negative Matches",
      "Dynamic Page Layout & UX Variants",
      "Weekly ROAS & Customer Acquisition Cost Audits"
    ],
    kpiName: "Average Return on Ad Spend",
    kpiValue: "5.4x ROAS",
    details: [
      "Bespoke keyword extraction targeting high-intent purchasers.",
      "A/B testing of visual creatives and ad copy variants.",
      "Multi-channel budget optimization to maximize ROAS (Return on Ad Spend).",
      "Robust attribution models mapped directly to pipeline conversions."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="#10b981" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
        <path
          d="M40,150 Q80,140 110,90 T170,50"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          className="transition-all duration-1000"
          style={{ strokeDasharray: "200", strokeDashoffset: isHovered ? "0" : "15" }}
        />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translate(110px, 90px) scale(1.15)" : "translate(110px, 90px)" }}>
          <circle r="16" fill="var(--card)" stroke="#10b981" strokeWidth="2" />
          <circle r="6" fill="#10b981" />
          {isHovered && <circle r="26" stroke="#10b981" strokeWidth="1" className="animate-ping opacity-35" />}
        </g>
        <g className="transition-transform duration-700" style={{ transform: isHovered ? "translate(170px, 50px) scale(1.1)" : "translate(170px, 50px)" }}>
          <circle r="8" fill="#10b981" />
        </g>
      </svg>
    )
  },
  seo: {
    title: "Search Engine Optimization (SEO)",
    description: "Traditional and conversational organic search positioning that keeps your brand authority first on Google.",
    accentColor: "from-purple-500/10",
    narrative: "Organic prominence in 2026 requires optimizing for search engines and answer engines alike. We structure organization JSON-LD entity structures, crawl maps, and high-authority contextual narratives to keep your brand as the preferred, cited authority in conversational AI databases and traditional crawlers.",
    steps: [
      "Semantic Entity Structuring & Schema Inject",
      "Internal Node & Graph Interlinkage Mapping",
      "Continuous Crawl-Budget & Latency Auditing"
    ],
    deliverables: [
      "JSON-LD Schema & Semantic Graph Map",
      "Technical Indexability & Response Logs",
      "Conversational Citation Share Index Reports"
    ],
    kpiName: "Organic Impression Growth",
    kpiValue: "+280%",
    details: [
      "In-depth semantic audit of existing digital assets.",
      "Crawlability optimization for modern search engine spiders.",
      "High-authority backlink development and narrative outreach.",
      "Conversational citation readiness for generative answer engines."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <rect x="20" y="40" width="160" height="120" rx="12" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="20" y="40" width="160" height="25" rx="12" fill="rgba(168,85,247,0.05)" stroke="var(--border)" strokeWidth="1.5" />
        <circle cx="35" cy="52" r="3" fill="#ff5000" />
        <circle cx="45" cy="52" r="3" fill="#eab308" />
        <circle cx="55" cy="52" r="3" fill="#10b981" />
        <g className="transition-all duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <rect x="35" y="80" width="130" height="34" rx="6" fill="var(--background)" stroke="#a855f7" strokeWidth="1.5" />
          <text x="45" y="101" fill="var(--foreground)" className="text-[9px] font-mono tracking-wide">digicarotene</text>
          <rect x="115" y="87" width="44" height="20" rx="4" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
          <text x="122" y="99" fill="#a855f7" className="text-[7px] font-bold font-mono">RANK #1</text>
        </g>
      </svg>
    )
  },
  content: {
    title: "Content Marketing",
    description: "Publishing on-brand, rich copy and storytelling assets designed to answer audience queries and fuel SEO/AEO pipelines.",
    accentColor: "from-blue-500/10",
    narrative: "We write authoritative, long-form editorial copy that answers exact user questions. Formatted perfectly for schema engines and conversational extraction, our content structures establish key hubs of brand information that rank and earn citations.",
    steps: [
      "High-Intent Audience Query Extraction",
      "Topic-Cluster & Authority Node Drafts",
      "Structured Markup & JSON Snippet Tuning"
    ],
    deliverables: [
      "Long-Form Authority Guide Library",
      "Topic-Cluster Schema Structural Outlines",
      "Search Snippet Verification & Metadata Sets"
    ],
    kpiName: "AI Citations Retrieval",
    kpiValue: "87.4%",
    details: [
      "Bespoke narrative planning matching customer query trends.",
      "Long-form authoritative research pieces and industry guides.",
      "AEO-friendly formatting (schema, snippets, tables) for conversational engines.",
      "Multi-format distribution across newsletters, platforms, and socials."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <rect x="30" y="30" width="140" height="140" rx="16" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}>
          <line x1="50" y1="60" x2="150" y2="60" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="80" x2="130" y2="80" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="100" x2="140" y2="100" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="50" y1="120" x2="110" y2="120" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="140" cy="120" r="14" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5" />
          <polygon points="138,115 145,120 138,125" fill="#3b82f6" />
        </g>
      </svg>
    )
  },
  social: {
    title: "Social Media Marketing",
    description: "Dynamic community building, brand narrative distribution, and platform-specific content that drives viral engagement.",
    accentColor: "from-pink-500/10",
    narrative: "We design dynamic platform narratives that drive community engagement. Combining social-first asset pipelines with experiential tracking, we make your online presence viral and fully measurable, syncing directly with physical activations.",
    steps: [
      "Bespoke Visual Layout & Grid Theming",
      "Dynamic Social Content Sync Scheduling",
      "Creator Amplification & Event Coverage Setup"
    ],
    deliverables: [
      "High-Fidelity Social Creative Assets",
      "Omnichannel Publishing Pipeline",
      "Community Metric & Engagement Indexes"
    ],
    kpiName: "Organic Engagement Rate",
    kpiValue: "14.2%",
    details: [
      "Bespoke visual asset and campaign pipeline scheduling.",
      "Community engagement mapping and real-time interaction.",
      "Influencer alignment and physical event broadcast sync.",
      "Social-first storytelling designed for rapid, organic sharing."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="60" stroke="#ec4899" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
        <g className="transition-transform duration-1000 ease-out" style={{ transform: isHovered ? "rotate(25deg)" : "rotate(0)" }}>
          <circle cx="100" cy="100" r="20" fill="var(--card)" stroke="#ec4899" strokeWidth="2.5" />
          <path d="M96,97 Q100,92 104,97 T104,104 T96,97" fill="#ec4899" />
          
          <circle cx="50" cy="60" r="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="150" cy="60" r="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="50" cy="140" r="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="150" cy="140" r="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          
          <line x1="100" y1="100" x2="50" y2="60" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="100" y1="100" x2="150" y2="60" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="100" y1="100" x2="50" y2="140" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="100" y1="100" x2="150" y2="140" stroke="var(--border)" strokeWidth="1.5" />
        </g>
      </svg>
    )
  },
  "graphic-design": {
    title: "Graphic Designing",
    description: "High-end visual identities, bespoke brand graphics, and presentation assets that reflect premium brand design standards.",
    accentColor: "from-cyan-500/10",
    narrative: "Sleek, high-contrast, premium layouts. We craft complete brand visual languages, digital vectors, and presentation decks that reflect absolute layout mastery and modern high-contrast aesthetic minimalism.",
    steps: [
      "Brand Core Typography & System Drafting",
      "High-Fidelity Custom Vector Generation",
      "Standard Corporate Presentation Guidelines"
    ],
    deliverables: [
      "Scalable Vector Art Kits & Asset Libraries",
      "Brand Style System & Guidelines Manual",
      "Executive Pitch-Deck Layout Presets"
    ],
    kpiName: "Visual System Rating",
    kpiValue: "100%",
    details: [
      "Bespoke corporate visual identity development.",
      "Premium, vector-level layout designs and vector sets.",
      "Aesthetic presentation deck and digital campaign graphics.",
      "Brand guideline formulation for consistent design application."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <rect x="25" y="25" width="150" height="150" rx="12" stroke="var(--border)" strokeWidth="0.75" strokeDasharray="4 4" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <path d="M40,140 C80,40 120,40 160,140" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="65" x2="60" y2="65" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="100" y1="65" x2="140" y2="65" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="100" cy="65" r="7" fill="var(--card)" stroke="#06b6d4" strokeWidth="2" />
          <rect x="56" y="61" width="8" height="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="136" y="61" width="8" height="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        </g>
      </svg>
    )
  },
  web: {
    title: "Web-Design & Development",
    description: "Bespoke, blazingly fast websites built with Framer-level motion details and fully optimized SEO/AEO architectures.",
    accentColor: "from-orange-500/10",
    narrative: "We build blazingly fast websites using the Next.js App Router, complete with smooth scroll integrations (Lenis/GSAP) and fully optimized SEO/AEO metadata architectures. Every line of code is performance-engineered to score perfect Lighthouse benchmarks.",
    steps: [
      "Custom Architecture & UI/UX Storyboarding",
      "Performance-First Code & Smooth Scroll Wiring",
      "Metadata Inject & Lighthouse Auditing"
    ],
    deliverables: [
      "Modern Next.js Source Code Files",
      "Performance & Responsive Audit Records",
      "Interactive Page Element Vector Sets"
    ],
    kpiName: "Lighthouse Performance Core",
    kpiValue: "100/100",
    details: [
      "Highly responsive layouts optimized across standard mobile & desktop.",
      "Buttery-smooth animations and scroll transitions (Lenis & GSAP standard).",
      "SEO-first schemas and meta attributes built into Next.js layouts.",
      "Blazingly fast build optimizations scoring perfect Lighthouse markers."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <rect x="20" y="30" width="160" height="140" rx="16" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="20" y="30" width="160" height="25" rx="16" fill="rgba(255,80,0,0.04)" stroke="var(--border)" strokeWidth="1.5" />
        <circle cx="35" cy="42" r="3" fill="#ff5000" />
        <circle cx="45" cy="42" r="3" fill="#eab308" />
        <circle cx="55" cy="42" r="3" fill="#10b981" />
        <g className="transition-all duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <rect x="35" y="70" width="60" height="20" rx="4" fill="rgba(255,80,0,0.06)" stroke="rgba(255,80,0,0.2)" strokeWidth="1" />
          <rect x="35" y="100" width="130" height="8" rx="2" fill="var(--border)" />
          <rect x="35" y="115" width="100" height="8" rx="2" fill="var(--border)" />
          <rect x="35" y="130" width="70" height="8" rx="2" fill="var(--border)" />
          <text x="110" y="84" fill="#ff5000" className="text-[10px] font-mono font-bold">&lt;div /&gt;</text>
        </g>
      </svg>
    )
  },
  "personal-branding": {
    title: "Personal Branding",
    description: "Positioning founders, executives, and leaders as key industry authorities through guided storytelling and profile optimization.",
    accentColor: "from-indigo-500/10",
    narrative: "We elevate founders, executives, and leaders into trusted industry authorities. By mapping your professional journey, ghostwriting columns, and seeding LLM reference profiles, we establish your voice across generative directories and traditional search spaces.",
    steps: [
      "Founder Story Curation & Editorial Blueprinting",
      "LinkedIn & Industry Columns Optimization",
      "Entity Interlinkage & Schema Validation"
    ],
    deliverables: [
      "Executive Story Curation Catalog",
      "Optimized Profile Layout Blueprints",
      "Target Publications & Reference Placements"
    ],
    kpiName: "Executive Reach Lift",
    kpiValue: "+430%",
    details: [
      "Thought leadership narrative curation and storyboards.",
      "Executive profile optimizing across LinkedIn and public columns.",
      "Authoritative reference networks designed for AEO citations.",
      "Bespoke speaking slot and press distribution alignment."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="70" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
        <g className="transition-all duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <rect x="40" y="45" width="120" height="110" rx="16" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" className="shadow" />
          <circle cx="100" cy="90" r="24" fill="var(--border)" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
          <circle cx="100" cy="84" r="9" fill="var(--background)" />
          <path d="M85,108 C85,100 91,100 100,100 C109,100 115,100 115,108" fill="var(--background)" />
          <circle cx="118" cy="72" r="9" fill="#6366f1" />
          <path d="M114,72 L117,74 L122,69" stroke="var(--card)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    )
  },
  email: {
    title: "Email Marketing",
    description: "Direct-to-human, beautifully typeset email communications that avoid spam folders and foster direct customer relations.",
    accentColor: "from-red-500/10",
    narrative: "We design beautiful, direct-to-human, typeset newsletter systems. By verifying SPF, DKIM, and DMARC domains, we guarantee your campaigns bypass promotional folders and land straight in the primary inbox, retaining direct user attention.",
    steps: [
      "Domain DNS Security & DKIM/SPF Auditing",
      "Newsletter Layout Craft & Graphic Testing",
      "Behavior-based Automated Trigger Setup"
    ],
    deliverables: [
      "Verified Domain DNS Config Report",
      "Sleek Newsletter Graphic Layout Presets",
      "Trigger-Flow Interaction Sequence Outlines"
    ],
    kpiName: "Average Open Rate",
    kpiValue: "48.5%",
    details: [
      "DKIM, SPF, and DMARC verification to protect reputation.",
      "Beautiful, clean newsletter layouts scoring high readability.",
      "Drip campaigns and automated, behavior-triggered workflows.",
      "A/B split testing of header subject lines to boost open metrics."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <rect x="25" y="45" width="150" height="110" rx="16" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <path d="M25,65 L100,105 L175,65" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round" />
          <rect x="50" y="105" width="100" height="25" rx="4" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.2)" strokeWidth="1" />
          <line x1="60" y1="117" x2="110" y2="117" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
          <polygon points="135,113 141,117 135,121" fill="#ef4444" />
        </g>
      </svg>
    )
  },
  "insta-shoot": {
    title: "Insta Shoot",
    description: "Bespoke brand and content shoots tailored for high-quality social reels, campaigns, and immediate marketing deployment.",
    accentColor: "from-yellow-500/10",
    narrative: "On-site creative photography and videography designed for reels, campaigns, and immediate deployment. We handle direction, shooting, lighting, editing, and publishing sync to maintain immediate engagement velocity.",
    steps: [
      "Script & Storyboard Curation",
      "Premium Local Studio Video Shooting",
      "Dynamic Post-Production & Color Fine-Tuning"
    ],
    deliverables: [
      "Sleek High-Quality Reels Library",
      "Storyboard Concept Documents",
      "Synchronized Social Release Timelines"
    ],
    kpiName: "Short-form Reach Velocity",
    kpiValue: "+310%",
    details: [
      "Bespoke mood boarding and campaign narrative outlines.",
      "Professional, local on-site camera and lighting deployment.",
      "Reel and short-form storytelling edits ready for immediate posting.",
      "Coordinated publishing sync with your existing social schedule."
    ],
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <rect x="25" y="25" width="150" height="150" rx="16" stroke="var(--border)" strokeWidth="0.75" strokeDasharray="3 3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}>
          <circle cx="100" cy="100" r="40" fill="rgba(234,179,8,0.03)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="20" fill="var(--card)" stroke="#eab308" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="6" fill="#eab308" />
          <path d="M85,85 L85,75 L95,75" stroke="#eab308" strokeWidth="2" />
          <path d="M115,85 L115,75 L105,75" stroke="#eab308" strokeWidth="2" />
          <path d="M85,115 L85,125 L95,125" stroke="#eab308" strokeWidth="2" />
          <path d="M115,115 L115,125 L105,125" stroke="#eab308" strokeWidth="2" />
        </g>
      </svg>
    )
  }
}

export function DigitalServiceDetail({ service }: { service: string }) {
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
          { label: "Digital Marketing", href: "/services/digital-marketing" },
          { label: data.title },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 mt-8 md:mt-10 space-y-14">
        {/* Back Link */}
        <Link
          href="/services/digital-marketing"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> Back to Digital Services
        </Link>

        {/* Section A: In-Depth Service Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Compass className="size-3.5" /> SERVICE PHILOSOPHY
            </span>
            <h2 className="font-lustria text-3xl md:text-4xl font-normal tracking-tight leading-tight">
              Enterprise Execution Without Compromise
            </h2>
            <p className="text-muted-foreground font-sans font-light text-base leading-relaxed">
              {data.narrative}
            </p>
            <div className="p-4 rounded-xl border border-border bg-card/40 font-mono text-xs text-muted-foreground italic">
              "We configure and scale high-performance frameworks engineered to deliver absolute clarity and commercial outcomes."
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
              <Milestone className="size-3.5" /> EXECUTION PROTOCOLS
            </span>
            <h3 className="font-lustria text-2xl md:text-3xl font-normal tracking-tight">
              Our 3-Phase Implementation Blueprint
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
                  Tailored integration mapping to guarantee quality, performance validation, and flawless rollout synchronization.
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
              <ShieldCheck className="size-3.5" /> KEY ARTIFACTS
            </span>
            <h3 className="font-lustria text-2xl font-normal">What We Deliver</h3>
            
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
