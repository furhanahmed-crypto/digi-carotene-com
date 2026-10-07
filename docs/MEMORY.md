# MEMORY — Digi Carotene long-term context

## Core decisions

1. **Agency, not blog** — Manager rejected the prior “notes/article” feel. Homepage must signal a marketing agency.
2. **Honesty first** — Never invent clients, logos, metrics, awards, or testimonials. Use `[[… — to confirm]]` and track in `PLACEHOLDERS.md`.
3. **White + yellow bands, blue accents** — Light-mode section backgrounds are white/near-white and brand yellow. Blue is the primary accent for headings, CTAs, marks. Multi-color service cards stay on the white “Full-stack discovery” band.
4. **Keep four sections** across revamps: Clients marquee, Visual showcase, Case studies, FAQ (layout/structure preserved; theme must stay consistent).
5. **Search ranking is its own section** — Google-style SERP card sits centered below Clients marquee (Hero → Marquee → SERP), with a rotating yellow/blue featured border on the result card.
6. **Preserve Lenis + purposeful motion** — Do not remove smooth scroll for “simpler” native scroll without explicit approval.
7. **Docs pack** — Product truth lives in `docs/PRD.md`, `docs/DESIGN.md`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/RULES.md`, `docs/SECURITY.md`, `docs/AGENTS.md`, `docs/MEMORY.md`.

## Lessons learned

- Sticky left nav + sticky pillar titles stacked badly on mobile; normalize sticky below `lg`.
- CSS `border` + `clip-path` drops diagonal borders — use layered shells if a slanted edge needs a stroke.
- Lenis felt sluggish on touch until `touchMultiplier` / lerp were tuned per breakpoint.
- Browser top bar stays wrong unless `theme-color` is set in viewport metadata **and** updated on theme toggle.
- Full rainbow section fills felt inconsistent; white + yellow with blue accents reads cleaner while multi-color **cards** still sell range.
- Blue full-bleed section bands felt heavy — yellow bands tested better.
- Rainbow dots/tags in the hero read childish — keep multi-color on service cards only; hero chrome stays restrained (muted eyebrow, yellow CTA, yellow underline accent).
- Yellow section + blue mark + white card clashes; FAQ works better on white with yellow marks.
- Search ranking SERP overlaps the hero via negative margin on a cream band.

## Constraints that keep biting us

- `promt.txt` still forbids fabricated proof; its single-accent color rule is **superseded** by the revamp, but honesty is not.
- Placeholder images are limited (`PLACEHOLDER_IMAGES` length 3) — mosaic tiles should cycle via `getPlaceholderImage`.
- Old unused homepage files (`WhyChooseUs`, etc.) may still fail lint if left with unescaped quotes — clean when touched.

## Reference sites (patterns only)

- digitalmojo.in — color energy, not copy
- shootorder.com — hero metaphor, mega-menu, results/framework structure
- brandshark — mosaic + reels proof pattern
- digimarkagency.com — ratings strip pattern
