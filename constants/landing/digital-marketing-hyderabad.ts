import { siteContact } from "@/constants/site/contact"

/** Canonical content — Digi_Carotene_Digital_Marketing_Agency_Hyderabad_Dev_Spec.pdf */
/** New landing slug — does not replace /digital-marketing-agency-hyderabad. */
export const DM_HYD_PATH = "/digital-marketing-agency-in-hyderabad" as const

export const dmHydQuoteWhatsappHref = `${siteContact.whatsappHref}?text=${encodeURIComponent(
  "Hi Digi Carotene, I want a digital marketing plan for my business."
)}`

export const dmHydMeta = {
  title: "Digital Marketing Agency in Hyderabad | Digi Carotene",
  description:
    "Digital marketing agency in Hyderabad for Google ads, Meta ads, social media, SEO and WhatsApp marketing. 7+ years, 300+ brands. Call for a growth plan.",
  ogDescription:
    "Google ads, Meta ads, social media, SEO and WhatsApp marketing run as one system for Hyderabad businesses. Call for a growth plan.",
} as const

export const dmHydHero = {
  eyebrow: "Performance & growth marketing · HITEC City, Hyderabad",
  h1: "Digital Marketing Agency in Hyderabad. Measured in leads and revenue.",
  body: "Digi Carotene runs Google ads, Meta ads, social media, SEO and WhatsApp marketing as one connected system for Hyderabad businesses. Every month you see what each enquiry cost and which channel brought it in. 7+ years, 300+ brands, one team in HITEC City.",
  planNote:
    "No fixed packages. We study your business first, then share a plan and a fixed monthly fee on a call.",
  proofs: [
    "7+ years in digital marketing",
    "300+ brands served",
    "Office in HITEC City, Madhapur",
  ],
  reportCard: {
    title: "Monthly growth report",
    business: "Your business",
    city: "Hyderabad",
    metrics: [
      "Enquiries",
      "Cost per lead",
      "Return on ad spend",
      "Repeat customers",
    ],
    chips: ["Google Ads", "Meta", "SEO & Maps", "WhatsApp"],
  },
} as const

export const dmHydMarkets = {
  eyebrow: "Why Hyderabad needs its own playbook",
  title: "Hyderabad is two markets. Your marketing should reach both.",
  body: "A campaign that works in Gachibowli can fall flat in Dilsukhnagar. We plan language, channels and offers for the customers you actually serve.",
  cards: [
    {
      label: "IT corridor",
      title: "HITEC City, Gachibowli, Kondapur, Financial District",
      body: "English-first audiences who compare options online, order and book on their phones, and read Google reviews before they call. Search ads, landing pages and review growth do the heavy lifting here.",
    },
    {
      label: "Core city",
      title: "Kukatpally, Dilsukhnagar, Secunderabad, Old City",
      body: "Families and local shoppers who respond to Telugu-first content, Instagram Reels and WhatsApp conversations, and who trust word of mouth. Local reels, WhatsApp offers and on-ground activations work best here.",
    },
  ],
} as const

