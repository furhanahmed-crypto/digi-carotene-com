#!/usr/bin/env python3
"""Extract Digi Carotene blog posts from PDF into content/blog/*.json."""

from __future__ import annotations

import json
import re
from pathlib import Path

import pdfplumber

PDF = Path(
    "/Users/farhan/.cursor/projects/"
    "Users-farhan-my-work-digi-carotene-projects-digi-carotene-digi-carotene-com/"
    "attachments/453554c6-82eb-4c27-bf18-8897b7d2a0a1/"
    "Digi-Carotene-Blog-10-SEO-AEO-Posts.pdf"
)
OUT = Path(__file__).resolve().parents[1] / "content" / "blog"

DATES = {
    9: "2026-10-09",
    7: "2026-10-10",
    1: "2026-10-13",
    2: "2026-10-14",
    3: "2026-10-20",
    4: "2026-10-21",
    5: "2026-10-27",
    6: "2026-10-28",
    8: "2026-11-03",
    10: "2026-11-04",
}

TITLE_TO_SLUG = {
    "Performance Marketing vs Growth Marketing": "performance-marketing-vs-growth-marketing",
    "Meta Ads vs Google Ads": "meta-ads-vs-google-ads",
    "How to Choose a Digital Marketing Agency in Hyderabad": "how-to-choose-digital-marketing-agency-hyderabad",
    "How to Reduce Cost Per Lead on Meta Ads": "reduce-cost-per-lead-meta-ads",
    "WhatsApp Business API for Small Businesses": "whatsapp-business-api-india",
    "How to Get Recommended by ChatGPT and Gemini": "get-recommended-by-chatgpt-gemini-ai-search",
    "Google Business Profile Checklist": "google-business-profile-checklist-hyderabad",
    "NMC Advertising Guidelines 2026": "nmc-advertising-guidelines-2026-doctors-hospitals",
    "Outsource Digital Marketing to India": "outsource-digital-marketing-to-india",
    "How Much Does Digital Marketing Cost in Hyderabad": "digital-marketing-cost-hyderabad",
}

FIELD_KEYS = [
    "URL",
    "Meta title",
    "Meta description",
    "Focus keyword",
    "Secondary keywords",
    "Meta keywords",
    "Search intent",
    "OG title",
    "Featured image alt",
    "Internal links",
    "Schema",
]


def clean_cell(value: str | None) -> str:
    if not value:
        return ""
    text = value.replace("\n", " ")
    text = re.sub(r"\s+", " ", text).strip()
    text = text.replace("₹ ", "₹")
    return text


def join_soft(text: str) -> str:
    text = re.sub(r"Digi Carotene Blog — 10 SEO & AEO Posts\n?", "", text)
    text = re.sub(r"Page \d+ of 45\n?", "", text)
    text = text.replace("₹ ", "₹")
    lines = [ln.rstrip() for ln in text.splitlines()]
    out: list[str] = []
    buf = ""
    for ln in lines:
        s = ln.strip()
        if not s:
            if buf:
                out.append(buf)
                buf = ""
            out.append("")
            continue
        if not buf:
            buf = s
            continue
        # new block markers
        if re.match(
            r"^(H1:|Quick answer:|FAQs|CTA|Related posts:|SEO & AEO panel|Field\b|\d+\.\s)",
            s,
        ) or (
            s.endswith("?")
            and len(s) < 120
            and not buf.endswith(("?", ".", ",", ";", ":"))
            and buf[-1:].isalnum()
        ):
            out.append(buf)
            buf = s
            continue
        if buf.endswith("-"):
            buf = buf[:-1] + s
        else:
            buf = f"{buf} {s}"
    if buf:
        out.append(buf)
    return "\n".join(out)


def slugify(heading: str) -> str:
    s = heading.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:80]


def parse_keywords(raw: str) -> list[str]:
    return [p.strip() for p in raw.split(",") if p.strip()]


def parse_links(raw: str) -> list[str]:
    raw = raw.replace("\n", "")
    raw = re.sub(r"/\s+", "/", raw)
    raw = re.sub(r"-\s+", "-", raw)
    parts = [p.strip() for p in re.split(r"\s*·\s*", raw) if p.strip()]
    links = []
    for p in parts:
        if p.startswith("/"):
            links.append(p)
        elif p.startswith("("):
            continue
        else:
            links.append(p)
    return links


def related_slugs(raw: str) -> list[str]:
    titles = [t.strip() for t in raw.split("·") if t.strip()]
    slugs = []
    for title in titles:
        matched = None
        for key, slug in TITLE_TO_SLUG.items():
            if key.lower() in title.lower() or title.lower() in key.lower():
                matched = slug
                break
        if matched:
            slugs.append(matched)
    return slugs[:3]


