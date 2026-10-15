import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { OpenEnquiryButton } from "@/components/enquiry/open-enquiry-button"
import { LandingMobileCallBar } from "@/components/landing/landing-mobile-call-bar"
import { TrackedContactLink } from "@/components/landing/tracked-contact-link"
import { Reveal } from "@/components/motion/reveal"
import {
  pageCreamDecor,
  pageCtaDecor,
  pageHeaderDecor,
  pageWhiteDecor,
} from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"
import {
  websiteDevHydAreas,
  websiteDevHydClosing,
  websiteDevHydFaqs,
  websiteDevHydHero,
  websiteDevHydIndustries,
  websiteDevHydPackages,
  websiteDevHydPain,
  websiteDevHydServices,
  websiteDevHydTimeline,
  websiteDevHydWhy,
  websiteDevQuoteWhatsappHref,
} from "@/constants/landing/website-development-hyderabad"
import { siteContact } from "@/constants/site/contact"
import {
  bannerCtaPrimaryClassName,
  bannerCtaRowClassName,
  bannerCtaSecondaryClassName,
} from "@/constants/ui/banner-cta"
import { cn } from "@/lib/utils"

function BrowserMockup() {
  return (
    <div
      aria-hidden
      className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-ink/15 bg-paper shadow-lg dark:border-border dark:bg-card"
    >
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-ink/[0.04] px-3 py-2.5 dark:border-border dark:bg-secondary">
        <span className="size-2.5 rounded-full bg-ink/20" />
        <span className="size-2.5 rounded-full bg-ink/20" />
        <span className="size-2.5 rounded-full bg-ink/20" />
        <span className="ml-2 h-5 flex-1 rounded-md bg-ink/8 dark:bg-foreground/10" />
      </div>
      <div className="space-y-3 p-5">
        <div className="h-3 w-24 rounded bg-brand-yellow" />
        <div className="h-4 w-[85%] rounded bg-ink/15 dark:bg-foreground/20" />
        <div className="h-3 w-full rounded bg-ink/8 dark:bg-foreground/10" />
        <div className="h-3 w-[90%] rounded bg-ink/8 dark:bg-foreground/10" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="h-16 rounded-lg bg-ink/6 dark:bg-foreground/8" />
          <div className="h-16 rounded-lg bg-ink/6 dark:bg-foreground/8" />
        </div>
        <div className="mt-2 h-9 w-32 rounded-full bg-brand-yellow" />
      </div>
    </div>
  )
}

