/**
 * Shared FAQ accordion surface classes.
 * Light: soft yellow wash. Dark: elevated secondary + yellow edge (no olive tint + dark type).
 * Always pair with text-foreground — never text-ink on these rows.
 */
export const faqItemClassName =
  "border-border px-2 transition-colors not-last:border-b hover:bg-yellow-tint data-open:bg-yellow-tint-strong dark:hover:bg-secondary dark:data-open:bg-secondary dark:data-open:shadow-[inset_3px_0_0_0_var(--brand-yellow)] sm:px-5"

export const faqTriggerClassName =
  "rounded-none py-5 text-left font-display text-[17px] leading-snug font-medium text-foreground hover:no-underline data-panel-open:text-foreground md:text-xl **:data-[slot=accordion-trigger-icon]:text-muted-foreground data-panel-open:**:data-[slot=accordion-trigger-icon]:text-brand-yellow"

export const faqContentClassName =
  "pb-5 text-sm font-normal leading-relaxed text-muted-foreground dark:text-foreground/75"