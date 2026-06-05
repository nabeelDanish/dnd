// build-pdf/build-refs.js
// Generates A4 LANDSCAPE quick-reference PDFs into quick-ref/:
//   • weapons-quickref.pdf   (hand-built, 1 page)
//   • armor-quickref.pdf     (hand-built, 1 page)
//   • classes-quickref.pdf   (rendered from rules/19-classes.md — multi-page)
//   • spells-quickref.pdf    (rendered from rules/10-spell-list.md — multi-page)
// Renders via headless Google Chrome, same as build.js.
// Run:  node build-pdf/build-refs.js
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- bootstrap marked (for the markdown-rendered sheets) ---
let marked;
try {
  marked = require('marked').marked;
} catch (_) {
  console.log('Installing marked (one-time)…');
  execSync('npm install marked@^12 --silent --no-audit --no-fund', { cwd: __dirname, stdio: 'inherit' });
  marked = require('marked').marked;
}
marked.setOptions({ gfm: true, breaks: false });

const projectRoot = path.resolve(__dirname, '..');
const rulesDir = path.join(projectRoot, 'rules');
const outDir = path.join(projectRoot, 'quick-ref');
fs.mkdirSync(outDir, { recursive: true });
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// ============ CSS for the hand-built card sheets (weapons / armor) ============
const cardCss = `
@page { size: A4 landscape; margin: 7mm; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: "Helvetica Neue", Arial, sans-serif; font-size: 8.4pt; line-height: 1.28; color: #1a1a1a; }
.head { display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2pt solid #1a1a1a; padding-bottom: 3pt; margin-bottom: 5pt; }
.head h1 { font-size: 17pt; margin: 0; letter-spacing: 1.5pt; text-transform: uppercase; }
.head .sub { font-size: 8pt; color: #666; font-style: italic; }
.cols { column-count: 2; column-gap: 6mm; }
.card { break-inside: avoid; margin: 0 0 5pt 0; padding: 4pt 6pt; border: 0.6pt solid #bbb; border-radius: 3pt; background: #fafafa; }
.card h2 { font-size: 8.6pt; margin: 0 0 3pt 0; text-transform: uppercase; letter-spacing: 0.6pt; color: #7a2e2e; border-bottom: 0.5pt solid #ddd; padding-bottom: 2pt; }
table { border-collapse: collapse; width: 100%; font-size: 7.9pt; margin: 1pt 0; }
th, td { border: 0.5pt solid #aaa; padding: 1.6pt 4pt; text-align: left; vertical-align: top; }
th { background: #ececec; font-weight: 700; }
tr:nth-child(even) td { background: #f3f3f3; }
.formula { font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 8pt; background: #efe9df; padding: 2pt 5pt; border-radius: 2pt; display: block; margin: 2pt 0; }
ul { margin: 2pt 0; padding-left: 13pt; }
li { margin: 0.5pt 0; }
strong { color: #000; }
.tag { font-family: "SF Mono", Menlo, monospace; font-size: 7.6pt; background: #e7e7e7; padding: 0 3pt; border-radius: 2pt; }
.note { font-size: 7.4pt; color: #555; font-style: italic; margin-top: 2pt; }
`;

