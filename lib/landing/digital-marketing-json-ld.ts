import { dmHydFaqs, dmHydServices } from "@/constants/landing/digital-marketing-hyderabad"
import { siteContact } from "@/constants/site/contact"

/** PDF §7 JSON-LD — ProfessionalService + Service catalogue + BreadcrumbList + FAQPage. No prices / AggregateRating. */
export function buildDigitalMarketingHydJsonLd() {
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
          "https://digicarotene.com/digital-marketing-agency-in-hyderabad/#service",
        serviceType: "Digital marketing",
        name: "Digital Marketing Agency in Hyderabad",
        provider: { "@id": "https://digicarotene.com/#organization" },
        areaServed: { "@type": "City", name: "Hyderabad" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital marketing services",
          itemListElement: dmHydServices.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.body,
            },
          })),
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
            name: "Digital Marketing Agency in Hyderabad",
            item: "https://digicarotene.com/digital-marketing-agency-in-hyderabad/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: dmHydFaqs.map((faq) => ({
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
