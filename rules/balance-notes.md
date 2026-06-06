# Balance Notes — Martials vs. Casters (Level 1)

A living design doc. Captures a balance analysis of the four base classes and the **guardrails to protect when expanding the catalog** (new classes, bigger spell roster, material tiers). Not a rule — a reference for whoever designs new content.

> **The question that prompted this:** *"Casters have cantrips AND spells — doesn't that give them a greater number of actions than a Warrior or Scout?"*
>
> **Short answer:** No. Action economy is flat (one action per turn for everyone). A cantrip is the caster's *at-will basic attack* — the equivalent of a sword swing — not a bonus action. And at the at-will level the martials hit ~3× harder. See below.

## Reference builds (Human ancestry, `+3/+2/+1/+0` array, starting kits)

Using Human for all four standardizes each at **primary +5** with a 4th training — apples-to-apples.

### 🛡️ Warrior
- Might +5, Spirit +2, Agility +1, Mind +0 · **HP 15**
- **Armor 19** (Steel heavy: 10 + Might 5 + 4) · Mind 10 · Spirit 12
- Longsword **+7 → 1d8+5** (avg 9.5) · Greatsword +7 → 1d10+5 (avg 10.5)
- Cleave · Bulwark (+1 Armor to adjacent allies)

### 🏹 Scout
- Agility +5, Mind +2, Might +1, Spirit +0 · **HP 9**
- **Armor 17** (Leather light: 10 + Agi 5 + 2) · Mind 12 · Spirit 10
- Longbow **+7 → 1d8+5** (avg 9.5); **+1d6 Sneak Strike** → ~13, at Far range
- Sneak Strike · Slip Away

### 🔮 Mage
- Mind +5, Agility +2, Might +1, Spirit +0 · **HP 7**
- **Armor 12** (none) · Mind 15 · Spirit 10 · **Mana 6**
- Spark +7 → 1d6 (avg 3.5) · Daze +7 vs Mind → Stun
- Magic Missile (auto-hit 10.5) · Burning Hands (7/target cone) · Shield (reaction +5 Armor)
- Spellcasting · Arcane Recovery

### ⛪ Priest
- Spirit +5, Might +2, Agility +1, Mind +0 · **HP 10**
- **Armor 13** (Leather light: 10 + Agi 1 + 2) · Mind 10 · Spirit 15 · **Mana 6**
- Mace +4 → 1d8+2 (avg 6.5) · Sacred Flame +7 → 1d8 (avg 4.5)
- Cure Wounds (heal 14) · Healing Word (heal 8.5 at range, wakes downed) · Bless
- Divine Touch (heal 8.5, **6×/rest**) · Spellcasting

## Comparison

| | Warrior | Scout | Mage | Priest |
|---|---|---|---|---|
| HP | 15 | 9 | 7 | 10 |
| Armor | 19 | 17 | 12 | 13 |
| At-will dmg/turn | 9.5 | 9.5–13 | 3.5 | 4.5–6.5 |
| Burst (costs mana) | — | — | 10.5 auto / 7-AoE | — |
| Sustain | ∞ | ∞ | ~6 big turns → cantrips | ∞ melee, 6 mana magic |
| Healing | — | — | — | **only one** |
| Control/disable | — | — | Daze, Sleep, Burning Hands | Bless (buff) |
| **Actions per turn** | **1** | **1** | **1** | **1** |

## The action-economy point (the crux)

**Everyone gets one action per turn.** A cantrip is not an extra action — it's the caster's at-will basic attack, costing 0 mana the same way a sword swing costs 0 resource. A Mage cannot cast a cantrip *and* a spell in one turn.

And the at-will damage favors martials heavily:

| At-will attack | Avg dmg |
|---|---|
| Warrior longsword | 9.5 |
| Scout longbow (+sneak) | 9.5–13 |
| Mage Spark | 3.5 |
| Priest Sacred Flame | 4.5 |

A caster out of mana does ~⅓ a martial's damage from a body with half the HP. Casters buy a **menu** (burst, AoE, control, heal, utility), not extra **turns**, and the menu is rationed by mana (~6 big plays, then back to weak cantrips).

## Where "casters feel strong" actually comes from (mostly intended)

1. **Versatility, not volume** — a caster always has a meaningful option; a martial's answer is "I hit it." Breadth feels like more, but it's spent one action at a time.
2. **Burst & reliability** — Magic Missile can't miss; Burning Hands hits a cone; Sleep removes two enemies. Higher ceiling, lower floor, finite count.
3. **Healing monopoly** — only the Priest heals. Makes the Priest *mandatory*, which is a different problem from *overpowered*.

## The levers that already balance it

