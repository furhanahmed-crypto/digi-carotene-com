import type { Metadata } from "next"

import { OutlinePage } from "@/components/inner/outline-page"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor(
  "/services/digital-marketing/whatsapp-marketing"
)

const body = (title: string) => ({
  title,
  mark: "WhatsApp Marketing",
  body: `[[${title} — copy to confirm]]`,
})

export default function WhatsAppMarketingPage() {
  return (
    <OutlinePage
      title="WhatsApp Business API and Marketing Automation in Hyderabad"
      description="[[Intro: how WhatsApp turns enquiries into bookings and repeat customers — to confirm]]"
      mark="WhatsApp Marketing"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "WhatsApp Marketing" },
      ]}
      sections={[
        body("Official WhatsApp Business API Setup"),
        body("Click-to-WhatsApp Ads"),
        body("Booking, Reminders and Broadcasts"),
        body("Chatbots and CRM Integration"),
        {
          title: "Use Cases",
          mark: "WhatsApp Marketing",
          items: ["Clinics", "Salons", "Restaurants", "Coaching"],
        },
      ]}
      faqs={[]}
      related={[
        {
          title: "Email Marketing",
          href: "/services/digital-marketing/email",
          body: "[[One-line service summary — to confirm]]",
        },
        {
          title: "Performance Marketing",
          href: "/services/digital-marketing/performance-marketing",
          body: "[[One-line service summary — to confirm]]",
        },
        {
          title: "Salons & Beauty",
          href: "/industries/salons",
          body: "[[One-line industry summary — to confirm]]",
        },
      ]}
      primaryCta="Get a Free Growth Audit"
      ctaTitle="Ready to turn WhatsApp into a growth channel?"
      ctaLabel="Get a Free Growth Audit"
    />
  )
}
