// build-pdf/build.js
// Combines all rules/*.md into a single A4-sized PDF.
// Run from anywhere:  node build-pdf/build.js
//
// First run installs `marked` locally into build-pdf/node_modules.
// Subsequent runs are fast.
//
// Output: dnd-rules.pdf at the project root, plus rules.html (intermediate).

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// === Self-bootstrap marked ===
let marked;
try {
  marked = require('marked').marked;
} catch (_) {
  console.log('Installing marked (one-time)…');
  execSync('npm install marked@^12 --silent --no-audit --no-fund', {
    cwd: __dirname,
    stdio: 'inherit',
  });
  marked = require('marked').marked;
}

// === Paths ===
const projectRoot = path.resolve(__dirname, '..');
const rulesDir = path.join(projectRoot, 'rules');
const htmlOut = path.join(__dirname, 'rules.html');
const pdfOut = path.join(projectRoot, 'dnd-rules.pdf');

// === Read rule files ===
const files = fs.readdirSync(rulesDir).filter(f => f.endsWith('.md')).sort();
console.log(`Found ${files.length} rule files:`);

const chapterTitles = [];
let combined = '';
for (const f of files) {
  const content = fs.readFileSync(path.join(rulesDir, f), 'utf8');
  const m = content.match(/^#\s+(.+?)\s*$/m);
  const title = m ? m[1].trim() : f.replace(/\.md$/, '');
  chapterTitles.push(title);
  console.log('  •', f, '→', title);
  combined += content + '\n\n';
}

// === Markdown → HTML body ===
marked.setOptions({ gfm: true, breaks: false });
const body = marked.parse(combined);

// === CSS (A4 print) ===
const css = `
@page {
  size: A4;
  margin: 16mm 14mm 18mm 14mm;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 10.5pt;
  line-height: 1.5;
  color: #1a1a1a;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* ---- Title page ---- */
.title-page {
  height: 250mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  page-break-after: always;
}
.title-page .title {
  font-size: 44pt;
  font-weight: 700;
  letter-spacing: 3pt;
  margin: 0;
  text-transform: uppercase;
}
.title-page .subtitle {
  font-size: 14pt;
  color: #555;
  margin-top: 18pt;
  font-style: italic;
  max-width: 130mm;
}
.title-page .meta {
  font-size: 10pt;
  color: #888;
  margin-top: 70pt;
  letter-spacing: 1pt;
  text-transform: uppercase;
}
.title-page .rule {
  width: 60mm;
  border-top: 1pt solid #999;
  margin: 24pt 0;
}

/* ---- TOC ---- */
.toc { page-break-after: always; }
.toc-heading {
  font-size: 24pt;
  font-weight: 700;
  border-bottom: 2pt solid #1a1a1a;
  padding-bottom: 6pt;
  margin-bottom: 18pt;
}
.toc ol {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 12pt;
}
.toc li {
  padding: 8pt 4pt;
  border-bottom: 0.5pt dotted #aaa;
}

/* ---- Chapter headings ---- */
h1 {
  page-break-before: always;
  font-size: 22pt;
  font-weight: 700;
  border-bottom: 2pt solid #1a1a1a;
  padding-bottom: 6pt;
  margin: 0 0 16pt 0;
  letter-spacing: 0.5pt;
}
h2 {
  font-size: 14.5pt;
  margin: 18pt 0 8pt 0;
  font-weight: 700;
  page-break-after: avoid;
  border-bottom: 0.5pt solid #ccc;
  padding-bottom: 3pt;
}
h3 {
  font-size: 12pt;
  margin: 14pt 0 5pt 0;
  font-weight: 700;
  color: #2a2a2a;
  page-break-after: avoid;
}
h4 {
  font-size: 10.5pt;
  margin: 10pt 0 4pt 0;
  font-weight: 700;
  font-style: italic;
  page-break-after: avoid;
}

p {
  margin: 5pt 0;
  orphans: 2;
  widows: 2;
}

ul, ol {
  margin: 5pt 0 9pt 0;
  padding-left: 22pt;
}
li { margin-bottom: 2pt; }
li > p { margin: 2pt 0; }
li > ul, li > ol { margin: 2pt 0 4pt 0; }

table {
  border-collapse: collapse;
  margin: 10pt 0;
  font-size: 9.5pt;
  width: 100%;
  page-break-inside: avoid;
}
th, td {
  border: 0.6pt solid #888;
  padding: 4pt 6pt;
  text-align: left;
  vertical-align: top;
}
th {
  background: #ebebeb;
  font-weight: 700;
}
tr:nth-child(even) td { background: #f7f7f7; }

code {
  font-family: "SF Mono", Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 9pt;
  background: #f0f0f0;
  padding: 0 3pt;
  border-radius: 2pt;
}
pre {
  background: #f4f4f4;
  border: 0.5pt solid #ddd;
  padding: 8pt;
  border-radius: 3pt;
  font-size: 9pt;
  line-height: 1.4;
  page-break-inside: avoid;
  white-space: pre-wrap;
}
pre code {
  background: transparent;
  padding: 0;
  font-size: 9pt;
}

blockquote {
  margin: 10pt 0;
  padding: 5pt 14pt;
  border-left: 3pt solid #888;
  background: #f9f9f9;
  color: #444;
}
blockquote p { margin: 4pt 0; }

strong { font-weight: 700; color: #000; }
em { font-style: italic; }

hr {
  border: none;
  border-top: 0.5pt solid #bbb;
  margin: 14pt 0;
  page-break-after: avoid;
}

/* Links: don't underline (and strip URL printing) for cleaner paper output */
a { color: #1a1a1a; text-decoration: none; }
`;

// === TOC HTML ===
const tocItems = chapterTitles
  .map(t => `<li>${escapeHtml(t)}</li>`)
  .join('\n      ');

// === Assemble ===
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>D&amp;D Rules</title>
<style>${css}</style>
</head>
<body>

<div class="title-page">
  <div class="title">The Rules</div>
  <div class="rule"></div>
  <div class="subtitle">A lean D&amp;D-style tabletop RPG, in sixteen chapters</div>
  <div class="meta">v1 · for personal use</div>
</div>

<div class="toc">
  <div class="toc-heading">Contents</div>
  <ol>
      ${tocItems}
  </ol>
</div>

${body}

</body>
</html>`;

fs.writeFileSync(htmlOut, html);
console.log(`\n✓ Wrote ${htmlOut} (${(html.length / 1024).toFixed(1)} KB)`);

// === Render PDF via headless Chrome ===
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!fs.existsSync(chrome)) {
  console.warn(`\n⚠  Google Chrome not found at ${chrome}.`);
  console.warn('   Open rules.html in your browser and use Print → Save as PDF.');
  process.exit(0);
}

console.log('\nRendering PDF via headless Chrome…');
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--no-update-check',
  '--disable-extensions',
  `--print-to-pdf="${pdfOut}"`,
  `"file://${htmlOut}"`,
];
try {
  execSync(`"${chrome}" ${args.join(' ')}`, { stdio: 'inherit' });
  const size = fs.statSync(pdfOut).size;
  console.log(`\n✓ Wrote ${pdfOut} (${(size / 1024).toFixed(1)} KB)`);
} catch (e) {
  console.error('\nChrome failed to render PDF:', e.message);
  console.error(`Open ${htmlOut} in your browser and use Print → Save as PDF.`);
  process.exit(1);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
