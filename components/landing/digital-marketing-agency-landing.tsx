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
import { StaticReviews } from "@/components/shared/static-reviews"
import { Button } from "@/components/ui/button"
import {
  dmHydAreas,
  dmHydClosing,
  dmHydFaqs,
  dmHydHero,
  dmHydIndustries,
  dmHydMarkets,
  dmHydProcess,
  dmHydQuoteWhatsappHref,
  dmHydReporting,
  dmHydServices,
  dmHydWhy,
} from "@/constants/landing/digital-marketing-hyderabad"
import { siteContact } from "@/constants/site/contact"
import {
  bannerCtaPrimaryClassName,
  bannerCtaRowClassName,
  bannerCtaSecondaryClassName,
} from "@/constants/ui/banner-cta"
import { cn } from "@/lib/utils"

/** Decorative monthly report card — bars only, no numbers (PDF §1). */
function ReportCardGraphic() {
  const bars = [42, 68, 55, 82, 74, 90]
  return (
    <div
      aria-hidden
      className="mx-auto w-full max-w-[34rem] overflow-hidden rounded-xl border border-ink/15 bg-paper shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] dark:border-border dark:bg-card"
    >
      <div className="flex items-start justify-between gap-4 border-b border-ink/10 bg-ink/[0.04] px-5 py-4 dark:border-border dark:bg-secondary">
        <div>
          <p className="text-xs font-medium tracking-label text-muted-foreground uppercase">
            {dmHydHero.reportCard.title}
          </p>
          <p className="mt-1 font-display text-lg font-medium text-ink dark:text-foreground">
            {dmHydHero.reportCard.business}
          </p>
          <p className="text-sm text-muted-foreground">
            {dmHydHero.reportCard.city}
          </p>
        </div>
        <div className="hidden shrink-0 rounded-full bg-brand-yellow/90 px-3 py-1 text-[10px] font-semibold tracking-label text-ink uppercase sm:block">
          Live
        </div>
      </div>
      <div className="space-y-5 p-5 sm:p-6">
        <div className="flex h-32 items-end gap-2.5 sm:h-36 sm:gap-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-brand-yellow/85"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-2.5 text-xs font-medium text-foreground/80 sm:text-sm">
          {dmHydHero.reportCard.metrics.map((metric) => (
            <li
              key={metric}
              className="rounded-lg bg-ink/5 px-3 py-2.5 dark:bg-foreground/8"
            >
              {metric}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {dmHydHero.reportCard.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-ink/10 px-3 py-1 text-[11px] font-medium text-ink/70 dark:border-border dark:text-muted-foreground"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DigitalMarketingAgencyLanding() {
  return (
    <div className="min-h-svh pb-16 sm:pb-0">
      <SectionLayout
        tone="yellow"
        size="hero"
        decor={pageHeaderDecor}
        aria-label="Page header"
      >
        <Reveal
          mode="load"
          className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:gap-14"
        >
          <div>
            <SectionMark data-reveal="eyebrow" tone="paper">
              {dmHydHero.eyebrow}
            </SectionMark>
            <h1
              data-reveal="heading"
              className="mt-6 font-display text-4xl leading-display-sm font-medium tracking-display text-ink md:text-[44px] lg:text-[52px] dark:text-foreground"
            >
              {dmHydHero.h1}
            </h1>
            <p
              data-reveal="text"
              className="mt-5 max-w-2xl text-base leading-body text-ink/75 md:text-lg dark:text-muted-foreground"
            >
              {dmHydHero.body}
            </p>
            <div data-reveal="cta" className={cn(bannerCtaRowClassName, "mt-8")}>
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
                serviceName="Digital Marketing"
                className={cn(bannerCtaPrimaryClassName, "hidden lg:inline-flex")}
              />
              <Button
                nativeButton={false}
                render={
                  <TrackedContactLink
                    href={dmHydQuoteWhatsappHref}
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
              {dmHydHero.planNote}
            </p>
            <ul
              data-reveal-group
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-ink/80 dark:text-foreground/80"
            >
              {dmHydHero.proofs.map((item) => (
                <li key={item} data-reveal="card">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="image" className="w-full lg:justify-self-stretch">
            <ReportCardGraphic />
          </div>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">{dmHydMarkets.eyebrow}</SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {dmHydMarkets.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {dmHydMarkets.body}
          </p>
          <div
            data-reveal-group
            className="mt-12 grid gap-5 md:grid-cols-2"
          >
            {dmHydMarkets.cards.map((card) => (
              <article
                key={card.label}
                data-reveal="card"
                className="border border-line bg-background p-6"
              >
                <span className="text-xs font-medium tracking-label text-muted-foreground uppercase">
                  {card.label}
                </span>
                <h3 className="mt-3 font-display text-[21px] leading-title font-medium">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-body text-muted-foreground">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">{dmHydServices.eyebrow}</SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {dmHydServices.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {dmHydServices.body}
          </p>
          <div
            data-reveal-group
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {dmHydServices.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                data-reveal="card"
                className="group border border-line bg-background p-6 transition-colors hover:border-brand-yellow"
              >
                <h3 className="font-display text-[21px] leading-title font-medium group-hover:underline">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-body text-muted-foreground">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div>
            <SectionMark data-reveal="eyebrow">
              {dmHydReporting.eyebrow}
            </SectionMark>
            <h2
              data-reveal="heading"
              className="mt-6 font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
            >
              {dmHydReporting.title}
            </h2>
            <p
              data-reveal="text"
              className="mt-4 max-w-xl text-base leading-body text-muted-foreground"
            >
              {dmHydReporting.body}
            </p>
          </div>
          <ul data-reveal-group className="space-y-5">
            {dmHydReporting.items.map((item) => (
              <li
                key={item.label}
                data-reveal="card"
                className="border border-line bg-background p-5"
              >
                <span className="text-xs font-medium tracking-label text-muted-foreground uppercase">
                  <span className="mr-1.5 inline-block size-1.5 rounded-full bg-brand-yellow align-middle" />
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
          <SectionMark data-reveal="eyebrow">{dmHydProcess.eyebrow}</SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {dmHydProcess.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {dmHydProcess.body}
          </p>
          <ol
            data-reveal-group
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {dmHydProcess.stages.map((stage, index) => (
              <li
                key={stage.title}
                data-reveal="card"
                className="relative border border-line bg-background p-5"
              >
                <span
                  className={cn(
                    "mb-3 flex size-3 rounded-full",
                    index === dmHydProcess.stages.length - 1
                      ? "bg-brand-yellow"
                      : "bg-ink/20 dark:bg-foreground/25"
                  )}
                  aria-hidden
                />
                <span className="text-xs font-medium tracking-label text-muted-foreground uppercase">
                  {stage.stage}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium leading-title">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-body text-muted-foreground">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">{dmHydIndustries.eyebrow}</SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {dmHydIndustries.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {dmHydIndustries.body}
          </p>
          <div
            data-reveal-group
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {dmHydIndustries.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                data-reveal="card"
                className="group border border-line bg-background p-6 transition-colors hover:border-brand-yellow"
              >
                <h3 className="font-display text-[21px] leading-title font-medium group-hover:underline">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-body text-muted-foreground">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="white" decor={pageWhiteDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">{dmHydWhy.eyebrow}</SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {dmHydWhy.title}
          </h2>
          <div
            data-reveal-group
            className="mt-12 grid gap-5 sm:grid-cols-2"
          >
            {dmHydWhy.items.map((item) => (
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

        <div className="mt-16 lg:mt-24">
          <StaticReviews title="What our Hyderabad clients say" />
        </div>
      </SectionLayout>

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">{dmHydAreas.eyebrow}</SectionMark>
          <h2
            data-reveal="heading"
            className="mt-6 max-w-3xl font-display text-[28px] leading-heading font-medium tracking-display md:text-4xl"
          >
            {dmHydAreas.title}
          </h2>
          <p
            data-reveal="text"
            className="mt-4 max-w-2xl text-base leading-body text-muted-foreground"
          >
            {dmHydAreas.body}
          </p>
          <ul
            data-reveal-group
            className="mt-10 grid grid-cols-2 gap-x-4 gap-y-2 text-sm leading-body text-foreground/85 md:grid-cols-4"
          >
            {dmHydAreas.areas.map((area) => (
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
            Questions about hiring a digital marketing agency in Hyderabad
          </h2>
          <div data-reveal-group className="mt-10 space-y-3">
            {dmHydFaqs.map((faq, index) => (
              <details
                key={faq.question}
                data-reveal="card"
                open={index === 0}
                className="group border border-line bg-background open:bg-yellow-tint"
              >
                <summary className="cursor-pointer list-none px-5 py-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                  <h3 className="pr-8 font-display text-lg font-medium leading-title">
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
              {dmHydClosing.eyebrow}
            </SectionMark>
            <h2
              data-reveal="heading"
              className="mt-6 font-display text-[28px] leading-heading font-medium tracking-display text-ink md:text-4xl dark:text-foreground"
            >
              {dmHydClosing.title}
            </h2>
            <p
              data-reveal="text"
              className="mt-4 max-w-xl text-base leading-body text-ink/75 dark:text-muted-foreground"
            >
              {dmHydClosing.body}
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
                    href={dmHydQuoteWhatsappHref}
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
              <a
                href={siteContact.phoneHref}
                className="underline-offset-2 hover:underline"
              >
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
              <a
                href={siteContact.emailHref}
                className="underline-offset-2 hover:underline"
              >
                {siteContact.email}
              </a>
            </p>
          </address>
        </Reveal>
      </SectionLayout>

      <LandingMobileCallBar
        callLabel="Call for a plan"
        whatsappHref={dmHydQuoteWhatsappHref}
      />
    </div>
  )
}
