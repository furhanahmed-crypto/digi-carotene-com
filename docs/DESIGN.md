# DESIGN — Digi Carotene

## Intent

Modern agency UI: confident, clean, professional — white/cream/yellow rhythm, yellow accents, multi-color only on service cards.

## Section background rhythm (mandatory)

### Light mode

1. **White / near-white** — `bg-background` / `bg-card`
2. **Yellow** — `bg-brand-yellow` (ink text)
3. **Cream** — `#f3efe6` (Search ranking, FAQ, contact band, page CTAs)

Do **not** use blue/black/purple/green as full section backgrounds.

**Yellow accent roles:** CTAs, section marks, underline accents, selection, `--carotene`.  
**Eyebrows / micro-labels:** muted — not rainbow.  
**Multi-color:** service panel cards only.

### Dark mode

Charcoal page + elevated bands; yellow for CTAs/marks; no rainbow full-bleed panels.

## Color tokens

| Token | Role |
| --- | --- |
| `--background` | White band |
| `--brand-yellow` / `--carotene` | Bands, CTAs, marks |
| `--brand-blue/green/purple/red` | Service cards / sparse accents |
| Cream `#f3efe6` | Soft content bands |

## Components

- Header: glass on scroll; **yellow** Contact CTA (`text-ink`)
- Section marks: yellow fill, ink text (paper tone on yellow bands)
- Page header: image + cream/yellow wash + card panel
- Page CTA: cream panel + yellow button
- Next-step (home CTA): full yellow band
- Floating contact: yellow expand; WhatsApp green
- Typing cycles (hero accent + SERP query): GSAP type → hold 3s → erase → next

## Motion

- Lenis + Reveal preserved
- Respect `prefers-reduced-motion`
- Featured SERP border: yellow/blue conic spin (disabled when reduced motion)

## Responsive

Desktop mega-menu; stacked mobile; no sticky chaos.
