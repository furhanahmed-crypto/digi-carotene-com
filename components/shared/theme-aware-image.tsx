import Image from "next/image"

type ThemeAwareImageProps = {
  lightSrc: string
  darkSrc: string
  alt: string
  className?: string
}

export function ThemeAwareImage({
  lightSrc,
  darkSrc,
  alt,
  className,
}: ThemeAwareImageProps) {
  return (
    <div className={className}>
      <Image
        src={lightSrc}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover object-top dark:hidden"
      />
      <Image
        src={darkSrc}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="hidden object-cover object-top dark:block"
      />
    </div>
  )
}
