export type GlobalClientStory = {
  id: string
  flag: string
  location: string
  industry: string
  name: string
  headline: string
  challenge: string
  whatWeDid: string
  services: readonly { title: string; href: string }[]
  /** Omit or leave empty when the result number is not approved. */
  result?: string
  siteUrl: string
  siteLabel: string
}

const dm = "/services/digital-marketing"

/** CR-03 — Global Client Stories (no unapproved result numbers). */
export const globalClientStories: readonly GlobalClientStory[] = [
  {
    id: "lecom",
    flag: "🇺🇸",
    location: "Elmira, New York, USA",
    industry: "Live events & entertainment venue",
    name: "LECOM Event Center",
    headline: "Selling more tickets for a 4,500-seat arena",
    challenge:
      "Filling seats for concerts, sports nights and family shows at a multi-purpose arena in downtown Elmira.",
    whatWeDid:
      "Planned and ran Meta (Facebook and Instagram) ad campaigns for each event to drive ticket sales.",
    services: [
      {
        title: "Performance Marketing",
        href: `${dm}/performance-marketing`,
      },
    ],
    siteUrl: "https://lecomeventcenter.com",
    siteLabel: "lecomeventcenter.com",
  },
  {
    id: "iserviceglobe",
    flag: "🇺🇸",
    location: "Houston, Texas, USA",
    industry: "SAP IT services (B2B)",
    name: "iServiceGlobe",
    headline: "120 sales-qualified leads in 3 months for an SAP services firm",
    challenge:
      "Reaching enterprise decision-makers who buy SAP implementation and support.",
    whatWeDid:
      "Designed and built the website, then ran email marketing and LinkedIn marketing campaigns to generate leads for their SAP services.",
    services: [
      { title: "Web Design & Development", href: `${dm}/web` },
      { title: "Email Marketing", href: `${dm}/email` },
      { title: "Growth Marketing", href: `${dm}/growth-marketing` },
    ],
    result: "2× more leads and 120 sales-qualified leads in 3 months",
    siteUrl: "https://iserviceglobe.com",
    siteLabel: "iserviceglobe.com",
  },
  {
    id: "indellia",
    flag: "🇺🇸",
    location: "Palo Alto, California, USA",
    industry: "B2B SaaS — customer feedback analytics for consumer brands",
    name: "Indellia",
    headline: "SEO and LinkedIn lead generation for a Silicon Valley SaaS platform",
    challenge:
      "Building a steady pipeline of consumer-brand buyers for an AI-driven voice-of-customer platform.",
    whatWeDid:
      "Ongoing SEO to grow organic visibility, plus LinkedIn lead generation targeting decision-makers at consumer brands.",
    services: [
      { title: "Search Engine Optimization", href: `${dm}/seo` },
      { title: "Growth Marketing", href: `${dm}/growth-marketing` },
    ],
    siteUrl: "https://indellia.com",
    siteLabel: "indellia.com",
  },
  {
    id: "amatha",
    flag: "🇩🇰",
    location: "Denmark & India",
    industry: "Energy technology platform",
    name: "Amatha Green Energy",
    headline: "A website for an India-focused energy platform, run from Denmark",
    challenge:
      "An NRI founder based in Denmark needed a website to introduce a platform connecting global energy-technology vendors with India's industrial market.",
    whatWeDid:
      "Designed and developed the website, working remotely across time zones.",
    services: [{ title: "Web Design & Development", href: `${dm}/web` }],
    result: "Website launched for the India market-entry programme",
    siteUrl: "https://amatha.in",
    siteLabel: "amatha.in",
  },
  {
    id: "diocleziano",
    flag: "🇪🇺",
    location: "Europe",
    industry: "Advertising display equipment",
    name: "Diocleziano Ltd",
    headline: "A product website for a European display-equipment supplier",
    challenge:
      "Presenting poster carts and LED gobo projectors clearly to business buyers.",
    whatWeDid: "Designed and built the company website.",
    services: [{ title: "Web Design & Development", href: `${dm}/web` }],
    result: "Product website live for European business buyers",
    siteUrl: "https://diocleziano.com",
    siteLabel: "diocleziano.com",
  },
]

export const globalMarketsStrip = [
  "USA",
  "Europe",
  "Denmark",
  "India",
] as const
