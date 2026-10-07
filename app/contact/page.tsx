"use client"

import * as React from "react"

import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { whatsappHref } from "@/constants/home/navigation"

export default function ContactPage() {
  const [formState, setFormState] = React.useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    city: "Hyderabad",
    need: "",
    budget: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  const fieldClassName =
    "h-12 w-full border border-border bg-background px-4 text-base text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-brand-yellow"

  return (
    <div className="min-h-svh">
      <PageHeader
        title="Let's Talk About Where You Want Your Business to Be"
        description="Tell us a little about your business and goals. A strategist (not a salesperson) will get back to you within one working day with honest thoughts on what we would do and whether we are the right fit."
        breadcrumbs={[{ label: "Contact" }]}
        mark="Contact Us"
        imageIndex={2}
      />

      <section className="border-t border-border bg-[#f3efe6] py-[72px] lg:py-[140px] dark:bg-background">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionMark>Get your free audit</SectionMark>
            <SectionHeading
              className="mt-6"
              eyebrow="Hyderabad · Bangalore"
              title="Reach us directly"
              body="Fill in the form and we will review your Google rankings, AI search visibility, ads, social presence and website, and send you a prioritised action plan."
            />

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:hello@digicarotene.com"
                    className="text-base text-foreground transition-colors hover:text-brand-yellow"
                  >
                    hello@digicarotene.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                  Phone & WhatsApp
                </dt>
                <dd className="mt-1 text-base text-foreground">
                  [[+91 XXXXX XXXXX — to confirm]]
                </dd>
                <dd className="mt-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-foreground underline decoration-brand-yellow underline-offset-4"
                  >
                    Message on WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                  Hyderabad office
                </dt>
                <dd className="mt-1 text-base text-foreground">
                  [[Full address, landmark, PIN — to confirm]]
                </dd>
              </div>
              <div>
                <dt className="text-[13px] tracking-[0.03em] text-muted-foreground uppercase">
                  Hours
                </dt>
                <dd className="mt-1 text-base text-foreground">
                  Monday to Saturday, 10 am to 7 pm
                </dd>
              </div>
            </dl>

            <div className="mt-10 space-y-4">
              <h3 className="font-display text-xl font-medium">
                What happens next
              </h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">1. Review —</span>{" "}
                  A strategist studies your business, website and competitors.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    2. 30-minute call —
                  </span>{" "}
                  We discuss your goals, challenges and what we found.
                </li>
                <li>
                  <span className="font-medium text-foreground">3. Your plan —</span>{" "}
                  A clear proposal with scope, timelines and reportable targets.
                </li>
              </ol>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-7 md:p-8 dark:bg-card">
            {isSubmitted ? (
              <div className="py-12">
                <SectionMark>Received</SectionMark>
                <h3 className="font-display mt-6 text-[26px] leading-[1.2] font-medium">
                  Inquiry received
                </h3>
                <p className="mt-4 max-w-sm text-base leading-[1.6] text-muted-foreground">
                  Thank you. A strategist will get back within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <SectionMark>Free audit form</SectionMark>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    className={fieldClassName}
                    placeholder="Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                  />
                  <input
                    required
                    className={fieldClassName}
                    placeholder="Business name"
                    value={formState.business}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, business: e.target.value }))
                    }
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    className={fieldClassName}
                    placeholder="Phone (WhatsApp)"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, phone: e.target.value }))
                    }
                  />
                  <input
                    required
                    type="email"
                    className={fieldClassName}
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                  />
                </div>
                <select
                  className={fieldClassName}
                  value={formState.city}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, city: e.target.value }))
                  }
                >
                  <option>Hyderabad</option>
                  <option>Bangalore</option>
                  <option>Other</option>
                </select>
                <input
                  className={fieldClassName}
                  placeholder="What do you need help with?"
                  value={formState.need}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, need: e.target.value }))
                  }
                />
                <input
                  className={fieldClassName}
                  placeholder="Monthly marketing budget (optional)"
                  value={formState.budget}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, budget: e.target.value }))
                  }
                />
                <textarea
                  required
                  rows={5}
                  className="w-full border border-border bg-background px-4 py-3 text-base text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-brand-yellow"
                  placeholder="Message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
                >
                  Get My Free Audit
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}
