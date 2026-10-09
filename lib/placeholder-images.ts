/** Campaign / activation stills under public/assets/campaigns — layout media, not named client proof. */
export const PLACEHOLDER_IMAGES = [
  "/assets/campaigns/01.webp",
  "/assets/campaigns/02.webp",
  "/assets/campaigns/03.webp",
  "/assets/campaigns/04.webp",
  "/assets/campaigns/05.webp",
  "/assets/campaigns/06.webp",
  "/assets/campaigns/07.webp",
  "/assets/campaigns/08.webp",
  "/assets/campaigns/09.webp",
  "/assets/campaigns/10.webp",
] as const

export function getPlaceholderImage(index: number): string {
  return PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]
}
