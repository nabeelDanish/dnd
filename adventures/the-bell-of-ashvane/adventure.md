# One-Shot: The Bell of Ashvane

A single-session adventure for **four level-1 characters**. Play time: **~4 hours**. Pre-made characters are in [characters.md](characters.md).

## The pitch

The fishing village of Ashvane sits atop a cliff above a treacherous reef. For three centuries, the **Vesper Bell** has rung at dusk — its tone reaching far enough out to sea to warn approaching ships off the rocks. Three nights ago, the bell was stolen. Two ships have wrecked since. Tonight, a galleon called the *Marigold* — carrying refugees from the war on the mainland — is due to pass.

The party has been hired by Bell-keeper Elsa to find the Vesper Bell before sundown. They have **eight hours**.

The truth: a **sea hag named Marraghan** has corrupted a smuggler crew into stealing the bell. She wants the wrecks; she feeds on the dying. She hangs the bell in her sea cave and rings it in a *wrong* rhythm — drawing ships *toward* the reef, not away.

## The clock

Eight hours from when the party accepts the job until dusk and the *Marigold* arrives. The GM tracks elapsed time. Suggested pacing:

- **Hour 1–2:** Investigation in Ashvane.
- **Hour 3–4:** Travel along the cliffs to the Drowned Caves.
- **Hour 5–6:** The caves; rescue, fight, find the bell.
- **Hour 7:** The hag's chamber. Boss fight.
- **Hour 8:** Ring the bell at dusk — or watch the *Marigold* die.

The clock should *feel* present. Mention sunset color shifts. Mention how the tide is going out (the caves are only accessible at low tide; the entrance closes in 4 hours, opens again in 6).

## How to run this

You're the GM. You'll be referencing the rules from this rulebook ([../../rules/01-core-mechanic.md](../../rules/01-core-mechanic.md) through [../../rules/15-quickstart.md](../../rules/15-quickstart.md)) as needed. If you have an AI assistant (Claude) at the table, you can ask them to:

- Roll dice for monsters/NPCs.
- Look up rules.
- Track combat state.
- Read NPC dialogue.
- Suggest tactical moves for monsters.
- Track the clock.

But the rulings — what's possible, what happens, when to roll — are yours.

### The battlemap

A pre-built map is included: [map.json](map.json). It covers all four scenes — the village, the cliff path, Wind Cove (smuggler patrol), and the Drowned Caves — with NPC and enemy tokens already placed. **Player tokens are NOT included**; drop them at the **PLAYERS START** marker (the pink square next to the village green) when the session begins.

To load it:

1. Open `map-tool/index.html` in a browser (DM view).
2. In the toolbar, click **Import map…**.
3. Pick `adventures/the-bell-of-ashvane/map.json`.
4. The village should appear around the screen center.
5. Click **Open Player View →** to spawn the player window. Mirror that window to the table's TV.
6. Fog of War is off by default — turn it on (Fog tool → "Fog of War: ON") before play, then paint reveals as the party explores.

To regenerate the map (if you want to tweak it), edit `build-map.js` in this folder and run `node build-map.js`.

## Scene 1 — Arrival in Ashvane

> *Read aloud:*
>
> *The coach drops you on the village green just after midday. Ashvane is forty buildings huddled on a cliff: salt-bleached wood, slate roofs, fishing nets drying in the sun. Below the cliffs, the surf is loud. A crowd of villagers has gathered around an older woman in a faded priest's robe. She turns as you approach. Her eyes are red.*

### Bell-keeper Elsa

*Want:* The bell back. Her son Tobin was on one of the wrecked ships and is missing — she still hopes.
*Weird thing:* Polishes her holy symbol obsessively when stressed.

She offers the party **300 gold** (75 each) and the villagers' eternal gratitude. She tells them:

