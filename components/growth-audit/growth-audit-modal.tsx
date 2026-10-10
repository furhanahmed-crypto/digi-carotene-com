"use client"

import * as React from "react"

import { GrowthAuditForm } from "@/components/growth-audit/growth-audit-form"
import { Modal } from "@/components/shared/modal"
import { AUDIT_REPLY_DAYS } from "@/constants/growth-audit/options"
import {
  type AuditCtaLocation,
  trackAuditEvent,
} from "@/lib/growth-audit"

type GrowthAuditModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  ctaLocation: AuditCtaLocation
  initialIndustry?: string
  formKey: number
}

export function GrowthAuditModal({
  open,
  onOpenChange,
  ctaLocation,
  initialIndustry,
  formKey,
}: GrowthAuditModalProps) {
  const dirtyRef = React.useRef(false)
  const lastStepRef = React.useRef(1)

  const requestClose = React.useCallback(() => {
    if (dirtyRef.current) {
      trackAuditEvent("audit_form_abandon", {
        last_step: lastStepRef.current,
      })
    }
    onOpenChange(false)
  }, [onOpenChange])

  return (
    <Modal
      open={open}
      disablePointerDismissal
      onOpenChange={(next, details) => {
        if (next) {
          onOpenChange(true)
          return
        }
        // Close only via the X button — ignore Escape / outside press.
        if (details?.reason && details.reason !== "close-press") return
        requestClose()
      }}
      title="Get Your Free Growth Audit"
      description={`Tell us about your business. We'll review your website, social channels and ads, then send you the three fastest wins — free. Reply within ${AUDIT_REPLY_DAYS}.`}
      modal="trap-focus"
      contentClassName="max-h-[min(100dvh,720px)] w-full sm:max-w-[640px] max-md:top-auto max-md:bottom-0 max-md:max-h-[100dvh] max-md:translate-y-0 max-md:rounded-b-none max-md:data-closed:slide-out-to-bottom max-md:data-open:slide-in-from-bottom"
    >
      {open ? (
        <GrowthAuditForm
          key={formKey}
          ctaLocation={ctaLocation}
          initialIndustry={initialIndustry}
          registerDirty={(dirty) => {
            dirtyRef.current = dirty
          }}
          onStepChange={(step) => {
            lastStepRef.current = step
          }}
        />
      ) : null}
    </Modal>
  )
}
