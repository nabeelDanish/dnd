// build-map.js — generates map.json for "The Vermilion Garden"
// Run from this directory:    node build-map.js
//
// ONE map, played with FOG OF WAR ON. Nothing on it spoils the mystery:
//   - Labels are neutral, public geography only — location names a visitor
//     could read off the streets (no "killer", no roles, no clues, no
//     win-conditions). The three crime scenes are marked because they are
//     public knowledge the party is handed in Scene 1.
//   - NPC tokens carry only a name (no role tag). A name reveals nothing the
//     party doesn't learn by meeting that person — and fog keeps each token
//     hidden until the DM paints that district as the party explores it.
//   - The locked Conservatory and the climax combatants exist on the map but
//     sit under fog until the DM reveals them at the climax. The win-condition
//     (burn/shatter the Daughter-Rose) is kept in the adventure text, not here.
//
// Keep all the secrets — who's the killer, the decoys, the empty grave, the
// buried clue, the motive — in the adventure.md, NOT on the map.
//
// Coordinate convention (same as the other adventures):
//   North is UP on the screen → north is the -Y direction.
//   The Vermilion Garden crowns the hill at the top (most negative Y).
//   The party enters from the Bloom Bridge at the bottom (positive Y).

const fs = require('fs');
const path = require('path');

const labels = {};
const tokens = [];
let tokenCounter = 0;

const COL = {
  red:    '#ef4444',
  orange: '#f97316',
  gold:   '#f59e0b',
  rose:   '#e11d48',
  lime:   '#84cc16',
  green:  '#10b981',
  cyan:   '#06b6d4',
  blue:   '#3b82f6',
  purple: '#8b5cf6',
  pink:   '#ec4899',
  gray:   '#78716c',
};

function fill(x1, y1, x2, y2, color) {
  const xMin = Math.min(x1, x2), xMax = Math.max(x1, x2);
  const yMin = Math.min(y1, y2), yMax = Math.max(y1, y2);
  for (let x = xMin; x <= xMax; x++)
    for (let y = yMin; y <= yMax; y++)
      labels[`${x},${y}`] = { text: '', color };
}
function label(x, y, text, color) { labels[`${x},${y}`] = { text, color }; }
function token(type, name, x, y, color) {
  tokenCounter++;
  tokens.push({ id: `t_preset_${tokenCounter}`, type, name, color, x, y });
}

// ======== Compass + title ========
label(-17, -16, '↑ N', COL.gray);
label(0, -17, 'THE VERDANCE', COL.gold);
label(0, -16, '(garden-quarter of Aurivane — Midsummer Bloomfeast)', COL.gray);

// =====================================================================
// THE VERMILION GARDEN  (the hill, top center)
// =====================================================================
fill(-4, -15, 4, -12, COL.green);
label(-4, -15, 'VERMILION', COL.rose);
label(-3, -15, 'GARDEN', COL.rose);
label(-1, -14, 'rose terraces', COL.rose);
label(2, -13, 'roses', COL.rose);
label(-2, -13, 'roses', COL.rose);
// Public knowledge: where the Garland-Prince's body was found.
label(0, -11, '⚑ body found', COL.gray);
token('npc', 'Edran', -6, -13, COL.cyan);
token('npc', 'Marise', 5, -13, COL.cyan);
token('npc', 'Grenn', 1, -12, COL.cyan); // groundskeeper — works the rose-beds, finds the bodies

// Main avenue down the hill to the market
// (start at -10 so we don't clobber the garden-foot "body found" marker at 0,-11)
for (let y = -10; y <= -4; y++) label(0, y, '', COL.gold);

// =====================================================================
// TEA-GARDENS + theater (north-east)
// =====================================================================
fill(7, -11, 13, -6, COL.green);
label(7, -11, 'TEA-GARDENS', COL.green);
label(8, -7, '⚑ body found', COL.gray);
fill(11, -10, 13, -8, COL.purple);
label(11, -10, 'Theater', COL.purple);
token('npc', 'Castellan', 12, -9, COL.cyan);
token('npc', 'Aldric', 9, -9, COL.cyan);

// =====================================================================
// TEMPLE of the Summer Mother (west)
// =====================================================================
fill(-13, -6, -9, -3, COL.blue);
label(-13, -6, 'TEMPLE of the', COL.cyan);
label(-12, -5, 'Summer Mother', COL.cyan);
token('npc', 'Anselm', -11, -4, COL.cyan);
fill(-13, -1, -10, 1, COL.gray);
label(-13, -1, 'burial yard', COL.gray);
token('npc', 'Crale', -10, 1, COL.cyan);

// =====================================================================
// THE BLOOMMARKET (center) + the Gilded Finch
// =====================================================================
fill(-4, -3, 4, 1, COL.gold);
label(-4, -3, 'BLOOMMARKET', COL.gold);
label(0, -1, 'Fountain', COL.cyan);
label(0, 0, '⚑ body found', COL.gray);
token('npc', 'Carow', -3, -2, COL.cyan);
token('npc', 'Nessa', 3, -2, COL.cyan);
fill(-7, -2, -5, -1, COL.gray);
label(-7, -2, 'Gilded', COL.orange);
label(-6, -1, 'Finch', COL.orange);
token('npc', 'Ysolde', -6, -2, COL.cyan); // festival patroness — holds court at the grand tavern

