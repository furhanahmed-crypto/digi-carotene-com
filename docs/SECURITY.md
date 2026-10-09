# SECURITY — Digi Carotene

## Context

Public marketing site. No user accounts in current scope.

## Threats

- XSS via forms / unsanitized HTML
- Open redirects from unvalidated URLs
- Secret leakage in git
- Supply-chain dependency risk
- Business trust damage from fabricated social proof (policy constraint)

## Agent must never

1. Commit `.env`, API keys, tokens, private keys, or credentials
2. Hardcode third-party secrets in source
3. Introduce auth bypasses or insecure “dev backdoors”
4. Fetch/store competitor proprietary assets without clearance
5. Weaken security headers if/when added

## Required practices

1. External links with `target="_blank"` use `rel="noopener noreferrer"`
2. Validate/sanitize any future server form handlers
3. Prefer Next metadata APIs over raw string HTML injection
4. Keep WhatsApp / contact URLs in constants — review before shipping production numbers
5. Follow honesty rules in `docs/RULES.md` (fake reviews are a trust vulnerability)

## Secrets

Marketing homepage needs none today. Future integrations must use environment variables and document required keys — never paste secrets into docs or commits.

Public (non-secret) env for live reviews: `NEXT_PUBLIC_FEATURABLE_WIDGET_ID` — Featurable widget ID only; never put Google Places API keys in `NEXT_PUBLIC_*`. Documented in `.env.example`.
