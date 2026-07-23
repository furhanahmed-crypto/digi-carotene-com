<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent guidelines — digicarotene.com

Rules for building and maintaining the Digi Carotene agency website (Next.js + TypeScript + shadcn/ui). Keep changes small, readable, and consistent.

## Project context

- Site: **digicarotene.com**
- Type: digital marketing agency marketing site (SEO / AEO / GEO + service storytelling)
- Not a product app, admin panel, or multi-tenant SaaS
- Prioritize performance, SEO, and maintainable page composition with modern scroll/motion

## Code style

- **Least code, more output** — smallest change that solves the problem.
- **Beginner-friendly** — one function, one job. Readable over clever.
- **Consistent naming** — precise file, folder, component, and hook names.
- **Maintainable & modular** — section/feature folders when useful; shared only when reused.
- Prefer Server Components. Add `"use client"` only for interactivity, browser APIs, or libraries that need client context.

## Where code goes

```txt
app/                 routes, layouts, page metadata, route-level composition
components/
  ui/                shadcn primitives
  ...                site sections, chrome, marketing blocks
hooks/               client hooks when needed
lib/                 shared helpers (e.g. `cn`)
public/              static assets
```

- Keep route files in `app/` thin: compose sections, set metadata, avoid heavy logic.
- Keep presentational sections in `components/`.
- Do not bury reusable constants, types, or copy maps inside large `.tsx` files when they grow.

## Components & hooks

- Prefer presentational sections; isolate interaction and animation state.
- One concern per hook.
- Named exports preferred for shared components.
- Split files when they become hard to scan.
- Use shadcn from `components/ui/` and `lucide-react` for icons.

## SEO & content

- Set page `metadata` (or `generateMetadata`) in App Router layouts/pages — not `index.html`.
- Keep titles, descriptions, and headings aligned with digicarotene.com positioning.
- Structure content for humans and search/answer engines: clear H1, logical H2s, useful copy.
- Do not invent large service catalogs in shared docs; add service lists only where a page needs them.

## Motion & UX

- Aim for Framer/Resend-level polish: intentional scroll effects, restrained motion.
- Ship a few purposeful animations per major view — not decorative noise.
- Respect reduced-motion preferences when adding animation.

## Naming

- Components: PascalCase; file name matches export.
- Hooks: `useXxx`.
- Constants: `SCREAMING_SNAKE_CASE` for primitives; camelCase for grouped config.
- Types: PascalCase; props end with `Props`.
- Utilities: verb- or purpose-based (`formatDate`, `cn`, `buildMetadata`).

## Don't

- Do not treat this repo like a Vite SPA (no `react-router` / `index.html` bootstrap patterns).
- Do not add product-app patterns (dashboards, dense admin tables, chart-heavy UI) unless a page truly needs them.
- Do not put data-fetch or mutation logic in random UI leaves when a clearer server/action boundary exists.
- Do not add wrapper abstractions without clear reuse.
- Do not leave root metadata, favicon, or theme half-finished.

## Before finishing

1. Root/page metadata title and description are correct for digicarotene.com.
2. Layout and shared chrome are defined once where possible.
3. Client boundaries (`"use client"`) are intentional and minimal.
4. Motion is purposeful and does not tank performance or CLS.
5. Imports, routes, and naming stay consistent.
6. Lint and typecheck pass.