- The bell was taken three nights ago. The sanctuary was broken into; the bell-rope cut.
- Two ships have wrecked on the reef since. Survivors say the bell rang at *odd hours* — drawing them in.
- One survivor lives: a sailor named **Karis**, recovering at the inn.
- A fisherman, **Hael**, saw a small boat heading north along the coast that same night, lanterns covered.
- North of Ashvane are the **Drowned Caves** — half-flooded sea caves used by smugglers a generation ago. Locals avoid them.
- The bell **must** be rung before the *Marigold* arrives. *"Bring it back. Please."*

### Karis (the wrecked sailor)

*Want:* To live. To never go back to sea.
*Weird thing:* Flinches at the sound of bells, including the village chapel's small chimes.

If the party finds him at the inn (a Spirit/Persuasion check, Hard 15, to coax detail out — or Easy if they bring food):

- *"The bell rang wrong. Not the warning rhythm. Two slow notes, then three quick. Like a song someone forgot. We followed it. Captain thought it was a port marker. We were on the reef before we knew."*
- He saw "something dark in the water by the cliffs" — a humanoid shape, watching as the ship broke up.
- He won't go back. He's leaving for the inland on tomorrow's coach.

### Hael (the fisherman)

*Want:* To finish mending his nets. To not be involved in this.
*Weird thing:* Never makes eye contact; speaks at his boots.

