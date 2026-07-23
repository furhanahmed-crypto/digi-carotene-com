"use client"

import * as React from "react"
import Link from "next/link"
import { Sparkles, ArrowUpRight } from "lucide-react"

import { contactHref, mainNav } from "@/constants/home/navigation"

const servicesNav = mainNav.find((item) => item.type === "groups")
const serviceGroups =
  servicesNav?.type === "groups" ? servicesNav.groups : []

const digitalGroup = serviceGroups.find((g) => g.title === "Digital Marketing")
const offlineGroup = serviceGroups.find((g) => g.title === "Offline Marketing")
const prGroup = serviceGroups.find((g) => g.title === "PR Services")

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/90 pt-14 pb-10 overflow-hidden backdrop-blur-md">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl opacity-30 pointer-events-none" />

      {/* Grid Overlay Mask */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_100%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10">
          
          {/* Column 1: Logo & Agency Bio (Lg: 4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="group inline-flex items-center gap-2">
              <span className="font-lustria text-xl tracking-tight text-foreground transition-colors group-hover:text-primary">
                Digi Carotene
              </span>
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground font-sans font-light leading-relaxed max-w-sm">
              We engineer the intersection of technical precision and artistic brand craft. Bridging AI conversational citations (SEO/AEO/GEO) with sensory real-world offline experiential activations.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              <Sparkles className="size-3.5 text-primary animate-pulse" /> Dubai Silicon Oasis, UAE
            </div>
          </div>

          {/* Column 2: About Sub-links (Lg: 2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs text-foreground/80 font-bold uppercase tracking-wider">
              About
            </h4>
            <ul className="space-y-2 text-xs md:text-sm font-sans font-light text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors hover:translate-x-0.5 inline-block">
                  Mission Overview
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-primary transition-colors hover:translate-x-0.5 inline-block">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about/founders-story" className="hover:text-primary transition-colors hover:translate-x-0.5 inline-block">
                  Founder&apos;s Story
                </Link>
              </li>
              <li>
                <Link href="/about/clients" className="hover:text-primary transition-colors hover:translate-x-0.5 inline-block">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Digital Services (Lg: 2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs text-foreground/80 font-bold uppercase tracking-wider">
              Digital Services
            </h4>
            <ul className="space-y-2 text-xs md:text-sm font-sans font-light text-muted-foreground">
              {digitalGroup?.items?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Offline / Experiential (Lg: 2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs text-foreground/80 font-bold uppercase tracking-wider">
              Offline Marketing
            </h4>
            <ul className="space-y-2 text-xs md:text-sm font-sans font-light text-muted-foreground">
              {offlineGroup?.items?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Resources & Inquiries (Lg: 2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs text-foreground/80 font-bold uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs md:text-sm font-sans font-light text-muted-foreground">
              {prGroup?.href ? (
                <li>
                  <Link
                    href={prGroup.href}
                    className="hover:text-primary transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {prGroup.title}
                  </Link>
                </li>
              ) : null}
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors hover:translate-x-0.5 inline-block">
                  The Journal
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-primary transition-colors hover:translate-x-0.5 inline-block">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href={contactHref} className="hover:text-primary transition-colors hover:translate-x-0.5 inline-flex items-center gap-0.5">
                  Contact Us <ArrowUpRight className="size-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom (Legal and copyrights) */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <div>
            &copy; {currentYear} Digi Carotene. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Delivery
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
