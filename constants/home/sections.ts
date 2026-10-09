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

/** Nine distinct tiles — never cycle a shorter set or the pulse animation reads as a repeat.
 *  10.webp kept for visual showcase / future use.
 *  No query strings — next/image localPatterns rejects them. */
const heroMosaic = [
  "/assets/hero/mosaic/01.webp",
  "/assets/hero/mosaic/02.webp",
  "/assets/hero/mosaic/03.webp",
  "/assets/hero/mosaic/04.webp",
  "/assets/hero/mosaic/05.webp",
  "/assets/hero/mosaic/06.webp",
  "/assets/hero/mosaic/07.webp",
  "/assets/hero/mosaic/08.webp",
  "/assets/hero/mosaic/09.webp",
] as const

const serviceTones = [
  "yellow",
  "green",
  "blue",
  "purple",
  "red",
] as const satisfies readonly ServicePanel["tone"][]

function toneAt(index: number): ServicePanel["tone"] {
  return serviceTones[index % serviceTones.length]
}

export const homeSections = {
  hero: {
    eyebrow: "Performance & Growth Marketing Agency",
    headline:
      "Digital Marketing Agency in Hyderabad, Growing Brands Across the Globe",
    rotatingLines: [
      "Ads that pay back.",
      "Funnels that keep growing.",
      "Content that converts.",
    ] as const,
    body: "Digi Carotene is a Hyderabad-based performance and growth marketing agency. We turn ad spend into leads, leads into customers, and customers into repeat buyers — using paid ads, social media, content, SEO, websites and automation as one connected system. For 7+ years we have grown 300+ brands, from neighbourhood clinics in Jubilee Hills to companies across India and abroad.",
    primaryCta: { label: "Get a Free Growth Audit", href: "/contact" },
    secondaryCta: {
      label: "Chat on WhatsApp",
      href: "/contact",
    },
    mosaic: heroMosaic,
  },
  trustStrip: {
    line: "Trusted by 300+ brands · 7+ years · Hyderabad & worldwide · Online + offline + PR",
  },
  problem: {
    eyebrow: "The growth problem",
    headline: "Spending on Ads but Not Seeing Growth?",
    body: "Most businesses don't have a traffic problem — they have a growth problem. Ads bring clicks that never call. Followers grow but sales don't. Leads go cold because nobody follows up. And three different vendors run ads, social and the website without talking to each other. The result: rising cost per lead and a competitor who keeps winning your customers.",
  },
  searchRanking: {
    eyebrow: "Discovery has changed",
    headline: "Your customers stopped scrolling through ten blue links",
    body: "People now ask ChatGPT, Gemini and Google's AI Overviews for answers. The brands winning today are named in the answer, show up in the feed at the right moment, and stand in front of customers where they shop, commute and celebrate.",
    queries: [
      "digital marketing agency in Hyderabad",
      "performance marketing agency Hyderabad",
      "growth marketing agency India",
      "lead generation agency Hyderabad",
    ] as const,
    siteName: "Digi Carotene",
    urlPath: "www.digicarotene.com › digital-marketing",
    title:
      "Digi Carotene — Digital Marketing Agency in Hyderabad | Performance & Growth",
    ratingLine:
      "7+ years · 300+ clients · Hyderabad & worldwide · Online + offline + PR",
    snippet:
      "Performance ads, growth marketing, SEO, social, web and activations — reported in leads, cost per customer and revenue, not likes.",
    tags: [
      { label: "Performance", href: "/services/digital-marketing/performance-marketing" },
      { label: "Growth", href: "/services/digital-marketing/growth-marketing" },
      { label: "SEO", href: "/services/digital-marketing/seo" },
      { label: "Social", href: "/services/digital-marketing/social" },
      { label: "Case Studies", href: "/growth-scenarios" },
    ] satisfies SearchRankingTag[],
  },
  differentiators: {
    eyebrow: "Why Digi Carotene",
    headline: "Why Brands in Hyderabad and Abroad Choose Digi Carotene",
    body: "Reported in leads and revenue — with every digital channel under one roof.",
    cards: [
      {
        id: "reported",
        title: "Reported in leads and revenue, not likes",
        body: "Monthly reports on enquiries, cost per lead, ROAS and repeat customers.",
      },
      {
        id: "one-team",
        title: "Every digital channel, one team",
        body: "Ads, growth, social, content, SEO, web, design and shoots under one roof, including our in-house studio (#DCProductions).",
      },
      {
        id: "test-scale",
        title: "Built to test and scale",
        body: "Weekly optimisation, clear experiments, no lock-in to what isn't working.",
      },
      {
        id: "local-global",
        title: "Local muscle, global standards",
        body: "On-ground in Hyderabad; time-zone-friendly service for international clients.",
      },
    ] satisfies DifferentiatorCard[],
  },
  servicePanels: {
    eyebrow: "Our services",
    headline: "Performance and Growth Marketing, Powered by Every Digital Channel",
    body: "We plan every channel around one goal: profitable growth. Performance marketing brings in customers today, growth marketing makes each one cheaper to win and more likely to return, and every other service feeds that engine.",
    exploreHref: "/services",
    exploreLabel: "Explore All Services",
    panels: [
      {
        id: "performance",
        title: "Performance Marketing",
        body: "Google, Meta, YouTube and LinkedIn ads managed for cost per lead and ROAS.",
        href: "/services/digital-marketing/performance-marketing",
        tone: toneAt(0),
      },
      {
        id: "growth",
        title: "Growth Marketing",
        body: "Funnel experiments, retention and referral programs that lower acquisition cost.",
        href: "/services/digital-marketing/growth-marketing",
        tone: toneAt(1),
      },
      {
        id: "social",
        title: "Social Media Marketing",
        body: "Reels, content calendars and community management that bring customers.",
        href: "/services/digital-marketing/social",
        tone: toneAt(2),
      },
      {
        id: "seo",
        title: "Search Engine Optimization",
        body: "Rank on Google, win Maps and get recommended by AI search.",
        href: "/services/digital-marketing/seo",
        tone: toneAt(3),
      },
      {
        id: "content",
        title: "Content Marketing",
        body: "Website copy, blogs and scripts that answer questions and convert.",
        href: "/services/digital-marketing/content",
        tone: toneAt(4),
      },
      {
        id: "web",
        title: "Web Design & Development",
        body: "Fast, conversion-ready websites and landing pages.",
        href: "/services/digital-marketing/web",
        tone: toneAt(0),
      },
      {
        id: "graphic",
        title: "Graphic Designing",
        body: "Brand identity, ad creatives and social designs that stop the scroll.",
        href: "/services/digital-marketing/graphic-design",
        tone: toneAt(1),
      },
      {
        id: "personal",
        title: "Personal Branding",
        body: "Founders and doctors positioned as the trusted name in their field.",
        href: "/services/digital-marketing/personal-branding",
        tone: toneAt(2),
      },
      {
        id: "email",
        title: "Email Marketing",
        body: "Automated journeys that bring customers back.",
        href: "/services/digital-marketing/email",
        tone: toneAt(3),
      },
      {
        id: "insta",
        title: "Insta Shoot",
        body: "In-house photo and reel production across Hyderabad.",
        href: "/services/digital-marketing/insta-shoot",
        tone: toneAt(4),
      },
    ] satisfies ServicePanel[],
    secondary: [
      {
        id: "offline",
        title: "Offline & Experiential",
        body: "Malls, campuses, metro, festivals and pop-ups — tracked back to digital.",
        href: "/services/offline-marketing",
      },
      {
        id: "pr",
        title: "PR & Brand Communications",
        body: "Media coverage and reputation that also feed AI citations.",
        href: "/services/pr",
      },
    ] as const,
  },
  growthEngine: {
    eyebrow: "Growth engine",
    headline: "How Our Growth Engine Works",
    body: "Four stages, one team, one report.",
    stages: [
      {
        number: "01",
        title: "Attract",
        body: "Performance ads, social media, SEO and content bring the right people in.",
      },
      {
        number: "02",
        title: "Convert",
        body: "Landing pages, websites and WhatsApp follow-up turn visitors into enquiries.",
      },
      {
        number: "03",
        title: "Retain",
        body: "Email, WhatsApp and loyalty journeys turn first-time buyers into regulars.",
      },
      {
        number: "04",
        title: "Scale",
        body: "We test, read the numbers weekly and move budget to what works.",
      },
    ] as const,
    footnote:
      "Customers now also ask ChatGPT, Gemini and Google AI Overviews for recommendations — our SEO and content work makes sure you're named there too.",
  },
  hyderabadGlobal: {
    eyebrow: "Hyderabad + world",
    headline: "Rooted in Hyderabad. Working With Brands Worldwide.",
    body: "Our team works from Dwaraka Pride, HITEC City, Madhapur, Hyderabad, and serves clients across Hyderabad, Secunderabad, Bangalore and international markets. Local clients get on-ground shoots, activations and same-city meetings. Global clients get a dedicated account manager, overlap hours in their time zone, and reporting in their currency.",
    links: [
      {
        label: "Digital Marketing in Hyderabad",
        href: "/digital-marketing-agency-hyderabad",
      },
      { label: "Global Clients", href: "/global" },
    ] as const,
  },
  audiences: {
    eyebrow: "Industries",
    headline: "Industries We Grow — From Local Leaders to Global Brands",
    body: "Industry playbooks built around how each sector actually buys — each card links to a dedicated page.",
    items: [
      {
        id: "health",
        label: "Healthcare & Clinics",
        body: "Patient acquisition, doctor branding, local SEO and review growth.",
        href: "/industries/healthcare",
      },
      {
        id: "food",
        label: "Restaurants & QSR",
        body: "Food shoots, Maps visibility, festivals and footfall offers.",
        href: "/industries/restaurants",
      },
      {
        id: "lifestyle",
        label: "Salons & Beauty",
        body: "Before-after reels, WhatsApp booking and membership offers.",
        href: "/industries/salons",
      },
      {
        id: "edu",
        label: "Education",
        body: "Admissions funnels, campus activations and parent targeting.",
        href: "/industries/education",
      },
      {
        id: "retail",
        label: "Real Estate & Furniture",
        body: "Showroom footfall ads, product shoots and lead qualification.",
        href: "/industries/real-estate-furniture",
      },
      {
        id: "b2b",
        label: "B2B & Technology",
        body: "LinkedIn, account-based content, decks and website revamps.",
        href: "/industries/b2b-technology",
      },
    ] satisfies Array<AudienceItem & { href: string }>,
  },
  framework: {
    eyebrow: "How we work",
    headline: "How We Work: Diagnose, Launch, Scale, Compound",
    body: "A clear operating system that turns marketing spend into results you can count.",
    steps: [
      {
        number: "01",
        title: "Diagnose",
        body: "Audit your ads, funnel, website, social and search presence; set targets for cost per lead and revenue.",
        tags: ["Ads", "Funnel", "Search", "Targets"],
      },
      {
        number: "02",
        title: "Launch",
        body: "Campaigns, creatives, landing pages and tracking go live within 2 weeks.",
        tags: ["Campaigns", "Creative", "Tracking"],
      },
      {
        number: "03",
        title: "Scale",
        body: "Weekly testing of audiences, offers and creatives; budget moves to winners.",
        tags: ["Tests", "Budget", "ROAS"],
      },
      {
        number: "04",
        title: "Compound",
        body: "Retention journeys, content and SEO keep lowering acquisition cost month after month.",
        tags: ["Retention", "SEO", "Content"],
      },
    ] satisfies FrameworkStep[],
  },
  reels: {
    eyebrow: "Creative proof",
    headline: "Content people actually stop to watch.",
    body: "Short-form stock shells for layout reference — swap for real client reels when assets are confirmed.",
    items: [
      {
        id: "reel-1",
        label: "Food & hospitality",
        handle: "@northplate",
        videoSrc: "/assets/reels/food.mp4",
        posterSrc: "/assets/reels/food-poster.webp",
      },
      {
        id: "reel-2",
        label: "Social & creator",
        handle: "@loomlather",
        videoSrc: "/assets/reels/social.mp4",
        posterSrc: "/assets/reels/social-poster.webp",
      },
      {
        id: "reel-3",
        label: "Retail & lifestyle",
        handle: "@peakstone",
        videoSrc: "/assets/reels/retail.mp4",
        posterSrc: "/assets/reels/retail-poster.webp",
      },
      {
        id: "reel-4",
        label: "Beauty & wellness",
        handle: "@willowwell",
        videoSrc: "/assets/reels/beauty.mp4",
        posterSrc: "/assets/reels/beauty-poster.webp",
      },
      {
        id: "reel-5",
        label: "Founders & B2B",
        handle: "@orbithq",
        videoSrc: "/assets/reels/workspace.mp4",
        posterSrc: "/assets/reels/workspace-poster.webp",
      },
    ] satisfies ReelItem[],
  },
  results: {
    eyebrow: "Proof",
    headline: "Results that speak volumes.",
    body: "Benchmark scenarios with before-and-after numbers — modelled from industry data until named client results are approved.",
    /** Cards load from content/growth-scenarios (homeFeatured). */
    cards: [] satisfies ResultCard[],
  },
  faq: {
    eyebrow: "FAQ",
    kicker: "Clarity",
    headline: "Frequently Asked Questions",
    items: [
      {
        question:
          "Which is the best digital marketing agency in Hyderabad for small businesses?",
        answer:
          "The right agency reports in enquiries and revenue, not just reach. Digi Carotene works with clinics, salons, restaurants, schools and retailers across Hyderabad, with plans that start small and scale with results.",
      },
      {
        question:
          "What is the difference between performance marketing and growth marketing?",
        answer:
          "Performance marketing buys customers through paid ads and is measured on cost per lead and ROAS. Growth marketing improves the whole funnel — conversion, retention and referrals — so each customer costs less and buys more often. We run both together.",
      },
      {
        question: "Which digital marketing services do you offer?",
        answer:
          "Performance marketing, growth marketing, social media, SEO, content, web design, graphic design, personal branding, email marketing and Instagram shoots, plus offline activations and PR.",
      },
      {
        question: "Do you work with clients outside India?",
        answer:
          "Yes. We work with brands in India and abroad, with a dedicated account manager, video calls in your time zone and invoicing that fits international clients.",
      },
      {
        question: "How much does digital marketing cost in Hyderabad?",
        answer:
          "It depends on channels and goals. Ad spend is separate from our retainer. We share a fixed scope and price after a free audit.",
      },
      {
        question: "Where is Digi Carotene located?",
        answer:
          "Dwaraka Pride - Plot No. 4/1, Survey No. 64, Huda Techno Enclave, HITEC City, Madhapur, Hyderabad, Telangana 500081. We meet clients in person across Hyderabad and online worldwide.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    eyebrow: "Next step",
    headline: "Where Is Your Growth Leaking?",
    body: "Get a free growth audit. We'll review your ads, funnel, website and social presence, then show you the three fastest wins to lower cost per lead and grow revenue.",
    primary: { label: "Get Your Free Growth Audit", href: "/contact" },
    secondary: {
      label: "Talk to Our Founders",
      href: "/contact",
    },
  },
  meta: {
    title: "Digital Marketing Agency in Hyderabad | Digi Carotene",
    description:
      "SEO, AI search (GEO/AEO), ads, social media, websites and BTL activations for 300+ brands in Hyderabad and worldwide. Get a free audit.",
  },
} as const
