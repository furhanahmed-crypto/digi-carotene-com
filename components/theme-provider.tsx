"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)
const STORAGE_KEY = "theme"
const COOKIE_KEY = "theme"

function applyTheme(resolved: Theme) {
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

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "dark" || stored === "light") return stored
    // Legacy "system" (or anything else) → light; dark only after an explicit toggle.
    if (stored) localStorage.setItem(STORAGE_KEY, "light")
  } catch {
    /* private mode / blocked storage */
  }
  return null
}

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: Theme
  initialTheme?: Theme
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

  const setTheme = React.useCallback((next: Theme) => {
    localStorage.setItem(STORAGE_KEY, next)
    setThemeState(next)
    applyTheme(next)
  }, [])

  React.useEffect(() => {
    const stored = readStoredTheme()
    // Prefer an explicit toggle; otherwise stay on SSR/default light — never OS dark.
    const next = stored ?? (initialTheme === "dark" ? "dark" : "light")
    applyTheme(next)
    // Defer so we don't sync-set state inside the effect body (cascading render lint).
    const id = window.requestAnimationFrame(() => {
      setThemeState(next)
    })
    return () => window.cancelAnimationFrame(id)
  }, [initialTheme])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme: theme, setTheme }}>
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
  const { theme, setTheme } = useTheme()

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

      setTheme(theme === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [theme, setTheme])

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
