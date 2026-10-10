"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"

import { ChipGroup } from "@/components/growth-audit/chip-group"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FormSelect } from "@/components/ui/form-select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  AUDIT_REPLY_DAYS,
  adsRunningOptions,
  auditCountries,
  auditGoals,
  auditIndustries,
  countryDialCodes,
} from "@/constants/growth-audit/options"
import {
  type AuditCtaLocation,
  type FieldErrors,
  type GrowthAuditFormState,
  type GrowthAuditStep,
  budgetOptionsFor,
  buildGrowthAuditThankYouHref,
  clearFormStorage,
  emptyGrowthAuditForm,
  firstNameFrom,
  formIsDirty,
  formatLinkList,
  listFilledLinkLabels,
  loadForm,
  loadUtms,
  normalizeFormForSubmit,
  normalizeWebsiteUrl,
  persistForm,
  phoneToE164,
  toggleAdsRunning,
  toggleGoal,
  trackAuditEvent,
  validateStep,
} from "@/lib/growth-audit"
import { submitFormToSheet } from "@/lib/forms/submit-form"
import { cn } from "@/lib/utils"

const fieldClassName =
  "h-11 rounded-xl border-border bg-background px-3.5 text-sm placeholder:text-muted-foreground/50 focus-visible:border-brand-yellow focus-visible:ring-brand-yellow/20"

const labelClassName = "mb-1.5 text-sm font-medium text-foreground"

const checkboxClassName =
  "mt-0.5 size-4 border-border data-checked:border-brand-yellow data-checked:bg-brand-yellow data-checked:text-ink"

type GrowthAuditFormProps = {
  ctaLocation: AuditCtaLocation
  initialIndustry?: string
  registerDirty?: (dirty: boolean) => void
  onStepChange?: (step: GrowthAuditStep) => void
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600" role="alert">
      {message}
    </p>
  )
}

