import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

type ImagePlaceholderProps = {
  label?: string
  className?: string
  fill?: boolean
  src?: string
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">

export function ImagePlaceholder({
  label = "Image to confirm",
  className,
  fill = false,
  src,
  ...rest
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-secondary/40",
        src ? "border border-line" : "border border-dashed border-line",
        fill && "absolute inset-0 h-full w-full",
        className
      )}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : label}
      {...rest}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- local placeholder / asset URLs
        <img
          src={src}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center p-4 text-center text-xs font-medium tracking-loose text-muted-foreground uppercase">
          {label}
        </span>
      )}
    </div>
  )
}
