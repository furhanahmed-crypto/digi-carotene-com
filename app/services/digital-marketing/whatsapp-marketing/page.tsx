import type { Metadata } from "next"

import { OutlinePage } from "@/components/inner/outline-page"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor(
  "/services/digital-marketing/whatsapp-marketing"
)

const body = (title: string, detail: string) => ({
  title,
  mark: "WhatsApp Marketing",
  body: detail,
})

export default function WhatsAppMarketingPage() {
  return (
    <OutlinePage
      title="WhatsApp Business API and Marketing Automation in Hyderabad"
      description="Turn enquiries into bookings and one-time buyers into regulars with official WhatsApp Business API, click-to-WhatsApp ads and automated journeys."
      mark="WhatsApp Marketing"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "WhatsApp Marketing" },
      ]}
      sections={[
        body(
          "Official WhatsApp Business API Setup",
          "Green-tick setup, templates and compliant messaging for scale."
        ),
        body(
          "Click-to-WhatsApp Ads",
          "Meta and Google ads that open a chat, not a cold landing page."
        ),
        body(
          "Booking, Reminders and Broadcasts",
          "Appointments, cart recovery and useful broadcasts that people actually read."
        ),
        body(
          "Chatbots and CRM Integration",
          "Route chats to the right person and log every lead in your CRM."
        ),
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
          body: "Lifecycle journeys that pair with WhatsApp for retention.",
        },
        {
          title: "Performance Marketing",
          href: "/services/digital-marketing/performance-marketing",
          body: "Paid acquisition that feeds WhatsApp conversion flows.",
        },
        {
          title: "Salons & Beauty",
          href: "/industries/salons",
          body: "Booking and membership offers that chat converts well.",
        },
      ]}
      primaryCta="Get a Free Growth Audit"
      ctaTitle="Ready to turn WhatsApp into a growth channel?"
      ctaLabel="Get a Free Growth Audit"
    />
  )
}
