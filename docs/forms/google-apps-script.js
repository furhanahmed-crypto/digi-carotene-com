/**
 * Digi Carotene — form → Google Sheet
 * Paste into Extensions → Apps Script on the Sheet (or a standalone script).
 *
 * TOKEN must match NEXT_PUBLIC_FORMS_TOK in .env.local / Vercel.
 * Then Deploy → New deployment → Web app
 * (Execute as: Me, Who has access: Anyone).
 */

var SHEET_ID = "1rakD_eH7zhVXTZj-EqhYDMZEDFRCeHvzLdSyhzh73wc"
var TOKEN = "digi-carotene-2026" // same as NEXT_PUBLIC_FORMS_TOK

var TABS = {
  growth_audit: "Growth Audit",
  enquiry: "Enquiry",
  contact: "Contact",
}

var COLUMNS = {
  growth_audit: [
    "submitted_at",
    "full_name",
    "business_name",
    "email",
    "country_code",
    "phone",
    "whatsapp_ok",
    "country",
    "city",
    "industry",
    "industry_other",
    "website_url",
    "instagram",
    "linkedin_url",
    "youtube_url",
    "gbp_url",
    "ads_running",
    "goal",
    "challenge",
    "budget",
    "cta_location",
    "page_url",
    "referrer",
    "device",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ],
  enquiry: [
    "submitted_at",
    "name",
    "email",
    "phone",
    "service",
    "message",
    "source",
  ],
  contact: [
    "submitted_at",
    "name",
    "email",
    "phone",
    "business",
    "website",
    "country",
    "service",
    "budget",
    "message",
    "enquiry_type",
    "industry",
    "cta_location",
    "source",
  ],
}

function doPost(e) {
  var data = JSON.parse(e.postData.contents)
  if (data.token !== TOKEN) return out_({ ok: false, error: "bad token" })

  var form = data.form
  var tab = TABS[form]
  var cols = COLUMNS[form]
  if (!tab || !cols) return out_({ ok: false, error: "bad form" })

  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(tab)
  if (!sheet) return out_({ ok: false, error: "missing tab" })

  var row = cols.map(function (key) {
    var value = data[key]
    return value == null ? "" : value
  })
  sheet.appendRow(row)

  return out_({ ok: true })
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  )
}

/** Run once from the editor to write header rows on each tab. */
function setupHeaders() {
  var book = SpreadsheetApp.openById(SHEET_ID)
  Object.keys(COLUMNS).forEach(function (form) {
    var sheet = book.getSheetByName(TABS[form])
    if (!sheet) sheet = book.insertSheet(TABS[form])
    sheet.clear()
    sheet.appendRow(COLUMNS[form])
  })
}
