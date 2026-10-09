"use client"

import { cn } from "@/lib/utils"

type ChipGroupProps = {
  options: readonly string[]
  value: string | string[]
  onChange: (next: string | string[]) => void
  multiple?: boolean
  name: string
  error?: string
  labelledBy?: string
}

export function ChipGroup({
  options,
  value,
  onChange,
  multiple = false,
  name,
  error,
  labelledBy,
}: ChipGroupProps) {
  const selected = Array.isArray(value) ? value : value ? [value] : []

  return (
    <div>
      <div
        role={multiple ? "group" : "radiogroup"}
        aria-labelledby={labelledBy}
        className="flex flex-wrap gap-2"
      >
        {options.map((option) => {
          const isOn = selected.includes(option)
          return (
            <button
              key={option}
              type="button"
              name={name}
              aria-pressed={multiple ? isOn : undefined}
              aria-checked={!multiple ? isOn : undefined}
              role={multiple ? "button" : "radio"}
              onClick={() => {
                if (multiple) {
                  // Parent owns toggle rules (e.g. “Not running ads”)
                  onChange(option)
                } else {
                  onChange(option)
                }
              }}
              className={cn(
                "rounded-full border px-3.5 py-2 text-left text-sm transition-colors",
                isOn
                  ? "border-ink bg-brand-yellow text-ink"
                  : "border-border bg-background text-foreground hover:border-foreground/40"
              )}
            >
              {option}
            </button>
          )
        })}
      </div>
      {error ? (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
