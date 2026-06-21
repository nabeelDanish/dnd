'use strict';

// ========== Config ==========
const GRID_SIZE = 50;
const CHANNEL_NAME = 'dnd-map-v1';
const STORAGE_KEY = 'dnd-map-state-v1';
const COLORS = [
  '#ef4444', '#f97316', '#f59e0b', '#84cc16',
  '#10b981', '#06b6d4', '#3b82f6', '#8b5cf6',
  '#ec4899', '#78716c',
];
const TOKEN_COLORS = {
  player: '#16a34a',
  enemy:  '#dc2626',
  npc:    '#3b82f6',
};
const MIN_ZOOM = 0.25;
const MAX_ZOOM = 3;
const LOG_MAX = 200;

// ========== View mode ==========
const params = new URLSearchParams(location.search);
const isDM = params.get('view') !== 'player';
const viewLabel = isDM ? 'DM' : 'Player';
document.body.dataset.view = isDM ? 'dm' : 'player';
document.getElementById('view-tag').textContent = isDM ? 'DM VIEW' : 'PLAYER VIEW';
document.title = (isDM ? 'DM' : 'Player') + ' — D&D Map';

// ========== State ==========
function defaultState() {
  return {
    fogEnabled: false,
    showAll: false,
    camera: { x: 0, y: 0, zoom: 1 },
    labels: {},   // "gx,gy" -> { text, color }
    revealed: {}, // "gx,gy" -> true (revealed squares when fog is on)
    tokens: [],   // [{ id, type, name, color, x, y }]
    log: [],      // [{ id, ts, text, who, sides, n, modifier, rolls, total }]
  };
}
let state = defaultState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state = { ...defaultState(), ...parsed };
    // Reset camera per-tab so DM and Player can pan independently
    state.camera = { x: 0, y: 0, zoom: 1 };
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
}
function saveState() {
  try {
    // Don't save the per-tab camera into shared storage
    const { camera, ...rest } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
  } catch (e) {}
}

// ========== Per-tab UI state ==========
const ui = {
  tool: 'select',          // 'select' | 'token' | 'label' | 'color' | 'fog'
  color: COLORS[0],
  tokenType: 'player',
  draggingToken: null,
  panning: null,
  spacePressed: false,
  fogPaintMode: null,
  hoveredSquare: null,
};

// ========== Sync (BroadcastChannel) ==========
const channel = new BroadcastChannel(CHANNEL_NAME);

channel.onmessage = (e) => {
  const msg = e.data;
  if (msg.type === 'ACTION') {
    apply(msg.action);
    saveState();
    render();
    renderLog();
    renderToolbar();
  }
};

function dispatch(action) {
  apply(action);
  saveState();
  channel.postMessage({ type: 'ACTION', action });
  render();
  renderLog();
  renderToolbar();
}

// ========== Reducer ==========
function apply(a) {
  switch (a.type) {
    case 'SET_LABEL':
      state.labels[a.key] = { text: a.text || '', color: a.color };
      break;
    case 'CLEAR_LABEL':
      delete state.labels[a.key];
      break;
    case 'SET_REVEAL':
      if (a.revealed) state.revealed[a.key] = true;
      else delete state.revealed[a.key];
      break;
    case 'CLEAR_FOG':
      state.revealed = {};
      break;
    case 'ADD_TOKEN':
      state.tokens.push(a.token);
      break;
    case 'MOVE_TOKEN': {
      const t = state.tokens.find(t => t.id === a.id);
      if (t) { t.x = a.x; t.y = a.y; }
      break;
    }
    case 'REMOVE_TOKEN':
      state.tokens = state.tokens.filter(t => t.id !== a.id);
      break;
    case 'RENAME_TOKEN': {
      const t = state.tokens.find(t => t.id === a.id);
      if (t) t.name = a.name;
      break;
    }
    case 'ROLL':
      state.log.push(a.entry);
      while (state.log.length > LOG_MAX) state.log.shift();
      break;
    case 'TOGGLE_FOG':
      state.fogEnabled = !state.fogEnabled;
      break;
    case 'TOGGLE_SHOW_ALL':
      state.showAll = !state.showAll;
      break;
    case 'CLEAR_LOG':
      state.log = [];
      break;
    case 'CLEAR_ALL': {
      const cam = state.camera;
      Object.assign(state, defaultState());
      state.camera = cam;
      break;
    }
    case 'IMPORT_MAP': {
      const m = a.map || {};
      state.fogEnabled = !!m.fogEnabled;
      state.showAll = !!m.showAll;
      state.labels = m.labels && typeof m.labels === 'object' ? { ...m.labels } : {};
      state.revealed = m.revealed && typeof m.revealed === 'object' ? { ...m.revealed } : {};
      state.tokens = Array.isArray(m.tokens) ? m.tokens.map(t => ({ ...t })) : [];
      state.camera = { x: 0, y: 0, zoom: 1 };
      break;
    }
  }
}

