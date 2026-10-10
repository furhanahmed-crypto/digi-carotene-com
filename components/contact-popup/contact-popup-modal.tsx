"use client"

import * as React from "react"

import { ContactPopupForm } from "@/components/contact-popup/contact-popup-form"
import { Modal } from "@/components/shared/modal"
import {
  CONTACT_REPLY_DAYS,
  type ContactCtaLocation,
  trackContactEvent,
} from "@/lib/contact-popup"

type ContactPopupModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  ctaLocation: ContactCtaLocation
  industry?: string
  formKey: number
}

export function ContactPopupModal({
  open,
  onOpenChange,
  ctaLocation,
  industry,
  formKey,
}: ContactPopupModalProps) {
  const dirtyRef = React.useRef(false)

  const requestClose = React.useCallback(() => {
    if (dirtyRef.current) {
      const leave = window.confirm(
        "Leave this form? Your details will be lost."
      )
      if (!leave) return
      trackContactEvent("contact_form_abandon", {
        cta_location: ctaLocation,
      })
    }
    onOpenChange(false)
  }, [ctaLocation, onOpenChange])

  return (
    <Modal
      open={open}
      onOpenChange={(next) => {
        if (!next) requestClose()
        else onOpenChange(true)
      }}
      title="Let's Talk"
      description={`Tell us what you need and we'll get back to you within ${CONTACT_REPLY_DAYS}.`}
      modal="trap-focus"
      contentClassName="max-h-[min(100dvh,720px)] w-full sm:max-w-[640px] max-md:top-auto max-md:bottom-0 max-md:max-h-[100dvh] max-md:translate-y-0 max-md:rounded-b-none max-md:data-closed:slide-out-to-bottom max-md:data-open:slide-in-from-bottom"
    >
      {open ? (
        <ContactPopupForm
          key={formKey}
          ctaLocation={ctaLocation}
          industry={industry}
          registerDirty={(dirty) => {
            dirtyRef.current = dirty
          }}
          onClose={() => onOpenChange(false)}
          onCloseSilent={() => {
            dirtyRef.current = false
            onOpenChange(false)
          }}
        />
      ) : null}
    </Modal>
  )
}
