"use client"

import type { ReactNode } from "react"
import { Mail } from "lucide-react"

import { useEnquiry } from "@/components/enquiry/enquiry-provider"
import { whatsappHref } from "@/constants/home/navigation"
import { cn } from "@/lib/utils"

import { WhatsAppIcon } from "./whatsapp-icon"

type ExpandActionProps = {
  label: string
  icon: ReactNode
  iconClassName: string
  expandedClassName: string
  labelClassName?: string
  href?: string
  external?: boolean
  onClick?: () => void
}

function ExpandAction({
  label,
  icon,
  iconClassName,
  expandedClassName,
  labelClassName = "text-white",
  href,
  external,
  onClick,
}: ExpandActionProps) {
  const className = cn(
    "group flex h-12 items-center overflow-hidden rounded-full shadow-lg transition-[width,box-shadow,transform] duration-300 ease-out",
    "w-12 hover:w-44 focus-visible:w-44 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    expandedClassName
  )

  const content = (
    <>
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center",
          iconClassName
        )}
      >
        {icon}
      </span>
      <span
        className={cn(
          "max-w-0 overflow-hidden whitespace-nowrap pr-0 text-[12px] font-semibold tracking-[0.08em] uppercase opacity-0 transition-all duration-300 ease-out group-hover:max-w-28 group-hover:pr-4 group-hover:opacity-100 group-focus-visible:max-w-28 group-focus-visible:pr-4 group-focus-visible:opacity-100",
          labelClassName
        )}
      >
        {label}
      </span>
    </>
  )

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className={className}
      >
        {content}
      </button>
    )
  }

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={className}
      >
        {content}
      </a>
    )
  }

  return (
    <a href={href} aria-label={label} className={className}>
      {content}
    </a>
  )
}

export function FloatingContactActions() {
  const { openEnquiry } = useEnquiry()

  return (
    <div
      className="fixed right-5 bottom-20 z-40 flex flex-col items-end gap-3 md:right-6"
      aria-label="Quick contact"
    >
      <ExpandAction
        href={whatsappHref}
        label="WhatsApp"
        external
        icon={<WhatsAppIcon className="size-5" />}
        iconClassName="bg-[#25D366] text-white"
        expandedClassName="bg-[#25D366] hover:shadow-[#25D366]/35"
        labelClassName="text-white"
      />
      <ExpandAction
        label="Enquire"
        onClick={() => openEnquiry()}
        icon={<Mail className="size-5" />}
        iconClassName="bg-brand-yellow text-ink"
        expandedClassName="bg-brand-yellow hover:shadow-brand-yellow/40"
        labelClassName="text-ink"
      />
    </div>
  )
}
