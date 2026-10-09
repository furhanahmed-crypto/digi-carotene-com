/**
 * Client logo strip — assets in public/assets/clients/.
 * Sourced from Digi Carotene brand pack (Oct 2026). Confirm publish permission as needed.
 */
export type ClientLogo = {
  id: string
  name: string
  src: string
}

const v = "6"

function logo(id: string, name: string, file: string): ClientLogo {
  return { id, name, src: `/assets/clients/${file}?v=${v}` }
}

export const clientLogos: readonly ClientLogo[] = [
  logo("lecom", "LECOM Event Center", "01.webp"),
  logo("valence-asta", "Valence Asta Sports", "02.webp"),
  logo("ammammillu", "Ammammillu", "03.webp"),
  logo("aromas", "Aromas & Co.", "04.webp"),
  logo("aimscs", "C.R. Rao AIMSCS", "05.webp"),
  logo("essentia", "Essentia The Salon Lounge", "06.webp"),
  logo("naturals", "Naturals", "07.webp"),
  logo("tales-of-telugu", "Tales of Telugu", "08.webp"),
  logo("toni-guy", "Toni & Guy", "09.webp"),
  logo("bikanervala", "Bikanervala", "10.webp"),
  logo("south-indian-styling", "South Indian Styling Studio", "11.webp"),
  logo("veda-hospitals", "Veda Hospitals", "12.webp"),
  logo("flavours-of-andhra", "Flavours of Andhra", "13.webp"),
  logo("cot-and-couch", "CotAndCouch", "14.webp"),
  logo("sorshe", "Sorshe", "15.webp"),
  logo("jawed-habib", "Jawed Habib", "16.webp"),
  logo("usha-mulpuri", "Usha Mulpuri's Kitchen", "17.webp"),
] as const
