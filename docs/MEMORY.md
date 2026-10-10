# MEMORY — Digi Carotene long-term context

## Core decisions

0. **Static HTML export** — `output: "export"` + `trailingSlash` + `images.unoptimized` in `next.config.ts`. Deploy folder is `out/` (not `.next/`). No `cookies()` / `searchParams` in Server Components (thank-you reads query via client `useSearchParams`). Apache helpers in `public/.htaccess`.
0a. **Forms → Google Sheets** — Client posts to Apps Script web app (`NEXT_PUBLIC_GOOGLE_SCRIPT_URL` + `NEXT_PUBLIC_FORMS_TOK`). Tabs: Growth Audit / Enquiry / Contact. Script + setup: `docs/forms/`.
0b. **Contact popup (CR-07)** — `ContactPopupProvider` + `#contact` hash; reuse from About / industry expert CTAs. Growth audit stays separate (`#growth-audit`). Industry pages use `IndustryOutlinePage` (not shared `OutlinePage`).
1. **Agency, not blog** — Manager rejected the prior “notes/article” feel. Homepage must signal a marketing agency.
2. **Honesty first** — Never invent clients, logos, metrics, awards, or testimonials. Use `[[… — to confirm]]` and track in `PLACEHOLDERS.md`.
3. **White + cream + yellow bands** — Light-mode section backgrounds only. Yellow for CTAs / marks / underlines. Multi-color service cards stay on white bands.
4. **`SectionLayout` is the section shell** — Atmosphere (yellow/cream washes), padding, and tone live in `components/shared/section-layout.tsx`. Do not duplicate washes per section.
5. **SectionMark on every content band** — Yellow mark on white/cream; paper mark on yellow bands so the site never feels mark-less.
6. **Keep four sections** across revamps: Clients marquee, Visual showcase, Case studies, FAQ (layout/structure preserved; theme via `SectionLayout`).
7. **Search ranking is its own cream section** — Google-style SERP below marquee, with a one-direction travelling yellow/blue border.
8. **Preserve Lenis + purposeful motion** — Do not remove smooth scroll without explicit approval.
9. **Sitewide GSAP reveal** — Register plugins only in `lib/gsap.ts`. Sections use `components/motion/reveal.tsx` + `data-reveal` / `data-reveal-group` (no ad-hoc scroll reveals). Anti-flash via `data-motion="on"` + globals CSS. Exceptions: hero load timeline, hero mosaic wave, industry card stack, typewriters.
10. **Docs pack** — Product truth: `docs/*.md` + `PLACEHOLDERS.md`. Content sources in `docs/content/` — **v2 PDF is canonical**. Usage map: `docs/content/CONTENT-USAGE.md`.
11. **Home SEO (v2)** — Exactly one H1 with “Digital Marketing Agency in Hyderabad…”; rotating lines are spans, not H1s. FAQ answers in HTML + FAQPage schema.

## Lessons learned

