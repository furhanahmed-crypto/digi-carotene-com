/** One H2 band from the v2 outline. */
export type OutlineSectionData = {
  title: string
  /** SectionMark label (defaults to "Overview"). */
  mark?: string
  /** Placeholder body override. */
  body?: string
  /** Renders list items as cards instead of a placeholder block. */
  items?: readonly string[]
}

export type IndustrySlug =
  | "healthcare"
  | "restaurants"
  | "salons"
  | "education"
  | "real-estate-furniture"
  | "d2c-retail"
  | "b2b-technology"

export type IndustryData = {
  slug: IndustrySlug
  /** Short label for hub cards and nav. */
  name: string
  /** H1 from the v2 outline. */
  h1: string
  sections: readonly OutlineSectionData[]
  /** Service pages most relevant to this industry (3–4). */
  relatedServices: readonly { title: string; href: string }[]
}
