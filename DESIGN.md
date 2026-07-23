# Design — digicarotene.com

Architecture and visual guidance for the Digi Carotene agency website. Keep the system simple, consistent, and easy to extend.

## Product shape

This is a **marketing website**, not an application product.

```txt
app route (metadata + composition)
  -> layout chrome
  -> page sections
  -> shared UI / motion primitives
```

- **Routes** own SEO metadata and page composition.
- **Sections** own one job each: hero, proof, services overview, process, CTA, etc.
- **Shared UI** stays small and reusable (buttons, nav, footer, motion helpers).
- Prefer server-rendered content; hydrate only interactive or animated islands.

## Visual direction

Primary inspiration:

- **Framer** — premium composition, scroll presence, confident motion
- **Resend** — dark, minimal, high-contrast marketing surfaces
- **Jasper** — content clarity, banner restraint, modern minimal messaging (not Jasper’s product chrome)

Brand test: the first viewport should still feel like Digi Carotene if the nav were removed.

## Composition rules

- One composition in the first viewport — not a dashboard.
- Brand first: Digi Carotene / digicarotene.com as a hero-level signal.
- Hero budget: brand, one headline, one short support line, one CTA group, one dominant visual plane.
- One job per section: one purpose, one headline, usually one short supporting sentence.
- Default: no cards. Use card-like containers only when they help interaction or scanning of real choices.
- Prefer full-bleed or edge-to-edge hero imagery over inset media cards.
- Reduce clutter: avoid pill clusters, stat strips, icon rows, and competing promo blocks in the hero.

## Motion

- Use motion for hierarchy and presence (scroll reveals, restrained parallax, CTA emphasis).
- Prefer 2–3 intentional motions on key views over many small effects.
- Keep scroll effects smooth and performance-friendly; avoid layout thrash and heavy continuous filters.
- Honor `prefers-reduced-motion`.

## UI system

- Tailwind + shadcn/ui as the base system (`components/ui/`).
- Define a clear color direction with CSS variables in `app/globals.css`.
- Avoid default AI-looking themes (generic purple gradients, cream + terracotta clichés, broadsheet newspaper layouts).
- Use expressive typography that fits a modern agency brand; avoid default system stacks for display type.
- Keep spacing, radius, borders, and CTA styles consistent across pages.
- `lucide-react` for icons when icons are actually needed.

## Content tone

- Clear, confident agency copy focused on outcomes in SEO, AEO, and GEO.
- Short banners and section intros; let visuals and hierarchy do work.
- Services (digital, offline, PR) should be introduced as structured narratives, not encyclopedias dumped into shared constants.

## Quality bar

- Small files, obvious patterns, precise names.
- Add abstractions only when reuse is real.
- Optimize for Core Web Vitals: lean client JS, stable layouts, optimized media.
- If a pattern repeats, document it here or in `README.md` instead of re-explaining it every time.
