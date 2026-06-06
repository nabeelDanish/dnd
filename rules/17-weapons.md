# 17 — Weapons

Weapons have two parts: a **class** (what kind of weapon it is — sets the damage die, the ability, and the range) and a **material** (what it's forged from — adds flat damage). Everything else is flavor.

> This sheet replaces the old "Weapons" section of [11-equipment.md](11-equipment.md). Armor lives in [18-armor.md](18-armor.md); kits, consumables, and gear stay in [11-equipment.md](11-equipment.md).

## The attack, unchanged

> **Attack** = `d20 + primary ability + training (if trained in this weapon class)` vs. the target's Armor.
> **Damage** = `weapon die` + `material bonus` + `primary ability`.

Every weapon uses your class's **one primary ability** (Might/Agility/Mind/Spirit/Charisma) for attack *and* damage — see [06-attack-and-defense.md](06-attack-and-defense.md). Training affects the **hit**, never the damage. Material affects the **damage**, never the hit.

## Weapon classes

| Class | Die | Ability | Hands | Range | Notes |
|---|---|---|---|---|---|
| **Light melee** | `1d6` (`1d4` dagger) | your primary | one | Close | throwable, concealable; **dual-wield steps the die up** |
| **Medium melee** | `1d8` | your primary | one | Close | the default fighter weapon |
| **Heavy melee** | `1d10` | your primary | **two** | Close | no shield/off-hand; *Set to Strike* (plant to swing — [19-classes.md](19-classes.md)) |
| **Ranged** | `1d4`–`1d10` | your primary | one or two | Near/Far | the weapon entry gives the range; **not usable in heavy armor** |

> **All weapons use your class's primary ability.** The classic associations (Might for heavy, Agility for bows) now only *suggest* which primary a class is built around — the stat you actually add is whatever powers your class.

### Light melee — `1d6` (`1d4` dagger)
Dagger (`1d4`, throw to Near, concealable) · Shortsword · Hand axe (throw to Near) · Light mace / Club · Rapier.

**Dual-wielding** two light weapons (both hands, no shield): your damage die **steps up one size** — `1d4 → 1d6`, `1d6 → 1d8`. It's still **one attack per turn** ([06-attack-and-defense.md](06-attack-and-defense.md)); the off-hand blade is the upgrade, not a second strike. Versus a medium weapon, that's the **same `1d8` output without a shield slot — but mobile and throwable.** A single light weapon keeps a hand free (for a shield, a torch, or a thrown follow-up).

### Medium melee — `1d8`
Longsword · Battleaxe · Warhammer · Mace · Spear (throw to Near; reach 2 squares — counts as polearm). One-handed — pair with a **shield** (+2 Armor) or keep a hand free.

### Heavy melee — `1d10`, two-handed
Greatsword · Greataxe · Maul · Polearm / halberd / glaive (reach 2 squares). No shield or off-hand; **Set to Strike** — plant to swing ([19-classes.md](19-classes.md)).

### Ranged
| Weapon | Die | Range | Notes |
|---|---|---|---|
| Shortbow | `1d6` | Near | |
| Longbow | `1d8` | Far | |
| Light crossbow | `1d6` | Far | slow reload (fire + reload consumes your move) |
| Heavy crossbow | `1d10` | Far | two-handed, slow reload |
| Hand crossbow | `1d4` | Near | one-handed |
| Sling | `1d4` | Near | improvised; anyone can use |
| Thrown (dagger/axe/spear) | `1d6`/`1d6`/`1d8` | Near | |

## Materials — the metal/stone path

Every weapon is forged from a material on the **metal/stone ladder**. The material adds a **flat bonus to damage** — the same bonus whether it's a dagger or a greataxe. (The same ladder also governs heavy armor; see [18-armor.md](18-armor.md).)

| Grade | Material | Power tier | **Damage bonus** | Typical price |
|---|---|---|---|---|
| 1 | **Iron** | Apprentice (lvl 1–7) | `+0` | 10g |
| 2 | **Steel** | Apprentice (lvl 1–7) | `+1` | 30g |
| 3 | **Dwarven** | Veteran (lvl 8–14) | `+2` | 150g |
| 4 | **Orcish** | Veteran (lvl 8–14) | `+3` | 400g |
| 5 | **Ebony** | Master (lvl 15–20) | `+4` | 1,200g |
| 6 | **Daedric** | Master (lvl 15–20) | `+5` | 3,500g |

*Two-handed weapons (heavy melee, heavy crossbow) cost roughly 1.5× the listed price; daggers and slings about half.*

### How the tiers work
Materials are **pinned to the power tiers**, not hard-locked to level. You'll *find and afford* Iron/Steel as an apprentice, Dwarven/Orcish as a veteran, Ebony/Daedric as a master — because that's what shows up as loot and what your purse can reach. A GM can hand a higher-grade weapon to a low-level party as **treasure** — it's a story beat, like a minor magic item, and it's powerful precisely because it's ahead of the curve.

### Material on ranged weapons
Ranged weapons take a material too — it's the limbs, the head, the bolt-tips. A **Steel longbow** does `1d8 + 1 + Agility`; a **Daedric crossbow** does `1d10 + 5 + Agility`. Ammunition isn't tracked separately (per [11-equipment.md](11-equipment.md)); the weapon's grade is what matters.

## Crits and material

A natural 20 doubles the **damage dice** only. Material and ability are flat modifiers — added **once**, as normal.

> Daedric greatsword crit: `1d10 + 1d10 + 5 (material) + 5 (Might)` — the dice double; the `+10` does not.

## Why material never touches the attack roll

The game's accuracy is **bounded**: the attack ceiling is `d20+9`, and target defenses sit in a known band per tier (see [03-progression.md](03-progression.md) and [18-armor.md](18-armor.md)). If materials raised *attack bonuses*, that ceiling would break and monster math would unravel. So material is poured entirely into **damage** — which is *not* bounded the same way (monster HP scales with tier to absorb it). You hit no more often with a Daedric blade than an iron one; you just hit far harder.

## Worked examples

- **Apprentice Warrior, Might +4, Iron longsword (medium, trained):** attack `+4 +2 = +6` → damage `1d8 + 0 + 4` (avg **8.5**).
- **Veteran Warrior, Might +5, Dwarven greatsword (heavy, trained):** attack `+5 +3 = +8` → damage `1d10 + 2 + 5` (avg **12.5**).
- **Master Warrior, Might +5, Daedric greatsword:** attack `+5 +4 = +9` → damage `1d10 + 5 + 5` (avg **15.5**).
- **Veteran Scout, Agility +5, Dwarven longbow (trained):** attack `+5 +3 = +8` → damage `1d8 + 2 + 5` (avg **11.5**), `+1d6` Sneak Strike when it applies.
- **Apprentice Mage, Mind +4, Steel dagger (untrained — pure casters get no weapon perk):** attack `+4` → damage `1d4 + 1 + 4` (avg **7.5**). Mind powers the blade just as it powers the spells. *(But spells are the Mage's real weapon; see [10-spell-list.md](10-spell-list.md).)*

## What weapons don't have

- Weapon properties as a tagged sub-system (Finesse, Versatile, Loading) — folded into class + one-line notes.
- A material bonus to the **attack roll** — material is damage only.
- Per-arrow ammunition tracking.
- Separate "masterwork" tiers *on top of* materials — the material **is** the quality tier.
- A magic-weapon requirement to hit certain monsters — magic items have their own text; the GM says when it matters.
