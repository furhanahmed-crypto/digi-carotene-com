/**
 * Google reviews shown on digicarotene.com (Client Stories).
 * Client-facing quotes only — intern/employee reviews from that widget are omitted.
 * Source: https://digicarotene.com/
 */

export type Testimonial = {
  id: string
  name: string
  quote: string
  /** Shown when known; old site did not publish role/city. */
  role?: string
  city?: string
  rating: 5
}

export const googleReviewsHref =
  "https://www.google.com/maps/search/?api=1&query=Digi+Carotene+Madhapur+Hyderabad"

export const siteTestimonials = [
  {
    id: "p-archana",
    name: "P Archana",
    rating: 5,
    quote:
      "I'm really impressed with the work that Digi Carotene has done for me. They have a great team of digital marketing experts who really know their stuff. They helped me to increase my website Organic traffic and to improve my online presence. I would definitely recommend them to anyone who are looking for digital marketing agency in hyderabad",
  },
  {
    id: "hema-shree",
    name: "Kalvakolanu Hema shree",
    rating: 5,
    quote:
      "I had a great experience working with Digi Carotene. They are extremely communicative and provide great services. They understand our business, requirement so well and come up with various branding & Marketing options and they dedicate their time to work for us. I would highly recommend them to anyone looking for digital marketing help.",
  },
  {
    id: "hemasai-y",
    name: "hemasai y",
    rating: 5,
    quote:
      "our team had a great experience with Digi Carotene and the team. People at Digi Carotene Supportive and result-driven. They understood our needs better and came up with multiple strategies that worked for us without any flaws. I would recommend Digi Carotene team for web development, Graphic Designing and Digital Marketing Services",
  },
] as const satisfies readonly Testimonial[]
