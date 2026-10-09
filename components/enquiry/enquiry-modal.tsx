"use client"

import { useLenis } from "lenis/react"
import * as React from "react"

import { EnquiryForm } from "@/components/enquiry/enquiry-form"
import { Modal } from "@/components/shared/modal"

type EnquiryModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultService?: string
  /** Bumps on each open so the form remounts with fresh defaults. */
  formKey?: number
}

export function EnquiryModal({
  open,
  onOpenChange,
  defaultService,
  formKey = 0,
}: EnquiryModalProps) {
  const lenis = useLenis()

  React.useEffect(() => {
    if (!lenis) return
    if (open) lenis.stop()
    else lenis.start()
    return () => {
      lenis.start()
    }
  }, [open, lenis])

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Enquire with Digi Carotene"
      description="Share a few details and a strategist will get back within one working day."
      modal="trap-focus"
      contentClassName="sm:max-w-md"
    >
      {open ? (
        <EnquiryForm
          key={formKey}
          defaultService={defaultService}
          source="enquiry"
          onSubmitted={() => onOpenChange(false)}
        />
      ) : null}
    </Modal>
  )
}