- Sticky left nav + sticky pillar titles stacked badly on mobile; normalize sticky below `lg`.
- CSS `border` + `clip-path` drops diagonal borders — use layered shells if a slanted edge needs a stroke.
- Lenis felt sluggish on touch until `touchMultiplier` / lerp were tuned per breakpoint.
- Never put `data-lenis-prevent` / `touch-pan-x` alone on horizontal strips (reels, pill nav) — that traps the pointer and blocks vertical page scroll. Use `components/shared/horizontal-scroll.tsx` (`touch-action: pan-x pan-y`, no Lenis prevent).
- Modals: `lenis.stop()` alone does **not** lock native page scroll. Always use `components/shared/modal.tsx` — it locks `html/body` overflow, stops Lenis, and scrolls only the modal body (`overscroll-contain` + `data-lenis-prevent`). Dialog shell must be `flex flex-col overflow-hidden`, never a single `overflow-y-auto` popup that fights the page.
- Root Lenis in `layout` survives navigations, so scroll offset survives too. Keep `stopInertiaOnNavigate: true`, and on pathname change call `lenis.scrollTo(0, { immediate: true, force: true })` in `GsapLenisSync` (skip when `location.hash` is set). The option alone is not enough once scroll has settled. Also keep `html { scroll-behavior: auto }` — native CSS smooth fights App Router resets (Next warns via `data-scroll-behavior`).
- Theme defaults to **light** only; never follow `prefers-color-scheme`. Dark only after an explicit toggle (cookie/localStorage).
- Browser top bar stays wrong unless `theme-color` is set in viewport metadata **and** updated on theme toggle.
- Full rainbow section fills felt inconsistent; white/cream/yellow + multi-color **cards** sells range without chaos.
- Blue full-bleed section bands felt heavy — yellow/cream tested better.
- Rainbow dots/tags in the hero read childish — keep multi-color on service cards only.
- Yellow section + blue mark + white card clashes; use paper marks on yellow bands.
- Dual-direction conic SERP borders feel chaotic — one travelling highlight reads premium.
- Long hero accent lines collide with the mosaic — keep cycling accents short (`You rank first.` length).
- Framework cards need `h-full` + `flex-1` body or heights break in a 4-up grid.
- Plain cream SERP with no atmosphere looked empty — cream tone + yellow bloom + stage frame fixes it sitewide via `SectionLayout`.
- Hero mosaic must use **9 distinct** images (`public/assets/hero/mosaic/`). Cycling 3 placeholders makes the pulse animation feel broken.
- Section line-art: `SectionDecor` + motifs; placements in `section-decors.tsx`. Ink from SectionLayout tone — white `#E6C55C`/70, cream `#D9B040`/65, yellow `#C99A12`/70; dark softer `#E8C96A` ~0.34–0.38. Vary L/R + vertical anchors per section (not always TL+BR). Preview `/decor-preview`.
- Inner pages: never use photo/blur page banners — yellow `PageHeader` (`SectionLayout` + breadcrumbs + paper `SectionMark`). Body bands use white/cream `SectionLayout`. SEO from `lib/seo/page-meta.ts` (see `docs/content/CONTENT-USAGE.md`).
- Line-art on inner pages via `page-decors.tsx` (header + white/cream/services/CTA). Float amp ~1.35× / parallax ~12% so motion reads without feeling floaty.
- Service detail pages compose homepage section patterns (`components/services/*`): sticky overview, multi-color deliverables, framework steps, audience cards, sticky FAQ, related color panels, yellow `ServiceCta`. No old numbered border-list layout.
- Public NAP/socials live in `constants/site/contact.ts`. Office: Dwaraka Pride, HITEC City (maps embed `mapsEmbedSrc`). Voice `+91 99598 20874` vs WhatsApp `93986 82206` — confirm vs GBP.
- Reference media lives under `public/assets/` (`hero/mosaic`, `reels`, `campaigns`, `blog`, `clients`, `scores`). Keep only wired files; compress webp/mp4 before commit. Homepage reels are real client clips (`flavours-of-andhra`, `naturals-attapur`, `cot-and-couch`, `skin-origins`, `sorshe`) with AAC audio tracks + matching `-poster.webp`. Reels are muted by default for browser autoplay, unmutable via a top-right sound button with mutual exclusivity (unmuting one mutes the others).
- Clients Marquee: Uses `SectionLayout tone="white"` with a centered uppercase editorial eyebrow (`Trusted by 300+ ambitious brands...`), seamless borderless logo presentation (no chunky rounded white pill cards), adaptive dark-mode silhouette inversion (`invertOnDark` for monochrome ink marks, full colors preserved for badges like LECOM/Naturals), pause-on-hover, and smooth linear edge fade masks.
- **The Journal** (UI name): JSON under `content/blog/`, routes `/blog` + `/blog/[slug]`, components `components/blog/*`. Never label it “Blog” in UI/nav/footer/schema breadcrumbs — use The Journal / Our Journal. Do not rewrite PDF article copy; keep bracketed confirmations until confirmed.
- Growth scenarios (case studies PDF) live under `content/growth-scenarios/`. Hub + details at `/growth-scenarios` and `/growth-scenarios/[slug]` per PDF; `/case-studies` permanently redirects. No cover images required on cards. Always label as **Benchmark scenario** until real client results replace them. Homepage Results shows `homeFeatured` three.
- Journal/scenario detail pages: yellow `PageHeader` is mark-only (`size="banner"`, no title) so the article H1 is the single page H1.
- Hero mosaic tiles: `public/assets/hero/mosaic/01–10.webp` (Downloads pack). Client logos: `public/assets/clients/01–17.webp` wired via `constants/home/clients.ts` into marquee, `/about/clients`, and industry logo strips.
- Color contract: `--ink` / `--on-yellow` stay `#111` in dark for solid yellow fills only. FAQ/hover washes use `--yellow-tint*` + `text-foreground` (`constants/ui/faq-accordion.ts`). Never `data-panel-open:text-ink` on tinted rows.

## Constraints that keep biting us

- `promt.txt` still forbids fabricated proof; its single-accent color rule is **superseded** by the revamp, but honesty is not.
- Placeholder images are limited (`PLACEHOLDER_IMAGES` length 3) — mosaic tiles should cycle via `getPlaceholderImage`.
- Old unused homepage files (`WhyChooseUs`, etc.) may still fail lint if left with unescaped quotes — clean when touched.
- NAP address set to Dwaraka Pride; still match Google Business Profile before launch.

## Reference sites (patterns only)

- digitalmojo.in — color energy, not copy
- shootorder.com — hero metaphor, mega-menu, results/framework structure
- brandshark — mosaic + reels proof pattern