// ========== Helpers ==========
const key = (gx, gy) => `${gx},${gy}`;
const parseKey = (k) => { const [a, b] = k.split(',').map(Number); return { x: a, y: b }; };
const uid = (p) => p + '_' + Math.random().toString(36).slice(2, 9);

function isHiddenForViewer(gx, gy) {
  if (!state.fogEnabled) return false;
  if (state.revealed[key(gx, gy)]) return false;
  if (isDM) return false;
  if (state.showAll) return false;
  return true;
}

// Wrap a label onto lines, breaking ONLY between words. A single word is
// never split (the font is shrunk instead — see drawCellLabel); only the
// last-resort fallback passes hardBreak=true to split an over-wide word so
// it can never spill past the cell. Assumes ctx.font is already set.
function wrapLabel(ctx, text, maxW, hardBreak) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if (ctx.measureText(w).width <= maxW || !hardBreak) {
      // word fits (or we're not allowed to split it): place it whole
      if (!cur) cur = w;
      else if (ctx.measureText(cur + ' ' + w).width <= maxW) cur += ' ' + w;
      else { lines.push(cur); cur = w; }
    } else {
      // fallback only: word is wider than the cell — break it by character
      if (cur) { lines.push(cur); cur = ''; }
      let chunk = '';
      for (const ch of w) {
        if (!chunk || ctx.measureText(chunk + ch).width <= maxW) chunk += ch;
        else { lines.push(chunk); chunk = ch; }
      }
      cur = chunk;
    }
  }
  if (cur) lines.push(cur);
  return lines.length ? lines : [''];
}