export function GrowthAuditForm({
  ctaLocation,
  initialIndustry,
  registerDirty,
  onStepChange,
}: GrowthAuditFormProps) {
  const [step, setStep] = React.useState<GrowthAuditStep>(1)
  const [form, setForm] = React.useState<GrowthAuditFormState>(() =>
    emptyGrowthAuditForm()
  )
  const [errors, setErrors] = React.useState<FieldErrors>({})
  const [submitting, setSubmitting] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)
  const hydrated = React.useRef(false)

  React.useEffect(() => {
    const saved = loadForm()
    const base = saved ?? emptyGrowthAuditForm()
    setForm(
      initialIndustry
        ? { ...base, industry: initialIndustry, industry_other: "" }
        : base
    )
    hydrated.current = true
  }, [initialIndustry])

  React.useEffect(() => {
    if (!hydrated.current) return
    persistForm(form)
    registerDirty?.(formIsDirty(form))
  }, [form, registerDirty])

  React.useEffect(() => {
    onStepChange?.(step)
  }, [step, onStepChange])

  const patch = <K extends keyof GrowthAuditFormState>(
    key: K,
    value: GrowthAuditFormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const focusFirstError = (nextErrors: FieldErrors) => {
    const order: Array<keyof GrowthAuditFormState> = [
      "full_name",
      "business_name",
      "email",
      "phone",
      "country",
      "city",
      "industry",
      "industry_other",
      "website_url",
      "instagram",
      "linkedin_url",
      "youtube_url",
      "gbp_url",
      "ads_running",
      "goal",
      "challenge",
      "budget",
      "consent",
    ]
    const first = order.find((key) => nextErrors[key])
    if (!first || !formRef.current) return
    const el = formRef.current.querySelector<HTMLElement>(
      `[name="${first}"], [data-field="${first}"]`
    )
    el?.focus()
  }

  const goNext = () => {
    const nextErrors = validateStep(step, form)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      trackAuditEvent("audit_form_error", {
        field: Object.keys(nextErrors)[0],
        step,
      })
      focusFirstError(nextErrors)
      return
    }
    // Clear before advancing so step 3 never inherits stale / premature errors
    // (e.g. Enter on step 1–2 previously ran submit validation for step 3).
    setErrors({})
    if (step === 1) {
      trackAuditEvent("audit_step_complete", {
        step: 1,
        industry: form.industry || undefined,
        country: form.country,
      })
      setStep(2)
      return
    }
    if (step === 2) {
      const links = listFilledLinkLabels(form).filter(
        (label) => label !== "Google Business Profile"
      )
      trackAuditEvent("audit_step_complete", {
        step: 2,
        links_count: links.length,
      })
      setStep(3)
    }
  }

  const goBack = () => {
    setErrors({})
    setStep((s) => (s === 3 ? 2 : 1))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (form.company_fax.trim()) return
    // Enter in earlier steps must not validate / surface step-3 errors.
    if (step !== 3) {
      goNext()
      return
    }

    const nextErrors = validateStep(3, form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      trackAuditEvent("audit_form_error", {
        field: Object.keys(nextErrors)[0],
        step: 3,
      })
      focusFirstError(nextErrors)
      return
    }

    setSubmitting(true)
    const normalized = normalizeFormForSubmit(form)
    const utms = loadUtms()

    await submitFormToSheet({
      form: "growth_audit",
      ...normalized,
      phone: phoneToE164(normalized.country_code, normalized.phone) || normalized.phone,
      cta_location: ctaLocation,
      page_url: window.location.href,
      referrer: document.referrer,
      device: window.matchMedia("(max-width: 767px)").matches
        ? "mobile"
        : "desktop",
      utm_source: utms?.utm_source,
      utm_medium: utms?.utm_medium,
      utm_campaign: utms?.utm_campaign,
      utm_term: utms?.utm_term,
      utm_content: utms?.utm_content,
    })

    trackAuditEvent("generate_lead", {
      cta_location: ctaLocation,
      industry: normalized.industry,
      goal: normalized.goal.join(", "),
      budget: normalized.budget || undefined,
    })

    clearFormStorage()
    registerDirty?.(false)

    const href = buildGrowthAuditThankYouHref({
      name: firstNameFrom(normalized.full_name),
      business: normalized.business_name,
      links: formatLinkList(listFilledLinkLabels(normalized)),
      channel: normalized.whatsapp_ok ? "whatsapp" : "email",
    })

    // Hard navigate — closing the modal also clears #growth-audit via
    // history.replaceState, which races with App Router soft navigation.
    window.location.assign(href)
  }

  const budgets = budgetOptionsFor(form.country)
  const challengeCount = form.challenge.length

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex h-full min-h-0 flex-1 flex-col"
      noValidate
    >
      <input
        type="text"
        name="company_fax"
        value={form.company_fax}
        onChange={(e) => patch("company_fax", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div className="mb-4 shrink-0">
        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
          <p className="font-medium text-foreground">Step {step} of 3</p>
          <p className="text-muted-foreground">
            {step === 1
              ? "About your business"
              : step === 2
                ? "What should we audit?"
                : "Your goal and challenge"}
          </p>
        </div>
        <div
          className="h-1.5 overflow-hidden rounded-full bg-secondary"
          aria-hidden
        >
          <div
            className="h-full rounded-full bg-brand-yellow transition-[width] duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain pb-4 [-webkit-overflow-scrolling:touch]">
        {step === 1 ? (
          <>
            <div>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Tell us about your business
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                100% free · No spam · Reply within {AUDIT_REPLY_DAYS}
              </p>
            </div>

            <div>
              <Label htmlFor="full_name" className={labelClassName}>
                Your name *
              </Label>
              <Input
                id="full_name"
                name="full_name"
                autoComplete="name"
                className={fieldClassName}
                placeholder="e.g. Ravi Kumar"
                value={form.full_name}
                aria-invalid={Boolean(errors.full_name)}
                onChange={(e) => patch("full_name", e.target.value)}
              />
              <FieldError id="err-full_name" message={errors.full_name} />
            </div>

            <div>
              <Label htmlFor="business_name" className={labelClassName}>
                Business name *
              </Label>
              <Input
                id="business_name"
                name="business_name"
                autoComplete="organization"
                className={fieldClassName}
                placeholder="e.g. Green Leaf Café"
                value={form.business_name}
                aria-invalid={Boolean(errors.business_name)}
                onChange={(e) => patch("business_name", e.target.value)}
              />
              <FieldError
                id="err-business_name"
                message={errors.business_name}
              />
            </div>

            <div>
              <Label htmlFor="email" className={labelClassName}>
                Work email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={fieldClassName}
                placeholder="you@business.com"
                value={form.email}
                aria-invalid={Boolean(errors.email)}
                onChange={(e) => patch("email", e.target.value)}
              />
              <FieldError id="err-email" message={errors.email} />
            </div>

            <div>
              <Label htmlFor="phone" className={labelClassName}>
                Phone / WhatsApp *
              </Label>
              <div className="flex gap-2">
                <div className="w-[7.5rem] shrink-0">
                  <FormSelect
                    name="country_code"
                    value={form.country_code}
                    onValueChange={(v) => patch("country_code", v)}
                    options={countryDialCodes.map((c) => ({
                      value: c.code,
                      label: c.code,
                    }))}
                    placeholder="+91"
                  />
                </div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClassName}
                  placeholder="98765 43210"
                  value={form.phone}
                  aria-invalid={Boolean(errors.phone)}
                  onChange={(e) => patch("phone", e.target.value)}
                />
              </div>
              <FieldError id="err-phone" message={errors.phone} />
            </div>

            <Label className="flex items-start gap-2.5 text-sm font-normal text-foreground">
              <Checkbox
                name="whatsapp_ok"
                checked={form.whatsapp_ok}
                onCheckedChange={(checked) =>
                  patch("whatsapp_ok", checked === true)
                }
                className={checkboxClassName}
              />
              Reach me on WhatsApp
            </Label>

            <div>
              <Label htmlFor="country" className={labelClassName}>
                Country *
              </Label>
              <Input
                id="country"
                name="country"
                list="audit-countries"
                autoComplete="country-name"
                className={fieldClassName}
                placeholder="Start typing a country"
                value={form.country}
                aria-invalid={Boolean(errors.country)}
                onChange={(e) => {
                  patch("country", e.target.value)
                  patch("budget", "")
                }}
              />
              <datalist id="audit-countries">
                {auditCountries.map((country) => (
                  <option key={country} value={country} />
                ))}
              </datalist>
              <FieldError id="err-country" message={errors.country} />
            </div>

            <div>
              <Label htmlFor="city" className={labelClassName}>
                City
              </Label>
              <Input
                id="city"
                name="city"
                autoComplete="address-level2"
                className={fieldClassName}
                placeholder="e.g. Hyderabad"
                value={form.city}
                maxLength={60}
                onChange={(e) => patch("city", e.target.value)}
              />
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Where can we find you online?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Add every link you have. At least one is needed so we know what
                to audit.
              </p>
            </div>

            <div>
              <Label className={labelClassName}>Industry *</Label>
              <FormSelect
                name="industry"
                value={form.industry}
                onValueChange={(v) => patch("industry", v)}
                options={auditIndustries}
                placeholder="Select your industry"
                required
              />
              <FieldError id="err-industry" message={errors.industry} />
            </div>

            {form.industry === "Other" ? (
              <div>
                <Label htmlFor="industry_other" className={labelClassName}>
                  Your industry *
                </Label>
                <Input
                  id="industry_other"
                  name="industry_other"
                  className={fieldClassName}
                  placeholder="e.g. Interior design"
                  value={form.industry_other}
                  aria-invalid={Boolean(errors.industry_other)}
                  onChange={(e) => patch("industry_other", e.target.value)}
                />
                <FieldError
                  id="err-industry_other"
                  message={errors.industry_other}
                />
              </div>
            ) : null}

            <div>
              <Label htmlFor="website_url" className={labelClassName}>
                Website
              </Label>
              <Input
                id="website_url"
                name="website_url"
                className={fieldClassName}
                placeholder="www.yourbusiness.com"
                value={form.website_url}
                aria-invalid={Boolean(errors.website_url)}
                onChange={(e) => patch("website_url", e.target.value)}
                onBlur={() => {
                  if (form.website_url.trim()) {
                    patch("website_url", normalizeWebsiteUrl(form.website_url))
                  }
                }}
              />
              <FieldError id="err-website_url" message={errors.website_url} />
            </div>

            <div>
              <Label htmlFor="instagram" className={labelClassName}>
                Instagram
              </Label>
              <Input
                id="instagram"
                name="instagram"
                className={fieldClassName}
                placeholder="@yourbusiness"
                value={form.instagram}
                onChange={(e) => patch("instagram", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="linkedin_url" className={labelClassName}>
                LinkedIn
              </Label>
              <Input
                id="linkedin_url"
                name="linkedin_url"
                className={fieldClassName}
                placeholder="linkedin.com/company/yourbusiness"
                value={form.linkedin_url}
                aria-invalid={Boolean(errors.linkedin_url)}
                onChange={(e) => patch("linkedin_url", e.target.value)}
              />
              <FieldError id="err-linkedin_url" message={errors.linkedin_url} />
            </div>

            <div>
              <Label htmlFor="youtube_url" className={labelClassName}>
                YouTube
              </Label>
              <Input
                id="youtube_url"
                name="youtube_url"
                className={fieldClassName}
                placeholder="@yourchannel"
                value={form.youtube_url}
                aria-invalid={Boolean(errors.youtube_url)}
                onChange={(e) => patch("youtube_url", e.target.value)}
              />
              <FieldError id="err-youtube_url" message={errors.youtube_url} />
            </div>

            <div>
              <Label htmlFor="gbp_url" className={labelClassName}>
                Google Business Profile{" "}
                <span className="font-normal text-muted-foreground">
                  (recommended for local businesses)
                </span>
              </Label>
              <Input
                id="gbp_url"
                name="gbp_url"
                className={fieldClassName}
                placeholder="Paste your Google Maps link"
                value={form.gbp_url}
                aria-invalid={Boolean(errors.gbp_url)}
                onChange={(e) => patch("gbp_url", e.target.value)}
              />
              <FieldError id="err-gbp_url" message={errors.gbp_url} />
            </div>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <div>
              <h3 className="font-display text-lg font-medium tracking-tight">
                What&apos;s holding your growth back?
              </h3>
            </div>

            <div>
              <Label id="ads_running_label" className={labelClassName}>
                Are you running ads right now? *
              </Label>
              <ChipGroup
                name="ads_running"
                labelledBy="ads_running_label"
                multiple
                options={adsRunningOptions}
                value={form.ads_running}
                error={errors.ads_running}
                onChange={(option) => {
                  if (typeof option !== "string") return
                  patch(
                    "ads_running",
                    toggleAdsRunning(form.ads_running, option)
                  )
                }}
              />
              <span data-field="ads_running" tabIndex={-1} className="sr-only" />
            </div>

            <div>
              <Label id="goal_label" className={labelClassName}>
                Main goal *
              </Label>
              <ChipGroup
                name="goal"
                labelledBy="goal_label"
                multiple
                options={auditGoals}
                value={form.goal}
                error={errors.goal}
                onChange={(option) => {
                  if (typeof option !== "string") return
                  patch("goal", toggleGoal(form.goal, option))
                }}
              />
              <span data-field="goal" tabIndex={-1} className="sr-only" />
            </div>

            <div>
              <Label htmlFor="challenge" className={labelClassName}>
                The challenge you&apos;re facing *
              </Label>
              <Textarea
                id="challenge"
                name="challenge"
                rows={5}
                className={cn(
                  fieldClassName,
                  "h-auto min-h-[8rem] resize-y py-2.5"
                )}
                placeholder="e.g. We spend ₹50,000 a month on Instagram ads but get very few quality leads."
                value={form.challenge}
                maxLength={1000}
                aria-invalid={Boolean(errors.challenge)}
                onChange={(e) => patch("challenge", e.target.value)}
              />
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <FieldError id="err-challenge" message={errors.challenge} />
                <p className="ml-auto text-xs text-muted-foreground tabular-nums">
                  {challengeCount} / 1000
                </p>
              </div>
            </div>

            <div>
              <Label className={labelClassName}>Monthly marketing budget</Label>
              <FormSelect
                name="budget"
                value={form.budget}
                onValueChange={(v) => patch("budget", v)}
                options={[...budgets]}
                placeholder="Select a range"
              />
            </div>

            <Label className="flex items-start gap-2.5 text-sm font-normal text-foreground">
              <Checkbox
                name="consent"
                data-field="consent"
                checked={form.consent}
                onCheckedChange={(checked) =>
                  patch("consent", checked === true)
                }
                className={checkboxClassName}
                aria-invalid={Boolean(errors.consent)}
              />
              <span>
                I agree to Digi Carotene contacting me about my audit.{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
              </span>
            </Label>
            <FieldError id="err-consent" message={errors.consent} />
          </>
        ) : null}
      </div>

      <div className="mt-auto flex shrink-0 gap-3 border-t border-border bg-background pt-4">
        {step > 1 ? (
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={goBack}
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
        ) : null}
        {step < 3 ? (
          <Button
            type="button"
            size="lg"
            className="flex-1 bg-brand-yellow text-ink hover:bg-brand-yellow/90"
            onClick={goNext}
          >
            Next
            <ArrowRight className="size-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="flex-1 bg-brand-yellow text-ink hover:bg-brand-yellow/90"
          >
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Get My Free Audit
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  )
}
