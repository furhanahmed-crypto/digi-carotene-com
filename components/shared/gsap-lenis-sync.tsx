"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { useLenis } from "lenis/react"

import { gsap, ScrollTrigger } from "@/lib/gsap"

function debounce(fn: () => void, ms: number) {
  let id = 0
  return () => {
    window.clearTimeout(id)
    id = window.setTimeout(fn, ms)
  }
}

export function GsapLenisSync() {
  const lenis = useLenis()
  const pathname = usePathname()

  React.useEffect(() => {
    if (!lenis) return

    const onScroll = () => ScrollTrigger.update()
    lenis.on("scroll", onScroll)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off("scroll", onScroll)
      gsap.ticker.remove(raf)
    }
  }, [lenis])

  React.useEffect(() => {
    let cancelled = false

    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh()
    }

    const debouncedRefresh = debounce(refresh, 120)

    void document.fonts.ready.then(refresh)

    window.addEventListener("load", refresh)
    window.addEventListener("resize", debouncedRefresh)

    const main = document.querySelector("main")
    const resizeObserver =
      main && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(debouncedRefresh)
        : null
    if (main && resizeObserver) resizeObserver.observe(main)

    const onImgLoad = (event: Event) => {
      if (event.target instanceof HTMLImageElement) debouncedRefresh()
    }
    document.addEventListener("load", onImgLoad, true)

    return () => {
      cancelled = true
      window.removeEventListener("load", refresh)
      window.removeEventListener("resize", debouncedRefresh)
      document.removeEventListener("load", onImgLoad, true)
      resizeObserver?.disconnect()
    }
  }, [])

  // Root-layout Lenis survives App Router navigations, so its scroll offset
  // survives too. Next may set html.scrollTop = 0, but Lenis still owns the
  // animated value — reset it here (Lenis's recommended layout-level fix).
  React.useLayoutEffect(() => {
    if (!lenis) return

    if (window.location.hash) {
      const id = window.requestAnimationFrame(() => ScrollTrigger.refresh())
      return () => window.cancelAnimationFrame(id)
    }

    lenis.scrollTo(0, { immediate: true, force: true })
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => window.cancelAnimationFrame(id)
  }, [pathname, lenis])

  return null
}
