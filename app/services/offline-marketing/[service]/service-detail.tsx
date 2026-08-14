"use client"

import * as React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Compass, Milestone, ShieldCheck, Cpu, ChevronDown, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

interface FAQItem {
  question: string
  answer: string
}

interface ApproachStep {
  title: string
  description: string
}

interface ServiceData {
  title: string
  description: string
  accentColor: string
  whatIs: string
  approach: ApproachStep[]
  deliverables: string[]
  effectiveFor: string[]
  faqs: FAQItem[]
  kpiName: string
  kpiValue: string
  renderVisual: (isHovered: boolean) => React.ReactNode
}

const serviceData: Record<string, ServiceData> = {
  "mall-activations": {
    title: "Mall Activations",
    description: "Immersive, high-footfall real-world brand setups inside premium retail malls that capture active consumers.",
    accentColor: "from-orange-500/10",
    whatIs: "Mall Activations are immersive, high-footfall real-world brand setups constructed inside premium retail malls to capture active consumer attention. By combining sleek modular kiosks with interactive touchscreens and friction-free QR registration pipelines, we bridge offline foot traffic directly into online brand relationships.",
    approach: [
      { title: "Understand", description: "We analyze mall visitor demographics and footfall patterns to select premium, high-traffic setup coordinates." },
      { title: "Plan", description: "We design a custom modular kiosk blueprint and map out interactive digital engagement flows." },
      { title: "Make", description: "We construct the physical kiosk, install interactive touchscreen software, and train on-site brand ambassadors." },
      { title: "Run & Refine", description: "We execute the activation, run real-time traffic audits, and track lead conversion rates via QR scans." }
    ],
    deliverables: [
      "Modular Blueprint CAD Structural Files",
      "Interactive Software Kiosk Layouts",
      "Post-Event Traffic & Lead Conversion Audits",
      "Bespoke modular design built with high-quality visual aesthetics"
    ],
    effectiveFor: ["Restaurants & Hospitality", "Salons & Beauty", "Growing Brands", "Healthcare"],
    faqs: [
      {
        question: "How do you track the ROI of a mall activation?",
        answer: "We integrate unique QR codes, digital touchscreen registrations, and custom promo codes into our setups, allowing us to track exactly how many physical visitors convert into digital leads and sales."
      },
      {
        question: "Do you handle mall permissions and licenses?",
        answer: "Yes, we handle all coordination, permissions, and licensing with premium mall managements in Hyderabad, ensuring a hassle-free setup and execution."
      },
      {
        question: "What is the typical duration of a mall setup?",
        answer: "Setups typically run over weekends (Friday to Sunday) to capture peak footfall, but we can also execute longer-term installations depending on campaign goals."
      }
    ],
    kpiName: "Average Weekly Footfall Interactions",
    kpiValue: "12,500+",
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
    whatIs: "Residential Activations are hyper-local, community-focused roadshows executed directly inside premium housing societies and high-end residential towers. By setting up targeted trial zones and community popups, we introduce direct product trials and home testing opportunities to establish deep baseline brand loyalty.",
    approach: [
      { title: "Understand", description: "We audit housing society demographics, average household income, and resident profiles." },
      { title: "Plan", description: "We coordinate society committee permissions and design a community-friendly popup concept." },
      { title: "Make", description: "We produce sleek modular canopies, set up interactive trial zones, and prepare family-friendly contests." },
      { title: "Run & Refine", description: "We execute the roadshow, process direct trial signups, and track household enrollment metrics." }
    ],
    deliverables: [
      "Demographic Housing Cluster Profile Deck",
      "Pop-Up Construction Blueprint Plans",
      "Lead Capture Databases & Signup Logs",
      "Direct residential community engagement and trial zones"
    ],
    effectiveFor: ["Healthcare", "Growing Brands", "Local & Service Businesses", "Education"],
    faqs: [
      {
        question: "Which housing societies do you target?",
        answer: "We target premium gated communities, high-rise residential towers, and luxury villas in Hyderabad, matching the society's demographic profile with your target audience."
      },
      {
        question: "How do you ensure high resident participation?",
        answer: "We design family-friendly, engaging setups with interactive games, free product trials, and exclusive society-only discounts that naturally draw residents out."
      },
      {
        question: "Do you handle society committee approvals?",
        answer: "Yes, our team handles all negotiations, paperwork, and security deposits required by housing society management committees."
      }
    ],
    kpiName: "Household Trial Enrollment Rate",
    kpiValue: "28.4%",
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
    whatIs: "Theatre Marketing is an immersive advertising strategy that combines high-impact on-screen cinema ads with experiential lobby popups inside premium multiplexes. This ensures complete, focused brand engagement with premium moviegoers during high-anticipation film premieres.",
    approach: [
      { title: "Understand", description: "We analyze upcoming movie releases, audience demographics, and multiplex screen capacities." },
      { title: "Plan", description: "We select target multiplex screens and design high-end lobby demo installations." },
      { title: "Make", description: "We format cinema projection videos, construct lobby photo booths, and set up digital demo stands." },
      { title: "Run & Refine", description: "We launch the screen ads, manage lobby engagements, and track verified brand recall metrics." }
    ],
    deliverables: [
      "Multiplex Screen Placement Schedules",
      "Lobby Experience Construct Outlines",
      "Interactive Screen Engagement Analytics",
      "Exclusive partnerships with premium cinema complexes"
    ],
    effectiveFor: ["Restaurants & Hospitality", "Salons & Beauty", "Growing Brands", "Healthcare"],
    faqs: [
      {
        question: "What are the benefits of combining screen ads with lobby popups?",
        answer: "Screen ads capture high-impact visual attention, while lobby popups allow for direct, physical interaction with your product, dramatically increasing brand recall and conversion."
      },
      {
        question: "Can we target ads based on specific movies?",
        answer: "Yes, we can align your ad placements with specific movie genres or highly anticipated blockbusters to target exact audience segments."
      },
      {
        question: "Which multiplex chains do you partner with?",
        answer: "We partner with all major premium multiplex chains in Hyderabad, including PVR, Inox, and Cinepolis."
      }
    ],
    kpiName: "Verified Brand Recall Increase",
    kpiValue: "76.5%",
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
    whatIs: "Campus Activations are highly energetic, culture-forward brand setups executed inside major universities and college campuses to target Gen-Z consumers. By building competitive gaming booths and student ambassador networks, we drive rapid social sharing and direct brand registrations.",
    approach: [
      { title: "Understand", description: "We audit campus student demographics, college festival schedules, and student interest trends." },
      { title: "Plan", description: "We pitch and secure university collaboration approvals and design interactive challenge booths." },
      { title: "Make", description: "We construct gaming/challenge setups, integrate custom booth software, and recruit student ambassadors." },
      { title: "Run & Refine", description: "We execute the campus event, launch direct mobile incentives, and track social sharing velocity." }
    ],
    deliverables: [
      "Campus Coordination & Partnership Packs",
      "Booth Software Logic & UI Schemes",
      "Direct Brand Registrations Database Logs",
      "Gen-Z focused student ambassador and influencer partnerships"
    ],
    effectiveFor: ["Education", "Growing Brands", "Salons & Beauty", "Restaurants & Hospitality"],
    faqs: [
      {
        question: "How do you ensure college students engage with the brand?",
        answer: "We avoid boring corporate pitches. Instead, we build high-energy setups with competitive gaming, social media challenges, and instant mobile incentives that appeal directly to Gen-Z."
      },
      {
        question: "Do you recruit student brand ambassadors?",
        answer: "Yes, we identify, recruit, and train influential student ambassadors on campus to drive word-of-mouth buzz and ongoing brand engagement."
      },
      {
        question: "Are campus activations compliant with university rules?",
        answer: "Absolutely. We work closely with college administrations to ensure all activations are fully approved, safe, and aligned with campus guidelines."
      }
    ],
    kpiName: "Gen-Z Social Shares Rate",
    kpiValue: "+580%",
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
    whatIs: "Corporate Events are high-end professional roadshows and product displays set up inside premium business parks and IT hubs. By targeting corporate employees during office downtime, we provide exclusive brand trials and immediate conversion perks to capture highly qualified professional leads.",
    approach: [
      { title: "Understand", description: "We audit corporate park employee volumes, peak break hours, and professional demographics." },
      { title: "Plan", description: "We secure IT park management approvals and design a sleek executive lounge setup." },
      { title: "Make", description: "We construct the executive lounge, prepare exclusive corporate perks, and set up digital registration kiosks." },
      { title: "Run & Refine", description: "We execute the roadshow, process qualified professional signups, and track lead conversion rates." }
    ],
    deliverables: [
      "Corporate Park Location Audits",
      "Lounge Display & Canopy Production CADs",
      "Qualified Professional Contact Database",
      "Located in the heart of major corporate IT hubs and business parks"
    ],
    effectiveFor: ["Growing Brands", "Healthcare", "Local & Service Businesses", "Education"],
    faqs: [
      {
        question: "What types of businesses benefit most from corporate activations?",
        answer: "Premium consumer brands, financial services, auto brands, and high-end lifestyle services benefit immensely from targeting high-income corporate professionals."
      },
      {
        question: "Where do these activations take place?",
        answer: "We set up in premium business parks, IT hubs (like HITEC City), and major corporate cafeteria/lounge areas in Hyderabad."
      },
      {
        question: "How do you capture leads without disrupting their workday?",
        answer: "We design friction-free, digital-first registration flows (like quick QR scans) and offer valuable, immediate corporate incentives that take less than 60 seconds."
      }
    ],
    kpiName: "Qualified Professional Leads",
    kpiValue: "2,400+",
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
    whatIs: "Festival Marketing is a high-impact advertising strategy that places immersive, scale-architected public pavilions at major national festivals, food events, and cultural exhibitions. Designed to handle massive crowd flows, these pavilions combine physical photo moments with point-of-sale systems for direct conversions.",
    approach: [
      { title: "Understand", description: "We analyze festival footfall capacities, crowd flow patterns, and attendee demographics." },
      { title: "Plan", description: "We design a scale-architected pavilion blueprint and map out queue management systems." },
      { title: "Make", description: "We construct the public pavilion, set up interactive photo zones, and integrate cashless POS systems." },
      { title: "Run & Refine", description: "We manage crowd flows, execute direct event sales, and track total footfall interactions." }
    ],
    deliverables: [
      "Immersive Pavilion Structural CAD Layouts",
      "POS & Queue Management Guidelines",
      "Footfall & Direct Campaign Sales Audits",
      "Bespoke festival-themed brand content and custom packaging"
    ],
    effectiveFor: ["Restaurants & Hospitality", "Salons & Beauty", "Growing Brands", "Local & Service Businesses"],
    faqs: [
      {
        question: "How do you manage large crowds at festival setups?",
        answer: "We design our pavilions with clear entry/exit paths, utilize digital queue management guidelines, and employ experienced event staff to ensure smooth traffic flow."
      },
      {
        question: "Can we sell products directly at the festival pavilion?",
        answer: "Yes, we integrate fully secure, cashless point-of-sale (POS) systems for direct product sales and immediate conversions on-site."
      },
      {
        question: "What festivals do you cover?",
        answer: "We cover major food festivals, music gigs, cultural exhibitions, and national holiday events across Hyderabad."
      }
    ],
    kpiName: "Direct Event Sales / Signs",
    kpiValue: "18,900+",
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
    whatIs: "Popup Stores are temporary, high-concept retail points designed to create brand urgency, exclusive product trials, and high sales volume. Paired with synchronized influencer events and digital reservation queues, these premium structures generate immediate brand excitement.",
    approach: [
      { title: "Understand", description: "We study target location demographics, foot traffic patterns, and local retail competitors." },
      { title: "Plan", description: "We map out a premium interior spatial layout and design a limited-edition product drop strategy." },
      { title: "Make", description: "We construct the temporary storefront, set up cashless checkout systems, and coordinate influencer launch events." },
      { title: "Run & Refine", description: "We launch the popup store, manage digital reservation queues, and track retail sales velocity." }
    ],
    deliverables: [
      "Popup Location Assessment File",
      "Interior Spatial CAD Construction Blueprints",
      "Transaction Processing & Conversion Audits",
      "Limited-edition drop models that generate high brand urgency"
    ],
    effectiveFor: ["Growing Brands", "Restaurants & Hospitality", "Salons & Beauty", "Local & Service Businesses"],
    faqs: [
      {
        question: "What is the typical lifespan of a popup store?",
        answer: "Popup stores typically run anywhere from a single weekend to 2-4 weeks, depending on the campaign's scale and target objectives."
      },
      {
        question: "How do you generate buzz for a temporary store?",
        answer: "We coordinate with local digital influencers, run targeted geo-ads, and create exclusive, limited-edition product drops that generate high brand urgency."
      },
      {
        question: "Do you handle the interior design and construction?",
        answer: "Yes, we provide end-to-end services, including interior spatial design, CAD blueprints, physical construction, and POS installation."
      }
    ],
    kpiName: "Popup Retail Sales Velocity",
    kpiValue: "+340%",
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
    whatIs: "Influencer Campaigns bridge real-world physical activations with digital creator networks. By bringing premium content creators on-site to stream, film, and share your physical setups, we generate massive digital reach spikes and direct-to-mobile conversion velocity.",
    approach: [
      { title: "Understand", description: "We analyze your brand's target audience and match them with highly relevant local content creators." },
      { title: "Plan", description: "We design on-site media concepts, draft creator briefs, and coordinate event attendance schedules." },
      { title: "Make", description: "We set up a dynamic on-site creative media studio and manage live creator streams and filming." },
      { title: "Run & Refine", description: "We coordinate the release of creator reels and stories and analyze integrated reach and engagement metrics." }
    ],
    deliverables: [
      "Influencer Outreach & Campaign Specifications",
      "On-site Media Concept Guidelines",
      "Creator Amplified Engagement Analytics",
      "Viral reel and post creation that translates to footfall spikes"
    ],
    effectiveFor: ["Growing Brands", "Restaurants & Hospitality", "Salons & Beauty", "Education"],
    faqs: [
      {
        question: "How do you select the right influencers for our event?",
        answer: "We go beyond follower counts. We audit creators' audience demographics, engagement rates, and content quality to ensure they perfectly align with your brand."
      },
      {
        question: "Do you handle influencer negotiations and contracts?",
        answer: "Yes, we manage the entire process—from outreach and contract negotiations to briefing, on-site management, and post-campaign reporting."
      },
      {
        question: "How do influencer campaigns drive physical footfall?",
        answer: "By broadcasting live, engaging experiences from your physical activations, influencers create immediate FOMO (fear of missing out) that drives their followers to visit the setup."
      }
    ],
    kpiName: "Total Integrated Reach Views",
    kpiValue: "4.2M views",
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
    whatIs: "Metro Branding is a high-visibility transit advertising strategy that wraps metropolitan trains with clean brand graphics and takes over high-traffic exit gate digital screens. This ensures unparalleled daily commuter recall frequency and brand impressions.",
    approach: [
      { title: "Understand", description: "We audit metro route commuter volumes, station traffic patterns, and passenger demographics." },
      { title: "Plan", description: "We design train wrap layouts and map out digital screen media schedules." },
      { title: "Make", description: "We produce high-fidelity train wrap graphics, install station media, and set up interactive QR code couponing." },
      { title: "Run & Refine", description: "We coordinate the media launch, monitor display uptimes, and track daily transit impressions." }
    ],
    deliverables: [
      "Station Volume & Impression Schedules",
      "High-Fidelity Train Wrap Graphic Layouts",
      "Media Launch Logs & Verification Records",
      "Digital screen takeovers at high-traffic entry/exit gates"
    ],
    effectiveFor: ["Growing Brands", "Healthcare", "Education", "Local & Service Businesses"],
    faqs: [
      {
        question: "What routes and stations can we target?",
        answer: "We cover major metropolitan routes and high-traffic stations in Hyderabad, focusing on key transit hubs that align with your target audience."
      },
      {
        question: "How do you measure metro branding impressions?",
        answer: "We use verified transit authority commuter data and station footfall logs to calculate highly accurate daily and monthly impression metrics."
      },
      {
        question: "Can we integrate digital actions with transit ads?",
        answer: "Yes, we incorporate high-contrast, easily scannable QR codes on train wraps and digital screens to drive commuters to mobile landing pages or exclusive coupon offers."
      }
    ],
    kpiName: "Daily Transit Impressions",
    kpiValue: "850,000",
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
  const [isVisualHovered, setIsVisualHovered] = React.useState(false)
  const [activeFaqIndex, setActiveFaqIndex] = React.useState<number | null>(null)
  const data = serviceData[service]

  if (!data) {
    notFound()
  }

  // Auto-generate related services from the same category
  const relatedServices = Object.keys(serviceData)
    .filter((key) => key !== service)
    .slice(0, 2)
    .map((key) => ({
      slug: key,
      ...serviceData[key]
    }))

  return (
    <div className="min-h-svh pb-16">
      {/* 1. Breadcrumb & 2. Hero */}
      <section className="relative overflow-hidden border-b border-border/50 bg-background pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(226,87,31,0.03),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6">
          
          {/* Breadcrumb Trail */}
          <nav className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3 text-muted-foreground/40" />
            <Link href="/services/offline-marketing" className="hover:text-foreground transition-colors">Services</Link>
            <ChevronRight className="size-3 text-muted-foreground/40" />
            <span className="text-foreground font-medium truncate">{data.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-primary">
                <Sparkles className="size-3" /> Omnichannel Strategy Spec
              </div>
              <h1 className="font-lustria text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-foreground">
                {data.title}
              </h1>
              <p className="max-w-xl font-sans text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                {data.description}
              </p>
              <div className="pt-4">
                <Button nativeButton={false} render={<Link href={contactHref} />} size="lg" className="rounded-xl px-6 h-12 text-base font-medium group">
                  <span className="flex items-center gap-1.5">
                    Get Started with {data.title}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div 
              className="lg:col-span-5 relative"
              onMouseEnter={() => setIsVisualHovered(true)}
              onMouseLeave={() => setIsVisualHovered(false)}
            >
              <div className="relative rounded-3xl border border-border/80 bg-card/30 p-6 shadow-2xl h-[280px] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:12px_12px]" />
                <div className="size-44 flex items-center justify-center">
                  {data.renderVisual(isVisualHovered)}
                </div>
                <div className={`absolute -inset-px -z-10 rounded-[30px] bg-gradient-to-tr ${data.accentColor} to-transparent opacity-40 blur-md`} />
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 mt-12 md:mt-16 space-y-16 md:space-y-24">
        {/* Back Link */}
        <Link
          href="/services/offline-marketing"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> Back to Offline Services
        </Link>

        {/* 3. "What is [Service]?" (AEO Paragraph) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-2">
              <Compass className="size-3.5" /> SERVICE PHILOSOPHY
            </span>
            <h2 className="font-lustria text-2xl md:text-3xl font-normal tracking-tight">
              What is {data.title}?
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-foreground font-sans font-light text-lg leading-relaxed border-l-2 border-primary/20 pl-6">
              {data.whatIs}
            </p>
          </div>
        </section>

        {/* 4. What's included (Deliverables List) */}
        <section className="border-t border-border/50 pt-12 md:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <ShieldCheck className="size-3.5" /> KEY ARTIFACTS
            </span>
            <h3 className="font-lustria text-2xl md:text-3xl font-normal">What We Produce</h3>
            <p className="text-xs text-muted-foreground font-sans font-light leading-relaxed max-w-sm">
              A concrete, honest list of physical deliverables and experiential assets engineered to drive tangible brand authority.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.deliverables.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start p-4 rounded-xl border border-border bg-card/20 hover:bg-card/40 transition-colors">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground font-sans font-light leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Our approach to [Service] (4-Step Framework) */}
        <section className="border-t border-border/50 pt-12 md:pt-16 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-3">
              <Milestone className="size-3.5" /> DEPLOYMENT TRACKS
            </span>
            <h3 className="font-lustria text-2xl md:text-3xl font-normal tracking-tight">
              Our 4-Step Experiential Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.approach.map((step, idx) => (
              <div key={idx} className="group relative rounded-2xl border border-border bg-card/15 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-card/30">
                <div className="font-mono text-xs text-primary font-bold mb-4">PHASE 0{idx + 1} // {step.title.toUpperCase()}</div>
                <h4 className="font-lustria text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light">
                  {step.description}
                </p>
                <div className="absolute inset-px -z-10 rounded-2xl bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              </div>
            ))}
          </div>
        </section>

        {/* 6. Particularly effective for (Industry Links) */}
        <section className="border-t border-border/50 pt-12 md:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-2">
              <Cpu className="size-3.5" /> TARGET ALIGNMENT
            </span>
            <h3 className="font-lustria text-2xl md:text-3xl font-normal">Particularly Effective For</h3>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.effectiveFor.map((industry, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-border bg-card/10 flex flex-col justify-between h-36 hover:border-primary/10 transition-colors">
                  <h4 className="font-lustria text-base font-medium text-foreground">{industry}</h4>
                  <p className="text-xs text-muted-foreground font-sans font-light leading-relaxed">
                    Tailored physical integration to guarantee local footfall, trial enrollment, and regional brand loyalty.
                  </p>
                  <Link href="/contact" className="text-[10px] font-mono text-primary uppercase tracking-wider hover:underline mt-2 inline-flex items-center gap-1">
                    Inquire for {industry} <ArrowRight className="size-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ (Accordion + Schema) */}
        <section className="border-t border-border/50 pt-12 md:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-2">
              <Compass className="size-3.5" /> CLARITY & INSIGHT
            </span>
            <h3 className="font-lustria text-2xl md:text-3xl font-normal">Frequently Asked Questions</h3>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx
              return (
                <div key={idx} className="border border-border rounded-xl overflow-hidden bg-card/10">
                  <button
                    type="button"
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-lustria text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`size-4 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-48 border-t border-border" : "max-h-0"}`}>
                    <p className="p-5 text-xs sm:text-sm text-muted-foreground font-sans font-light leading-relaxed bg-muted/5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 8. Related services (Topical Clustering) */}
        <section className="border-t border-border/50 pt-12 md:pt-16 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-3">
              <Milestone className="size-3.5" /> TOPICAL CLUSTERING
            </span>
            <h3 className="font-lustria text-2xl md:text-3xl font-normal tracking-tight">
              Related Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/offline-marketing/${rel.slug}`}
                className="group p-6 rounded-2xl border border-border bg-card/10 hover:border-primary/20 hover:bg-card/20 transition-all duration-300 flex flex-col justify-between h-44"
              >
                <div>
                  <h4 className="font-lustria text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light line-clamp-2">
                    {rel.description}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  Explore Spec <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 9. Final CTA */}
        <section className="border-t border-border/50 pt-12 md:pt-16 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="font-lustria text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-tight">
            Ready to scale your physical brand presence?
          </h3>
          <p className="text-muted-foreground font-sans font-light text-sm sm:text-base leading-relaxed">
            Let&apos;s build a high-impact, compliant experiential framework tailored to your business goals.
          </p>
          <div className="pt-4">
            <Button nativeButton={false} render={<Link href={contactHref} />} size="lg" className="rounded-xl px-8 h-12 text-base font-medium group">
              <span className="flex items-center gap-1.5">
                Get Started with Digi Carotene
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </div>
  )
}
