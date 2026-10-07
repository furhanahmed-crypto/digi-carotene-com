import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  body?: ReactNode
  className?: string
  inverted?: boolean
  /** Extra props (e.g. `data-reveal`) forwarded to the eyebrow `<p>`. */
  eyebrowProps?: ComponentPropsWithoutRef<"p"> & { "data-reveal"?: string }
  /** Extra props (e.g. `data-reveal="heading"`) forwarded to the `<h2>`. */
  titleProps?: ComponentPropsWithoutRef<"h2"> & { "data-reveal"?: string }
  /** Extra props (e.g. `data-reveal="text"`) forwarded to the body `<p>`. */
  bodyProps?: ComponentPropsWithoutRef<"p"> & { "data-reveal"?: string }
} & Omit<ComponentPropsWithoutRef<"div">, "title" | "className" | "children">

export function SectionHeading({
  eyebrow,
  title,
  body,
  className,
  inverted = false,
  eyebrowProps,
  titleProps,
  bodyProps,
  ...rest
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)} {...rest}>
      {eyebrow ? (
        <p
          {...eyebrowProps}
          className={cn(
            "text-[13px] font-medium tracking-[0.03em] uppercase md:text-sm",
            inverted ? "text-white/70" : "text-muted-foreground",
            eyebrowProps?.className
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        {...titleProps}
        className={cn(
          "font-display text-[30px] leading-[1.1] font-medium md:text-[44px]",
          eyebrow && "mt-4",
          inverted ? "text-white" : "text-foreground",
          titleProps?.className
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          {...bodyProps}
          className={cn(
            "mt-5 text-base leading-[1.6] md:text-lg",
            inverted ? "text-white/80" : "text-muted-foreground",
            bodyProps?.className
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  )
}
