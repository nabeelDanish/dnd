#!/usr/bin/env python3
"""Build character-sheet.pdf from character-sheet.md.

Lays the sheet out across 4 readable A4 pages (2 columns each), with generous
fill-in space, then renders to PDF via headless Google Chrome (same toolchain
as build-pdf/build.js).

  Page 1 — Core: basics, abilities, vitals, trainings, features, ancestry, level-up tracker
  Page 2 — Combat & gear: attacks, spells, gear
  Page 3 — Who they are + the brief
  Page 4 — Connections + journal

Run:  python3 build_pdf.py
"""
import re
import subprocess
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "character-sheet.md"
HTML_OUT = ROOT / "character-sheet.html"
PDF_OUT = ROOT / "character-sheet.pdf"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

MD_EXT = ["fenced_code", "tables", "sane_lists", "attr_list"]


def md2html(text: str) -> str:
    return markdown.markdown(text, extensions=MD_EXT)


# --- split the markdown into preamble + numbered sections ---
src = SRC.read_text()
chunks = re.split(r"(?m)^## ", src)
preamble = chunks[0]                       # title + intro (+ first ---)
sections = ["## " + c for c in chunks[1:]]  # each "## <roman>. ..."

# --- assemble: title block, then every section in one balanced 2-column flow ---
# Content flows naturally across pages (no forced section-per-page groups); the
# font size is tuned so the whole sheet lands on 4 A4 pages.
body = md2html("\n\n".join(sections))
head = f'<header class="doc-head">{md2html(preamble)}</header>'
content = f'{head}<div class="cols">{body}</div>'

CSS = """
@page { size: A4; margin: 11mm 11mm 12mm 11mm; }

:root {
  --ink: #2b2620;
  --muted: #6b6256;
  --accent: #7a2e2e;
  --rule: #cdbfa6;
  --paper: #fffdf8;
  --panel: #f6f0e3;
}

* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body {
  font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
  color: var(--ink); background: var(--paper);
  font-size: 9.5pt; line-height: 1.3; margin: 0;
}

/* One continuous 2-column flow; pages break naturally as columns fill. */
.cols { column-count: 2; column-gap: 8mm; column-fill: auto; }

/* Title block (page 1 only) */
.doc-head { text-align: center; margin-bottom: 4pt; }
.doc-head h1 {
  font-size: 26pt; color: var(--accent); margin: 0; letter-spacing: 1px;
  font-variant: small-caps; border: none;
}
.doc-head p { color: var(--muted); font-style: italic; font-size: 9.5pt;
  margin: 3pt auto; max-width: 150mm; line-height: 1.3; }
.doc-head hr { border: none; border-top: 1.5px solid var(--rule); margin: 6pt 0 0 0; }

/* Section headers */
h2 {
  font-size: 12pt; color: var(--accent);
  border-bottom: 1.5px solid var(--rule); padding-bottom: 2pt;
  margin: 7pt 0 3pt 0; font-variant: small-caps; letter-spacing: .4px;
  break-after: avoid; break-inside: avoid;
}
.cols h2:first-child { margin-top: 0; }

h3 {
  font-size: 9.5pt; color: var(--ink); margin: 5pt 0 2pt 0;
  break-after: avoid; break-inside: avoid;
}
h3::before { content: "❯ "; color: var(--accent); }

p { margin: 2pt 0; }
strong { color: var(--accent); }
em { color: var(--muted); }

/* Instructional blockquotes — quiet helper text */
blockquote {
  margin: 2pt 0; padding: 1pt 7pt; border-left: 2px solid var(--rule);
  color: var(--muted); font-style: italic; font-size: 7.6pt; line-height: 1.25;
  break-inside: avoid;
}
blockquote p { margin: 0; }

/* Fill-in / write-on blocks — roomy lines for handwriting */
pre {
  background: var(--panel); border: 1px solid var(--rule); border-radius: 3px;
  padding: 4pt 7pt; margin: 2pt 0 4pt 0; overflow: visible; break-inside: avoid;
}
pre code {
  font-family: "SF Mono", "DejaVu Sans Mono", Menlo, Consolas, monospace;
  font-size: 8.4pt; line-height: 1.75; white-space: pre-wrap; color: var(--ink);
}

/* Inline code (e.g. +3 / +2) */
:not(pre) > code {
  background: var(--panel); border: 1px solid var(--rule); border-radius: 2px;
  padding: 0 3px; font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 9pt;
}

/* Tables (attacks, spells, journal, level-up) — give writable height */
table { border-collapse: collapse; width: 100%; margin: 2pt 0 4pt 0;
  font-size: 8.2pt; break-inside: avoid; }
th, td { border: 1px solid var(--rule); padding: 3pt 5pt; text-align: left;
  vertical-align: top; }
th { background: var(--panel); color: var(--accent); font-weight: 700; }
td { height: 13pt; }

hr { border: none; border-top: 1px solid var(--rule); margin: 6pt 0; }

/* Footer note at the very end */
.cols > p:last-of-type {
  text-align: center; font-style: italic;
  color: var(--muted); font-size: 8pt; margin-top: 6pt;
}
"""

doc = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Character Sheet</title>
<style>{CSS}</style>
</head>
<body>
{content}
</body>
</html>
"""

HTML_OUT.write_text(doc)
print(f"✓ wrote {HTML_OUT}")

# --- render PDF via headless Chrome ---
if Path(CHROME).exists():
    args = [
        CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
        "--no-update-check", "--disable-extensions",
        f"--print-to-pdf={PDF_OUT}", f"file://{HTML_OUT}",
    ]
    try:
        subprocess.run(args, check=True, capture_output=True)
        kb = PDF_OUT.stat().st_size / 1024
        print(f"✓ wrote {PDF_OUT} ({kb:.1f} KB)")
    except subprocess.CalledProcessError as e:
        print("Chrome failed:", e.stderr.decode()[:300])
        print(f"Open {HTML_OUT} and Print → Save as PDF.")
else:
    print(f"Chrome not found at {CHROME}. Open {HTML_OUT} and Print → Save as PDF.")
