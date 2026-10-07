# RULES — Digi Carotene

Mandatory conventions for humans and agents.

## Product rules

1. The site must read as a digital marketing agency.
2. Do not invent clients, logos, metrics, awards, testimonials, or review scores.
3. Placeholder proof must be explicit (`[[… — to confirm]]`) and listed in `PLACEHOLDERS.md`.
4. Prefer omitting a fake quote over inventing one.

## Design rules

1. Light-mode **section backgrounds**: white/near-white and yellow only.
2. **Blue** for headings accents, primary buttons/CTAs, section marks, floating contact.
3. Dark mode: professional charcoal system; no random full-bleed rainbow sections.
4. Multi-color service **cards** OK on white bands; do not paint every section a different full-bleed color.
5. Floating contact: round icon default; expand horizontally on hover with transition.
6. Preserve Lenis and purposeful Reveal motion; respect reduced motion.
7. Keep layout/structure of Clients marquee, Visual showcase, Case studies, FAQ — theme them consistently.

## Code rules

1. Prefer Server Components; `"use client"` only when required.
2. Keep `app/page.tsx` thin — compose sections only.
3. Modular folders: `components/home/<section>/`, `constants/`, `types/`, `hooks/`, `lib/`.
4. Named exports; file name matches primary export.
5. Use `cn()` for class merging; lucide for icons; shadcn in `components/ui/`.
6. Read `node_modules/next/dist/docs/` before using Next APIs.
7. Least code, more output. Readable over clever.

## Forbidden

1. Fabricating social proof
2. Committing secrets (`.env`, keys, tokens)
3. Adding admin/auth/SaaS dashboard patterns without request
4. Removing Lenis without explicit approval
5. Light-mode blue/black/purple/green full section backgrounds

## Naming

- Components: PascalCase
- Hooks: `useXxx`
- Constants: grouped camelCase or SCREAMING_SNAKE for primitives
- Types: PascalCase; props end with `Props`
