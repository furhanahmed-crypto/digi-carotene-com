import { Container } from "@/components/shared/container"

export function CredibilityStrip() {
  return (
    <section className="border-y border-line bg-secondary py-8 md:py-10">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="max-w-2xl text-base leading-body text-muted-foreground">
          We work with restaurants, clinics, schools, salons, local businesses,
          and growing brands in Hyderabad — one team, not a stack of vendors.
        </p>
        <div className="inline-flex items-center gap-3 border border-dashed border-line bg-background px-4 py-2.5">
          <span className="bg-carotene size-1.5" aria-hidden="true" />
          <span className="text-xs font-medium tracking-mark text-ink-muted uppercase">
            300+ brands · Hyderabad & worldwide
          </span>
        </div>
      </Container>
    </section>
  )
}