// ============ CSS for the markdown-rendered sheets (classes / spells) ============
const docCss = `
@page { size: A4 landscape; margin: 8mm; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: "Helvetica Neue", Arial, sans-serif; font-size: 7.8pt; line-height: 1.3; color: #1a1a1a; margin: 0; column-count: 2; column-gap: 7mm; }
h1 { column-span: all; font-size: 15pt; margin: 0 0 4pt 0; padding-bottom: 3pt; border-bottom: 2pt solid #1a1a1a; letter-spacing: .5pt; }
h2 { font-size: 10pt; color: #7a2e2e; margin: 7pt 0 2pt 0; border-bottom: .5pt solid #ddd; padding-bottom: 1pt; break-after: avoid; break-inside: avoid; }
h3 { font-size: 8.4pt; color: #2a2a2a; margin: 5pt 0 1pt 0; break-after: avoid; }
p { margin: 2pt 0; }
table { border-collapse: collapse; width: 100%; font-size: 7pt; margin: 2pt 0 4pt 0; break-inside: avoid; }
th, td { border: .4pt solid #bbb; padding: 1.4pt 3pt; text-align: left; vertical-align: top; }
th { background: #ececec; font-weight: 700; color: #7a2e2e; }
ul { margin: 2pt 0; padding-left: 12pt; }
li { margin: 0.4pt 0; }
code { font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 7pt; background: #eee; padding: 0 2pt; border-radius: 2pt; }
strong { color: #000; }
em { color: #555; }
blockquote { margin: 2pt 0; padding: 1pt 6pt; border-left: 2pt solid #ccc; color: #555; font-size: 7pt; }
blockquote p { margin: 0; }
hr { border: none; border-top: .5pt solid #ccc; margin: 5pt 0; }
a { color: #1a1a1a; text-decoration: none; }
`;

function cardPage(title, sub, body) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${title}</title><style>${cardCss}</style></head><body>
<div class="head"><h1>${title}</h1><div class="sub">${sub}</div></div>
<div class="cols">${body}</div></body></html>`;
}

function docPage(srcFile) {
  const md = fs.readFileSync(path.join(rulesDir, srcFile), 'utf8');
  const body = marked.parse(md);
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><style>${docCss}</style></head><body>${body}</body></html>`;
}