// Draw a label centered in a cell. Find the LARGEST font at which the text —
// wrapped on spaces only — has every line fit the width and the whole block
// fit the height. So multi-word labels wrap, and a single long word simply
// shrinks to fit on one line. Only if nothing fits down to the floor do we
// character-break, so text is always contained within the cell.
function drawCellLabel(ctx, text, cx, cy, maxW, maxH) {
  const FLOOR = 5;
  const upper = Math.max(7, Math.min(16, Math.floor(maxH)));
  let chosen = null;
  for (let fs = upper; fs >= FLOOR; fs--) {
    ctx.font = `600 ${fs}px system-ui, sans-serif`;
    const lines = wrapLabel(ctx, text, maxW, false);
    const lineH = fs * 1.18;
    const widest = lines.reduce((m, l) => Math.max(m, ctx.measureText(l).width), 0);
    if (widest <= maxW && lines.length * lineH <= maxH) { chosen = { fs, lines, lineH }; break; }
  }
  if (!chosen) {
    // A word is wider than the whole cell even at the floor font — split it.
    ctx.font = `600 ${FLOOR}px system-ui, sans-serif`;
    chosen = { fs: FLOOR, lines: wrapLabel(ctx, text, maxW, true), lineH: FLOOR * 1.18 };
  }
  ctx.font = `600 ${chosen.fs}px system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let y = cy - (chosen.lines.length * chosen.lineH) / 2 + chosen.lineH / 2;
  for (const line of chosen.lines) { ctx.fillText(line, cx, y); y += chosen.lineH; }
}

// ========== Canvas ==========
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const r = canvas.parentElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = r.width * dpr;
  canvas.height = r.height * dpr;
  canvas.style.width = r.width + 'px';
  canvas.style.height = r.height + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  render();
}
window.addEventListener('resize', resizeCanvas);

function logicalSize() {
  return {
    w: parseFloat(canvas.style.width) || canvas.clientWidth,
    h: parseFloat(canvas.style.height) || canvas.clientHeight,
  };
}

function worldToScreen(wx, wy) {
  const { w, h } = logicalSize();
  return {
    x: (wx - state.camera.x) * state.camera.zoom + w / 2,
    y: (wy - state.camera.y) * state.camera.zoom + h / 2,
  };
}
function screenToWorld(sx, sy) {
  const { w, h } = logicalSize();
  return {
    x: (sx - w / 2) / state.camera.zoom + state.camera.x,
    y: (sy - h / 2) / state.camera.zoom + state.camera.y,
  };
}
function screenToGrid(sx, sy) {
  const w = screenToWorld(sx, sy);
  return { x: Math.floor(w.x / GRID_SIZE), y: Math.floor(w.y / GRID_SIZE) };
}

// ========== Render ==========
function render() {
  const { w: W, h: H } = logicalSize();
  if (!W) return;

  // Background
  ctx.fillStyle = '#fafafa';
  ctx.fillRect(0, 0, W, H);

  const z = state.camera.zoom;
  const tile = GRID_SIZE * z;

  // Visible grid range
  const tl = screenToGrid(0, 0);
  const br = screenToGrid(W, H);

  // 1) Label backgrounds
  for (const k in state.labels) {
    const { x: gx, y: gy } = parseKey(k);
    if (gx < tl.x - 1 || gx > br.x + 1 || gy < tl.y - 1 || gy > br.y + 1) continue;
    if (isHiddenForViewer(gx, gy)) continue;
    const p = worldToScreen(gx * GRID_SIZE, gy * GRID_SIZE);
    ctx.fillStyle = state.labels[k].color + 'C0';
    ctx.fillRect(p.x, p.y, tile, tile);
  }

  // 2) Grid lines
  ctx.strokeStyle = '#d4d4d8';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let gx = tl.x; gx <= br.x + 1; gx++) {
    const x = Math.round(worldToScreen(gx * GRID_SIZE, 0).x) + 0.5;
    ctx.moveTo(x, 0); ctx.lineTo(x, H);
  }
  for (let gy = tl.y; gy <= br.y + 1; gy++) {
    const y = Math.round(worldToScreen(0, gy * GRID_SIZE).y) + 0.5;
    ctx.moveTo(0, y); ctx.lineTo(W, y);
  }
  ctx.stroke();

  // Stronger lines every 5 squares
  ctx.strokeStyle = '#a1a1aa';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let gx = tl.x; gx <= br.x + 1; gx++) {
    if (gx % 5 !== 0) continue;
    const x = Math.round(worldToScreen(gx * GRID_SIZE, 0).x) + 0.5;
    ctx.moveTo(x, 0); ctx.lineTo(x, H);
  }
  for (let gy = tl.y; gy <= br.y + 1; gy++) {
    if (gy % 5 !== 0) continue;
    const y = Math.round(worldToScreen(0, gy * GRID_SIZE).y) + 0.5;
    ctx.moveTo(0, y); ctx.lineTo(W, y);
  }
  ctx.stroke();

  // 3) Origin marker
  const o = worldToScreen(0, 0);
  if (o.x >= -10 && o.x <= W + 10 && o.y >= -10 && o.y <= H + 10) {
    ctx.fillStyle = '#71717a';
    ctx.beginPath();
    ctx.arc(o.x, o.y, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  // 4) Label text — wrapped + auto-shrunk to stay inside the cell
  const labelPad = Math.max(2, tile * 0.08);
  const labelMaxW = tile - labelPad * 2;
  const labelMaxH = tile - labelPad * 2;
  ctx.fillStyle = '#18181b';
  for (const k in state.labels) {
    const { x: gx, y: gy } = parseKey(k);
    const lbl = state.labels[k];
    if (!lbl.text) continue;
    if (gx < tl.x - 1 || gx > br.x + 1 || gy < tl.y - 1 || gy > br.y + 1) continue;
    if (isHiddenForViewer(gx, gy)) continue;
    const c = worldToScreen(gx * GRID_SIZE + GRID_SIZE / 2, gy * GRID_SIZE + GRID_SIZE / 2);
    drawCellLabel(ctx, lbl.text, c.x, c.y, labelMaxW, labelMaxH);
  }

  // 5) Tokens
  for (const t of state.tokens) {
    if (isHiddenForViewer(t.x, t.y)) continue;
    const c = worldToScreen(t.x * GRID_SIZE + GRID_SIZE / 2, t.y * GRID_SIZE + GRID_SIZE / 2);
    const r = tile * 0.36;

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.beginPath();
    ctx.arc(c.x + 1, c.y + 2, r, 0, Math.PI * 2);
    ctx.fill();

    // Body
    ctx.fillStyle = t.color;
    ctx.strokeStyle = t.type === 'enemy' ? '#7f1d1d'
                    : t.type === 'npc'   ? '#1e3a8a'
                    : '#14532d';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Initials inside
    if (t.name && z > 0.5) {
      const initials = t.name.trim().split(/\s+/).map(s => s[0]).join('').slice(0, 2).toUpperCase();
      const fs = Math.max(10, r * 0.85);
      ctx.fillStyle = 'white';
      ctx.font = `700 ${fs}px system-ui`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(initials, c.x, c.y);
    }

    // Name below
    if (t.name && z > 0.6) {
      const fs = Math.max(10, 11 * z);
      const text = t.name;
      ctx.font = `500 ${fs}px system-ui`;
      const metrics = ctx.measureText(text);
      const padX = 4, padY = 1;
      const tw = metrics.width + padX * 2;
      const th = fs + padY * 2;
      const tx = c.x - tw / 2;
      const ty = c.y + r + 4;
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.fillRect(tx, ty, tw, th);
      ctx.strokeStyle = '#e4e4e7';
      ctx.lineWidth = 1;
      ctx.strokeRect(tx + 0.5, ty + 0.5, tw - 1, th - 1);
      ctx.fillStyle = '#18181b';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(text, c.x, ty + padY);
    }
  }

  // 6) Fog overlay
  if (state.fogEnabled) {
    let fillStyle = null;
    if (isDM) {
      fillStyle = 'rgba(15, 23, 42, 0.42)';
    } else if (!state.showAll) {
      fillStyle = '#0b0b14';
    }
    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      for (let gx = tl.x; gx <= br.x; gx++) {
        for (let gy = tl.y; gy <= br.y; gy++) {
          if (state.revealed[key(gx, gy)]) continue;
          const p = worldToScreen(gx * GRID_SIZE, gy * GRID_SIZE);
          ctx.fillRect(p.x, p.y, tile, tile);
        }
      }
    }
  }

  // 7) Hover highlight (DM only)
  if (isDM && ui.hoveredSquare && ui.tool !== 'select') {
    const p = worldToScreen(ui.hoveredSquare.x * GRID_SIZE, ui.hoveredSquare.y * GRID_SIZE);
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.strokeRect(p.x + 1, p.y + 1, tile - 2, tile - 2);
  }
}

// ========== Input ==========
function getMousePos(e) {
  const r = canvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}

function findTokenAtScreen(sx, sy) {
  const w = screenToWorld(sx, sy);
  // Iterate in reverse so the top-rendered token wins
  for (let i = state.tokens.length - 1; i >= 0; i--) {
    const t = state.tokens[i];
    if (isHiddenForViewer(t.x, t.y)) continue;
    const cx = t.x * GRID_SIZE + GRID_SIZE / 2;
    const cy = t.y * GRID_SIZE + GRID_SIZE / 2;
    const r = GRID_SIZE * 0.38;
    const dx = w.x - cx, dy = w.y - cy;
    if (dx * dx + dy * dy <= r * r) return t;
  }
  return null;
}

canvas.addEventListener('mousedown', (e) => {
  const { x: sx, y: sy } = getMousePos(e);

  // Pan: space+drag OR middle-click drag
  if (ui.spacePressed || e.button === 1) {
    e.preventDefault();
    ui.panning = {
      startX: sx, startY: sy,
      startCamX: state.camera.x, startCamY: state.camera.y,
    };
    document.body.classList.add('panning-active');
    return;
  }

  if (!isDM) return;
  if (e.button !== 0) return;

  const grid = screenToGrid(sx, sy);
  const k = key(grid.x, grid.y);

  if (ui.tool === 'select') {
    const tok = findTokenAtScreen(sx, sy);
    if (tok) {
      ui.draggingToken = { id: tok.id, lastX: tok.x, lastY: tok.y };
    }
  } else if (ui.tool === 'label') {
    const existing = state.labels[k];
    const initial = existing?.text ?? '';
    const text = prompt('Label text (leave blank to clear):', initial);
    if (text === null) return;
    if (text === '') dispatch({ type: 'CLEAR_LABEL', key: k });
    else dispatch({ type: 'SET_LABEL', key: k, text, color: ui.color });
  } else if (ui.tool === 'color') {
    const existing = state.labels[k];
    if (existing && existing.color === ui.color && !existing.text) {
      dispatch({ type: 'CLEAR_LABEL', key: k });
    } else {
      dispatch({ type: 'SET_LABEL', key: k, text: existing?.text || '', color: ui.color });
    }
  } else if (ui.tool === 'fog') {
    const wasRevealed = !!state.revealed[k];
    ui.fogPaintMode = !wasRevealed;
    dispatch({ type: 'SET_REVEAL', key: k, revealed: !wasRevealed });
  } else if (ui.tool === 'token') {
    const typeName = ui.tokenType === 'player' ? 'Player' : ui.tokenType === 'enemy' ? 'Enemy' : 'NPC';
    const name = prompt(`${typeName} name:`, '');
    if (name === null) return;
    const fallback = { player: 'PC', enemy: 'Enemy', npc: 'NPC' }[ui.tokenType];
    dispatch({
      type: 'ADD_TOKEN',
      token: {
        id: uid('t'),
        type: ui.tokenType,
        name: name || fallback,
        color: TOKEN_COLORS[ui.tokenType],
        x: grid.x, y: grid.y,
      },
    });
  }
});

canvas.addEventListener('mousemove', (e) => {
  const { x: sx, y: sy } = getMousePos(e);

  if (ui.panning) {
    state.camera.x = ui.panning.startCamX - (sx - ui.panning.startX) / state.camera.zoom;
    state.camera.y = ui.panning.startCamY - (sy - ui.panning.startY) / state.camera.zoom;
    render();
    return;
  }

  if (!isDM) return;

  const grid = screenToGrid(sx, sy);

  if (ui.draggingToken) {
    if (grid.x !== ui.draggingToken.lastX || grid.y !== ui.draggingToken.lastY) {
      ui.draggingToken.lastX = grid.x;
      ui.draggingToken.lastY = grid.y;
      const t = state.tokens.find(t => t.id === ui.draggingToken.id);
      if (t) { t.x = grid.x; t.y = grid.y; }
      render();
    }
    return;
  }

  if (ui.tool === 'fog' && e.buttons === 1 && ui.fogPaintMode !== null) {
    const k = key(grid.x, grid.y);
    const currently = !!state.revealed[k];
    if (currently !== ui.fogPaintMode) {
      dispatch({ type: 'SET_REVEAL', key: k, revealed: ui.fogPaintMode });
    }
    return;
  }

  // Hover update
  if (!ui.hoveredSquare || ui.hoveredSquare.x !== grid.x || ui.hoveredSquare.y !== grid.y) {
    ui.hoveredSquare = grid;
    render();
  }
});

canvas.addEventListener('mouseup', () => {
  if (ui.panning) {
    ui.panning = null;
    document.body.classList.remove('panning-active');
  }
  if (ui.draggingToken) {
    const t = state.tokens.find(t => t.id === ui.draggingToken.id);
    if (t) dispatch({ type: 'MOVE_TOKEN', id: t.id, x: t.x, y: t.y });
    ui.draggingToken = null;
  }
  ui.fogPaintMode = null;
});

canvas.addEventListener('mouseleave', () => {
  if (ui.hoveredSquare) { ui.hoveredSquare = null; render(); }
});

canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  const { x: sx, y: sy } = getMousePos(e);
  const before = screenToWorld(sx, sy);
  const factor = Math.pow(1.0018, -e.deltaY);
  state.camera.zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, state.camera.zoom * factor));
  const after = screenToWorld(sx, sy);
  state.camera.x += before.x - after.x;
  state.camera.y += before.y - after.y;
  render();
}, { passive: false });

canvas.addEventListener('contextmenu', (e) => {
  if (!isDM) { e.preventDefault(); return; }
  e.preventDefault();
  const { x: sx, y: sy } = getMousePos(e);
  const tok = findTokenAtScreen(sx, sy);
  if (!tok) return;
  const choice = prompt(
    `"${tok.name}" (${tok.type})\n\nType "rename" to rename, "delete" to remove, or Cancel:`,
    'rename'
  );
  if (!choice) return;
  if (choice === 'delete') {
    if (confirm(`Delete ${tok.name}?`)) {
      dispatch({ type: 'REMOVE_TOKEN', id: tok.id });
    }
  } else if (choice === 'rename') {
    const newName = prompt('New name:', tok.name);
    if (newName !== null && newName.trim()) {
      dispatch({ type: 'RENAME_TOKEN', id: tok.id, name: newName.trim() });
    }
  }
});

window.addEventListener('keydown', (e) => {
  if (document.activeElement?.tagName === 'INPUT') return;
  if (e.code === 'Space') {
    e.preventDefault();
    if (!ui.spacePressed) {
      ui.spacePressed = true;
      document.body.classList.add('panning');
    }
  } else if (isDM) {
    if (e.code === 'KeyS' && !e.metaKey && !e.ctrlKey) setTool('select');
    else if (e.code === 'KeyT' && !e.metaKey && !e.ctrlKey) setTool('token');
    else if (e.code === 'KeyL' && !e.metaKey && !e.ctrlKey) setTool('label');
    else if (e.code === 'KeyC' && !e.metaKey && !e.ctrlKey) setTool('color');
    else if (e.code === 'KeyF' && !e.metaKey && !e.ctrlKey) setTool('fog');
  }
});
window.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    ui.spacePressed = false;
    document.body.classList.remove('panning');
  }
});

// ========== Toolbar ==========
const TOOLS = [
  { id: 'select', label: 'Select',  hint: 'Drag tokens · S' },
  { id: 'token',  label: 'Token +', hint: 'Click to place · T' },
  { id: 'label',  label: 'Label',   hint: 'Click for text · L' },
  { id: 'color',  label: 'Color',   hint: 'Tint a square · C' },
  { id: 'fog',    label: 'Fog',     hint: 'Click/drag to paint · F' },
];

function setTool(toolId) {
  ui.tool = toolId;
  renderToolbar();
}

function renderToolbar() {
  const bar = document.getElementById('tools');
  if (!isDM) { bar.style.display = 'none'; return; }

  bar.innerHTML = '<div class="section-title">Tools</div>';

  for (const t of TOOLS) {
    const btn = document.createElement('button');
    btn.className = 'tool' + (ui.tool === t.id ? ' active' : '');
    btn.innerHTML = `<div class="tool-label">${t.label}</div><div class="tool-hint">${t.hint}</div>`;
    btn.onclick = () => setTool(t.id);
    bar.appendChild(btn);
  }

  // Tool-specific options
  const opts = document.createElement('div');
  opts.className = 'tool-options';
  opts.style.marginTop = '8px';

  if (ui.tool === 'label' || ui.tool === 'color') {
    opts.innerHTML = '<div class="section-title" style="margin-bottom:6px;">Color</div>';
    const sw = document.createElement('div');
    sw.className = 'swatches';
    for (const c of COLORS) {
      const b = document.createElement('button');
      b.className = 'swatch' + (ui.color === c ? ' active' : '');
      b.style.background = c;
      b.onclick = () => { ui.color = c; renderToolbar(); };
      sw.appendChild(b);
    }
    opts.appendChild(sw);
    bar.appendChild(opts);
  } else if (ui.tool === 'token') {
    opts.innerHTML = '<div class="section-title" style="margin-bottom:6px;">Token Type</div>';
    const tt = document.createElement('div');
    tt.className = 'token-type';
    const labels = { player: 'Player', enemy: 'Enemy', npc: 'NPC' };
    for (const type of ['player', 'enemy', 'npc']) {
      const b = document.createElement('button');
      b.className = `tt-btn ${type}` + (ui.tokenType === type ? ' active' : '');
      b.textContent = labels[type];
      b.onclick = () => { ui.tokenType = type; renderToolbar(); };
      tt.appendChild(b);
    }
    opts.appendChild(tt);
    bar.appendChild(opts);
  } else if (ui.tool === 'fog') {
    opts.innerHTML = '<div class="section-title" style="margin-bottom:6px;">Fog Options</div>';
    const wrap = document.createElement('div');
    wrap.className = 'fog-opts';

    const fogBtn = document.createElement('button');
    fogBtn.className = 'opt-btn' + (state.fogEnabled ? ' on' : '');
    fogBtn.innerHTML = `Fog of War <span class="state">${state.fogEnabled ? 'ON' : 'OFF'}</span>`;
    fogBtn.onclick = () => dispatch({ type: 'TOGGLE_FOG' });

    const showBtn = document.createElement('button');
    showBtn.className = 'opt-btn' + (state.showAll ? ' on' : '');
    showBtn.innerHTML = `Show All to Players <span class="state">${state.showAll ? 'ON' : 'OFF'}</span>`;
    showBtn.onclick = () => dispatch({ type: 'TOGGLE_SHOW_ALL' });

    const clearBtn = document.createElement('button');
    clearBtn.className = 'opt-btn';
    clearBtn.textContent = 'Clear All Revealed';
    clearBtn.onclick = () => {
      if (confirm('Reset fog (hide everything)?')) dispatch({ type: 'CLEAR_FOG' });
    };

    wrap.appendChild(fogBtn);
    wrap.appendChild(showBtn);
    wrap.appendChild(clearBtn);
    opts.appendChild(wrap);
    bar.appendChild(opts);
  }

  // Footer actions
  const sep = document.createElement('div');
  sep.className = 'separator';
  bar.appendChild(sep);

  const playerLink = document.createElement('a');
  playerLink.href = '?view=player';
  playerLink.target = '_blank';
  playerLink.className = 'link-btn';
  playerLink.textContent = 'Open Player View →';
  bar.appendChild(playerLink);

  const resetBtn = document.createElement('button');
  resetBtn.className = 'link-btn';
  resetBtn.textContent = 'Center on origin';
  resetBtn.onclick = () => {
    state.camera = { x: 0, y: 0, zoom: 1 };
    render();
  };
  bar.appendChild(resetBtn);

  const exportBtn = document.createElement('button');
  exportBtn.className = 'link-btn';
  exportBtn.textContent = 'Export map…';
  exportBtn.onclick = exportMap;
  bar.appendChild(exportBtn);

  const importBtn = document.createElement('button');
  importBtn.className = 'link-btn';
  importBtn.textContent = 'Import map…';
  importBtn.onclick = importMap;
  bar.appendChild(importBtn);

  const clearAllBtn = document.createElement('button');
  clearAllBtn.className = 'danger-btn';
  clearAllBtn.textContent = 'Clear Everything';
  clearAllBtn.onclick = () => {
    if (confirm('Delete all labels, tokens, fog, and log? This cannot be undone.')) {
      dispatch({ type: 'CLEAR_ALL' });
    }
  };
  bar.appendChild(clearAllBtn);
}

// ========== Dice ==========
function rollDie(sides) { return Math.floor(Math.random() * sides) + 1; }

function getDiceInputs() {
  const n = Math.max(1, Math.min(20, parseInt(document.getElementById('dice-count').value, 10) || 1));
  const mod = parseInt(document.getElementById('dice-mod').value, 10) || 0;
  return { n, mod };
}

function fmtMod(m) {
  if (m === 0) return '';
  return m > 0 ? ` + ${m}` : ` − ${-m}`;
}

function doRoll(sides) {
  const { n, mod } = getDiceInputs();
  const rolls = Array.from({ length: n }, () => rollDie(sides));
  const sum = rolls.reduce((a, b) => a + b, 0);
  const total = sum + mod;
  let text;
  if (n === 1 && mod === 0) {
    text = `d${sides}: [${rolls[0]}]`;
  } else if (n === 1) {
    text = `d${sides}${fmtMod(mod)}: [${rolls[0]}]${fmtMod(mod)} = ${total}`;
  } else {
    text = `${n}d${sides}${fmtMod(mod)}: [${rolls.join(', ')}] = ${sum}${fmtMod(mod)}` + (mod ? ` = ${total}` : '');
  }
  dispatch({
    type: 'ROLL',
    entry: {
      id: uid('r'),
      ts: Date.now(),
      sides, n, modifier: mod, rolls, total,
      text,
      who: viewLabel,
    },
  });
}

function doAdvRoll(advantage) {
  const { mod } = getDiceInputs();
  const a = rollDie(20), b = rollDie(20);
  const picked = advantage ? Math.max(a, b) : Math.min(a, b);
  const total = picked + mod;
  const tag = advantage ? 'ADV' : 'DIS';
  const text = `${tag} d20${fmtMod(mod)}: [${a}, ${b}] → ${picked}${mod ? ` = ${total}` : ''}`;
  dispatch({
    type: 'ROLL',
    entry: {
      id: uid('r'),
      ts: Date.now(),
      sides: 20, n: 1, modifier: mod, rolls: [picked], total,
      text,
      who: viewLabel,
    },
  });
}

function buildDicePanel() {
  const d = document.getElementById('dice');
  d.innerHTML = `
    <div class="section-title">Dice</div>
    <div class="dice-buttons">
      <button data-die="4">d4</button>
      <button data-die="6">d6</button>
      <button data-die="8">d8</button>
      <button data-die="10">d10</button>
      <button data-die="12">d12</button>
      <button data-die="20" class="primary">d20</button>
      <button data-die="100">d100</button>
    </div>
    <div class="dice-controls">
      <label>Count<input type="number" id="dice-count" value="1" min="1" max="20"></label>
      <label>Mod<input type="number" id="dice-mod" value="0" min="-20" max="20"></label>
    </div>
    <div class="adv-buttons">
      <button id="d20-adv">Adv (2d20↑)</button>
      <button id="d20-dis">Dis (2d20↓)</button>
    </div>
  `;
  d.querySelectorAll('[data-die]').forEach(btn => {
    btn.onclick = () => doRoll(+btn.dataset.die);
  });
  document.getElementById('d20-adv').onclick = () => doAdvRoll(true);
  document.getElementById('d20-dis').onclick = () => doAdvRoll(false);
}

// ========== Log ==========
function renderLog() {
  const el = document.getElementById('log');
  if (!state.log.length) {
    el.innerHTML = '<div class="log-empty">No rolls yet.</div>';
    return;
  }
  const rows = [];
  for (let i = state.log.length - 1; i >= 0; i--) {
    const e = state.log[i];
    const isCrit = e.sides === 20 && e.n === 1 && e.rolls.includes(20);
    const isFumble = e.sides === 20 && e.n === 1 && e.rolls.includes(1);
    let cls = 'log-row';
    if (isCrit) cls += ' crit';
    else if (isFumble) cls += ' fumble';
    const tag = isCrit ? ' CRIT!' : isFumble ? ' FUMBLE!' : '';
    rows.push(`<div class="${cls}"><span class="log-who">${e.who}</span><span class="log-text">${escapeHTML(e.text)}${tag}</span></div>`);
  }
  el.innerHTML = rows.join('');
}

function escapeHTML(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ========== Export / Import ==========
function exportMap() {
  const defaultName = 'Untitled Map';
  const nameInput = prompt('Map name for the exported file:', defaultName);
  if (nameInput === null) return;
  const name = nameInput.trim() || defaultName;
  const data = {
    format: 'dnd-map-v1',
    name,
    exportedAt: new Date().toISOString(),
    map: {
      fogEnabled: state.fogEnabled,
      showAll: state.showAll,
      labels: state.labels,
      revealed: state.revealed,
      tokens: state.tokens,
    },
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = name.replace(/[^a-z0-9._-]+/gi, '_').replace(/^_+|_+$/g, '');
  a.href = url;
  a.download = (safeName || 'map') + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function importMap() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json,.json';
  input.style.display = 'none';
  input.onchange = () => {
    const file = input.files && input.files[0];
    document.body.removeChild(input);
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!data || data.format !== 'dnd-map-v1') {
          alert('That file isn\'t a recognized map (expected format "dnd-map-v1").');
          return;
        }
        if (!data.map || typeof data.map !== 'object') {
          alert('Map data is missing or invalid.');
          return;
        }
        const labelCount = data.map.labels ? Object.keys(data.map.labels).length : 0;
        const tokenCount = Array.isArray(data.map.tokens) ? data.map.tokens.length : 0;
        const ok = confirm(
          `Import "${data.name || 'Untitled'}"?\n\n` +
          `${labelCount} labels · ${tokenCount} tokens\n\n` +
          `This replaces the current map. Roll log is kept.`
        );
        if (!ok) return;
        dispatch({ type: 'IMPORT_MAP', map: data.map });
      } catch (err) {
        alert('Failed to read map file: ' + err.message);
      }
    };
    reader.readAsText(file);
  };
  document.body.appendChild(input);
  input.click();
}

// ========== Init ==========
function init() {
  loadState();
  buildDicePanel();
  renderToolbar();
  renderLog();
  resizeCanvas();

  document.getElementById('clear-log').onclick = () => dispatch({ type: 'CLEAR_LOG' });

  // Center on first run with no content
  if (Object.keys(state.labels).length === 0 && state.tokens.length === 0) {
    state.camera = { x: 0, y: 0, zoom: 1 };
    render();
  }
}

init();
