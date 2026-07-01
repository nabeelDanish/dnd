// build-map.js — generates map.json for "The Forge of Fury"
// Run from this directory:    node build-map.js
//
// Coordinate convention:
//   This is a DESCENT into a mountain. The gate is at the TOP of the screen
//   (positive Y) and the dungeon sinks DOWNWARD (negative Y) toward the
//   Black Lake at the bottom. North isn't meaningful underground; DOWN the
//   screen = DEEPER into Khundrukar. Water runs downhill toward the lake.
//
// Vertical layout (top = surface gate; bottom = the deep):
//
//   y  8..12   THE MOUNTAIN DOOR  (combat 1: orc sentries; the chasm & rope bridge)
//   y  1..6    GREAT ULFE'S HALL  (combat 2: half-ogre chief + orcs; the black axe)
//   y -7..0    THE GLITTERHAME    (Yorrin's cage; trog den [SW]; the bolt-hole; glowcaps)
//   y -13..-9  THE SINKHOLE       (optional hazard: the roper; subterranean river) [east spur]
//   y -23..-15 THE FOUNDRY        (combat 4: duergar; Durgeddin's shade; BOTH win-buttons)
//   y -33..-25 THE BLACK LAKE     (boss: Nightscale; the hoard; the gate-wheel)

const fs = require('fs');
const path = require('path');

const labels = {};
const tokens = [];
let tokenCounter = 0;

const COL = {
  red:    '#ef4444',
  orange: '#f97316',
  yellow: '#f59e0b',
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
  for (let x = xMin; x <= xMax; x++) {
    for (let y = yMin; y <= yMax; y++) {
      labels[`${x},${y}`] = { text: '', color };
    }
  }
}

function label(x, y, text, color) {
  labels[`${x},${y}`] = { text, color };
}

function token(type, name, x, y, color) {
  tokenCounter++;
  tokens.push({
    id: `t_preset_${tokenCounter}`,
    type, name, color, x, y,
  });
}

// ======== Orientation note ========
label(-9, 11, '↓ DEEPER', COL.gray);
label(-9, -25, '↓ THE DEEP', COL.gray);

// =====================================================================
// THE MOUNTAIN DOOR  (combat 1 — sentries, chasm & rope bridge)
// =====================================================================

label(-2, 12, 'THE MOUNTAIN DOOR', COL.yellow);

// The road in + PLAYERS START (outside the gate)
fill(0, 11, 1, 12, COL.lime);
label(1, 12, 'PLAYERS START', COL.pink);
label(-1, 12, '(dwarf-road)', COL.gray);

// The great arched gate (defaced dwarven faces)
fill(-2, 10, 3, 10, COL.gray);
label(-2, 10, 'defaced gate', COL.gray);

// The chasm (40 ft down to black water) with the rope bridge
fill(-3, 8, 4, 8, COL.blue);
label(-3, 8, 'CHASM ↓40ft', COL.blue);
label(4, 8, 'stream out', COL.cyan);
// the sagging rope bridge across it
label(0, 8, '≈bridge≈', COL.orange);
label(1, 8, '(frayed)', COL.orange);

// Far side — the guard fire, the warhorn, the loot-nook
fill(-2, 6, 3, 7, COL.gray);
label(-1, 7, 'guard fire', COL.orange);
label(2, 7, 'WARHORN', COL.red);
label(3, 6, '(loot: 48g,', COL.cyan);
label(3, 7, 'potion)', COL.cyan);
// archer ledge above the gate
label(-4, 6, 'archer ledge', COL.gray);

// Combat 1 — 3 Orc Raider + 1 Orc Archer
token('enemy', 'Orc Raider', -1, 6, COL.red);
token('enemy', 'Orc Raider',  1, 6, COL.red);
token('enemy', 'Orc Raider',  0, 7, COL.red);
token('enemy', 'Orc Archer', -4, 5, COL.red);

// =====================================================================
// GREAT ULFE'S HALL  (combat 2 — the chieftain)
// =====================================================================

label(-2, 6, "GREAT ULFE'S HALL", COL.yellow);

// The pillared hall + broken dwarf-throne
fill(-4, 1, 4, 5, COL.gray);
label(-4, 5, 'pillared hall', COL.gray);
label(0, 2, 'broken throne', COL.gray);
label(-3, 3, 'firepit', COL.orange);
label(3, 2, '(hoard: 140g,', COL.cyan);
label(3, 3, 'potion, map)', COL.cyan);

