import { permanentRedirect } from "next/navigation"

/** Static-export friendly stand-in for next.config redirects(). */
export default function CaseStudiesRedirectPage() {
  permanentRedirect("/growth-scenarios/")
}
