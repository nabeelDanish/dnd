# 10 — Spell Catalog

Every spell in the game lives here, organized by **school**. Spells are tagged by school only — your class ([19-classes.md](19-classes.md)) decides which schools you can access, and your **pool** (Mind or Spirit) fuels and aims them.

## How a spell works

> **Name** *(Tier · School · ongoing/ritual/reaction if any)*
> *Range — Target — Cost*
> Effect.

- **Cast from your pool.** A caster's mana is **`level + Mind`** *or* **`level + Spirit`** (set by class). Every spell you can access is cast from that one pool; your **spell attack = `d20 + pool + training`** vs. the named defense.
- **School access** comes from your class. **Universal** spells (utility/meta) can be learned by any caster regardless of schools.
- **Tiers & cost:** Cantrip 0 · Lesser 1 · Greater 3 · Master 5 mana. **Ranges:** Close (adjacent) · Near (6 squares) · Far (line of sight).
- **No saves** — the caster always rolls (see [06-attack-and-defense.md](06-attack-and-defense.md)). **One ongoing spell at a time** (see [09-magic.md](09-magic.md)) — this single rule is what stops a caster from stacking a summon, a buff, and a control effect at once.

## ⚙️ Summoning rules (read once)

Several Conjuration spells (and class overrides) summon a creature or animate a weapon. Summons are **tethered**, not free extra turns:

- A summon appears in an unoccupied space within **Near**, allied to you.
- It **acts immediately after your turn** each round — no separate initiative slot. Directing it is free (part of your turn).
- It uses the **stat block in the spell** and lasts the spell's duration or until it drops to 0 HP.
- **A summon counts as your one ongoing spell.** You can have only one active at a time. If you go Downed, it vanishes.
- A **bound weapon** is *not* a creature — it's a spectral weapon you wield and attack with normally (no tether, doesn't use your ongoing-spell slot).

