// build-pdf/build-refs.js
// Generates two single-page A4 LANDSCAPE quick-reference sheets:
//   • weapons-quickref.pdf   (from rules/17-weapons.md)
//   • armor-quickref.pdf     (from rules/18-armor.md)
// Renders via headless Google Chrome, same as build.js.
// Run:  node build-pdf/build-refs.js
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const outDir = path.join(projectRoot, 'quick-ref');
fs.mkdirSync(outDir, { recursive: true });
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// ---------- shared print CSS (A4 landscape, dense, card layout) ----------
const css = `
@page { size: A4 landscape; margin: 7mm; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 8.4pt; line-height: 1.28; color: #1a1a1a;
}
.head {
  display: flex; align-items: baseline; justify-content: space-between;
  border-bottom: 2pt solid #1a1a1a; padding-bottom: 3pt; margin-bottom: 5pt;
}
.head h1 { font-size: 17pt; margin: 0; letter-spacing: 1.5pt; text-transform: uppercase; }
.head .sub { font-size: 8pt; color: #666; font-style: italic; }
.cols { column-count: 2; column-gap: 6mm; }
.card { break-inside: avoid; margin: 0 0 5pt 0; padding: 4pt 6pt;
  border: 0.6pt solid #bbb; border-radius: 3pt; background: #fafafa; }
.card h2 { font-size: 8.6pt; margin: 0 0 3pt 0; text-transform: uppercase;
  letter-spacing: 0.6pt; color: #7a2e2e; border-bottom: 0.5pt solid #ddd; padding-bottom: 2pt; }
table { border-collapse: collapse; width: 100%; font-size: 7.9pt; margin: 1pt 0; }
th, td { border: 0.5pt solid #aaa; padding: 1.6pt 4pt; text-align: left; vertical-align: top; }
th { background: #ececec; font-weight: 700; }
tr:nth-child(even) td { background: #f3f3f3; }
.formula { font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 8pt;
  background: #efe9df; padding: 2pt 5pt; border-radius: 2pt; display: block; margin: 2pt 0; }
ul { margin: 2pt 0; padding-left: 13pt; }
li { margin: 0.5pt 0; }
strong { color: #000; }
.tag { font-family: "SF Mono", Menlo, monospace; font-size: 7.6pt;
  background: #e7e7e7; padding: 0 3pt; border-radius: 2pt; }
.note { font-size: 7.4pt; color: #555; font-style: italic; margin-top: 2pt; }
`;

function page(title, sub, body) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<title>${title}</title><style>${css}</style></head><body>
<div class="head"><h1>${title}</h1><div class="sub">${sub}</div></div>
<div class="cols">${body}</div></body></html>`;
}

// ===================== WEAPONS =====================
const weaponsBody = `
<div class="card">
  <h2>The roll</h2>
  <span class="formula">Attack = d20 + ability + training (if trained)  vs. ARMOR</span>
  <span class="formula">Damage = weapon die + material + ability</span>
  <ul>
    <li><strong>Training → the hit.</strong> <strong>Material → the damage.</strong> Neither crosses over.</li>
    <li><strong>Crit (nat 20):</strong> double the dice; flat mods (material + ability) added once.</li>
    <li><strong>Fumble (nat 1):</strong> miss + a complication (drop weapon, hit ally for ½, prone, expose flank…).</li>
    <li>Min damage on a hit is <span class="tag">1</span>.</li>
  </ul>
</div>

<div class="card">
  <h2>Weapon classes</h2>
  <table>
    <tr><th>Class</th><th>Die</th><th>Ability</th><th>Hands</th><th>Range</th></tr>
    <tr><td>Light melee</td><td>1d6 (1d4 dagger)</td><td>Agility <em>or</em> Might</td><td>one</td><td>Close</td></tr>
    <tr><td>Medium melee</td><td>1d8</td><td>Might</td><td>one</td><td>Close</td></tr>
    <tr><td>Heavy melee</td><td>1d10</td><td>Might</td><td><strong>two</strong></td><td>Close</td></tr>
    <tr><td>Ranged</td><td>1d4–1d10</td><td>Agility</td><td>1–2</td><td>Near/Far</td></tr>
  </table>
  <div class="note">Light melee: pick Agility or Might at creation, then fixed. Polearms/spears reach 2 squares.</div>
</div>

<div class="card">
  <h2>Examples by class</h2>
  <ul>
    <li><strong>Light (1d6 / 1d4):</strong> dagger (throw Near, conceal), shortsword, hand axe (throw), light mace/club, rapier (Agility-only).</li>
    <li><strong>Medium (1d8, Might):</strong> longsword, battleaxe, warhammer, mace, spear (throw; reach 2 = polearm).</li>
    <li><strong>Heavy (1d10, Might, 2-handed):</strong> greatsword, greataxe, maul, polearm / halberd / glaive (reach 2).</li>
  </ul>
</div>