def extract_seo_from_tables(tables: list) -> dict[str, str]:
    seo: dict[str, str] = {}
    for table in tables:
        if not table or not table[0]:
            continue
        header = [clean_cell(c).lower() for c in table[0]]
        if header[:2] != ["field", "value"]:
            continue
        for row in table[1:]:
            if not row or len(row) < 2:
                continue
            key = clean_cell(row[0])
            val = clean_cell(row[1])
            if key:
                seo[key] = val
    return seo


def content_tables(tables: list) -> list[dict]:
    result = []
    for table in tables:
        if not table or len(table) < 2:
            continue
        header = [clean_cell(c) for c in table[0]]
        if [h.lower() for h in header[:2]] == ["field", "value"]:
            continue
        # skip empty first header cells that are comparison tables — keep them
        rows = []
        for row in table[1:]:
            cells = [clean_cell(c) for c in row]
            if any(cells):
                rows.append(cells)
        if rows:
            # normalize header empty first cell
            headers = [("" if h is None else h) for h in header]
            result.append({"headers": headers, "rows": rows})
    return result


def split_faqs(block: str) -> list[dict]:
    faqs = []
    # Questions end with ? then answer until next question-like sentence
    parts = re.split(r"(?<=\?)\s+", block.strip())
    # Better: find "Something?" patterns at start of faq items
    text = block.strip()
    # Known FAQ starts often after FAQs header; split by sentence-ending ? followed by Capital
    chunks = re.findall(
        r"([^?]+\?)\s*([^?]*?)(?=(?:[A-Z][^?]{0,120}\?)|$)",
        text,
        flags=re.S,
    )
    if not chunks:
        # fallback line-based
        lines = [ln for ln in text.split("\n") if ln.strip()]
        i = 0
        while i < len(lines):
            q = lines[i].strip()
            if "?" in q:
                q_part, _, rest = q.partition("?")
                question = (q_part + "?").strip()
                answer = rest.strip()
                i += 1
                while i < len(lines) and "?" not in lines[i]:
                    answer = f"{answer} {lines[i].strip()}".strip()
                    i += 1
                faqs.append({"question": question, "answer": answer})
            else:
                i += 1
        return faqs
    for q, a in chunks:
        q = clean_cell(q)
        a = clean_cell(a)
        if q and a:
            faqs.append({"question": q, "answer": a})
    return faqs


def parse_body(body: str, tables: list[dict]) -> list[dict]:
    """Parse body after Quick answer into sections with blocks."""
    body = body.strip()
    # Remove FAQs onward
    body = re.split(r"\nFAQs\n", body, maxsplit=1)[0].strip()

    # Split into sections on H2-like question headings / known headings
    lines = body.split("\n")
    sections: list[dict] = []
    current = {"id": "intro", "heading": "", "blocks": []}
    table_idx = 0
    list_buf: list[str] | None = None
    list_ordered = False

    def flush_list():
        nonlocal list_buf, list_ordered
        if list_buf:
            current["blocks"].append(
                {"type": "list", "ordered": list_ordered, "items": list_buf}
            )
            list_buf = None

    def is_heading(line: str) -> bool:
        if line.startswith(("H1:", "Quick answer:", "CTA", "Related")):
            return False
        if len(line) > 140:
            return False
        if line.endswith("?"):
            return True
        # non-question H2s that appear in posts
        h2s = (
            "Performance marketing vs growth marketing at a glance",
            "Google Ads vs Meta Ads compared",
            "Why Hyderabad?",
            "What the NMC guidelines allow",
            "What the NMC guidelines restrict or ban",
            "A practical compliance checklist for clinics",
            "How clinics can still grow under the rules",
            "What changed in the October 2026 update",
        )
        return any(line.startswith(h) or line == h for h in h2s)

    for line in lines:
        s = line.strip()
        if not s:
            flush_list()
            continue
        if s.startswith("H1:") or s.startswith("Quick answer:"):
            continue
        # detect table placeholder markers by proximity — inject tables when
        # line looks like a table header already in text
        if is_heading(s) and current["blocks"] or (is_heading(s) and current["heading"]):
            flush_list()
            if current["heading"] or current["blocks"]:
                if not current["heading"] and current["blocks"]:
                    # fold intro into upcoming heading
                    pass
                sections.append(current)
            current = {"id": slugify(s), "heading": s, "blocks": []}
            continue
        if is_heading(s) and not current["heading"] and not current["blocks"]:
            current = {"id": slugify(s), "heading": s, "blocks": []}
            continue

        m_num = re.match(r"^(\d+)\.\s+(.*)$", s)
        if m_num:
            if list_buf is None or not list_ordered:
                flush_list()
                list_buf = []
                list_ordered = True
            list_buf.append(m_num.group(2).strip())
            continue

        # bullet-like short lines after "Look for:"
        if list_buf is not None and not list_ordered and len(s) < 200:
            list_buf.append(s)
            continue

        flush_list()

        # If paragraph mentions table-like intro, attach next table
        current["blocks"].append({"type": "paragraph", "text": s})

        # Heuristic: after lines that introduce a comparison/table, attach table
        lower = s.lower()
        if table_idx < len(tables) and any(
            k in lower
            for k in (
                "at a glance",
                "compared",
                "ranges below",
                "typical monthly",
                "what it tells you",
                "approx. meta rate",
                "what good looks like",
                "good to outsource",
                "client location",
                "term\t",
                "optimises for",
            )
        ):
            t = tables[table_idx]
            current["blocks"].append(
                {"type": "table", "headers": t["headers"], "rows": t["rows"]}
            )
            table_idx += 1

    flush_list()
    if current["heading"] or current["blocks"]:
        sections.append(current)

    # Attach any leftover tables to last section
    while table_idx < len(tables):
        if not sections:
            sections.append({"id": "tables", "heading": "", "blocks": []})
        sections[-1]["blocks"].append(
            {
                "type": "table",
                "headers": tables[table_idx]["headers"],
                "rows": tables[table_idx]["rows"],
            }
        )
        table_idx += 1

    # Start list after "Look for:" by converting following short paragraphs
    return finalize_lists(sections)


