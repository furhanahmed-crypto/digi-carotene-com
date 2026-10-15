import { siteContact } from "@/constants/site/contact"

/** Canonical content — Digi_Carotene_Website_Development_Landing_Page_Dev_Spec.pdf */
export const WEBSITE_DEV_HYD_PATH =
  "/website-development-company-hyderabad" as const

export const websiteDevQuoteWhatsappHref = `${siteContact.whatsappHref}?text=${encodeURIComponent(
  "Hi Digi Carotene, I want a quote for a website."
)}`

export const websiteDevHydMeta = {
  title: "Website Development Company in Hyderabad | Digi Carotene",
  description:
    "Website development company in Hyderabad. Fast, mobile-first business websites, landing pages and e-commerce, live in as little as 7 days. Call Digi Carotene for a quote.",
  ogDescription:
    "Business websites, landing pages and e-commerce built by a performance marketing team. Live in as little as 7 days. Call for a quote.",
} as const

export const websiteDevHydHero = {
  eyebrow: "Web design & development · HITEC City, Hyderabad",
  h1: "Website Development Company in Hyderabad. Live in 7 days.",
  body: "Digi Carotene builds fast, mobile-first websites for Hyderabad businesses that need more calls and enquiries, not just a nice-looking homepage. Your site is designed, built and launched by the same team that runs performance marketing for 300+ brands.",
  priceNote:
    "Prices are shared on a quick call. Tell us your business and pages, and we quote a fixed price in 10 minutes.",
  proofs: [
    "7+ years in digital marketing",
    "300+ brands served",
    "Office in HITEC City, Madhapur",
  ],
} as const

export const websiteDevHydPain = {
  eyebrow: "Why most business websites fail",
  title: "Your website should be your best salesperson in Hyderabad.",
  body: "Every ad rupee, Instagram post and Google search ends on your website. When the site leaks, every channel leaks with it. These are the four leaks we fix most often.",
  items: [
    {
      label: "Speed",
      title: "It loads slowly on mobile.",
      body: "Most of your visitors are on a phone, often on mobile data. A slow page loses them before your name appears.",
    },
    {
      label: "Clarity",
      title: "Visitors cannot tell what you offer.",
      body: "Vague headlines and buried service pages make people go back to Google and pick the next result.",
    },
    {
      label: "Contact",
      title: "There is no easy way to reach you.",
      body: "No WhatsApp button, a form three clicks deep, a phone number in the footer only.",
    },
    {
      label: "Tracking",
      title: "You cannot see which enquiries came from where.",
      body: "Without analytics and pixel setup, you cannot tell which ads or posts are paying for themselves.",
    },
  ],
} as const

export const websiteDevHydServices = {
  eyebrow: "Website development services",
  title: "What we build for Hyderabad businesses",
  body: "From a five-page business website to a full online store or booking system, built and supported by one team in HITEC City.",
  items: [
    {
      title: "Business websites",
      body: "Clear, fast websites for clinics, salons, restaurants, schools and local service businesses, with enquiry forms and WhatsApp built in.",
    },
    {
      title: "Landing pages for ads",
      body: "Single-purpose pages for Google and Meta campaigns, built to turn paid clicks into calls and leads.",
    },
    {
      title: "Website redesign",
      body: "Rebuild an old or slow site on a modern, mobile-first layout while keeping your Google rankings and URLs safe.",
    },
    {
      title: "E-commerce websites",
      body: "Online stores with product catalogues, payment gateways, delivery settings and order notifications.",
    },
    {
      title: "Booking & custom platforms",
      body: "Appointment booking, product configurators, learning platforms and integrations with Zoho, CRMs and WhatsApp.",
    },
    {
      title: "WordPress development",
      body: "Websites on WordPress with one tested page builder and plugin set, so your team can edit content without calling a developer.",
    },
  ],
} as const

export const websiteDevHydPackages = {
  eyebrow: "Website packages",
  title: "Pick the package that fits your stage. Get the price on a call.",
  body: "Each package adds what the one before it leaves out. Every price is fixed and written into your proposal before work starts.",
  afterLaunch:
    "After launch: a monthly care plan covers hosting, domain, updates and small edits.",
  growthPlan:
    "Want to grow? A monthly growth plan adds local SEO, Google Business Profile posts and a new landing page every month.",
  items: [
    {
      id: "silver" as const,
      title: "Silver Website",
      badge: "Live in 7 days",
      body: "For new businesses that need a professional site online this week.",
      features: [
        "Up to 5 pages",
        "Custom design from your industry kit",
        "Mobile-friendly layout",
        "WhatsApp button and enquiry form",
      ],
      priceLabel: "Price on call",
      ctaLabel: "Call for price",
      buttonLocation: "package_silver",
      highlighted: false,
    },
    {
      id: "gold" as const,
      title: "Gold Website",
      badge: "Live in 10 days",
      body: "For businesses running ads or posting on Instagram that want to count results.",
      features: [
        "Everything in Silver",
        "Up to 8 pages",
        "Google Analytics 4 setup",
        "Meta pixel setup",
        "Google Business Profile creation",
      ],
      priceLabel: "Price on call",
      ctaLabel: "Call for price",
      buttonLocation: "package_gold",
      highlighted: true,
    },
    {
      id: "diamond" as const,
      title: "Diamond Website",
      badge: "About 21 days",
      body: "For businesses that want the website to rank on Google and feed a lead pipeline.",
      features: [
        "Everything in Gold",
        "Up to 10 pages",
        "On-page SEO basics",
        "2 ad landing pages",
        "Conversion tracking",
        "Leads into a sheet or CRM",
        "1 month of ads management",
      ],
      priceLabel: "Price on call",
      ctaLabel: "Call for price",
      buttonLocation: "package_diamond",
      highlighted: false,
      featureLink: {
        href: "/services/digital-marketing/performance-marketing/",
        label: "ads management",
        match: "1 month of ads management",
      },
    },
    {
      id: "custom" as const,
      title: "Custom Platform",
      badge: "4–8 weeks",
      body: "For projects with logic: payments, bookings, logins or integrations.",
      features: [
        "E-commerce stores",
        "Booking systems",
        "Product configurators",
        "Learning platforms",
        "CRM and API integrations",
      ],
      priceLabel: "Quoted per project",
      ctaLabel: "Discuss your project",
      buttonLocation: "package_custom",
      highlighted: false,
    },
  ],
} as const

