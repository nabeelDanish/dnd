# 06 — Attack and Defense

This is the most-used subsystem in the game. It's the core mechanic from [01-core-mechanic.md](01-core-mechanic.md) with combat-specific labels attached.

## The attack roll

> **Roll d20, add your attack ability modifier and (if trained) your training bonus, compare to the target's defense. Meet or beat: hit. Miss: miss.**

That's it. Every attack in the game is the same shape.

## What goes into "attack ability"

**Every attack you make — weapon *or* spell — uses your class's one primary ability.** That single stat (Might, Agility, Mind, Spirit, or Charisma) is what *powers* your character: you add it to every attack roll **and** to your damage.

- A **Might** class swings, throws, and shoots with Might.
- An **Agility** class does all of it with Agility.
- A **Mind**, **Spirit**, or **Charisma** caster makes spell attacks *and* weapon attacks with that pool — magic and blade run off the same stat.

There's no per-weapon ability and no separate "weapon proficiency": the weapon's *class* sets its damage die, hands, and range ([17-weapons.md](17-weapons.md)); your *primary* sets the attack and damage bonus; and if your class is **trained** in that weapon (or in casting), add your training bonus to the hit.

> Defenses are unchanged — the single-primary rule is about *offense*, not protection. Armor is still 10 + Agility (or Might in heavy armor) + material; Mind = 10 + Mind; Spirit = 10 + Spirit; Charisma = 10 + Charisma.

## Defenses

Every creature has four defenses. They are static numbers.

### Armor
The number an attacker rolls against for physical hits — sword swings, arrows, claws.

`Armor = 10 + Agility + worn armor bonus`

If you wear **heavy armor**, Armor uses Might instead of Agility:

`Armor = 10 + Might + heavy armor bonus`

Your armor's **material** sets the bonus — light (leather/hide) is Agility-based, heavy (metal/stone) is Might-based. See [18-armor.md](18-armor.md).

Typical level 1 Armor values:
- Unarmored Mage with `+1` Agility: **11**.
- Leather (light) Scout with `+5` Agility: **17**.
- Steel-armored (heavy) Warrior with `+3` Might: **17**.

### Mind
The number an attacker rolls against for effects that attack the target's **senses and intellect** — illusion, sleep, psychic assault, mind-reading, paralysis, outright domination.

`Mind defense = 10 + Mind`

### Spirit
The number an attacker rolls against for effects that attack the target's **soul and life-force** — possession, banishment, death magic, soul-burn, divine/unholy wrath.

`Spirit defense = 10 + Spirit`

### Charisma
The number an attacker rolls against for effects that attack the target's **composure and will to act** — charm, fear, magical command, taunts, crushing despair. Resisting these is force of personality, not intellect or soul.

`Charisma defense = 10 + Charisma`

## Which defense gets attacked?

The weapon, spell, or attack tells you. As a rule:

- **Sword, claw, arrow, fist, fall damage:** Armor.
- **Sleep, illusion, psychic, paralysis, mind-control:** Mind.
- **Charm, fear, command, taunt:** Charisma.
- **Banishment, soul-burn, death-magic, holy/unholy wrath:** Spirit.
- **Fire, cold, lightning, poison from an area effect** that the target should be able to dodge or shrug off: **Armor** (because the target's reflexes and toughness are protecting them). Most "elemental" attacks target Armor.
- **Fire, cold, lightning, poison that ignores the body** (e.g., a curse that boils blood without a chance to dodge): **Spirit**.

> **The line between Mind and Charisma:** Mind effects *hijack cognition* — they fool the senses or seize the brain (you can't tell the illusion is fake; your body locks up). Charisma effects *bend the heart* — they make you feel friendship, terror, or obedience you'd never choose. If the magic overrides what you *perceive or think*, it's Mind; if it overrides what you *feel or will*, it's Charisma.

The spell description tells you. If it doesn't, default to Armor.

## Damage

After a hit, roll damage:

`Damage = weapon die + material bonus + attack ability modifier`

The **material bonus** is the flat damage your weapon adds for what it's forged from (`+0` Iron up to `+5` Daedric — see [17-weapons.md](17-weapons.md)). **Spells** use `spell die + ability` and have no material bonus.

You do **not** add the training bonus to damage. Training affects the *hit*, not the *severity*. Material affects the *severity*, never the *hit*.

Damage dice for the most common weapons:

| Weapon | Damage |
|---|---|
| Dagger, club, sling | `1d4` |
| Shortsword, mace, hand axe, light crossbow, shortbow | `1d6` |
| Longsword, warhammer, longbow, heavy crossbow | `1d8` |
| Greatsword, greataxe, polearm, maul | `1d10` |

These are the **class** dice. Every weapon then adds its **material bonus** flat on top (`+0`–`+5`); a Steel longsword is `1d8 + 1 + ability`. See [17-weapons.md](17-weapons.md) for the full ladder.

Spells specify their own damage dice; see [10-spell-list.md](10-spell-list.md).

**Minimum damage on a hit is 1.** A `+0` mod on a `1d4` rolling a 1 still does 1 damage. Nothing scary about a hit is wasted.

## Critical hits

A **natural 20** on the attack roll is a critical hit. Roll the damage dice **twice** and add them together; **modifiers are added once**, not twice.

Example: Scout with Agility `+3` hits with a shortbow, natural 20. Damage is `1d6 + 1d6 + 3`. If both d6s roll high, that's a big hit.

Critical hits don't otherwise have effects. No critical confirmation roll. No "spinal injury" tables. Just doubled dice.

## Critical fumbles

A **natural 1** on the attack roll: you miss, and a complication happens. The GM picks something appropriate from this menu:

- You drop your weapon (it's at your feet; pick it up costs your move next turn).
- You hit an ally next to your target (roll damage at half, against the ally).
- You stumble (you're prone).
- You expose a flank (the next attack on you this round has advantage).
- You break your bowstring / your crossbow misfires / your spell sputters (you can't use this weapon/spell again until you spend an action to recover it).

The GM picks one each time; don't roll on a table. The complication should fit the fiction. A wizard who fumbles a spell shouldn't drop their sword; they should miscast.

## Spell attacks vs. spell effects

Spells come in two shapes:

1. **Spell attack.** A spell that the caster rolls to hit with — *Fire Bolt*, *Eldritch Blast*, etc. Use the standard attack procedure: `d20 + spell ability + training` vs. the target's defense.
2. **Spell save.** *In this game, there is no save.* A spell that in 5e calls for the target to save is rewritten so the **caster rolls to hit** against the relevant defense. *Fireball* is the caster rolling vs. each target's Armor (or Spirit, or whatever the spell says). On a hit, full damage; on a miss, half damage (or none, per the spell).

Same procedure as a melee attack. The only difference is which ability and which defense.

## Range

- **Melee:** the target must be adjacent (1 square away). Polearms reach 2 squares.
- **Ranged weapon:** the weapon entry gives a range. Beyond it, attack is at disadvantage; double that range and you can't attack at all.
- **Spells:** the spell entry gives the range.

Don't track range in feet during the fight. Squares are enough. Bows reach across the room; crossbows the same; thrown weapons about 5 squares; daggers thrown about 4.

## Two-weapon fighting

Still **one attack per turn** — there's no bonus off-hand swing. Wielding **two light weapons** (both hands, no shield) steps your damage die **up one size** (`1d4 → 1d6`, `1d6 → 1d8`): the off-hand blade folds into a single, harder hit, not a second roll. See [17-weapons.md](17-weapons.md). Wielding two non-light weapons is pure flavor — use the larger die.

## Unarmed attacks

`1d4 + Might` damage. Anyone can do this. Some monsters do much more.

## Improvised weapons

Anything you can pick up: `1d4`, with Might. The chair, the bottle, the chandelier. The GM may rule it does `1d6` if it's clearly a big improvised weapon, or `1d10` if it's a falling chandelier on someone's head.

## Multiple attacks

Most characters get **one attack per turn**. Warriors with the **Cleave** feature (see [02-character-creation.md](02-character-creation.md)) may make a second attack only when their first reduces a target to 0 HP. There is no "Extra Attack at level 5" feature in this game; multiple attacks are class-feature unlocks, not a default expansion.

A Mage who casts a spell that includes multiple targets (Magic Missile, Burning Hands) is making **one action that affects multiple creatures**, not multiple attacks. Resolve each target separately if the spell needs an attack roll.

## Damage types

The game uses damage types loosely:

- **Physical** (slashing, piercing, bludgeoning — we don't distinguish).
- **Fire, cold, lightning, acid, poison, thunder.**
- **Necrotic** (death magic, soul-burn).
- **Radiant** (holy, sun, healing reversed).
- **Psychic** (mental, dream).

Damage type matters only when a monster, item, or condition cares. Some undead are *immune* to poison. Some elementals are *vulnerable* (take double) to specific damage types. The monster's stat block tells you. If it doesn't, all damage is just damage.

We don't track resistances on every monster. Most fights, every weapon does its full damage. Resistances are flavor for specific encounters.

## A worked attack

A Knight (Might primary) swings a greatsword at the Orc Captain.

- Knight: Might `+3`, trained in heavy weapons (`+2` at level 1–3), **Steel** greatsword (`1d10`, material `+1`).
- Orc Captain Armor: `15`.
- Roll: `d20 + 3 (Might) + 2 (training) = d20 + 5` vs. `15`. *(Material never touches this roll.)*
- Result on d20: `12`. Total `17`. Hit.
- Damage: `1d10 + 1 (material) + 3 (Might)`. Roll d10: `7`. Damage: `11`.
- The Orc Captain takes `11`.

If the d20 had shown `20`: damage is `1d10 + 1d10 + 1 + 3` (dice doubled, flat mods once), critical. Say `7 + 9 + 1 + 3 = 20` damage.

If the d20 had shown `1`: complication. GM says: *"You overswing; you're prone."*

Total time at the table: under 10 seconds.

## What attack/defense doesn't have

- Saving throws.
- AC + touch AC + flat-footed AC.
- Damage reduction (replaced by resistance/immunity).
- A separate weapon attack bonus and weapon damage bonus stat.
- Spell save DCs separate from attack bonuses.
- Cleaving, sweeping, called shots, sundering, disarming as separate sub-systems. (Improvise via the d20 + ruling.)
- Critical hit confirmation rolls.
- Variable critical thresholds (no 19–20 crit weapons).
- Power attack, expertise, or other "trade-bonus-for-bonus" knob-twisting.

When a 5e player asks about any of those: not in this game. Roll the d20.
