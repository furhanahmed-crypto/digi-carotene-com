type BlogQuickAnswerProps = {
  text: string
}

export function BlogQuickAnswer({ text }: BlogQuickAnswerProps) {
  return (
    <aside
      className="mt-8 rounded-2xl border border-ink/10 bg-brand-yellow/30 p-5 md:p-6 dark:bg-brand-yellow/15"
      aria-label="Quick answer"
    >
      <p className="text-xs font-medium tracking-widest text-ink/70 uppercase dark:text-muted-foreground">
        Quick answer
      </p>
      <p className="mt-3 text-base leading-relaxed text-ink md:text-[17px] dark:text-foreground">
        {text}
      </p>
    </aside>
  )
}
