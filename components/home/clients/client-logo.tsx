import type { ClientLogo as ClientLogoData } from "@/constants/home/clients"
import { cn } from "@/lib/utils"

type ClientLogoProps = {
  logo: ClientLogoData
  className?: string
  size?: "marquee" | "card"
}

/**
 * Shared stage — source PNGs are already normalized to 360×100.
 * Marquee/card only scale that stage; no per-brand transforms.
 */
const stageClass = {
  marquee: "h-8 w-[8.5rem]",
  card: "h-11 w-[11.5rem] max-w-full",
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
      {/* eslint-disable-next-line @next/next/no-img-element -- local brand PNGs */}
      <img
        src={logo.src}
        alt=""
        width={360}
        height={100}
        className="h-full w-full object-contain object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
