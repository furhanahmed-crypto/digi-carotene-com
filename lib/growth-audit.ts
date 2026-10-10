import {
  ADS_NOT_RUNNING,
  auditGoals,
  auditIndustries,
  budgetRangesInr,
  budgetRangesUsd,
} from "@/constants/growth-audit/options"

export const GROWTH_AUDIT_HASH = "growth-audit"
export const GROWTH_AUDIT_FALLBACK_HREF = "/growth-audit"

const FORM_STORAGE_KEY = "dc-growth-audit-form"
const UTM_STORAGE_KEY = "dc-growth-audit-utm"

export type AuditCtaLocation =
  | "home_hero"
  | "home_final_cta"
  | `service_${string}`
  | string

export type GrowthAuditFormState = {
  full_name: string
  business_name: string
  email: string
  country_code: string
  phone: string
  whatsapp_ok: boolean
  country: string
  city: string
  industry: string
  industry_other: string
  website_url: string
  instagram: string
  linkedin_url: string
  youtube_url: string
  gbp_url: string
  ads_running: string[]
  goal: string[]
  challenge: string
  budget: string
  consent: boolean
  /** Honeypot — must stay empty. */
  company_fax: string
}

export type GrowthAuditUtmState = {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
  gclid: string
  fbclid: string
}

export type GrowthAuditStep = 1 | 2 | 3

export const emptyGrowthAuditForm = (): GrowthAuditFormState => ({
  full_name: "",
  business_name: "",
  email: "",
  country_code: "+91",
  phone: "",
  whatsapp_ok: true,
  country: "India",
  city: "",
  industry: "",
  industry_other: "",
  website_url: "",
  instagram: "",
  linkedin_url: "",
  youtube_url: "",
  gbp_url: "",
  ads_running: [],
  goal: [],
  challenge: "",
  budget: "",
  consent: false,
  company_fax: "",
})

export const ERRORS = {
  required: "Please fill this in.",
  email: "Please enter a valid email, like name@business.com.",
  phone: "Please enter a valid phone number.",
  url: "This doesn't look like a link. Please check it.",
  links: "Add at least one link so we know what to audit.",
  challenge: "Tell us a little more (at least 20 characters).",
  consent: "Please agree so we can contact you.",
} as const

export function firstNameFrom(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || "there"
}

export function isIndia(country: string): boolean {
  return country.trim().toLowerCase() === "india"
}

export function budgetOptionsFor(country: string) {
  return isIndia(country) ? budgetRangesInr : budgetRangesUsd
}

export function normalizeWebsiteUrl(raw: string): string {
  const value = raw.trim()
  if (!value) return ""
  if (/^https?:\/\//i.test(value)) return value
  return `https://${value}`
}

export function normalizeInstagram(raw: string): string {
  const value = raw.trim()
  if (!value) return ""
  if (/instagram\.com/i.test(value)) {
    return value.startsWith("http") ? value : `https://${value}`
  }
  const handle = value.replace(/^@/, "")
  return `https://instagram.com/${handle}`
}

export function normalizeYoutube(raw: string): string {
  const value = raw.trim()
  if (!value) return ""
  if (/youtube\.com|youtu\.be/i.test(value)) {
    return value.startsWith("http") ? value : `https://${value}`
  }
  const handle = value.replace(/^@/, "")
  return `https://youtube.com/@${handle}`
}

export function phoneToE164(countryCode: string, phone: string): string {
  const digits = phone.replace(/\D/g, "")
  const code = countryCode.replace(/\D/g, "")
  return `+${code}${digits}`
}

export function listFilledLinkLabels(form: GrowthAuditFormState): string[] {
  const labels: string[] = []
  if (form.website_url.trim()) labels.push("website")
  if (form.instagram.trim()) labels.push("Instagram")
  if (form.linkedin_url.trim()) labels.push("LinkedIn")
  if (form.youtube_url.trim()) labels.push("YouTube")
  if (form.gbp_url.trim()) labels.push("Google Business Profile")
  return labels
}

export function formatLinkList(labels: string[]): string {
  if (labels.length === 0) return "channels"
  if (labels.length === 1) return labels[0]
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`
  return `${labels.slice(0, -1).join(", ")} and ${labels[labels.length - 1]}`
}

export function formIsDirty(form: GrowthAuditFormState): boolean {
  const empty = emptyGrowthAuditForm()
  return (Object.keys(empty) as Array<keyof GrowthAuditFormState>).some(
    (key) => {
      if (key === "whatsapp_ok") return form.whatsapp_ok !== empty.whatsapp_ok
      if (key === "country_code") return form.country_code !== empty.country_code
      if (key === "country") return form.country !== empty.country
      if (key === "ads_running" || key === "goal") {
        return form[key].length > 0
      }
      if (typeof form[key] === "boolean") return form[key] !== empty[key]
      return String(form[key]).trim() !== String(empty[key]).trim()
    }
  )
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "")
  return digits.length >= 7 && digits.length <= 15
}

function looksLikeUrl(value: string): boolean {
  const v = value.trim()
  if (!v) return true
  try {
    const withProtocol = /^https?:\/\//i.test(v) ? v : `https://${v}`
    const url = new URL(withProtocol)
    return Boolean(url.hostname.includes("."))
  } catch {
    return false
  }
}

