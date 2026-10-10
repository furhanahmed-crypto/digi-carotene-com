"use client"

import * as React from "react"

import { GrowthAuditModal } from "@/components/growth-audit/growth-audit-modal"
import {
  type AuditCtaLocation,
  GROWTH_AUDIT_HASH,
  captureUtmsFromUrl,
  trackAuditEvent,
} from "@/lib/growth-audit"

type OpenGrowthAuditOptions = {
  ctaLocation?: AuditCtaLocation
  /** Pre-select Step 1 industry (visitor can change). */
  industry?: string
}

type GrowthAuditContextValue = {
  openGrowthAudit: (options?: OpenGrowthAuditOptions) => void
  closeGrowthAudit: () => void
}

const GrowthAuditContext =
  React.createContext<GrowthAuditContextValue | null>(null)

function setGrowthAuditHash(open: boolean) {
  if (typeof window === "undefined") return
  const url = new URL(window.location.href)
  if (open) {
    if (url.hash.replace(/^#/, "") !== GROWTH_AUDIT_HASH) {
      url.hash = GROWTH_AUDIT_HASH
      window.history.replaceState(null, "", url.toString())
    }
  } else if (url.hash.replace(/^#/, "") === GROWTH_AUDIT_HASH) {
    url.hash = ""
    window.history.replaceState(
      null,
      "",
      `${url.pathname}${url.search}`
    )
  }
}

export function GrowthAuditProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  const [ctaLocation, setCtaLocation] =
    React.useState<AuditCtaLocation>("home_hero")
  const [initialIndustry, setInitialIndustry] = React.useState<
    string | undefined
  >()
  const [formKey, setFormKey] = React.useState(0)

  const openGrowthAudit = React.useCallback(
    (options?: OpenGrowthAuditOptions) => {
      const location = options?.ctaLocation ?? "home_hero"
      setCtaLocation(location)
      setInitialIndustry(options?.industry)
      setFormKey((k) => k + 1)
      setOpen(true)
      setGrowthAuditHash(true)
      trackAuditEvent("audit_form_open", { cta_location: location })
    },
    []
  )

  const closeGrowthAudit = React.useCallback(() => {
    setOpen(false)
    setGrowthAuditHash(false)
  }, [])

  const handleOpenChange = React.useCallback(
    (next: boolean) => {
      if (next) openGrowthAudit({ ctaLocation, industry: initialIndustry })
      else closeGrowthAudit()
    },
    [closeGrowthAudit, ctaLocation, initialIndustry, openGrowthAudit]
  )

  React.useEffect(() => {
    captureUtmsFromUrl(window.location.search)

    const maybeOpenFromHash = () => {
      if (window.location.hash.replace(/^#/, "") === GROWTH_AUDIT_HASH) {
        openGrowthAudit({ ctaLocation: "home_hero" })
      }
    }

    maybeOpenFromHash()
    window.addEventListener("hashchange", maybeOpenFromHash)
    return () => window.removeEventListener("hashchange", maybeOpenFromHash)
  }, [openGrowthAudit])

  const value = React.useMemo(
    () => ({ openGrowthAudit, closeGrowthAudit }),
    [openGrowthAudit, closeGrowthAudit]
  )

  return (
    <GrowthAuditContext.Provider value={value}>
      {children}
      <GrowthAuditModal
        open={open}
        onOpenChange={handleOpenChange}
        ctaLocation={ctaLocation}
        initialIndustry={initialIndustry}
        formKey={formKey}
      />
    </GrowthAuditContext.Provider>
  )
}

export function useGrowthAudit() {
  const context = React.useContext(GrowthAuditContext)
  if (!context) {
    throw new Error("useGrowthAudit must be used within GrowthAuditProvider")
  }
  return context
}
