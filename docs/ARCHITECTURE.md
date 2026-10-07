# ARCHITECTURE — Digi Carotene

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js App Router (see `node_modules/next/dist/docs/`) |
| UI | React 19 + TypeScript + Tailwind v4 + shadcn/ui |
| Motion | Lenis + Reveal (+ GSAP sync where needed) |
| Carousels | Embla |
| Icons | lucide-react |

No database and no authenticated API surface for the marketing homepage. Contact stays route/form based.

## Runtime composition

```
app/layout.tsx
  ThemeProvider → SmoothScrollProvider → Header → {children} → Footer → BackToTop → FloatingContactActions

app/page.tsx
  Homepage sections composed in order (no heavy logic)
```

## Data flow

```
constants/home/*  → content + nav + mega-menu
types/*           → shared interfaces
components/home/* → section UI
components/shared → chrome + primitives wrappers
hooks/*           → scroll / theme helpers
lib/*             → utils, placeholders, thin content shims
```

## Key folders

```
app/                      routes, layout, globals.css
components/home/          homepage feature folders
  hero/
  ratings/
  services-panels/
  growth-framework/
  reels/
  results/
  visual-showcase/
  work/
  cta/
components/shared/        Footer, floating CTAs, Reveal, Container, SectionLayout, SectionMark
components/ui/            shadcn primitives
constants/home/           navigation, mega-menu, sections
types/                    shared types
hooks/
lib/
docs/                     this documentation pack
public/                   static assets
```

## Theme architecture

- Class strategy: `.light` / `.dark` on `<html>`
- Tokens live in `app/globals.css`
- Browser chrome color via `generateViewport()` + ThemeProvider meta updates

## Motion architecture

- Root Lenis in `components/shared/smooth-scroll-provider.tsx`
- Responsive touch multipliers for mobile/tablet
- `Reveal` for scroll entrances; respect `prefers-reduced-motion`

## Integrations

- WhatsApp deep link (external)
- Contact route `/contact`
- Optional future: form backend / analytics — env-only secrets, never hardcoded
