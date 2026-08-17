"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"

import { contactHref, whatsappHref } from "@/constants/home/navigation"
import { cn } from "@/lib/utils"

import { WhatsAppIcon } from "./whatsapp-icon"

type FloatingActionProps = {
  href: string
  label: string
  external?: boolean
  animationDelay?: string
  children: ReactNode
}

function FloatingAction({
  href,
  label,
  external,
  animationDelay,
  children,
}: FloatingActionProps) {
  const className = cn(
    "group relative flex size-11 items-center justify-center bg-card text-foreground shadow-md transition-colors duration-300 hover:bg-secondary animate-contact-float md:size-12",
    animationDelay
  )

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
      className="fixed top-1/2 right-0 z-50 flex -translate-y-1/2 overflow-hidden rounded-l-xl border border-line border-r-0 bg-card shadow-md"
      aria-label="Quick contact"
    >
      <FloatingAction
        href={whatsappHref}
        label="Chat on WhatsApp"
        external
        animationDelay="[animation-delay:0ms]"
      >
        <WhatsAppIcon className="size-5 text-[#25D366]" />
      </FloatingAction>

      <span className="w-px shrink-0 self-stretch bg-line" aria-hidden="true" />

      <FloatingAction
        href={contactHref}
        label="Go to contact form"
        animationDelay="[animation-delay:300ms]"
      >
        <Mail className="size-5 text-carotene" />
      </FloatingAction>
    </div>
  )
}
