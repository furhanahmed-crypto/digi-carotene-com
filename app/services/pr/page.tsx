"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight, CheckCircle2, Newspaper, Sparkles } from "lucide-react"
import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

export default function PRServicesPage() {
  const capabilities = [
    "National news syndication and press release wire coverage.",
    "Strategic, non-obvious narrative framing for major agency publications.",
    "Executive profiles, media training, and talking head placement.",
    "Full event-coverage integration (offline popups sync'd with national PR)."
  ]

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title="Public Relations (PR) Services"
        description="We secure high-authority placements and shape unforgettable narratives that establish clear, long-term brand equity."
        accentColor="from-red-500/10"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "PR Services" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 mt-8 md:mt-10 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>

        {/* Detailed Spec Block */}
        <div className="rounded-3xl border border-border bg-card/25 p-8 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-500/5 via-transparent to-transparent opacity-20" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px]" />

          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-4">
            <Newspaper className="size-3.5" /> NARRATIVE AUTHORITY
          </span>

          <h2 className="font-lustria text-2xl font-normal mb-6">PR Campaign Architecture</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((detail, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground font-sans font-light leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Button nativeButton={false} render={<Link href={contactHref} />} size="lg" className="rounded-xl px-6 h-12 text-base font-medium group">
            <span className="flex items-center gap-1.5">
              Secure your Placement
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
