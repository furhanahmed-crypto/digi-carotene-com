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
    "group relative flex size-14 items-center justify-center transition-all duration-300 md:size-16"

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
      className="fixed top-1/2 right-0 z-40 flex flex-col -translate-y-1/2 overflow-hidden rounded-l-2xl border border-line border-r-0 bg-card/92 shadow-lg backdrop-blur-sm"
      aria-label="Quick contact"
    >
      <FloatingAction
        href={whatsappHref}
        label="Chat on WhatsApp"
        external
      >
        <span className="flex size-12 items-center justify-center rounded-l-xl bg-[#25D366]/14 text-[#25D366] transition-colors group-hover:bg-[#25D366]/20 md:size-14">
          <WhatsAppIcon className="size-6 md:size-7" />
        </span>
      </FloatingAction>

      <span className="h-px w-full shrink-0 bg-line" aria-hidden="true" />

      <FloatingAction href={contactHref} label="Go to contact form">
        <span className="flex size-12 items-center justify-center rounded-l-xl bg-carotene text-paper transition-colors group-hover:bg-carotene/90 md:size-14">
          <Mail className="size-6 md:size-7" />
        </span>
      </FloatingAction>
    </div>
  )
}
