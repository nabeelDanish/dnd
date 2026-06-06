# 19 — Classes (the component system)

> This chapter defines every class, superseding the old four. Each of the **48 classes** is generated from the same component vocabulary used everywhere else in the book — weapon types ([17-weapons.md](17-weapons.md)), armor tiers ([18-armor.md](18-armor.md)), and schools of magic ([10-spell-list.md](10-spell-list.md)). Character creation ([02-character-creation.md](02-character-creation.md)) points here for the roster.

---

## How classes are generated

A class is a **legal combination of components**. Pick a template, fill its slots, and you have a class — that's the whole generator. Everything below is the rules that decide which combinations are legal and balanced.

### The components
- **Weapon types:** Light · Medium · Heavy · Ranged
- **Armor tiers:** Light · Heavy · None
- **Schools of magic:** Destruction · Conjuration · Alteration · Illusion · Restoration

### The legal templates

**Fighting classes** *(no magic):*
| Template | Slots |
|---|---|
| **Armored** | 2 weapon types + 1 armor tier (light or heavy) |
| **Naked weapon-master** | 3 weapon types + no armor |

**Magic classes** *(cast from a pool; light or no armor only — heavy blocks casting):*
| Template | Slots |
|---|---|
| **Half-caster** | 1 school + 1 weapon type + light armor |
| **Spellsword** | 2 schools + 1 martial weapon (medium/heavy) + no armor |
| **Caster** | 2 schools + light armor |
| **Full caster** | 3 schools + no armor |

### The build economy (the balance spine)

> **Every class is exactly 3 perks.** A pick is *1 weapon type* or *1 school*; an armor tier carries a perk too.

- Baseline = **2 picks + an armor tier** = 3 perks.
- **Going naked (no armor) buys a 3rd pick** but drops you to the lowest HP *and* Armor — the glass-cannon bargain.
- Each component grants one **perk** (the 11 below); your class also has **1 unique override** you may swap in for any one of them (it *replaces*, never adds — so the total is always 3).
- A class is legal **iff it lands on 3 perks** under this economy. That makes balance checkable by counting.
- **No class ever exceeds 3 perks.** So you can't have 2 schools *and* a weapon *and* armor (that's 4): a 2-school gish goes **naked** (the **Spellsword** — its weapon and spells share one stat, so being lightly built is fine), and an *armored* gish takes only **1 school** (the **Half-caster**). The armored 2-school war-mage simply doesn't exist — by design.

### HP & primary ability
- **HP rides the armor tier:** Heavy `10 + Might` · Light `8 + Might` · None `6 + Might`. Per-level gain `1d6 + Might` (1s/2s count as 3).
- **Your class grants `+1` to its primary ability.** Primary is set **by feel**: Might for medium/heavy weapons, Agility for light/ranged builds; Mind, Spirit, or Charisma (the **pool**) for casters. It is *not* a separate combination axis. A caster's pool also reflects the *source* of their magic — Mind for the studied, Spirit for the devoted, Charisma for the innate.
- **Your primary powers everything.** Every weapon attack, weapon damage, and spell attack uses your one primary ability ([06-attack-and-defense.md](06-attack-and-defense.md)). A Mind-Battlemage's blade *and* its fire both run off Mind; a Might-Knight's everything runs off Might. One stat, whole character — which is what lets a gish wield a real weapon without splitting its ability investment.

### The weight rules (what heavy gear costs)

**① Heavy weapons are two-handed.** No shield, no off-hand. Medium and light are one-handed.