// ===================== WEAPONS (hand-built, updated) =====================
const weaponsBody = `
<div class="card">
  <h2>The roll</h2>
  <span class="formula">Attack = d20 + primary + training (if trained)  vs. ARMOR</span>
  <span class="formula">Damage = weapon die + material + primary</span>
  <ul>
    <li><strong>Your one primary ability powers every attack</strong> — weapon and spell. Training → the hit; material → the damage.</li>
    <li><strong>Crit (nat 20):</strong> double the dice; flat mods once. <strong>Fumble (nat 1):</strong> miss + a complication.</li>
  </ul>
</div>

<div class="card">
  <h2>Weapon classes</h2>
  <table>
    <tr><th>Class</th><th>Die</th><th>Hands</th><th>Range</th><th>Notes</th></tr>
    <tr><td>Light</td><td>1d6 (1d4 dagger)</td><td>one</td><td>Close</td><td>throwable, concealable; dual-wield steps die up</td></tr>
    <tr><td>Medium</td><td>1d8</td><td>one</td><td>Close</td><td>shield-compatible</td></tr>
    <tr><td>Heavy</td><td>1d10</td><td><strong>two</strong></td><td>Close</td><td>no shield; <strong>Set to Strike</strong> (plant)</td></tr>
    <tr><td>Ranged</td><td>1d4–1d10</td><td>1–2</td><td>Near/Far</td><td><strong>not usable in heavy armor</strong></td></tr>
  </table>
</div>

<div class="card">
  <h2>Weight rules</h2>
  <ul>
    <li><strong>Set to Strike:</strong> on a turn you <em>move and attack</em>, a <strong>heavy weapon</strong> or <strong>heavy armor</strong> → that attack is at <strong>disadvantage</strong>; <strong>both</strong> → move <em>or</em> attack, not both. Stand still = strike normally.</li>
    <li><strong>No ranged weapons in heavy armor.</strong></li>
    <li><strong>Dual-wield (two light):</strong> die steps up one — 1d4→1d6, 1d6→1d8. Both hands (no shield), still one attack. = medium damage, mobile + throwable.</li>
  </ul>
</div>

<div class="card">
  <h2>Ranged (uses your primary)</h2>
  <table>
    <tr><th>Weapon</th><th>Die</th><th>Range</th><th>Notes</th></tr>
    <tr><td>Shortbow</td><td>1d6</td><td>Near</td><td></td></tr>
    <tr><td>Longbow</td><td>1d8</td><td>Far</td><td></td></tr>
    <tr><td>Light crossbow</td><td>1d6</td><td>Far</td><td>reload uses move</td></tr>
    <tr><td>Heavy crossbow</td><td>1d10</td><td>Far</td><td>two-handed, reload</td></tr>
    <tr><td>Hand crossbow</td><td>1d4</td><td>Near</td><td>one-handed</td></tr>
    <tr><td>Sling</td><td>1d4</td><td>Near</td><td></td></tr>
    <tr><td>Thrown (dagger/axe/spear)</td><td>1d6/1d6/1d8</td><td>Near</td><td></td></tr>
  </table>
  <div class="note">Beyond range: disadvantage; double range: can't. Ammo not tracked.</div>
</div>

<div class="card">
  <h2>Material ladder — metal / stone <span style="font-weight:400;text-transform:none;">(adds to DAMAGE)</span></h2>
  <table>
    <tr><th>Gr</th><th>Material</th><th>Tier</th><th>+Dmg</th><th>Price*</th></tr>
    <tr><td>1</td><td>Iron</td><td>Apprentice 1–3</td><td>+0</td><td>10g</td></tr>
    <tr><td>2</td><td>Steel</td><td>Apprentice 1–3</td><td>+1</td><td>30g</td></tr>
    <tr><td>3</td><td>Dwarven</td><td>Veteran 4–7</td><td>+2</td><td>150g</td></tr>
    <tr><td>4</td><td>Orcish</td><td>Veteran 4–7</td><td>+3</td><td>400g</td></tr>
    <tr><td>5</td><td>Ebony</td><td>Master 8–10</td><td>+4</td><td>1,200g</td></tr>
    <tr><td>6</td><td>Daedric</td><td>Master 8–10</td><td>+5</td><td>3,500g</td></tr>
  </table>
  <div class="note">*Two-handed ≈ 1.5× · daggers/slings ≈ ½. Same ladder governs HEAVY ARMOR.</div>
</div>

<div class="card">
  <h2>Remember</h2>
  <ul>
    <li><strong>Material → damage only</strong>, never the attack roll (keeps accuracy bounded at d20+9).</li>
    <li>Material is <strong>mundane masterwork, not magic</strong>; the material <em>is</em> the quality tier.</li>
    <li>Light = flexible sidearm / dual-skirmisher · Medium = shield + solid damage · Heavy = max damage, planted.</li>
  </ul>
</div>

<div class="card">
  <h2>Worked examples</h2>
  <ul>
    <li>Knight, Might +5, <strong>Steel</strong> greatsword (heavy): atk <span class="tag">+8</span> → 1d10 +1 +5 (planted).</li>
    <li>Duelist dual-wielding <strong>shortswords</strong>: 1d6 <strong>→1d8</strong> +1 +primary, mobile, no shield.</li>
    <li>Ranger, Agi +5, <strong>Steel</strong> longbow: 1d8 +1 +5 — free to move &amp; shoot (light armor).</li>
  </ul>
</div>
`;

