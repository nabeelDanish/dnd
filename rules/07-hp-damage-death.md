# 07 — HP, Damage, and Death

The shortest doc in the rules. HP is the only health system in the game.

## HP

A character's hit points represent everything between *standing and fighting* and *down and bleeding*. We don't separate "luck points" from "real wounds." It's all HP.

**Starting HP** is set by your **armor tier** ([19-classes.md](19-classes.md)):
- Heavy armor: `10 + Might`
- Light armor: `8 + Might`
- No armor: `6 + Might`

**Per-level HP gain** is `1d6 + Might`, rolled at the table when you level. A roll of `1` or `2` becomes a `3`. No one feels punished by leveling.

By level 10 a heavy-armor fighter has roughly `80` HP and a naked caster roughly `50`; by level 20 those climb to roughly `175` and `110`. HP grows every level for the whole campaign, so monsters scale their damage (not their to-hit) to keep pace — see the within-tier scaling note in [12-monsters.md](12-monsters.md).

## Taking damage

When you take damage, subtract it from your current HP. No tracking damage types separately. No accumulating "wound levels."

If a damage source applies a **condition** (poisoned, burning, etc.), apply that too. See [08-conditions.md](08-conditions.md).

## Healing

Three ways to heal:

1. **A rest** (one full rest = full HP and mana). See [03-progression.md](03-progression.md).
2. **A spell.** Priests' *Divine Touch* and *Cure Wounds*; certain other spells. See [10-spell-list.md](10-spell-list.md).
3. **A potion.** Healing potions restore `1d8 + 2` HP. Drinking a potion is an action.

A character at full HP cannot be over-healed. Excess healing is wasted.

**No "natural healing"** between fights without a full rest. If the party wants to recover after a fight, they need a safe place and 8 hours.

## Going down

When a character's HP reaches **0**, they don't die immediately. They go down:

- They are **unconscious** and **prone**.
- They can't take actions, move, or speak.
- They drop whatever they're holding.

A downed character will **die** at the end of the next round of combat if not stabilized. Until then, they hover.

## Stabilizing

To stabilize a downed ally, an adjacent ally spends their **action** on one of:

- **First aid.** A Medicine training check, Hard (15). On success, the downed character is stable — still unconscious, but not dying. They will wake naturally after 10 minutes or instantly if healed for any amount of HP.
- **Healing magic.** Any healing spell or potion: the downed character returns to consciousness at the healed HP value. If the heal would bring them to 0 or below, they remain down.

A character who is stabilized but still at 0 HP can be picked up and carried. They're out of the fight, but they're not dying.

## Dying and dead

A character who reaches the end of the round at 0 HP and has not been stabilized **dies**.

"End of the round" means: after every creature has taken its turn in the current round. So if you go down on your own turn, your party has the rest of the round to save you. If you go down on an enemy turn, your allies get their turns this round to act.

This is the **only death rule.** No death saving throws. No "you lose three saves and die." A downed PC will die unless someone helps them, and they have one round to be helped.

The grim version of this rule is: **a downed PC who is hit again while down dies instantly.** A monster that wants to make sure stoops and kills. This is the default; a softer table can disable it.

## Massive damage

If a single attack would do damage equal to or greater than the character's **maximum HP**, they die outright. No saving them. This is for catastrophic single hits — a dragon's bite at full force, a fall from 200 feet. It's rare. It's also fair, because the same rule applies to enemies — and players will exploit it gleefully when they figure out the math.

## Coming back

If a character dies, they are dead. There is no automatic resurrection. Three options exist for bringing the dead back:

1. **A *Resurrection* spell** (high-tier, costs 5 mana, see [10-spell-list.md](10-spell-list.md)). Returns the character at 1 HP if their body is intact. Costs the caster a permanent point of Spirit until their next level — death magic has a tax.
2. **A divine bargain.** The GM may rule that a god, demon, or ancestral spirit can be petitioned. There is always a price. This is a story event, not a rule.
3. **The player makes a new character.** The default option. If the campaign continues, a new character should be ready to introduce in the next session.

**This game treats death as meaningful.** It is rare for it to happen at the apprentice tier (party can usually rally), more common at the veteran tier (monsters bite harder), and a real risk at the master tier (the stakes are mythic).

## Healing the party between fights

Once combat ends, characters with HP above 0 are *fine* — they aren't bleeding in the narrative sense, they just have less buffer for the next fight. The Priest's Divine Touch is the main mid-adventure healing tool; potions are the next. A full rest is the only way to top off without resources.

A common pattern: the party finishes a fight, the Priest spends a Divine Touch on the worst-wounded Warrior, everyone agrees they have enough HP to push on, and they keep moving.

## Damage examples

- The Scout has 12 HP. An orc hits for 5. The Scout is at 7.
- A goblin throws a flask of burning oil; Scout fails to dodge, takes 4 damage and is **burning** (1d6 per turn until put out). Scout is at 3 HP.
- Scout spends an action putting themselves out. They are at 3 HP, no longer burning.
- The orc captain attacks: 6 damage. Scout drops to **−3**. Treat as 0; Scout is down.
- The Warrior is adjacent. Warrior's turn: uses Divine Touch... wait, the Warrior doesn't have that. The Priest is across the room. Warrior chooses to drag Scout behind cover (a move) and use their action to apply first aid: Medicine training check, Hard. Roll: 16, success. Scout is stable but still at 0.
- Next round, the Priest moves over, uses Divine Touch: heals `1d6 + 3 = 5`. Scout wakes up at 5 HP.

## What this doc doesn't include

- Death saving throws.
- Hit dice as a resource.
- Lingering injuries.
- Temporary HP.
- Wound thresholds, bloodied states, or staggered conditions.
- HP recovery during a short rest. (There is no short rest.)
- Concentration on healing.
- A "stabilized but bleeding" timer in seconds.
- A complete table of resurrection costs.

If a player or GM wants any of those, the question is *what dramatic moment does this enable?* — and if there's a good answer, the GM rules it once for this campaign and the rule sticks.
