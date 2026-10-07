import { CyclingTypeText } from "@/components/shared/cycling-type-text"

type SearchQueryTyperProps = {
  queries: readonly string[]
}

export function SearchQueryTyper({ queries }: SearchQueryTyperProps) {
  return (
    <CyclingTypeText
      items={queries}
      holdSeconds={3}
      showCaret
      className="min-w-0 flex-1 truncate text-[15px] text-[#202124] md:text-base dark:text-foreground"
      caretClassName="text-[#4285f4]"
    />
  )
}