export const dmHydServices = {
  eyebrow: "Digital marketing services in Hyderabad",
  title: "Every channel your customers use, run by one team",
  body: "We recommend only the services your business needs, and connect them so ads, content and follow-up work together instead of competing for budget.",
  items: [
    {
      title: "Performance marketing",
      body: "Google, Meta, YouTube and LinkedIn ads managed for cost per lead and return on ad spend.",
      href: "/services/digital-marketing/performance-marketing/",
    },
    {
      title: "Growth marketing",
      body: "Funnel improvements, WhatsApp follow-ups and referral programs that make each customer cheaper to win.",
      href: "/services/digital-marketing/growth-marketing/",
    },
    {
      title: "Social media marketing",
      body: "Reels, content calendars and community management in English and Telugu.",
      href: "/services/digital-marketing/social/",
    },
    {
      title: "SEO, Google Maps & AI search",
      body: "Rank on Google, show up in the Maps pack and get named in ChatGPT, Gemini and AI Overviews.",
      href: "/services/digital-marketing/seo/",
    },
    {
      title: "Content marketing",
      body: "Website copy, articles and video scripts that answer customer questions and lead to enquiries.",
      href: "/services/digital-marketing/content/",
    },
    {
      title: "Website design & development",
      body: "Fast, mobile-first websites and landing pages built to turn visitors into calls.",
      href: "/website-development-company-hyderabad/",
    },
    {
      title: "WhatsApp & email marketing",
      body: "Automated journeys and broadcasts that bring first-time buyers back.",
      href: "/services/digital-marketing/whatsapp-marketing/",
    },
    {
      title: "Graphic design & Insta shoots",
      body: "Ad creatives, brand identity and in-house photo and reel shoots across Hyderabad.",
      href: "/services/digital-marketing/graphic-design/",
    },
    {
      title: "BTL activations, PR & reputation",
      body: "Mall, campus and residential activations tracked with QR codes and offer codes, plus PR and review management.",
      href: "/services/offline-marketing/",
    },
  ],
} as const

export const dmHydReporting = {
  eyebrow: "Monthly reporting",
  title: "What you see in your report every month",
  body: "You get numbers you can act on, sent every month and explained on a call. Likes and reach are included, but they are never the headline.",
  items: [
    {
      label: "Leads",
      title: "Enquiries by channel.",
      body: "Calls, WhatsApp chats and form leads, with the ad, post or search that brought each one.",
    },
    {
      label: "Cost",
      title: "Cost per lead and per customer.",
      body: "What you paid for each enquiry and each booking, admission or sale.",
    },
    {
      label: "Return",
      title: "Return on ad spend.",
      body: "Revenue that came back for every rupee spent on Google and Meta.",
    },
    {
      label: "Next",
      title: "What we change next month.",
      body: "The tests we ran, what won, and where the budget moves.",
    },
  ],
} as const

export const dmHydProcess = {
  eyebrow: "How we work",
  title: "From audit to steady growth in four stages",
  body: "A clear sequence, so you always know what is happening with your budget and why.",
  stages: [
    {
      stage: "Stage 1",
      title: "Diagnose",
      body: "We audit your ads, website, social and Google presence, then set targets for cost per lead and revenue.",
    },
    {
      stage: "Stage 2",
      title: "Launch",
      body: "Campaigns, creatives, landing pages and tracking go live within 2 weeks.",
    },
    {
      stage: "Stage 3",
      title: "Scale",
      body: "Weekly tests of audiences, offers and creatives. Budget moves to what brings enquiries.",
    },
    {
      stage: "Stage 4",
      title: "Compound",
      body: "SEO, content and repeat-customer journeys keep lowering your cost of winning customers.",
    },
  ],
} as const

export const dmHydIndustries = {
  eyebrow: "Industries",
  title: "Digital marketing for Hyderabad's local and growing brands",
  body: "Each industry buys differently. We bring a playbook built around how your customers decide.",
  items: [
    {
      title: "Clinics & hospitals",
      body: "Patient appointments, doctor branding, local SEO and review growth.",
      href: "/industries/healthcare/",
    },
    {
      title: "Restaurants & QSR",
      body: "Food shoots, Google Maps visibility, festival campaigns and footfall offers.",
      href: "/industries/restaurants/",
    },
    {
      title: "Salons & beauty",
      body: "Before-after reels, WhatsApp booking and bridal and membership offers.",
      href: "/industries/salons/",
    },
    {
      title: "Schools & colleges",
      body: "Admission funnels, parent targeting and campus activations.",
      href: "/industries/education/",
    },
    {
      title: "Real estate & furniture",
      body: "Site visit and showroom footfall ads, product shoots and lead qualification.",
      href: "/industries/real-estate-furniture/",
    },
    {
      title: "D2C, B2B & technology",
      body: "Online sales, LinkedIn campaigns, account-based content and website revamps.",
      href: "/industries/b2b-technology/",
    },
  ],
} as const

