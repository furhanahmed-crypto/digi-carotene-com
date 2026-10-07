# AGENTS.md — AI coding agent entrypoint

Read this before modifying the codebase.

## Required reading order

1. `docs/PRD.md` — what/why
2. `docs/DESIGN.md` — visual rules (white/yellow light bands, blue accents)
3. `docs/RULES.md` — hard constraints
4. `docs/ARCHITECTURE.md` — structure
5. `docs/MEMORY.md` — past decisions / pitfalls
6. `docs/TASKS.md` — current checklist
7. `docs/SECURITY.md` — security boundaries
8. `PLACEHOLDERS.md` — unconfirmed proof gaps

Also: Next docs in `node_modules/next/dist/docs/` when touching App Router APIs.

## Scope of changes

**May change:** homepage sections, chrome, tokens, constants/types, docs, floating CTAs.

**Must not:** invent proof content; add auth/admin; remove Lenis without approval; use light-mode blue/black/purple/green full section backgrounds.

## Commands

```bash
bun run dev
bun run lint
bun run typecheck
bun run build
```

## Verification before finishing a batch

1. Homepage light mode: section backgrounds are only white/yellow
2. Blue used for CTAs / heading accents
3. Service panels: multi-color cards on a white band
4. Dark mode readable and professional
5. Floating CTAs: round icons that expand on hover
6. Mega-menu still works
7. `bun run typecheck`
8. Update `docs/TASKS.md` checkboxes

## Working style

- Smallest change that solves the task
- Modular section folders
- Prefer Server Components
- Update MEMORY.md when a lasting decision/lesson appears
