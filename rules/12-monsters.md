# 12 — Monsters

A monster stat block fits on an index card. **That is the design target.** No two-page stat blocks, no nested ability lists, no nine specialty senses.

## The stat block

```
NAME · Tier X · Threat Y
HP A | Armor B | Mind C | Spirit D | Speed E
Attack: name +F vs. defense → damage
Special: one or two short abilities
Notes: tactics, motivation, appearance
```

That's it. Eight lines. A new GM can run any monster in this book without preparation.

**Field guide:**

- **Tier** (1–3) is which player tier this monster is balanced for. Apprentice, Veteran, Master.
- **Threat** is the encounter-budget number for this monster (see [13-encounters-and-rewards.md](13-encounters-and-rewards.md)).
- **HP, Armor, Mind, Spirit** are static values. Monsters don't roll defenses — they're rolled against.
- **Speed** is squares per turn.
- **Attack** has a single +N attack bonus (which encodes ability + training), a target defense, and damage. Some monsters have two attack options.
- **Special** is one or two named abilities, each one sentence.
- **Notes** is free-text guidance for running the monster.

Monsters can have **Sentinel** (opportunity strikes are on for this monster). Add it to Notes.

## Apprentice tier (levels 1–3)

### Goblin Skirmisher — Tier 1 · Threat 1
- **HP** 7 · **Armor** 13 · **Mind** 10 · **Spirit** 9 · **Speed** 7
- **Attack:** *Scimitar* `+3 vs. Armor → 1d6 + 1` (or thrown javelin, Near range)
- **Special:** *Nimble Escape* — disengages without provoking, even from Sentinel monsters.
- **Notes:** Cowardly in melee. Will flee at half HP unless commanded. Hunts in packs of 4–8.

### Goblin Archer — Tier 1 · Threat 1
- **HP** 7 · **Armor** 12 · **Mind** 10 · **Spirit** 9 · **Speed** 6
- **Attack:** *Shortbow* `+4 vs. Armor → 1d6 + 2`, Range Far.
- **Special:** *Take Cover* — moves into cover after each attack; attacks against this goblin while in cover have disadvantage.
- **Notes:** Stays at the back. Targets casters first.

### Goblin Boss — Tier 1 · Threat 3
- **HP** 22 · **Armor** 14 · **Mind** 11 · **Spirit** 11 · **Speed** 7
- **Attack:** *Wicked Blade* `+4 vs. Armor → 1d8 + 2`. *Crossbow*: `+4 vs. Armor → 1d6 + 2`, Range Near.
- **Special:** *Command* — once per round, a nearby goblin makes an immediate attack as a free action.
- **Notes:** Sentinel. Will sacrifice minions to escape if losing. Has a back exit ready.

### Wolf — Tier 1 · Threat 2
- **HP** 12 · **Armor** 13 · **Mind** 11 · **Spirit** 10 · **Speed** 10
- **Attack:** *Bite* `+4 vs. Armor → 1d8 + 2`. On hit, target is Knocked Prone if Tier 1 or smaller.
- **Special:** *Pack Tactics* — has advantage on attacks if an ally is adjacent to the same target.
- **Notes:** Pack hunter. Hits and retreats. Smart enough to flank.

### Bandit — Tier 1 · Threat 1
- **HP** 9 · **Armor** 13 · **Mind** 10 · **Spirit** 11 · **Speed** 6
- **Attack:** *Shortsword* `+3 vs. Armor → 1d6 + 1`. *Light crossbow*: `+3 vs. Armor → 1d6 + 1`, Range Far.
- **Special:** *Surrender* — when below half HP and outnumbered, will drop weapons and surrender if offered.
- **Notes:** Human. Has a name, a back-story, a debt, a family. Use them; PCs will hesitate to kill if you do.

### Bandit Captain — Tier 1 · Threat 4
- **HP** 30 · **Armor** 15 · **Mind** 12 · **Spirit** 13 · **Speed** 6
- **Attack:** *Scimitar* `+5 vs. Armor → 1d8 + 3` twice per turn (this monster has Cleave-like *Whirlwind*). *Dagger*: `+5 vs. Armor → 1d4 + 3`, Range Near (thrown).
- **Special:** *Whirlwind* — on a turn where the captain has not moved, makes two melee attacks instead of one.
- **Notes:** A leader. Won't surrender — has a debt to a worse master.

