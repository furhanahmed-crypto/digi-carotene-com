"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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

/** Styled shadcn Select for forms — list is portaled, so modals don't shift. */
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

  return (
    <Select
      modal={false}
      value={value || null}
      onValueChange={(next) => onValueChange(next ?? "")}
      name={name}
      required={required}
    >
      <SelectTrigger
        size="lg"
        className={cn(
          "w-full min-w-0 border-border bg-background text-foreground focus-visible:border-brand-yellow focus-visible:ring-brand-yellow/20 data-placeholder:text-muted-foreground/50",
          className,
          triggerClassName
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        align="start"
        side="bottom"
        sideOffset={6}
        alignItemWithTrigger={false}
        className="rounded-xl border border-border bg-background shadow-lg"
      >
        {items.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
            className="cursor-pointer rounded-lg py-2.5 pr-8 pl-3 focus:bg-secondary"
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
