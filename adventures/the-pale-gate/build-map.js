// build-map.js — generates map.json for "The Pale Gate"
// Run from this directory:    node build-map.js
//
// Coordinate convention (same as The Bell of Ashvane):
//   North is UP on the screen, which means north is the -Y direction.
//   Hollowmere village sits around (0, 0) → (0, 11), south of the gate.
//   The Pale Gate (the Lamp-post) on the green is the portal.
//   The Hollow descends "northward" into negative Y, mirroring the village.
//
// Vertical layout (top = north = deepest into the Hollow):
//
//   y < -28    TALLOW HALL (Pale Shepherd, Great Lantern, 2 Wax-bound)
//   y -27..-26 TALLOW HALL DOORS (combat 4: 2 Hollow Knights + Wax-bound + Wisp)
//   y -25..-21 LANTERN VAULT (the 7-lantern puzzle + sealed door)
//   y -20..-12 BONE ROAD (movement/investigation, soul-lanterns; Stillwater Pool west)
//   y -11..-6  ASHEN THRESHOLD (Hollow arrival; combat 2 wave 1 + combat 3 wave 2)
//   y -5..-1   THE PALE GATE (fog veil between the planes)
//   y  0..11   HOLLOWMERE VILLAGE (combat 1 ambush; investigation; the survivor)

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

// ======== Compass ========
label(-8, 0, '↑ N', COL.gray);

// =====================================================================
// HOLLOWMERE VILLAGE  (south, positive Y)
// =====================================================================

// Title banner
label(0, 0, 'HOLLOWMERE', COL.yellow);

// The road in + PLAYERS START
fill(0, 9, 1, 11, COL.lime);
label(1, 11, 'PLAYERS START', COL.pink);
label(0, 10, '(road from', COL.gray);
label(1, 10, 'Bridghaven)', COL.gray);

// The village green
fill(-2, 3, 3, 7, COL.green);
label(-2, 3, 'Village', COL.green);
label(-1, 3, 'Green', COL.green);

// The Lamp-post — the Pale Gate (portal)
label(0, 5, 'PALE GATE', COL.yellow);
label(1, 5, '(Lamp-post)', COL.yellow);
label(0, 6, '60 candles', COL.gray);

// Houses around the green (husks ambush from the doorways)
fill(-6, 3, -5, 4, COL.gray);
label(-6, 3, 'House', COL.gray);
fill(5, 3, 6, 4, COL.gray);
label(6, 3, 'House', COL.gray);
fill(-6, 7, -5, 8, COL.gray);
label(-6, 7, 'House', COL.gray);

// The cellar house — Maren hides here
fill(6, 7, 7, 8, COL.orange);
label(6, 7, 'House', COL.orange);
label(7, 8, '(cellar)', COL.orange);

// Chapel of the Sea-Watcher
fill(-8, 5, -7, 6, COL.cyan);
label(-8, 5, 'Chapel', COL.cyan);

// Well (where Maren was when it happened)
label(4, 8, 'Well', COL.gray);

// Moor / bog edges
label(-4, 11, 'black moor', COL.gray);
label(5, 11, 'peat bog', COL.gray);

// Survivor NPC
token('npc', 'Maren', 6, 8, COL.cyan);

// Combat 1 — ambush (4 Hollow Husk + 2 Pale Hound)
token('enemy', 'Husk',  -5, 4, COL.red);
token('enemy', 'Husk',   5, 4, COL.red);
token('enemy', 'Husk',  -5, 7, COL.red);
token('enemy', 'Husk',   6, 7, COL.red);
token('enemy', 'Hound', -2, 9, COL.red);
token('enemy', 'Hound',  3, 9, COL.red);

// =====================================================================
// THE PALE GATE — fog veil between the planes
// =====================================================================

fill(-1, -5, 2, -1, COL.purple);
label(0, -1, '↓ THROUGH', COL.purple);
label(1, -2, 'THE PALE', COL.purple);
label(0, -3, 'GATE ↓', COL.purple);

// =====================================================================
// THE HOLLOW  (north / below, negative Y)
// =====================================================================

// ---- ASHEN THRESHOLD (mirror of the green) — combats 2 & 3 ----
fill(-4, -11, 4, -6, COL.gray);
label(-4, -6, 'Ashen', COL.gray);
label(-3, -6, 'Threshold', COL.gray);

// The dead lamp — the gate back out
label(0, -7, 'Dead Lamp', COL.yellow);
label(1, -8, '(gate back)', COL.yellow);

// Burnt mirror-houses
label(-4, -9, 'ruin', COL.gray);
label(4, -9, 'ruin', COL.gray);

// Wave 1 — 6 Hollow Husk + 2 Pale Hound
token('enemy', 'Husk',  -3, -9,  COL.red);
token('enemy', 'Husk',  -2, -10, COL.red);
token('enemy', 'Husk',   2, -10, COL.red);
token('enemy', 'Husk',   3, -9,  COL.red);
token('enemy', 'Husk',  -1, -11, COL.red);
token('enemy', 'Husk',   1, -11, COL.red);
token('enemy', 'Hound', -4, -8,  COL.red);
token('enemy', 'Hound',  4, -8,  COL.red);

