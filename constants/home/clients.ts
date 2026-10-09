/**
 * Client logo strip — assets in public/assets/clients/.
 * Sourced from Digi Carotene brand pack (Oct 2026). Confirm publish permission as needed.
 */
export type ClientLogo = {
  id: string
  name: string
  src: string
  /** Visual optical tier: square marks get slightly taller, extra-wide wordmarks get calibrated height */
  tier?: "wide" | "square" | "standard"
  /** Whether dark-mode should invert black/dark monochrome marks to crisp white. */
  invertOnDark?: boolean
}

const v = "13"

function logo(
  id: string,
  name: string,
  file: string,
  invertOnDark = false,
  tier: "wide" | "square" | "standard" = "standard"
): ClientLogo {
  return { id, name, src: `/assets/clients/${file}?v=${v}`, invertOnDark, tier }
}

/** Order mixes industries so similar salon brands (Essentia / Naturals / Toni & Guy) never sit adjacent. */
export const clientLogos: readonly ClientLogo[] = [
  logo("lecom", "LECOM Event Center", "01.webp", false, "standard"),
  logo("essentia", "Essentia The Salon Lounge", "06.webp", true, "wide"),
  logo("ammammillu", "Ammammillu", "03.webp", true, "standard"),
  logo("aromas", "Aromas & Co.", "04.webp", true, "standard"),
  logo("aimscs", "C.R. Rao AIMSCS", "05.webp", false, "standard"),
  logo("tales-of-telugu", "Tales of Telugu", "08.webp", true, "standard"),
  logo("bikanervala", "Bikanervala", "10.webp", false, "standard"),
  logo("toni-guy", "Toni & Guy", "09.webp", true, "wide"),
  logo("veda-hospitals", "Veda Hospitals", "12.webp", false, "standard"),
  logo("flavours-of-andhra", "Flavours of Andhra", "13.webp", true, "wide"),
  logo("cot-and-couch", "CotAndCouch", "14.webp", true, "wide"),
  logo("naturals", "Naturals", "07.webp", false, "wide"),
  logo("sorshe", "Sorshe", "15.webp", true, "wide"),
  logo("valence-asta", "Valence Asta Sports", "02.webp", true, "standard"),
  logo("south-indian-styling", "South Indian Styling Studio", "11.webp", true, "wide"),
  logo("usha-mulpuri", "Usha Mulpuri's Kitchen", "17.webp", true, "standard"),
  logo("jawed-habib", "Jawed Habib", "16.webp", false, "wide"),
] as const
