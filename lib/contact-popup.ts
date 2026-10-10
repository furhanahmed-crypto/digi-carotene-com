export const CONTACT_POPUP_HASH = "contact"
export const CONTACT_POPUP_FALLBACK_HREF = "/contact"
export const CONTACT_REPLY_DAYS = "1 working day"

export type ContactCtaLocation =
  | "about_hero_contact"
  | "about_final_cta"
  | `industry_${string}_expert`
  | string

export type ContactEnquiryType =
  | "Start a new project"
  | "Get a quote"
  | "Free growth audit"
  | "Partnership"
  | "Careers"
  | "Something else"

export const contactEnquiryTypes: readonly ContactEnquiryType[] = [
  "Start a new project",
  "Get a quote",
  "Free growth audit",
  "Partnership",
  "Careers",
  "Something else",
]

export type ContactPopupFormState = {
  full_name: string
  email: string
  country_code: string
  phone: string
  business_name: string
  enquiry_type: string
  message: string
  consent: boolean
  company_fax: string
  industry: string
}

export const emptyContactPopupForm = (): ContactPopupFormState => ({
  full_name: "",
  email: "",
  country_code: "+91",
  phone: "",
  business_name: "",
  enquiry_type: "",
  message: "",
  consent: false,
  company_fax: "",
  industry: "",
})

export const CONTACT_ERRORS = {
  required: "Please fill this in.",
  email: "Please enter a valid email, like name@business.com.",
  phone: "Please enter a valid phone number.",
  message: "Tell us a little more (at least 10 characters).",
  consent: "Please agree so we can contact you.",
} as const

export type ContactFieldErrors = Partial<
  Record<keyof ContactPopupFormState, string>
>

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "")
  return digits.length >= 7 && digits.length <= 15
}

export function validateContactPopup(
  form: ContactPopupFormState
): ContactFieldErrors {
  const errors: ContactFieldErrors = {}
  if (form.full_name.trim().length < 2 || form.full_name.trim().length > 60) {
    errors.full_name = CONTACT_ERRORS.required
  }
  if (!form.email.trim()) errors.email = CONTACT_ERRORS.required
  else if (!isValidEmail(form.email)) errors.email = CONTACT_ERRORS.email
  if (!form.phone.trim()) errors.phone = CONTACT_ERRORS.required
  else if (!isValidPhone(form.phone)) errors.phone = CONTACT_ERRORS.phone
  if (form.business_name.trim().length > 80) {
    errors.business_name = CONTACT_ERRORS.required
  }
  if (!form.enquiry_type.trim()) errors.enquiry_type = CONTACT_ERRORS.required
  const msgLen = form.message.trim().length
  if (msgLen < 10) errors.message = CONTACT_ERRORS.message
  if (msgLen > 1000) errors.message = "Please keep this under 1000 characters."
  if (!form.consent) errors.consent = CONTACT_ERRORS.consent
  return errors
}

export function contactFormIsDirty(form: ContactPopupFormState): boolean {
  const empty = emptyContactPopupForm()
  return (Object.keys(empty) as Array<keyof ContactPopupFormState>).some(
    (key) => {
      if (key === "country_code") return form.country_code !== empty.country_code
      if (key === "industry") return false
      if (typeof form[key] === "boolean") return form[key] !== empty[key]
      return String(form[key]).trim() !== String(empty[key]).trim()
    }
  )
}

export function firstNameFrom(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || "there"
}

export function trackContactEvent(
  event: string,
  params?: Record<string, string | number | undefined>
) {
  if (typeof window === "undefined") return
  const gtag = (
    window as Window & {
      gtag?: (...args: unknown[]) => void
    }
  ).gtag
  if (typeof gtag === "function") {
    gtag("event", event, params)
  }
}

/** Map industry page slug → audit / contact industry label. */
export const industrySlugToAuditLabel: Record<string, string> = {
  healthcare: "Healthcare & Clinics",
  restaurants: "Restaurants, Cafés & QSR",
  salons: "Salons & Beauty",
  education: "Education & Coaching",
  "real-estate-furniture": "Real Estate & Furniture",
  "d2c-retail": "D2C, Food & Retail",
  "b2b-technology": "B2B & Technology",
}

export const industrySlugToCtaKey: Record<string, string> = {
  healthcare: "healthcare",
  restaurants: "restaurants",
  salons: "salons",
  education: "education",
  "real-estate-furniture": "real_estate",
  "d2c-retail": "d2c_retail",
  "b2b-technology": "b2b_tech",
}