def finalize_lists(sections: list[dict]) -> list[dict]:
    """Convert paragraphs after 'Look for:' / 'Choose based' cues into lists where obvious."""
    for sec in sections:
        blocks = sec["blocks"]
        new_blocks: list[dict] = []
        i = 0
        while i < len(blocks):
            b = blocks[i]
            if b["type"] == "paragraph" and b["text"].rstrip().endswith(
                ("Look for:", "Choose based on where your growth is leaking:")
            ):
                new_blocks.append(b)
                items = []
                i += 1
                while i < len(blocks) and blocks[i]["type"] == "paragraph":
                    t = blocks[i]["text"]
                    if t.endswith("?") or len(t) > 220:
                        break
                    # stop if next heading-like already handled
                    items.append(t)
                    i += 1
                if items:
                    new_blocks.append(
                        {"type": "list", "ordered": False, "items": items}
                    )
                continue
            new_blocks.append(b)
            i += 1
        sec["blocks"] = new_blocks
        if not sec["heading"] and sec["blocks"]:
            # drop empty heading intro by merging into first real section later
            pass
    # Merge leading intro-without-heading into first headed section
    if (
        len(sections) >= 2
        and not sections[0]["heading"]
        and sections[1]["heading"]
    ):
        sections[1]["blocks"] = sections[0]["blocks"] + sections[1]["blocks"]
        sections = sections[1:]
    return sections


