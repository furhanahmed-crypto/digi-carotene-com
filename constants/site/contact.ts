/**
 * Public NAP + socials from digicarotene.com (pre-revamp).
 * Keep identical across site, GBP, and directories.
 */

export const siteContact = {
  email: "info@digicarotene.com",
  emailHref: "mailto:info@digicarotene.com",

  /** Primary voice line shown in header/footer/contact. */
  phoneDisplay: "+91 99598 20874",
  phoneE164: "+919959820874",
  phoneHref: "tel:+919959820874",

  /**
   * WhatsApp deep link number used on the previous site
   * (differs from the primary voice line).
   */
  whatsappE164: "919398682206",
  whatsappDisplay: "+91 93986 82206",
  whatsappHref: "https://wa.me/919398682206",

  addressLines: [
    "Plot No 45, Street No 3",
    "Patrika Nagar, Madhapur",
    "Hyderabad 500081",
  ],
  addressOneLine:
    "Plot No 45, Street No 3, Patrika Nagar, Madhapur, Hyderabad 500081",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Plot+No+45+Street+No+3+Patrika+Nagar+Madhapur+Hyderabad+500081",

  /** Shown on contact; confirm against Google Business Profile. */
  hours: "Monday to Saturday, 10 am to 7 pm",
  hoursShort: "Mon–Sat, 10am–7pm IST",

  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/digicarotene/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/digicarotene/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/digicarotene/",
    },
  ],
} as const