export function WebsiteDevelopmentLanding() {
  return (
    <div className="min-h-svh pb-16 sm:pb-0">
      <SectionLayout
        tone="yellow"
        size="hero"
        decor={pageHeaderDecor}
        aria-label="Page header"
      >
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-sm text-ink/70 dark:text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="underline-offset-2 hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href="/services/"
                className="underline-offset-2 hover:underline"
              >
                Services
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-ink dark:text-foreground">
              Website Development Company in Hyderabad
            </li>
          </ol>
        </nav>

        <Reveal
          mode="load"
          className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12"
        >
          <div>
            <SectionMark data-reveal="eyebrow" tone="paper">
              {websiteDevHydHero.eyebrow}
            </SectionMark>
            <h1
              data-reveal="heading"
              className="mt-6 font-display text-4xl leading-display-sm font-medium tracking-display text-ink md:text-[44px] lg:text-[52px] dark:text-foreground"
            >
              {websiteDevHydHero.h1}
            </h1>
            <p
              data-reveal="text"
              className="mt-5 max-w-2xl text-base leading-body text-ink/75 md:text-lg dark:text-muted-foreground"
            >
              {websiteDevHydHero.body}
            </p>
            <div
              data-reveal="cta"
              className={cn(bannerCtaRowClassName, "mt-8")}
            >
              <Button
                nativeButton={false}
                render={
                  <TrackedContactLink
                    href={siteContact.phoneHref}
                    event="call_click"
                    buttonLocation="hero"
                  />
                }
                size="lg"
                className={cn(bannerCtaPrimaryClassName, "lg:hidden")}
              >
                Call {siteContact.phoneDisplay}
                <ArrowRight className="size-4" />
              </Button>
              <OpenEnquiryButton
                label="Enquire now"
                serviceName="Website Development"
                className={cn(bannerCtaPrimaryClassName, "hidden lg:inline-flex")}
              />
              <Button
                nativeButton={false}
                render={
                  <TrackedContactLink
                    href={websiteDevQuoteWhatsappHref}
                    event="whatsapp_click"
                    buttonLocation="hero"
                    external
                  />
                }
                size="lg"
                variant="outline"
                className={bannerCtaSecondaryClassName}
              >
                WhatsApp us
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <p
              data-reveal="text"
              className="mt-5 max-w-xl text-sm leading-body text-ink/70 dark:text-muted-foreground"
            >
              {websiteDevHydHero.priceNote}
            </p>
            <ul
              data-reveal-group
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-ink/80 dark:text-foreground/80"
            >
              {websiteDevHydHero.proofs.map((item) => (
                <li key={item} data-reveal="card">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="image" className="lg:justify-self-end">
            <BrowserMockup />
          </div>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div>
            <SectionMark data-reveal="eyebrow">
              {websiteDevHydPain.eyebrow}
            </SectionMark>
            <h2
              data-reveal="heading"
              className="mt-6 font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
            >
              {websiteDevHydPain.title}
            </h2>
            <p
              data-reveal="text"
              className="mt-4 max-w-xl text-base leading-body text-muted-foreground"
            >
              {websiteDevHydPain.body}
            </p>
          </div>
          <ul data-reveal-group className="space-y-5">
            {websiteDevHydPain.items.map((item) => (
              <li
                key={item.label}
                data-reveal="card"
                className="border border-line bg-background p-5"
              >
                <span className="text-xs font-medium tracking-label text-muted-foreground uppercase">
                  {item.label}
                </span>
                <p className="mt-2 font-display text-lg font-medium leading-title">
                  {item.title}
                </p>
                <p className="mt-2 text-base leading-body text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">
            {websiteDevHydServices.eyebrow}
          </SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {websiteDevHydServices.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {websiteDevHydServices.body}{" "}
            <Link
              href="/services/digital-marketing/seo/"
              className="font-medium text-foreground underline decoration-brand-yellow underline-offset-4"
            >
              SEO services in Hyderabad
            </Link>
          </p>
          <div
            data-reveal-group
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {websiteDevHydServices.items.map((item) => (
              <article
                key={item.title}
                data-reveal="card"
                className="border border-line bg-background p-6"
              >
                <h3 className="font-display text-[21px] leading-title font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-body text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">
            {websiteDevHydPackages.eyebrow}
          </SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {websiteDevHydPackages.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {websiteDevHydPackages.body}
          </p>
          <div
            data-reveal-group
            className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {websiteDevHydPackages.items.map((pkg) => (
              <article
                key={pkg.id}
                data-reveal="card"
                className={cn(
                  "flex flex-col border bg-background p-6",
                  pkg.highlighted
                    ? "border-brand-yellow border-2 shadow-[0_0_0_1px_var(--brand-yellow)]"
                    : "border-line"
                )}
              >
                <span className="w-fit rounded-full bg-brand-yellow/25 px-2.5 py-1 text-xs font-medium text-foreground">
                  {pkg.badge}
                </span>
                <h3 className="mt-4 font-display text-[22px] leading-title font-medium">
                  {pkg.title}
                </h3>
                <p className="mt-3 text-sm leading-body text-muted-foreground">
                  {pkg.body}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm leading-body text-foreground/85">
                  {pkg.features.map((feature) => {
                    const link =
                      "featureLink" in pkg && pkg.featureLink
                        ? pkg.featureLink
                        : null
                    if (link && feature === link.match) {
                      return (
                        <li key={feature} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-yellow" />
                          <span>
                            1 month of{" "}
                            <Link
                              href={link.href}
                              className="underline decoration-brand-yellow underline-offset-2"
                            >
                              {link.label}
                            </Link>
                          </span>
                        </li>
                      )
                    }
                    return (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-yellow" />
                        <span>{feature}</span>
                      </li>
                    )
                  })}
                </ul>
                <p className="mt-6 text-sm font-semibold tracking-label uppercase text-muted-foreground">
                  {pkg.priceLabel}
                </p>
                <Button
                  nativeButton={false}
                  render={
                    <TrackedContactLink
                      href={siteContact.phoneHref}
                      event="call_click"
                      buttonLocation={pkg.buttonLocation}
                    />
                  }
                  size="lg"
                  className={cn(
                    "mt-3 w-full",
                    pkg.highlighted
                      ? "bg-brand-yellow text-ink hover:bg-brand-yellow/90"
                      : "border border-ink/20 bg-transparent text-foreground hover:bg-ink/5"
                  )}
                >
                  {pkg.ctaLabel}
                </Button>
              </article>
            ))}
          </div>
          <p
            data-reveal="text"
            className="mt-8 text-base leading-body text-muted-foreground"
          >
            {websiteDevHydPackages.afterLaunch}
          </p>
          <p
            data-reveal="text"
            className="mt-2 text-base leading-body text-muted-foreground"
          >
            {websiteDevHydPackages.growthPlan}
          </p>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">
            {websiteDevHydTimeline.eyebrow}
          </SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {websiteDevHydTimeline.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {websiteDevHydTimeline.body}
          </p>
          <ol
            data-reveal-group
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {websiteDevHydTimeline.steps.map((step, index) => (
              <li
                key={step.title}
                data-reveal="card"
                className="relative border border-line bg-background p-5"
              >
                <span
                  className={cn(
                    "mb-3 flex size-3 rounded-full",
                    index === websiteDevHydTimeline.steps.length - 1
                      ? "bg-brand-yellow"
                      : "bg-ink/20 dark:bg-foreground/25"
                  )}
                  aria-hidden
                />
                <span className="text-xs font-medium tracking-label text-muted-foreground uppercase">
                  {step.day}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium leading-title">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-body text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <p
            data-reveal="text"
            className="mt-8 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {websiteDevHydTimeline.note}
          </p>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">
            {websiteDevHydIndustries.eyebrow}
          </SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {websiteDevHydIndustries.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {websiteDevHydIndustries.body}
          </p>
          <ul
            data-reveal-group
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {websiteDevHydIndustries.pills.map((pill) => (
              <li key={pill.label} data-reveal="card">
                <Link
                  href={pill.href}
                  className="inline-flex rounded-full border border-line bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-yellow hover:bg-brand-yellow/15"
                >
                  {pill.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">
            {websiteDevHydWhy.eyebrow}
          </SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {websiteDevHydWhy.title}
          </h2>
          <div
            data-reveal-group
            className="mt-12 grid gap-5 sm:grid-cols-2"
          >
            {websiteDevHydWhy.items.map((item) => (
              <article
                key={item.title}
                data-reveal="card"
                className="border border-line bg-background p-6"
              >
                <h3 className="font-display text-[21px] leading-title font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-body text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">
            {websiteDevHydAreas.eyebrow}
          </SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {websiteDevHydAreas.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {websiteDevHydAreas.body}
          </p>
          <ul
            data-reveal-group
            className="mt-10 grid grid-cols-2 gap-x-4 gap-y-2 text-sm leading-body text-foreground/85 md:grid-cols-4"
          >
            {websiteDevHydAreas.areas.map((area) => (
              <li key={area} data-reveal="card">
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">FAQ</SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            Questions about website development in Hyderabad
          </h2>
          <div data-reveal-group className="mt-10 space-y-3">
            {websiteDevHydFaqs.map((faq, index) => (
              <details
                key={faq.question}
                data-reveal="card"
                open={index === 0}
                className="group border border-line bg-background open:bg-yellow-tint"
              >
                <summary className="cursor-pointer list-none px-5 py-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg font-medium leading-title pr-8">
                    {faq.question}
                  </h3>
                </summary>
                <p className="border-t border-line px-5 py-4 text-base leading-body text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="yellow" decor={pageCtaDecor}>
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <div>
            <SectionMark data-reveal="eyebrow" tone="paper">
              {websiteDevHydClosing.eyebrow}
            </SectionMark>
            <h2
              data-reveal="heading"
              className="mt-6 font-display text-[28px] leading-heading font-medium tracking-display text-ink md:text-4xl dark:text-foreground"
            >
              {websiteDevHydClosing.title}
            </h2>
            <p
              data-reveal="text"
              className="mt-4 max-w-xl text-base leading-body text-ink/75 dark:text-muted-foreground"
            >
              {websiteDevHydClosing.body}
            </p>
            <div
              data-reveal="cta"
              className={cn(bannerCtaRowClassName, "mt-8")}
            >
              <Button
                nativeButton={false}
                render={
                  <TrackedContactLink
                    href={siteContact.phoneHref}
                    event="call_click"
                    buttonLocation="closing_band"
                  />
                }
                size="lg"
                className={bannerCtaPrimaryClassName}
              >
                Call {siteContact.phoneDisplay}
                <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={
                  <TrackedContactLink
                    href={websiteDevQuoteWhatsappHref}
                    event="whatsapp_click"
                    buttonLocation="closing_band"
                    external
                  />
                }
                size="lg"
                variant="outline"
                className={bannerCtaSecondaryClassName}
              >
                WhatsApp us
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <address
            data-reveal="card"
            className="not-italic border border-ink/15 bg-paper/70 p-6 text-sm leading-body text-ink/80 dark:border-border dark:bg-card dark:text-muted-foreground"
          >
            <p>
              <span className="font-medium text-ink dark:text-foreground">
                Phone:{" "}
              </span>
              <a href={siteContact.phoneHref} className="underline-offset-2 hover:underline">
                {siteContact.phoneDisplay}
              </a>
            </p>
            <p className="mt-3">
              <span className="font-medium text-ink dark:text-foreground">
                Office:{" "}
              </span>
              Dwaraka Pride, Plot No. 4/1, Huda Techno Enclave, HITEC City,
              Madhapur, Hyderabad, Telangana 500081
            </p>
            <p className="mt-3">
              <span className="font-medium text-ink dark:text-foreground">
                Hours:{" "}
              </span>
              {siteContact.hoursShort}
            </p>
            <p className="mt-3">
              <span className="font-medium text-ink dark:text-foreground">
                Email:{" "}
              </span>
              <a href={siteContact.emailHref} className="underline-offset-2 hover:underline">
                {siteContact.email}
              </a>
            </p>
          </address>
        </Reveal>
      </SectionLayout>

      <LandingMobileCallBar
        callLabel="Call for price"
        whatsappHref={websiteDevQuoteWhatsappHref}
      />
    </div>
  )
}
