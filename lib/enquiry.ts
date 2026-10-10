/** Mirrors the Services nav — digital, offline, and PR. */
export const enquiryServiceOptions = [
  // Digital
  "Performance Marketing",
  "Growth Marketing",
  "Search Engine Optimization",
  "Content Marketing",
  "Social Media Marketing",
  "Graphic Designing",
  "Web-Design & Development",
  "Personal Branding",
  "Email Marketing",
  "Insta Shoot",
  "WhatsApp Marketing",
  "Online Reputation Management",
  // Offline
  "Mall Activations",
  "Residential Activations",
  "Theatre Marketing",
  "Campus Activations",
  "Corporate Events",
  "Festival Marketing",
  "Popup-stores",
  "Influencer Campaigns",
  "Metro Branding",
  // PR + catch-all
  "PR Services",
  "Not sure yet",
] as const

export type EnquirySource = "enquiry" | "contact"

export type ThankYouParams = {
  name: string
  service?: string
  source?: EnquirySource
}

/** Map a page/service title onto a known enquiry option when possible. */
export function matchEnquiryService(label?: string): string {
  if (!label?.trim()) return ""
  const normalized = label.trim().toLowerCase()

  const exact = enquiryServiceOptions.find(
    (option) => option.toLowerCase() === normalized
  )
  if (exact) return exact

  const aliases: Array<[string | RegExp, (typeof enquiryServiceOptions)[number]]> = [
    [/seo|aeo|geo|search engine/, "Search Engine Optimization"],
    [/performance/, "Performance Marketing"],
    [/growth/, "Growth Marketing"],
    [/content/, "Content Marketing"],
    [/social/, "Social Media Marketing"],
    [/graphic/, "Graphic Designing"],
    [/web|website|design.*dev|development/, "Web-Design & Development"],
    [/personal brand/, "Personal Branding"],
    [/email/, "Email Marketing"],
    [/insta|reel/, "Insta Shoot"],
    [/whatsapp/, "WhatsApp Marketing"],
    [/orm|reputation/, "Online Reputation Management"],
    [/mall/, "Mall Activations"],
    [/residential/, "Residential Activations"],
    [/theatre|theater|cinema/, "Theatre Marketing"],
    [/campus/, "Campus Activations"],
    [/corporate/, "Corporate Events"],
    [/festival/, "Festival Marketing"],
    [/popup|pop-up/, "Popup-stores"],
    [/influencer/, "Influencer Campaigns"],
    [/metro/, "Metro Branding"],
    [/\bpr\b|public relations/, "PR Services"],
  ]

  for (const [test, option] of aliases) {
    if (typeof test === "string") {
      if (normalized.includes(test)) return option
    } else if (test.test(normalized)) {
      return option
    }
  }

  return ""
}

/** Build `/thank-you?...` after a dummy form submit. */
export function buildThankYouHref({
  name,
  service,
  source = "enquiry",
}: ThankYouParams): string {
  const params = new URLSearchParams()
  params.set("name", name.trim())
  if (service?.trim()) params.set("service", service.trim())
  params.set("source", source)
  return `/thank-you/?${params.toString()}`
}