- ⚖️ **Flat action economy** — the single biggest anti-bloat rule. No bonus-action spells, no free cantrip-plus-spell turns, no general reaction slot. **Protect this above everything.**
- ⛽ **Mana scarcity + no short rest + hard-to-rest-mid-dungeon** — over a long day, martials' infinite output overtakes finite caster burst. The explicit balance knob.
- 💀 **Fragility** — Mage at 7 HP / Armor 12 dies fast. Power bought with a glass jaw.
- 🪓 **Martial identity** — Cleave (the one legit "extra attack": chain KOs in one action), Bulwark (team defense aura), Sneak Strike (+1d6 every turn), best HP/Armor. Martials are the reliable, durable, infinite option.

## Verdict

**Not OP in the "more actions" sense** — actions are flat and cantrips are a *weaker* basic attack, not a bonus turn. In raw combat, **martials lead on damage, durability, and sustain**; casters trade all three for **versatility + burst + (Priest) healing**. Classic, healthy fighter/caster tension; at level 1 it tilts *toward* the martials.

Two genuine soft spots to watch:
- 🧭 **Out-of-combat coverage** — casters cover more non-combat pillars (Arcana, Investigation, utility cantrips, Detect Magic, Comprehend Languages). This is where "casters do more" is true: exploration & problem-solving, not combat actions.
- 🩹 **Healing monopoly** — the Priest feels required.

## ⚠️ Guardrails for expanding the catalog

When adding classes, spells, weapons, and armor (the "bigger roster" plan), the balance holds **only if**:

1. **One action per turn stays sacred.** Never print a bonus-action cast, a free off-turn cantrip, or any "cast a spell AND attack" feature. This is the rule that prevents 5e-style caster supremacy.
2. **Mana stays scarce.** No per-encounter refresh, no easy mid-dungeon rest, no mana batteries. Finite resources are why infinite martials keep pace.
3. **New martial classes get a reliable, infinite identity** of their own (a Cleave-equivalent, an aura, a consistent rider) — not just "hits things."
4. **Caster power scales by *new options*, not *more actions or more resources per turn*.** A bigger spell list widens the menu; it must not widen the turn.
5. **Watch the utility/pillar gap** — as the spell roster grows, casters gain more non-combat answers. Give martials and skill-focused classes their own exploration/social levers so they don't become combat-only.
6. **If healing spreads to more classes**, the Priest's "mandatory" pressure eases — a healthy change, but re-check that no class becomes a strictly-better healer.

> The one-line guardrail: **a bigger catalog should widen the menu, never widen the turn.**

---

# The component-class system (the realized catalog)

The "bigger roster" plan above shipped as the **48-class component system** ([19-classes.md](19-classes.md)) + the school-tagged spell catalog ([10-spell-list.md](10-spell-list.md)). This section records how it stays balanced and where it brushed against the guardrails.

## The balance spine: 3 components, fixed unlock schedule

Every class — fighter, caster, or hybrid — is built from **exactly 3 components**, and grows on a **fixed schedule** ([03-progression.md](03-progression.md)):

- **Build economy:** 2 component picks (weapon types / schools) + an armor tier = the baseline. **Going naked (no armor) buys a 3rd pick** but drops you to the lowest HP *and* lowest Armor. The budget is always **3 components**.
- **Each component is a 2-perk track** (basic + advanced), so the full kit is **6 perks**, unlocked one per perk-level (3/6/9/12/15/18). On top, every character has **2 Signatures** from level 1 (Racial + Class) and a level-20 **capstone**.
- This stays *checkable by counting*: a build is legal iff it lands on 3 components, and because the schedule is fixed, **every character of level N has the same number of abilities** (2 signatures + perks unlocked). No bespoke tuning per class.

**Signature rule:** the Class Signature (formerly the "override") must be **≈ a perk in power** — unique, not stronger. The change from the old system: it's now a **standalone level-1 grant**, not a swap. Everyone gets it, uniformly, so relative balance is unchanged; the absolute floor rose slightly (you no longer pay a perk for it), which is the intended new baseline. **Advanced-rung perks and the Class-Signature ascensions are playtest items** — tuned to a strong veteran/master perk, watch they don't out-scale.

## HP & survivability by armor tier

HP now rides the armor tier instead of a per-class number:

| Tier | HP | Armor (lvl 1, primary +5) |
|---|---|---|
| Heavy | `10 + Might` | ~19 |
| Light | `8 + Might` | ~15–17 |
| None | `6 + Might` | ~12 |