<div class="card">
  <h2>Ranged weapons (Agility)</h2>
  <table>
    <tr><th>Weapon</th><th>Die</th><th>Range</th><th>Notes</th></tr>
    <tr><td>Shortbow</td><td>1d6</td><td>Near</td><td></td></tr>
    <tr><td>Longbow</td><td>1d8</td><td>Far</td><td></td></tr>
    <tr><td>Light crossbow</td><td>1d6</td><td>Far</td><td>reload uses move</td></tr>
    <tr><td>Heavy crossbow</td><td>1d10</td><td>Far</td><td>2-handed, reload</td></tr>
    <tr><td>Hand crossbow</td><td>1d4</td><td>Near</td><td>one-handed</td></tr>
    <tr><td>Sling</td><td>1d4</td><td>Near</td><td>anyone</td></tr>
    <tr><td>Thrown (dagger/axe/spear)</td><td>1d6/1d6/1d8</td><td>Near</td><td></td></tr>
  </table>
  <div class="note">Beyond range: disadvantage; double range: can't attack. Ammo not tracked.</div>
</div>

<div class="card">
  <h2>Material ladder — metal / stone <span style="font-weight:400;text-transform:none;">(adds to DAMAGE)</span></h2>
  <table>
    <tr><th>Gr</th><th>Material</th><th>Power tier</th><th>+Dmg</th><th>Price*</th></tr>
    <tr><td>1</td><td>Iron</td><td>Apprentice 1–3</td><td>+0</td><td>10g</td></tr>
    <tr><td>2</td><td>Steel</td><td>Apprentice 1–3</td><td>+1</td><td>30g</td></tr>
    <tr><td>3</td><td>Dwarven</td><td>Veteran 4–7</td><td>+2</td><td>150g</td></tr>
    <tr><td>4</td><td>Orcish</td><td>Veteran 4–7</td><td>+3</td><td>400g</td></tr>
    <tr><td>5</td><td>Ebony</td><td>Master 8–10</td><td>+4</td><td>1,200g</td></tr>
    <tr><td>6</td><td>Daedric</td><td>Master 8–10</td><td>+5</td><td>3,500g</td></tr>
  </table>
  <div class="note">*Two-handed ≈ 1.5× · daggers/slings ≈ ½. Same ladder also governs HEAVY ARMOR (see Armor sheet).</div>
</div>

<div class="card">
  <h2>Remember</h2>
  <ul>
    <li><strong>Material never touches the attack roll</strong> — damage only. Keeps accuracy bounded (ceiling d20+9).</li>
    <li>Material grade is <strong>mundane masterwork, not magic.</strong> The material <em>is</em> the quality tier (no separate "masterwork").</li>
    <li>Materials track the party's <strong>power tier</strong> (loot + purse). A higher grade handed early = a deliberate treasure spike.</li>
  </ul>
</div>

<div class="card">
  <h2>Worked examples</h2>
  <ul>
    <li>App Warrior, Might +4, <strong>Iron</strong> longsword (trained): atk <span class="tag">+6</span> → dmg 1d8 +0 +4 (avg 8.5).</li>
    <li>Vet Warrior, Might +5, <strong>Dwarven</strong> greatsword: atk <span class="tag">+8</span> → dmg 1d10 +2 +5 (avg 12.5).</li>
    <li>Master Warrior, <strong>Daedric</strong> greatsword: dmg 1d10 +5 +5 (avg 15.5).</li>
    <li>Vet Scout, Agi +5, <strong>Dwarven</strong> longbow: dmg 1d8 +2 +5 (avg 11.5), +1d6 Sneak when it applies.</li>
  </ul>
</div>
`;

// ===================== ARMOR =====================
const armorBody = `
<div class="card">
  <h2>The two categories</h2>
  <table>
    <tr><th>Category</th><th>Material path</th><th>Armor formula</th><th>Trained</th><th>Cast?</th></tr>
    <tr><td><strong>Light</strong></td><td>leather / hide</td><td>10 + Agility + material</td><td>Scout, Priest, Warrior</td><td>✅</td></tr>
    <tr><td><strong>Heavy</strong></td><td>metal / stone</td><td>10 + Might + material</td><td>Warrior</td><td>❌</td></tr>
  </table>
  <ul>
    <li><strong>Mage:</strong> no armor (any armor blocks arcane casting). Armor = 10 + Agility (+ shield).</li>
    <li><strong>Priest:</strong> light only — casts divine freely in light; not trained in heavy.</li>
    <li><strong>Untrained armor:</strong> disadvantage on all Agility & Might rolls <em>and</em> no spellcasting.</li>
  </ul>
</div>

