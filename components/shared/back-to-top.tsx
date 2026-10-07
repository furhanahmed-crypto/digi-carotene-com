"use client"

import { ArrowUp } from "lucide-react"
import { useLenis } from "lenis/react"

import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const isVisible = useScrolled(10)
  const lenis = useLenis()

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
        "fixed right-6 bottom-6 z-50 size-11 rounded-full border-transparent bg-carotene text-white shadow-md transition-opacity duration-300 hover:bg-carotene/90 hover:text-white",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ArrowUp className="size-5" />
    </Button>
  )
}
