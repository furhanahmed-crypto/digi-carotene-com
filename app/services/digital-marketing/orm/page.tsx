import type { Metadata } from "next"

import { OutlinePage } from "@/components/inner/outline-page"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/services/digital-marketing/orm")

const body = (title: string) => ({
  title,
  mark: "ORM",
  body: `[[${title} — copy to confirm]]`,
})

export default function OrmPage() {
  return (
    <OutlinePage
      title="Online Reputation Management (ORM) Services in Hyderabad"
      description="[[Intro: how reviews and search results shape trust and enquiries — to confirm]]"
      mark="Online Reputation Management"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "Online Reputation Management" },
      ]}
      sections={[
        body("Google Review Growth and Response"),
        body("Review Monitoring Across Platforms"),
        body("Handling Negative Reviews"),
        body("Reputation for Doctors and Hospitals"),
        body("Crisis Response"),
      ]}
      faqs={[]}
      related={[
        {
          title: "PR & Brand Communications",
          href: "/services/pr",
          body: "[[One-line service summary — to confirm]]",
        },
        {
          title: "SEO, AEO & GEO",
          href: "/services/digital-marketing/seo",
          body: "[[One-line service summary — to confirm]]",
        },
        {
          title: "Healthcare & Clinics",
          href: "/industries/healthcare",
          body: "[[One-line industry summary — to confirm]]",
        },
      ]}
      primaryCta="Get a Free Growth Audit"
      ctaTitle="Want to know what your reviews say about you?"
      ctaLabel="Get a Free Growth Audit"
    />
  )
}
