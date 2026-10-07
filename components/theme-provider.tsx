"use client"

import * as React from "react"

type Theme = "light" | "dark" | "system"

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: "light" | "dark"
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)
const STORAGE_KEY = "theme"
const COOKIE_KEY = "theme"

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function applyTheme(resolved: "light" | "dark") {
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(resolved)
  root.style.colorScheme = resolved

  const themeColor = resolved === "dark" ? "#0F0F10" : "#FAFAF8"
  const themeColorMeta = document.querySelector('meta[name="theme-color"]')
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", themeColor)
  }

  document.cookie = `${COOKIE_KEY}=${resolved}; path=/; max-age=31536000; SameSite=Lax`
}

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: Theme
  initialTheme?: "light" | "dark"
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

function ThemeProvider({
  children,
  defaultTheme = "light",
  initialTheme,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(
    initialTheme ?? defaultTheme
  )
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
    initialTheme ?? (defaultTheme === "dark" ? "dark" : "light")
  )

  const setTheme = React.useCallback((next: Theme) => {
    const resolved = next === "system" ? getSystemTheme() : next
    localStorage.setItem(STORAGE_KEY, next)
    setThemeState(next)
    setResolvedTheme(resolved)
    applyTheme(resolved)
  }, [])

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      if (theme !== "system") return
      const resolved = getSystemTheme()
      setResolvedTheme(resolved)
      applyTheme(resolved)
    }

    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      <ThemeHotkey />
      {children}
    </ThemeContext.Provider>
  )
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== "d") {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}

function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    return {
      theme: "light" as const,
      resolvedTheme: "light" as const,
      setTheme: () => {},
    }
  }

  return context
}

export { ThemeProvider, useTheme }
