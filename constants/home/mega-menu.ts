import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Briefcase,
  Building2,
  Clapperboard,
  Globe2,
  GraduationCap,
  Megaphone,
  Mic2,
  MonitorSmartphone,
  Newspaper,
  Search,
  Share2,
  Sparkles,
  Target,
  Train,
  Users,
  Wand2,
} from "lucide-react"

export type MegaMenuItem = {
  title: string
  href: string
  description: string
  icon: LucideIcon
}

export const serviceMegaItems: MegaMenuItem[] = [
  {
    title: "SEO",
    href: "/services/digital-marketing/seo",
    description: "Rank on Google with technical, on-page, and authority SEO.",
    icon: Search,
  },
  {
    title: "AEO & GEO",
    href: "/services/digital-marketing/seo",
    description: "Get cited by ChatGPT, Gemini, Perplexity, and AI Overviews.",
    icon: Sparkles,
  },
  {
    title: "Performance Marketing",
    href: "/services/digital-marketing/performance-marketing",
    description: "ROI-focused ads across Google, Meta, and more.",
    icon: BarChart3,
  },
  {
    title: "Social Media Marketing",
    href: "/services/digital-marketing/social",
    description: "Community, content, and paid social that drives demand.",
    icon: Share2,
  },
  {
    title: "Web Design & Dev",
    href: "/services/digital-marketing/web",
    description: "Fast, conversion-focused sites built for discovery.",
    icon: MonitorSmartphone,
  },
  {
    title: "Content & Branding",
    href: "/services/digital-marketing/content",
    description: "Brand story, creative, and content that compounds.",
    icon: Wand2,
  },
  {
    title: "Personal Branding",
    href: "/services/digital-marketing/personal-branding",
    description: "Position founders as the authority AI and media cite.",
    icon: Users,
  },
  {
    title: "Insta Shoot / Reels",
    href: "/services/digital-marketing/insta-shoot",
    description: "Short-form video production that proves the craft.",
    icon: Clapperboard,
  },
  {
    title: "Mall Activations",
    href: "/services/offline-marketing/mall-activations",
    description: "High-intent retail experiences with measurable follow-up.",
    icon: Building2,
  },
  {
    title: "Campus Activations",
    href: "/services/offline-marketing/campus-activations",
    description: "Youth-facing activations that route intent into digital.",
    icon: GraduationCap,
  },
  {
    title: "Theatre & Metro",
    href: "/services/offline-marketing/theatre-marketing",
    description: "High-attention cinema and transit brand presence.",
    icon: Train,
  },
  {
    title: "Corporate Events",
    href: "/services/offline-marketing/corporate-events",
    description: "Launches and summits with pipeline-ready journeys.",
    icon: Briefcase,
  },
  {
    title: "Influencer Campaigns",
    href: "/services/offline-marketing/influencer-campaigns",
    description: "Creators that bridge online reach and offline moments.",
    icon: Megaphone,
  },
  {
    title: "PR Services",
    href: "/services/pr",
    description: "Narrative, press, and brand voice that fuels citations.",
    icon: Newspaper,
  },
  {
    title: "Growth Marketing",
    href: "/services/digital-marketing/growth-marketing",
    description: "Full-funnel experimentation for scalable acquisition.",
    icon: Target,
  },
  {
    title: "Local Presence",
    href: "/services/digital-marketing",
    description: "Maps, neighbourhood visibility, and local discovery.",
    icon: Globe2,
  },
]

export const serviceMegaFooter = {
  label: "View all services",
  href: "/services/digital-marketing",
  icon: Mic2,
}
