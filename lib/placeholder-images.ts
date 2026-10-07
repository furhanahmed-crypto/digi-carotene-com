/** Compressed reference stills under public/assets/showcase — not client proof. */
export const PLACEHOLDER_IMAGES = [
  "/assets/showcase/01.webp",
  "/assets/showcase/02.webp",
  "/assets/showcase/03.webp",
  "/assets/showcase/04.webp",
  "/assets/showcase/05.webp",
  "/assets/showcase/06.webp",
  "/assets/showcase/07.webp",
  "/assets/showcase/08.webp",
  "/assets/showcase/09.webp",
] as const

export function getPlaceholderImage(index: number) {
  return PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]
}
