import type { ClientLogo as ClientLogoData } from "@/constants/home/clients"
import { cn } from "@/lib/utils"

type ClientLogoProps = {
  logo: ClientLogoData
  className?: string
  size?: "marquee" | "card"
}

/**
 * Optical sizing:
 * - In marquee: borderless presentation, generous width cap, dark-mode adaptive rendering.
 * - In card: standard card stage.
 */
const marqueeTierClass = {
  /** Kept for any remaining emblem-only marks */
  square: "h-11 sm:h-12 md:h-13 max-w-[6.5rem] sm:max-w-[7.5rem] md:max-w-[8.5rem]",
  /** Horizontal wordmarks / mark+text locks */
  wide: "h-8 sm:h-9 md:h-10 max-w-[11rem] sm:max-w-[13rem] md:max-w-[15rem]",
  /** Mid-width horizontal locks */
  standard: "h-9 sm:h-10 md:h-11 max-w-[9rem] sm:max-w-[11rem] md:max-w-[13rem]",
} as const

export function ClientLogo({
  logo,
  className,
  size = "marquee",
}: ClientLogoProps) {
  const tier = logo.tier || "standard"

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center transition-transform duration-300",
        size === "marquee" ? marqueeTierClass[tier] : "h-14 max-w-full",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- local client logos */}
      <img
        src={logo.src}
        alt={logo.name}
        className={cn(
          "h-full w-auto max-w-full object-contain object-center transition-all duration-300",
          size === "marquee" && [
            "opacity-85 hover:opacity-100",
            logo.invertOnDark
              ? "dark:brightness-0 dark:invert dark:opacity-85 dark:hover:opacity-100"
              : "dark:brightness-110 dark:opacity-90 dark:hover:opacity-100",
          ]
        )}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
