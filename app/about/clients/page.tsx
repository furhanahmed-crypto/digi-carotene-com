"use client"

import * as React from "react"
import { ArrowRight, Building, Sparkles } from "lucide-react"
import Link from "next/link"
import { useLenis } from "lenis/react"

import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

type ClientCard = {
  name: string
  services: string
  description: string
  themeColor: string
  accentText: string
  bgGradient: string
  mark: React.ReactNode
}

const clients: ClientCard[] = [
  {
    name: "Google",
    services: "SEO · Content · AEO",
    description:
      "Organic search architecture and answer-engine content systems to strengthen discovery across Search and AI surfaces.",
    themeColor: "group-hover:border-blue-500/20 hover:shadow-blue-500/5",
    accentText: "text-blue-500",
    bgGradient: "from-blue-500/5",
    mark: (
      <svg viewBox="0 0 24 24" className="h-12 w-12" aria-hidden>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: "Amazon",
    services: "PPC · Marketplace · Email",
    description:
      "High-intent paid acquisition, marketplace narrative, and lifecycle email that convert browsers into repeat buyers.",
    themeColor: "group-hover:border-amber-500/20 hover:shadow-amber-500/5",
    accentText: "text-amber-500",
    bgGradient: "from-amber-500/5",
    mark: (
      <div className="flex flex-col items-center leading-none text-foreground">
        <span className="text-2xl font-bold tracking-tight">amazon</span>
        <svg viewBox="0 0 64 16" className="mt-1 h-3.5 w-16" aria-hidden>
          <path
            d="M4 6c10 10 36 12 56 2"
            fill="none"
            stroke="#FF9900"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Apple",
    services: "Brand · Web · Content",
    description:
      "Premium brand storytelling, performance web experiences, and editorial content aligned to product launch moments.",
    themeColor: "group-hover:border-zinc-400/30 hover:shadow-zinc-500/5",
    accentText: "text-foreground",
    bgGradient: "from-zinc-500/5",
    mark: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 text-foreground" fill="currentColor" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    name: "Flipkart",
    services: "Mall Activations · Social · Influencer",
    description:
      "City-wide mall activations, social amplification, and influencer campaigns that turn festival traffic into measurable retail lift.",
    themeColor: "group-hover:border-sky-500/20 hover:shadow-sky-500/5",
    accentText: "text-sky-500",
    bgGradient: "from-sky-500/5",
    mark: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="h-10 w-10 shrink-0" fill="#FFE11B" aria-hidden>
          <path d="M3.833 1.333a.993.993 0 0 0-.333.061V1c0-.551.449-1 1-1h14.667c.551 0 1 .449 1 1v.333H3.833zm17.334 2.334H2.833c-.551 0-1 .449-1 1V23c0 .551.449 1 1 1h7.3l1.098-5.645h-2.24c-.051 0-5.158-.241-5.158-.241l4.639-.327-.078-.366-1.978-.285 1.882-.158-.124-.449-3.075-.467s3.341-.373 3.392-.373h3.232l.247-1.331c.289-1.616.945-2.807 1.973-3.693 1.033-.892 2.344-1.332 3.937-1.332.643 0 1.053.151 1.231.463.118.186.201.516.279.859.074.352.14.671.095.903-.057.345-.461.465-1.197.465h-.253c-1.327 0-2.134.763-2.405 2.31l-.243 1.355h1.54c.574 0 .781.402.622 1.306-.17.941-.539 1.36-1.111 1.36H14.9L13.804 24h7.362c.551 0 1-.449 1-1V4.667a1 1 0 0 0-.999-1zM20.5 2.333A.334.334 0 0 0 20.167 2H3.833a.334.334 0 0 0-.333.333V3h17v-.667z" />
        </svg>
        <span className="text-lg font-bold italic tracking-tight text-[#047BD5]">
          Flipkart
        </span>
      </div>
    ),
  },
  {
    name: "Microsoft",
    services: "SEO · Personal Branding · PR",
    description:
      "Thought-leadership SEO, executive personal branding, and PR narratives that position product teams as category authorities.",
    themeColor: "group-hover:border-cyan-500/20 hover:shadow-cyan-500/5",
    accentText: "text-cyan-500",
    bgGradient: "from-cyan-500/5",
    mark: (
      <div className="flex items-center gap-2.5 text-foreground">
        <svg viewBox="0 0 23 23" className="size-9" aria-hidden>
          <path fill="#f35325" d="M1 1h10v10H1z" />
          <path fill="#81bc06" d="M12 1h10v10H12z" />
          <path fill="#05a6f0" d="M1 12h10v10H1z" />
          <path fill="#ffba08" d="M12 12h10v10H12z" />
        </svg>
        <span className="text-lg font-semibold tracking-tight">Microsoft</span>
      </div>
    ),
  },
  {
    name: "Meta",
    services: "Social · PPC · Creative",
    description:
      "Always-on social systems, paid social funnels, and creative packages tuned for feed, Reels, and community growth.",
    themeColor: "group-hover:border-indigo-500/20 hover:shadow-indigo-500/5",
    accentText: "text-indigo-500",
    bgGradient: "from-indigo-500/5",
    mark: (
      <span className="text-3xl font-semibold tracking-tight text-foreground">
        meta
      </span>
    ),
  },
  {
    name: "Netflix",
    services: "Content · Social · Insta Shoot",
    description:
      "Launch content calendars, social storytelling, and production shoots that keep series and originals culturally visible.",
    themeColor: "group-hover:border-red-500/20 hover:shadow-red-500/5",
    accentText: "text-red-500",
    bgGradient: "from-red-500/5",
    mark: (
      <span className="text-xl font-bold tracking-[0.14em] text-[#E50914]">
        NETFLIX
      </span>
    ),
  },
  {
    name: "Spotify",
    services: "Campus · Influencer · Brand",
    description:
      "Campus activations, creator partnerships, and brand campaigns that grow listenership among culture-forward audiences.",
    themeColor: "group-hover:border-emerald-500/20 hover:shadow-emerald-500/5",
    accentText: "text-emerald-500",
    bgGradient: "from-emerald-500/5",
    mark: (
      <div className="flex items-center gap-2.5 text-foreground">
        <svg viewBox="0 0 24 24" className="size-9" fill="#1DB954" aria-hidden>
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
        <span className="text-lg font-semibold tracking-tight">Spotify</span>
      </div>
    ),
  },
  {
    name: "Shopify",
    services: "Web · Email · SEO",
    description:
      "Conversion-focused storefront experiences, retention email, and SEO that help merchants scale organic and owned channels.",
    themeColor: "group-hover:border-lime-500/20 hover:shadow-lime-500/5",
    accentText: "text-lime-600",
    bgGradient: "from-lime-500/5",
    mark: (
      <span className="text-2xl font-semibold tracking-tight text-[#95BF47]">
        Shopify
      </span>
    ),
  },
  {
    name: "Samsung",
    services: "Popup · Festival · Metro",
    description:
      "Popup stores, festival marketing, and metro branding that put flagship devices in high-footfall, real-world moments.",
    themeColor: "group-hover:border-blue-600/20 hover:shadow-blue-600/5",
    accentText: "text-blue-600",
    bgGradient: "from-blue-600/5",
    mark: (
      <span className="text-lg font-bold uppercase tracking-[0.18em] text-foreground">
        Samsung
      </span>
    ),
  },
]

export default function ClientsPage() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)
  const sectionRef = React.useRef<HTMLElement>(null)
  const trackRef = React.useRef<HTMLDivElement>(null)
  const progressBarRef = React.useRef<HTMLDivElement>(null)
  const maxTranslateRef = React.useRef(0)
  const [scrollHeight, setScrollHeight] = React.useState("200vh")

  const measureTrack = React.useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const overflow = Math.max(track.scrollWidth - window.innerWidth, 0)
    maxTranslateRef.current = overflow
    setScrollHeight(`${window.innerHeight + overflow}px`)
  }, [])

  const updateProgress = React.useCallback(() => {
    const section = sectionRef.current
    const track = trackRef.current
    const bar = progressBarRef.current
    if (!section || !track) return

    const total = section.offsetHeight - window.innerHeight
    const progress =
      total <= 0
        ? 0
        : Math.min(Math.max(-section.getBoundingClientRect().top / total, 0), 1)

    track.style.transform = `translate3d(${-(maxTranslateRef.current * progress)}px, 0, 0)`

    if (bar) {
      bar.style.width = `${progress * 100}%`
    }
  }, [])

  React.useEffect(() => {
    measureTrack()
    updateProgress()

    const onResize = () => {
      measureTrack()
      updateProgress()
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [measureTrack, updateProgress])

  useLenis(() => {
    updateProgress()
  })

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title="Our Clients"
        description="We partner with premium brands seeking conversational discovery and memorable real-world activations."
        accentColor="from-blue-500/10"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Clients" },
        ]}
      />

      <section
        ref={sectionRef}
        className="relative"
        style={{ height: scrollHeight }}
      >
        <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden py-10 md:py-12">
          <div className="mx-auto mb-8 max-w-6xl px-6 text-center md:mb-10">
            <span className="mb-2 flex items-center justify-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              <Building className="size-3.5" /> Brand Co-Partners
            </span>
            <h2 className="mb-3 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text font-lustria text-3xl font-normal tracking-tight text-transparent md:text-4xl">
              Services Delivered Across Every Partnership
            </h2>
            <p className="mx-auto max-w-2xl font-sans text-sm font-light leading-relaxed text-muted-foreground md:text-base">
              Scroll to explore — each card shows the brand and the Digi Carotene services we ran for them.
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex w-max gap-5 px-6 will-change-transform md:gap-6 md:px-10"
            >
              {clients.map((client, index) => {
                const isHovered = hoveredCard === index
                return (
                  <div
                    key={client.name}
                    className={`group relative flex h-[380px] w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/20 transition-all duration-500 hover:shadow-xl md:h-[400px] md:w-[340px] ${client.themeColor}`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${client.bgGradient} via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden border-b border-border/40 bg-muted/10 md:h-44">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px]" />
                      <div
                        className="relative z-10 transition-transform duration-500"
                        style={{
                          transform: isHovered
                            ? "translateY(-4px) scale(1.04)"
                            : "translateY(0) scale(1)",
                        }}
                      >
                        {client.mark}
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-1 flex-col justify-between p-5 md:p-6">
                      <div>
                        <div className="mb-2 flex items-center gap-1.5">
                          <Sparkles
                            className={`size-3.5 ${client.accentText} opacity-80 group-hover:animate-pulse`}
                          />
                          <h3 className="font-lustria text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                            {client.name}
                          </h3>
                        </div>
                        <span className="mb-3 block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                          {client.services}
                        </span>
                        <p className="font-sans text-xs font-light leading-relaxed text-muted-foreground md:text-sm">
                          {client.description}
                        </p>
                      </div>

                      <div
                        className={`mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-semibold ${client.accentText}`}
                      >
                        Partnership Active
                        <Sparkles className="size-3.5 opacity-70" />
                      </div>
                    </div>

                    <div className="absolute inset-px -z-10 rounded-3xl bg-gradient-to-tr from-primary/5 to-transparent opacity-0 blur-sm transition-opacity group-hover:opacity-100" />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mx-auto mt-8 w-full max-w-xs px-6">
            <div className="h-0.5 overflow-hidden rounded-full bg-border/60">
              <div
                ref={progressBarRef}
                className="h-full w-0 rounded-full bg-primary"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-border/50 pt-16 text-center">
          <h3 className="mb-6 font-lustria text-xl font-normal">
            Ready to become our next success story?
          </h3>
          <Button
            nativeButton={false}
            render={<Link href={contactHref} />}
            size="lg"
            className="group h-12 rounded-xl px-6 text-base font-medium"
          >
            <span className="flex items-center gap-1.5">
              Get Partner Spec
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
