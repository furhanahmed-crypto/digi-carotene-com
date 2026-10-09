"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import {
  contactHref,
  mainNav,
  siteContact,
  whatsappHref,
} from "@/constants/home/navigation"
import { SiteLogo } from "@/components/shared/site-logo"

const servicesNav = mainNav.find((item) => item.type === "groups")
const serviceGroups =
  servicesNav?.type === "groups" ? servicesNav.groups : []

const digitalGroup = serviceGroups.find((g) => g.title === "Digital Marketing")
const offlineGroup = serviceGroups.find((g) => g.title === "Offline Marketing")
const prGroup = serviceGroups.find((g) => g.title === "PR Services")

const linkClass =
  "inline-block transition-colors hover:translate-x-0.5 hover:text-brand-yellow"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 overflow-hidden border-t border-border bg-background pt-14 pb-10 text-foreground dark:bg-section-dark dark:text-white">
      <div className="pointer-events-none absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-brand-yellow/15 blur-3xl dark:bg-brand-yellow/10" />
      <div className="pointer-events-none absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center"
              aria-label="Digi Carotene home"
            >
              <SiteLogo heightClassName="h-[4.5rem]" />
            </Link>
            <p className="max-w-sm text-sm leading-[1.6] text-muted-foreground md:text-base dark:text-white/70">
              Found. Chosen. Measured. Performance and growth marketing for
              brands in Hyderabad and worldwide — 7+ years, 300+ clients.
            </p>
            <div className="space-y-1 text-sm text-muted-foreground dark:text-white/65">
              <p className="text-[13px] font-medium tracking-[0.03em] uppercase dark:text-white/55">
                Hyderabad · Bangalore · Global
              </p>
              <p>
                <a
                  href={siteContact.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  {siteContact.addressOneLine}
                </a>
              </p>
              <p>
                <a href={siteContact.phoneHref} className={linkClass}>
                  {siteContact.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={siteContact.emailHref} className={linkClass}>
                  {siteContact.email}
                </a>
              </p>
              <p>{siteContact.hoursShort}</p>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground dark:text-white/65">
              {siteContact.socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={linkClass}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground dark:text-white/65">
              <li>
                <Link href="/digital-marketing-agency-hyderabad" className={linkClass}>
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing-agency-bangalore" className={linkClass}>
                  Bangalore
                </Link>
              </li>
              <li>
                <Link href="/global" className={linkClass}>
                  Global
                </Link>
              </li>
              <li>
                <Link href="/industries" className={linkClass}>
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/services" className={linkClass}>
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-display text-[15px] font-medium tracking-[0.06em] uppercase">
              About
            </h4>
            <ul className="space-y-2 text-sm leading-[1.6] text-muted-foreground dark:text-white/65">
              <li>
                <Link href="/about" className={linkClass}>
                  About Us
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
                <Link
                  href="/digital-marketing-agency-hyderabad"
                  className={linkClass}
                >
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-marketing-agency-bangalore"
                  className={linkClass}
                >
                  Bangalore
                </Link>
              </li>
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
                  className="inline-flex items-center gap-0.5 transition-colors hover:translate-x-0.5 hover:text-brand-yellow"
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
              className="transition-colors hover:text-brand-yellow"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-brand-yellow"
            >
              Terms of Delivery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
