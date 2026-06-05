# 18 — Armor

Two categories: **light** and **heavy**. Each is tied to one material path and one ability. The material a piece is made from **sets** its Armor bonus — there's no separate "base + material" stacking.

> This sheet replaces the old "Armor" section of [11-equipment.md](11-equipment.md). Weapons are in [17-weapons.md](17-weapons.md).

## The two categories

| Category | Material path | Armor formula | Who's trained | Casting? |
|---|---|---|---|---|
| **Light** | leather / hide | `10 + Agility + material` | most classes | ✅ **all casting** |
| **Heavy** | metal / stone | `10 + Might + material` | heavy-armor classes | ❌ no spellcasting |

- **Light** rewards Agility — it's the skirmisher's and the caster's armor. It never restricts your rolls, and **any caster can cast freely in light armor** (this replaces the old "any armor blocks arcane casting" rule).
- **Heavy** rewards Might and reaches higher Armor totals, but it's Might-locked and **blocks all spellcasting**. Only fighting classes wear it (see [19-classes.md](19-classes.md)).
- **No armor** is the unarmored caster's choice — Armor `10 + Agility` (plus a shield) — taken by the naked glass-cannon classes to buy an extra component pick.
- **Heavy armor's combat cost** (see [19-classes.md](19-classes.md)): you **cannot use ranged weapons** while wearing it, and **Set to Strike** applies — if you *move and attack* the same turn, that attack is at **disadvantage** (and with a heavy weapon too, it's *move **or** attack*, not both). Heavy armor is the planted melee line.

### Wearing armor you're not trained in
Disadvantage on all Agility and Might rolls, **and** you cannot cast spells. (A Priest in heavy armor: disadvantaged and silenced. Don't.)

## Light armor — the leather/hide ladder

Agility-based. The material sets the bonus.

| Grade | Material | Power tier | **Armor bonus** | Price |
|---|---|---|---|---|
| 1 | **Hide** | Apprentice (1–3) | `+1` | 5g |
| 2 | **Leather** | Apprentice (1–3) | `+2` | 20g |
| 3 | **Studded leather** | Veteran (4–7) | `+3` | 120g |
| 4 | **Scaled** | Veteran (4–7) | `+4` | 500g |
| 5 | **Dragonscale** | Master (8–10) | `+5` | 4,000g |

> **Light, by Agility:** a Scout (Agility +5) in Scaled = `10 + 5 + 4 = 19`. A Priest (Agility +1) in Scaled = `10 + 1 + 4 = 15` — the flat material still helps a low-Agility caster, even though Agility doesn't.

## Heavy armor — the metal/stone ladder

Might-based. Same six materials as weapons (see [17-weapons.md](17-weapons.md)); here the column that matters is the Armor bonus.

| Grade | Material | Power tier | **Armor bonus** | Price |
|---|---|---|---|---|
| 1 | **Iron** | Apprentice (1–3) | `+3` | 75g |
| 2 | **Steel** | Apprentice (1–3) | `+4` | 200g |
| 3 | **Dwarven** | Veteran (4–7) | `+5` | 800g |
| 4 | **Orcish** | Veteran (4–7) | `+6` | 2,000g |
| 5 | **Ebony** | Master (8–10) | `+7` | 5,000g |
| 6 | **Daedric** | Master (8–10) | `+8` | 12,000g |

> **Heavy, by Might:** a Warrior (Might +4) in Iron = `10 + 4 + 3 = 17` at level 1. The same Warrior (Might +5) in Daedric = `10 + 5 + 8 = 23` at level 10.

## Shields — `+1` / `+2` / `+3`, flat

Shields are the one thing that **adds on top** of your Armor. They are deliberately **material-agnostic** (a flat additive — letting them scale by material too would break bounded accuracy).

| Shield | Bonus | Notes |
|---|---|---|
| Buckler | `+1` | |
| Shield | `+2` | |
| Tower shield | `+3` | counts as both hands; treats difficult terrain as `−2` Speed |

One-handed slot — can't be used with two-handed weapons. A shield doesn't interfere with a Priest's divine casting in light armor.

## Expected defenses by tier *(for monster design)*

This is the spine of the bounded math. Materials are pinned to the power tiers so that monster attack bonuses, built per tier, keep pace. Build encounters against roughly these Armor values:

| Power tier | Light wearer (Agi primary) | Heavy wearer (Might primary) | Unarmored caster |
|---|---|---|---|
| **Apprentice (1–3)** | 15–17 | 16–18 | 11–13 |
| **Veteran (4–7)** | 17–19 | 19–21 | 12–14 |
| **Master (8–10)** | 19–20 | 21–23 | 13–15 |

A Tier-1 monster should be able to land on a 16–18 Armor on a meaningful fraction of swings; a Tier-3 monster, on a 21–23. If you hand a party gear *above* their tier (treasure), expect them to be harder to hit until the monsters catch up — that's the intended reward, used sparingly.

## Worked examples

- **Apprentice Scout, Agi +5, Leather:** `10 + 5 + 2 = 17`.
- **Apprentice Warrior, Might +4, Steel + Shield:** `10 + 4 + 4 + 2 = 20`.
- **Veteran Priest, Agi +1, Studded leather:** `10 + 1 + 3 = 14`, casts freely.
- **Master Warrior, Might +5, Daedric + Tower shield:** `10 + 5 + 8 + 3 = 26` — the hardest target the game produces. (Pair it with the loss of both hands and no casting.)

## What armor doesn't have

- A **medium** category. (Folded away: light + heavy only. Old chain shirts → reflavor as light or low heavy.)
- An Agility **cap** on light armor. (That was a medium-armor rule; gone.)
- A "base + material" stack — the material **is** the bonus.
- Material-scaled shields — shields are a flat `+1/+2/+3`.
- Encumbrance, don/doff timers, or per-piece slot tracking. (One armor, optionally one shield.)
- Spellcasting in heavy armor, for anyone.
