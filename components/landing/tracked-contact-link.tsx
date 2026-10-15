"use client"

import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type ContactEvent = "call_click" | "whatsapp_click"

type TrackedContactLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: string
  event: ContactEvent
  buttonLocation: string
  children?: ReactNode
  external?: boolean
}

/** GA4 call_click / whatsapp_click with button_location (PDF §4). */
export const TrackedContactLink = forwardRef<
  HTMLAnchorElement,
  TrackedContactLinkProps
>(function TrackedContactLink(
  {
    href,
    event,
    buttonLocation,
    className,
    children,
    external,
    ...rest
  },
  ref
) {
  return (
    <a
      ref={ref}
      href={href}
      className={cn(className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      onClick={() => {
        const gtag = (
          window as Window & { gtag?: (...args: unknown[]) => void }
        ).gtag
        if (typeof gtag === "function") {
          gtag("event", event, { button_location: buttonLocation })
        }
      }}
      {...rest}
    >
      {children}
    </a>
  )
})