// ===================== ARMOR (hand-built, updated) =====================
const armorBody = `
<div class="card">
  <h2>The two categories</h2>
  <table>
    <tr><th>Category</th><th>Material</th><th>Armor formula</th><th>Cast?</th></tr>
    <tr><td><strong>Light</strong></td><td>leather / hide</td><td>10 + Agility + material</td><td>✅ all casting</td></tr>
    <tr><td><strong>Heavy</strong></td><td>metal / stone</td><td>10 + Might + material</td><td>❌ blocks casting</td></tr>
  </table>
  <ul>
    <li><strong>No armor:</strong> 10 + Agility (+ shield) — the naked glass-cannon classes (buy an extra pick).</li>
    <li><strong>Untrained armor:</strong> disadvantage on Agility &amp; Might rolls <em>and</em> no casting.</li>
  </ul>
</div>

<div class="card">
  <h2>⚠ Heavy armor restrictions</h2>
  <ul>
    <li><strong>No ranged weapons</strong> while worn — it's the melee line.</li>
    <li><strong>Set to Strike:</strong> move + attack the same turn → attack at <strong>disadvantage</strong> (with a heavy weapon too → move <em>or</em> attack).</li>
    <li>Blocks all spellcasting. → Heavy = the planted melee anchor; light/none = mobile.</li>
  </ul>
</div>

<div class="card">
  <h2>Light — leather / hide <span style="font-weight:400;text-transform:none;">(Agility)</span></h2>
  <table>
    <tr><th>Gr</th><th>Material</th><th>Tier</th><th>+Armor</th><th>Price</th></tr>
    <tr><td>1</td><td>Hide</td><td>Apprentice 1–3</td><td>+1</td><td>5g</td></tr>
    <tr><td>2</td><td>Leather</td><td>Apprentice 1–3</td><td>+2</td><td>20g</td></tr>
    <tr><td>3</td><td>Studded leather</td><td>Veteran 4–7</td><td>+3</td><td>120g</td></tr>
    <tr><td>4</td><td>Scaled</td><td>Veteran 4–7</td><td>+4</td><td>500g</td></tr>
    <tr><td>5</td><td>Dragonscale</td><td>Master 8–10</td><td>+5</td><td>4,000g</td></tr>
  </table>
</div>

<div class="card">
  <h2>Heavy — metal / stone <span style="font-weight:400;text-transform:none;">(Might)</span></h2>
  <table>
    <tr><th>Gr</th><th>Material</th><th>Tier</th><th>+Armor</th><th>Price</th></tr>
    <tr><td>1</td><td>Iron</td><td>Apprentice 1–3</td><td>+3</td><td>75g</td></tr>
    <tr><td>2</td><td>Steel</td><td>Apprentice 1–3</td><td>+4</td><td>200g</td></tr>
    <tr><td>3</td><td>Dwarven</td><td>Veteran 4–7</td><td>+5</td><td>800g</td></tr>
    <tr><td>4</td><td>Orcish</td><td>Veteran 4–7</td><td>+6</td><td>2,000g</td></tr>
    <tr><td>5</td><td>Ebony</td><td>Master 8–10</td><td>+7</td><td>5,000g</td></tr>
    <tr><td>6</td><td>Daedric</td><td>Master 8–10</td><td>+8</td><td>12,000g</td></tr>
  </table>
</div>

<div class="card">
  <h2>Shields <span style="font-weight:400;text-transform:none;">(flat, on top)</span></h2>
  <table>
    <tr><th>Shield</th><th>+Armor</th><th>Notes</th></tr>
    <tr><td>Buckler</td><td>+1</td><td></td></tr>
    <tr><td>Shield</td><td>+2</td><td></td></tr>
    <tr><td>Tower shield</td><td>+3</td><td>both hands; difficult terrain −2 Speed</td></tr>
  </table>
  <div class="note">One-handed slot — not with two-handed weapons. Fine with light-armor casting.</div>
</div>

<div class="card">
  <h2>Defenses &amp; HP</h2>
  <span class="formula">Armor = 10 + Agility + armor (light) / + Might (heavy)</span>
  <span class="formula">Mind = 10 + Mind · Spirit = 10 + Spirit</span>
  <div class="note" style="font-style:normal;color:#1a1a1a;">HP by tier: Heavy <span class="tag">10+Might</span> · Light <span class="tag">8+Might</span> · None <span class="tag">6+Might</span>.</div>
</div>

<div class="card">
  <h2>Expected defenses by tier <span style="font-weight:400;text-transform:none;">(monster design)</span></h2>
  <table>
    <tr><th>Tier</th><th>Light (Agi)</th><th>Heavy (Might)</th><th>Caster (none)</th></tr>
    <tr><td>Apprentice 1–3</td><td>15–17</td><td>16–18</td><td>11–13</td></tr>
    <tr><td>Veteran 4–7</td><td>17–19</td><td>19–21</td><td>12–14</td></tr>
    <tr><td>Master 8–10</td><td>19–20</td><td>21–23</td><td>13–15</td></tr>
  </table>
</div>

<div class="card">
  <h2>Remember</h2>
  <ul>
    <li><strong>No medium category</strong> · <strong>no Agility cap</strong> on light · material <em>is</em> the bonus (no stacking).</li>
    <li>Shields flat +1/+2/+3 · <strong>no casting in heavy, for anyone.</strong></li>
  </ul>
</div>
`;

