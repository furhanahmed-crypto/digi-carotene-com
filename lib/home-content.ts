import { PLACEHOLDER_IMAGES } from "./placeholder-images"

export const homeContent = {
  hero: {
    eyebrow: "The Optimization Agency for the AI Era",
    slides: [
      {
        id: "search-discovery",
        headlineBefore: "Win the New Front Door of ",
        headlineAccent: "Search & Discovery",
        imageSrc: PLACEHOLDER_IMAGES[0],
      },
      {
        id: "ai-citation",
        headlineBefore: "Be the Brand AI Engines ",
        headlineAccent: "Choose to Cite",
        imageSrc: PLACEHOLDER_IMAGES[1],
      },
      {
        id: "market-presence",
        headlineBefore: "Turn Local Attention into ",
        headlineAccent: "Visible Demand",
        imageSrc: PLACEHOLDER_IMAGES[2],
      },
    ],
    body: "We help premium brands rank on Google, get cited by AI answer engines like Perplexity, and dominate local markets with unforgettable real-world marketing activations.",
    primaryCta: { label: "Get Your GEO Score", href: "/contact" },
    secondaryCta: { label: "Explore Our Services", href: "/services" },
  },
  capabilities: {
    eyebrow: "What we do",
    headline: "Unified digital marketing, AI search, and real-world activations.",
    body: "Digi Carotene is the engine for forward-thinking brand discovery — bridging SEO, AEO, and GEO with digital, offline, and PR execution.",
    knowMore: { label: "Know more" },
    pillars: [
      {
        id: "discovery",
        number: "01",
        title: "Search & AI Discovery",
        image: PLACEHOLDER_IMAGES[0],
        summary:
          "Traditional SEO gets you blue links. AEO and GEO make sure answer engines cite you.",
        items: [
          {
            label: "Search Engine Optimization",
            body: "Traditional and conversational organic search positioning that keeps your brand authority first on Google.",
            href: "/services/digital-marketing/seo",
          },
          {
            label: "AEO (Answer Engine Optimization)",
            body: "Structuring core brand content so LLM-based assistants parse, understand, and return your brand as the definitive recommendation.",
            href: "/services/digital-marketing/seo",
          },
          {
            label: "GEO (Generative Engine Optimization)",
            body: "Maximizing citation share in generative outputs. Semantic nodes, authoritative footprints, and co-occurrences so ChatGPT, Gemini, Perplexity, and SearchGPT quote you.",
            href: "/services/digital-marketing/seo",
          },
          {
            label: "Brand-governed authority",
            body: "Align messaging across public indexes so AI answer engines present your value proposition accurately and consistently.",
            href: "/contact",
          },
        ],
      },
      {
        id: "digital",
        number: "02",
        title: "Digital Marketing",
        image: PLACEHOLDER_IMAGES[1],
        summary:
          "A unified digital ecosystem — performance, content, social, and the site — built to feed search and conversion.",
        items: [
          {
            label: "Performance Marketing",
            body: "Highly targeted, high-intent paid search and social campaigns that convert impressions into pipeline and profit.",
            href: "/services/digital-marketing/performance-marketing",
          },
          {
            label: "Growth Marketing",
            body: "Data-driven, full-funnel experimentation and customer acquisition strategies that scale brand presence and revenue.",
            href: "/services/digital-marketing/growth-marketing",
          },
          {
            label: "Content Marketing",
            body: "On-brand, rich copy and storytelling assets designed to answer audience queries and fuel SEO and AEO pipelines.",
            href: "/services/digital-marketing/content",
          },
          {
            label: "Social Media Marketing",
            body: "Community building, brand narrative distribution, and platform-specific content that drives engagement.",
            href: "/services/digital-marketing/social",
          },
          {
            label: "Web Design & Development",
            body: "Bespoke, fast websites with Framer-level motion and architectures built for SEO and AEO.",
            href: "/services/digital-marketing/web",
          },
          {
            label: "Personal Branding",
            body: "Positioning founders, executives, and leaders as industry authorities through guided storytelling and profile optimization.",
            href: "/services/digital-marketing/personal-branding",
          },
        ],
      },
      {
        id: "offline",
        number: "03",
        title: "Offline & Experiential",
        image: PLACEHOLDER_IMAGES[2],
        summary:
          "Digital does not live in a vacuum. Premium activations turn local attention into measurable brand footprint.",
        items: [
          {
            label: "Mall activations",
            body: "Engaging high-intent retail crowds with interactive popups, product sensory booths, and direct-to-consumer experiences.",
            href: "/services/offline-marketing/mall-activations",
          },
          {
            label: "Campus activations",
            body: "Connect with Gen-Z and student demographics through festivals, bootcamps, and brand sponsorships.",
            href: "/services/offline-marketing/campus-activations",
          },
          {
            label: "Theatre & metro branding",
            body: "High-attention cinema audiences and high-frequency urban transit — foyer branding, wraps, and digital takeovers.",
            href: "/services/offline-marketing/theatre-marketing",
          },
          {
            label: "Corporate events & popups",
            body: "Product launches, summits, and temporary retail spaces built for urgency, storytelling, and media hype.",
            href: "/services/offline-marketing/corporate-events",
          },
          {
            label: "Influencer campaigns",
            body: "Bridging online and offline by aligning local influencers to show up and broadcast physical events.",
            href: "/services/offline-marketing/influencer-campaigns",
          },
        ],
      },
      {
        id: "pr",
        number: "04",
        title: "PR & Brand Communications",
        image: PLACEHOLDER_IMAGES[0],
        summary:
          "Narrative architectures that demand attention — and serve as high-quality semantic sources for answer engines.",
        items: [
          {
            label: "Media placements",
            body: "High-authority press distribution that also functions as citation data for conversational search.",
            href: "/services/pr",
          },
          {
            label: "Executive narrative",
            body: "Founder and leadership stories mapped so coverage, profiles, and AI summaries stay on-message.",
            href: "/services/pr",
          },
          {
            label: "Crisis defense",
            body: "Prepared language, disclosures, and response paths so the public record stays governed.",
            href: "/services/pr",
          },
          {
            label: "Brand voice compliance",
            body: "Unified values, voice, and guidelines across web indexes, social, and AI prompts.",
            href: "/services/pr",
          },
        ],
      },
    ],
  },
  problem: {
    eyebrow: "Next-gen discovery",
    headline: "Generative search is here. Is your brand being cited?",
    body: "Traditional SEO gets you blue links. Conversational AI search engines like ChatGPT, Perplexity, Gemini, and SearchGPT answer user queries directly. If your brand voice isn't optimized for conversational references, you don't exist in the new front door of discovery.",
    closer:
      "Most brands still treat marketing as a pile of channels. Search, social, events, and PR never talk to each other — so neither do Google, answer engines, or the people standing in a mall.",
    mark: "The antidote",
    markBody:
      "AEO structures your content for answer engines. GEO maximizes citation share. Offline activations and PR feed the same brand story into the real world and the public record.",
  },
  industries: {
    eyebrow: "Who we work with",
    headline: "Premium brands that need to be found — online, in AI, and in the room.",
    body: "Same craft, different arenas. We specialize in discovery: search rankings, conversational citations, and unforgettable local presence.",
    knowMore: { label: "Know more", href: "/contact" },
    items: [
      {
        id: "consumer-retail",
        title: "Consumer & Retail Brands",
        body: "Mall activations, popups, and performance media that turn footfall into pipeline — with a brand that still looks considered. We plan the full path from first impression in-store to the ad, the landing page, and the local listing.",
        detail:
          "We connect shelf presence, paid social, and local search so the same customer sees one story from the aisle to the answer engine. Campaign creative, offer architecture, and review strategy are governed under one brief — not three vendors guessing.",
        secondaryCta: {
          label: "Explore activations",
          href: "/services/offline-marketing",
        },
      },
      {
        id: "local-market",
        title: "Local Market Leaders",
        body: "Maps, neighbourhood visibility, residential activations, and search that wins the area you actually serve. For clinics, salons, restaurants, and service businesses, discovery is hyper-local — and the work must reflect that.",
        detail:
          "From review strategy to residential booths, the work is built for how people discover and choose businesses near them. GEO and AEO content, maps optimisation, and on-ground activations route real neighbourhood intent into measurable enquiries.",
        secondaryCta: {
          label: "Win local search",
          href: "/services/digital-marketing/seo",
        },
      },
      {
        id: "founder-led",
        title: "Founder-Led Companies",
        body: "Personal branding, executive narrative, and PR so the person and the company show up as one authority. When the founder is the brand, every profile, press line, and AI summary must tell the same story.",
        detail:
          "Profiles, press, and conversational search are aligned so AI summaries and media coverage tell the same founder story. Thought leadership, LinkedIn presence, and citation-ready content compound into one governed public record.",
        secondaryCta: {
          label: "Build your narrative",
          href: "/services/digital-marketing/personal-branding",
        },
      },
      {
        id: "campus-genz",
        title: "Campus & Youth Audiences",
        body: "Festivals, sponsorships, and social that meet Gen-Z where they already gather — then route intent into digital workflows. Youth marketing only works when the on-ground moment and the feed feel like the same brand.",
        detail:
          "On-ground energy becomes measurable pipeline through QR paths, retargeting, and content built for how students actually share. Campus booths, influencer moments, and short-form creative are planned as one system — not a one-off activation.",
        secondaryCta: {
          label: "Reach Gen-Z",
          href: "/services/offline-marketing/campus-activations",
        },
      },
      {
        id: "corporate",
        title: "Corporate & B2B",
        body: "Launches, summits, thought leadership, and GEO so the brand is the answer when buyers ask an AI. B2B discovery now happens in search, in answer engines, and in the room — all three need the same narrative.",
        detail:
          "Executive visibility, event presence, and structured content work together so search, social, and sales enablement stay governed. Launch campaigns, keynote PR, and citation-ready pages are built to compound long after the event ends.",
        secondaryCta: {
          label: "Plan your launch",
          href: "/services/offline-marketing/corporate-events",
        },
      },
      {
        id: "growing-brands",
        title: "Growing Premium Brands",
        body: "You've outgrown random acts of marketing. SEO, AEO, GEO, digital, offline, and PR under one execution platform — because the next stage of growth needs one accountable team, not another vendor inbox.",
        detail:
          "One plan replaces the vendor pile — strategy, creative, performance, activations, and the site all accountable to the same brief. We diagnose where discovery leaks, unify the channels that matter, and run the work with one rhythm.",
        secondaryCta: {
          label: "Get one team",
          href: "/contact",
        },
      },
    ],
  },
  visualShowcase: {
    eyebrow: "In the market",
    headline: "Campaign visuals, activations, and the work in frame.",
    body: "Online and offline touchpoints planned as one system — placeholders until campaign assets are confirmed.",
    items: [
      {
        id: "visual-1",
        title: "Campaign hero",
        body: "Full-bleed creative that carries the offer and the brand in one frame.",
        layout: "hero" as const,
      },
      {
        id: "visual-2",
        title: "Activation moment",
        body: "On-ground touchpoints designed to convert attention into footfall.",
        layout: "wide" as const,
      },
      {
        id: "visual-3",
        title: "Brand shoot",
        body: "Product and lifestyle frames built for ads, social, and site.",
        layout: "square" as const,
      },
      {
        id: "visual-4",
        title: "Event footprint",
        body: "Spaces and signage that make the brand impossible to miss.",
        layout: "tall" as const,
      },
      {
        id: "visual-5",
        title: "Digital creative",
        body: "Scroll-stopping assets tuned for feed, stories, and paid.",
        layout: "tall" as const,
      },
      {
        id: "visual-6",
        title: "Workspace / production",
        body: "The team behind the shoots, edits, and campaign rollouts.",
        layout: "tall" as const,
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    headline: "Proof, not promises.",
    body: "Named case studies with approved metrics publish here once clients sign off.",
    placeholders: [
      {
        id: "case-1",
        label: "Search & AI discovery",
        meta: "SEO · AEO · GEO",
        summary: "Organic and AI-citation outcomes reported with clear before/after.",
      },
      {
        id: "case-2",
        label: "Offline activation",
        meta: "Mall · society · campus",
        summary: "Footfall and lead capture tracked with QR, WhatsApp and offers.",
      },
      {
        id: "case-3",
        label: "PR & brand",
        meta: "Media · narrative",
        summary: "Coverage and reputation work tied to enquiries, not vanity clips.",
      },
      {
        id: "case-4",
        label: "Performance marketing",
        meta: "Google · Meta",
        summary: "Paid campaigns judged on cost per lead and revenue, not clicks.",
      },
      {
        id: "case-5",
        label: "Website & conversion",
        meta: "Web · CRO",
        summary: "Sites and landing pages built to convert the traffic you buy.",
      },
      {
        id: "case-6",
        label: "Integrated growth",
        meta: "Full funnel",
        summary: "Ads, content, web and retention working as one reported system.",
      },
    ],
  },
  approach: {
    eyebrow: "How we work",
    headline: "The execution platform for modern marketing.",
    steps: [
      {
        number: "01",
        title: "Diagnose discovery",
        body: "We scan how you show up on Google and in answer engines — citation gaps, content structure, and local presence — then set the GEO and AEO brief.",
      },
      {
        number: "02",
        title: "Unify the digital ecosystem",
        body: "Performance, content, social, and the website are built to one plan so search, ads, and brand voice compound instead of competing.",
      },
      {
        number: "03",
        title: "Activate the real world",
        body: "Mall, campus, transit, and events with zero-leak paths from physical footprint into digital workflows and conversational follow-up.",
      },
      {
        number: "04",
        title: "Govern the narrative",
        body: "PR, brand voice, and compliance so every index — web, social, and AI — tells the same story. Then we tighten what the market actually does.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Why brands choose Digi Carotene",
    headline: "Built for scale. Backed by advanced optimization.",
    knowMore: { label: "Know more", href: "/contact" },
    points: [
      {
        title: "Conversational citation score",
        body: "Track and raise your citation footprint on Perplexity, Gemini, ChatGPT, and SearchGPT. Make sure your brand is the answer the engine returns.",
        image: PLACEHOLDER_IMAGES[0],
      },
      {
        title: "Offline experiential pipelines",
        body: "Synchronize mall, theatre, and campus footfall directly into digital workflows. Real-world presence linked to online conversion.",
        image: PLACEHOLDER_IMAGES[1],
      },
      {
        title: "Enterprise brand voice compliance",
        body: "Unified values, voice, and disclosures across search engines, social networks, and artificial intelligence indexes.",
        image: PLACEHOLDER_IMAGES[2],
      },
      {
        title: "One execution platform",
        body: "We engineer technical precision and brand craft together — SEO, AEO, GEO, digital, offline, and PR — so marketing strategy becomes execution.",
        image: PLACEHOLDER_IMAGES[0],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    kicker: "Clarity",
    headline: "Frequently asked questions",
    items: [
      {
        question: "What is GEO and AEO, and do I still need SEO?",
        answer:
          "SEO still ranks you on Google. AEO structures your content so answer engines can parse and recommend you. GEO maximizes citation share in generative outputs from ChatGPT, Gemini, Perplexity, and SearchGPT. We run all three as one discovery program — not as separate vendors.",
      },
      {
        question: "Do you only do digital marketing?",
        answer:
          "No. Digital, offline activations, and PR sit on one plan. Mall, campus, theatre, and metro work feed the same brand story as search, ads, and the site — so Google, AI engines, and people in the room see one voice.",
      },
      {
        question: "Who do you work with?",
        answer:
          "Premium brands that need to be found — restaurants and hospitality, healthcare, education, salons and beauty, local service businesses, and growing brands. The work is Hyderabad-rooted and built for businesses that have outgrown scattered marketing.",
      },
      {
        question: "How do we start?",
        answer:
          "Begin with a conversation or a complimentary GEO and AEO scan. We look at how you show up in search and answer engines, where the gaps are, and whether activations or PR should sit in the first brief. No fabricated dashboards — a clear next step.",
      },
      {
        question: "Where is Digi Carotene based?",
        answer:
          "Hyderabad, India. We work with brands here and with teams that need one accountable studio for strategy, creative, performance, and execution.",
      },
    ],
  },
  cta: {
    eyebrow: "Complimentary audit",
    headline: "How visible is your brand in AI search results?",
    body: "Get a complimentary GEO & AEO diagnostic scan. We'll analyze your conversational citation rates, identify content gaps, and map your offline activation potential.",
    primary: { label: "Get Your Free Scan", href: "/contact" },
    secondary: { label: "Talk with our Founders", href: "/contact" },
    scoreImage: {
      light: "/assets/scores/light.webp",
      dark: "/assets/scores/dark.webp",
    },
  },
} as const
