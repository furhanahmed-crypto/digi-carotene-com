"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { contactHref, mainNav } from "@/constants/home/navigation"
import { SiteLogo } from "@/components/shared/site-logo"

const servicesNav = mainNav.find((item) => item.type === "groups")
const serviceGroups =
  servicesNav?.type === "groups" ? servicesNav.groups : []

const digitalGroup = serviceGroups.find((g) => g.title === "Digital Marketing")
const offlineGroup = serviceGroups.find((g) => g.title === "Offline Marketing")
const prGroup = serviceGroups.find((g) => g.title === "PR Services")

const linkClass =
  "inline-block transition-colors hover:translate-x-0.5 hover:text-brand-blue"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 overflow-hidden border-t border-border bg-background pt-14 pb-10 text-foreground dark:bg-section-dark dark:text-white">
      <div className="pointer-events-none absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-brand-yellow/15 blur-3xl dark:bg-brand-yellow/10" />
      <div className="pointer-events-none absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center"
              aria-label="Digi Carotene home"
            >
              <SiteLogo heightClassName="h-16" />
            </Link>
            <p className="max-w-sm text-sm leading-[1.6] text-muted-foreground md:text-base dark:text-white/70">
              We engineer the intersection of technical precision and artistic
              brand craft. Bridging AI conversational citations (SEO/AEO/GEO)
              with sensory real-world offline experiential activations.
            </p>
            <div className="text-[13px] font-medium tracking-[0.03em] text-muted-foreground uppercase dark:text-white/55">
              Hyderabad, India
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-display text-[15px] font-medium tracking-[0.06em] uppercase">
              About
            </h4>
            <ul className="space-y-2 text-sm leading-[1.6] text-muted-foreground dark:text-white/65">
              <li>
                <Link href="/about" className={linkClass}>
                  Mission Overview
                </Link>
              </li>
              <li>
                <Link href="/about/team" className={linkClass}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about/founders-story" className={linkClass}>
                  Founder&apos;s Story
                </Link>
              </li>
              <li>
                <Link href="/about/clients" className={linkClass}>
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-display text-[15px] font-medium tracking-[0.06em] uppercase">
              Digital Services
            </h4>
            <ul className="space-y-2 text-sm leading-[1.6] text-muted-foreground dark:text-white/65">
              {digitalGroup?.items?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-display text-[15px] font-medium tracking-[0.06em] uppercase">
              Offline & PR
            </h4>
            <ul className="space-y-2 text-sm leading-[1.6] text-muted-foreground dark:text-white/65">
              {offlineGroup?.items?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
              {prGroup?.href ? (
                <li>
                  <Link href={prGroup.href} className={linkClass}>
                    {prGroup.title}
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-display text-[15px] font-medium tracking-[0.06em] uppercase">
              Resources
            </h4>
            <ul className="space-y-2 text-sm leading-[1.6] text-muted-foreground dark:text-white/65">
              <li>
                <Link href="/blog" className={linkClass}>
                  The Journal
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className={linkClass}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href={contactHref}
                  className="inline-flex items-center gap-0.5 transition-colors hover:translate-x-0.5 hover:text-brand-blue"
                >
                  Contact Us <ArrowUpRight className="size-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-[13px] font-medium tracking-[0.03em] text-muted-foreground uppercase md:flex-row dark:border-white/10 dark:text-white/50">
          <div>&copy; {currentYear} Digi Carotene. All rights reserved.</div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-brand-blue"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-brand-blue"
            >
              Terms of Delivery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
