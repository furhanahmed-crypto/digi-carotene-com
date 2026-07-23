"use client"

import {
  TrendingUp,
  Search,
  BookOpen,
  Share2,
  Palette,
  Laptop,
  User,
  Mail,
  Camera,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

const digitalServices = [
  {
    title: "Pay Per Click",
    description: "Highly targeted, high-intent paid search and social campaigns that convert impressions into pipeline and profit.",
    icon: TrendingUp,
    href: "/services/digital-marketing/ppc"
  },
  {
    title: "Search Engine Optimization",
    description: "Traditional and conversational organic search positioning that keeps your brand authority first on Google.",
    icon: Search,
    href: "/services/digital-marketing/seo"
  },
  {
    title: "Content Marketing",
    description: "Publishing on-brand, rich copy and storytelling assets designed to answer audience queries and fuel SEO/AEO pipelines.",
    icon: BookOpen,
    href: "/services/digital-marketing/content"
  },
  {
    title: "Social Media Marketing",
    description: "Dynamic community building, brand narrative distribution, and platform-specific content that drives viral engagement.",
    icon: Share2,
    href: "/services/digital-marketing/social"
  },
  {
    title: "Graphic Designing",
    description: "High-end visual identities, bespoke brand graphics, and presentation assets that reflect premium brand design standards.",
    icon: Palette,
    href: "/services/digital-marketing/graphic-design"
  },
  {
    title: "Web-Design & Development",
    description: "Bespoke, blazingly fast websites built with Framer-level motion details and fully optimized SEO/AEO architectures.",
    icon: Laptop,
    href: "/services/digital-marketing/web"
  },
  {
    title: "Personal Branding",
    description: "Positioning founders, executives, and leaders as key industry authorities through guided storytelling and profile optimization.",
    icon: User,
    href: "/services/digital-marketing/personal-branding"
  },
  {
    title: "Email Marketing",
    description: "Direct-to-human, beautifully typeset email communications that avoid spam folders and foster direct customer relations.",
    icon: Mail,
    href: "/services/digital-marketing/email"
  },
  {
    title: "Insta Shoot",
    description: "Bespoke brand and content shoots tailored for high-quality social reels, campaigns, and immediate marketing deployment.",
    icon: Camera,
    href: "/services/digital-marketing/insta-shoot"
  }
]

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-3 block">
            Digital Capabilities
          </span>
          <h2 className="font-lustria text-3xl md:text-4xl font-normal tracking-tight mb-4">
            Unified Digital Marketing Ecosystem
          </h2>
          <p className="text-muted-foreground font-sans font-light">
            We operate at the intersection of technical precision and artistic brand craft, scaling your presence across every digital touchpoint.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalServices.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl border border-border/80 bg-card/30 p-6 hover:bg-card/50 hover:border-primary/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon box */}
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 text-primary mb-5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                    <Icon className="size-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-lustria text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Arrow CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary group/link"
                >
                  Learn More 
                  <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>

                {/* Subtly glowing grid card border */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
