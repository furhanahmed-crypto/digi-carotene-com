import type { Metadata } from "next"

import { OutlinePage } from "@/components/inner/outline-page"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/services/digital-marketing/orm")

const body = (title: string, detail: string) => ({
  title,
  mark: "ORM",
  body: detail,
})

export default function OrmPage() {
  return (
    <OutlinePage
      title="Online Reputation Management (ORM) Services in Hyderabad"
      description="Reviews and search results shape trust before the first call. We grow the good, monitor the noise and respond with a plan."
      mark="Online Reputation Management"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "Online Reputation Management" },
      ]}
      sections={[
        body(
          "Google Review Growth and Response",
          "Earn more reviews and reply in a voice that builds trust."
        ),
        body(
          "Review Monitoring Across Platforms",
          "Watch Google, Practo, Justdial and social mentions in one view."
        ),
        body(
          "Handling Negative Reviews",
          "Calm, factual responses and escalation paths that protect the brand."
        ),
        body(
          "Reputation for Doctors and Hospitals",
          "Compliant reputation work for clinics and healthcare brands."
        ),
        body(
          "Crisis Response",
          "Fast coordination across PR, social and search when something breaks."
        ),
      ]}
      faqs={[]}
      related={[
        {
          title: "PR & Brand Communications",
          href: "/services/pr",
          body: "Media and narrative support alongside reputation work.",
        },
        {
          title: "SEO, AEO & GEO",
          href: "/services/digital-marketing/seo",
          body: "Search visibility that matches the reputation you earn.",
        },
        {
          title: "Healthcare & Clinics",
          href: "/industries/healthcare",
          body: "Sector playbook where reviews and ORM matter most.",
        },
      ]}
      primaryCta="Get a Free Growth Audit"
      ctaTitle="Want to know what your reviews say about you?"
      ctaLabel="Get a Free Growth Audit"
    />
  )
}