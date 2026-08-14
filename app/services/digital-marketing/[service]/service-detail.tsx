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
  "performance-marketing": {
    title: "Performance Marketing",
    description: "Highly targeted, high-intent paid search and social campaigns that convert impressions into pipeline and profit.",
    accentColor: "from-emerald-500/10",
    whatIs: "Performance Marketing is a data-driven digital advertising strategy focused on high-intent customer acquisition and measurable return on ad spend (ROAS). Unlike traditional advertising, performance marketing ensures that every marketing dollar spent is directly tied to a specific, trackable action—such as a lead form submission, a purchase, or a registration.",
    approach: [
      { title: "Understand", description: "We analyze your audience's high-intent search queries, competitor ad strategies, and past campaign performance to find budget leaks." },
      { title: "Plan", description: "We construct a precise keyword matrix, design negative match lists, and outline a multi-channel attribution model." },
      { title: "Make", description: "We deploy hyper-targeted search and social ads, craft high-converting landing variants, and set up automated bid-modulation." },
      { title: "Run & Refine", description: "We conduct weekly ROAS audits, perform creative multi-variant A/B testing, and continuously optimize budget allocation." }
    ],
    deliverables: [
      "High-Intent Keyword Matrix & Negative Matches",
      "Dynamic Page Layout & UX Variants",
      "Weekly ROAS & Customer Acquisition Cost Audits",
      "Multi-channel budget optimization to maximize ROAS"
    ],
    effectiveFor: ["Restaurants & Hospitality", "Healthcare", "Growing Brands", "Salons & Beauty"],
    faqs: [
      {
        question: "How do you prevent ad budget waste?",
        answer: "We build hyper-targeted negative keyword matrices, set up exact-match intent targeting, and conduct daily bid-modulation audits to ensure every rupee is spent on high-intent prospects."
      },
      {
        question: "What platforms do you run ads on?",
        answer: "We specialize in Google Ads (Search, Display, YouTube) and Meta Ads (Facebook, Instagram), selecting the platforms that map directly to your target audience's behavior."
      },
      {
        question: "How do you measure campaign success?",
        answer: "We track hard business metrics like Customer Acquisition Cost (CAC), Cost Per Lead (CPL), and Return on Ad Spend (ROAS) rather than just vanity metrics like impressions or clicks."
      }
    ],
    kpiName: "Average Return on Ad Spend",
    kpiValue: "5.4x ROAS",
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
  "growth-marketing": {
    title: "Growth Marketing",
    description: "Data-driven, full-funnel experimentation and customer acquisition strategies that scale brand presence and revenue.",
    accentColor: "from-primary/10",
    whatIs: "Growth Marketing is a full-funnel marketing strategy that uses continuous data-driven experimentation to optimize acquisition, activation, retention, referral, and revenue. Unlike traditional marketing which focuses solely on top-of-funnel awareness, growth marketing optimizes the entire customer journey to unlock scalable acquisition loops and maximize customer lifetime value.",
    approach: [
      { title: "Understand", description: "We map out your complete customer journey, identify major drop-off points, and analyze user behavior data." },
      { title: "Plan", description: "We build a structured growth experimentation backlog and define clear, measurable hypotheses for every funnel stage." },
      { title: "Make", description: "We design and deploy rapid A/B tests, build referral loops, and optimize onboarding and retention triggers." },
      { title: "Run & Refine", description: "We analyze experiment results, scale successful growth hacks, and continuously iterate on the customer lifecycle." }
    ],
    deliverables: [
      "Full-Funnel Performance Diagnostic Audit",
      "Experimentation Backlog & Hypothesis Log",
      "Acquisition Loop & Referral System Blueprints",
      "Data-driven channel discovery and scaling strategies"
    ],
    effectiveFor: ["Growing Brands", "Education", "Local & Service Businesses", "Healthcare"],
    faqs: [
      {
        question: "What is the difference between growth marketing and traditional marketing?",
        answer: "Traditional marketing focuses on top-of-funnel awareness and brand building. Growth marketing looks at the entire funnel—from acquisition and activation to retention, referral, and revenue—using continuous data-driven experiments."
      },
      {
        question: "How do you identify funnel leaks?",
        answer: "We conduct deep user behavior audits, analyze conversion drop-offs using analytics tools, and run qualitative user testing to find where prospects are dropping off."
      },
      {
        question: "What is a growth experiment?",
        answer: "It is a rapid, structured test (e.g., a new landing page headline, a different onboarding step, or a referral incentive) designed to validate a hypothesis for increasing conversion metrics."
      }
    ],
    kpiName: "Customer Acquisition Velocity",
    kpiValue: "+180% Growth",
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full animate-[pulse_8s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="70" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}>
          <rect x="50" y="110" width="20" height="30" rx="4" fill="var(--border)" opacity="0.5" />
          <rect x="80" y="85" width="20" height="55" rx="4" fill="var(--border)" opacity="0.8" />
          <rect x="110" y="60" width="20" height="80" rx="4" fill="var(--primary)" opacity="0.2" stroke="var(--primary)" strokeWidth="1.5" />
          <rect x="140" y="35" width="20" height="105" rx="4" fill="var(--primary)" />
        </g>
      </svg>
    )
  },
  seo: {
    title: "Search Engine Optimization (SEO)",
    description: "Traditional and conversational organic search positioning that keeps your brand authority first on Google.",
    accentColor: "from-purple-500/10",
    whatIs: "Search Engine Optimization (SEO) is the practice of structuring and optimizing digital assets to rank prominently in traditional search engines and conversational AI answer engines. In the modern era, SEO requires optimizing not just for Google's crawlers, but also for generative AI models like Perplexity, ChatGPT, and Gemini to ensure your brand is cited as the primary authority.",
    approach: [
      { title: "Understand", description: "We audit your site's technical indexability, analyze semantic entity structures, and research high-intent search terms." },
      { title: "Plan", description: "We map out a comprehensive topic-cluster architecture, design JSON-LD schema markup, and outline link-building targets." },
      { title: "Make", description: "We inject structured schema, optimize page load speeds, build internal interlinkage networks, and craft AEO-ready content." },
      { title: "Run & Refine", description: "We monitor search rankings, track conversational citation share indexes, and perform continuous crawl-budget audits." }
    ],
    deliverables: [
      "JSON-LD Schema & Semantic Graph Map",
      "Technical Indexability & Response Logs",
      "Conversational Citation Share Index Reports",
      "Crawlability optimization for modern search engine spiders"
    ],
    effectiveFor: ["Healthcare", "Education", "Local & Service Businesses", "Growing Brands"],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy. While technical fixes can show improvements in indexation within days, significant ranking and organic traffic growth typically take 3 to 6 months of consistent optimization and content authority building."
      },
      {
        question: "What is the difference between traditional SEO and AEO/GEO?",
        answer: "Traditional SEO focuses on ranking in standard search engine results pages (SERPs). AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) focus on optimizing your content so conversational AI models (like Perplexity, ChatGPT, and Gemini) can easily retrieve, cite, and recommend your brand."
      },
      {
        question: "Do you guarantee ranking #1 on Google?",
        answer: "No honest agency guarantees #1 rankings, as search engine algorithms change constantly. However, we guarantee the implementation of industry-leading technical SEO, semantic schema markup, and high-quality content structures that maximize your visibility and authority."
      }
    ],
    kpiName: "Organic Impression Growth",
    kpiValue: "+280%",
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
    whatIs: "Content Marketing is the strategic creation and distribution of valuable, relevant, and consistent written and visual assets designed to attract and acquire a clearly defined audience. By publishing authoritative content that directly answers user queries, we establish your brand as a trusted resource, driving organic search traffic and generative AI citations.",
    approach: [
      { title: "Understand", description: "We research your audience's core pain points, identify informational gaps, and extract high-intent search queries." },
      { title: "Plan", description: "We map out a comprehensive editorial calendar, design topic-cluster frameworks, and outline content formats." },
      { title: "Make", description: "We write authoritative, long-form guides, craft engaging newsletter copies, and format content for AI snippet extraction." },
      { title: "Run & Refine", description: "We track content engagement metrics, monitor search snippet features, and update older articles to maintain freshness." }
    ],
    deliverables: [
      "Long-Form Authority Guide Library",
      "Topic-Cluster Schema Structural Outlines",
      "Search Snippet Verification & Metadata Sets",
      "Long-form authoritative research pieces and industry guides"
    ],
    effectiveFor: ["Education", "Healthcare", "Growing Brands", "Local & Service Businesses"],
    faqs: [
      {
        question: "What type of content do you produce?",
        answer: "We produce authoritative, long-form editorial guides, topic-cluster articles, and snippet-friendly FAQs designed to establish topical authority and earn AI citations."
      },
      {
        question: "How do you ensure the content matches our brand voice?",
        answer: "Before writing, we build a comprehensive brand voice guideline and content blueprint. Every piece goes through rigorous internal editorial reviews to ensure perfect alignment."
      },
      {
        question: "How does content marketing support SEO?",
        answer: "Search engines reward topical authority. By publishing high-quality, structured content that thoroughly answers user queries, we build the topical clusters needed to rank for competitive keywords."
      }
    ],
    kpiName: "AI Citations Retrieval",
    kpiValue: "87.4%",
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
    whatIs: "Social Media Marketing is the process of creating and sharing platform-specific content to build an active community, distribute your brand's narrative, and drive measurable user engagement. By combining striking visual assets with structured storytelling, we ensure your brand stays top-of-mind and fosters authentic connections across social networks.",
    approach: [
      { title: "Understand", description: "We analyze your target audience's social behavior, study competitor engagement, and define platform-specific opportunities." },
      { title: "Plan", description: "We outline a monthly content grid, design custom visual themes, and map out a community engagement protocol." },
      { title: "Make", description: "We produce high-quality social graphics, write engaging captions, and schedule posts for optimal reach." },
      { title: "Run & Refine", description: "We engage with your community in real-time, track engagement metrics, and refine the content strategy based on performance." }
    ],
    deliverables: [
      "High-Fidelity Social Creative Assets",
      "Omnichannel Publishing Pipeline",
      "Community Metric & Engagement Indexes",
      "Social-first storytelling designed for rapid, organic sharing"
    ],
    effectiveFor: ["Restaurants & Hospitality", "Salons & Beauty", "Growing Brands", "Education"],
    faqs: [
      {
        question: "Which social platforms should my brand be on?",
        answer: "We analyze your audience demographics and industry to recommend the most effective platforms—typically Instagram and LinkedIn for premium lifestyle and business brands."
      },
      {
        question: "Do you handle community management and comments?",
        answer: "Yes, we monitor and engage with your community in real-time, answering queries and fostering authentic brand interactions."
      },
      {
        question: "How do you measure social media ROI?",
        answer: "We track engagement rates, referral traffic, and direct conversions from social channels, linking them directly to your overall marketing funnel."
      }
    ],
    kpiName: "Organic Engagement Rate",
    kpiValue: "14.2%",
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
    whatIs: "Graphic Designing is the art and practice of planning and projecting ideas and experiences with visual and textual content. We craft complete brand visual languages, digital vectors, and presentation decks that reflect absolute layout mastery, modern high-contrast aesthetic minimalism, and premium brand design standards.",
    approach: [
      { title: "Understand", description: "We study your brand's core values, target audience aesthetics, and existing visual assets to find design gaps." },
      { title: "Plan", description: "We outline a visual identity blueprint, select typography pairings, and define color palette systems." },
      { title: "Make", description: "We craft high-fidelity custom vector graphics, design sleek brand style guides, and build presentation templates." },
      { title: "Run & Refine", description: "We review asset performance across channels, gather feedback, and continuously update design libraries." }
    ],
    deliverables: [
      "Scalable Vector Art Kits & Asset Libraries",
      "Brand Style System & Guidelines Manual",
      "Executive Pitch-Deck Layout Presets",
      "Bespoke corporate visual identity development"
    ],
    effectiveFor: ["Growing Brands", "Restaurants & Hospitality", "Salons & Beauty", "Education"],
    faqs: [
      {
        question: "What is included in a visual identity package?",
        answer: "It includes custom typography guidelines, color palettes, scalable vector assets, brand style manuals, and presentation templates."
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer: "Absolutely. We can refine, modernize, or strictly adhere to your existing brand guidelines to ensure absolute visual consistency."
      },
      {
        question: "What formats do you deliver the final designs in?",
        answer: "We deliver fully editable, high-fidelity source files (Figma, Illustrator) along with web-optimized vector and image formats (SVG, PNG, WebP)."
      }
    ],
    kpiName: "Visual System Rating",
    kpiValue: "100%",
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
    whatIs: "Web-Design & Development is the process of creating custom, high-performance websites optimized for speed, user experience, and search engine indexability. We build blazingly fast websites using the Next.js App Router, complete with smooth scroll integrations (Lenis/GSAP) and fully optimized SEO/AEO metadata architectures.",
    approach: [
      { title: "Understand", description: "We analyze your business goals, map out user flows, and outline technical performance requirements." },
      { title: "Plan", description: "We sketch high-fidelity wireframes, design custom UI/UX storyboards, and map out the sitemap architecture." },
      { title: "Make", description: "We write clean, performance-first Next.js code, integrate smooth scroll animations, and inject SEO schemas." },
      { title: "Run & Refine", description: "We conduct rigorous Lighthouse audits, perform cross-device testing, and continuously monitor site speed." }
    ],
    deliverables: [
      "Modern Next.js Source Code Files",
      "Performance & Responsive Audit Records",
      "Interactive Page Element Vector Sets",
      "SEO-first schemas and meta attributes built into Next.js layouts"
    ],
    effectiveFor: ["Growing Brands", "Local & Service Businesses", "Education", "Healthcare"],
    faqs: [
      {
        question: "What stack do you build websites with?",
        answer: "We build blazingly fast, custom websites using Next.js (App Router), TypeScript, and Tailwind CSS, ensuring perfect Lighthouse performance scores."
      },
      {
        question: "Is the website optimized for mobile devices?",
        answer: "Yes, every website we build is fully responsive and designed with a mobile-first approach to ensure a flawless user experience on all screen sizes."
      },
      {
        question: "Do you handle website hosting and maintenance?",
        answer: "We set up secure, global hosting on platforms like Vercel or Netlify and provide ongoing maintenance to keep your site fast and secure."
      }
    ],
    kpiName: "Lighthouse Performance Core",
    kpiValue: "100/100",
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
    whatIs: "Personal Branding is the strategic process of establishing and promoting the unique professional identity, story, and expertise of an individual. We elevate founders, executives, and leaders into trusted industry authorities by ghostwriting authoritative content, optimizing professional profiles, and building conversational AI reference paths.",
    approach: [
      { title: "Understand", description: "We conduct deep interview sessions with you to capture your unique professional journey, stories, and insights." },
      { title: "Plan", description: "We design an executive story calendar, select target publishing channels, and outline content pillars." },
      { title: "Make", description: "We ghostwrite polished LinkedIn posts, optimize your professional profiles, and draft industry columns." },
      { title: "Run & Refine", description: "We monitor profile reach, analyze engagement trends, and continuously expand your authoritative reference network." }
    ],
    deliverables: [
      "Executive Story Curation Catalog",
      "Optimized Profile Layout Blueprints",
      "Target Publications & Reference Placements",
      "Thought leadership narrative curation and storyboards"
    ],
    effectiveFor: ["Growing Brands", "Healthcare", "Education", "Local & Service Businesses"],
    faqs: [
      {
        question: "Who is personal branding for?",
        answer: "It is designed for founders, executives, and industry leaders who want to establish themselves as trusted authorities and voices in their respective fields."
      },
      {
        question: "How do you ghostwrite content without losing my voice?",
        answer: "We conduct in-depth interviews with you to capture your unique perspectives, stories, and vocabulary, translating them into polished, authentic columns and posts."
      },
      {
        question: "What platforms do you focus on for personal branding?",
        answer: "We primarily focus on LinkedIn optimization and high-authority industry publications where your professional peers and target clients are active."
      }
    ],
    kpiName: "Executive Reach Lift",
    kpiValue: "+430%",
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
    whatIs: "Email Marketing is a direct marketing channel that uses beautifully typeset email communications to foster direct customer relationships, nurture leads, and drive conversions. We ensure your campaigns bypass promotional folders and land straight in the primary inbox by verifying SPF, DKIM, and DMARC domains, and designing highly engaging layouts.",
    approach: [
      { title: "Understand", description: "We audit your current email list health, review past campaign open rates, and analyze domain DNS security." },
      { title: "Plan", description: "We design behavior-based automated flows, outline a sending schedule, and map out segmentation strategies." },
      { title: "Make", description: "We verify SPF/DKIM/DMARC records, design custom newsletter templates, and write engaging email copy." },
      { title: "Run & Refine", description: "We conduct A/B tests on subject lines, monitor open and click rates, and perform list cleaning audits." }
    ],
    deliverables: [
      "Verified Domain DNS Config Report",
      "Sleek Newsletter Graphic Layout Presets",
      "Trigger-Flow Interaction Sequence Outlines",
      "Drip campaigns and automated, behavior-triggered workflows"
    ],
    effectiveFor: ["Restaurants & Hospitality", "Salons & Beauty", "Growing Brands", "Local & Service Businesses"],
    faqs: [
      {
        question: "How do you ensure emails don't land in the spam folder?",
        answer: "We strictly verify your domain's DNS records (SPF, DKIM, DMARC) and design clean, high-readability typeset layouts that score high with spam filters."
      },
      {
        question: "What email marketing platforms do you support?",
        answer: "We work with leading platforms like Klaviyo, Mailchimp, and Resend, setting up automated workflows and custom-designed templates."
      },
      {
        question: "How often should we send emails to our list?",
        answer: "We design a balanced sending schedule based on your audience's engagement, ensuring you stay top-of-mind without causing subscriber fatigue."
      }
    ],
    kpiName: "Average Open Rate",
    kpiValue: "48.5%",
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
    whatIs: "Insta Shoot is a fast-turnaround, professional photography and videography service designed specifically for social media reels, campaigns, and immediate marketing deployment. We handle the entire creative pipeline—from scriptwriting and storyboarding to professional shooting, editing, and publishing coordination.",
    approach: [
      { title: "Understand", description: "We analyze current social trends in your industry, define campaign goals, and map out the aesthetic direction." },
      { title: "Plan", description: "We write engaging short-form scripts, design visual storyboards, and coordinate shooting schedules." },
      { title: "Make", description: "We deploy professional cameras and lighting on-site, direct the shoot, and perform post-production edits." },
      { title: "Run & Refine", description: "We deliver polished reels ready for posting, coordinate release timelines, and track reach velocity." }
    ],
    deliverables: [
      "Sleek High-Quality Reels Library",
      "Storyboard Concept Documents",
      "Synchronized Social Release Timelines",
      "Professional, local on-site camera and lighting deployment"
    ],
    effectiveFor: ["Restaurants & Hospitality", "Salons & Beauty", "Growing Brands", "Local & Service Businesses"],
    faqs: [
      {
        question: "What is included in an Insta Shoot?",
        answer: "We handle the entire production pipeline: scriptwriting, storyboarding, professional lighting, multi-camera shooting, editing, and color grading."
      },
      {
        question: "Where do the shoots take place?",
        answer: "We shoot on-location at your business or in premium local studios in Hyderabad, tailored to the aesthetic needs of your campaign."
      },
      {
        question: "How quickly do we receive the final edited reels?",
        answer: "We deliver polished, short-form reels ready for immediate posting within 5 to 7 business days after the shoot."
      }
    ],
    kpiName: "Short-form Reach Velocity",
    kpiValue: "+310%",
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
            <Link href="/services/digital-marketing" className="hover:text-foreground transition-colors">Services</Link>
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
          href="/services/digital-marketing"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> Back to Digital Services
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
            <h3 className="font-lustria text-2xl md:text-3xl font-normal">What We Deliver</h3>
            <p className="text-xs text-muted-foreground font-sans font-light leading-relaxed max-w-sm">
              A concrete, honest list of deliverables and strategic assets engineered to drive measurable commercial outcomes.
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
              <Milestone className="size-3.5" /> EXECUTION PROTOCOLS
            </span>
            <h3 className="font-lustria text-2xl md:text-3xl font-normal tracking-tight">
              Our 4-Step Implementation Blueprint
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
                    Tailored integration to guarantee high-intent customer acquisition and brand authority within this vertical.
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
                href={`/services/digital-marketing/${rel.slug}`}
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
            Ready to scale your brand authority?
          </h3>
          <p className="text-muted-foreground font-sans font-light text-sm sm:text-base leading-relaxed">
            Let&apos;s build a high-performance, compliant marketing framework tailored to your business goals.
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