- **Naked classes are squishy in both HP and Armor** — that double-fragility is what *pays for* the extra pick. It's the glass-cannon tax that balances the 3-school full casters and the naked spellswords.
- **Casters gained durability:** light armor is now cast-friendly, so a standard caster sits at `8 + Might` HP / ~15 Armor instead of the old Mage's `6` / `12`. **Watch this** — it's a real buff to caster survivability; if casters feel too tanky, the lever is to push more of them toward the naked (3-school) tier or trim light-caster HP back to 6.

## Where it tested the guardrails (and the fixes)

- **Guardrail #1 (one action — never "cast AND attack").** The first draft of **Battlemage** had *Spell Burst* (weapon attack **plus** a cantrip same turn) — a direct violation. **Fixed** to *Runic Weapon* (an at-will +1d6 rider on weapon hits — widens the hit, not the turn). All other gish signatures (Spellstrike, Divine Smite, Hex, Lifedrain, Psychic Lash) are **riders on an attack you're already making**, not second actions — legal.
- **Guardrail #2 (mana stays scarce).** **Archmage**'s *Spell Mastery* was "a Lesser spell for 0 mana **once per round**" — effectively +mana every turn. **Fixed** to **once per rest**. A per-round free spell is the kind of resource-widening to refuse.
- **Guardrail #1, summons.** Conjuration adds bodies that attack — the classic action-economy bloat. Contained by the **summon leash**: a summon is *tethered* (acts right after your turn, no initiative slot) and **counts as your one ongoing spell** ([09-magic.md](09-magic.md)), so you can field **only one**, and not alongside another ongoing spell. Summon class signatures (Adept, Spellforged, Artificer, Shaman, Necromancer) obey the same leash.
- **Guardrail #3 (martials get an infinite identity).** Component perks deliver it: every weapon carries a reliable rider (Cleave, Sneak Strike, Deadeye, Riposte) and armor carries Bulwark/Slip Away. Fighters keep at-will weapons as their engine; no martial resource pool was added.

## Remaining watch-items (playtest)

- 🌶️ **Druid — Wild Shape** and **Spiritualist — Possession** (grants a full extra ally turn) are the two spiciest Class Signatures. Once-per-rest contains them; re-check they don't dominate.
- 🩹 **Healing spread.** Restoration is now reachable by many classes (Priest, Templar, Shaman, Bard, Cleric-Knight, Acolyte, Paladin, Oracle, Necromancer, Druid, Seer, Spiritualist…). This *eases* the old "Priest mandatory" problem (good) — verify no class becomes a strictly-better healer than another at equal investment.
- ⛽ **Uniform mana.** Every caster tier uses `level + pool`, regardless of 1, 2, or 3 schools. Breadth and survivability differentiate them, not fuel. If a 1-school half-caster's reliability + weapon makes it outshine the squishy 3-school full caster, the knob is school-count-scaled spells-known or a small mana bump for the committed casters.

## Heavy gear & the single-primary rule (two holes closed)

Two structural holes were found and fixed after the first roster draft:

- **Armor had no real cost** — heavy strictly beat light for fighters (its only downside, "no casting," is free to a non-caster). Fixed *without a Speed stat* by **Set to Strike** (move + attack in heavy gear → disadvantage; heavy weapon *and* heavy armor → move-or-attack) plus **no ranged weapons in heavy armor**. Heavy = immovable, kiteable, can't shoot; light = mobile; none = +1 perk but fragile. The same tempo rule gives **heavy weapons** a genuine drawback vs. medium (plant to swing, on top of two-handed/no-shield). This also auto-pruned the heavy-armor-archer classes: **51 → 48**.
- **Gish were MAD** — weapon stat (Might/Agility) ≠ spell stat (pool), so every hybrid was half-weak. Fixed by the **single-primary rule**: one ability powers *all* attacks, weapon and spell. A Mind-Battlemage's blade and fire both scale off Mind. This makes the naked 2-school **Spellsword** coherent (lightly built is fine — it's a caster that strikes with magic), which is what lets the **3-perk invariant** stand: *weapon + 2 schools + armor = 4 perks is illegal*, so a 2-school gish stays naked and an armored gish takes only 1 school.
  - ⚠️ Watch: single-primary removes the old MAD tax, so gish got *better*. Their remaining cost is fewer schools and/or no armor — re-check in play that they don't eclipse pure martials or pure casters.

> The spine: **every build is 3 components (2 signatures + 6 perks over levels); one primary powers everything; heavy gear trades mobility for protection; nothing ever widens the turn.**

---

# Charisma — the fifth ability (and fourth defense)

A later pass added **Charisma** as a fifth ability and a third caster pool, alongside Mind and Spirit. The goal: a clean home for *innate* magic (sorcery, pact, song) and for social play, without adding any new economy.

