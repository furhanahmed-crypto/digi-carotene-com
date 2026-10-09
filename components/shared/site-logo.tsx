import { cn } from "@/lib/utils"

type SiteLogoProps = {
  className?: string
  heightClassName?: string
  priority?: boolean
}

export function SiteLogo({
  className,
  heightClassName = "h-10",
  priority = false,
}: SiteLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- brand logos with light/dark swap */}
      <img
        src="/logo/logo-light-1.png?v=2"
        alt="Digi Carotene"
        fetchPriority={priority ? "high" : undefined}
        className={cn("w-auto object-contain dark:hidden", heightClassName)}
      />
      {/* eslint-disable-next-line @next/next/no-img-element -- brand logos with light/dark swap */}
      <img
        src="/logo/logo-dark-1.png?v=2"
        alt=""
        fetchPriority={priority ? "high" : undefined}
        className={cn("hidden w-auto object-contain dark:block", heightClassName)}
        aria-hidden="true"
      />
    </span>
  )
}
