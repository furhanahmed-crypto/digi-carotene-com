"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X as XIcon } from "lucide-react"

import { DesktopNav } from "@/components/home/desktop-nav"
import { MobileNav } from "@/components/home/mobile-nav"
import { SITE_NAME, contactHref } from "@/constants/home/navigation"
import { ModeToggle } from "@/components/shared/mode-toggle"
import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const isScrolled = useScrolled(50)

  React.useEffect(() => {
    if (!isMenuOpen) return

    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false)
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 p-2">
      <nav
        className={cn(
          "mx-auto w-full max-w-6xl rounded-2xl transition-all duration-300",
          isScrolled
            ? "max-w-5xl border border-border bg-card/80 px-4 py-3 shadow-sm backdrop-blur-md"
            : isMenuOpen
              ? "border border-border bg-card/90 px-6 py-4 shadow-sm backdrop-blur-md"
              : "px-6 py-4"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-lustria text-lg tracking-tight transition-colors group-hover:text-primary">
              {SITE_NAME}
            </span>
          </Link>

          <DesktopNav />

          <div className="hidden items-center gap-2 lg:flex">
            <ModeToggle />
            <Button
              nativeButton={false}
              render={<Link href={contactHref} />}
              className={cn("hidden", isScrolled && "inline-flex")}
            >
              Contact Us
            </Button>
          </div>

          <button
            type="button"
            className="relative flex size-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus:outline-none lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <Menu
              size={24}
              className={cn(
                "transition-all duration-300",
                isMenuOpen ? "opacity-0 blur-lg" : "opacity-100 blur-0"
              )}
            />
            <XIcon
              size={24}
              className={cn(
                "absolute transition-all duration-300",
                isMenuOpen ? "opacity-100 blur-0" : "opacity-0 blur-lg"
              )}
            />
          </button>
        </div>

        <MobileNav open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </nav>
    </header>
  )
}
