# A Lean d20 RPG

A standalone tabletop RPG in the D&D tradition — **about one-third the rules of 5e**, with the depth kept. One resolution mechanic, one action per turn, one mana pool, classes built from a shared component vocabulary. A new player makes a character in ~15 minutes and plays their first turn correctly in 10.

> **The whole game on one page:** [rules/15-quickstart.md](rules/15-quickstart.md).

## The one rule

> Roll **d20 + ability + (training if you have it)** vs. a target number (**10 / 15 / 20**). Meet or beat it: success. Everything — combat, magic, sneaking, lying — is this rule with different numbers.

## Start here

1. Read the **[Quickstart](rules/15-quickstart.md)** (one page).
2. Skim **[Design Philosophy](rules/00-design-philosophy.md)** to see what's cut and why.
3. Make a character: **[Character Creation](rules/02-character-creation.md)** + pick a class from **[Classes](rules/19-classes.md)** (48 of them) on the **[blank sheet](character-sheet.md)**.
4. Run the included adventure: **[The Bell of Ashvane](adventures/the-bell-of-ashvane/adventure.md)**.

## Repository layout

```
rules/                 The rulebook, in chapters 00–20 (+ balance-notes)
adventures/            Ready-to-run adventures
  the-bell-of-ashvane/   a 4-hour one-shot + pre-made characters + battlemap
  the-falling-spire/     a level-20 one-shot + 3 fully-built pregens
map-tool/              Browser-based virtual tabletop (open index.html)
quick-ref/             A4 reference cards (PDF): weapons, armor, shop, classes, spells, ancestries
character-sheet.md     Fillable character sheet (→ character-sheet.pdf)
build-pdf/             Build scripts for the rulebook + quick-ref PDFs
build_pdf.py           Builds the 4-page character sheet PDF
```

## The rulebook (chapters)

| | | |
|---|---|---|
| 00 Design Philosophy | 07 HP, Damage & Death | 14 GM Guide |
| 01 Core Mechanic | 08 Conditions | 15 Quickstart |
| 02 Character Creation | 09 Magic | 16 Co-GM Guide |
| 03 Progression | 10 Spell Catalog | 17 Weapons |
| 04 Skills & Checks | 11 Equipment | 18 Armor |
| 05 Combat | 12 Monsters | 19 Classes |
| 06 Attack & Defense | 13 Encounters & Rewards | 20 Ancestries |
| | | balance-notes |

## What makes it different

- **Classes are generated, not bespoke.** A class = a legal combination of **3 components** (weapon types, an armor tier, schools of magic). You start with **2 signatures** (Racial + Class) and unlock **6 perks** from those components as you level. 48 classes from one vocabulary; no subclasses, no multiclassing.
- **One primary ability powers everything** — every weapon and spell attack uses your single main stat.
- **Materials, not "+1s."** Weapons and armor scale through a Skyrim-style material ladder (Iron → Steel → … → Daedric).
- **Heavy gear has a real cost** (no speed stat): heavy = the planted melee anchor (*Set to Strike*), light = mobile.
- **Magic is school-tagged** (Destruction · Conjuration · Alteration · Illusion · Restoration), cast from a Mind, Spirit, or Charisma pool — no spell slots, no concentration mini-game.

## Building the PDFs

Rendered via headless Google Chrome (macOS path baked in; otherwise open the generated `.html` and Print → Save as PDF).

```bash
node build-pdf/build.js        # → dnd-rules.pdf  (the full rulebook)
node build-pdf/build-refs.js   # → quick-ref/*.pdf (weapon & armor cards)
python3 build_pdf.py           # → character-sheet.pdf (4-page A4 sheet)
```

## Status

Personal-use project, actively iterated. The rules are internally consistent end-to-end; the *Bell of Ashvane* pre-mades still use the original four-class sheets (a content pass, not a rules issue).