// ===================== SHOP / SPENDING GOLD (hand-built) =====================
const shopBody = `
<div class="card">
  <h2>How buying works</h2>
  <ul>
    <li>A new character starts with a <strong>class kit</strong> or <strong>50g</strong> à la carte (apprentice-tier gear).</li>
    <li>Currency is <strong>gold (g)</strong>; a few services run in <strong>silver (s)</strong>. Coppers exist; rarely tracked.</li>
    <li>If it's not listed, the <strong>GM names a price and says yes.</strong> Selling: GM's call (≈ half).</li>
  </ul>
</div>

<div class="card">
  <h2>Weapons — price = material</h2>
  <table>
    <tr><th>Grade</th><th>Material</th><th>+Dmg</th><th>Price</th></tr>
    <tr><td>1</td><td>Iron</td><td>+0</td><td>10g</td></tr>
    <tr><td>2</td><td>Steel</td><td>+1</td><td>30g</td></tr>
    <tr><td>3</td><td>Dwarven</td><td>+2</td><td>150g</td></tr>
    <tr><td>4</td><td>Orcish</td><td>+3</td><td>400g</td></tr>
    <tr><td>5</td><td>Ebony</td><td>+4</td><td>1,200g</td></tr>
    <tr><td>6</td><td>Daedric</td><td>+5</td><td>3,500g</td></tr>
  </table>
  <div class="note">Price is set by <strong>material</strong>, not class. <strong>Two-handed ≈ ×1.5</strong>; <strong>daggers/slings ≈ ×½</strong>. (Iron longsword 10g · Steel greatsword ~45g · Iron dagger 5g.)</div>
</div>

<div class="card">
  <h2>Light armor (leather / hide)</h2>
  <table>
    <tr><th>Material</th><th>+Armor</th><th>Price</th></tr>
    <tr><td>Hide</td><td>+1</td><td>5g</td></tr>
    <tr><td>Leather</td><td>+2</td><td>20g</td></tr>
    <tr><td>Studded leather</td><td>+3</td><td>120g</td></tr>
    <tr><td>Scaled</td><td>+4</td><td>500g</td></tr>
    <tr><td>Dragonscale</td><td>+5</td><td>4,000g</td></tr>
  </table>
</div>

<div class="card">
  <h2>Heavy armor (metal / stone)</h2>
  <table>
    <tr><th>Material</th><th>+Armor</th><th>Price</th></tr>
    <tr><td>Iron</td><td>+3</td><td>75g</td></tr>
    <tr><td>Steel</td><td>+4</td><td>200g</td></tr>
    <tr><td>Dwarven</td><td>+5</td><td>800g</td></tr>
    <tr><td>Orcish</td><td>+6</td><td>2,000g</td></tr>
    <tr><td>Ebony</td><td>+7</td><td>5,000g</td></tr>
    <tr><td>Daedric</td><td>+8</td><td>12,000g</td></tr>
  </table>
</div>

<div class="card">
  <h2>Shields</h2>
  <table>
    <tr><th>Shield</th><th>+Armor</th><th>Price*</th></tr>
    <tr><td>Buckler</td><td>+1</td><td>10g</td></tr>
    <tr><td>Shield</td><td>+2</td><td>25g</td></tr>
    <tr><td>Tower shield</td><td>+3</td><td>50g</td></tr>
  </table>
  <div class="note">*Suggested. One-handed slot; not with two-handed weapons.</div>
</div>

<div class="card">
  <h2>Consumables</h2>
  <table>
    <tr><th>Item</th><th>Cost</th><th>Effect</th></tr>
    <tr><td>Healing potion</td><td>50g</td><td>action: restore 1d8+2 HP</td></tr>
    <tr><td>Mana potion</td><td>100g</td><td>action: restore 1d4 mana (rare)</td></tr>
    <tr><td>Vial of acid</td><td>25g</td><td>throw Near, vs Armor, 2d6</td></tr>
    <tr><td>Alchemist's fire</td><td>25g</td><td>throw, 1d6 + Burning</td></tr>
    <tr><td>Antitoxin</td><td>50g</td><td>remove Poisoned</td></tr>
    <tr><td>Holy water</td><td>25g</td><td>2d6 radiant to undead/fiends</td></tr>
    <tr><td>Smokebomb</td><td>30g</td><td>2-sq smoke, full cover, 1 round</td></tr>
    <tr><td>Caltrops bag</td><td>5g</td><td>1-sq difficult terrain + 1 dmg/Slow</td></tr>
    <tr><td>Oil flask</td><td>5g</td><td>lamp fuel / thrown fire</td></tr>
    <tr><td>Ration (day)</td><td>1g</td><td>one day's food</td></tr>
  </table>
</div>

<div class="card">
  <h2>Tools &amp; kits</h2>
  <table>
    <tr><th>Item</th><th>Cost</th></tr>
    <tr><td>Adventuring kit (pack, bedroll, torches, rope…)</td><td>10g</td></tr>
    <tr><td>Thieves' tools</td><td>25g</td></tr>
    <tr><td>Healer's kit (10 uses, +5 Medicine)</td><td>30g</td></tr>
    <tr><td>Climbing kit · Disguise kit · Forgery kit</td><td>25–30g</td></tr>
    <tr><td>Lantern + 5 oil</td><td>10g</td></tr>
    <tr><td>Mage's spellbook (blank) · Holy symbol</td><td>50g · 10g</td></tr>
    <tr><td>Crowbar · Hammer+spikes · Manacles</td><td>2g ea</td></tr>
    <tr><td>Steel mirror</td><td>5g</td></tr>
    <tr><td>Spyglass</td><td>1,000g</td></tr>
  </table>
</div>

<div class="card">
  <h2>Services &amp; lodging</h2>
  <table>
    <tr><th>Service</th><th>Cost</th></tr>
    <tr><td>Horse</td><td>75g</td></tr>
    <tr><td>Stabling (night)</td><td>5s</td></tr>
    <tr><td>Inn, common room (night)</td><td>5s</td></tr>
    <tr><td>Inn, private room (night)</td><td>2g</td></tr>
    <tr><td>Hireling (day)</td><td>1g</td></tr>
  </table>
  <div class="note"><strong>Magic items aren't for sale</strong> — they're GM-awarded story items, not shop stock.</div>
</div>
`;

