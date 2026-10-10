# Forms → Google Sheets setup

Static site posts to a Google Apps Script web app. No Google API keys needed.

## Env keys (Vercel + `.env.local`)

| Key | Value |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` | Web app URL ending in `/exec` |
| `NEXT_PUBLIC_FORMS_TOK` | Same string as `TOKEN` in Apps Script |

Current sheet ID (already in script): `1rakD_eH7zhVXTZj-EqhYDMZEDFRCeHvzLdSyhzh73wc`

## Steps

1. Open the Sheet → Extensions → Apps Script.
2. Paste `docs/forms/google-apps-script.js` (Sheet ID + TOKEN already set).
3. Save → select function `setupHeaders` → Run (authorize once).
4. Deploy → New deployment → **Web app**  
   - Execute as: **Me**  
   - Who has access: **Anyone**  
   - Deploy → copy the **Web app URL**.
5. Add to `.env.local` (and Vercel env):

```bash
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
NEXT_PUBLIC_FORMS_TOK=digi-carotene-2026
```

6. Restart `bun run dev` (or redeploy on Vercel).
7. Submit each form once; confirm a new row on the matching tab.

## Tabs ↔ forms

| Tab | Site forms |
| --- | --- |
| Growth Audit | Audit modal + `/growth-audit` |
| Enquiry | Enquiry modal |
| Contact | `/contact` + contact popup |

## Notes

- After editing Apps Script, deploy a **new version** (Manage deployments → Edit → New version).
- Tab names must stay exactly: `Growth Audit`, `Enquiry`, `Contact`.