// Wave 2 — arrives from the fog as wave 1 breaks
// (2 Wax-bound + 2 Pale Hound + 2 Lantern Wisp)
label(0, -11, '(wave 2 →', COL.orange);
label(1, -12, 'from fog)', COL.orange);
token('enemy', 'Wax-bound', -5, -11, COL.red);
token('enemy', 'Wax-bound',  5, -11, COL.red);
token('enemy', 'Hound',     -5, -9,  COL.red);
token('enemy', 'Hound',      5, -9,  COL.red);
token('enemy', 'Wisp',      -5, -6,  COL.red);
token('enemy', 'Wisp',       5, -6,  COL.red);

// ---- STILLWATER POOL (respite, west of the threshold) ----
fill(-8, -13, -6, -12, COL.blue);
label(-8, -12, 'Stillwater', COL.blue);
label(-7, -13, '(respite)', COL.blue);
label(-6, -13, 'mana draught', COL.cyan);
token('npc', 'Soul-lantern', -7, -12, COL.cyan);

// ---- BONE ROAD (movement & investigation) ----
const bonePath = [
  [0,-12], [0,-13],
  [-1,-14], [0,-14], [1,-14],
  [-1,-15], [0,-15],
  [1,-16], [0,-16],
  [-1,-17], [0,-17],
  [0,-18], [1,-18],
  [0,-19], [0,-20],
];
for (const [x, y] of bonePath) {
  labels[`${x},${y}`] = { text: '', color: COL.lime };
}
label(2, -13, 'Bone', COL.lime);
label(2, -14, 'Road', COL.lime);

// Dead white trees, hung with soul-lanterns
label(-2, -14, '† lantern', COL.yellow);
label(2, -16, 'lantern †', COL.yellow);
label(-2, -18, '† lantern', COL.yellow);
label(2, -19, 'lantern †', COL.yellow);

// Named souls who speak (clues)
token('npc', 'Old Tam', 2, -15, COL.cyan);
token('npc', 'Lila',   -2, -17, COL.cyan);

// ---- LANTERN VAULT (puzzle) ----
fill(-4, -25, 4, -21, COL.gray);
label(-4, -21, 'Lantern', COL.gray);
label(-3, -21, 'Vault', COL.gray);

// The brazier of pale fire
label(0, -23, 'Brazier', COL.orange);

// The seven lanterns (the puzzle). Solution: light Hearth, Loom, Net,
// Cradle, Bell; leave Plough and Grave dark. Hearth before Cradle;
// Loom before Bell.
label(-3, -22, 'Hearth', COL.purple);
label(-2, -22, 'Loom',   COL.purple);
label(-1, -22, 'Net',    COL.purple);
label(0,  -21, 'Plough', COL.purple);
label(1,  -22, 'Cradle', COL.purple);
label(2,  -22, 'Bell',   COL.purple);
label(3,  -22, 'Grave',  COL.purple);

// The sealed door at the foot of the vault
label(0, -25, 'Sealed Door', COL.gray);

// ---- TALLOW HALL DOORS (combat 4) ----
label(0, -26, 'Tallow Hall ↓', COL.orange);
token('enemy', 'Knight',    -1, -27, COL.red);
token('enemy', 'Knight',     1, -27, COL.red);
token('enemy', 'Wax-bound', -2, -26, COL.red);
token('enemy', 'Wisp',       2, -26, COL.red);

// ---- TALLOW HALL (boss) ----
fill(-5, -34, 5, -29, COL.gray);
label(-5, -29, 'TALLOW', COL.gray);
label(-4, -29, 'HALL', COL.gray);

// Walls hung with stolen soul-lanterns (a century of villages)
label(-5, -31, 'lanterns', COL.yellow);
label(5, -31, 'lanterns', COL.yellow);
label(-5, -33, 'lanterns', COL.yellow);
label(5, -33, 'lanterns', COL.yellow);

// The Great Lantern — the win condition (put it out to make him mortal)
label(0, -32, 'GREAT', COL.yellow);
label(0, -33, 'LANTERN', COL.yellow);

// The boss + his two Wax-bound
token('enemy', 'Pale Shepherd', 0, -31, COL.red);
token('enemy', 'Wax-bound',    -3, -30, COL.red);
token('enemy', 'Wax-bound',     3, -30, COL.red);

// ======== OUTPUT ========

const output = {
  format: 'dnd-map-v1',
  name: 'The Pale Gate',
  description:
    'Pre-built map for the one-shot adventure. Two planes stacked vertically: Hollowmere village ' +
    '(south, positive Y) with the green, the Lamp-post / Pale Gate, the houses, chapel, well, and the ' +
    "survivor's cellar; and the Hollow (north / negative Y) — the Ashen Threshold (combat waves 1 & 2), " +
    'the Stillwater Pool respite, the Bone Road with its soul-lanterns, the Lantern Vault puzzle, the ' +
    'Tallow Hall doors (guardian fight), and the Tallow Hall with the Great Lantern and the Pale Shepherd. ' +
    'NPC and enemy tokens are placed. Player tokens are NOT included — drop them at PLAYERS START on the ' +
    'south road. Turn Fog of War ON before play; it is what hides the Hollow until the party crosses the gate.',
  exportedAt: '2026-05-31',
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
