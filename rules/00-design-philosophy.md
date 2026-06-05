# 00 — Design Philosophy

This is the document every other document in this game answers to. When a later rule feels wrong, check it against this one.

## What this game is

A standalone tabletop RPG in the D&D tradition. Same shape: a party of heroes, a Game Master running the world, d20 rolls, classes, spells, monsters, levels. Different size: roughly **one-third the rules** of D&D 5e, with no loss of the things that make a campaign feel like a campaign.

It is **not** a one-shot board game and **not** a 5e supplement. Someone who has never played a tabletop RPG should be able to read this rulebook and run a campaign. Someone who knows 5e should be able to read it in under an hour and feel oriented.

## The three design goals, in order

1. **A new player can play their first turn correctly within 10 minutes of sitting down.** Not "understand the rules" — *play correctly*. This is the test every rule has to pass.
2. **The game still rewards system mastery.** Character choices matter. Tactics matter. Spell selection matters. We are stripping rules, not stripping depth.
3. **A GM can run a session with five minutes of prep.** Stat blocks fit on an index card. Encounter math is mental math. Rulings are faster than lookups.

When these three goals conflict, **goal 1 wins**. A rule that gives veteran players a juicy tactical option but slows down a newcomer's first turn is a bad rule for this game.

## What we are cutting, and why

These are 5e features (and broader D&D-tradition features) we are explicitly removing. Each cut has a reason; if a later doc wants to add one back, it has to argue against the reason.

| Cut | Reason |
|---|---|
| The action / bonus action / reaction split | Three resources for "what you do on your turn" is two too many. One action per turn, with named exceptions. |
| Opportunity attacks as a default rule | Slows every movement decision. Becomes an optional condition. |
| Spell slot ladder (1st–9th level slots) | Replaced with a flatter resource. See [09-magic.md](09-magic.md). |
| Concentration as a tracked status | Replaced with simpler "only one active spell at a time" framing. |
| Attunement | Doesn't exist. Magic items have their effect or they don't. |
| Encumbrance and carrying capacity | Doesn't exist. Carry what's reasonable; GM calls absurdities. |
| Racial subraces (Hill Dwarf vs. Mountain Dwarf, etc.) | One version of each ancestry. |
| Feats as a parallel progression system | Folded into class features. No feat tax. |
| Multiclassing | Doesn't exist as a system. Reflavor a class instead. |
| Six ability scores with score/modifier distinction | Collapsed. See [02-character-creation.md](02-character-creation.md). |
| Skill list of 18 named skills | Collapsed into a smaller set tied directly to ability scores. |
| Death saving throws as a mini-game | Replaced with a simpler downed state. See [07-hp-damage-death.md](07-hp-damage-death.md). |
| Tracking spell components, material costs | Doesn't exist. If a spell needs a thing, the spell says so in its text. |
| Short rest vs. long rest distinction | One rest type. See [03-progression.md](03-progression.md). |
| Exhaustion levels 1–6 | Replaced with a single Exhausted condition. |
| Hit dice as a separate healing resource | Healing comes from rests and spells. No third system. |
| Counting cantrip damage dice that scale at levels 5/11/17 | Cantrips have one damage line. They get better when you level the class. |

The pattern: **anything that adds a conditional modifier, a separate resource pool, or a sub-mini-game gets cut unless it earns its keep.**

## What we are protecting

Cuts are easy; what's harder is being clear about what we will *not* compromise. If a simplification threatens these, the simplification loses.

- **The d20 moment.** The game's heartbeat is rolling a d20 against a target number and reacting to what it shows. This stays untouched. No dice pools, no 2d6 curves.
- **Class identity.** A fighter, a wizard, a rogue, and a cleric have to *feel* mechanically different on turn one of level one. Not just reflavored.
- **Tactical combat.** Position, choice of target, choice of action — these still matter. We are not narrating combat into oblivion.
- **Spells you recognize.** Fireball, Cure Wounds, Shield, Magic Missile, Charm Person — the iconic spells survive, possibly renamed, mechanically simpler.
- **Character growth across a campaign.** Level 1 and level 10 characters are clearly different. Leveling is a moment, not a paperwork session.
- **GM authority.** The GM rules edge cases on the spot. The book doesn't try to anticipate everything.

## Design principles every other doc must follow

These are the rules the *rules* follow. If a later document violates one of these, it's the document that's wrong.

### 1. Small numbers, always

Bonuses and penalties are usually `+1`, `+2`, or `+3`. We don't stack five different `+1`s on a roll. **If you can't do the math in your head while drunk, it's too much math.** Target the player who never wants to look at a character sheet mid-turn.

### 2. One rule, not three

If a situation has three possible resolutions in 5e (action vs. bonus action vs. reaction; spell save vs. attack roll vs. auto-hit), this game picks one. Variety lives in *content* (different spells, different monsters), not in *meta-rules*.

### 3. Symmetry between players and monsters

A monster's attack works the same way as a player's attack. A monster's "save" works the same way as a player's check. There is no separate sub-system for the GM side of the screen. This halves what a new GM has to learn.

### 4. The d20 carries the variance

We use the d20 spread on purpose: a `1` should sometimes ruin a strong character's plan, and a `20` should sometimes save a weak one. Don't paper over that swing with floors, ceilings, or rerolls. RNG is a feature.

### 5. If it doesn't change the decision, cut it

A rule earns its place only if it changes what a player chooses to do. A `+1` modifier that the player would have applied to whatever they were going to do anyway is fake complexity. Cut it.

### 6. Rulings over rules

When the rule is unclear or missing, the GM picks something sensible and the game continues. The rulebook does not need to cover the edge case. The GM does not need to feel guilty about deciding. **A consistent ruling beats a correct one.**

### 7. Teachable in 30 seconds

For every rule, ask: can a player explain it to a new player in 30 seconds at the table, without looking at the book? If no, the rule is too big. Either shrink it or cut it.

### 8. No bookkeeping the players don't enjoy

Players enjoy tracking HP and spells. They don't enjoy tracking rations, arrows, torch durations, or encumbrance. We track the first kind. We don't track the second.

## The complexity budget

Total rulebook target: **roughly 60 pages of actual rules**, plus reference content (spell list, bestiary, equipment).

Per-doc soft caps:
- Core mechanic, character creation, combat: aim for 4–6 pages each.
- Magic: aim for 8 pages (the most expensive system).
- Everything else: 2–4 pages.

If a doc blows its budget, that's a signal we've over-designed the system, not a signal the budget was wrong. Cut first.

## How we'll know it's working

The game is succeeding if:
- A first-time player makes their character in 15 minutes.
- A first-time GM runs a fight without flipping back to the book.
- A combat round between four players and three monsters takes under 10 minutes.
- "What does my character do?" has an obvious answer almost every turn.
- The book fits in a tab in someone's browser, not a binder on their desk.

The game is failing if:
- Players are asking "wait, can I also do X?" every turn.
- The GM is doing arithmetic between every action.
- Anyone says "let me look that up" more than once a fight.
- A new player needs a veteran to translate their character sheet.

## The contract with the rest of these docs

Every other document in this directory is downstream of this one. When you read [05-combat.md](05-combat.md) or [09-magic.md](09-magic.md), you should be able to point at any rule and trace it back to a principle here. If you can't, the rule is suspect — or this doc is missing something and needs updating.

We will revise this document as we go. It is the spec, not a manifesto.
