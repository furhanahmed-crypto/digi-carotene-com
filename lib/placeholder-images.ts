export const PLACEHOLDER_IMAGES = [
  "/banner/banner-img-1.jpg",
  "/banner/banner-img-2.avif",
  "/banner/banner-img-3.jpg",
] as const

export function getPlaceholderImage(index: number) {
  return PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]
}
