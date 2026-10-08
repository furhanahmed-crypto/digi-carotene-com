"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react"

import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { pageCreamDecor } from "@/components/shared/page-decors"
import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"
import { siteContact, whatsappHref } from "@/constants/home/navigation"
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon"

/** v2 PDF: name, business, website, country, service, budget, message. */
const serviceOptions = [
  "Performance Marketing",
  "Growth Marketing",
  "SEO / AEO / GEO",
  "Social Media",
  "Website / Design",
  "Offline Activations",
  "PR / ORM",
  "Not sure yet",
] as const

const budgetOptions = [
  "Under ₹50k / month",
  "₹50k – ₹1.5L / month",
  "₹1.5L – ₹5L / month",
  "₹5L+ / month",
  "Prefer not to say",
] as const

export default function ContactPage() {
  const [formState, setFormState] = React.useState({
    name: "",
    business: "",
    website: "",
    country: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  const fieldClassName =
    "h-12 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-brand-yellow"

  return (
    <div className="min-h-svh">
      <PageHeader
        title="Let's Talk About Where You Want Your Business to Be"
        description="Tell us a little about your business and goals. A strategist (not a salesperson) will get back to you within one working day with honest thoughts on what we would do and whether we are the right fit."
        breadcrumbs={[{ label: "Contact" }]}
        mark="Contact Us"
        actions={
          <div className="flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={
                <a href={whatsappHref} target="_blank" rel="noreferrer" />
              }
              size="lg"
              className="bg-ink text-paper hover:bg-ink/90"
            >
              WhatsApp us
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href={siteContact.phoneHref} />}
              size="lg"
              variant="outline"
              className="border-ink/25 bg-white/50 text-ink hover:border-ink hover:bg-white"
            >
              Call {siteContact.phoneDisplay}
            </Button>
          </div>
        }
      />

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Form first visually — fills the band; sticky so no empty void. */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:sticky lg:top-28 md:p-8 dark:bg-card">
              {isSubmitted ? (
                <div className="py-10">
                  <SectionMark>Received</SectionMark>
                  <h3 className="mt-6 font-display text-[26px] leading-[1.2] font-medium md:text-[32px]">
                    Inquiry received
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                    Thank you. A strategist will get back within one working
                    day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <SectionMark>Free proposal</SectionMark>
                  <p className="text-sm text-muted-foreground">
                    Six fields — wherever you are in the world. We reply within
                    one working day.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      className={fieldClassName}
                      placeholder="Name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                    />
                    <input
                      required
                      className={fieldClassName}
                      placeholder="Business"
                      value={formState.business}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          business: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="url"
                      className={fieldClassName}
                      placeholder="Website (optional)"
                      value={formState.website}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          website: e.target.value,
                        }))
                      }
                    />
                    <input
                      required
                      className={fieldClassName}
                      placeholder="Country / city"
                      value={formState.country}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          country: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <select
                      required
                      className={fieldClassName}
                      value={formState.service}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          service: e.target.value,
                        }))
                      }
                    >
                      <option value="" disabled>
                        Service you need
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      className={fieldClassName}
                      value={formState.budget}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          budget: e.target.value,
                        }))
                      }
                    >
                      <option value="">Monthly budget (optional)</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-brand-yellow"
                    placeholder="Message — where is growth stuck?"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-brand-yellow text-ink hover:bg-brand-yellow/90 sm:w-auto"
                  >
                    Get a Free Proposal
                    <ArrowRight className="size-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          <aside className="order-2 space-y-6 lg:order-1 lg:col-span-5">
            <div>
              <SectionMark>Get your free audit</SectionMark>
              <p className="mt-5 text-[13px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                Hyderabad · Worldwide
              </p>
              <h2 className="mt-3 font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[40px]">
                Reach us directly
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                Prefer a call or WhatsApp? Use the details below — or send the
                form and we will review rankings, ads, social and your site.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <ContactChip
                icon={<Mail className="size-4" />}
                label="Email"
                href={siteContact.emailHref}
                value={siteContact.email}
              />
              <ContactChip
                icon={<Phone className="size-4" />}
                label="Phone"
                href={siteContact.phoneHref}
                value={siteContact.phoneDisplay}
              />
              <ContactChip
                icon={<WhatsAppIcon className="size-4" />}
                label="WhatsApp"
                href={whatsappHref}
                value={siteContact.whatsappDisplay}
                external
              />
              <ContactChip
                icon={<MapPin className="size-4" />}
                label="Hyderabad office"
                href={siteContact.mapsHref}
                value={siteContact.addressOneLine}
                external
              />
              <ContactChip
                icon={<Clock3 className="size-4" />}
                label="Hours"
                value={siteContact.hours}
              />
            </div>

            <div className="rounded-2xl border border-border bg-white/90 p-5 shadow-sm dark:bg-card">
              <h3 className="font-display text-lg font-medium">
                What happens next
              </h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">1. Review —</span>{" "}
                  A strategist studies your business, website and competitors.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    2. 30-minute call —
                  </span>{" "}
                  We discuss your goals, challenges and what we found.
                </li>
                <li>
                  <span className="font-medium text-foreground">3. Your plan —</span>{" "}
                  Scope, timelines and reportable targets — clearly written.
                </li>
              </ol>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {siteContact.socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground underline decoration-brand-yellow underline-offset-4"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </SectionLayout>
    </div>
  )
}

function ContactChip({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  const inner = (
    <>
      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-ink">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[12px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
          {label}
        </span>
        <span className="mt-0.5 block text-sm leading-snug font-medium text-foreground">
          {value}
        </span>
      </span>
    </>
  )

  const className =
    "flex gap-3 rounded-2xl border border-border bg-white/90 p-4 shadow-sm transition-colors hover:border-brand-yellow/40 dark:bg-card"

  if (!href) {
    return <div className={className}>{inner}</div>
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {inner}
      </a>
    )
  }

  return (
    <a href={href} className={className}>
      {inner}
    </a>
  )
}
