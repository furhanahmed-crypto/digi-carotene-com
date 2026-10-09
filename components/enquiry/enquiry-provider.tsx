"use client"

import * as React from "react"

import { EnquiryModal } from "@/components/enquiry/enquiry-modal"

type OpenEnquiryOptions = {
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

  const openEnquiry = React.useCallback((options?: OpenEnquiryOptions) => {
    setDefaultService(options?.service ?? "")
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
