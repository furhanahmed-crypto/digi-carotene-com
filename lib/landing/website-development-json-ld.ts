import { websiteDevHydFaqs } from "@/constants/landing/website-development-hyderabad"
import { siteContact } from "@/constants/site/contact"

/** PDF §7 JSON-LD — ProfessionalService + Service catalogue + BreadcrumbList + FAQPage. No prices. */
export function buildWebsiteDevHydJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://digicarotene.com/#organization",
        name: "Digi Carotene",
        url: "https://digicarotene.com/",
        logo: "https://digicarotene.com/logo/dc-logo-light.png",
        telephone: "+91-99598-20874",
        email: siteContact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Dwaraka Pride, Plot No. 4/1, Survey No. 64, Huda Techno Enclave, HITEC City, Madhapur",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500081",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.4449101,
          longitude: 78.382879,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Hyderabad" },
          { "@type": "City", name: "Secunderabad" },
          { "@type": "City", name: "Bangalore" },
        ],
        sameAs: siteContact.socials.map((s) => s.href),
      },
      {
        "@type": "Service",
        "@id":
          "https://digicarotene.com/website-development-company-hyderabad/#service",
        serviceType: "Website design and development",
        name: "Website Development in Hyderabad",
        provider: { "@id": "https://digicarotene.com/#organization" },
        areaServed: { "@type": "City", name: "Hyderabad" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Website packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Silver Website",
                description:
                  "Up to 5 pages, custom design, mobile-friendly, WhatsApp button and enquiry form. Live in 7 days.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gold Website",
                description:
                  "Up to 8 pages with GA4, Meta pixel and Google Business Profile setup. Live in 10 days.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diamond Website",
                description:
                  "Up to 10 pages with on-page SEO, ad landing pages, conversion tracking, CRM lead capture and one month of ads management.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Platform",
                description:
                  "E-commerce, booking systems, product configurators, learning platforms and integrations.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://digicarotene.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://digicarotene.com/services/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Website Development Company in Hyderabad",
            item: "https://digicarotene.com/website-development-company-hyderabad/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: websiteDevHydFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  }
}
