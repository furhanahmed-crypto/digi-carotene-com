"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type TrackedCtaLinkProps = {
  href: string
  label: string
  ctaLocation: string
  className?: string
}

/** Plain link CTA that fires a GA4 `cta_click` event when available. */
export function TrackedCtaLink({
  href,
  label,
  ctaLocation,
  className,
}: TrackedCtaLinkProps) {
  return (
    <Button
      nativeButton={false}
      render={
        <Link
          href={href}
          onClick={() => {
            const gtag = (
              window as Window & { gtag?: (...args: unknown[]) => void }
            ).gtag
            if (typeof gtag === "function") {
              gtag("event", "cta_click", { cta_location: ctaLocation })
            }
          }}
        />
      }
      size="lg"
      className={cn(className)}
    >
      {label}
      <ArrowRight className="size-4" />
    </Button>
  )
}
