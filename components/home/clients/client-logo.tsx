import type { ClientLogo as ClientLogoData } from "@/constants/home/clients"
import { cn } from "@/lib/utils"

type ClientLogoProps = {
  logo: ClientLogoData
  className?: string
  size?: "marquee" | "card"
}

/**
 * Height-led stage: square marks fill the cell; wide wordmarks stay capped by max-width.
 * Assets are tight-cropped — no wide transparent padding that shrinks object-contain.
 */
const stageClass = {
  marquee: "h-[3.75rem] max-w-[12rem] sm:h-16 sm:max-w-[12.5rem]",
  card: "h-14 max-w-full",
} as const

export function ClientLogo({
  logo,
  className,
  size = "marquee",
}: ClientLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        stageClass[size],
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- local client logos */}
      <img
        src={logo.src}
        alt={logo.name}
        className="h-full w-auto max-w-full object-contain object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