## What changed, and why it's balance-neutral

- **Five abilities, array `+3/+2/+1/+1/+0`** (was `+3/+2/+1/+0` over four). One extra `+1` compensates for the extra stat to cover — characters still have a `+0` dump. The **math ceiling is unchanged**: max `+3` at creation → `+5` after bumps, so `d20 + 9` stands for the whole game.
- **A fourth defense, `10 + Charisma`.** The three caster abilities are now fully symmetric: each is both a *pool* and a *defense*. This is the one place the change adds complexity (a fourth number on every sheet and stat block) — an accepted trade for symmetry.
- **The three pools are mechanically identical** (`level + pool`). Charisma is not stronger or weaker than Mind/Spirit; it differs only in *which defense the caster naturally has high* and in flavor (studied / devoted / innate). So re-tagging 10 classes to Charisma changed **no class's power** — only its high defense and its dump-stat exposure.

## The defense re-carve (the only real design choice)

For a Charisma *defense* to matter, effects had to target it. The carve:

- **Mind** — hijacks cognition: illusion, sleep, psychic, paralysis (*Hold Person*), domination (*Dominate Mind*).
- **Charisma** — bends the heart/will: **charm and fear** (*Charm Person*, *Fear*, *Terror* moved here from Mind).
- **Spirit** — assaults the soul/life: banishment, death-magic, possession, holy wrath.

This keeps each of the four defenses live (see the *All four defenses see fire* note in [10-spell-list.md](10-spell-list.md)). The Dwarf trait (*Stone-Hearted*) was repointed from Spirit→Charisma to match (fear/charm now resisted by Charisma).

## Watch-items

- ⚖️ **Charm/fear concentration on one defense.** Only three spells target Charisma today. That's thin but fine — it makes a high-Charisma caster's *own* Charisma defense quietly valuable, and the future signature/spell expansion (Points 5/magic) can add command/taunt/beguile effects there. Keep new charm/fear/command effects pointed at Charisma so the defense stays meaningful.
- 🎭 **Social rolls now key off Charisma** by default ([04-skills-and-checks.md](04-skills-and-checks.md)). This gives Charisma-pool casters (Bard, Sorcerer, Warlock…) a natural out-of-combat pillar — the same versatility lever other casters already enjoy, not a new power.
- 📇 **Stat-block churn.** Every monster now carries a Charisma defense (≈ Spirit, nudged: leaders/fiends/fey up, mindless down). Mindless undead/constructs are still *immune* to charm/fear, so their low number rarely bites.

---

# Level 20 & the progression ladder

The cap moved **10 → 20**, with a three-beat ladder (*Ability → Perk → Breadth*) and the perk/signature split ([03-progression.md](03-progression.md)). What protects balance across the longer track:

- 🧊 **The accuracy ceiling is frozen.** Training bonus caps at `+4` and any ability at `+5`, so the top attack/check total stays `d20 + 9` — and is reached around the veteran tier, never rising after. **Levels 8–20 add tools and HP, not bigger to-hit numbers.** This is the single rule that keeps a doubled level range from breaking monster math. Bounded accuracy is non-negotiable; if a future feature would raise the ceiling, it's the feature that's wrong.
- ⚖️ **Tiers rescaled, not renumbered:** Apprentice 1–7 · Veteran 8–14 · Master 15–20. Materials, training bonus, monster tiers, and spell-tier access all still key off these three bands; only the level spans widened.
- 🩹 **Martial ↔ caster parity on the breadth beat.** Each breadth level gives a caster `+1` spell *or* a non-caster `+1` training — parallel currencies, so neither half pulls ahead in growth count. Martials end up broadly skilled (≈9 trainings), casters spell-deep (9 known); that's the intended divergence, not an imbalance.
- ⛽ **Mana runs deep at high level** (`level + pool` → ~25 at L20). Watch-item, but bounded by three things: **spells known cap at 9**, the **adventuring day is long** (3–5 fights/rest), and **one ongoing spell at a time**. If a caster's day-long mana lets them trivialize single fights, the lever is a soft mana cap or a per-fight throttle — not touched for now.
- 💪 **HP roughly doubles by L20** (~175 heavy / ~110 naked). Monster *damage* scales within tier to match (see the scaling note in [12-monsters.md](12-monsters.md)); monster *to-hit* does not (frozen ceiling). Re-check that master-tier fights don't drag against bloated HP — the fix is always more monster damage, never more monster accuracy.

> The extended spine: **3 components → 2 signatures + 6 perks + a capstone, on a fixed schedule; numbers freeze at the veteran tier; the back half of the game is breadth, not bigger dice.**
