"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Loader2 } from "lucide-react"

import { useGrowthAudit } from "@/components/growth-audit/growth-audit-provider"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FormSelect } from "@/components/ui/form-select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { countryDialCodes } from "@/constants/growth-audit/options"
import { siteContact } from "@/constants/site/contact"
import {
  CONTACT_REPLY_DAYS,
  type ContactCtaLocation,
  type ContactFieldErrors,
  contactEnquiryTypes,
  contactFormIsDirty,
  emptyContactPopupForm,
  firstNameFrom,
  trackContactEvent,
  validateContactPopup,
  type ContactPopupFormState,
} from "@/lib/contact-popup"
import { submitFormToSheet } from "@/lib/forms/submit-form"
import { cn } from "@/lib/utils"

const fieldClassName =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-hidden placeholder:text-muted-foreground/50 focus:border-brand-yellow"
const labelClassName = "mb-1.5 block text-sm font-medium text-foreground"
const checkboxClassName =
  "mt-0.5 size-4 shrink-0 rounded border-border data-checked:border-ink data-checked:bg-brand-yellow data-checked:text-ink"

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-1.5 text-sm text-red-600" role="alert">
      {message}
    </p>
  )
}

type ContactPopupFormProps = {
  ctaLocation: ContactCtaLocation
  industry?: string
  registerDirty: (dirty: boolean) => void
  onClose: () => void
  /** Close without dirty confirm (e.g. hand off to audit form). */
  onCloseSilent: () => void
}

