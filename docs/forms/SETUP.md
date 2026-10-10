# Forms → Google Sheets setup

## Env keys

| Key | Value |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` | Web app URL ending in `/exec` |
| `NEXT_PUBLIC_FORMS_TOK` | Same as `TOKEN` in Apps Script (`digi-carotene-2026`) |

## Fix “thank you but sheet empty”

The site always shows thank-you after submit. If the sheet stays empty, the **web app deploy** or **sheet access** failed.

### Do this again carefully

1. Open **this** spreadsheet (not a blank script project):  
   https://docs.google.com/spreadsheets/d/1rakD_eH7zhVXTZj-EqhYDMZEDFRCeHvzLdSyhzh73wc/edit  
2. **Extensions → Apps Script** (must open from the Sheet).
3. Replace all code with `docs/forms/google-apps-script.js` → Save.
4. Run **`testWrite`** from the dropdown → authorize if asked.  
   Check the **Enquiry** tab — you should see a row “Editor Test”.  
   If that fails, stop and fix authorization first.
5. Run **`setupHeaders`** once.
6. **Deploy → Manage deployments → Edit (pencil) → New version → Deploy**  
   (or New deployment if first time)  
   - Type: **Web app**  
   - Execute as: **Me**  
   - Who has access: **Anyone**  
7. Copy the new `/exec` URL into `.env.local` + Vercel as `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.
8. Restart `bun run dev` / redeploy Vercel.
9. Submit a form again.

### Quick health check

Open the `/exec` URL in a browser. You should see:

```json
{"ok":true,"service":"digi-carotene-forms"}
```

If you see Google’s “Page not found / unable to open the file”, the deployment is wrong — redeploy from the Sheet-bound script.

## Tabs

| Tab | Forms |
| --- | --- |
| Growth Audit | Audit modal + `/growth-audit` |
| Enquiry | Enquiry modal |
| Contact | `/contact` + contact popup |
