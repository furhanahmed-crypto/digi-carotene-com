"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"

import { contactHref, whatsappHref } from "@/constants/home/navigation"

import { WhatsAppIcon } from "./whatsapp-icon"

type FloatingActionProps = {
  href: string
  label: string
  external?: boolean
  children: ReactNode
}

function FloatingAction({
  href,
  label,
  external,
  children,
}: FloatingActionProps) {
  const className =
    "group relative flex min-h-14 w-full items-center transition-all duration-300"

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} aria-label={label} className={className}>
      {children}
    </Link>
  )
}

export function FloatingContactActions() {
  return (
    <div
      className="fixed right-6 bottom-20 z-40 flex flex-col gap-2 md:w-63"
      aria-label="Quick contact"
    >
      <FloatingAction
        href={whatsappHref}
        label="Chat on WhatsApp"
        external
      >
        <span className="relative flex w-14 overflow-hidden border border-line/70 bg-background/92 text-foreground shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-background group-hover:shadow-xl md:w-full md:border-0 md:bg-transparent md:shadow-none md:backdrop-blur-none">
          <span className="hidden md:block absolute inset-0 bg-[#25D366]/35 [clip-path:polygon(18px_0,100%_0,100%_100%,0_100%)]" />
          <span className="relative hidden md:flex md:min-h-14 md:w-full md:items-center md:justify-between md:bg-background/92 md:[clip-path:polygon(19px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-1px),1px_calc(100%-1px))]">
            <span className="flex min-w-0 items-center gap-3 px-8 py-3">
              <span className="h-5 w-1 shrink-0 bg-[#25D366]" aria-hidden="true" />
              <span className="font-display text-[13px] leading-none font-medium tracking-[0.06em] uppercase text-foreground/92">
                WhatsApp
              </span>
            </span>
          </span>
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center bg-[#25D366]/12 text-[#25D366] transition-colors group-hover:bg-[#25D366]/18 md:h-15 md:w-15">
            <WhatsAppIcon className="size-5 md:size-5.5" />
          </span>
        </span>
      </FloatingAction>

      <FloatingAction href={contactHref} label="Go to contact form">
        <span className="relative flex w-14 overflow-hidden border border-line/70 bg-background/92 text-foreground shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-background group-hover:shadow-xl md:w-full md:border-0 md:bg-transparent md:shadow-none md:backdrop-blur-none">
          <span className="hidden md:block absolute inset-0 bg-carotene/35 [clip-path:polygon(18px_0,100%_0,100%_100%,0_100%)]" />
          <span className="relative hidden md:flex md:min-h-14 md:w-full md:items-center md:justify-between md:bg-background/92 md:[clip-path:polygon(19px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-1px),1px_calc(100%-1px))]">
            <span className="flex min-w-0 items-center gap-3 px-8 py-3">
              <span className="h-5 w-1 shrink-0 bg-carotene" aria-hidden="true" />
              <span className="font-display text-[13px] leading-none font-medium tracking-[0.06em] uppercase text-foreground/92">
                Contact
              </span>
            </span>
          </span>
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center bg-carotene text-paper transition-colors group-hover:bg-carotene/90 md:h-15 md:w-15">
            <Mail className="size-5 md:size-5.5" />
          </span>
        </span>
      </FloatingAction>
    </div>
  )
}
