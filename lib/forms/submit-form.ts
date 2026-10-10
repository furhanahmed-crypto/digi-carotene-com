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

function buildBody(payload: SubmitPayload): string {
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

  return JSON.stringify(body)
}

/**
 * POST form data to the Google Apps Script web app.
 * Returns false only when the script URL is missing from the build.
 */
export async function submitFormToSheet(
  payload: SubmitPayload
): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
  if (!url) {
    console.error(
      "[forms] NEXT_PUBLIC_GOOGLE_SCRIPT_URL is missing — rebuild after setting env"
    )
    return false
  }

  const body = buildBody(payload)

  try {
    // text/plain avoids CORS preflight. Apps Script runs doPost on this request.
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body,
      redirect: "follow",
      keepalive: true,
    })
    return true
  } catch {
    // Redirect to script.googleusercontent.com can throw in some browsers
    // after doPost already succeeded — still treat as sent.
    return true
  }
}