export const websiteDevHydTimeline = {
  eyebrow: "How a 7-day website gets built",
  title: "From kickoff call to live website in one week",
  body: "A Silver website follows a fixed seven-day sprint with two review points, so you always know what happens next.",
  note: "The 7 days start once payment and all your content are received. Short on good photos? Our in-house studio can shoot your space, team and products.",
  steps: [
    {
      day: "Day 0",
      title: "Kickoff",
      body: "30-minute call, intake form and content checklist: logo, photos, services and reviews.",
    },
    {
      day: "Day 1",
      title: "Plan & copy",
      body: "Sitemap and page copy written for your business and checked by our copywriter.",
    },
    {
      day: "Days 2–3",
      title: "Design",
      body: "Pages designed from your industry section kit. You review and request changes.",
    },
    {
      day: "Days 4–5",
      title: "Build",
      body: "All pages built, enquiry form and WhatsApp connected.",
    },
    {
      day: "Day 6",
      title: "Test",
      body: "Mobile, speed and form checks. Second review on a private preview link.",
    },
    {
      day: "Day 7",
      title: "Launch",
      body: "Go-live, a short handover video, and your site is ready to take enquiries.",
    },
  ],
} as const

export const websiteDevHydIndustries = {
  eyebrow: "Industry websites",
  title: "Websites designed around how your customers decide",
  body: "We keep tested page layouts for each industry, so your site starts from what works for clinics, salons or restaurants instead of a blank page.",
  pills: [
    { label: "Clinic & hospital websites", href: "/industries/healthcare/" },
    { label: "Salon & spa websites", href: "/industries/salons/" },
    { label: "Restaurant & café websites", href: "/industries/restaurants/" },
    {
      label: "Real estate websites",
      href: "/industries/real-estate-furniture/",
    },
    {
      label: "Furniture & décor websites",
      href: "/industries/real-estate-furniture/",
    },
    { label: "School & college websites", href: "/industries/education/" },
    { label: "Food brand & D2C websites", href: "/industries/d2c-retail/" },
    { label: "B2B & IT company websites", href: "/industries/b2b-technology/" },
  ],
} as const

export const websiteDevHydWhy = {
  eyebrow: "Why Digi Carotene",
  title: "A website company that also runs your marketing",
  items: [
    {
      title: "Built by marketers",
      body: "We run Google, Meta and WhatsApp campaigns every day, so we design pages around the enquiry, not the decoration.",
    },
    {
      title: "Fixed scope, fixed timeline",
      body: "Pages, features, revision rounds and launch date are written into the proposal before we start.",
    },
    {
      title: "Local team you can meet",
      body: "Our office is in Dwaraka Pride, HITEC City. Meet us in person or on a call, and shoot on location with our studio team.",
    },
    {
      title: "Support after launch",
      body: "Hosting, updates and small edits are handled on a monthly care plan, so your site never sits broken or outdated.",
    },
  ],
} as const

export const websiteDevHydAreas = {
  eyebrow: "Website design company near you",
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
export const websiteDevHydFaqs = [
  {
    question: "How much does website development cost in Hyderabad?",
    answer:
      "Cost depends on the number of pages, features such as booking or payments, and whether you need tracking, Google Business Profile setup and SEO. Digi Carotene has fixed-scope Silver, Gold and Diamond packages plus custom quotes for platforms. Call +91 99598 20874 and we will tell you the exact price for your business on a 10-minute call.",
  },
  {
    question: "How long does it take to build a business website?",
    answer:
      "A Silver website goes live in 7 days, a Gold website in 10 days and a Diamond website in about 21 days. E-commerce and custom platforms take 4 to 8 weeks. The clock starts once payment and your content (logo, photos, services) are received.",
  },
  {
    question: "Which is the best website design company near me in Hyderabad?",
    answer:
      "Look for a company that shows live examples, fixes scope and timelines in writing, sets up tracking so you can count enquiries, and is close enough to meet. Digi Carotene works from HITEC City, Madhapur, and builds websites for clinics, salons, restaurants, schools, real estate and furniture brands across Hyderabad and Secunderabad.",
  },
  {
    question: "Will my website rank on Google?",
    answer:
      "Every site is built fast, mobile-first and with a clean structure Google can crawl. The Diamond package adds on-page SEO, and the monthly growth plan adds local SEO and Google Business Profile posts for businesses that want to rank for searches in their area.",
  },
  {
    question: "Which platform do you build websites on?",
    answer:
      "Business websites are built on WordPress with a single page builder and plugin set, so they are fast, secure and easy for you to edit. Custom platforms use the stack that suits the project.",
  },
  {
    question: "Do you provide hosting and maintenance after launch?",
    answer:
      "Yes. A monthly care plan covers domain and hosting renewals, updates, backups and small edits, so the website keeps working without you managing it.",
  },
] as const

export const websiteDevHydClosing = {
  eyebrow: "Get your price",
  title: "Call us. Get a fixed website quote in 10 minutes.",
  body: "Tell us about your business, the pages you need and when you want to go live. We will suggest the right package and give you the exact price on the call.",
} as const
