import { cn } from "@/lib/utils"

/** Light = ink wordmark; dark = white wordmark. Orange period accent on both. */
const LOGO_LIGHT = "/logo/dc-logo-light.png?v=3"
const LOGO_DARK = "/logo/dc-logo-dark.png?v=3"

type SiteLogoProps = {
  className?: string
  heightClassName?: string
  priority?: boolean
}

export function SiteLogo({
  className,
  heightClassName = "h-11",
  priority = false,
}: SiteLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- brand logos with light/dark swap */}
      <img
        src={LOGO_LIGHT}
        alt="Digi Carotene"
        fetchPriority={priority ? "high" : undefined}
        className={cn("w-auto object-contain dark:hidden", heightClassName)}
      />
      {/* eslint-disable-next-line @next/next/no-img-element -- brand logos with light/dark swap */}
      <img
        src={LOGO_DARK}
        alt=""
        fetchPriority={priority ? "high" : undefined}
        className={cn(
          "hidden w-auto object-contain dark:block",
          heightClassName
        )}
        aria-hidden="true"
      />
    </span>
  )
}
