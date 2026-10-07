# DESIGN — Digi Carotene

## Intent

Modern agency UI: confident, clean, professional — white / cream / yellow rhythm, yellow accents, multi-color only on service cards.

## Section layout (mandatory)

All homepage content bands use `components/shared/section-layout.tsx` (`SectionLayout`).

| Prop | Role |
| --- | --- |
| `tone` | `white` \| `cream` \| `yellow` — surface + atmosphere |
| `size` | `default` (`py-16 md:py-24`) \| `compact` (marquee) \| `hero` (nav offset) |
| `contained` | Wrap in `Container` (default `true`) |
| `bordered` | Bottom border (default `true`) |

### Atmosphere by tone

- **White** — soft yellow radials + light dot grid + faint yellow bloom
- **Cream** (`#f3efe6`) — stronger yellow radials + white center wash + yellow bloom (premium spotlight)
- **Yellow** — near-transparent cream / white washes for depth (never flat yellow)

Do **not** hand-roll section padding or background washes on homepage sections — extend `SectionLayout`.

### Light-mode bands only

1. **White / near-white** — `tone="white"`
2. **Cream** — `tone="cream"`
3. **Yellow** — `tone="yellow"` (ink text)

Do **not** use blue/black/purple/green as full section backgrounds.

### Section marks

Use `SectionMark` on every content section eyebrow:

- White / cream → `tone="carotene"` (yellow mark, ink text)
- Yellow bands → `tone="paper"` (cream mark so it still reads)

**Yellow accent roles:** CTAs, section marks, underlines, selection, `--carotene`.  
**Eyebrows / micro-labels:** muted — not rainbow.  
**Multi-color:** service panel cards only.

### Dark mode

Charcoal page + elevated bands; yellow for CTAs/marks; atmosphere opacity reduced; no rainbow full-bleed panels.

## Color tokens

| Token | Role |
| --- | --- |
| `--background` | White band |
| `--brand-yellow` / `--carotene` | Bands, CTAs, marks |
| `--brand-blue/green/purple/red` | Service cards / sparse accents |
| Cream `#f3efe6` | Soft content bands |

## Homepage band order (reference)

Hero (white) → Marquee (yellow) → Search ranking (cream) → Differentiators (white) → Service panels (white) → Who we work with (cream) → Framework (white) → Visual showcase (yellow) → Reels (white) → Results (yellow) → Work (white) → FAQ (cream) → CTA (yellow)

## Components

- Header: glass on scroll; **yellow** Contact CTA (`text-ink`)
- Section marks: yellow fill, ink text (paper tone on yellow bands)
- Page header: image + cream/yellow wash + card panel
- Page CTA: cream panel + yellow button
- Next-step (home CTA): yellow `SectionLayout`
- Floating contact: yellow expand; WhatsApp green
- Typing cycles (hero accent + SERP query): GSAP type → hold 3s → erase → next

## Motion

- Lenis + Reveal preserved
- Respect `prefers-reduced-motion`
- Featured SERP border: single-direction yellow/blue conic spin (disabled when reduced motion)

## Responsive

Desktop mega-menu; stacked mobile; no sticky chaos.