// Lensa's doll studio (south of the market) — a public shop
fill(4, 2, 6, 3, COL.purple);
label(4, 2, 'Doll studio', COL.purple);
token('npc', 'Lensa', 5, 3, COL.cyan);

// =====================================================================
// SAEL'S PERFUMERY (east of market) — a famous public shop
// =====================================================================
fill(6, -3, 9, -1, COL.rose);
label(6, -3, "Sael's", COL.rose);
label(7, -2, 'Perfumery', COL.rose);
token('npc', 'Florian', 7, -1, COL.cyan);
token('npc', 'Doral', 9, -2, COL.cyan);

// =====================================================================
// THE WITHERROWS (south-west)
// =====================================================================
fill(-14, 3, -7, 10, COL.gray);
label(-14, 3, 'THE WITHERROWS', COL.gray);
fill(-13, 5, -11, 7, COL.rose);
label(-12, 7, 'walled garden', COL.gray);
token('npc', 'Dama Vesh', -12, 6, COL.cyan);
token('npc', 'Skein', -8, 9, COL.cyan);

// =====================================================================
// WATCH-HOUSE + Civic Hall (south-center)
// =====================================================================
fill(-2, 7, 1, 10, COL.blue);
label(-2, 7, 'WATCH-HOUSE', COL.blue);
token('npc', 'Halloran', -1, 9, COL.cyan);
token('npc', 'Roon', 1, 8, COL.cyan);
fill(4, 7, 7, 9, COL.gray);
label(4, 7, 'Civic Hall', COL.gray);
token('npc', 'Vell', 5, 8, COL.cyan);

// =====================================================================
// THE CONSERVATORY (south-east) — stays under fog until the climax.
// Reveal it only when the party breaks in / the fight begins. The
// win-condition is in the adventure text, NOT on the map.
// =====================================================================
fill(12, 2, 19, 11, COL.green);
label(12, 2, 'Conservatory', COL.green);
label(13, 4, 'roses on every wall', COL.rose);
label(13, 5, 'thick perfume', COL.purple);
label(15, 2, '↑ stair from the shop', COL.gray);
token('object', 'Daughter-Rose', 15, 7, COL.rose);
// Climax combatants (revealed at the climax; delete the Bloomwake if the
// party catches Florian before the ritual completes — see Scene 6).
token('enemy', 'Florian', 15, 9, COL.red);
token('enemy', 'Thornling', 13, 7, COL.red);
token('enemy', 'Thornling', 17, 7, COL.red);
token('enemy', 'Bloomwake', 15, 5, COL.red);

// =====================================================================
// PLAYERS START — the Bloom Bridge (south entrance)
// =====================================================================
for (let y = 1; y <= 11; y++) label(0, y, '', COL.gold);
fill(0, 12, 1, 14, COL.lime);
label(1, 14, 'PLAYERS START', COL.pink);
label(0, 13, '(over the', COL.gray);
label(1, 13, 'Bloom Bridge)', COL.gray);

// ======== OUTPUT ========
const output = {
  format: 'dnd-map-v1',
  name: 'The Vermilion Garden',
  description:
    'Pre-built map for the murder-mystery one-shot, played with FOG OF WAR ON. A schematic of the Verdance — ' +
    'the garden-quarter of Aurivane during the Midsummer Bloomfeast. Nothing here spoils the mystery: labels ' +
    'are neutral public geography (the Vermilion Garden hill, the Tea-Gardens and theater, the Temple and ' +
    'burial yard, the Bloommarket and Gilded Finch, Sael\'s Perfumery, a doll studio, the Witherrows, the ' +
    'Watch-house and Civic Hall), the three crime scenes are marked only as "body found" (public knowledge ' +
    'from Scene 1), and NPC tokens carry only names — no roles, no clues. Keep the killer, decoys, motive, and ' +
    'the empty grave in your head / the adventure text. The locked Conservatory (south-east) and the climax ' +
    'combatants — the Daughter-Rose, Florian, two Thornlings, and the conditional Bloomwake — sit on the map ' +
    'but stay UNDER FOG until you reveal them at the climax (delete the Bloomwake if the party catches Florian ' +
    'before the ritual). Player tokens are NOT included — drop them at PLAYERS START on the Bloom Bridge. ' +
    'Turn Fog of War ON and paint reveals as the party explores each district.',
  exportedAt: '2026-06-21',
  map: {
    fogEnabled: true,
    showAll: false,
    labels,
    revealed: {},
    tokens,
  },
};

const outPath = path.join(__dirname, 'map.json');
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`Wrote ${outPath}`);
console.log(`  ${Object.keys(labels).length} labels, ${tokens.length} tokens`);
