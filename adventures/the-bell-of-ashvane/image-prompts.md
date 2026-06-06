# The Bell of Ashvane — Image-Generation Prompts

Copy-paste prompts for an image model (ChatGPT/DALL·E, Midjourney, etc.) to illustrate the adventure — scenery, locations, NPCs, and the boss. *(No player-character art; bring your own party.)* Plain-description prompts work in ChatGPT; the `--ar`/`--v` flags are for Midjourney.

## Shared style (prepend or append to every prompt for a consistent look)

> *Painterly cinematic dark-fantasy concept art, grim coastal folk-horror mood, overcast salt-fog atmosphere. Palette: cold grey-blue sea, slate and salt-bleached driftwood grey, dusk-amber lantern light, tarnished bronze, sickly green-black sea-corruption. Moody, atmospheric, high detail, fantasy film key-art.*

**Tips:** keep that style line identical across the set so they feel like one book. For Midjourney reuse a single `--seed`; in ChatGPT just say *"same art style and palette as the last image."*

---

## Establishing & locations

### 1 · The village of Ashvane
> A small, weather-beaten fishing village of about forty buildings huddled on top of a grey sea-cliff above a treacherous reef — salt-bleached wood walls, slate roofs, fishing nets drying on racks, narrow lanes. At the village's high point stands a stone bell-tower, its **belfry conspicuously empty**. Overcast late-afternoon light, surf crashing on rocks far below, gulls, woodsmoke. A sense of unease over an ordinary place. Wide establishing shot. *[style]* `--ar 16:9 --v 6`

### 2 · The empty belfry
> Interior of a humble stone village sanctuary at the top of a bell-tower: an empty wooden bell-cradle where a great bronze bell once hung, a **severed, frayed bell-rope** swinging, scuff marks and a broken shutter where thieves climbed in. Dust in slanting grey light, a small holy symbol left on a sill. Quiet, violated, ominous. *[style]* `--ar 3:2 --v 6`

### 3 · The lured shipwreck *(backstory / mood)*
> Night on a reef: a wooden sailing ship splintering against black rocks in heavy surf, lanterns swinging, sails torn, the crew tiny against the wreck. In the foreground water, a **dark humanoid shape watches from the waves**, only its wet shoulders and eyes above the surface. Cold moonlight, spray, dread — a ship that followed the wrong bell to its death. *[style]* `--ar 16:9 --v 6`

### 4 · The Northern Cliffs & smuggler cove
> A narrow, rocky cliff path winding along a wind-scoured grey coastline, sheer drop to crashing surf on one side, salt-stunted grass and boulders on the other, fog rolling in off the sea. Below in a sheltered cleft, a **small smuggler's boat is pulled up on a hidden shingle cove**, a dead cookfire and a hooded lantern beside it. Bleak, blustery, exposed. *[style]* `--ar 16:9 --v 6`

### 5 · The Drowned Caves — entrance
> The mouth of a sea-cave at the base of a towering grey cliff, revealed at **low tide**: a dark natural stone arch dripping with kelp and barnacles, wet sand and tide-pools before it, the tunnel beyond descending into blackness. Waves hiss in and drag stones back out. Cold, cavernous, the smell of rot almost visible. *[style]* `--ar 3:2 --v 6`

### 6 · The Worship Pool
> A circular sea-cave chamber lit by sickly green-black light. In the center, a shallow pool of black seawater ringed by **rune-scratched standing stones**; a small bound, gagged child is tied to a stake knee-deep in the water; around the pool, **three drowned sailors lie face-down**, days dead. Dripping ceiling, glistening walls, a ritual half-complete. Horror and pity. *[style]* `--ar 3:2 --v 6`

### 7 · The Bell Chamber
> A high vaulted sea-cave, water sheeting down the walls. From a natural stone pillar hangs the **Vesper Bell** — a large, ornate, tarnished bronze bell the size of a barrel — bound with kelp-rope. The corruption in the air makes the water drip in rhythm with its wrong, dread tolling. Eerie green-amber glow, sacred object defiled, the heart of the curse. *[style]* `--ar 16:9 --v 6`

---

## NPCs & the boss

### 8 · Marraghan, the Sea Hag *(boss)*
> A sea hag rising from black cave-water: gaunt, waterlogged grey-green flesh, long dripping kelp-like hair, webbed clawed hands, a too-wide smile of long wet teeth, ancient cruel eyes. Brine streams off her; the water clings to her unnaturally. Standing beside a great tarnished bronze bell in a dripping cavern, mid-smile, mid-lie. Menacing, hungry, folk-horror. *[style]* `--ar 2:3 --v 6`

### 9 · Bell-keeper Elsa *(NPC)*
> Portrait of an older village priestess in a faded, threadbare robe, red-rimmed eyes from weeping, clutching and polishing a small holy symbol in weathered hands, grey hair escaping a hood. Grief and stubborn hope on her face. Behind her, blurred villagers and a grey cliff-top village. Quiet, human, sympathetic. *[style]* `--ar 2:3 --v 6`

### 10 · Resolution — ringing the bell at dusk
> A clifftop at sunset, the sea calm and amber. A great bronze bell, newly returned to its tower, tolling clear and true; the sound almost visible carrying across the bay. Far out on the darkening water, a galleon's lanterns are **turning away from the reef** toward safety. Below, an upturned crowd of villagers, relief breaking over them. Warm dusk light cutting the grey — hope, hard-won. *[style]* `--ar 16:9 --v 6`

---

## If you want top-down battle maps (for the VTT)

This adventure already ships a map ([map.json](map.json)) — but if you want illustrated maps, reframe locations 1, 4, 5/6/7:

> Top-down tactical RPG battle map, bird's-eye view, square grid overlay, clear readable layout for tabletop play, [the clifftop village green / the cliff path and hidden boat cove / the descending sea-caves: entry tunnel, outer chamber, the drop-shaft, the ritual worship-pool, the bell chamber]. *[style, lighter on fog for readability]* `--ar 1:1 --v 6`