### Skeleton — Tier 1 · Threat 1
- **HP** 13 · **Armor** 13 · **Mind** 9 · **Spirit** 9 · **Speed** 6
- **Attack:** *Rusted blade* `+3 vs. Armor → 1d6 + 1`. *Shortbow*: `+3 vs. Armor → 1d6 + 1`.
- **Special:** *Immune to poison and the Charmed/Frightened/Poisoned conditions.* Vulnerable to bludgeoning damage (takes `+1d4` from clubs/maces/warhammers).
- **Notes:** Has no fear, no fatigue. Will fight to dust.

### Zombie — Tier 1 · Threat 2
- **HP** 18 · **Armor** 10 · **Mind** 7 · **Spirit** 8 · **Speed** 4
- **Attack:** *Slam* `+3 vs. Armor → 1d8 + 1`. On hit, target rolls Spirit vs. zombie's `+3` attack roll or is **Poisoned** (necrotic flavor) until cleansed or rest.
- **Special:** *Undead Fortitude* — when reduced to 0 HP by a hit that is not radiant or fire, roll d20: on 11+, the zombie has 1 HP instead.
- **Notes:** Slow but stubborn. Often comes in waves.

### Giant Spider — Tier 1 · Threat 3
- **HP** 18 · **Armor** 14 · **Mind** 11 · **Spirit** 11 · **Speed** 6, climb 6
- **Attack:** *Bite* `+4 vs. Armor → 1d6 + 2`, on hit target rolls Spirit vs. spider's `+4` roll or **Poisoned** for 1 minute.
- **Special:** *Web Shot* (recharge 5–6 on a d6): ranged spell-style attack at Near range, `+4 vs. Agility → target is Restrained` until they spend an action to break free (Might vs. `+4`).
- **Notes:** Climbs walls. Ambushes from above.

### Orc — Tier 1 · Threat 2
- **HP** 18 · **Armor** 13 · **Mind** 9 · **Spirit** 10 · **Speed** 7
- **Attack:** *Greataxe* `+4 vs. Armor → 1d10 + 2`.
- **Special:** *Aggressive* — once per turn, the orc may move up to its speed toward a hostile creature it can see, in addition to its normal move.
- **Notes:** Berserker. Targets whoever hit it last.

### Cultist — Tier 1 · Threat 2
- **HP** 11 · **Armor** 12 · **Mind** 13 · **Spirit** 13 · **Speed** 6
- **Attack:** *Ritual dagger* `+3 vs. Armor → 1d4 + 1`. *Cause Wounds* (cantrip, divine): `+3 vs. Spirit → 1d6` necrotic, Range Near.
- **Special:** *Fanatic* — does not flee. Will fight to 0 HP. If reduced to 0 HP by a fellow cultist's spell, returns at `1` HP once per encounter (the dark patron pays).
- **Notes:** Dedicated to an evil power. Carries one ritual focus the party may need to destroy.

### Ogre — Tier 1 · Threat 5
- **HP** 50 · **Armor** 12 · **Mind** 7 · **Spirit** 9 · **Speed** 7
- **Attack:** *Greatclub* `+5 vs. Armor → 2d6 + 4`. On a natural 20, target is also Prone.
- **Special:** Sentinel. *Big Reach* — its melee attacks reach 2 squares.
- **Notes:** The first boss-tier threat the party should fear. Dumb but hits like a truck. One hit can drop a Mage.

## Veteran tier (levels 4–7)

