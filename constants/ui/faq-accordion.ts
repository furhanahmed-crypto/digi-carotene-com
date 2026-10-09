/**
 * Shared FAQ accordion surface classes.
 * Yellow tint tokens + foreground text (never text-ink — ink is for solid yellow only).
 */
export const faqItemClassName =
  "border-border px-2 transition-colors not-last:border-b hover:bg-yellow-tint data-open:bg-yellow-tint-strong sm:px-5"

export const faqTriggerClassName =
  "rounded-none py-5 text-left font-display text-[17px] leading-[1.3] font-medium text-foreground hover:no-underline data-panel-open:text-foreground md:text-[20px] **:data-[slot=accordion-trigger-icon]:text-muted-foreground data-panel-open:**:data-[slot=accordion-trigger-icon]:text-foreground"
