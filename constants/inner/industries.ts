import type { IndustryData, IndustrySlug } from "@/types/inner-pages"

const s = (title: string) => ({
  title,
  body: `${title} planned, executed and reported as part of one growth system for this sector.`,
})

const caseStudy = {
  title: "Case Study",
  body: "Named sector case studies with approved metrics publish here once clients sign off.",
}

const dm = "/services/digital-marketing"
const offline = "/services/offline-marketing"

/** Industries hub + detail outline — v2 PDF, "Industries pages (NEW)". */
export const industries: readonly IndustryData[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Clinics",
    h1: "Healthcare and Hospital Marketing Agency in Hyderabad",
    sections: [
      s("Patient Acquisition Ads"),
      s("Doctor Personal Branding"),
      s("Local SEO for Clinics"),
      s("Reviews and ORM"),
      s("Compliant Medical Content"),
      caseStudy,
    ],
    relatedServices: [
      { title: "Performance Marketing", href: `${dm}/performance-marketing` },
      { title: "SEO, AEO & GEO", href: `${dm}/seo` },
      { title: "Personal Branding", href: `${dm}/personal-branding` },
      { title: "Online Reputation Management", href: `${dm}/orm` },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants & QSR",
    h1: "Restaurant and QSR Marketing Agency in Hyderabad",
    sections: [
      s("Food Shoots and Reels"),
      s("Zomato/Swiggy and Maps Visibility"),
      s("Festival and Event Campaigns"),
      s("Influencer Visits"),
      s("Footfall Offers"),
      caseStudy,
    ],
    relatedServices: [
      { title: "Insta Shoot", href: `${dm}/insta-shoot` },
      { title: "Social Media Marketing", href: `${dm}/social` },
      {
        title: "Influencer Campaigns",
        href: `${offline}/influencer-campaigns`,
      },
      { title: "SEO, AEO & GEO", href: `${dm}/seo` },
    ],
  },
  {
    slug: "salons",
    name: "Salons & Beauty",
    h1: "Salon and Beauty Marketing Agency in Hyderabad",
    sections: [
      s("Before-After Reels"),
      s("Booking via WhatsApp"),
      s("Offers and Memberships"),
      s("Franchise Outlet Marketing"),
      s("Reviews"),
    ],
    relatedServices: [
      { title: "Social Media Marketing", href: `${dm}/social` },
      {
        title: "WhatsApp Marketing & Automation",
        href: `${dm}/whatsapp-marketing`,
      },
      { title: "Insta Shoot", href: `${dm}/insta-shoot` },
      { title: "Online Reputation Management", href: `${dm}/orm` },
    ],
  },
  {
    slug: "education",
    name: "Education",
    h1: "Education Marketing Agency — Admissions Campaigns for Colleges and Institutes",
    sections: [
      s("Admissions Funnels"),
      s("Campus Activations"),
      s("Program Pages that Rank"),
      s("Student Testimonials"),
      s("Parent Targeting"),
    ],
    relatedServices: [
      { title: "Performance Marketing", href: `${dm}/performance-marketing` },
      { title: "Campus Activations", href: `${offline}/campus-activations` },
      { title: "SEO, AEO & GEO", href: `${dm}/seo` },
      { title: "Content Marketing", href: `${dm}/content` },
    ],
  },
  {
    slug: "real-estate-furniture",
    name: "Real Estate & Furniture",
    h1: "Real Estate and Furniture Marketing in Hyderabad",
    sections: [
      s("Showroom Footfall Ads"),
      s("Product Shoots"),
      s("Lead Qualification"),
      s("Site Visits"),
    ],
    relatedServices: [
      { title: "Performance Marketing", href: `${dm}/performance-marketing` },
      { title: "Insta Shoot", href: `${dm}/insta-shoot` },
      { title: "Web Design & Development", href: `${dm}/web` },
      {
        title: "WhatsApp Marketing & Automation",
        href: `${dm}/whatsapp-marketing`,
      },
    ],
  },
  {
    slug: "d2c-retail",
    name: "D2C & Retail",
    h1: "D2C, Food and Retail Brand Marketing",
    sections: [
      s("Brand Positioning"),
      s("E-commerce Ads"),
      s("Content and Shoots"),
      s("Pop-ups"),
      s("Marketplaces"),
    ],
    relatedServices: [
      { title: "Performance Marketing", href: `${dm}/performance-marketing` },
      { title: "Pop-up Stores", href: `${offline}/popup-stores` },
      { title: "Content Marketing", href: `${dm}/content` },
      { title: "Email Marketing", href: `${dm}/email` },
    ],
  },
  {
    slug: "b2b-technology",
    name: "B2B & Technology",
    h1: "B2B and Technology Marketing for Indian and Global Companies",
    sections: [
      s("LinkedIn Marketing"),
      s("Account-Based Content"),
      s("Sales Decks"),
      s("Website Revamps"),
      s("GEO for B2B"),
    ],
    relatedServices: [
      { title: "Performance Marketing", href: `${dm}/performance-marketing` },
      { title: "Content Marketing", href: `${dm}/content` },
      { title: "Web Design & Development", href: `${dm}/web` },
      { title: "SEO, AEO & GEO", href: `${dm}/seo` },
    ],
  },
] as const

export const industrySlugs = industries.map((i) => i.slug) as IndustrySlug[]

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)
}
