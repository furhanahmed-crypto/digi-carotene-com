import { getPlaceholderImage } from "@/lib/placeholder-images"
import type {
  AudienceItem,
  DifferentiatorCard,
  FaqItem,
  FrameworkStep,
  ReelItem,
  ResultCard,
  SearchRankingTag,
  ServicePanel,
} from "@/types/home"

const heroMosaic = Array.from({ length: 9 }, (_, index) =>
  getPlaceholderImage(index)
)

export const homeSections = {
  hero: {
    eyebrow: "Found. Chosen. Measured.",
    headlineBefore: "They search.",
    headlineAccents: [
      "You show up first.",
      "You rank first.",
      "You get cited by AI.",
    ] as const,
    body: "For 7+ years and 300+ clients across the globe, we have done one thing well: turn marketing spend into results you can count. We get you found on Google, recommended by AI, and chosen in the real world, and we show you the numbers every step of the way.",
    primaryCta: { label: "Get a Free Growth Audit", href: "/contact" },
    secondaryCta: {
      label: "See What We Do",
      href: "/services/digital-marketing",
    },
    mosaic: heroMosaic,
    capabilities: [
      { label: "SEO", detail: "Rank on Google" },
      { label: "AEO", detail: "Win answer engines" },
      { label: "GEO", detail: "Earn AI citations" },
    ] as const,
  },
  searchRanking: {
    eyebrow: "Discovery has changed",
    headline: "Your customers stopped scrolling through ten blue links",
    body: "People now ask ChatGPT, Gemini and Google's AI Overviews for answers. The brands winning today are named in the answer, show up in the feed at the right moment, and stand in front of customers where they shop, commute and celebrate.",
    queries: [
      "digital marketing agency in Hyderabad",
      "SEO AEO GEO agency Bangalore",
      "performance marketing agency Hyderabad",
      "BTL activation agency Bangalore",
    ] as const,
    siteName: "Digi Carotene",
    urlPath: "www.digicarotene.com › digital-marketing",
    title:
      "Digi Carotene — Data-Led Digital Marketing Agency in Hyderabad & Bangalore",
    ratingLine:
      "7+ years · 300+ clients · Hyderabad & Bangalore · Online + offline + PR",
    snippet:
      "SEO, AEO, GEO, performance ads, social, web and offline activations — reported in leads, cost per customer and revenue, not likes.",
    tags: [
      { label: "SEO", href: "/services/digital-marketing/seo" },
      {
        label: "Performance Ads",
        href: "/services/digital-marketing/performance-marketing",
      },
      { label: "Social Media", href: "/services/digital-marketing/social" },
      { label: "Offline", href: "/services/offline-marketing" },
      { label: "Case Studies", href: "/case-studies" },
    ] satisfies SearchRankingTag[],
  },
  differentiators: {
    eyebrow: "Why Digi Carotene",
    headline: "What makes Digi Carotene different",
    body: "One data-led team for search, AI visibility, performance, creative and on-ground activations — with reporting you can actually use.",
    cards: [
      {
        id: "data",
        title: "We decide with data, not hunches",
        body: "Every campaign starts with a baseline and ends with a report you can understand. We track cost per lead, cost per acquisition, return on ad spend, footfall and revenue — not vanity metrics.",
      },
      {
        id: "visibility",
        title: "Visible where people actually look now",
        body: "Google search, Maps, AI answer engines, Instagram, YouTube, WhatsApp, malls, metro, campuses and gated communities — planned as one system.",
      },
      {
        id: "one-team",
        title: "One team, one plan, one report",
        body: "Strategists, performance marketers, designers, developers, writers, production and on-ground activation — same brief. No vendor ping-pong.",
      },
      {
        id: "cities",
        title: "Hyderabad roots, Bangalore reach",
        body: "We know how a Jubilee Hills diner decides differently from a Whitefield techie — and which playbooks travel after 300+ clients across industries.",
      },
    ] satisfies DifferentiatorCard[],
  },
  servicePanels: {
    eyebrow: "Our services",
    headline: "Full-stack discovery under one roof.",
    body: "Pick a lane — or hand us the whole funnel.",
    exploreHref: "/services/digital-marketing",
    exploreLabel: "Explore All Services",
    panels: [
      {
        id: "search-ai",
        title: "Search and AI Discovery",
        body: "SEO, AEO and GEO so you rank on Google and get recommended by ChatGPT, Gemini and Perplexity.",
        href: "/services/digital-marketing/seo",
        tone: "yellow",
      },
      {
        id: "performance",
        title: "Performance and Growth",
        body: "Google Ads, Meta Ads and full-funnel growth experiments built around what it costs to win a customer.",
        href: "/services/digital-marketing/performance-marketing",
        tone: "green",
      },
      {
        id: "creative",
        title: "Content, Social and Creative",
        body: "Content, social, graphic design, Instagram shoots and personal branding people actually stop to watch.",
        href: "/services/digital-marketing/social",
        tone: "blue",
      },
      {
        id: "web",
        title: "Websites that convert",
        body: "Fast, SEO-ready websites and landing pages designed to turn visitors into enquiries.",
        href: "/services/digital-marketing/web",
        tone: "purple",
      },
      {
        id: "offline",
        title: "Offline and Experiential",
        body: "Mall, residential, campus and festival activations, theatre and metro branding, pop-ups and influencers — trackable back to digital.",
        href: "/services/offline-marketing",
        tone: "red",
      },
    ] satisfies ServicePanel[],
  },
  audiences: {
    eyebrow: "Who we work with",
    headline: "Built for brands that need customers, not vanity metrics.",
    body: "From restaurants and clinics to edtech, real estate and founder-led SaaS — across Hyderabad, Bangalore and beyond.",
    items: [
      {
        id: "food",
        label: "Restaurants & cloud kitchens",
        body: "Full tables and steady delivery orders.",
      },
      {
        id: "health",
        label: "Clinics & wellness",
        body: "Patient enquiries, not just likes.",
      },
      {
        id: "lifestyle",
        label: "Salons, fashion & lifestyle",
        body: "Brands that live and die by Instagram.",
      },
      {
        id: "edu",
        label: "Schools, colleges & edtech",
        body: "Admissions seasons on tight deadlines.",
      },
      {
        id: "retail",
        label: "Real estate & high-ticket retail",
        body: "Every lead is worth chasing.",
      },
      {
        id: "b2b",
        label: "Startups, SaaS & B2B",
        body: "Selling to Bangalore, Hyderabad and the world.",
      },
    ] satisfies AudienceItem[],
  },
  framework: {
    eyebrow: "How we work",
    headline: "Diagnose, Plan, Launch, Measure",
    body: "A clear operating system that turns marketing spend into results you can count.",
    steps: [
      {
        number: "01",
        title: "Diagnose",
        body: "We audit where you show up today: Google rankings, AI answers, ads, social, website speed and local listings — so you see where customers slip away.",
        tags: ["SEO audit", "AI visibility", "Ads", "Local"],
      },
      {
        number: "02",
        title: "Plan",
        body: "We set targets with you (leads, sales, footfall, CPA) and build a channel plan and budget split to hit them.",
        tags: ["Targets", "Budget", "Channels"],
      },
      {
        number: "03",
        title: "Launch",
        body: "Creative, campaigns, content and on-ground activations go live on an agreed calendar — tagged and tracked from day one.",
        tags: ["Campaigns", "Creative", "Activations"],
      },
      {
        number: "04",
        title: "Measure",
        body: "Weekly checks, monthly reports and a live dashboard. We move budget towards what works and cut what does not.",
        tags: ["Reporting", "ROAS", "Improve"],
      },
    ] satisfies FrameworkStep[],
  },
  reels: {
    eyebrow: "Creative proof",
    headline: "Content people actually stop to watch.",
    body: "Short-form and campaign creative shells — replace with real client reels when assets are confirmed.",
    items: [
      { id: "reel-1", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
      { id: "reel-2", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
      { id: "reel-3", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
      { id: "reel-4", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
      { id: "reel-5", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
    ] satisfies ReelItem[],
  },
  results: {
    eyebrow: "Results, not reports",
    headline: "Results that speak volumes.",
    body: "Replace with three real case cards (industry, city, one headline metric, time frame). Do not publish invented numbers.",
    cards: [
      {
        id: "r1",
        client: "[[Industry — to confirm]]",
        industry: "[[City]]",
        metric: "[[Metric]]",
        metricLabel: "[[Outcome label]]",
        summary: "[[Challenge + outcome — to confirm]]",
        tags: ["SEO", "Content"],
      },
      {
        id: "r2",
        client: "[[Industry — to confirm]]",
        industry: "[[City]]",
        metric: "[[Metric]]",
        metricLabel: "[[Outcome label]]",
        summary: "[[Challenge + outcome — to confirm]]",
        tags: ["Performance", "CRO"],
      },
      {
        id: "r3",
        client: "[[Industry — to confirm]]",
        industry: "[[City]]",
        metric: "[[Metric]]",
        metricLabel: "[[Outcome label]]",
        summary: "[[Challenge + outcome — to confirm]]",
        tags: ["Social", "Activations"],
      },
    ] satisfies ResultCard[],
  },
  faq: {
    eyebrow: "FAQ",
    kicker: "Clarity",
    headline: "Frequently asked questions",
    items: [
      {
        question: "What does a digital marketing agency in Hyderabad do?",
        answer:
          "A digital marketing agency helps businesses win customers online through SEO, paid ads, social media, content and websites. Digi Carotene, a data-led agency based in Hyderabad, also covers AI search visibility, offline activations and PR, and reports every result against targets like cost per lead and revenue.",
      },
      {
        question: "What is AEO and GEO, and do I still need SEO?",
        answer:
          "AEO (Answer Engine Optimization) structures your content so AI assistants and Google's AI Overviews can quote it. GEO (Generative Engine Optimization) increases how often tools like ChatGPT and Perplexity mention your brand. You still need SEO, because AI engines mostly pull answers from pages that already rank and are trusted.",
      },
      {
        question: "Do you work with businesses in Bangalore?",
        answer:
          "Yes. Digi Carotene works with brands across Bangalore and Hyderabad, and with clients in other countries. Digital work is run remotely with regular reviews, and our on-ground team handles activations, shoots and events in both cities.",
      },
      {
        question: "How much does digital marketing cost in Hyderabad?",
        answer:
          "It depends on your goals, channels and ad budget. Agency fees are separate from ad spend. After a free audit, Digi Carotene shares a fixed-scope proposal with clear deliverables and the targets we will report against, so you know exactly what you are paying for.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "Paid ads can generate leads within the first one to two weeks. SEO, AEO and content usually show measurable movement in three to six months. Offline activations deliver results on the day, and we track the follow-up conversions digitally.",
      },
      {
        question: "Do you only do digital marketing?",
        answer:
          "No. Alongside digital, Digi Carotene runs mall, residential, campus and festival activations, theatre and metro branding, pop-up stores, corporate events, influencer campaigns and PR, so online and offline marketing work as one plan.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    eyebrow: "Next step",
    headline: "Find out how visible your brand really is.",
    body: "Get a free audit of your Google rankings, AI search visibility, ads and website. No obligation — just a clear report and a plan.",
    primary: { label: "Get My Free Audit", href: "/contact" },
    secondary: {
      label: "Talk to Us on WhatsApp",
      href: "/contact",
    },
  },
  meta: {
    title: "Data-Led Digital Marketing Agency, Hyderabad & Bangalore",
    description:
      "Data-led digital marketing agency with 7+ years and 300+ clients. SEO, AEO, performance ads, social, web and offline activations in Hyderabad and Bangalore.",
  },
} as const
