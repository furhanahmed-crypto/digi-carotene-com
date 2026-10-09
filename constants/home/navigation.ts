import type { LucideIcon } from "lucide-react"
import {
  BookOpen,
  Building2,
  Cpu,
  FileBarChart,
  Globe2,
  GraduationCap,
  Handshake,
  Home,
  Hospital,
  LayoutGrid,
  MapPin,
  Newspaper,
  ScanSearch,
  Scissors,
  ShoppingBag,
  Users,
  UtensilsCrossed,
} from "lucide-react"

import { siteContact } from "@/constants/site/contact"

export type NavLinkItem = {
  title: string
  href: string
  description?: string
  icon?: LucideIcon
}

export type NavGroup = {
  title: string
  href?: string
  items?: NavLinkItem[]
}

export type NavItem =
  | { type: "link"; title: string; href: string }
  | { type: "dropdown"; title: string; items: NavLinkItem[] }
  | { type: "groups"; title: string; groups: NavGroup[] }

export const SITE_NAME = "Digi Carotene"

export const mainNav: NavItem[] = [
  { type: "link", title: "Home", href: "/" },
  {
    type: "dropdown",
    title: "About",
    items: [
      {
        title: "About Us",
        href: "/about",
        description: "Who we are and how we grow brands.",
        icon: Building2,
      },
      {
        title: "Team",
        href: "/about/team",
        description: "The people behind Digi Carotene.",
        icon: Users,
      },
      {
        title: "Founder's Story",
        href: "/about/founders-story",
        description: "The origin and vision of the agency.",
        icon: BookOpen,
      },
      {
        title: "Clients & Global Presence",
        href: "/about/clients",
        description: "Brands in Hyderabad, India and worldwide.",
        icon: Handshake,
      },
    ],
  },
  {
    type: "dropdown",
    title: "Industries",
    items: [
      {
        title: "Healthcare & Clinics",
        href: "/industries/healthcare",
        description: "Patient acquisition and clinic growth.",
        icon: Hospital,
      },
      {
        title: "Restaurants & QSR",
        href: "/industries/restaurants",
        description: "Footfall, delivery and food content.",
        icon: UtensilsCrossed,
      },
      {
        title: "Salons & Beauty",
        href: "/industries/salons",
        description: "Reels, bookings and reviews.",
        icon: Scissors,
      },
      {
        title: "Education",
        href: "/industries/education",
        description: "Admissions funnels and campus.",
        icon: GraduationCap,
      },
      {
        title: "Real Estate & Furniture",
        href: "/industries/real-estate-furniture",
        description: "Showroom leads and shoots.",
        icon: Home,
      },
      {
        title: "D2C & Retail",
        href: "/industries/d2c-retail",
        description: "E-commerce ads and brand systems.",
        icon: ShoppingBag,
      },
      {
        title: "B2B & Technology",
        href: "/industries/b2b-technology",
        description: "LinkedIn, ABM and GEO for B2B.",
        icon: Cpu,
      },
      {
        title: "All Industries",
        href: "/industries",
        description: "Browse every industry practice.",
        icon: LayoutGrid,
      },
    ],
  },
  {
    type: "groups",
    title: "Services",
    groups: [
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        items: [
          { title: "Performance Marketing", href: "/services/digital-marketing/performance-marketing" },
          { title: "Growth Marketing", href: "/services/digital-marketing/growth-marketing" },
          {
            title: "Search Engine Optimization",
            href: "/services/digital-marketing/seo",
          },
          {
            title: "Content Marketing",
            href: "/services/digital-marketing/content",
          },
          {
            title: "Social Media Marketing",
            href: "/services/digital-marketing/social",
          },
          {
            title: "Graphic Designing",
            href: "/services/digital-marketing/graphic-design",
          },
          {
            title: "Web-Design & Development",
            href: "/services/digital-marketing/web",
          },
          {
            title: "Personal Branding",
            href: "/services/digital-marketing/personal-branding",
          },
          {
            title: "Email Marketing",
            href: "/services/digital-marketing/email",
          },
          {
            title: "Insta Shoot",
            href: "/services/digital-marketing/insta-shoot",
          },
          {
            title: "WhatsApp Marketing",
            href: "/services/digital-marketing/whatsapp-marketing",
          },
          {
            title: "Online Reputation Management",
            href: "/services/digital-marketing/orm",
          },
        ],
      },
      {
        title: "Offline Marketing",
        href: "/services/offline-marketing",
        items: [
          {
            title: "Mall Activations",
            href: "/services/offline-marketing/mall-activations",
          },
          {
            title: "Residential Activations",
            href: "/services/offline-marketing/residential-activations",
          },
          {
            title: "Theatre Marketing",
            href: "/services/offline-marketing/theatre-marketing",
          },
          {
            title: "Campus Activations",
            href: "/services/offline-marketing/campus-activations",
          },
          {
            title: "Corporate Events",
            href: "/services/offline-marketing/corporate-events",
          },
          {
            title: "Festival Marketing",
            href: "/services/offline-marketing/festival-marketing",
          },
          {
            title: "Popup-stores",
            href: "/services/offline-marketing/popup-stores",
          },
          {
            title: "Influencer Campaigns",
            href: "/services/offline-marketing/influencer-campaigns",
          },
          {
            title: "Metro Branding",
            href: "/services/offline-marketing/metro-branding",
          },
        ],
      },
      {
        title: "PR Services",
        href: "/services/pr",
      },
    ],
  },
  {
    type: "dropdown",
    title: "Locations",
    items: [
      {
        title: "Hyderabad",
        href: "/digital-marketing-agency-hyderabad",
        description: "Local SEO, ads, social and activations.",
        icon: MapPin,
      },
      {
        title: "Bangalore",
        href: "/digital-marketing-agency-bangalore",
        description: "Serving Bangalore brands from Hyderabad.",
        icon: MapPin,
      },
      {
        title: "Global",
        href: "/global",
        description: "USA, UAE, UK, APAC and diaspora brands.",
        icon: Globe2,
      },
    ],
  },
  {
    type: "dropdown",
    title: "Resources",
    items: [
      {
        title: "The Journal",
        href: "/blog",
        description: "Insights on SEO, AEO, GEO, and growth.",
        icon: Newspaper,
      },
      {
        title: "Case Studies",
        href: "/growth-scenarios",
        description: "Results and stories from real campaigns.",
        icon: FileBarChart,
      },
      {
        title: "Free GEO & AEO Scan",
        href: "/contact",
        description: "Request a free discovery audit.",
        icon: ScanSearch,
      },
    ],
  },
  {
    type: "link",
    title: "Contact Us",
    href: "/contact",
  },
]

export const contactHref = "/contact"

/** WhatsApp deep link — number from digicarotene.com. */
export const whatsappHref = siteContact.whatsappHref

export { siteContact }