<div class="card">
  <h2>Light — leather / hide <span style="font-weight:400;text-transform:none;">(Agility)</span></h2>
  <table>
    <tr><th>Gr</th><th>Material</th><th>Power tier</th><th>+Armor</th><th>Price</th></tr>
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
    <tr><th>Gr</th><th>Material</th><th>Power tier</th><th>+Armor</th><th>Price</th></tr>
    <tr><td>1</td><td>Iron</td><td>Apprentice 1–3</td><td>+3</td><td>75g</td></tr>
    <tr><td>2</td><td>Steel</td><td>Apprentice 1–3</td><td>+4</td><td>200g</td></tr>
    <tr><td>3</td><td>Dwarven</td><td>Veteran 4–7</td><td>+5</td><td>800g</td></tr>
    <tr><td>4</td><td>Orcish</td><td>Veteran 4–7</td><td>+6</td><td>2,000g</td></tr>
    <tr><td>5</td><td>Ebony</td><td>Master 8–10</td><td>+7</td><td>5,000g</td></tr>
    <tr><td>6</td><td>Daedric</td><td>Master 8–10</td><td>+8</td><td>12,000g</td></tr>
  </table>
  <div class="note">Same six materials as weapons; here the column that matters is Armor.</div>
</div>

<div class="card">
  <h2>Shields <span style="font-weight:400;text-transform:none;">(flat, on top of Armor)</span></h2>
  <table>
    <tr><th>Shield</th><th>+Armor</th><th>Notes</th></tr>
    <tr><td>Buckler</td><td>+1</td><td></td></tr>
    <tr><td>Shield</td><td>+2</td><td></td></tr>
    <tr><td>Tower shield</td><td>+3</td><td>both hands; difficult terrain −2 Speed</td></tr>
  </table>
  <div class="note">Material-agnostic (flat). One-handed slot — not with two-handed weapons. OK with a Priest's light casting.</div>
</div>

<div class="card">
  <h2>Defenses</h2>
  <span class="formula">Armor = 10 + Agility + armor   (light)</span>
  <span class="formula">Armor = 10 + Might + armor   (heavy)</span>
  <span class="formula">Mind = 10 + Mind &nbsp;·&nbsp; Spirit = 10 + Spirit</span>
</div>

<div class="card">
  <h2>Expected defenses by tier <span style="font-weight:400;text-transform:none;">(monster design)</span></h2>
  <table>
    <tr><th>Power tier</th><th>Light (Agi)</th><th>Heavy (Might)</th><th>Caster (none)</th></tr>
    <tr><td>Apprentice 1–3</td><td>15–17</td><td>16–18</td><td>11–13</td></tr>
    <tr><td>Veteran 4–7</td><td>17–19</td><td>19–21</td><td>12–14</td></tr>
    <tr><td>Master 8–10</td><td>19–20</td><td>21–23</td><td>13–15</td></tr>
  </table>
  <div class="note">The spine of the bounded math — materials are pinned to tiers so monster attack bonuses keep pace.</div>
</div>

<div class="card">
  <h2>Worked examples</h2>
  <ul>
    <li>App Scout, Agi +5, <strong>Leather</strong>: 10+5+2 = <span class="tag">17</span>.</li>
    <li>App Warrior, Might +4, <strong>Steel</strong> + Shield: 10+4+4+2 = <span class="tag">20</span>.</li>
    <li>Vet Priest, Agi +1, <strong>Studded</strong>: 10+1+3 = <span class="tag">14</span>, casts freely.</li>
    <li>Master Warrior, Might +5, <strong>Daedric</strong> + Tower: 10+5+8+3 = <span class="tag">26</span> (hardest target; no hands, no casting).</li>
  </ul>
</div>

<div class="card">
  <h2>Remember</h2>
  <ul>
    <li><strong>No medium category</strong> · <strong>no Agility cap</strong> on light.</li>
    <li>The material <em>is</em> the bonus — no "base + material" stacking.</li>
    <li>Shields are flat +1/+2/+3 (material-agnostic).</li>
    <li><strong>No spellcasting in heavy armor — for anyone.</strong></li>
  </ul>
</div>
`;

// ---------- render ----------
const jobs = [
  { name: 'weapons-quickref', html: page('Weapons', 'Quick reference · A4 landscape · v1', weaponsBody) },
  { name: 'armor-quickref',   html: page('Armor',   'Quick reference · A4 landscape · v1', armorBody) },
];

if (!fs.existsSync(chrome)) {
  console.error(`Google Chrome not found at ${chrome}. Open the .html files and Print → Save as PDF.`);
}

for (const job of jobs) {
  const htmlOut = path.join(__dirname, `${job.name}.html`);
  const pdfOut = path.join(outDir, `${job.name}.pdf`);
  fs.writeFileSync(htmlOut, job.html);
  console.log(`✓ wrote ${htmlOut}`);
  if (fs.existsSync(chrome)) {
    const args = ['--headless=new', '--disable-gpu', '--no-pdf-header-footer',
      '--no-update-check', '--disable-extensions',
      `--print-to-pdf="${pdfOut}"`, `"file://${htmlOut}"`];
    try {
      execSync(`"${chrome}" ${args.join(' ')}`, { stdio: 'pipe' });
      console.log(`✓ wrote ${pdfOut} (${(fs.statSync(pdfOut).size / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`Chrome failed on ${job.name}:`, e.message);
    }
  }
}
