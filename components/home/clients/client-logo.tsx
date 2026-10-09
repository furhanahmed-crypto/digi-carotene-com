import type { ClientLogo as ClientLogoData } from "@/constants/home/clients"
import { cn } from "@/lib/utils"

type ClientLogoProps = {
  logo: ClientLogoData
  className?: string
  size?: "marquee" | "card"
}

const stageClass = {
  marquee: "h-9 w-[9rem]",
  card: "h-12 w-[12rem] max-w-full",
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
        width={360}
        height={100}
        className="h-full w-full object-contain object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
