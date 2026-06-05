# 01 — The Core Mechanic

This is the only resolution rule in the game. Combat, magic, sneaking, lying, climbing, picking a lock, resisting a curse — all of them are the rule below with different numbers plugged in.

## The rule

> **When you try something that could fail and matters, roll a d20, add one modifier, and compare it to a target number. Meet or beat the number: you succeed. Miss it: you fail.**

That is the entire game. Everything that follows is a clarification of one of those four pieces: *when you roll*, *what modifier*, *what target number*, *what happens on a 1 or 20*.

## Target numbers

The GM tells you what target number you're rolling against. There are three:

| Difficulty | Target | Feel |
|---|---|---|
| **Easy** | 10 | A trained person succeeds most of the time. An untrained person has a real chance. |
| **Hard** | 15 | The right tool for the job; failure is plausible. |
| **Heroic** | 20 | A story-worthy feat. Even an expert can blow it. |

That is the whole scale. The GM may go to **5** for trivial-but-not-automatic, or **25** for legendary, but in practice almost every roll in the game is 10, 15, or 20.

If the GM is unsure, the answer is **15**. Default to Hard and adjust by feel.

### When *not* to roll

The GM does not call for a roll when:
- Success is the only outcome that makes sense given the character's training. *(A trained thief opens an ordinary house lock without dice.)*
- Failure is the only outcome that makes sense. *(A barbarian with no magical training cannot decipher the rune by rolling well.)*
- The roll would not change the story regardless of result.

**Roll only when the outcome is in doubt and the result will matter in the next minute of play.** This is not advice; it is a rule. Calling for unnecessary rolls is the single biggest source of slowdown at the table.

## Modifiers

Two things, at most, get added to your d20.

1. **Your ability modifier** for whichever ability the task uses. Ability modifiers range from **−1 to +5** across the entire game. (See [02-character-creation.md](02-character-creation.md) for the abilities themselves.)
2. **Your training bonus**, if your character is trained in this kind of task. The training bonus is **+2 at low levels, +3 at mid levels, +4 at high levels**. You either have it or you don't — no half-training, no expertise tiers.

That is the entire modifier stack. **A character's bonus on any roll is somewhere between `−1` and `+9` for the whole life of the game.** No situational `+1`s, no flanking bonus, no bardic inspiration math, no stacked buffs that turn the turn into arithmetic.

> **Principle:** if a feature would add yet another `+1`, it instead grants **advantage** (below). Modifiers are reserved for who the character *is*; advantage is reserved for the situation they're *in*.

## The natural 20 and the natural 1

These check the d20 itself, before modifiers.

- **Natural 20** is the best possible outcome the situation allows. In combat, this is a **critical hit**: roll your damage dice twice and add them together (modifiers added only once). Outside combat, the GM narrates a result better than the player asked for — extra information, an additional benefit, a stroke of luck on top.
- **Natural 1** is the worst possible outcome. In combat, you miss *and* something bad happens — you drop the weapon, expose a flank, hit an ally. Outside combat, you fail *and* introduce a complication.

A natural 1 is not "you take the modifier off and check the total against the target." It is an automatic, dramatic failure. The d20 is allowed to ruin your day. That's the contract — the game keeps variance interesting by letting it actually matter.

## Advantage and disadvantage

This is the one situational modifier in the game. It replaces every other "circumstance bonus" you might think of.

- **Advantage:** roll **two** d20s, use the **higher** one.
- **Disadvantage:** roll **two** d20s, use the **lower** one.

Rules:
- You either have advantage or you don't. Multiple sources of advantage don't stack.
- One source of advantage and one source of disadvantage **cancel each other**, and you roll a normal single d20. It doesn't matter how many of each — any of one cancels any of the other.

Anywhere in this rulebook, when a rule could have said `+2 in this situation`, it instead says `advantage in this situation`. That is the design substitution. You will see it constantly.

## One roll per action: the active player rolls

This game has **no contested rolls** and **no saving throws against attacks.** Whoever is taking the action makes the only roll.

- A fighter swinging a sword: the fighter rolls vs. the target's **Armor** defense.
- A wizard casting a mind-control spell: the wizard rolls vs. the target's **Mind** defense.
- A rogue trying to sneak past a guard: the rogue rolls vs. the guard's **Awareness**.
- A monster biting a player: the monster rolls vs. the player's Armor defense.

Defenses are static numbers on the character sheet. They don't roll; they are rolled *against*. This is symmetric: a player's attack and a monster's attack use the exact same procedure. There is no separate "saving throw" subsystem to learn.

The exception is at the GM's discretion: **when neither side is really "acting" and both are equally engaged** (an arm-wrestling match, two scouts trying to spot each other first), the GM may call for both sides to roll and compare totals. This should be rare. Default to one roll.

## Group rolls

When a whole party tries the same thing (sneaking together, climbing the same cliff), they don't make four separate rolls. Use the **weakest-link** rule:

- Everyone rolls.
- If **half or more** of the party succeeds, the group succeeds. Those who failed are carried/covered by those who succeeded.
- Otherwise the group fails, and the GM picks one of the failed rolls to drive the complication.

This is faster than tracking each character separately and produces the right dramatic outcomes: a single failure doesn't doom a competent party, but a party that's mostly weak at something gets caught.

## What rolls *aren't* for

A few things the d20 deliberately does not decide:

- **Reading a clue the GM has written into the world.** If there's a letter under the floorboard and the player says they look under the floorboard, they find the letter. No Perception check.
- **Recalling something the character would obviously know.** A wizard knows what a goblin is. A cleric knows the major gods. No roll.
- **What the player decides to do.** The d20 resolves attempts, not intentions. A bad roll means the *attempt* failed, not that the *plan* was stupid.

When in doubt: the d20 is for **moments of pressure with real stakes**, not for testing whether the character is allowed to perceive their own surroundings.

## A worked example

The party is sneaking up on a bandit camp at night. The rogue (Stealth-trained, Agility +3) tries to slip into the tent. The bandit lieutenant's Awareness is 14.

- The GM does **not** ask the bandit to roll. The lieutenant is not acting; the rogue is.
- The rogue rolls **d20 + 3 (Agility) + 2 (training)** vs. **14**.
- They get an 11 on the die. Total: **16**. Beat 14. They're in the tent.

Now the rogue tries to memorize the map on the table. The GM says this is **Easy (10)** — the map is right there, no one is watching, there's just enough light. The rogue rolls **d20 + 3 (Intellect)**, no training in cartography. They get a **2** on the die. Natural 1? No, just a low result. Total **5**. They miss the location of the next ambush.

If they had rolled a natural **1**: they knock over a lantern and the camp wakes up.
If they had rolled a natural **20**: they memorize the map *and* notice a second map hidden under it.

That's the whole loop. Roll, modifier, target, narration.

## Why this is enough

A first-time player needs to learn exactly one sentence to play this game competently:

> "Roll a d20, add my modifier, beat the number the GM gives me."

Critical hits, advantage, group rolls, defenses — all of those are elaborations the player can absorb during their first session of play. None of them block the first turn. That's the design target from [00-design-philosophy.md](00-design-philosophy.md), and this mechanic hits it.

Everything else in this rulebook — combat, magic, character creation, monsters — is just a list of *which ability*, *which target*, and *what happens after the roll resolves*.