### Hobgoblin Soldier — Tier 2 · Threat 3
- **HP** 28 · **Armor** 16 · **Mind** 11 · **Spirit** 12 · **Speed** 6
- **Attack:** *Longsword* `+6 vs. Armor → 1d8 + 3`. *Javelin*: `+6 vs. Armor → 1d6 + 3`, Range Near.
- **Special:** *Martial Discipline* — gains `+2` to attack rolls when an ally is adjacent to the same target (this stacks with flanking but doesn't double; if both apply, treat as advantage).
- **Notes:** Trained military. Holds formation. Hard to flank because they fall back together.

### Hobgoblin Captain — Tier 2 · Threat 6
- **HP** 65 · **Armor** 17 · **Mind** 13 · **Spirit** 13 · **Speed** 6
- **Attack:** *Greatsword* `+7 vs. Armor → 1d10 + 4`, twice per turn.
- **Special:** Sentinel. *Battle Command* — once per turn, an allied hobgoblin within Near range may make a free attack as a reaction to the captain's order.
- **Notes:** A true tactical threat. Will divide and conquer.

### Brown Bear — Tier 2 · Threat 4
- **HP** 40 · **Armor** 14 · **Mind** 10 · **Spirit** 13 · **Speed** 8
- **Attack:** *Claw* `+5 vs. Armor → 1d8 + 4`. *Bite* `+5 vs. Armor → 1d10 + 4`. Uses one of the two per turn.
- **Special:** Sentinel. *Crushing Hug* — on a hit with claw, target may also be Grappled (target's choice: take an extra `1d6` damage or be Grappled).
- **Notes:** Territorial. Won't pursue beyond its area.

### Owlbear — Tier 2 · Threat 5
- **HP** 55 · **Armor** 14 · **Mind** 10 · **Spirit** 12 · **Speed** 8
- **Attack:** *Claw* `+6 vs. Armor → 1d10 + 4` (twice per turn).
- **Special:** *Tear and Bite* — on a hit with the second claw, target is Bleeding (`1d4`/turn) until tended.
- **Notes:** Unpredictable. Doesn't recognize danger to itself; fights to the death.

### Will-o'-Wisp — Tier 2 · Threat 4
- **HP** 16 · **Armor** 15 · **Mind** 14 · **Spirit** 14 · **Speed** fly 8
- **Attack:** *Shock* `+5 vs. Armor → 2d6` lightning, Range Near.
- **Special:** *Invisibility (at will, free action)* — when the wisp wishes, it vanishes. Spotted only by Lantern of True Sight or while attacking. *Consume Life* — if it touches a Downed creature, the creature takes `2d6` necrotic and the wisp regains all HP.
- **Notes:** Cowardly. Leads travelers to their deaths and feeds on the dying. Lures more than fights.

### Ghoul — Tier 2 · Threat 3
- **HP** 22 · **Armor** 13 · **Mind** 9 · **Spirit** 10 · **Speed** 8
- **Attack:** *Claw* `+4 vs. Armor → 1d6 + 2`. *Bite*: `+4 vs. Armor → 1d8 + 2`, on hit target rolls Spirit vs. `+4` or is **Stunned** until end of their next turn (ghoul paralysis).
- **Special:** *Immune to poison and the Charmed/Poisoned conditions.*
- **Notes:** Hunts in packs of 2–4. Targets stunned creatures.

### Mage Apprentice — Tier 2 · Threat 4
- **HP** 22 · **Armor** 12 · **Mind** 15 · **Spirit** 12 · **Speed** 6
- **Mana** 6.
- **Attack:** *Quarterstaff* `+2 vs. Armor → 1d6`. *Spark* (cantrip, free): `+5 vs. Armor → 1d6` fire, Range Near.
- **Special:** Knows *Magic Missile* (1 mana), *Burning Hands* (1 mana), *Shield* (1 mana, reaction), *Sleep* (1 mana).
- **Notes:** A Mage trying to keep distance. Burn the apprentice down fast.

### Knight — Tier 2 · Threat 5
- **HP** 55 · **Armor** 18 · **Mind** 11 · **Spirit** 14 · **Speed** 6
- **Attack:** *Longsword* `+7 vs. Armor → 1d8 + 4`, twice per turn. *Heavy crossbow*: `+5 vs. Armor → 1d10 + 2`, Range Far.
- **Special:** Sentinel. *Honor-bound* — once per encounter, if an ally adjacent to the knight would be hit, the knight may take the hit instead.
- **Notes:** Plate armor. Loyal. Will not flee.

### Sahuagin Raider — Tier 2 · Threat 3
- **HP** 26 · **Armor** 14 · **Mind** 12 · **Spirit** 12 · **Speed** 5, swim 10
- **Attack:** *Spear* `+5 vs. Armor → 1d8 + 3`. *Bite*: `+5 vs. Armor → 1d4 + 3`.
- **Special:** *Blood Frenzy* — has advantage on attacks vs. creatures below half HP.
- **Notes:** Aquatic. Drags victims underwater. Hates surface dwellers.

## Master tier (levels 8–10)

### Vampire Spawn — Tier 3 · Threat 8
- **HP** 80 · **Armor** 16 · **Mind** 13 · **Spirit** 13 · **Speed** 8, climb 6
- **Attack:** *Claw* `+8 vs. Armor → 1d10 + 5`. *Bite*: `+8 vs. Armor → 1d6 + 5` necrotic; on hit, spawn heals for damage dealt.
- **Special:** *Regeneration* — at the start of its turn, the spawn regains `10` HP unless it took fire or radiant damage in the previous round. *Immunities*: charm, sleep, poison. *Weaknesses*: vulnerable to fire and radiant damage (takes double).
- **Notes:** Sentinel. Can't enter a home uninvited. Hates sunlight (in sunlight, takes `2d6` radiant per turn).

### Young Dragon (Red) — Tier 3 · Threat 12
- **HP** 180 · **Armor** 18 · **Mind** 15 · **Spirit** 16 · **Speed** 8, fly 16
- **Attack:** *Bite* `+10 vs. Armor → 2d10 + 6`. *Claw* `+10 vs. Armor → 1d8 + 6` (uses one of them per turn; or both as below).
- **Special:** Sentinel. *Multi-attack* — instead of one attack, may make one bite and one claw in the same action. *Fire Breath* (recharge 5–6 on d6): a 6-square cone, spell attack `+10 vs. Armor` against each creature in the area, `8d6` fire damage on hit, half on miss.
- **Notes:** A regional boss. Has a hoard. Will negotiate if outmatched, but its pride is its weakness.

### Lich (Apprentice) — Tier 3 · Threat 15
- **HP** 130 · **Armor** 17 · **Mind** 18 · **Spirit** 18 · **Speed** 6
- **Mana** 18.
- **Attack:** *Cold Touch* `+10 vs. Armor → 3d6` cold + 1d6 necrotic, Range Close.
- **Special:** Knows: *Magic Missile* (1), *Fireball* (3), *Hold Person* (3), *Counterspell* (3), *Disintegrate* (5), *Wall of Force* (5). *Phylactery* — if reduced to 0 HP, body crumbles but lich is not truly destroyed unless phylactery is found and broken. *Immune to poison, charm, sleep, frightened.*
- **Notes:** Plans ten moves ahead. Has minions. Will retreat to phylactery and rebuild if killed without finding it.

### Iron Golem — Tier 3 · Threat 12
- **HP** 200 · **Armor** 20 · **Mind** 5 · **Spirit** 9 · **Speed** 6
- **Attack:** *Slam* `+10 vs. Armor → 3d10 + 6`. On hit, target Knocked Prone.
- **Special:** Sentinel. *Magic Resistance* — has advantage on all defenses vs. spells, and spells against it have disadvantage to hit. *Immune to poison, charm, sleep, frightened, fire (instead, heals 1d10 HP from fire damage).*
- **Notes:** Slow but unstoppable. Often guards a single chamber.

### Stone Giant — Tier 3 · Threat 9
- **HP** 130 · **Armor** 17 · **Mind** 10 · **Spirit** 12 · **Speed** 8
- **Attack:** *Greatclub* `+9 vs. Armor → 3d8 + 6`. *Boulder*: `+8 vs. Armor → 4d10 + 6`, Range Far.
- **Special:** Sentinel. *Rock Catching* — if hit by a thrown weapon or boulder, may try to catch it; roll `d20 + 6` vs. attacker's roll; on success, no damage and giant may throw it back as a free action.
- **Notes:** Mountain dweller. Cautious. Throws boulders from range until forced into melee.

## Building your own monsters

If you need a monster not on this list, use the following targets by tier:

| Tier | HP | Armor | Attack bonus | Damage per hit |
|---|---|---|---|---|
| 1 (apprentice) | 7–25 | 12–14 | +3 to +5 | 1d6 to 1d10 (+1 to +3) |
| 2 (veteran) | 25–80 | 14–17 | +5 to +8 | 1d8 to 2d8 (+3 to +5) |
| 3 (master) | 80–200 | 16–20 | +8 to +12 | 2d8 to 4d10 (+5 to +7) |

**A monster's Mind/Spirit defenses are usually close to its Armor minus 1 to 3**, except for elites and casters who have one defense significantly higher.

**A monster's threat number** is roughly its Tier × 2, plus 1 for elite (named) status, plus 1 for any unusually nasty special, minus 1 for unusually fragile or limited. Six minions, four standard, two elite, one boss is a fine spread for a difficult fight.

A monster's name, motivation, and one weird thing matter more than its stat block. **A goblin who is afraid of fire**, played as such, is more memorable than a goblin with three extra abilities.
