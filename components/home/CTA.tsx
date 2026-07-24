"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"

export function CTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 border-t border-border/50">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(255,80,0,0.06),transparent_60%)]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Banner */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
          <Sparkles className="size-3" />
          <span>Complimentary Audit</span>
        </div>

        {/* Title */}
        <h2 className="font-lustria text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
          How Visible is Your Brand in AI Search Results?
        </h2>

        {/* Description */}
        <p className="text-muted-foreground font-sans font-light text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Get a complimentary GEO & AEO Diagnostic Scan. We&apos;ll analyze your brand&apos;s current conversational citation rates, identify content gaps, and map out your offline activation potential.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            nativeButton={false}
            render={<Link href={contactHref} />}
            size="lg"
            className="rounded-xl px-6 h-12 text-base font-medium group"
          >
            <span>
              Get Your Free Scan
              <ArrowRight className="inline-block size-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            variant="outline"
            size="lg"
            className="rounded-xl px-6 h-12 text-base font-medium"
          >
            Talk with our Founders
          </Button>
        </div>
      </div>
    </section>
  )
}
