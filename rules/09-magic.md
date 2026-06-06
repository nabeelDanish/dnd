# 09 — Magic

Magic is the biggest source of rule-bloat in D&D. We do not let it bloat here. Many classes cast ([19-classes.md](19-classes.md)); all of them share one resource (**mana**), one of three **pools** (Mind, Spirit, or Charisma), and one casting mechanic that is the same as every other action in the game.

## The mana pool

Every casting class has a **mana pool**, fueled by one ability — its **pool**, set by the class:

- **Mind pool:** `level + Mind` mana per rest. *(Studied, arcane magic.)*
- **Spirit pool:** `level + Spirit` mana per rest. *(Devoted, divine/primal magic.)*
- **Charisma pool:** `level + Charisma` mana per rest. *(Innate magic — sorcery, pact, song.)*

The three pools are mechanically identical; they differ only in *which ability* fuels and aims the magic, and so in which **defense** the caster naturally has high. The pool is just *fuel and aim* — **spells themselves are tagged by school, not by ability** ([10-spell-list.md](10-spell-list.md)). A Mind-caster, a Spirit-caster, and a Charisma-caster can all cast the very same spell, each from their own pool. That's the only spell resource in the game. There are no 1st-level slots, 2nd-level slots, 3rd-level slots. There is no upcasting. There are no ritual slots. A spell costs N mana; you pay N mana; you cast the spell.

A typical level 1 Mage with Mind `+3` has `4` mana. A level 5 Priest with Spirit `+4` has `9`. By level 10, top-tier casters have ~`14` mana — enough for two or three big spells per rest, or a flurry of smaller ones.

Mana refreshes **only on a full rest**. There is no per-encounter recovery, no draining mana from objects, no scrolls that refund mana.

## Cantrips

**Cantrips cost 0 mana** and can be cast as often as the caster wants. They are the caster's "weapon attack" equivalent — when out of mana, you cast cantrips.

Cantrips do not scale with character level. A cantrip's damage is what the spell entry says, period. (This is the cut from [00-design-philosophy.md](00-design-philosophy.md): cantrips don't have damage tables that grow at levels 5/11/17.)

> **Principle — cantrips debuff, they don't deny.** Because a cantrip is free and repeatable, it may deal its damage line and impose at most a one-round, *disadvantage-grade* rider (a slow, a fumble on the target's next turn, a single attack set up against them). A cantrip may **never** take a creature's turn away (Stunned, Restrained, Downed) or grant blanket advantage to every attacker. Turn-denial and standing advantage are *paid* effects — Lesser tier and up (see *Hold Person*, *Bless*). If a cantrip would out-perform a 1- or 3-mana spell, it's mis-tiered.

Each caster knows **2 cantrips** at character creation, free, on top of their starting spells.

## Spell tiers

Spells come in four tiers by cost:

| Tier | Cost | Power |
|---|---|---|
| Cantrip | 0 mana | At-will utility, light damage, simple effects. |
| Lesser | 1 mana | Reliable combat or utility magic. *Shield*, *Cure Wounds*, *Sleep*. |
| Greater | 3 mana | Big effects. *Fireball*, *Hold Person*, *Fly*. |
| Master | 5 mana | Story-shaping. *Resurrection*, *Disintegrate*, *Wall of Force*. |

A caster at level 1 cannot pay for a Master spell. They can't even pay for a Greater. They have lesser spells and cantrips, and that's plenty.

Tier doesn't gate what spells you *know* — only what you can *cast*. A clever level 4 Priest who somehow learned *Resurrection* still can't cast it until they have 5 mana available.

## Spells known

You **know** a small list of spells; you cast from this list.

| Level | Spells known | New per level |
|---|---|---|
| 1 | 3 | (starting) |
| 2 | 3 | — |
| 3 | 4 | +1 |
| 4 | 4 | — |
| 5 | 5 | +1 |
| 6 | 5 | — |
| 7 | 6 | +1 |
| 8 | 7 | +1 (a bonus year) |
| 9 | 7 | — |
| 10 | 8 | +1 |

Plus your 2 cantrips, picked at level 1 and never gained again. (You can swap one cantrip for another at level 5 and again at level 10.)

When you pick a new spell at level-up, **it must be a tier you can currently afford**. You cannot pre-learn a Master spell at level 2.

At any level-up, you may swap **one spell you know for another** of the same or lower tier. Mages reread their grimoires; Priests revise their prayers.

## Casting a spell

> **Choose a spell you know. Pay its mana cost. Roll if the spell needs a roll. Resolve.**

That is the entire procedure. The "roll if the spell needs a roll" piece is the only piece with variety — see below.

> **Armor & casting.** You cast freely in **light or no armor**. **Heavy armor blocks all spellcasting** (see [18-armor.md](18-armor.md)).

### Spell attack rolls
Some spells require an attack roll. The caster rolls `d20 + pool + training` — every casting class is **trained in casting**, so the training bonus always applies — vs. the target's relevant defense (Armor, Mind, Spirit, or Charisma). On a hit, the spell does what it says.

Spell attack rolls follow the same rules as weapon attacks (see [06-attack-and-defense.md](06-attack-and-defense.md)): natural 20 is a critical (doubled dice on damage spells), natural 1 is a fumble (the spell sputters — the mana is spent and a complication occurs).

### Auto-hit spells
Some spells don't roll. **Magic Missile** is the classic — it hits, period, dealing fixed damage. Buffs, summons, and most utility spells are auto-hit: the caster pays mana, the spell happens.