// The boss + orcs
token('enemy', 'Great Ulfe', 0, 3, COL.red); // wields the Black Axe (win-button #1)
label(1, 4, 'BLACK AXE', COL.purple);
token('enemy', 'Orc Raider', -2, 4, COL.red);
token('enemy', 'Orc Raider',  2, 4, COL.red);
token('enemy', 'Orc Raider',  0, 1, COL.red);

// =====================================================================
// THE GLITTERHAME  (Yorrin, trogs, bolt-hole — investigation/social)
// =====================================================================

label(-3, 0, 'THE GLITTERHAME', COL.yellow);

// Natural cavern (glittering wet limestone), water threading downhill
fill(-6, -6, 5, -1, COL.green);
label(-6, -1, 'wet caverns', COL.green);
label(4, -2, 'glowcaps', COL.lime); // seeded healing
label(4, -3, '(heal 1d6)', COL.lime);
label(-1, -1, 'streams ↓', COL.cyan);

// Yorrin's cage (near the water, east-central)
label(2, -1, "Yorrin's cage", COL.cyan);
token('npc', 'Yorrin Ashfell', 2, -1, COL.cyan);

// The troglodyte den (SW corner) — avoidable combat 3b
fill(-6, -6, -4, -4, COL.gray);
label(-6, -4, 'TROG DEN', COL.red);
label(-6, -6, '(skirt via', COL.gray);
label(-5, -6, 'E crawl)', COL.gray);
token('enemy', 'Troglodyte',       -5, -4, COL.red);
token('enemy', 'Troglodyte',       -6, -5, COL.red);
token('enemy', 'Troglodyte',       -4, -5, COL.red);
token('enemy', 'Troglodyte',       -5, -6, COL.red);
token('enemy', 'Trog Mystic',      -5, -5, COL.red);

// The eastern crawl (the quiet way down — skirts the trogs)
label(5, -4, 'E crawl ↓', COL.lime);

// The Bolt-hole (concealed dwarven door — the ONE full rest; costs a threshold)
fill(4, -1, 5, 0, COL.orange);
label(4, 0, 'BOLT-HOLE', COL.orange);
label(5, 0, '(rest: +1', COL.orange);
label(4, -1, 'threshold)', COL.orange);

// =====================================================================
// THE SINKHOLE  (optional hazard — the roper) [east spur]
// =====================================================================

label(6, -9, 'THE SINKHOLE', COL.yellow);
fill(6, -13, 10, -9, COL.blue);
label(6, -9, 'flooded', COL.blue);
label(7, -10, 'sinkhole', COL.blue);
label(8, -11, 'river ford', COL.cyan);
label(6, -13, '(optional —', COL.gray);
label(7, -13, 'roper lurks)', COL.gray);
// the roper, disguised as a stalagmite (rooted; you can leave)
token('enemy', 'Roper', 8, -10, COL.red);
label(9, -10, '(false stone)', COL.gray);
// the main route bypasses it (the collapsed stair goes around)
label(3, -8, 'stair down ↓', COL.gray);
label(5, -12, '(bypass →', COL.lime);
label(6, -12, 'Foundry)', COL.lime);

// =====================================================================
// THE FOUNDRY  (combat 4 — duergar; the shade; BOTH win-buttons)
// =====================================================================

label(-3, -15, 'THE FOUNDRY', COL.yellow);

// The great dwarven workhall
fill(-6, -22, 5, -16, COL.gray);
label(-6, -16, "Durgeddin's forge", COL.gray);

// The furnaces (two relit) + the great anvil
label(-6, -18, 'furnaces', COL.orange);
label(-6, -19, '(relit)', COL.orange);
label(-2, -20, 'great anvil', COL.gray);

// Durgeddin's shade — hammering the cold anvil (the tragic core)
token('npc', "Durgeddin's Shade", -2, -19, COL.purple);
label(-1, -20, '(the shade)', COL.purple);

// The black-blade cache / racks (WIN-BUTTON #1 — the real stock)
fill(2, -18, 4, -17, COL.purple);
label(2, -17, 'BLACK-BLADE', COL.purple);
label(3, -18, 'CACHE', COL.purple);

// A working dwarven blade-trap guards the approach to the cache
label(1, -17, '⚠trap', COL.red);
label(1, -18, '(3d6)', COL.red);

