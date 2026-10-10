type ScenarioQuickAnswerProps = {
  text: string
}

export function ScenarioQuickAnswer({ text }: ScenarioQuickAnswerProps) {
  return (
    <aside>
      <div className="rounded-2xl border border-ink/10 bg-brand-yellow/30 p-5 md:p-6 dark:bg-brand-yellow/15">
        <p className="text-xs font-medium tracking-widest text-ink/70 uppercase dark:text-muted-foreground">
          Quick answer
        </p>
        <p className="mt-3 text-base leading-relaxed text-ink md:text-[17px] dark:text-foreground">
          {text}
        </p>
      </div>
    </aside>
  )
}
