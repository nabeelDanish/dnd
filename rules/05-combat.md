# 05 — Combat

Combat is the most rules-dense moment in a tabletop RPG, and it's where 5e bloats the worst. We collapse the action economy hard.

## The turn

A creature's turn is two things:

1. **Move**, up to your **Speed** (default `6` squares / `30` feet for most characters).
2. **Act** — one action.

That's it. No bonus action. No reaction by default. You may **split your move** around your action: move 3 squares, attack, move 3 more. You may also skip the move, or skip the action.

Common actions:

- **Attack.** Make one weapon attack against a target in range. (See [06-attack-and-defense.md](06-attack-and-defense.md).)
- **Cast a spell.** Choose a known spell, pay its mana cost, resolve. (See [09-magic.md](09-magic.md).)
- **Dash.** Move your speed again. (Total this turn: up to twice your speed.)
- **Hide.** Roll Agility (Stealth if trained) vs. the highest enemy Mind defense in line of sight. On success, you have advantage on your next attack and enemies have disadvantage attacking you until you reveal yourself.
- **Help.** Grant an ally advantage on their next roll, if you're in a position to plausibly help.
- **Disengage.** Move without provoking the optional Opportunity Strike (below).
- **Ready.** Choose an action and a trigger (*"if the goblin steps into the doorway, I shoot it"*). When the trigger happens, the action resolves immediately. You give up your normal turn this round.
- **Use an item.** Drink a potion, throw an alchemical flask, draw a magical token.
- **Improvise.** Anything else. The GM adjudicates.

The whole table fits in your head after one fight. **That's the design target.**

## What an "action" is *not*

You do not get a free bonus action, a free reaction, a free quick attack, a free off-hand swing. Two-weapon fighting is one attack with the weapon you choose. Drawing a weapon is free (folded into the same turn as using it). Talking is free.

> **Principle from [00-design-philosophy.md](00-design-philosophy.md):** *One rule, not three.* Veterans of 5e will keep asking "can I also...?" The answer is almost always no, and they will adapt within one session.

## Initiative

Use **side initiative**. The whole party rolls together against the whole enemy side.

1. One representative per side rolls **d20 + their Agility**.
2. The higher total goes first.
3. **Within a side, players choose the order** of their turns each round. (For the enemy side, the GM does the same.)
4. The next round, roll again. Initiative is not fixed across rounds.

Why this works:
- One roll, not seven.
- Lets players coordinate ("I'll attack first, you finish him").
- Means the GM doesn't have to track a turn order list.
- A losing initiative this round can be a winning one the next.

**Ties:** players win ties.

**Surprise:** if one side ambushes the other, the ambushing side automatically goes first this round (no initiative roll). Roll initiative normally from round two.

## Movement

Movement is measured in **squares** (a square is 5 feet of fictional space). A default creature has Speed `6`. Movement rules:

- **Diagonal movement** counts as one square. Don't count `1.5`.
- **Difficult terrain** (rubble, dense forest, knee-deep water): each square costs 2.
- **Climbing** or **swimming**: half speed, unless you have a climb/swim mode.
- **Standing up from prone**: costs half your speed.
- **Jumping**: you can long-jump a number of squares equal to your Might (minimum 1), and high-jump half that, with a running start. Without a running start, half each. No roll needed unless it's a stretch — then Athletics check, Hard.

You can't end your turn sharing a square with another creature unless it's friendly and willing. You can pass through allies freely; through enemies only by Disengaging or with class features that allow it.

## Set to Strike (heavy gear)

Heavy gear is built for planting, not chasing. On a turn where you **both move and attack**:

- wielding a **heavy weapon** *or* wearing **heavy armor** → that **attack is at disadvantage**;
- wielding a heavy weapon *and* wearing heavy armor → you **can't do both — take your move *or* your attack this turn, not both**.

Stand your ground (use no movement) and you attack normally. *(Disadvantage is binary, so the "both heavy" case escalates to denial rather than stacking dice.)* This is the cost that makes heavy gear an *immovable anchor* instead of a free upgrade — no Speed penalty needed. Light and medium weapons in light or no armor move and strike freely. See [19-classes.md](19-classes.md); heavy armor also bars ranged weapons entirely.

