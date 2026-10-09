"use client"

import { useEffect, useState } from "react"

export function BlogReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")

    const onScroll = () => {
      if (media.matches) {
        setProgress(0)
        return
      }
      const article = document.getElementById("blog-article")
      if (!article) return
      const total = article.offsetHeight - window.innerHeight
      if (total <= 0) {
        setProgress(100)
        return
      }
      const scrolled = window.scrollY - article.offsetTop
      setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)))
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-brand-yellow transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