The Conjuration perk **Master Summoner** (+1 to a summon's attacks, +2 rounds duration) and the summoner class overrides hook into these rules.

---

# 🔥 Destruction *(damage)*

### Cantrips
- **Spark** — *Near · one creature · 0* — attack vs **Armor**; `1d6` fire. Flammables ignite.
- **Frost Touch** — *Close · one creature · 0* — attack vs **Armor**; `1d4` cold, target's Speed halved until end of its next turn.
- **Shock** — *Far · one creature · 0* — attack vs **Armor**; `1d6` lightning. No cover bonus vs metal armor.
- **Sacred Flame** — *Near · one creature · 0* — attack vs **Spirit**; `1d8` radiant; target glows (negates Hide/Invisible) until end of its next turn.

### Lesser (1)
- **Magic Missile** — *Far · up to 3 creatures · 1* — no roll; three `1d4+1` force darts, split as you like.
- **Burning Hands** — *Close · 3-square cone · 1* — attack vs **Armor** each; `2d6` fire.
- **Thunderwave** — *Close · 3-square cube · 1* — attack vs **Armor** each; `2d8` thunder, pushed 2 squares.
- **Ice Spike** — *Far · one creature · 1* — attack vs **Armor**; `2d8` cold and Speed halved 1 round.

### Greater (3)
- **Fireball** — *Far · 3-square radius · 3* — attack vs **Armor** each; `6d6` fire (half on miss).
- **Lightning Bolt** — *Far · 10-square line · 3* — attack vs **Armor** each; `6d6` lightning (half on miss); hits allies in line.
- **Cone of Cold** — *Close · 5-square cone · 3* — attack vs **Armor** each; `6d6` cold (half on miss); Speed halved 1 round.

### Master (5)
- **Disintegrate** — *Far · one creature/object · 5* — attack vs **Armor**; `10d10` force; if it drops to 0, reduced to dust (no easy revive).
- **Fire Storm** — *Far · 5-square radius · 5* — attack vs **Armor** each; `8d6` fire (half on miss). Everything flammable burns.

---

# ✨ Restoration *(heal · ward · bless · undeath)*

### Cantrips
- **Guidance** — *Close · willing creature · 0* — its next ability check within 1 min has **advantage**.
- **Resistance** *(ongoing)* — *Close · willing creature · 0* — **advantage** on its Spirit defense until your next turn.
- **Spare the Dying** — *Close · a downed creature · 0* — no roll; the creature is **stabilized** (still 0 HP, no longer dying).

### Lesser (1)
- **Cure Wounds** — *Close · touch · 1* — heal `2d8 + pool`. No effect on undead/constructs.
- **Healing Word** — *Far · one creature · 1* — heal `1d6 + pool`; can wake a downed ally.
- **Bless** *(ongoing)* — *Near · up to 3 willing · 1* — each has **advantage** on its next attack.
- **Sanctuary** *(ongoing)* — *Close · one willing · 1* — attackers must beat your spell attack vs. their Spirit to target it (1 min, ends if it attacks).
- **Cleanse** — *Close · touch · 1* — end one condition (Poisoned, Burning, Frightened, Charmed, Blinded…).

### Greater (3)
- **Mass Healing Word** — *Far · up to 4 in Near of each other · 3* — each heals `2d6 + pool`; wakes the downed.
- **Spirit Guardians** *(ongoing)* — *Self, radius Close · 3* — enemies ending their turn within 1 square take `3d8` radiant (half if they spend a reaction to roll Spirit and beat your attack).
- **Revivify** — *Close · a creature dead ≤1 min · 3* — returns at 1 HP; body must be intact.

### Master (5)
- **Heal** — *Near · one creature · 5* — restore all HP; end all conditions except Exhausted.
- **Resurrection** — *Close · dead ≤1 week · 5* — returns at full HP; costs the caster **1 permanent Spirit** until next level.

---

# 🪄 Alteration *(physical manipulation · wards · buffs)*

### Cantrips
- **Mage Hand** *(ritual)* — *Near · a spectral hand · 0* — lift 10 lb, open unlocked doors, pour, push. 1 min (10 if ritual).
- **Detect Life** *(ritual)* — *Self, radius Near · 0* — sense living and undead creatures (not exact position) for 1 round (1 min if ritual).

### Lesser (1)
- **Shield** *(reaction)* — *Self · 1* — when hit vs Armor, add **+5 Armor** until your next turn; can turn a hit into a miss.
- **Mage Armor** *(ongoing)* — *Touch · 1* — target gains **+3 Armor** for 1 hour (only while in light or no armor).
- **Slow** *(ongoing)* — *Near · one creature · 1* — attack vs **Armor**; Speed halved and its attacks at disadvantage (3 rounds).
- **Enhance** *(ongoing)* — *Touch · willing · 1* — **advantage** on Might & Agility checks and +1 Speed (1 min).

### Greater (3)
- **Fly** *(ongoing)* — *Close · willing · 3* — flying Speed 8 for 5 min; falls if it ends aloft.
- **Telekinesis** *(ongoing)* — *Far · one creature/object · 3* — move it up to Near each round (attack vs **Armor** to fling a creature: `4d6` + prone).
- **Haste** *(ongoing)* — *Near · willing · 3* — +1 Speed step, **advantage** on attacks and Agility (1 min). *(No extra action — kept in budget.)*

### Master (5)
- **Wall of Force** *(ongoing)* — *Near · wall 10×4 · 5* — impassable, shapeable, 10 min; immune to Dispel Magic.
- **Polymorph** *(ongoing)* — *Near · one creature · 5* — attack vs **Mind** (or auto if willing); becomes a beast (GM's pick) up to 10 min; reverts at prior HP when the beast form drops.

---

# 🌀 Illusion *(mind · fear · stealth · charm)*

### Cantrips
- **Daze** — *Near · one creature · 0* — attack vs **Mind**; its attacks & checks at disadvantage until end of its next turn.
- **Sleight Hex** — *Near · one creature · 0* — attack vs **Mind**; the next attack against it (by anyone) has **advantage**.
- **Minor Illusion** — *Near · 0* — create a sound or palm-to-body-sized image for 1 min; a creature that studies it may roll Mind vs. your attack to disbelieve.

### Lesser (1)
- **Sleep** — *Near · up to 2 creatures · 1* — attack vs **Mind** each; falls asleep (Downed, not dying; wakes on damage/shake/1 min). 30+ HP immune.
- **Charm Person** *(ongoing)* — *Near · one humanoid · 1* — attack vs **Mind**; **Charmed** 1 hour or until you/allies attack it.
- **Fear** — *Near · one creature · 1* — attack vs **Mind**; **Frightened** of you (3 rounds).
- **Disguise Self** *(ongoing)* — *Self · 1* — appear as another person of similar size for 1 hour; touch reveals the illusion.

### Greater (3)
- **Hold Person** *(ongoing)* — *Near · one humanoid · 3* — attack vs **Mind**; **Stunned** 3 rounds; may reroll Spirit vs. your attack each turn to break free.
- **Invisibility** *(ongoing)* — *Close · willing · 3* — attacks against it have disadvantage, its attacks advantage; ends when it attacks/casts or after 10 min.
- **Terror** — *Near · all enemies in a 3-square radius · 3* — attack vs **Mind** each; **Frightened** 2 rounds.

### Master (5)
- **Dominate Mind** *(ongoing)* — *Near · one creature · 5* — attack vs **Mind**; you control its actions (one move + action on its turn) up to 1 min; it may reroll Mind vs. your attack each time it takes damage.

---

# 👹 Conjuration *(summon · bind · teleport · banish)*

### Cantrips
- **Bound Blade** *(ongoing)* — *Self · 0* — conjure a spectral weapon (`1d8`, uses your spell attack) for 1 min. A bound weapon, not a creature.
- **Spectral Shield** *(ongoing)* — *Self · 0* — +1 Armor until your next turn.

### Lesser (1)
- **Summon Beast** *(ongoing)* — *Near · 1* — summon a beast (HP 10, Armor 13, attack `+pool → 1d6+2`, Speed 8) for the encounter. *(Tethered — see Summoning rules.)*
- **Web** *(ongoing)* — *Near · 3-square radius · 1* — attack vs **Armor** each; **Restrained** (Might vs. your attack to tear free); difficult terrain; burns for `2d6`.
- **Misty Step** — *Self · 1* — teleport to an unoccupied space you can see within Near.
- **Bound Weapon** *(ongoing)* — *Self · 1* — a stronger spectral weapon (`1d10`, your spell attack) for 10 min.

### Greater (3)
- **Summon Elemental** *(ongoing)* — *Near · 3* — summon an elemental (HP 25, Armor 14, attack `+pool → 2d6`, Speed 6, resists its element) for the encounter. *(Tethered.)*
- **Spiritual Weapon** *(ongoing)* — *Near · 3* — a floating weapon attacks `+pool → 1d8` force on your turn each round, for 1 min. *(Tethered; you may move it Near each round.)*
- **Banishment** *(ongoing)* — *Near · one creature · 3* — attack vs **Spirit**; vanishes 1 min (outsiders may not return).
- **Dimension Door** — *Far · self + one willing adjacent · 3* — teleport both to a point within Far.

### Master (5)
- **Summon Greater Spirit** *(ongoing)* — *Near · 5* — summon a mighty ally (HP 45, Armor 15, two attacks `+pool → 2d8`, Speed 8) for the encounter. *(Tethered.)*
- **Banish** — *Near · one creature · 5* — attack vs **Spirit**; non-natives banished **permanently**; natives as Banishment.

---

# 🜂 Universal *(utility / meta — any caster may learn)*

- **Light** *(Cantrip)* — *Close · object · 0* — bright light, 6-square radius, 1 hour.
- **Mend** *(Cantrip · ritual)* — *Close · object · 0* — repair one break/tear no larger than a sword.
- **Detect Magic** *(Lesser · ritual)* — *Self, radius Near · 1 (0 ritual)* — sense presence/rough location of active magic for 10 min.
- **Comprehend Languages** *(Lesser · ritual)* — *Self · 1 (0 ritual)* — understand any language for 1 hour (understand only).
- **Counterspell** *(Greater · reaction)* — *Near · 3* — when a creature casts, roll `d20 + pool + training` vs. `10 + 5×tier`; on a hit the spell fizzles.
- **Dispel Magic** *(Greater)* — *Near · 3* — roll vs. `10 + 5×tier` to end an ongoing magic effect.

---

## Designer's notes

- **~65 spells across 5 schools + Universal.** Each school spans all four tiers, so any 2- or 3-school class has real choices at every tier.
- **Conjuration is a full pillar** — summons (tethered, one at a time = no action-economy bloat), bound weapons (for the gish classes), teleports, and the banish line.
- **Alteration is the "manipulate the physical" school** — flesh/ward (Mage Armor, Shield), telekinesis, Slow, Haste, Fly. Its **Arcane Ward** class perk lives here.
- **Save-or-suck stays disciplined.** Hard lockdown is rare: Sleep, Hold Person, Dominate Mind, Polymorph, Banish — spread across schools and tiers, each on a different defense, most with a recurring escape roll.
- **Healing still costs mana** — no free healing cantrip, preserving the resource economy.
- **Pools, not lists.** A Spirit-Paladin and a Mind-Sorcerer both cast Fireball; it's the same Destruction spell from different pools. Class school-access is the only gate.

> The list should never grow so large a new player can't read it in one sitting. **The total spell list fits in a player's head, not in an index.**
