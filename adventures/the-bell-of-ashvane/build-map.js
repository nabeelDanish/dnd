// build-map.js — generates map.json for "The Bell of Ashvane"
// Run from this directory:    node build-map.js
//
// Coordinate convention:
//   North is UP on the screen, which means north is the -Y direction.
//   The village sits around (0, 0) → (12, 14).
//   The Drowned Caves descend "northward" into the cliffs, at negative Y.
//
// Grid layout (top = north):
//
//   y < -32   BELL CHAMBER (Marraghan, Vesper Bell)
//   y -31..-27 WORSHIP POOL (Tobin, runes)
//   y -26      15ft DROP
//   y -25..-21 OUTER CHAMBER (hag-touched ambush)
//   y -20..-15 ENTRY TUNNEL
//   y -14      CAVE ENTRANCE (low-tide arch)
//   y -13..-2  CLIFF PATH (with Wind Cove branching east at y -10..-12)
//   y  0..10   ASHVANE VILLAGE
//   y 11..14   SEA

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
label(-4, -1, '↑ N', COL.gray);

// ======== ASHVANE VILLAGE ========

// Title banner
label(0, -1, 'ASHVANE', COL.yellow);
label(1, -1, 'VILLAGE', COL.yellow);

// Chapel — Elsa's sanctuary (where the bell once hung)
fill(-6, 4, -5, 5, COL.cyan);
label(-6, 4, 'Chapel', COL.cyan);
label(-5, 5, '(Elsa)', COL.cyan);

// Militia post — Captain Volk
fill(-6, 1, -5, 2, COL.gray);
label(-6, 1, 'Militia', COL.gray);
label(-5, 2, '(Volk)', COL.gray);

// Village Green
fill(0, 4, 2, 5, COL.green);
label(1, 4, 'Village', COL.green);
label(1, 5, 'Green', COL.green);

// PLAYERS START — where the DM drops the party
label(3, 5, 'PLAYERS START', COL.pink);

// The Golden Gull Inn — Karis recovering inside
fill(7, 4, 8, 5, COL.orange);
label(7, 4, 'Golden', COL.orange);
label(8, 4, 'Gull', COL.orange);
label(7, 5, '(inn)', COL.orange);
label(8, 5, '(Karis)', COL.orange);

// General store
label(8, 8, 'Store', COL.yellow);

// Dock — Hael mending nets
fill(3, 10, 5, 10, COL.gray);
label(4, 10, 'Dock', COL.gray);

// Sea south of the village
fill(-3, 11, 7, 14, COL.blue);
label(2, 12, 'Sea →', COL.blue);
label(2, 14, "(Marigold's path)", COL.blue);

// Village NPCs
token('npc', 'Elsa',  -5, 4, COL.blue);
token('npc', 'Volk',  -5, 1, COL.blue);
token('npc', 'Karis',  8, 4, COL.blue);
token('npc', 'Hael',   4, 10, COL.blue);

// ======== CLIFF PATH (going north) ========

const pathSquares = [
  [0,-2], [1,-2], [2,-2],
  [1,-3], [2,-3], [3,-3],
  [2,-4], [3,-4], [4,-4],
  [3,-5], [4,-5], [5,-5],
  [3,-6], [4,-6], [5,-6],
  [2,-7], [3,-7], [4,-7],
  [1,-8], [2,-8], [3,-8],
  [1,-9], [2,-9],
  [1,-10], [2,-10],
  [1,-11], [2,-11],
  [1,-12], [2,-12],
  [1,-13], [2,-13],
];
for (const [x, y] of pathSquares) {
  labels[`${x},${y}`] = { text: '', color: COL.yellow };
}
label(4, -6, 'Cliff', COL.yellow);
label(4, -5, 'Path', COL.yellow);

// Cliffs to the west of the path
fill(-3, -2, -1, -13, COL.gray);
label(-2, -7, '↑ Cliff', COL.gray);
label(-2, -8, 'face', COL.gray);

