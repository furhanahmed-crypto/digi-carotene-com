"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type FormSelectOption = {
  value: string
  label: string
}

type FormSelectProps = {
  value: string
  onValueChange: (value: string) => void
  options: readonly FormSelectOption[] | readonly string[]
  placeholder: string
  name?: string
  required?: boolean
  className?: string
  triggerClassName?: string
}

function normalizeOptions(
  options: readonly FormSelectOption[] | readonly string[]
): FormSelectOption[] {
  return options.map((option) =>
    typeof option === "string"
      ? { value: option, label: option }
      : option
  )
}

/**
 * Form dropdown that stays in the local DOM (no portal).
 * Portaled Select lists can't scroll inside Dialog — the dialog scroll-lock
 * blocks wheel events on portal siblings.
 */
export function FormSelect({
  value,
  onValueChange,
  options,
  placeholder,
  name,
  required,
  className,
  triggerClassName,
}: FormSelectProps) {
  const items = normalizeOptions(options)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const listRef = React.useRef<HTMLUListElement>(null)
  const [open, setOpen] = React.useState(false)

  const selected = items.find((item) => item.value === value)

  React.useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  React.useEffect(() => {
    if (!open || !listRef.current || !value) return
    const active = listRef.current.querySelector<HTMLElement>(
      `[data-value="${CSS.escape(value)}"]`
    )
    active?.scrollIntoView({ block: "nearest" })
  }, [open, value])

  return (
    <div ref={rootRef} className={cn("relative w-full", className)}>
      {/* Native select for form validation / submit; UI is the custom list. */}
      <select
        name={name}
        required={required}
        value={value}
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute h-px w-px opacity-0"
        onChange={(event) => onValueChange(event.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-required={required || undefined}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-11 w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-border bg-background px-3.5 text-left text-sm text-foreground outline-none transition-colors focus-visible:border-brand-yellow focus-visible:ring-3 focus-visible:ring-brand-yellow/20",
          !selected && "text-muted-foreground/50",
          triggerClassName
        )}
      >
        <span className="truncate">{selected?.label ?? placeholder}</span>
        <ChevronDownIcon
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open ? (
        <ul
          ref={listRef}
          role="listbox"
          aria-label={placeholder}
          // Keep wheel scroll on this list; don't let Dialog/Lenis eat it.
          onWheel={(event) => event.stopPropagation()}
          className="absolute top-[calc(100%+0.35rem)] right-0 left-0 z-[70] max-h-60 overflow-y-auto overscroll-contain rounded-xl border border-border bg-background p-1 shadow-lg"
        >
          {items.map((item) => {
            const isActive = item.value === value
            return (
              <li key={item.value} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  data-value={item.value}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-secondary",
                    isActive && "bg-secondary font-medium"
                  )}
                  onClick={() => {
                    onValueChange(item.value)
                    setOpen(false)
                  }}
                >
                  <span className="truncate">{item.label}</span>
                  {isActive ? (
                    <CheckIcon className="size-4 shrink-0 text-ink" />
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
