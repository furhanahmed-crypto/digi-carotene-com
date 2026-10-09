# PLACEHOLDERS — Unconfirmed proof gaps

Canonical: `docs/content/Digi_Carotene_Website_Content_v2.pdf` (+ `.txt` extract)  
Archive: `docs/content/Digi_Carotene_Website_Content.pdf` (v1)  
What used what: `docs/content/CONTENT-USAGE.md`
Do not invent values. Replace when confirmed.

## NAP / contact (from digicarotene.com — confirm vs Google Business Profile)

Source of truth in code: `constants/site/contact.ts`

- Email: `info@digicarotene.com`
- Phone: `+91 99598 20874`
- WhatsApp: `+91 93986 82206` (`wa.me/919398682206`) — **different from voice line on old site; confirm both still correct**
- Address: Dwaraka Pride - Plot No. 4/1, Survey No. 64, Huda Techno Enclave, HITEC City, Madhapur, Hyderabad, Telangana 500081 (maps embed in `siteContact.mapsEmbedSrc`)
- Hours shown: Mon–Sat 10am–7pm — **confirm against GBP**
- Socials: Instagram / Facebook / LinkedIn `@digicarotene` company pages
- Bangalore office — only if a real office exists

## About / proof counts

- `[[Campaigns / activations / websites count — to confirm]]`
- Countries list for remote clients — to confirm
- Public UI no longer shows `[[…]]` bracket markup; 7+ / 300+ render as plain text

## Results cards (home)

- Industry, city, metric, time frame — to confirm (PDF forbids invented numbers)

## Creative reels

- Stock Mixkit shells live in `public/assets/reels/` (layout reference only)
- Real client reel files / posters / handles — to confirm

## Case studies / growth scenarios

Source: `docs/content/Digi-Carotene-Case-Studies-SEO-AEO-v2.pdf` → `content/growth-scenarios/`

- Current pages are **benchmark scenarios** (modelled), not named Digi Carotene client results
- Internal real-results slots in PDF (Skin Origins, Toni & Guy, Cot & Couch, etc.) — do not publish until confirmed
- Cover images at `/growth-scenarios/[slug]/cover.webp` — to confirm
- Swap modelled numbers for approved client metrics before presenting as client proof

## Client logos

- Real client marks live in `public/assets/clients/` (17 logos: Naturals, Toni & Guy, Bikanervala, CotAndCouch, etc.)
- Confirm written permission / usage rights for public site if not already cleared

## Testimonials

- Live Google reviews via Featurable + `react-google-reviews` on `/about/clients` and `/digital-marketing-agency-hyderabad`
- Set `NEXT_PUBLIC_FEATURABLE_WIDGET_ID` (see `.env.example`) — connect GBP Place ID `ChIJ8f2i9ySVyzsRoslWhqhFFz4`
- Without the env var, the section shows a Google link fallback (no invented quotes)

## The Journal

Source: `docs/content/Digi-Carotene-Blog-10-SEO-AEO-Posts.pdf` → `content/blog/*.json` (routes stay `/blog`)

- Author role + LinkedIn for Sai Narasimhan Palakolanu — to confirm
- Featured covers live at `/assets/blog/[slug]/cover.webp` (royalty-free Unsplash stand-ins; swap for licensed Images Bazaar / owned shoots when ready)
- Bracketed confirmations inside posts (e.g. Blog 1 starting prices, Blog 10 USD retainer / country list) — confirm before launch
- Re-check WhatsApp rates (Blog 7) and NMC rules (Blog 9) on publish date

## Team / founders

- Leadership names, titles, photos, LinkedIn — to confirm
- Founder first-client story details — to confirm
- Careers email — to confirm

## City pages

- Hyderabad NAP wired from `siteContact` — still match GBP
- Bangalore staffed office — publish address only if real

## Production

- Insta shoot edit turnaround days — to confirm

## v2 pages (shells)

- `/services` — group summaries, quiz logic, package inclusions and "from ₹ X/month" prices — to confirm
- `/global` — markets with real clients, time-zone overlap/meeting windows, payment + security details, global case stories, FAQ answers — to confirm
- `/industries` + `/industries/*` — one-line proof per industry, one-line industry problem, permissioned sector logos, mini case studies, FAQ answers — to confirm
- `/services/digital-marketing/whatsapp-marketing` and `/orm` — all section copy, FAQ answers — to confirm