**② No ranged weapons in heavy armor.** Heavy armor is the melee line — you cannot use bows, crossbows, or thrown weapons while wearing it. Archers and skirmishers live in light or no armor. *(This is why every heavy-armor class is a Might melee build — and why there's no tanky-archer.)*

**③ Set to Strike — heavy gear plants you.** On a turn where you **move and attack**:
- wielding a **heavy weapon** *or* wearing **heavy armor** → that **attack is at disadvantage**;
- wielding a heavy weapon *and* wearing heavy armor → you **can't do both: take your move *or* your attack this turn, not both.**

Stand your ground (use no movement) and you strike normally. *(Disadvantage is binary — [01-core-mechanic.md](01-core-mechanic.md) — so the "both heavy" case escalates to denial rather than stacking dice.)* This gives heavy gear a real cost without a speed stat: **heavy = the immovable melee anchor; light/none = mobile.** It also synergizes with the perks — heavy armor's **Bulwark** and heavy weapons reward planting; light armor's **Slip Away** rewards moving.

### Spellcasting access
A magic class casts from one **pool** (`level + Mind`, `level + Spirit`, *or* `level + Charisma`), knows 2 cantrips + the spells-known table ([09-magic.md](09-magic.md)), drawn from its accessible **schools** ([10-spell-list.md](10-spell-list.md)). Cast freely in light or no armor; **heavy armor blocks casting** (so no magic class wears it). Casters are trained in casting (spell attack = `d20 + pool + training`).

---

## The 11 component perks

Each component grants one signature perk, shared by anyone who takes it.

### Weapon perks
| Component | Perk | Effect |
|---|---|---|
| **Light** | **Sneak Strike** | Once per turn, when you attack with advantage or an ally is adjacent to your target, deal **+1d6** on a hit. |
| **Medium** | **Riposte** | Once per round, when a creature **misses you** in melee, immediately make one weapon attack against it. |
| **Heavy** | **Cleave** | When your attack drops a creature to 0 HP, make another attack against a different target in reach, same action. |
| **Ranged** | **Deadeye** | Your ranged attacks ignore half-cover. Once per turn, if your target is at **Far** range, deal **+1d6** on a hit. |

### Armor perks
| Component | Perk | Effect |
|---|---|---|
| **Light armor** | **Slip Away** | When an adjacent enemy takes an action that isn't attacking you, move up to **half your Speed** without provoking. |
| **Heavy armor** | **Bulwark** | Allies adjacent to you have **+1 Armor**. *(A flat bonus to a static defense — permitted; the "no stacking +1" rule governs d20 rolls.)* |

### School perks
| Component | Perk | Effect |
|---|---|---|
| **Destruction** | **Devastation** | Once per turn, reroll 1s and 2s on a Destruction spell's damage dice. |
| **Conjuration** | **Master Summoner** | Your summons get **+1 to attack** and last **2 extra rounds** (see Summoning, [10-spell-list.md](10-spell-list.md)). |
| **Alteration** | **Arcane Ward** | While you have **1+ mana**, you gain **+2 Armor**. |
| **Illusion** | **Beguiling** | Creatures roll at **disadvantage** to resist or break free of your Illusion effects. |
| **Restoration** | **Divine Touch** | As your action, touch a creature to heal **`1d6 + pool`**. Usable **`1 + pool`** times per rest. |

## The override perk

> Each class ships with **one unique signature perk**, which you may **swap in for any one of your 3 component perks.** It replaces, never adds — total stays 3. It's tuned to ≈ a component perk in power (unique, not stronger), and it's the one thing only your class does. Optional: keep all 3 component perks if you prefer.

---

## How the original four map

| Old class | New class (#) | Components | Component perks |
|---|---|---|---|
| **Warrior** | **Knight** (#9) | Medium + Heavy · Heavy armor · Might | Riposte · Cleave · Bulwark |
| **Scout** | **Ranger** (#3) | Light + Ranged · Light armor · Agility | Sneak Strike · Deadeye · Slip Away |
| **Mage** | **Mage** (#34) | Conjuration + Illusion · Light armor · Mind | Master Summoner · Beguiling · Slip Away |
| **Priest** | **Priest** (#37) | Alteration + Restoration · Light armor · Spirit | Arcane Ward · Divine Touch · Slip Away |

## Building a character (revised step 2 of [02-character-creation.md](02-character-creation.md))

1. Assign abilities `+3 / +2 / +1 / +1 / +0`.
2. **Pick a class** → `+1` to its primary, weapon/armor/school training, HP tier, mana (if any), 3 component perks + 1 override.
3. Ancestry (`+1` + trait). 4. Background (+1 training). 5. Three trainings (4 if Human). 6. Defenses, equipment, spells.

---

## The 48-class roster

### ⚔️ Fighting — armored *(2 weapons + 1 armor)*
| # | Class | Weapons | Primary | Armor | HP |
|---|---|---|---|---|---|
| 1 | Duelist | Light + Medium | Might | Light | Mid |
| 2 | Reaver | Light + Heavy | Might | Light | Mid |
| 3 | Ranger | Light + Ranged | Agility | Light | Mid |
| 4 | Berserker | Medium + Heavy | Might | Light | Mid |
| 5 | Skirmisher | Medium + Ranged | Might | Light | Mid |
| 6 | Outrider | Heavy + Ranged | Might | Light | Mid |
| 7 | Sentinel | Light + Medium | Might | Heavy | High |
| 8 | Vanguard | Light + Heavy | Might | Heavy | High |
| 9 | Knight | Medium + Heavy | Might | Heavy | High |

*(Heavy-armor classes carry no ranged weapon, per weight rule ②.)*

### 🗡️ Fighting — naked weapon-master *(3 weapons, no armor)* — HP Low
| # | Class | Weapons | Primary |
|---|---|---|---|
| 10 | Gladiator | Light + Medium + Heavy | Might |
| 11 | Blademaster | Light + Medium + Ranged | Might |
| 12 | Marauder | Light + Heavy + Ranged | Might |
| 13 | Weaponmaster | Medium + Heavy + Ranged | Might |

### 🪄 Half-caster *(1 school + light weapon + light armor)* — HP Mid
| # | Class | School | Pool |
|---|---|---|---|
| 14 | Spellblade | Destruction | Mind |
| 15 | Adept | Conjuration | Mind |
| 16 | Warden | Alteration | Spirit |
| 17 | Trickster | Illusion | Charisma |
| 18 | Acolyte | Restoration | Spirit |

### 🔮 Spellsword *(2 schools + martial weapon, no armor)* — HP Low
| # | Class | Schools | Pool |
|---|---|---|---|
| 19 | Death Knight | Conjuration + Destruction | Spirit |
| 20 | Battlemage | Alteration + Destruction | Mind |
| 21 | Hexblade | Destruction + Illusion | Charisma |
| 22 | Paladin | Destruction + Restoration | Spirit |
| 23 | Spellforged | Alteration + Conjuration | Mind |
| 24 | Witch-blade | Conjuration + Illusion | Charisma |
| 25 | Wraith Knight | Conjuration + Restoration | Spirit |
| 26 | Mindblade | Alteration + Illusion | Mind |
| 27 | Cleric-Knight | Alteration + Restoration | Spirit |
| 28 | Sword-Bard | Illusion + Restoration | Charisma |

### ✨ Caster *(2 schools + light armor)* — HP Mid
| # | Class | Schools | Pool |
|---|---|---|---|
| 29 | Warlock | Conjuration + Destruction | Charisma |
| 30 | Sorcerer | Alteration + Destruction | Charisma |
| 31 | Mentalist | Destruction + Illusion | Mind |
| 32 | Templar | Destruction + Restoration | Spirit |
| 33 | Artificer | Alteration + Conjuration | Mind |
| 34 | Mage | Conjuration + Illusion | Mind |
| 35 | Shaman | Conjuration + Restoration | Spirit |
| 36 | Enchanter | Alteration + Illusion | Charisma |
| 37 | Priest | Alteration + Restoration | Spirit |
| 38 | Bard | Illusion + Restoration | Charisma |

### 🌌 Full caster *(3 schools, no armor)* — HP Low
| # | Class | Schools | Pool |
|---|---|---|---|
| 39 | Elementalist | Alteration + Conjuration + Destruction | Mind |
| 40 | Archmage | Conjuration + Destruction + Illusion | Mind |
| 41 | Necromancer | Conjuration + Destruction + Restoration | Spirit |
| 42 | Spellmystic | Alteration + Destruction + Illusion | Mind |
| 43 | Oracle | Alteration + Destruction + Restoration | Spirit |
| 44 | Witch | Destruction + Illusion + Restoration | Charisma |
| 45 | Mystic | Alteration + Conjuration + Illusion | Charisma |
| 46 | Druid | Alteration + Conjuration + Restoration | Spirit |
| 47 | Spiritualist | Conjuration + Illusion + Restoration | Spirit |
| 48 | Seer | Alteration + Illusion + Restoration | Spirit |

---

## Class signatures — descriptions & overrides

Each class's one-line identity and its unique **override perk** (swaps in for one component perk). 🌶️ = flagged for playtest.

### Fighting — armored
- **1 · Duelist** — *A nimble blade-dancer who turns a foe's commitment into an opening.*
  ↳ **En Garde:** mark a creature you hit in melee; while marked it has disadvantage attacking anyone but you, and you have advantage on Riposte against it.
- **2 · Reaver** — *A savage raider who fights harder as the wounds pile up.*
  ↳ **Bloodlust:** while below half HP, your melee attacks deal +1d6 and you're immune to Frightened.
- **3 · Ranger** — *A wilderness hunter who marks prey and never loses it.*
  ↳ **Hunter's Mark:** mark a creature (free, 1/turn); your attacks against it ignore cover and deal +1d6. Re-marks on a kill.
- **4 · Berserker** — *A reckless warrior who trades skin for slaughter.*
  ↳ **Rage** (free, 1/rest, 1 min): melee attacks +1d6 and advantage on Might, but attacks against you have advantage.
- **5 · Skirmisher** — *A mobile soldier who strikes and slips away.*
  ↳ **Hit and Run:** after you attack, move up to half your Speed without provoking.
- **6 · Outrider** — *A roving heavy hitter who softens foes at range, then closes.*
  ↳ **Overwhelm:** when you hit with a ranged attack, your next melee attack vs. that target has advantage (and vice-versa).
- **7 · Sentinel** — *An immovable guardian who punishes anyone who ignores them.*
  ↳ **Guardian's Wrath:** when an enemy in reach attacks an ally (not you), immediately make a melee attack against it.
- **8 · Vanguard** — *The first through the breach, an armored spearhead.*
  ↳ **Breach:** as your action, charge your full Speed in a line and attack; on a hit, knock the target Prone. *(Note: as a double-heavy build, this is its move-or-attack turn.)*
- **9 · Knight** — *A disciplined heavy fighter, the wall the line forms around.* *(the old Warrior)*
  ↳ **Second Wind:** once per rest, as part of any action, regain `1d6 + level` HP.

### Fighting — naked weapon-master
- **10 · Gladiator** — *A crowd-pleasing arena fighter who feeds on the kill.*
  ↳ **Adrenaline:** each time you drop a creature to 0 HP, your next attack this round deals +1d6.
- **11 · Blademaster** — *A peerless weapon artist who answers steel with steel.*
  ↳ **Deflect:** once per round, when hit, reduce the damage by `1d8 + primary`.
- **12 · Marauder** — *A brutal pillager who finishes the wounded without mercy.*
  ↳ **Pillage:** your attacks against creatures below half HP deal +1d8.
- **13 · Weaponmaster** — *A master of every armament — devastating, but exposed.*
  ↳ **Stance:** at the start of your turn, choose +1d6 damage **or** +2 Armor until your next turn.

### Half-caster
- **14 · Spellblade** — *A warrior-mage who sheathes fire in steel.*
  ↳ **Spellstrike:** on a weapon hit, spend 1 mana to add `1d8` Destruction damage (your element).
- **15 · Adept** — *A novice summoner backed by a conjured ally.*
  ↳ **Bonded Blade** (1/rest, no mana): conjure a spectral weapon that fights on your turn for the encounter (your spell attack, `1d8`).
- **16 · Warden** — *A protector who hardens flesh against harm.*
  ↳ **Stoneflesh:** as your action, grant yourself or a touched ally +3 Armor (ongoing, 1 min).
- **17 · Trickster** — *A deceiver who strikes from a fold in perception.*
  ↳ **Vanishing Act:** once per round after you attack, briefly vanish — attacks against you have disadvantage and your next attack has advantage.
- **18 · Acolyte** — *A field medic who mends as they fight.*
  ↳ **Battle Prayer:** once per rest, every ally in Near regains `1d6 + pool` HP.

### Spellsword *(naked, 2 schools + a martial weapon)*
- **19 · Death Knight** — *A grim warrior wreathed in necrotic power and raised servants.*
  ↳ **Soul Reap:** when you drop a creature with a weapon attack, regain `1d6` mana (max your pool).
- **20 · Battlemage** — *An armored-in-magic blaster who fights in the thick of it.*
  ↳ **Runic Weapon:** your weapon attacks deal **+1d6** of a chosen element (fire/frost/shock). An at-will rider — no extra action.
- **21 · Hexblade** — *A cursed blade that unmakes mind and body together.*
  ↳ **Hex:** mark a creature (free, 1/turn); your spells and attacks vs. it deal +1d6 and it has disadvantage on its first attack each round.
- **22 · Paladin** — *A holy warrior of smiting wrath and mending light.*
  ↳ **Divine Smite:** on a weapon hit, spend 1–3 mana to deal `1d8` radiant per mana.
- **23 · Spellforged** — *An artificer-warrior clad in conjured arms and wards.*
  ↳ **Arsenal** (1/rest): conjure a bound weapon (`1d10`, your spell attack) and +2 Armor for the encounter.
- **24 · Witch-blade** — *A fey-touched duelist flanked by phantasms.*
  ↳ **Phantom Double** (1/rest): an illusory twin grants you disadvantage-to-be-hit until first struck, and once grants you advantage.
- **25 · Wraith Knight** — *A deathless sentinel who siphons life to endure.*
  ↳ **Lifedrain:** on a weapon hit, spend 1 mana to heal yourself `1d6`.
- **26 · Mindblade** — *A psionic warrior whose blade is an extension of will.*
  ↳ **Psychic Lash:** once per turn, your weapon attack targets **Mind** (psychic); on a hit the target has disadvantage on its next attack.
- **27 · Cleric-Knight** — *A consecrated guardian who shields and heals in armor of faith.*
  ↳ **Aegis:** once per round, when an ally in Near is hit, reduce that damage by `1d6 + pool`.
- **28 · Sword-Bard** — *A blade-singer who bolsters allies and beguiles foes.*
  ↳ **Battle Hymn:** as your action, allies in Near get advantage and enemies in Near disadvantage on their next attack.

### Caster
- **29 · Warlock** — *A pact-caster who hurls eldritch fire and calls servitors.*
  ↳ **Eldritch Blast:** signature cantrip — `1d10` force at Far, 0 mana; `1d12` while you have no mana left.
- **30 · Sorcerer** — *A wild innate caster who bends and amplifies their magic.*
  ↳ **Overcharge:** once per turn, spend 1 extra mana on a damage spell to maximize one of its dice.
- **31 · Mentalist** — *A mind-burning caster who shatters thought and body.*
  ↳ **Mind Spike** (1/rest): a creature in Near rolls Mind vs. your spell attack or is Stunned 1 round + takes `2d6` psychic.
- **32 · Templar** — *A militant healer who scourges foes and saves allies.*
  ↳ **Radiant Surge:** when you cast a Destruction spell, heal an ally in Near `1d6`.
- **33 · Artificer** — *A maker who conjures tools, turrets, and constructs.*
  ↳ **Turret** (1/rest): conjure a construct (acts on your turn, ranged `1d8`, 13 HP) for the encounter.
- **34 · Mage** — *The classic arcanist: summons, glamours, and clever control.* *(the old Mage)*
  ↳ **Arcane Recovery:** once per rest, regain `1d4 + level` mana.
- **35 · Shaman** — *A spirit-speaker who calls ancestral aid and mends the tribe.*
  ↳ **Ancestral Spirit** (1/rest): summon a guardian (acts on your turn, melee `1d8`, or heals an adjacent ally `1d6`).
- **36 · Enchanter** — *A subtle manipulator of minds and matter.*
  ↳ **Dominate** (1/rest): a creature you've Charmed obeys one command — move + one action — on its turn.
- **37 · Priest** — *A devoted healer and warder of the faithful.* *(the old Priest)*
  ↳ **Intercession:** once per rest, when an ally in Near would drop to 0 HP, they drop to 1 instead and you heal them `1d6 + pool`.
- **38 · Bard** — *A charismatic performer who inspires allies and bewitches foes.*
  ↳ **Inspiration** (free, `1+pool`/rest): give an ally advantage on their next roll of any kind.

### Full caster
- **39 · Elementalist** — *A master of raw elements — fire, frost, and stone.*
  ↳ **Attunement:** each turn choose fire (+1d6), frost (halve target Speed), or stone (+2 Armor to you) on your Destruction spells.
- **40 · Archmage** — *The pinnacle arcanist — devastating and endlessly versatile.*
  ↳ **Spell Mastery:** choose one Lesser spell you know; once per rest, cast it without paying mana.
- **41 · Necromancer** — *A death-mage who raises the fallen and drains the living.*
  ↳ **Raise Dead** (1/rest): raise a slain creature in Near as a thrall (acts on your turn, `1d8`) for the encounter.
- **42 · Spellmystic** — *A reality-warper blending force, fire, and falsehood.*
  ↳ **Warp:** once per round, as a free action, teleport up to Near range.
- **43 · Oracle** — *A seer channeling divine foresight, wrath, and healing.*
  ↳ **Foresight:** once per round, force any creature in sight to reroll a d20; you pick which result stands.
- **44 · Witch** — *A hedge-sorceress of curses, hexes, and old remedies.*
  ↳ **Curse:** mark a creature (free, 1/turn); it has disadvantage on defenses vs. your spells, which deal +1d6 against it.
- **45 · Mystic** — *An enigmatic caster of wards, phantoms, and bound spirits.*
  ↳ **Astral Step** (1/rest): become incorporeal until your next turn — move through anything, can't be grappled, attacks vs. you have disadvantage.
- **46 · Druid** — *A keeper of the wilds who shapes nature and calls beasts.*
  ↳ **Wild Shape** (1/rest): become a beast (GM's equivalent pick) up to 10 min; revert at your HP when it drops. 🌶️
- **47 · Spiritualist** — *A medium who walks with spirits and mends through them.*
  ↳ **Possession** (1/rest): a willing ally in Near immediately takes a full extra turn, guided by a spirit. 🌶️
- **48 · Seer** — *A prophet who sees the strands of fate and reweaves them.*
  ↳ **Ward of Fate:** once per round, when an ally in Near is hit, you may cause the attack to miss instead.

---

## What this system doesn't have

- Subclasses or multiclassing (the combinations replace both).
- A separate martial resource pool (at-will weapons are the martial engine).
- A speed stat for armor (weight rule ③ handles it via tempo, not Speed).
- Per-class bespoke rules beyond 3 perks + 1 override.
- More than 3 perks on any character, ever (the balance invariant).
