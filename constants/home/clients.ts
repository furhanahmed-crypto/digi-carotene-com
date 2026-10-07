/**
 * Well-known brand marks for marquee / clients-page layout reference only.
 * Not Digi Carotene clients. Replace with permissioned real client logos before launch.
 * See PLACEHOLDERS.md.
 *
 * PNGs are pre-cropped onto a shared 360×100 transparent stage for consistent marquee sizing.
 */
export type ClientLogo = {
  id: string
  name: string
  src: string
}

const v = "5"

export const clientLogos: readonly ClientLogo[] = [
  { id: "google", name: "Google", src: `/assets/clients/google.png?v=${v}` },
  { id: "microsoft", name: "Microsoft", src: `/assets/clients/microsoft.png?v=${v}` },
  { id: "amazon", name: "Amazon", src: `/assets/clients/amazon.png?v=${v}` },
  { id: "meta", name: "Meta", src: `/assets/clients/meta.png?v=${v}` },
  { id: "netflix", name: "Netflix", src: `/assets/clients/netflix.png?v=${v}` },
  { id: "adobe", name: "Adobe", src: `/assets/clients/adobe.png?v=${v}` },
  { id: "ibm", name: "IBM", src: `/assets/clients/ibm.png?v=${v}` },
  { id: "shopify", name: "Shopify", src: `/assets/clients/shopify.png?v=${v}` },
  { id: "nike", name: "Nike", src: `/assets/clients/nike.png?v=${v}` },
  { id: "mcdonalds", name: "McDonald's", src: `/assets/clients/mcdonalds.png?v=${v}` },
  { id: "cursor", name: "Cursor", src: `/assets/clients/cursor.png?v=${v}` },
  { id: "flipkart", name: "Flipkart", src: `/assets/clients/flipkart.png?v=${v}` },
] as const
