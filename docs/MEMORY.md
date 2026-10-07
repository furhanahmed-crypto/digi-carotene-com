# MEMORY — Digi Carotene long-term context

## Core decisions

1. **Agency, not blog** — Manager rejected the prior “notes/article” feel. Homepage must signal a marketing agency.
2. **Honesty first** — Never invent clients, logos, metrics, awards, or testimonials. Use `[[… — to confirm]]` and track in `PLACEHOLDERS.md`.
3. **White + cream + yellow bands** — Light-mode section backgrounds only. Yellow for CTAs / marks / underlines. Multi-color service cards stay on white bands.
4. **`SectionLayout` is the section shell** — Atmosphere (yellow/cream washes), padding, and tone live in `components/shared/section-layout.tsx`. Do not duplicate washes per section.
5. **SectionMark on every content band** — Yellow mark on white/cream; paper mark on yellow bands so the site never feels mark-less.
6. **Keep four sections** across revamps: Clients marquee, Visual showcase, Case studies, FAQ (layout/structure preserved; theme via `SectionLayout`).
7. **Search ranking is its own cream section** — Google-style SERP below marquee, with a one-direction travelling yellow/blue border.
8. **Preserve Lenis + purposeful motion** — Do not remove smooth scroll without explicit approval.
9. **Docs pack** — Product truth lives in `docs/*.md` + `PLACEHOLDERS.md`. Master copy: `docs/content/`.

## Lessons learned

- Sticky left nav + sticky pillar titles stacked badly on mobile; normalize sticky below `lg`.
- CSS `border` + `clip-path` drops diagonal borders — use layered shells if a slanted edge needs a stroke.
- Lenis felt sluggish on touch until `touchMultiplier` / lerp were tuned per breakpoint.
- Browser top bar stays wrong unless `theme-color` is set in viewport metadata **and** updated on theme toggle.
- Full rainbow section fills felt inconsistent; white/cream/yellow + multi-color **cards** sells range without chaos.
- Blue full-bleed section bands felt heavy — yellow/cream tested better.
- Rainbow dots/tags in the hero read childish — keep multi-color on service cards only.
- Yellow section + blue mark + white card clashes; use paper marks on yellow bands.
- Dual-direction conic SERP borders feel chaotic — one travelling highlight reads premium.
- Long hero accent lines collide with the mosaic — keep cycling accents short (`You rank first.` length).
- Framework cards need `h-full` + `flex-1` body or heights break in a 4-up grid.
- Plain cream SERP with no atmosphere looked empty — cream tone + yellow bloom + stage frame fixes it sitewide via `SectionLayout`.

## Constraints that keep biting us

- `promt.txt` still forbids fabricated proof; its single-accent color rule is **superseded** by the revamp, but honesty is not.
- Placeholder images are limited (`PLACEHOLDER_IMAGES` length 3) — mosaic tiles should cycle via `getPlaceholderImage`.
- Old unused homepage files (`WhyChooseUs`, etc.) may still fail lint if left with unescaped quotes — clean when touched.
- WhatsApp / NAP still placeholders until Indian number + GBP address confirmed.

## Reference sites (patterns only)

- digitalmojo.in — color energy, not copy
- shootorder.com — hero metaphor, mega-menu, results/framework structure
- brandshark — mosaic + reels proof pattern