def build_post(num: int, pages_text: str, tables: list) -> dict:
    seo_raw = extract_seo_from_tables(tables)
    # Also parse SEO from text if missing
    text = join_soft(pages_text)

    def seo_get(key: str) -> str:
        for k, v in seo_raw.items():
            if k.lower() == key.lower():
                return v
        # text fallback
        m = re.search(
            rf"{re.escape(key)}\s+(.+?)(?={'|'.join(re.escape(k) for k in FIELD_KEYS if k != key)}|H1:)",
            text,
            flags=re.S,
        )
        return clean_cell(m.group(1)) if m else ""

    url = seo_get("URL")
    slug = url.replace("/blog/", "").strip("/")
    # fix wrapped slugs
    slug = slug.replace(" ", "")

    h1_m = re.search(r"H1:\s*(.+)", text)
    h1 = clean_cell(h1_m.group(1)) if h1_m else ""

    qa_m = re.search(r"Quick answer:\s*(.+?)(?=\n[A-Z]|\nWhy |\nWhat |\nHow |\nWhich |\nWhen |\nIs |\nPerformance |\nGoogle Ads)", text, flags=re.S)
    if not qa_m:
        qa_m = re.search(r"Quick answer:\s*(.+)", text)
    quick = clean_cell(qa_m.group(1)) if qa_m else ""

    # Body from after quick answer to FAQs
    after_qa = text.split("Quick answer:", 1)[-1]
    # strip first paragraph of quick answer
    after_qa = re.sub(r"^.*?(?=\n(?:Why |What |How |Which |When |Is |Performance |Google Ads|Meta |NMC |A practical|Good ))", "", after_qa, count=1, flags=re.S)
    body_part = re.split(r"\nFAQs\n", after_qa, maxsplit=1)[0]

    faqs_part = ""
    if "\nFAQs\n" in after_qa or "\nFAQs" in after_qa:
        faqs_part = re.split(r"\nFAQs\n?", after_qa, maxsplit=1)[1]
        faqs_part = re.split(r"\nCTA\n", faqs_part, maxsplit=1)[0]

    cta_part = ""
    if "\nCTA\n" in text or "\nCTA " in text:
        cta_part = re.split(r"\nCTA\n?", text, maxsplit=1)[1]
        cta_part = re.split(r"\nRelated posts:", cta_part, maxsplit=1)[0]

    related_part = ""
    if "Related posts:" in text:
        related_part = text.split("Related posts:", 1)[1].strip()
        related_part = related_part.split("\n")[0]

    ctables = content_tables(tables)
    sections = parse_body(body_part, ctables)
    faqs = split_faqs(faqs_part)

    cta_body = clean_cell(re.sub(r"\[Get Your Free Growth Audit\].*", "", cta_part))
    cta_body = clean_cell(re.sub(r"\[Book a Call\].*", "", cta_body))
    primary_label = "Get Your Free Growth Audit"
    primary_href = "/contact"
    secondary_label = "Chat on WhatsApp"
    secondary_href = "https://wa.me/919398682206"
    if "[Book a Call]" in cta_part:
        primary_label = "Book a Call"
        secondary_label = "Email Us Your Brief"
        secondary_href = "/contact"

    meta_title = seo_get("Meta title")
    meta_desc = seo_get("Meta description")
    focus = seo_get("Focus keyword")
    secondary = parse_keywords(seo_get("Secondary keywords"))
    meta_kw = parse_keywords(seo_get("Meta keywords"))
    intent = seo_get("Search intent")
    og = seo_get("OG title")
    alt = seo_get("Featured image alt")
    links = parse_links(seo_get("Internal links"))
    schema = [s.strip() for s in seo_get("Schema").split(",") if s.strip()]

    date = DATES[num]
    return {
        "slug": slug,
        "number": num,
        "metaTitle": meta_title,
        "metaDescription": meta_desc,
        "focusKeyword": focus,
        "secondaryKeywords": secondary,
        "metaKeywords": meta_kw,
        "searchIntent": intent,
        "ogTitle": og,
        "featuredImageAlt": alt,
        "internalLinks": links,
        "schema": schema or ["BlogPosting", "FAQPage", "BreadcrumbList"],
        "h1": h1,
        "quickAnswer": quick,
        "datePublished": date,
        "dateModified": date,
        "author": {
            "name": "Sai Narasimhan Palakolanu",
            "role": "[[Author role — to confirm]]",
            "url": "/about/team",
            "linkedIn": "[[LinkedIn URL — to confirm]]",
        },
        "sections": sections,
        "faqs": faqs,
        "cta": {
            "body": cta_body,
            "primaryLabel": primary_label,
            "primaryHref": primary_href,
            "secondaryLabel": secondary_label,
            "secondaryHref": secondary_href,
        },
        "relatedSlugs": related_slugs(related_part),
    }


def page_ranges() -> dict[int, range]:
    """Map blog number to 1-based inclusive page ranges from PDF structure."""
    return {
        1: range(5, 9),
        2: range(9, 13),
        3: range(13, 17),
        4: range(17, 21),
        5: range(21, 25),
        6: range(25, 29),
        7: range(29, 33),
        8: range(33, 37),
        9: range(37, 42),
        10: range(42, 46),
    }


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    ranges = page_ranges()
    posts = []
    with pdfplumber.open(PDF) as pdf:
        for num, pages in ranges.items():
            texts = []
            tables = []
            for pno in pages:
                if pno - 1 >= len(pdf.pages):
                    continue
                page = pdf.pages[pno - 1]
                texts.append(page.extract_text() or "")
                tables.extend(page.extract_tables() or [])
            post = build_post(num, "\n".join(texts), tables)
            path = OUT / f"{post['slug']}.json"
            path.write_text(json.dumps(post, ensure_ascii=False, indent=2) + "\n")
            posts.append(post)
            print(
                f"#{num} {post['slug']}: sections={len(post['sections'])} "
                f"faqs={len(post['faqs'])} related={post['relatedSlugs']}"
            )

    index = []
    for p in sorted(posts, key=lambda x: x["number"]):
        index.append(
            {
                "slug": p["slug"],
                "number": p["number"],
                "title": p["h1"],
                "excerpt": p["quickAnswer"][:180].rstrip() + ("…" if len(p["quickAnswer"]) > 180 else ""),
                "focusKeyword": p["focusKeyword"],
                "datePublished": p["datePublished"],
                "dateModified": p["dateModified"],
                "featuredImageAlt": p["featuredImageAlt"],
                "relatedSlugs": p["relatedSlugs"],
            }
        )
    (OUT / "index.json").write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n")
    print("wrote", len(posts), "posts + index")


if __name__ == "__main__":
    main()
