"use client"

import { ArrowUp } from "lucide-react"
import { useLenis } from "lenis/react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { isLandingPath } from "@/constants/landing/paths"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const pathname = usePathname()
  const isVisible = useScrolled(10)
  const lenis = useLenis()

  if (isLandingPath(pathname)) return null

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 })
      return
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      type="button"
      variant="default"
      size="icon-lg"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed right-6 bottom-6 z-50 size-11 rounded-full border-transparent bg-carotene text-ink shadow-md transition-opacity duration-300 hover:bg-carotene/90 hover:text-ink",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ArrowUp className="size-5" />
    </Button>
  )
}
