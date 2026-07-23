"use client"

import {
  MapPin,
  Building,
  Film,
  GraduationCap,
  Briefcase,
  Sparkles,
  ShoppingBag,
  Users,
  Train,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const offlineServices = [
  {
    title: "Mall Activations",
    description: "Engaging high-intent retail crowds with interactive popups, product sensory booths, and direct-to-consumer experiences.",
    icon: MapPin,
    href: "/services/offline-marketing/mall-activations"
  },
  {
    title: "Residential Activations",
    description: "Hyper-local community targeting inside premium residential complexes, establishing direct neighborhood trust and trials.",
    icon: Building,
    href: "/services/offline-marketing/residential-activations"
  },
  {
    title: "Theatre Marketing",
    description: "Capturing high-attention cinema audiences through immersive pre-show displays, on-screen ads, and foyer branding.",
    icon: Film,
    href: "/services/offline-marketing/theatre-marketing"
  },
  {
    title: "Campus Activations",
    description: "Connect directly with Gen-Z and student demographics on university campuses through lively festivals, student bootcamps, and brand sponsorships.",
    icon: GraduationCap,
    href: "/services/offline-marketing/campus-activations"
  },
  {
    title: "Corporate Events",
    description: "Designing end-to-end corporate gatherings, executive product launches, summits, and customized workplace experiences.",
    icon: Briefcase,
    href: "/services/offline-marketing/corporate-events"
  },
  {
    title: "Festival Marketing",
    description: "Riding the wave of cultural attention during major public events and community festivals with high-visibility brand booths.",
    icon: Sparkles,
    href: "/services/offline-marketing/festival-marketing"
  },
  {
    title: "Popup-stores",
    description: "Bespoke, temporary physical retail spaces built to create brand urgency, visual storytelling, and high media hype.",
    icon: ShoppingBag,
    href: "/services/offline-marketing/popup-stores"
  },
  {
    title: "Influencer Campaigns",
    description: "Bridging the online-offline gap by aligning local macro/micro-influencers to show up and broadcast your physical events.",
    icon: Users,
    href: "/services/offline-marketing/influencer-campaigns"
  },
  {
    title: "Metro Branding",
    description: "Dominating daily high-frequency urban transit lines with high-impact platform banners, train wraps, and digital screen takeovers.",
    icon: Train,
    href: "/services/offline-marketing/metro-branding"
  }
]

export function OfflineActivations() {
  return (
    <section className="py-24 md:py-32 border-t border-border/50 bg-[radial-gradient(circle_at_bottom,rgba(255,80,0,0.03),transparent_40%)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Header/Narrative Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-3 block">
              Offline Marketing & Experiential
            </span>
            <h2 className="font-lustria text-3xl md:text-4xl font-normal tracking-tight mb-6 leading-tight">
              Real-World Impact. Direct Connections.
            </h2>
            <p className="text-muted-foreground font-sans font-light text-sm md:text-base leading-relaxed mb-8">
              Digital doesn&apos;t live in a vacuum. True brand affinity is forged in high-traffic physical nodes. We concept, produce, and deploy premium experiential marketing activations that turn local attention into immediate, measurable brand footprint lift.
            </p>
            <div className="rounded-xl border border-border/80 bg-card/40 p-4 font-mono text-xs text-muted-foreground">
              <span className="text-primary font-bold">Experiential KPI:</span> Zero leak transitions from offline footprint scans to online pipelines.
            </div>
          </div>

          {/* Grid Side */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {offlineServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group relative rounded-xl border border-border bg-card/30 p-5 hover:bg-card/50 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="font-lustria text-base font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light mb-4">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-muted-foreground group-hover:text-primary transition-colors group/link"
                  >
                    View Activation Spec
                    <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