function isValidLinkedIn(value: string): boolean {
  const v = value.trim().toLowerCase()
  if (!v) return true
  return (
    v.includes("linkedin.com/company/") || v.includes("linkedin.com/in/")
  )
}

function isValidGbp(value: string): boolean {
  const v = value.trim().toLowerCase()
  if (!v) return true
  return (
    v.includes("maps.google") ||
    v.includes("google.com/maps") ||
    v.includes("g.page") ||
    v.includes("share.google") ||
    v.includes("goo.gl/maps")
  )
}

export type FieldErrors = Partial<Record<keyof GrowthAuditFormState, string>>

export function validateStep(
  step: GrowthAuditStep,
  form: GrowthAuditFormState
): FieldErrors {
  const errors: FieldErrors = {}

  if (step === 1) {
    if (form.full_name.trim().length < 2 || form.full_name.trim().length > 60) {
      errors.full_name = ERRORS.required
    }
    if (
      form.business_name.trim().length < 2 ||
      form.business_name.trim().length > 80
    ) {
      errors.business_name = ERRORS.required
    }
    if (!form.email.trim()) errors.email = ERRORS.required
    else if (!isValidEmail(form.email)) errors.email = ERRORS.email
    if (!form.phone.trim()) errors.phone = ERRORS.required
    else if (!isValidPhone(form.phone)) errors.phone = ERRORS.phone
    if (!form.country.trim()) errors.country = ERRORS.required
    if (form.city.trim().length > 60) errors.city = ERRORS.required
  }

  if (step === 2) {
    if (!form.industry.trim()) errors.industry = ERRORS.required
    else if (!(auditIndustries as readonly string[]).includes(form.industry)) {
      errors.industry = ERRORS.required
    }
    if (form.industry === "Other") {
      if (
        form.industry_other.trim().length < 2 ||
        form.industry_other.trim().length > 60
      ) {
        errors.industry_other = ERRORS.required
      }
    }
    const hasLink = Boolean(
      form.website_url.trim() ||
        form.instagram.trim() ||
        form.linkedin_url.trim() ||
        form.youtube_url.trim()
    )
    if (!hasLink) {
      errors.website_url = ERRORS.links
    }
    if (form.website_url.trim() && !looksLikeUrl(form.website_url)) {
      errors.website_url = ERRORS.url
    }
    if (form.linkedin_url.trim() && !isValidLinkedIn(form.linkedin_url)) {
      errors.linkedin_url = ERRORS.url
    }
    if (form.youtube_url.trim() && !looksLikeUrl(normalizeYoutube(form.youtube_url))) {
      errors.youtube_url = ERRORS.url
    }
    if (form.gbp_url.trim() && !isValidGbp(form.gbp_url)) {
      errors.gbp_url = ERRORS.url
    }
  }

  if (step === 3) {
    if (form.ads_running.length === 0) errors.ads_running = ERRORS.required
    if (
      form.goal.length === 0 ||
      form.goal.some((g) => !(auditGoals as readonly string[]).includes(g))
    ) {
      errors.goal = ERRORS.required
    }
    const challengeLen = form.challenge.trim().length
    if (challengeLen < 20) errors.challenge = ERRORS.challenge
    if (challengeLen > 1000) errors.challenge = "Please keep this under 1000 characters."
    if (!form.consent) errors.consent = ERRORS.consent
    if (form.budget) {
      const allowed = budgetOptionsFor(form.country) as readonly string[]
      if (!allowed.includes(form.budget)) errors.budget = ERRORS.required
    }
  }

  return errors
}

