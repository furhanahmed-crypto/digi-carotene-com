"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  contactHref,
  mainNav,
  type NavGroup,
  type NavItem,
} from "@/constants/home/navigation"
import { ModeToggle } from "@/components/shared/mode-toggle"
import { Button } from "@/components/ui/button"

function MobileGroup({
  group,
  onNavigate,
}: {
  group: NavGroup
  onNavigate: () => void
}) {
  const [open, setOpen] = React.useState(false)
  const hasItems = Boolean(group.items?.length)

  if (!hasItems && group.href) {
    return (
      <Link
        href={group.href}
        onClick={onNavigate}
        className="block py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {group.title}
      </Link>
    )
  }

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between py-2 text-left text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        {group.title}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden pl-3 transition-all duration-300 ease-in-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {group.href ? (
          <Link
            href={group.href}
            onClick={onNavigate}
            className="block py-1.5 text-sm font-medium text-foreground/80"
          >
            Overview
          </Link>
        ) : null}
        {group.items?.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

function MobileEntry({
  item,
  onNavigate,
}: {
  item: NavItem
  onNavigate: () => void
}) {
  const [open, setOpen] = React.useState(false)

  if (item.type === "link") {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {item.title}
      </Link>
    )
  }

  if (item.type === "dropdown") {
    return (
      <div>
        <button
          type="button"
          className="flex w-full items-center justify-between py-2 text-left text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {item.title}
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-300",
              open && "rotate-180"
            )}
          />
        </button>
        <div
          className={cn(
            "overflow-hidden pl-3 transition-all duration-300 ease-in-out",
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {item.items.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="block py-1.5 text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between py-2 text-left text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        {item.title}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden pl-3 transition-all duration-300 ease-in-out",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {item.groups.map((group) => (
          <MobileGroup key={group.title} group={group} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  )
}

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
        open ? "mt-4 max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="flex flex-col gap-1 border-t border-border py-4">
        {mainNav.map((item) => (
          <MobileEntry key={item.title} item={item} onNavigate={onClose} />
        ))}

        <div className="mt-3 flex items-center justify-between gap-3">
          <ModeToggle />
          <Button
            nativeButton={false}
            render={<Link href={contactHref} />}
            className="flex-1"
            onClick={onClose}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}
