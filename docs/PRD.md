# PRD — Digi Carotene Agency Website

## What we're building

A public marketing website for **Digi Carotene**, a Hyderabad digital marketing agency (SEO, AEO, GEO, digital, offline, PR). The product goal is to persuade prospects that Digi Carotene is a serious agency partner — not a blog, notes app, or article showcase.

## Why

Manager feedback: the previous layout felt like notes/blog content. The site must read as a modern agency with clear proof hierarchy, strong chrome, and intentional visual rhythm.

## Goals

1. First viewport communicates discovery positioning (search + AI + market presence).
2. Homepage feels agency-weight: services, framework, proof shells, work, FAQ, CTA.
3. Light/dark themes work; light-mode section backgrounds stay disciplined (white + yellow only) with blue accents/CTAs.
4. Lenis smooth scroll and purposeful motion remain.
5. No fabricated clients, logos, metrics, awards, or testimonials.

## In scope (current pass)

- Homepage composition and section redesign
- Shared chrome: header, services mega-menu, footer, floating contact actions
- Design tokens and docs system
- Honest placeholder proof UI (`PLACEHOLDERS.md`)

## Out of scope

- Full inner-page redesign (later)
- CMS, auth, admin, databases
- Inventing case-study outcomes or review scores

## User stories

1. As a prospect, I understand in seconds that Digi Carotene helps brands get found online, in AI answers, and in-market.
2. As a prospect, I can browse services from a clear mega-menu.
3. As a prospect, I see structured proof areas even when some values are “to confirm”.
4. As a mobile visitor, scroll feels responsive and sections stay readable without sticky chaos.

## Acceptance criteria

- [ ] Homepage no longer dominated by long sticky essay sections
- [ ] Light mode section backgrounds use **white and yellow only**; blue for CTAs/heading accents
- [ ] Dark mode uses a professional dark neutral system (not random neon panels)
- [ ] Floating contact actions: round icon default, expand on hover
- [ ] Services mega-menu usable on desktop; mobile nav usable
- [ ] Zero invented proof values
- [ ] `bun run typecheck` passes; lint clean for touched files
