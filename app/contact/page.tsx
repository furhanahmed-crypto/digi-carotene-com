"use client"

import * as React from "react"

import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  const fieldClassName =
    "h-12 w-full border border-line bg-background px-4 text-base text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-carotene"

  return (
    <div className="min-h-svh">
      <PageHeader
        title="Start a conversation"
        description="Tell us what you need ranked, cited, or activated. We work from Hyderabad with brands that want one team — not a stack of vendors."
        breadcrumbs={[{ label: "Contact" }]}
        mark="Contact"
        imageIndex={2}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionMark>Studio</SectionMark>
            <SectionHeading
              className="mt-6"
              eyebrow="Hyderabad"
              title="Let's build together"
              body="Whether you need a GEO scan, a search program, or a physical activation, start here."
            />

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                  Inquiries
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:hello@digicarotene.com"
                    className="text-base text-foreground transition-colors hover:text-carotene"
                  >
                    hello@digicarotene.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                  Location
                </dt>
                <dd className="mt-1 text-base text-foreground">Hyderabad, India</dd>
              </div>
            </dl>
          </div>

          <div className="glass-panel p-6 lg:col-span-7 md:p-8">
            {isSubmitted ? (
              <div className="py-12">
                <SectionMark>Received</SectionMark>
                <h3 className="font-display mt-6 text-[26px] leading-[1.2] font-medium">
                  Inquiry received
                </h3>
                <p className="mt-4 max-w-sm text-base leading-[1.6] text-muted-foreground">
                  Thank you. A strategist will get back within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                      Full name
                    </span>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(event) =>
                        setFormState({ ...formState, name: event.target.value })
                      }
                      placeholder="Your name"
                      className={fieldClassName}
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(event) =>
                        setFormState({ ...formState, email: event.target.value })
                      }
                      placeholder="you@company.com"
                      className={fieldClassName}
                    />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                    Company
                  </span>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(event) =>
                      setFormState({ ...formState, company: event.target.value })
                    }
                    placeholder="Brand or company"
                    className={fieldClassName}
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                    What do you need?
                  </span>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(event) =>
                      setFormState({ ...formState, message: event.target.value })
                    }
                    placeholder="Search, activations, PR, or a full plan..."
                    rows={5}
                    className={`${fieldClassName} h-auto resize-none py-3`}
                  />
                </label>

                <Button type="submit" size="lg">
                  Send inquiry
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}