export function persistForm(form: GrowthAuditFormState) {
  try {
    sessionStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(form))
  } catch {
    /* ignore quota */
  }
}

export function loadForm(): GrowthAuditFormState | null {
  try {
    const raw = sessionStorage.getItem(FORM_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<GrowthAuditFormState> & {
      goal?: string | string[]
    }
    const goal = Array.isArray(parsed.goal)
      ? parsed.goal
      : typeof parsed.goal === "string" && parsed.goal
        ? [parsed.goal]
        : []
    const budget =
      parsed.budget === "Under ₹25,000" ? "" : (parsed.budget ?? "")
    return {
      ...emptyGrowthAuditForm(),
      ...parsed,
      goal,
      budget,
      ads_running: Array.isArray(parsed.ads_running) ? parsed.ads_running : [],
    }
  } catch {
    return null
  }
}

export function clearFormStorage() {
  try {
    sessionStorage.removeItem(FORM_STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

export function captureUtmsFromUrl(search: string): GrowthAuditUtmState {
  const params = new URLSearchParams(search)
  const next: GrowthAuditUtmState = {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_term: params.get("utm_term") ?? "",
    utm_content: params.get("utm_content") ?? "",
    gclid: params.get("gclid") ?? "",
    fbclid: params.get("fbclid") ?? "",
  }
  const hasAny = Object.values(next).some(Boolean)
  if (hasAny) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* ignore */
    }
  }
  return loadUtms() ?? next
}

export function loadUtms(): GrowthAuditUtmState | null {
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as GrowthAuditUtmState
  } catch {
    return null
  }
}

export function normalizeFormForSubmit(
  form: GrowthAuditFormState
): GrowthAuditFormState {
  return {
    ...form,
    website_url: form.website_url.trim()
      ? normalizeWebsiteUrl(form.website_url)
      : "",
    instagram: form.instagram.trim()
      ? normalizeInstagram(form.instagram)
      : "",
    linkedin_url: form.linkedin_url.trim()
      ? normalizeWebsiteUrl(form.linkedin_url)
      : "",
    youtube_url: form.youtube_url.trim()
      ? normalizeYoutube(form.youtube_url)
      : "",
    gbp_url: form.gbp_url.trim() ? normalizeWebsiteUrl(form.gbp_url) : "",
  }
}

export function toggleAdsRunning(
  current: string[],
  option: string
): string[] {
  if (option === ADS_NOT_RUNNING) {
    return current.includes(ADS_NOT_RUNNING) ? [] : [ADS_NOT_RUNNING]
  }
  const withoutNone = current.filter((v) => v !== ADS_NOT_RUNNING)
  if (withoutNone.includes(option)) {
    return withoutNone.filter((v) => v !== option)
  }
  return [...withoutNone, option]
}

export function toggleGoal(current: string[], option: string): string[] {
  if (current.includes(option)) {
    return current.filter((v) => v !== option)
  }
  return [...current, option]
}

export type GrowthAuditThankYouParams = {
  name: string
  business: string
  links: string
  channel: "whatsapp" | "email"
}

/** Build `/thank-you?...` after client-side audit submit (no server storage). */
export function buildGrowthAuditThankYouHref(
  params: GrowthAuditThankYouParams
): string {
  const search = new URLSearchParams()
  search.set("source", "growth-audit")
  search.set("name", params.name.trim())
  if (params.business.trim()) search.set("business", params.business.trim())
  if (params.links.trim()) search.set("links", params.links.trim())
  search.set("channel", params.channel)
  return `/thank-you/?${search.toString()}`
}

export function trackAuditEvent(
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
