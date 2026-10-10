"use client"

import { ArrowRight } from "lucide-react"

import { useContactPopup } from "@/components/contact-popup/contact-popup-provider"
import { Button } from "@/components/ui/button"
import {
  CONTACT_POPUP_FALLBACK_HREF,
  type ContactCtaLocation,
} from "@/lib/contact-popup"
import { cn } from "@/lib/utils"

type OpenContactButtonProps = {
  label: string
  ctaLocation: ContactCtaLocation
  industry?: string
  className?: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive" | "link"
  showArrow?: boolean
}

/** Opens the contact popup; no-JS fallback is /contact. */
export function OpenContactButton({
  label,
  ctaLocation,
  industry,
  className,
  size = "lg",
  variant = "default",
  showArrow = true,
}: OpenContactButtonProps) {
  const { openContactPopup } = useContactPopup()

  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={CONTACT_POPUP_FALLBACK_HREF}
          onClick={(event) => {
            event.preventDefault()
            openContactPopup({ ctaLocation, industry })
          }}
        />
      }
      size={size}
      variant={variant}
      className={cn(className)}
    >
      {label}
      {showArrow ? <ArrowRight className="size-4" /> : null}
    </Button>
  )
}
