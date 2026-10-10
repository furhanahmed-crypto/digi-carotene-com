export type FormKind = "growth_audit" | "enquiry" | "contact"

type SubmitPayload = {
  form: FormKind
  [key: string]: string | number | boolean | string[] | undefined
}

function flatten(value: SubmitPayload[string]): string {
  if (value === undefined) return ""
  if (Array.isArray(value)) return value.join(", ")
  return String(value)
}

/** POST form data to the Google Apps Script web app. Safe no-op if env is missing. */
export async function submitFormToSheet(
  payload: SubmitPayload
): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
  if (!url) return false

  const body: Record<string, string> = {
    form: payload.form,
    token: process.env.NEXT_PUBLIC_FORMS_TOK ?? "",
    submitted_at: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
  }

  for (const key of Object.keys(payload)) {
    if (key === "form") continue
    body[key] = flatten(payload[key])
  }

  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body),
    })
    return true
  } catch {
    return false
  }
}
