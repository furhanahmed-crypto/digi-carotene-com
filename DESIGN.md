# Design — digicarotene.com

Architecture and visual guidance for the Digi Carotene agency website. Keep the system simple, consistent, and easy to extend.

## Product Shape

This is a **marketing website**, not an application product.

```txt
app route (metadata + composition)
  -> layout chrome
  -> page sections
  -> shared UI / motion primitives
```

- **Routes** own SEO metadata and page composition.
- **Sections** own one job each: hero, platform overview, capabilities, case studies, etc.
- **Shared UI** stays small and reusable (buttons, nav, footer, motion helpers, breadcrumb banner).
- Prefer server-rendered content; hydrate only interactive or animated islands.

## Visual Direction

Primary inspiration:
- **Framer** — premium composition, scroll presence, confident motion, glassmorphic floating menus
- **Resend** — dark, minimal, high-contrast marketing surfaces, delicate line work
- **Jasper** — content clarity, banner restraint, modern minimal messaging

Brand test: the first viewport should still feel like Digi Carotene if the nav were removed.

## Premium UI Conventions

### 1. Translucent Glassmorphism (dropdowns & headers)
To maintain alignment with modern visual trends, navigation elements, popups, and dialogs should avoid muddy solid colors.
- Use `backdrop-blur-lg` and translucent backgrounds (e.g., `bg-background/80` or `bg-card/50`).
- Borders should be subtle and translucent (e.g., `border border-border/50`).
- Hover states on buttons or dropdown links should use subtle scale translations (`hover:translate-x-0.5`) and transparent overlays (e.g., `hover:bg-foreground/[0.04]`).

### 2. Custom Inline SVGs over Heavy Images
Instead of loading static rasterized images (like `.png` or `.jpeg`), prefer hand-coded, clean, reactive inline SVG vectors.
- **Performance**: High lighthouse scores, absolute minimal asset footprint.
- **Retina Scaling**: Perfect vector crispness across all screen densities.
- **State Reactivity**: SVGs can animate or translate their child components in response to React state changes or group hovers. Use Tailwind's transition properties on SVG `<g>`, `<path>`, or `<circle>` elements.

### 3. Glow & Parallax Depth
- Use radial glows on hover: absolute background wrappers (e.g., `bg-gradient-to-b from-primary/5 via-transparent to-transparent`) that activate on parent hover.
- Keep glows restrained and color-matched to avoid a childish look.

## Motion

- Use motion for hierarchy and presence (scroll reveals, restrained parallax, CTA emphasis).
- Integrate **Lenis** as the smooth scrolling foundation with a lerp value between `0.05` and `0.1` for fluid, buttery-smooth page flows.
- Keep scroll effects smooth and performance-friendly; avoid layout thrash.
- Honor `prefers-reduced-motion`.

## Page Header / Breadcrumb Banner
All secondary pages should compose a consistent, premium Page Header ("Breadcrumb Banner") featuring:
- A soft, color-matched radial glow.
- Clean typography pairing (`font-lustria` for headings, `font-sans` for metadata).
- Reusable, simple, minimalist layout.
