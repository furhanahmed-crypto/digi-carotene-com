"use client"

import * as React from "react"

import { EnquiryModal } from "@/components/enquiry/enquiry-modal"
import { matchEnquiryService } from "@/lib/enquiry"

type OpenEnquiryOptions = {
  /** Page/service label — matched onto enquiry options when possible. */
  service?: string
}

type EnquiryContextValue = {
  openEnquiry: (options?: OpenEnquiryOptions) => void
  closeEnquiry: () => void
}

const EnquiryContext = React.createContext<EnquiryContextValue | null>(null)

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [defaultService, setDefaultService] = React.useState("")
  /** Remount the form on each open so defaults (incl. service) always apply. */
  const [formKey, setFormKey] = React.useState(0)

  const openEnquiry = React.useCallback((options?: OpenEnquiryOptions) => {
    setDefaultService(matchEnquiryService(options?.service))
    setFormKey((key) => key + 1)
    setOpen(true)
  }, [])

  const closeEnquiry = React.useCallback(() => {
    setOpen(false)
  }, [])

  const value = React.useMemo(
    () => ({ openEnquiry, closeEnquiry }),
    [openEnquiry, closeEnquiry]
  )

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryModal
        open={open}
        onOpenChange={setOpen}
        defaultService={defaultService}
        formKey={formKey}
      />
    </EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  const context = React.useContext(EnquiryContext)
  if (!context) {
    throw new Error("useEnquiry must be used within EnquiryProvider")
  }
  return context
}