// The river channel + the duergar's barge (loads the cache if ROUSED)
fill(-6, -22, 5, -22, COL.blue);
label(-6, -22, 'river channel →', COL.cyan);
label(3, -22, 'BARGE', COL.orange);
label(4, -22, '(cache flees', COL.orange);
label(5, -22, 'if roused)', COL.orange);

// THE SLUICE-CONTROLS (WIN-BUTTON #2 — carved diagram; drains the lake)
fill(-6, -21, -5, -20, COL.cyan);
label(-6, -20, 'SLUICE', COL.cyan);
label(-5, -20, 'CONTROLS', COL.cyan);
label(-6, -21, '(drain diagram)', COL.cyan);

// Moradin shrine-nook — the mercy-cache (2 potions + fire-oil)
label(5, -16, 'shrine', COL.yellow);
label(5, -17, '(2 potions,', COL.cyan);
label(5, -18, 'fire-oil)', COL.cyan);

// The duergar salvage crew (combat 4)
token('enemy', 'Xazandra',  0, -18, COL.red); // overseer; flees to the lake
token('enemy', 'Duergar',  -1, -17, COL.red);
token('enemy', 'Duergar',   1, -19, COL.red);
token('enemy', 'Duergar',  -3, -18, COL.red);

// The way down to the lake
label(0, -23, 'down to the lake ↓', COL.gray);

// =====================================================================
// THE BLACK LAKE  (boss — Nightscale)
// =====================================================================

label(-3, -25, 'THE BLACK LAKE', COL.yellow);

// The flooded cavern
fill(-6, -32, 5, -26, COL.blue);
label(-6, -26, 'flooded cavern', COL.blue);
label(3, -27, 'acid-pitting', COL.gray);

// The shore of wet gravel & old bones (where the party arrives / fights)
fill(-6, -26, 5, -26, COL.gray);
label(-6, -25, 'gravel shore', COL.gray);

// The dwarven gate-wheel on the shore (WIN-BUTTON #2 trigger — drains over 3 rounds)
fill(-6, -27, -5, -27, COL.cyan);
label(-6, -27, 'GATE-WHEEL', COL.cyan);
label(-5, -27, '(drain: 3 rds', COL.cyan);
label(-6, -28, '→ strand her)', COL.cyan);

// The hoard (half-sunk in the shallows / on her shelf)
label(4, -30, 'HOARD', COL.yellow);
label(4, -31, '(600-900g,', COL.cyan);
label(4, -32, 'gems, potions)', COL.cyan);

// Nightscale — on her rock shelf above the waterline
fill(2, -31, 4, -30, COL.gray);
label(2, -30, 'rock shelf', COL.gray);
token('enemy', 'Nightscale', 3, -30, COL.red);
label(2, -31, '(young black', COL.red);
label(3, -31, 'dragon)', COL.red);

// ======== OUTPUT ========

const output = {
  format: 'dnd-map-v1',
  name: 'The Forge of Fury',
  description:
    'Pre-built map for the one-shot adventure — a vertical descent into the ruined dwarven hold of ' +
    'Khundrukar. The surface gate is at the TOP (positive Y); the dungeon sinks DOWNWARD (negative Y) ' +
    'to the Black Lake at the bottom. Zones top-to-bottom: the Mountain Door (orc sentries, the chasm ' +
    'and rope bridge); Great Ulfe\'s Hall (the half-ogre chief and his Durgeddin black axe — win-button #1); ' +
    'the Glitterhame (Yorrin the captive dwarf, the troglodyte den [skirtable via the east crawl], the ' +
    'bolt-hole rest, glowcap healing); the Sinkhole (optional roper hazard on an east spur — bypassable); ' +
    'the Foundry (the duergar salvage crew, Durgeddin\'s shade, and BOTH win-buttons — the black-blade cache ' +
    'and the sluice-controls, plus a working blade-trap and a Moradin mercy-cache); and the Black Lake ' +
    '(the boss Nightscale on her shelf, the hoard, and the shore gate-wheel that drains the lake to strand ' +
    'her — win-button #2). NPC and enemy tokens are placed. Player tokens are NOT included — drop them at ' +
    'PLAYERS START on the road outside the gate. Turn Fog of War ON before play and reveal as the party descends.',
  exportedAt: '2026-07-01',
  map: {
    fogEnabled: false,
    showAll: false,
    labels,
    revealed: {},
    tokens,
  },
};

const outPath = path.join(__dirname, 'map.json');
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`Wrote ${outPath}`);
console.log(`  ${Object.keys(labels).length} labels`);
console.log(`  ${tokens.length} tokens`);