// ---------- render ----------
const jobs = [
  { name: 'weapons-quickref', html: cardPage('Weapons', 'Quick reference · A4 landscape · v2', weaponsBody) },
  { name: 'armor-quickref',   html: cardPage('Armor',   'Quick reference · A4 landscape · v2', armorBody) },
  { name: 'shop-quickref',    html: cardPage('Shop',    'Spending gold · A4 landscape · v1', shopBody) },
  { name: 'classes-quickref', html: docPage('19-classes.md') },
  { name: 'spells-quickref',  html: docPage('10-spell-list.md') },
];

if (!fs.existsSync(chrome)) {
  console.error(`Google Chrome not found at ${chrome}. Open the .html files and Print → Save as PDF.`);
}

for (const job of jobs) {
  const htmlOut = path.join(__dirname, `${job.name}.html`);
  const pdfOut = path.join(outDir, `${job.name}.pdf`);
  fs.writeFileSync(htmlOut, job.html);
  if (fs.existsSync(chrome)) {
    const args = ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--no-update-check',
      '--disable-extensions', `--print-to-pdf="${pdfOut}"`, `"file://${htmlOut}"`];
    try {
      execSync(`"${chrome}" ${args.join(' ')}`, { stdio: 'pipe' });
      console.log(`✓ wrote ${pdfOut} (${(fs.statSync(pdfOut).size / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`Chrome failed on ${job.name}:`, e.message);
    }
  }
}