export function ContactPopupForm({
  ctaLocation,
  industry = "",
  registerDirty,
  onClose,
  onCloseSilent,
}: ContactPopupFormProps) {
  const { openGrowthAudit } = useGrowthAudit()
  const [form, setForm] = React.useState<ContactPopupFormState>(() => ({
    ...emptyContactPopupForm(),
    industry,
  }))
  const [errors, setErrors] = React.useState<ContactFieldErrors>({})
  const [submitting, setSubmitting] = React.useState(false)
  const [done, setDone] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    registerDirty(contactFormIsDirty(form) && !done)
  }, [form, done, registerDirty])

  React.useEffect(() => {
    if (industry) {
      setForm((prev) => ({ ...prev, industry }))
    }
  }, [industry])

  const patch = <K extends keyof ContactPopupFormState>(
    key: K,
    value: ContactPopupFormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (form.company_fax.trim()) return

    const nextErrors = validateContactPopup(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0]
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus()
      return
    }

    setSubmitting(true)
    await submitFormToSheet({
      form: "contact",
      name: form.full_name,
      email: form.email,
      phone: `${form.country_code} ${form.phone}`.trim(),
      business: form.business_name,
      message: form.message,
      enquiry_type: form.enquiry_type,
      industry: form.industry,
      cta_location: ctaLocation,
      source: "contact_popup",
    })

    trackContactEvent("generate_lead", {
      form_type: "contact",
      enquiry_type: form.enquiry_type,
      cta_location: ctaLocation,
    })

    registerDirty(false)
    setDone(true)
    setSubmitting(false)
  }

  if (done) {
    const first = firstNameFrom(form.full_name)
    const whatsappText = encodeURIComponent(
      `Hi Digi Carotene, I just sent a message via the website (${form.enquiry_type || "enquiry"}).`
    )
    const whatsappHref = `https://wa.me/${siteContact.whatsappE164}?text=${whatsappText}`

    return (
      <div className="flex flex-1 flex-col items-start gap-4 py-2">
        <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          <span className="text-2xl" aria-hidden>
            ✓
          </span>
        </div>
        <div>
          <h3 className="font-display text-xl font-medium tracking-tight">
            Thanks, {first}! We&apos;ve got your message
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We&apos;ll reply within {CONTACT_REPLY_DAYS}.
          </p>
        </div>
        <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
          <Button
            nativeButton={false}
            render={
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="lg"
            className="flex-1 bg-brand-yellow text-ink hover:bg-brand-yellow/90"
          >
            Chat on WhatsApp now
            <ArrowRight className="size-4" />
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="flex-1"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    )
  }

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

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain pb-4 [-webkit-overflow-scrolling:touch]">
        <div>
          <Label htmlFor="contact_full_name" className={labelClassName}>
            Your name *
          </Label>
          <Input
            id="contact_full_name"
            name="full_name"
            autoComplete="name"
            className={fieldClassName}
            placeholder="e.g. Ravi Kumar"
            value={form.full_name}
            aria-invalid={Boolean(errors.full_name)}
            onChange={(e) => patch("full_name", e.target.value)}
          />
          <FieldError message={errors.full_name} />
        </div>

        <div>
          <Label htmlFor="contact_email" className={labelClassName}>
            Email *
          </Label>
          <Input
            id="contact_email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClassName}
            placeholder="you@business.com"
            value={form.email}
            aria-invalid={Boolean(errors.email)}
            onChange={(e) => patch("email", e.target.value)}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <Label htmlFor="contact_phone" className={labelClassName}>
            Phone / WhatsApp *
          </Label>
          <div className="flex gap-2">
            <FormSelect
              name="country_code"
              value={form.country_code}
              onValueChange={(v) => patch("country_code", v)}
              options={countryDialCodes.map((c) => c.code)}
              placeholder="+91"
              triggerClassName="w-[7.5rem] shrink-0"
            />
            <Input
              id="contact_phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={cn(fieldClassName, "flex-1")}
              placeholder="98765 43210"
              value={form.phone}
              aria-invalid={Boolean(errors.phone)}
              onChange={(e) => patch("phone", e.target.value)}
            />
          </div>
          <FieldError message={errors.phone} />
        </div>

        <div>
          <Label htmlFor="contact_business" className={labelClassName}>
            Company / business name
          </Label>
          <Input
            id="contact_business"
            name="business_name"
            autoComplete="organization"
            className={fieldClassName}
            placeholder="e.g. Green Leaf Café"
            value={form.business_name}
            onChange={(e) => patch("business_name", e.target.value)}
          />
        </div>

        <div>
          <Label className={labelClassName}>How can we help? *</Label>
          <FormSelect
            name="enquiry_type"
            value={form.enquiry_type}
            onValueChange={(v) => patch("enquiry_type", v)}
            options={[...contactEnquiryTypes]}
            placeholder="Select one"
          />
          <FieldError message={errors.enquiry_type} />
          {form.enquiry_type === "Free growth audit" ? (
            <p className="mt-2 text-sm text-muted-foreground">
              Want a detailed audit?{" "}
              <button
                type="button"
                className="font-medium text-foreground underline underline-offset-2"
                onClick={() => {
                  registerDirty(false)
                  onCloseSilent()
                  openGrowthAudit({
                    ctaLocation: `${ctaLocation}_audit`,
                    industry: form.industry || undefined,
                  })
                }}
              >
                Use our audit form →
              </button>
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="contact_message" className={labelClassName}>
            Message *
          </Label>
          <Textarea
            id="contact_message"
            name="message"
            rows={4}
            className={cn(fieldClassName, "h-auto min-h-[6.5rem] resize-y py-2.5")}
            placeholder="Tell us a little about your business and goals"
            value={form.message}
            maxLength={1000}
            aria-invalid={Boolean(errors.message)}
            onChange={(e) => patch("message", e.target.value)}
          />
          <div className="mt-1.5 flex items-center justify-between gap-2">
            <FieldError message={errors.message} />
            <p className="ml-auto text-xs text-muted-foreground tabular-nums">
              {form.message.length} / 1000
            </p>
          </div>
        </div>

        <Label className="flex items-start gap-2.5 text-sm font-normal text-foreground">
          <Checkbox
            name="consent"
            checked={form.consent}
            onCheckedChange={(checked) => patch("consent", checked === true)}
            className={checkboxClassName}
            aria-invalid={Boolean(errors.consent)}
          />
          <span>
            I agree to Digi Carotene contacting me.{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-2"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </span>
        </Label>
        <FieldError message={errors.consent} />
      </div>

      <div className="mt-auto flex shrink-0 border-t border-border bg-background pt-4">
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="w-full bg-brand-yellow text-ink hover:bg-brand-yellow/90"
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
