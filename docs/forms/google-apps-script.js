/**
 * Digi Carotene — form → Google Sheet
 *
 * IMPORTANT: Create this from the Sheet itself:
 *   Sheet → Extensions → Apps Script  (container-bound)
 * Then Deploy → New deployment → Web app
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * TOKEN must match NEXT_PUBLIC_FORMS_TOK
 */

var SHEET_ID = "1rakD_eH7zhVXTZj-EqhYDMZEDFRCeHvzLdSyhzh73wc"
var TOKEN = "digi-carotene-2026"

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

function book_() {
  var active = SpreadsheetApp.getActiveSpreadsheet()
  if (active) return active
  return SpreadsheetApp.openById(SHEET_ID)
}

function tab_(name) {
  var book = book_()
  var sheet = book.getSheetByName(name)
  if (sheet) return sheet
  return book.insertSheet(name)
}

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents
    if (!raw) return out_({ ok: false, error: "no body" })

    var data = JSON.parse(raw)
    if (data.token !== TOKEN) return out_({ ok: false, error: "bad token" })

    var form = data.form
    var tabName = TABS[form]
    var cols = COLUMNS[form]
    if (!tabName || !cols) return out_({ ok: false, error: "bad form" })

    var sheet = tab_(tabName)
    var row = []
    for (var i = 0; i < cols.length; i++) {
      var value = data[cols[i]]
      row.push(value == null ? "" : value)
    }
    sheet.appendRow(row)

    return out_({ ok: true, tab: tabName })
  } catch (err) {
    return out_({ ok: false, error: String(err) })
  }
}

function doGet() {
  return out_({ ok: true, service: "digi-carotene-forms" })
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  )
}

/** Run once from the editor — writes headers on each tab. */
function setupHeaders() {
  var forms = Object.keys(COLUMNS)
  for (var i = 0; i < forms.length; i++) {
    var form = forms[i]
    var sheet = tab_(TABS[form])
    sheet.clear()
    sheet.appendRow(COLUMNS[form])
  }
}

/** Run from the editor to prove sheet write works. */
function testWrite() {
  var sheet = tab_("Enquiry")
  sheet.appendRow([
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    "Editor Test",
    "test@example.com",
    "000",
    "Test",
    "testWrite ok",
    "editor",
  ])
}
