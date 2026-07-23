"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight, Calendar, Clock, Sparkles } from "lucide-react"
import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"

const blogPosts = [
  {
    title: "Understanding GEO: How to Rank in AI Search (ChatGPT, Gemini, Perplexity)",
    excerpt: "With the rise of Answer Engines, traditional keyword density is no longer enough. Learn how to format content for LLM databases and secure organic citations.",
    date: "July 2026",
    readTime: "6 min read",
    tag: "GEO & AEO",
    bgGradient: "from-purple-500/5",
    borderColor: "group-hover:border-purple-500/20 hover:shadow-purple-500/5",
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="35" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
        <g className="transition-transform duration-700 ease-out" style={{ transform: isHovered ? "rotate(15deg)" : "rotate(0)" }}>
          <circle cx="50" cy="50" r="10" fill="var(--card)" stroke="#a855f7" strokeWidth="1.5" />
          <line x1="50" y1="50" x2="25" y2="25" stroke="var(--border)" strokeWidth="1.25" />
          <line x1="50" y1="50" x2="75" y2="25" stroke="var(--border)" strokeWidth="1.25" />
          <line x1="50" y1="50" x2="50" y2="85" stroke="var(--border)" strokeWidth="1.25" />
          <circle cx="25" cy="25" r="3" fill="#a855f7" />
          <circle cx="75" cy="25" r="3" fill="#a855f7" />
          <circle cx="50" cy="85" r="3" fill="#a855f7" />
        </g>
      </svg>
    )
  },
  {
    title: "The Physics of Marketing: Bridging Digital Intent with Physical Activations",
    excerpt: "Why premium online retail brands are investing heavily in modular mall popups, residential roadshows, and offline experiential touchpoints.",
    date: "June 2026",
    readTime: "8 min read",
    tag: "EXPERIENTIAL",
    bgGradient: "from-orange-500/5",
    borderColor: "group-hover:border-orange-500/20 hover:shadow-orange-500/5",
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="35" stroke="#ff5000" strokeWidth="0.5" opacity="0.3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "translateY(-2px)" : "translateY(0)" }}>
          <rect x="35" y="40" width="30" height="25" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="35" y="40" width="30" height="7" rx="4" fill="rgba(255,80,0,0.06)" stroke="rgba(255,80,0,0.15)" strokeWidth="1.5" />
          <circle cx="50" cy="52" r="3" fill="#ff5000" />
        </g>
      </svg>
    )
  },
  {
    title: "How to Build an Authoritative Schema for Generative Citation Shares",
    excerpt: "A deep dive into semantic structural markup and organization-level JSON-LD that answer engines use to verify entity authority.",
    date: "May 2026",
    readTime: "5 min read",
    tag: "TECHNICAL SEO",
    bgGradient: "from-blue-500/5",
    borderColor: "group-hover:border-blue-500/20 hover:shadow-blue-500/5",
    renderVisual: (isHovered: boolean) => (
      <svg className="size-full" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="25" width="50" height="50" rx="8" stroke="var(--border)" strokeWidth="0.75" strokeDasharray="3 3" />
        <g className="transition-transform duration-500" style={{ transform: isHovered ? "scale(1.04)" : "scale(1)" }}>
          <rect x="35" y="35" width="30" height="30" rx="4" fill="var(--card)" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M42,50 L47,53 L53,46" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    )
  },
]

export default function BlogPage() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title="The Carotene Journal"
        description="Thought leadership, tutorials, and strategy guides on generative search optimization and experiential marketing."
        accentColor="from-amber-500/10"
        breadcrumbs={[
          { label: "Resources" },
          { label: "Blog" },
        ]}
      />

      <div className="mx-auto max-w-5xl px-6 mt-8 md:mt-10 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>

        {/* Blog Posts Column */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => {
            const isHovered = hoveredCard === index
            return (
              <article
                key={post.title}
                className={`group relative rounded-3xl border border-border bg-card/20 p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-center transition-all duration-500 hover:shadow-xl ${post.borderColor}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Radial Glow Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${post.bgGradient} via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Left Side: Article info */}
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span className="text-primary font-semibold tracking-wider flex items-center gap-1">
                      <Sparkles className="size-3" /> {post.tag}
                    </span>
                    <span><Calendar className="size-3.5 inline mr-1" /> {post.date}</span>
                    <span><Clock className="size-3.5 inline mr-1" /> {post.readTime}</span>
                  </div>

                  <h3 className="font-lustria text-xl md:text-2xl font-normal text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground font-sans font-light leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors pt-2">
                    Read Article <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Right Side: Animated SVG visual block */}
                <div className="relative size-24 shrink-0 rounded-2xl border border-border/60 bg-muted/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:8px_8px]" />
                  {post.renderVisual(isHovered)}
                </div>

                {/* Glowing drop shadow outline */}
                <div className={`absolute inset-px -z-10 rounded-[22px] bg-gradient-to-tr ${post.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
