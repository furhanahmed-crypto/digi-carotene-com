"use client"

import { useLenis } from "lenis/react"
import * as React from "react"

import { EnquiryForm } from "@/components/enquiry/enquiry-form"
import { Modal } from "@/components/shared/modal"

type EnquiryModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultService?: string
}

export function EnquiryModal({
  open,
  onOpenChange,
  defaultService,
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
      <EnquiryForm
        defaultService={defaultService}
        source="enquiry"
        onSubmitted={() => onOpenChange(false)}
      />
    </Modal>
  )
}
