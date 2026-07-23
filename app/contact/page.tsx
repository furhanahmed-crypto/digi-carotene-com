"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight, Mail, MapPin, MessageSquare, Send, Sparkles } from "lucide-react"
import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated sleek submission
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-svh pb-16">
      <PageHeader
        title="Start a Conversation"
        description="Connect with our multi-disciplinary strategists to audit your organic search engine citation authority or plan an offline activation."
        accentColor="from-orange-500/10"
        breadcrumbs={[
          { label: "Contact Us" },
        ]}
      />

      <div className="mx-auto max-w-5xl px-6 mt-8 md:mt-10 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Details / Text */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-3">
                <MessageSquare className="size-3.5" /> AGENCY OFFICE
              </span>
              <h2 className="font-lustria text-2xl font-normal tracking-tight mb-4">
                Let&apos;s Build Together
              </h2>
              <p className="text-muted-foreground font-sans font-light text-sm leading-relaxed">
                Whether you want to optimize your brand for LLMs, deploy experiential popups, or run multi-channel campaigns, our team is ready to deliver.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 text-primary">
                  <Mail className="size-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase block">Inquiries</span>
                  <a href="mailto:hello@digicarotene.com" className="text-sm font-sans font-light text-foreground hover:text-primary transition-colors">
                    hello@digicarotene.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 text-primary">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase block">Location</span>
                  <span className="text-sm font-sans font-light text-foreground">
                    Silicon Oasis, Dubai, UAE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Form */}
          <div className="lg:col-span-7 rounded-3xl border border-border bg-card/25 p-6 md:p-8 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px]" />

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <Sparkles className="size-6 animate-pulse" />
                </div>
                <h3 className="font-lustria text-xl font-normal text-foreground">Inquiry Received</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto font-sans font-light">
                  Thank you. One of our digital strategists will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full h-11 px-3.5 rounded-xl border border-border bg-background/50 text-sm font-sans font-light text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest" htmlFor="email">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full h-11 px-3.5 rounded-xl border border-border bg-background/50 text-sm font-sans font-light text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full h-11 px-3.5 rounded-xl border border-border bg-background/50 text-sm font-sans font-light text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest" htmlFor="message">
                    Inquiry Details
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe your goals or audit needs..."
                    rows={4}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background/50 text-sm font-sans font-light text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-xl h-11 text-sm font-medium group">
                  Send Inquiry <Send className="size-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