By default, you can move freely around the battlefield. **Opportunity strikes are off** unless one of the following applies:

- A monster has the **Sentinel** trait. (Bears, dragons, and a few elites do.)
- A spell, effect, or class feature explicitly enables it.

When opportunity strikes are on for a creature: if an enemy leaves a square adjacent to that creature without Disengaging, the creature may make **one attack** against them as they leave. This does not cost the creature a turn — it's a free interrupt, used at most once per round.

Why this is optional by default: the 5e "opportunity attack everywhere" rule makes every movement a math problem. We default-off and let specific creatures bring it on for tactical color.

## Reactions

There is **no general reaction slot**. A character with a feature or spell that says *"as a reaction…"* can use it according to that feature's rules. Otherwise, the only off-turn thing a character can do is *speak*.

The Mage's **Shield** spell (see [10-spell-list.md](10-spell-list.md)) is the most common example: it specifies it can be cast as a reaction to an incoming attack.

Off-turn interrupts are deliberately rare. **The action is on the turning player.** A new player should never be confused about whether they "can do something" while another player is acting — the answer is almost always no.

## Cover

Three states only:

- **No cover.** Normal attacks.
- **Half cover** (low wall, corner of doorway, ally in the way): attacks against the target have **disadvantage**.
- **Full cover.** The target cannot be targeted directly. Area effects (a Fireball thrown over the wall) still apply.

The "+2/+5 cover" math of 5e is replaced by "either it matters or it doesn't, and when it matters, it's disadvantage."

## Flanking

Two allies on opposite sides of an enemy: that enemy is **flanked**. Attacks against a flanked enemy from either flanking ally have **advantage**.

This is the simplest tactical lever in the game. Most fights will be partly about creating flanks.

## Range

Two states:

- **Close** — adjacent, melee range. (1 square, generally.)
- **Far** — anywhere else within line of sight.

Weapons specify whether they reach far. Bows, crossbows, thrown weapons, and spells generally have a far range (with limits given in the spell or weapon entry). Melee weapons don't.

Some weapons (longbows, ranged spells) have a maximum range; beyond it, attacks are at disadvantage or impossible. The weapon entry tells you. **There is no "long range" vs. "short range" math.** You're in range or you're not, possibly with disadvantage.

## Surprise and stealth

If one or more party members are hidden when combat starts, **they get a free attack at advantage** before initiative is rolled. After that, normal rounds begin.

If the whole party is hidden and they attack a surprised enemy, **the enemy side skips its first round** entirely.

## A round in practice

Four PCs vs. three goblins. Side init: party rolls 14, goblins roll 17. Goblins go.

**Goblin side, round 1:**
- *Goblin Archer* moves behind cover (half cover) and shoots Brenna the Scout: disadvantage from cover, miss.
- *Goblin Brute* charges the Warrior and attacks: hit, 5 damage.
- *Goblin Sneak* tries to flank the Mage: moves around behind, attacks: hit, 4 damage.

**Player side, round 1:**
- *Warrior* attacks Goblin Brute, hits, drops it to 0 → Cleave triggers → free attack on Goblin Sneak, hits, kills it. (One action, two dead goblins.)
- *Scout* moves, shoots Goblin Archer, hits with advantage (flanked by Warrior's positioning), Sneak Strike damage applies.
- *Mage* casts Magic Missile at the Archer, no roll, autohit.
- *Priest* moves to the Warrior, uses Divine Touch to heal `1d6 + Spirit`.

Round one took five minutes. **That is the pace we are building for.**

## What combat doesn't have

- Action economy with three slots.
- Opportunity attacks as a default rule.
- A "concentration save" mini-game.
- Hit dice spending mid-combat.
- A separate initiative count for each creature.
- Reactions as a slot most creatures have but rarely use.
- Tracking "free actions" vs. "actions on your turn."
- Movement type math (e.g., "every 5 feet of difficult terrain costs +1 hex of movement").
- Tracking "rounds since you last used X."

If a 5e-trained player asks about any of the above, the answer is *that's not how this game does it.* Then continue play.
