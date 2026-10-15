"use client"

import { OpenEnquiryButton } from "@/components/enquiry/open-enquiry-button"
import { TrackedContactLink } from "@/components/landing/tracked-contact-link"
import { siteContact } from "@/constants/site/contact"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"

type LandingMobileCallBarProps = {
  callLabel?: string
  enquireLabel?: string
  serviceName: string
  whatsappHref: string
}

/**
 * Full-width fixed dual CTA. Starts below the viewport and slides in once
 * scrolled. <1024: Call | WhatsApp · ≥1024: Enquire | WhatsApp.
 */
export function LandingMobileCallBar({
  callLabel = "Call us",
  enquireLabel = "Enquire now",
  serviceName,
  whatsappHref,
}: LandingMobileCallBarProps) {
  const visible = useScrolled(0)

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-paper shadow-[0_-8px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out dark:border-border dark:bg-background",
        "motion-reduce:transition-none",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <TrackedContactLink
        href={siteContact.phoneHref}
        event="call_click"
        buttonLocation="mobile_bar"
        tabIndex={visible ? undefined : -1}
        className="flex min-h-14 items-center justify-center bg-brand-yellow px-3 text-center text-sm font-semibold text-ink lg:hidden"
      >
        {callLabel}
      </TrackedContactLink>
      <OpenEnquiryButton
        label={enquireLabel}
        serviceName={serviceName}
        size="lg"
        className="hidden h-auto min-h-14 w-full rounded-none border-0 bg-brand-yellow px-3 text-sm font-semibold text-ink hover:bg-brand-yellow/90 hover:scale-100 lg:inline-flex [&_svg]:hidden"
      />
      <TrackedContactLink
        href={whatsappHref}
        event="whatsapp_click"
        buttonLocation="mobile_bar"
        external
        tabIndex={visible ? undefined : -1}
        className="flex min-h-14 items-center justify-center bg-ink px-3 text-center text-sm font-semibold text-paper dark:bg-brand-yellow dark:text-ink"
      >
        WhatsApp
      </TrackedContactLink>
    </div>
  )
}
