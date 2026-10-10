"use client"

import * as React from "react"

import { ContactPopupModal } from "@/components/contact-popup/contact-popup-modal"
import {
  CONTACT_POPUP_HASH,
  type ContactCtaLocation,
  trackContactEvent,
} from "@/lib/contact-popup"

type OpenContactPopupOptions = {
  ctaLocation?: ContactCtaLocation
  industry?: string
}

type ContactPopupContextValue = {
  openContactPopup: (options?: OpenContactPopupOptions) => void
  closeContactPopup: () => void
}

const ContactPopupContext =
  React.createContext<ContactPopupContextValue | null>(null)

function setContactHash(open: boolean) {
  if (typeof window === "undefined") return
  const url = new URL(window.location.href)
  if (open) {
    if (url.hash.replace(/^#/, "") !== CONTACT_POPUP_HASH) {
      url.hash = CONTACT_POPUP_HASH
      window.history.replaceState(null, "", url.toString())
    }
  } else if (url.hash.replace(/^#/, "") === CONTACT_POPUP_HASH) {
    url.hash = ""
    window.history.replaceState(null, "", `${url.pathname}${url.search}`)
  }
}

export function ContactPopupProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  const [ctaLocation, setCtaLocation] =
    React.useState<ContactCtaLocation>("about_hero_contact")
  const [industry, setIndustry] = React.useState<string | undefined>()
  const [formKey, setFormKey] = React.useState(0)

  const openContactPopup = React.useCallback(
    (options?: OpenContactPopupOptions) => {
      const location = options?.ctaLocation ?? "about_hero_contact"
      setCtaLocation(location)
      setIndustry(options?.industry)
      setFormKey((k) => k + 1)
      setOpen(true)
      setContactHash(true)
      trackContactEvent("contact_form_open", { cta_location: location })
    },
    []
  )

  const closeContactPopup = React.useCallback(() => {
    setOpen(false)
    setContactHash(false)
  }, [])

  const handleOpenChange = React.useCallback(
    (next: boolean) => {
      if (next) openContactPopup({ ctaLocation, industry })
      else closeContactPopup()
    },
    [closeContactPopup, ctaLocation, industry, openContactPopup]
  )

  React.useEffect(() => {
    const maybeOpenFromHash = () => {
      if (window.location.hash.replace(/^#/, "") === CONTACT_POPUP_HASH) {
        openContactPopup({ ctaLocation: "about_hero_contact" })
      }
    }
    maybeOpenFromHash()
    window.addEventListener("hashchange", maybeOpenFromHash)
    return () => window.removeEventListener("hashchange", maybeOpenFromHash)
  }, [openContactPopup])

  const value = React.useMemo(
    () => ({ openContactPopup, closeContactPopup }),
    [openContactPopup, closeContactPopup]
  )

  return (
    <ContactPopupContext.Provider value={value}>
      {children}
      <ContactPopupModal
        open={open}
        onOpenChange={handleOpenChange}
        ctaLocation={ctaLocation}
        industry={industry}
        formKey={formKey}
      />
    </ContactPopupContext.Provider>
  )
}

export function useContactPopup() {
  const context = React.useContext(ContactPopupContext)
  if (!context) {
    throw new Error("useContactPopup must be used within ContactPopupProvider")
  }
  return context
}
