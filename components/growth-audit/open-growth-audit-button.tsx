"use client"

import { ArrowRight } from "lucide-react"

import { useGrowthAudit } from "@/components/growth-audit/growth-audit-provider"
import { Button } from "@/components/ui/button"
import {
  GROWTH_AUDIT_FALLBACK_HREF,
  type AuditCtaLocation,
} from "@/lib/growth-audit"
import { cn } from "@/lib/utils"

type OpenGrowthAuditButtonProps = {
  label: string
  ctaLocation: AuditCtaLocation
  className?: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive" | "link"
}

/** Opens the growth-audit modal; no-JS fallback is /contact?audit=1. */
export function OpenGrowthAuditButton({
  label,
  ctaLocation,
  className,
  size = "lg",
  variant = "default",
}: OpenGrowthAuditButtonProps) {
  const { openGrowthAudit } = useGrowthAudit()

  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={GROWTH_AUDIT_FALLBACK_HREF}
          onClick={(event) => {
            event.preventDefault()
            openGrowthAudit({ ctaLocation })
          }}
        />
      }
      size={size}
      variant={variant}
      className={cn(className)}
    >
      {label}
      <ArrowRight className="size-4" />
    </Button>
  )
}