If the party seeks him out (he's mending nets near the dock):

- "Aye, I saw a boat. Three of them in it. Lanterns hooded. North along the cliffs."
- He recognized one of them — **Ren Halloway**, a former Ashvane fisherman who left for the smuggling trade two years ago. *"Used to be a good man. Hard times."*
- The Drowned Caves are the only thing north worth hiding in.
- *"You go in at low tide. Tide comes back in four hours."* (The party can check the tide chart — they have until roughly hour 4 to enter before the entrance is submerged for another six.)

### Captain Volk (militia)

*Want:* To protect the village. Skeptical of strangers.
*Weird thing:* Constantly fingers an old scar across his throat.

Volk will not send his men with the party — the militia is needed to keep Ashvane calm. He will lend them:
- A map of the cliffs north of Ashvane (low-quality, but useful).
- One healing potion.
- Permission to use any of the village's small boats.

If the party impresses Volk (Spirit/Persuasion check, Hard, or by mentioning specific tactical knowledge that demonstrates competence), he'll add a **second healing potion**.

### What the party should learn

By the end of Scene 1, the party should know:
- The bell rings *wrong* to lure ships.
- The thieves were three smugglers, one named Ren Halloway, possibly more.
- They're hiding in the Drowned Caves north along the coast.
- The tide allows entry now but will close in ~4 hours.
- Something **non-human** was watching the wreck.

If the party is missing pieces, have an NPC volunteer info. **Don't gate the adventure on a single roll.**

## Scene 2 — The Northern Cliffs

A 2-hour hike along the cliff path. The terrain is rocky and slick; the wind off the sea cuts hard.

### Skill challenge (optional)

If you want pacing, run this as a quick group skill challenge:

- **Group check 1:** *Wilderness* or *Athletics*, Hard. Stay on the cliff path in the wind. Failure: party arrives one hour later (the tide is now starting to come in).
- **Group check 2:** *Perception* or *Insight*, Hard. Spot the smuggler patrol before they spot you. Success: advantage on initiative in the upcoming combat. Failure: the smugglers see them first.

You can skip the skill challenge if the party would rather just walk and you want to move quickly.

### The smuggler patrol

About an hour into the hike, the party comes upon a cleft in the cliffs — a sheltered cove with a small boat pulled up. Three smugglers are camped here. They are watching the cliff path.

**Encounter — Threat 4 (standard).**

- **2 × Bandit** (see [../../rules/12-monsters.md](../../rules/12-monsters.md)) — Threat 1 each. *Wek* (short, nervous) and *Briar* (tall, ill-fed).
- **1 × Bandit** with a shortbow, threat 1.5 — *Toma*, the leader on patrol. Bandit stat block with `+4` shortbow attack, range Far.

**Hag-touched note:** these three are not yet fully cursed. They're afraid. **They will surrender** if the party offers it credibly. If captured, Toma will tell them:

- The boss isn't human. *"She came up out of the water two weeks ago. Made Ren her... I don't know. Her **thing**."*
- Ren Halloway and another smuggler named Pell are inside the caves now, "different" — eyes black, won't eat.
- Marraghan (he doesn't know the name; calls her *the woman from the water*) plans to wreck the *Marigold* tonight.
- The bell is hung in the deepest chamber. Marraghan rings it at dusk.

Setting: difficult terrain (rocks and uneven ground). Half-cover from large boulders on either side. The boat in the cove could be useful for the next scene.

**Reward:** The bandits have on them: 30 gold, two daggers, a half-decent map of the caves (sketched in charcoal), and a glass vial of *something dark* (a small token Marraghan gave them — if the party identifies it later, Arcana Hard 15, it's a *finder* — Marraghan knows where they are while they hold it. Smart parties will throw it away).

## Scene 3 — The Drowned Caves

The cave entrance is at the base of the cliffs. At low tide, a stone arch opens onto a tunnel that descends into the rock; at high tide, the arch is submerged.

> *Read aloud:*
>
> *The cave breathes. Each wave rushes in and back, dragging stones across the floor. The air smells of salt and rotting kelp. Ten paces in, the daylight dies. Beyond — a wet, distant rhythm: not the surf. Something tolling.*

### Layout (sketch on paper)

1. **The Entry Tunnel.** 30 ft of wet stone. Difficult terrain. Slick.
2. **The Outer Chamber.** A vaulted cavern with a sandy floor. Three smuggler bedrolls; one cold cookfire. A side passage descends.
3. **The Drop.** A 15-foot natural shaft. Climb down (Athletics, Easy with the rope here; Hard without). The bottom is wet.
4. **The Worship Pool.** A circular chamber. A pool of seawater in the center, ringed by rune-scratched stones. Standing knee-deep in the water: a 10-year-old boy, bound, mouth gagged. (Tobin — Elsa's son.) Around the pool, three sailors lie face-down, drowned days ago.
5. **The Bell Chamber.** Down a final tunnel. Marraghan's lair, holding the Vesper Bell.

### The Outer Chamber — surprise attack

Two hag-touched smugglers (former bandits, now cursed) ambush from the side passage.

**Encounter — Threat 4.**

- **2 × Hag-Touched Bandit** — Threat 2 each.

Stat block (custom):

> **Hag-Touched Bandit** — Tier 1 · Threat 2
> **HP** 14 · **Armor** 13 · **Mind** 9 · **Spirit** 10 · **Speed** 6
> *Attack:* Curved knife `+4 vs. Armor → 1d6 + 2`. On hit, target rolls Spirit vs. `+4` or is **Poisoned** for 1 round (a creeping cold).
> *Special:* *Hag-blessed* — does not take Frightened or Charmed conditions. When reduced to 0 HP, melts into seawater on the floor.
> *Notes:* Eyes are black. Voice slurred. Will fight to 0 HP; cannot surrender. The remains of Ren Halloway and Pell.

The fight should be hard but winnable. If a PC goes down, the party has time to stabilize before the next encounter. **Don't kill anyone yet.**

### The Worship Pool — investigation and choice

The next chamber holds **Tobin**, the bell-keeper's son, alive but unconscious from cold and shock. He's tied to a stake set in the center of a shallow pool ringed by carved stones.

The runes (*Arcana*, Hard 15): a binding circle, drawing power from a drowned sacrifice. If Tobin dies here, he will rise as a thrall to Marraghan. The ritual is partly complete — *one* more drowning will trigger it.

The party's choices:

- **Untie Tobin and carry him out.** Costs an action and a person; he can't walk. Reduces the party's effective combat capacity in the boss fight. **Right choice for heroes.**
- **Leave him there to come back later.** Faster, but the boss fight will take longer than expected — if Marraghan reaches him, she completes the ritual.
- **Break the runes** (Athletics, Hard, with a weapon — chip the stones). Disrupts the ritual. Takes 2 minutes. Loud; alerts Marraghan, so she's prepared in the boss fight (advantage on her first attack).

**Reward in this chamber:** under one of the drowned sailors, a *Healing Potion* and *200 gold* worth of pearls.

### The Bell Chamber

The descent ends in a vaulted chamber with a high stone ceiling. The Vesper Bell — bronze, intricate, the size of a small barrel — hangs from a natural stone pillar. **Marraghan** is at the bell, lashing it gently with a kelp-rope to make it toll at the cadence she wants.

She sees the party. She smiles. She has long, very wet teeth.

> *Read aloud:*
>
> *"Oh. Oh, my. I wondered who would come. You're a lot prettier than I expected. Did you bring me the boy? Or are you going to play hero?"*
>
> *Around her, the bell tolls — wrong. The note vibrates in your bones. The water on the walls of the cave begins to drip in time with the tolling.*

She offers a deal: leave now, and she'll let them have the bell *after* she finishes tonight's work. They can have the gold and the boy. Just walk away.

(She is lying. She will kill them after the *Marigold* wrecks.)

If the party refuses (they will), **combat.**

## Scene 4 — The Boss Fight

**Encounter — Threat 8 (200% budget for 4 level-1 PCs).**

- **Marraghan, Sea Hag** — custom boss, Threat 5.
- **2 × Hag-Touched Bandit** — Threat 2 each (if any survived from earlier, otherwise she summons two from the water in round 1).
- **The Vesper Bell itself** — environmental hazard (no threat cost, but it shapes the fight).

### Marraghan, Sea Hag

> **Marraghan, Sea Hag** — Tier 1 · Threat 5
> **HP** 50 · **Armor** 14 · **Mind** 14 · **Spirit** 15 · **Speed** 6, swim 10
> *Attack:* *Drowning Claws* `+5 vs. Armor → 1d8 + 3` (twice per turn — she has two clawed hands).
> *Attack:* *Brine Curse* `+5 vs. Spirit → 2d6` necrotic, Range Near. On hit, target is **Poisoned** for 2 rounds (drowning sensation).
> *Special:* Sentinel. *Tidal Step* — once per round, as a free action, Marraghan may step from any water (the pool, a puddle, a wet wall) to any other water she can see within Near range. Cannot be grappled while in water.
> *Special:* *Hag's Sight* — has advantage on attacks against creatures below half HP. Smells blood.
> *Notes:* If reduced to ≤ 10 HP, she retreats into the seawater pool and tries to escape. If killed: melts into seawater. Bell is safe to handle from this moment.

### The Vesper Bell (hazard)

At the **start of each round** of combat (after side initiative), the bell tolls. Roll **1d6**:

| d6 | Effect |
|---|---|
| 1–2 | A pulse of cold psychic dread. The closest PC to the bell takes `1d6` psychic damage and is **Frightened** (of the bell) until the end of their next turn. |
| 3–4 | Marraghan regains `5` HP. |
| 5–6 | Marraghan and any Hag-Touched ally have advantage on their next attack roll this round. |

**A PC can spend an action to silence the bell** by climbing the pillar (Athletics or Acrobatics, Hard 15) and wedging cloth/leather/rope into it. While silenced, the bell does not toll. **The cloth lasts one round** before the bell shakes it loose; a PC can re-silence it each round at the same cost.

**A PC can spend an action to attempt to ring the bell correctly** (Spirit check, Hard 15, with advantage if the PC has Religion training). On a success, Marraghan's curse on the bell **breaks**: the bell goes silent permanently and Marraghan takes `2d6` radiant damage as her own corruption snaps back at her.

### Hag-Touched Bandits (boss fight)

Same stat block as the Outer Chamber encounter (Threat 2). If two survived earlier, they're here. If not, Marraghan calls two up from the pool at the start of round 2 (free action).

### Tactics

- **Marraghan** opens with *Brine Curse* on the squishiest-looking caster, then closes to melee with her claws.
- She uses **Tidal Step** to teleport from puddle to puddle, never letting herself get pinned.
- When below half HP, she fights dirty — going after Tobin if he's still in the worship pool, or after a Downed PC.
- The bell mechanic should make the party feel a clock ticking: every round it does *something* unpleasant.

### Win conditions

The party wins by:
- Reducing Marraghan to 0 HP **and** recovering the bell intact. (She drops her ritual focus, a sea-glass pendant — worth 100g and useful as a bargaining chip with sea-folk later.)
- Breaking the bell's curse with the Spirit/Religion check. Marraghan, weakened, may flee or fight to the death.

### Loss conditions / failure modes

- **The party flees:** Marraghan completes her ritual. The *Marigold* wrecks. Hundreds die. The villagers do not pay them; the duke holds them in contempt; the campaign starts in disgrace if continued.
- **The party is defeated:** Marraghan takes one PC as a thrall. The others wash up alive on the beach, robbed of their gear. They have until dawn to mount a rescue or the thrall is lost.
- **Tobin dies in the ritual:** see worship-pool note. Marraghan gets an additional Hag-Touched ally in round 3.

## Resolution

If the party recovers the bell:

> *Read aloud (at the cliff at dusk):*
>
> *The sun is touching the water. The wind has dropped. Below you, the village is silent — every face turned up, watching.*
>
> *You ring the bell. It tolls once, clear, true. The sound carries across the bay. Far out on the water, a ship's lanterns turn — slowly, then sharply — away from the reef. The* Marigold *is going to live.*
>
> *Elsa sinks to her knees and weeps. Her son lives. The galleon lives. Three hundred refugees will sleep on solid ground tonight.*

### Rewards

- **300 gold** from Elsa as agreed.
- Each PC gains **1 level** (milestone leveling).
- One magic item, GM's choice — recommended: **Bracer of the Bell-keeper** (`+1` to all healing rolls cast by the wearer). Given to the Priest if there is one; otherwise to whomever did the most to save the bell.
- A standing welcome in Ashvane. The villagers know their names.
- *(For a continuing campaign):* Karis, the rescued sailor, mentions before he leaves that other coastal towns have *also* gone quiet recently. There are more wrecks. Other things in the water.

## GM cheat sheet

Print or pin this:

**Clock:** 8 hours. Hour 1–2 village. Hour 3–4 cliffs. Hour 5–6 caves. Hour 7 boss. Hour 8 dusk.

**Targets:** 10 / 15 / 20 (default 15).

**Monster reference:**
- Bandit: HP 9, Armor 13, attack `+3 → 1d6+1`.
- Hag-Touched Bandit: HP 14, Armor 13, attack `+4 → 1d6+2` + Poisoned.
- Marraghan: HP 50, Armor 14, two attacks `+5 → 1d8+3` or curse `+5 vs. Spirit → 2d6` necrotic. Tidal Step. Sentinel.

**Bell roll (start of round, boss fight):** 1d6 → 1-2 psychic + Frightened; 3-4 hag heals 5; 5-6 advantage to hag side.

**Silence bell:** action + Athletics 15 (one round).
**Break curse:** action + Spirit 15 (permanent — Marraghan takes 2d6 radiant).

**NPC quick reference:**
- Elsa — bell-keeper. Frantic.
- Karis — wrecked sailor. Traumatized.
- Hael — fisherman. Saw the boat.
- Volk — militia captain. Skeptical.
- Tobin — kidnapped boy. Bait.
- Marraghan — sea hag. Smiling, hungry.

**Hooks for continuing:** other wrecks elsewhere. Marraghan's sisters. The sea-glass pendant.

Go run it.
