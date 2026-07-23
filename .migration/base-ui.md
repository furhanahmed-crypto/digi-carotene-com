# base-ui migration

Migrated from `radix-nova` → `base-nova` per [shadcn Base UI default changelog](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default).

## Changed

- `components.json` style: `base-nova`
- Reinstalled with overwrite: `button`, `navigation-menu`
- Added dependency: `@base-ui/react`
- Usage updates:
  - `asChild` → `render={<Link ... />}`
  - `Button` + `Link`: set `nativeButton={false}`

## Verify by hand

- [ ] Header Contact Us (desktop scrolled + mobile) — no console warning
- [ ] About / Services / Resources dropdowns open under trigger
- [ ] Mode toggle still works
- [ ] Links navigate correctly
