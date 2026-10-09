import { permanentRedirect } from "next/navigation"

/** Website v2 used /case-studies; Case Studies SEO PDF hubs at /growth-scenarios. */
export default function CaseStudiesRedirectPage() {
  permanentRedirect("/growth-scenarios")
}
