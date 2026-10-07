import { getPlaceholderImage } from "@/lib/placeholder-images"
import type {
  FrameworkStep,
  RatingCard,
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
    eyebrow: "We engineer digital discovery",
    headlineBefore: "They search.",
    headlineAccent: "You show up first.",
    body: "SEO, AEO, and GEO — plus digital, offline, and PR — so Google, AI answer engines, and people in the market find Digi Carotene clients first.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/case-studies" },
    mosaic: heroMosaic,
  },
  searchRanking: {
    query: "digital marketing agency Hyderabad",
    siteName: "Digi Carotene",
    urlPath: "www.digicarotene.com › digital-marketing",
    title: "Digi Carotene — Digital Marketing Agency in Hyderabad",
    ratingLine:
      "[[rating — to confirm]] · verified reviews · [[clients — to confirm]] · Hyderabad",
    snippet:
      "SEO, AEO, GEO, performance ads, social, offline activations, and PR — engineered so searches like this one become your pipeline.",
    tags: [
      { label: "SEO", href: "/services/digital-marketing/seo" },
      { label: "Performance Ads", href: "/services/digital-marketing" },
      { label: "Social Media", href: "/services/digital-marketing/social" },
      { label: "Branding", href: "/services/digital-marketing" },
      { label: "Case Studies", href: "/case-studies" },
    ] satisfies SearchRankingTag[],
  },
  ratings: {
    eyebrow: "Social proof",
    headline: "Rated by our clients",
    body: "Platform ratings go here once confirmed. Structure stays; numbers stay honest.",
    cards: [
      {
        id: "google",
        platform: "Google",
        score: "[[rating — to confirm]]",
        detail: "[[review count — to confirm]]",
        href: "/contact",
      },
      {
        id: "clutch",
        platform: "Clutch",
        score: "[[rating — to confirm]]",
        detail: "[[review count — to confirm]]",
        href: "/contact",
      },
      {
        id: "other",
        platform: "[[Platform — to confirm]]",
        score: "[[rating — to confirm]]",
        detail: "[[review count — to confirm]]",
        href: "/contact",
      },
    ] satisfies RatingCard[],
  },
  servicePanels: {
    eyebrow: "What we run",
    headline: "Full-stack discovery under one roof.",
    body: "Pick a lane — or hand us the whole funnel.",
    panels: [
      {
        id: "search-ai",
        title: "Search & AI Discovery",
        body: "SEO, AEO, and GEO so you rank on Google and get cited by ChatGPT, Gemini, and Perplexity.",
        href: "/services/digital-marketing/seo",
        tone: "yellow",
      },
      {
        id: "digital",
        title: "Digital Marketing",
        body: "Performance, content, social, and web — built to feed search and conversion.",
        href: "/services/digital-marketing",
        tone: "green",
      },
      {
        id: "offline",
        title: "Offline & Experiential",
        body: "Mall, campus, theatre, metro, and popups that turn local attention into pipeline.",
        href: "/services/offline-marketing",
        tone: "blue",
      },
      {
        id: "pr",
        title: "PR & Narrative",
        body: "Press, executive story, and brand voice that also serves as citation fuel for AI.",
        href: "/services/pr",
        tone: "purple",
      },
      {
        id: "creative",
        title: "Creative & Reels",
        body: "Campaign visuals, short-form video, and assets that stop the scroll.",
        href: "/services/digital-marketing/social",
        tone: "red",
      },
    ] satisfies ServicePanel[],
  },
  framework: {
    eyebrow: "Our approach",
    headline: "The Growth Framework",
    body: "A clear methodology that turns digital presence into business performance.",
    steps: [
      {
        number: "01",
        title: "Attract",
        body: "Drive the right audience through SEO, AEO/GEO content, paid campaigns, and influencer reach.",
        tags: ["SEO Strategy", "AEO / GEO", "Paid Campaigns", "Content"],
      },
      {
        number: "02",
        title: "Engage",
        body: "Convert interest with landing pages, social proof, retargeting, and on-ground activations.",
        tags: ["Landing Pages", "Retargeting", "Activations", "UX"],
      },
      {
        number: "03",
        title: "Amplify",
        body: "Compound results with PR, creative reels, analytics, and a governed brand narrative.",
        tags: ["PR", "Creative", "Analytics", "Brand Voice"],
      },
    ] satisfies FrameworkStep[],
  },
  reels: {
    eyebrow: "Creative proof",
    headline: "Reels and short-form that prove the craft.",
    body: "We produce scroll-stopping video for brands. Real reels replace these frames when assets are confirmed.",
    items: [
      { id: "reel-1", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
      { id: "reel-2", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
      { id: "reel-3", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
      { id: "reel-4", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
      { id: "reel-5", label: "[[Reel — to confirm]]", handle: "@[[handle]]" },
    ] satisfies ReelItem[],
  },
  results: {
    eyebrow: "Proven results",
    headline: "Results that speak volumes.",
    body: "Outcome cards stay structured and honest until real client metrics are confirmed.",
    cards: [
      {
        id: "r1",
        client: "[[Client — to confirm]]",
        industry: "[[Industry]]",
        metric: "[[Metric]]",
        metricLabel: "[[Outcome label]]",
        summary: "[[One-sentence outcome — to confirm]]",
        tags: ["SEO", "Content"],
      },
      {
        id: "r2",
        client: "[[Client — to confirm]]",
        industry: "[[Industry]]",
        metric: "[[Metric]]",
        metricLabel: "[[Outcome label]]",
        summary: "[[One-sentence outcome — to confirm]]",
        tags: ["Performance", "CRO"],
      },
      {
        id: "r3",
        client: "[[Client — to confirm]]",
        industry: "[[Industry]]",
        metric: "[[Metric]]",
        metricLabel: "[[Outcome label]]",
        summary: "[[One-sentence outcome — to confirm]]",
        tags: ["Social", "Activations"],
      },
    ] satisfies ResultCard[],
  },
  cta: {
    eyebrow: "Next step",
    headline: "Ready to show up first?",
    body: "Tell us where discovery is leaking — search, AI answers, or the real world. We’ll map a clear first brief.",
    primary: { label: "Get a free scan", href: "/contact" },
    secondary: { label: "Talk to the team", href: "/contact" },
  },
} as const
