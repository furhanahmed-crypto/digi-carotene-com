"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FormSelect } from "@/components/ui/form-select"
import {
  buildThankYouHref,
  enquiryServiceOptions,
  type EnquirySource,
} from "@/lib/enquiry"
import { cn } from "@/lib/utils"

const fieldClassName =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-brand-yellow"

type EnquiryFormProps = {
  defaultService?: string
  source?: EnquirySource
  submitLabel?: string
  className?: string
  onSubmitted?: () => void
}

export function EnquiryForm({
  defaultService = "",
  source = "enquiry",
  submitLabel = "Send enquiry",
  className,
  onSubmitted,
}: EnquiryFormProps) {
  const router = useRouter()
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  })

  React.useEffect(() => {
    if (defaultService) {
      setFormState((s) => ({ ...s, service: defaultService }))
    }
  }, [defaultService])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmitted?.()
    router.push(
      buildThankYouHref({
        name: formState.name,
        service: formState.service,
        source,
      })
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3", className)}>
      <input
        required
        name="name"
        autoComplete="name"
        className={fieldClassName}
        placeholder="Name"
        value={formState.name}
        onChange={(e) =>
          setFormState((s) => ({ ...s, name: e.target.value }))
        }
      />
      <input
        required
        type="email"
        name="email"
        autoComplete="email"
        className={fieldClassName}
        placeholder="Email"
        value={formState.email}
        onChange={(e) =>
          setFormState((s) => ({ ...s, email: e.target.value }))
        }
      />
      <input
        required
        type="tel"
        name="phone"
        autoComplete="tel"
        className={fieldClassName}
        placeholder="Phone number"
        value={formState.phone}
        onChange={(e) =>
          setFormState((s) => ({ ...s, phone: e.target.value }))
        }
      />
      <FormSelect
        required
        name="service"
        placeholder="Service you need"
        value={formState.service}
        onValueChange={(service) =>
          setFormState((s) => ({ ...s, service }))
        }
        options={enquiryServiceOptions}
      />
      <textarea
        name="message"
        rows={3}
        className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-brand-yellow"
        placeholder="Message (optional)"
        value={formState.message}
        onChange={(e) =>
          setFormState((s) => ({ ...s, message: e.target.value }))
        }
      />
      <Button
        type="submit"
        size="lg"
        className="w-full bg-brand-yellow text-ink hover:bg-brand-yellow/90"
      >
        {submitLabel}
        <ArrowRight className="size-4" />
      </Button>
    </form>
  )
}
