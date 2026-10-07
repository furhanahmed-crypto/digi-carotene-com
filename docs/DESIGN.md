# DESIGN — Digi Carotene

## Intent

Modern agency UI: confident, clean, professional. Inspired by Digital Mojo energy and ShootOrder clarity — white/yellow rhythm, restrained yellow accents, multi-color only where cards need range.

## Section background rhythm (mandatory)

### Light mode

Section backgrounds may use **only**:

1. **White / near-white** — `bg-background` / `bg-card`
2. **Yellow** — `bg-brand-yellow` (with ink / high-contrast text)
3. **Cream** — `#f3efe6` for the Search ranking band only

Alternate deliberately (e.g. white → yellow → white → yellow). Do **not** use blue, black, purple, or green as full section backgrounds in light mode.

**Yellow** is the primary accent (CTAs, section marks, underline accents). Eyebrows stay muted — do not spray blue/purple/green on every label.

**Multi-color** belongs on service cards (and similar proof tiles), not on hero dots/tags. Keep chrome professional and restrained.

**Search ranking** sits on a cream band (`#f3efe6`) with negative top margin so the SERP card straddles the hero boundary.

### Dark mode

Use a professional charcoal system:

- Page: deep charcoal (`--background`)
- Elevated bands: slightly lighter (`--secondary` / `--muted`)
- Text: high-contrast off-white
- Yellow reserved for marks / CTAs / key accents
- Avoid rainbow full-bleed panels

## Color tokens

Defined in `app/globals.css`:

| Token | Role |
| --- | --- |
| `--background` | Page / white band (light) |
| `--brand-yellow` / `--carotene` | Yellow bands, CTAs, marks |
| `--brand-blue/green/purple/red` | Service cards / sparse accents only |
| `--section-dark` | Dark-mode elevated / footer when appropriate |

## Typography

- Display: Fraunces (`font-display`)
- Body/UI: Inter (`font-sans`)
- Clear hierarchy: large section titles, short supporting copy, uppercase micro-labels sparingly

## Spacing

- Section vertical: ~64–96px mobile, ~96–120px desktop
- Content max width via `Container` (~max-w-6xl)
- Prefer generous whitespace over dense blog columns

## Components & patterns

- Header: glass/card on scroll; blue Contact CTA
- Services mega-menu: 2-column icon + title + blurb
- Service panels: **full multi-color cards** on a white band
- Growth framework / proof cards: clean cards, watermark numbers OK
- Preserved sections (marquee, visual showcase, case studies, FAQ): keep layout/structure; theme with white/yellow bands + blue accents
- Yellow bands: ink heading text; blue eyebrows / section marks

## Floating contact actions

- Default: **rounded-full icon button**
- Hover/focus: expand horizontally to reveal label
- Contact control uses blue; WhatsApp keeps brand green
- Smooth width/opacity transition
- Stacked above back-to-top
- Mobile: icon-only is fine; expand on hover where hover exists, or tap-friendly size

## Motion

- Lenis preserved
- Reveal: short fade/rise
- Hover expands on floating CTAs
- Respect `prefers-reduced-motion` (instant expand or no motion)

## Responsive

- Desktop: mega-menu, expanded hover affordances
- Tablet/mobile: stacked sections, no sticky chaos, floating icons remain usable
