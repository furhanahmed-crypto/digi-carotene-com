# digicarotene.com

Marketing site for **Digi Carotene** — a digital marketing agency focused on SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization), plus digital, offline, and PR services.

This is a **public agency website**, not a SaaS product or dashboard.

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** + **shadcn/ui**
- **lucide-react** for icons

## What we are building

A modern, conversion-oriented agency site with:

- Strong brand presence and clear service storytelling
- Smooth scroll-driven motion and section reveals (Framer / Resend feel)
- Clean, minimal marketing copy (Jasper-like clarity — not Jasper’s product UI)
- SEO-first page structure, metadata, and content hierarchy for digicarotene.com

Services span digital marketing, offline marketing, and PR. Do not hardcode long service inventories into docs or shared constants unless a page needs them.

## Design references

| Source | Use for |
| --- | --- |
| [Framer](https://www.framer.com/) | Motion, scroll polish, premium marketing composition |
| [Resend](https://resend.com/home) | Dark, minimal, high-contrast marketing UI |
| [Jasper](https://www.jasper.ai/) | Content tone, banners, minimal modern marketing messaging |

## Project docs

- `AGENTS.md` — coding rules for agents and contributors
- `DESIGN.md` — architecture, UI system, and motion guidance

## Local development

```bash
bun install
bun run dev
```

Other scripts: `bun run build`, `bun run start`, `bun run lint`, `bun run typecheck`, `bun run format`.

## Conventions (short)

- Prefer App Router pages and layouts; keep route files thin.
- Put shared UI in `components/` (shadcn under `components/ui/`).
- Prefer Server Components by default; add `"use client"` only when needed.
- Keep motion purposeful (2–3 strong effects per view, not noise).
- Optimize for maintainability: small files, clear names, no premature abstractions.
