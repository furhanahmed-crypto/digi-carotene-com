"use client"

import { TrackedContactLink } from "@/components/landing/tracked-contact-link"
import { siteContact } from "@/constants/site/contact"

type LandingMobileCallBarProps = {
  callLabel: string
  whatsappHref: string
}

/** Fixed dual CTA bar below 640px (landing PDF §11). */
export function LandingMobileCallBar({
  callLabel,
  whatsappHref,
}: LandingMobileCallBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-paper shadow-[0_-8px_24px_rgba(0,0,0,0.08)] sm:hidden dark:border-border dark:bg-background">
      <TrackedContactLink
        href={siteContact.phoneHref}
        event="call_click"
        buttonLocation="mobile_bar"
        className="flex min-h-14 items-center justify-center bg-brand-yellow px-3 text-center text-sm font-semibold text-ink"
      >
        {callLabel}
      </TrackedContactLink>
      <TrackedContactLink
        href={whatsappHref}
        event="whatsapp_click"
        buttonLocation="mobile_bar"
        external
        className="flex min-h-14 items-center justify-center bg-ink px-3 text-center text-sm font-semibold text-paper dark:bg-brand-yellow dark:text-ink"
      >
        WhatsApp
      </TrackedContactLink>
    </div>
  )
}
