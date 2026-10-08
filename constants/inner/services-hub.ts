export type HubLink = { label: string; href: string }

export type HubGroup = {
  title: string
  summary: string
  href: string
  cta: string
  items: readonly HubLink[]
}

const dm = "/services/digital-marketing"
const offline = "/services/offline-marketing"

/** Services hub groups — v2 PDF, "Services hub — /services". */
export const hubGroups: readonly HubGroup[] = [
  {
    title: "Search & AI Discovery",
    summary:
      "Rank on Google, win Maps and get recommended in AI answers — SEO, AEO and GEO as one system.",
    href: `${dm}/seo`,
    cta: "Explore SEO, AEO & GEO",
    items: [
      { label: "SEO", href: `${dm}/seo` },
      { label: "Local SEO & Google Business Profile", href: `${dm}/seo` },
      { label: "AEO", href: `${dm}/seo` },
      { label: "GEO", href: `${dm}/seo` },
    ],
  },
  {
    title: "Digital Marketing",
    summary:
      "Performance, growth, social, content, web and automation — planned as one funnel, reported in leads.",
    href: dm,
    cta: "Explore Digital Marketing",
    items: [
      { label: "Performance", href: `${dm}/performance-marketing` },
      { label: "Growth", href: `${dm}/growth-marketing` },
      { label: "Content", href: `${dm}/content` },
      { label: "Social", href: `${dm}/social` },
      { label: "Graphic Design", href: `${dm}/graphic-design` },
      { label: "Web", href: `${dm}/web` },
      { label: "Personal Branding", href: `${dm}/personal-branding` },
      { label: "Email", href: `${dm}/email` },
      { label: "Insta Shoot", href: `${dm}/insta-shoot` },
      { label: "WhatsApp Marketing", href: `${dm}/whatsapp-marketing` },
    ],
  },
  {
    title: "Offline & Experiential Marketing",
    summary:
      "Mall, society, campus, theatre and festival activations — tracked with QR, WhatsApp and offers.",
    href: offline,
    cta: "Explore Offline Marketing",
    items: [
      { label: "Mall", href: `${offline}/mall-activations` },
      { label: "Residential", href: `${offline}/residential-activations` },
      { label: "Theatre", href: `${offline}/theatre-marketing` },
      { label: "Campus", href: `${offline}/campus-activations` },
      { label: "Corporate Events", href: `${offline}/corporate-events` },
      { label: "Festival", href: `${offline}/festival-marketing` },
      { label: "Pop-up Stores", href: `${offline}/popup-stores` },
      { label: "Influencer", href: `${offline}/influencer-campaigns` },
      { label: "Metro", href: `${offline}/metro-branding` },
    ],
  },
  {
    title: "PR & Brand Communications",
    summary:
      "Media placements, founder narrative, reputation management and crisis support.",
    href: "/services/pr",
    cta: "Explore PR Services",
    items: [
      { label: "Media placements", href: "/services/pr" },
      { label: "Founder narrative", href: "/services/pr" },
      { label: "Online reputation management (ORM)", href: `${dm}/orm` },
      { label: "Crisis communication", href: "/services/pr" },
    ],
  },
] as const

export const hubPackages = [
  {
    title: "Starter",
    audience: "Local businesses",
    price: "Custom quote after audit",
  },
  {
    title: "Growth",
    audience: "Multi-channel",
    price: "Custom quote after audit",
  },
  {
    title: "Enterprise / Global",
    audience: "Custom",
    price: "Custom quote",
  },
] as const

export const quizQuestions = ["Goal?", "Budget?", "Timeline?"] as const
