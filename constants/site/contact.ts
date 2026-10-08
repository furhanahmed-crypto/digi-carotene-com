/**
 * Public NAP + socials. Keep identical across site, GBP, and directories.
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

  building: "Dwaraka Pride",
  addressLines: [
    "Dwaraka Pride — Plot No. 4/1, Survey No. 64",
    "Huda Techno Enclave, HITEC City, Madhapur",
    "Hyderabad, Telangana 500081",
  ],
  addressOneLine:
    "Dwaraka Pride - Plot No. 4/1, Survey No. 64, Huda Techno Enclave, HITEC City, Madhapur, Hyderabad, Telangana 500081",
  mapsHref:
    "https://www.google.com/maps/place/Dwaraka+Pride+-The+Headquarters+Coworking+Space+in+Hyderabad/@17.4449101,78.382879,17z",
  /** Google Maps embed — use on Contact (and anywhere else that needs a map). */
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.309174641516!2d78.38287897526712!3d17.44491008345213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e182b67081%3A0x5a8c3fca53ad932b!2sDwaraka%20Pride%20-The%20Headquarters%20Coworking%20Space%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1791448635356!5m2!1sen!2sin",

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