### Area spells
A few spells target an area (Fireball's blast, Burning Hands' cone). For each creature in the area, the caster rolls a single attack vs. each creature's relevant defense. **The caster rolls once per target** — yes, this is up to five or six rolls for a big fireball. It's still faster than 5e's "everyone roll a save."

> **Why the caster rolls instead of the targets:** see [01-core-mechanic.md](01-core-mechanic.md), the active-player-rolls principle. It keeps the active turn moving fast and avoids stopping to ask seven creatures to roll dice.

### Save-or-suck spells
Spells like *Hold Person* or *Sleep* — in 5e these have a "save" mechanic. Here, the caster rolls `d20 + pool + training` vs. the target's Mind, Spirit, or Charisma defense (whichever the spell names). On a hit, the effect applies as written. On a miss, it doesn't, and the mana is still spent (you paid for the attempt, not the result).

## Range, targets, components

- **Range** is specified in the spell entry. Most combat spells have a "far" range (anywhere in the current scene).
- **Targets** are specified: "one creature," "all creatures in a 4-square cone," "a willing creature you touch."
- **Components.** Not tracked. If a spell needs a verbal element, you have to be able to speak; if somatic, you have to have a free hand; if material, it's assumed you have whatever you need. Exception: a few high-tier spells call for a rare, specific material (a diamond, a holy relic) — and the spell entry tells you that explicitly. Otherwise, no.

## Concentration

Replaced by a simpler rule: **a caster can have at most one ongoing spell active at a time.**

When you cast a new ongoing spell, any previous ongoing spell ends. An "ongoing spell" is one that lasts more than one round and that affects something — *Fly*, *Hold Person*, *Bless*, *Sanctuary*, etc. The spell entry tells you it's ongoing. Single-action spells (*Fireball*, *Cure Wounds*, *Magic Missile*) are not ongoing.

A **tethered summon counts as your one ongoing spell** (see the Summoning rules in [10-spell-list.md](10-spell-list.md)) — so you can't run a summon *and* another ongoing spell, and you can't field two summons. This is the lever that keeps Conjuration from flooding combat with extra bodies.

If the caster goes **Downed** (HP 0), all their ongoing spells end immediately (summons vanish).

If the caster takes damage **while concentrating** — there is no concentration check. The spell continues unless they go down. **This is a deliberate simplification.** No mid-fight save-or-lose-your-spell roll.

## Dispelling and counterspelling

- Most ongoing spells can be dispelled by the **Dispel Magic** spell (Greater, 3 mana). Caster rolls vs. the higher of `15` or `10 + target spell's tier × 5` (so dispelling a Master spell is Heroic, target 25).
- The **Counterspell** spell (Greater, 3 mana) can be used as a reaction to another caster's spell. Caster rolls vs. `10 + target spell's tier × 5`. On a hit, the target spell fails. The target keeps their mana — counterspelling is a spell duel, not theft.
- Otherwise, ongoing effects last for their duration.

These two spells are the only "anti-magic" toolkit in the game. There is no Antimagic Field, no Dispel Evil and Good as a separate thing, no Mage's Disjunction. If the GM wants a high-magic effect, they invent it for the story.

## Rituals

A few spells (mostly Universal and Alteration spells of the Lesser tier) can be cast as **rituals** — performed slowly, over 10 minutes, with no mana cost. The spell entry says so.

Rituals exist to let casters do utility magic without spending mana. They can't be cast in combat. The classic ritual spells: *Detect Magic*, *Comprehend Languages*, *Mage Hand* (extended duration when ritual-cast), *Sanctuary*, *Identify*.

If a spell doesn't say "ritual," it isn't one.

## Magic items

Magic items are not spells, but the same logic applies: an item does what it says, no attunement, no spell slots used. A wand might allow the holder to cast a specific spell for free; the wand's text says how often. Most magic items are passive — a flaming sword does extra fire damage; a cloak of fire resistance halves fire damage taken.

A character can wear/wield as many magic items as physically fit. There is no slot economy.

## Caster vs. caster

When two casters clash, it's the same procedure — they take turns, cast spells, roll attacks vs. defenses. A caster usually has a high defense in their own pool — Mind, Spirit, or Charisma — and softer numbers in the other two. They target each other's weaker defense accordingly (a Charisma-caster's Mind is often the soft spot). Counterspell is the conversation.

## What magic deliberately doesn't have

- Spell slots in nine levels.
- Upcasting.
- Concentration as a tracked status with saves.
- Spell components tracked as resources.
- Schools of magic as a *resource* sub-system. Schools organize the catalog and gate class access ([19-classes.md](19-classes.md)), but they add **no extra economy** — no per-school slots, no school levels, no specialization meters.
- A divine-vs-arcane split. There is **one catalog**; classes differ by which **schools** they access and which **pool** (Mind/Spirit/Charisma) fuels them — not by separate arcane/divine lists.
- Subclass-specific spell lists.
- Domain spells.
- Bard "spells known" as a separate, smaller list.
- Warlock invocations as a parallel system.
- Sorcerer metamagic.
- Wild magic surge tables.
- Detect Magic as an always-on radar.
- A separate "spell save DC" stat. (The caster rolls; the target's defense is the static number.)

If a 5e caster asks about any of these, the answer is *not in this game; describe what you want to do and we'll find it in the spell list.*
