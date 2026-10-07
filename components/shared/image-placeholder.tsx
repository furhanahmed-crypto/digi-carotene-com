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
        <img
          src={src}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center p-4 text-center text-[12px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
          {label}
        </span>
      )}
    </div>
  )
}