// Sea to the east of the path
fill(8, -8, 11, -2, COL.blue);
fill(8, -13, 11, -12, COL.blue);
label(10, -5, 'Sea', COL.blue);

// ======== WIND COVE (smuggler patrol) ========

fill(5, -12, 7, -11, COL.blue);
label(6, -11, 'Wind', COL.blue);
label(6, -12, 'Cove', COL.blue);

// Small boat pulled up at the cove
label(7, -11, 'Boat', COL.orange);

// Three smugglers (encounter 1)
token('enemy', 'Wek',   5, -10, COL.red);
token('enemy', 'Briar', 6, -10, COL.red);
token('enemy', 'Toma',  7, -10, COL.red);

// ======== CAVE ENTRANCE ========

fill(0, -14, 2, -14, COL.gray);
label(1, -14, 'Cave Entrance', COL.gray);
label(0, -14, '(low tide)', COL.gray);

// Entry tunnel
fill(0, -20, 1, -15, COL.gray);
label(0, -17, 'Tunnel', COL.gray);

// ======== OUTER CHAMBER ========

fill(-3, -25, 3, -21, COL.gray);
label(-3, -21, 'Outer', COL.gray);
label(-2, -21, 'Chamber', COL.gray);

// Side passage where hag-touched ambush from
fill(4, -24, 5, -23, COL.gray);
label(5, -23, '(passage)', COL.gray);

// Camp decorations
label(-2, -25, 'Bedrolls', COL.lime);
label(0, -25, 'Cookfire', COL.orange);

// Hag-Touched ambushers (Ren and Pell — formerly the smugglers)
token('enemy', 'Ren',  4, -23, COL.red);
token('enemy', 'Pell', 5, -24, COL.red);

// ======== THE 15 FT DROP ========

label(0, -26, '15ft drop ↓', COL.orange);

// ======== WORSHIP POOL ========

fill(-3, -31, 3, -27, COL.gray);
label(-3, -27, 'Worship', COL.gray);
label(-2, -27, 'Pool', COL.gray);

// Pool water in the center
fill(-1, -30, 1, -28, COL.blue);

// Tobin (kidnapped boy) tied in the center of the pool
token('npc', 'Tobin', 0, -29, COL.cyan);

// Rune-scratched stones ringing the pool
label(2, -29, 'Runes', COL.purple);
label(-2, -29, 'Runes', COL.purple);

// Drowned sailors face-down — one hides loot
label(-2, -28, 'Sailor', COL.gray);
label(2, -28, 'Sailor', COL.gray);
label(0, -31, 'Sailor (loot)', COL.yellow);

// ======== BELL CHAMBER ========

fill(-4, -37, 4, -32, COL.gray);
label(-4, -32, 'Bell', COL.gray);
label(-3, -32, 'Chamber', COL.gray);

// Stone pillar with the Vesper Bell hung on it
label(0, -34, 'VESPER BELL', COL.yellow);

// Marraghan's escape pool — she Tidal-Steps from any water
fill(-3, -36, -2, -35, COL.blue);
label(-3, -36, 'Hag', COL.blue);
label(-2, -36, 'Pool', COL.blue);

// Boss + minions
token('enemy', 'Marraghan',    1, -34, COL.red);
token('enemy', 'Hag-Touched', -2, -37, COL.red);
token('enemy', 'Hag-Touched',  2, -37, COL.red);

// ======== OUTPUT ========

const output = {
  format: 'dnd-map-v1',
  name: 'The Bell of Ashvane',
  description:
    'Pre-built map for the one-shot adventure. Covers Ashvane village (south), the cliff path north, ' +
    'Wind Cove (the smuggler patrol), and the Drowned Caves: entry tunnel, outer chamber, the worship pool ' +
    "with Tobin, and Marraghan's bell chamber. NPC and enemy tokens are placed. " +
    'Player tokens are NOT included — drop them at the PLAYERS START marker in the village green. ' +
    'Fog of War is disabled by default; the DM enables it and paints reveals during play.',
  exportedAt: '2026-05-30',
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
