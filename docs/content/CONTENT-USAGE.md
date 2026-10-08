# Content usage — v1 vs v2

**Sources**

| Version | File | Role |
| --- | --- | --- |
| v1 | `Digi_Carotene_Website_Content.pdf` | Original site copy (archive) |
| v2 | `Digi_Carotene_Website_Content_v2.pdf` | Canonical SEO rewrite (Oct 8, 2026) |
| v2 text | `Digi_Carotene_Website_Content_v2.txt` | Searchable extract for agents |

---

## v1 — what the project used

### Home (`/`)

| Section | v1 content used |
| --- | --- |
| Hero | Eyebrow “Found. Chosen. Measured.”, H1, body, CTAs |
| Clients marquee | Placeholder client slots |
| Search ranking | “Customers stopped scrolling…” + SERP |
| Differentiators | “What makes Digi Carotene different” (4 cards) |
| Service panels | Grouped services (not 10 equal cards) |
| Who we work with | Six vertical bullets |
| Framework | Diagnose → Plan → Launch → Measure |
| Visual showcase / Reels | Creative proof shells |
| Results | Placeholder case cards |
| Work carousel | Case-study placeholders |
| FAQ | Original 6 Hyderabad FAQs |
| Closing CTA | “Find out how visible…” |

### Inner pages (v1 copy / structure)

| Route | Notes |
| --- | --- |
| `/about` | Thin about (later expanded for depth) |
| `/about/team` | Team departments |
| `/about/founders-story` | Founder narrative |
| `/about/clients` | Clients by industry |
| `/services/digital-marketing` + 10 sub-pages | Performance → Insta Shoot |
| `/services/offline-marketing` + 9 sub-pages | Mall → Metro |
| `/services/pr` | PR overview |
| `/digital-marketing-agency-hyderabad` | Location page |
| `/digital-marketing-agency-bangalore` | Location page |
| `/case-studies` | Honest placeholders |
| `/blog` | Journal list |
| `/contact` | Contact form + NAP placeholders |

---

## v2 — what changed

### Home (`/`) — rewritten / reordered

| Change | Detail |
| --- | --- |
| Hero | **One H1** with “Digital Marketing Agency in Hyderabad…”; rotating lines are spans; performance/growth eyebrow + body |
| Meta | Title/description → Hyderabad SEO keywords |
| Problem | **New** — “Spending on Ads but Not Seeing Growth?” |
| Services | **10 equal digital cards** + Offline/PR secondary; explore → `/services` |
| Growth engine | **New** — Attract → Convert → Retain → Scale (replaces SERP as primary story) |
| Hyderabad + global | **New** block + links to Hyderabad / Global |
| Industries | Renamed/rewired “Who we work with” → industry pages |
| Process | Diagnose → **Launch → Scale → Compound** |
| Why us | Rewritten four reasons |
| FAQ | New questions; answers in HTML + FAQPage schema |
| CTA | “Where Is Your Growth Leaking?” |
| Removed from home flow | Search-ranking as main band; Work carousel (case strip) |

Still on home for design proof: Clients marquee, Visual showcase, Creative reels, Results (placeholders).

### Site-wide / chrome

| Change | Detail |
| --- | --- |
| Nav | **Industries**, **Locations** added; Clients → “Clients & Global Presence”; Journal + Free GEO scan |
| Footer | One NAP block + location/industry/service links |
| WhatsApp / NAP | From digicarotene.com via `constants/site/contact.ts` |

### New pages (v2)

| Route | Purpose |
| --- | --- |
| `/services` | Services hub |
| `/global` | International / offshore positioning |
| `/industries` | Industries hub |
| `/industries/healthcare` | Industry page |
| `/industries/restaurants` | Industry page |
| `/industries/salons` | Industry page |
| `/industries/education` | Industry page |
| `/industries/real-estate-furniture` | Industry page |
| `/industries/d2c-retail` | Industry page |
| `/industries/b2b-technology` | Industry page |
| `/services/digital-marketing/whatsapp-marketing` | WhatsApp Business API |
| `/services/digital-marketing/orm` | Online reputation management |

### Pages kept, meta/copy updated toward v2

`/about`, `/about/clients`, `/contact`, `/digital-marketing-agency-hyderabad`, digital/offline/PR service pages (shells + `lib/seo/page-meta.ts`). Full long-form rewrite of every service H2 set is still incremental — unknowns stay `[[… — to confirm]]`.

### Not removed

No public routes deleted. Home section **order** changed; Work carousel no longer on home (case studies remain at `/case-studies`).

---

## Still blocked on real data

WhatsApp number · full address · hours · permissioned logos · case numbers · prices · country list — see root `PLACEHOLDERS.md`.
