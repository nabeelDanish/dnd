# The Falling Spire — Image-Generation Prompts

Copy-paste prompts for an image model (ChatGPT/DALL·E, Midjourney, etc.) to illustrate the adventure. Each is written in plain description (works in ChatGPT). For Midjourney, the `--ar`/`--v` flags are already appended.

## Shared style (prepend or append to any prompt for a consistent look)

> *Painterly cinematic dark-fantasy concept art. Dramatic volumetric storm-light. Palette: deep storm-blue and slate stone, electric teal-white lightning, warm gold runic glow. High detail, atmospheric haze, epic sense of scale, fantasy film key-art.*

**Tips:** keep that style line identical across all images so they feel like one set. For Midjourney, reuse one `--seed` for cohesion; in ChatGPT, say *"same art style and palette as the previous image."* For character consistency, generate the hero portraits first and reference them.

---

## Scenery & scenes

### 1 · Establishing shot — "The Fall"
> A mile-high ancient elven sky-citadel — pale weathered stone towers, hanging gardens, and broken floating platforms — tilting and plummeting out of a bruised storm sky toward a medieval harbor city far below. A jagged seam of brilliant teal lightning burns from deep within the citadel's core. Debris and torn banners stream upward as it falls; the tiny rooftops and cathedral spires of the doomed city swell in the lower frame, and a single small airship makes a desperate banking pass beneath the citadel's shadow. Wide cinematic establishing shot, catastrophic scale, the feeling of one minute left. *[style]* `--ar 16:9 --v 6`

### 2 · The leap (boarding)
> Three legendary adventurers leap from the open hatch of a battered airship into howling wind, toward a shattered stone causeway on the underside of a falling sky-citadel that rushes up to meet them. Motion blur, scattered debris, teal lightning flickering across ancient pale stone above, the city a dizzying drop far below. Dramatic low angle, vertigo, heroic. *[style]* `--ar 16:9 --v 6`

### 3 · Act 1 — The Shattered Causeway
> A crumbling ancient stone sky-bridge with no railings, spanning open air between two broken sections of a falling elven citadel, slabs collapsing into the void. Knots of loose teal-white lightning — vaguely humanoid storm-wraiths of crackling energy — drift and lash across the span. Storm clouds churn below, a distant city visible through the gaps. Wind-torn, electric, perilous. *[style]* `--ar 16:9 --v 6`

### 4 · Act 2 — The Gearwell
> Interior of a vast circular machine-chamber inside an ancient sky-citadel: enormous, slowly rotating concentric stone rings inscribed with runes — half of them dark and dead, half pulsing gold — that levitate the fortress. In a side alcove looms a towering dormant guardian construct of iron and stone, runes dim on its chest. Drifting dust motes, shafts of pale light, a spiral stair descending into blue glow at the center. Awe and sacred decay, failing ancient technology. *[style]* `--ar 16:9 --v 6`

### 5 · Act 3 — The Heartcage
> A cathedral-sized spherical chamber at the heart of a falling sky-citadel. At its center a colossal half-formed titan of living storm and teal lightning strains against a cage of cracking golden binding-runes, one stormy arm already torn free. Rune-nodes around the chamber's rim flicker and snap. The floor is transparent crystal, revealing the rooftops of a city terrifyingly close below. Electric blue light, golden runic glow, overwhelming scale and dread. *[style]* `--ar 16:9 --v 6`

### 6 · The boss — Khaltesh, the Storm-Titan
> Low-angle hero shot of Khaltesh the Storm-Titan: a vast primordial being of churning storm-cloud and arcing teal lightning in a roughly humanoid shape, eyes like twin lightning strikes, half-bound in shattering chains of golden runic light. Ancient, exhausted, furious, and strangely sorrowful. Sparks and spiraling rain. Terrifying boss-monster scale. *[style]* `--ar 2:3 --v 6`

---

## The three heroes *(optional — generate these first for character consistency)*

### 7 · Vorrik Frost-Scale — Frost Dragonborn Knight
> Character portrait of a frost dragonborn knight: a pale blue-white scaled dragon-man in battered, ornate Daedric plate armor of dark otherworldly metal, a massive greatsword planted point-down before him, cold breath misting from his maw. Stoic, immovable, weathered by a hundred battles. Three-quarter view, dark fantasy character art. *[style]* `--ar 2:3 --v 6`

### 8 · Lirael Duskarrow — Wood Elf Ranger
> Character portrait of a wood elf ranger woman: lithe and sharp-eyed, in dark dragonscale leather, drawing an ornate black-and-teal longbow, a faint glowing hunter's mark hovering in the air before her. Hood down, braided hair, the calm of someone a century old. Forest-greens shading into storm-blue. Dark fantasy character art. *[style]* `--ar 2:3 --v 6`

### 9 · Seraphine Vale — Protector Aasimar Oracle
> Character portrait of a protector aasimar oracle woman: serene and otherworldly, faint golden light leaking from hairline cracks in her skin and from her eyes, flowing pale robes, holding a radiant sunstaff, a halo of fractured light and slowly orbiting runes around her head. Calm at the center of a storm. Ethereal dark fantasy character art. *[style]* `--ar 2:3 --v 6`

---

## If you want top-down battle maps (for a VTT)

Add this framing to scenes 3–5 instead of the cinematic version:

> Top-down tactical RPG battle map, bird's-eye view, square grid overlay, clear readable layout for tabletop play, [describe the space: the broken causeway with collapsing sections / the circular Gearwell with concentric rune-rings and the Sentinel alcove / the round Heartcage with the central titan-sphere and rim rune-nodes]. *[style, lighter on haze for readability]* `--ar 1:1 --v 6`