export const dmHydWhy = {
  eyebrow: "Why Digi Carotene",
  title: "Why Hyderabad businesses choose Digi Carotene",
  items: [
    {
      title: "Reported in leads and revenue",
      body: "Monthly reports on enquiries, cost per lead, return on ad spend and repeat customers.",
    },
    {
      title: "Every channel under one roof",
      body: "Ads, social, SEO, content, web, design and our in-house studio, so nothing is lost between vendors.",
    },
    {
      title: "English and Telugu content",
      body: "Copy, reels and ads written for how your customers speak, across both sides of the city.",
    },
    {
      title: "A team you can meet",
      body: "Our office is in Dwaraka Pride, HITEC City. Meet us in person, and we shoot on location across Hyderabad.",
    },
  ],
} as const

export const dmHydAreas = {
  eyebrow: "Digital marketing agency near you",
  title: "Serving businesses across Hyderabad and Secunderabad",
  body: "We work with businesses across the city and meet clients at our HITEC City office or at their location.",
  areas: [
    "HITEC City",
    "Madhapur",
    "Gachibowli",
    "Kondapur",
    "Jubilee Hills",
    "Banjara Hills",
    "Manikonda",
    "Financial District",
    "Kukatpally",
    "Miyapur",
    "Lingampally",
    "Nizampet",
    "Ameerpet",
    "Begumpet",
    "Secunderabad",
    "Somajiguda",
    "Himayatnagar",
    "Dilsukhnagar",
    "LB Nagar",
    "Uppal",
    "Attapur",
    "Kompally",
    "Tolichowki",
    "Narsingi",
  ],
} as const

/** FAQ copy matches FAQPage schema word for word (PDF §3 + §7). */
export const dmHydFaqs = [
  {
    question: "How much does digital marketing cost in Hyderabad?",
    answer:
      "Cost depends on which channels you need, how much content we produce each month and your ad budget. Ad spend is paid directly to Google and Meta, separate from our management fee. We do not sell fixed packages: call +91 99598 20874 and we will share a plan and a fixed monthly fee for your business.",
  },
  {
    question:
      "Which is the best digital marketing agency in Hyderabad for small businesses?",
    answer:
      "The right agency reports in enquiries and revenue, not just reach, and starts with the channels that pay back fastest. Digi Carotene works with clinics, salons, restaurants, schools, real estate and retail businesses across Hyderabad, with plans that start small and scale with results.",
  },
  {
    question: "How soon will I see results from digital marketing?",
    answer:
      "Paid ads on Google and Meta usually start bringing enquiries within the first few weeks after launch, and the first month is used to find the audiences and offers that work. SEO and Google Maps rankings build more slowly and usually take three to six months to show steady growth.",
  },
  {
    question:
      "What is the difference between performance marketing and growth marketing?",
    answer:
      "Performance marketing uses paid ads to bring in customers now, managed for cost per lead and return on ad spend. Growth marketing improves the whole funnel, with follow-ups, retention and referrals, so each customer costs less to win and is more likely to buy again.",
  },
  {
    question: "Do you create content in Telugu?",
    answer:
      "Yes. We write copy, reels and ads in English and Telugu, and plan the language for each campaign around the part of Hyderabad and the customers it is meant to reach.",
  },
  {
    question: "What do you report every month?",
    answer:
      "Enquiries by channel, cost per lead, cost per customer, return on ad spend and repeat customers, along with what we tested and where the budget moves next month.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. We serve clients across Hyderabad, Secunderabad, Bangalore and international markets. Clients outside India get a dedicated account manager, overlap hours in their time zone and reporting in their currency.",
  },
] as const

export const dmHydClosing = {
  eyebrow: "Get your plan",
  title: "Call us. Get a growth plan for your business.",
  body: "Tell us what you sell, where your customers are and what you spend on marketing today. We will tell you which channels to start with and what it will cost on the call.",
} as const
