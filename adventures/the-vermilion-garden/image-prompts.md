# The Vermilion Garden — Image-Generation Prompts

Copy-paste prompts for an image model (ChatGPT/DALL·E, Midjourney, etc.) — the city, the district, NPCs, and the climax. *(No player-character art; bring your own party.)* Plain-description prompts work in ChatGPT; the `--ar`/`--v` flags are for Midjourney.

## Shared style (prepend or append to every prompt for a consistent look)

> *Painterly cinematic fantasy concept art. A great southern river-city in high summer, vivid saturated color, bright clear blue sky, brilliant warm sunlight. Pale sun-washed stone and terracotta roofs, white marble, fountains, and an abundance of flowers and garlands in every color. Deep vermilion roses as a recurring accent. Crisp, lush, high detail, fantasy film key-art.*

**Tips:** keep that style line identical across the set so they read as one book. Each prompt sets its own lighting (bright midday, soft dawn, or festival night) — leave the rest of the style line untouched. For Midjourney reuse one `--seed`; in ChatGPT say *"same style and palette as the last image."*

---

## The city of Aurivane (establishing shots)

### 1 · Aurivane, the golden city
> Sweeping establishing view of a great southern river-city in high summer, seen from a hill at bright midday under a clear blue sky: a vast city of pale sun-washed stone and terracotta roofs climbing in terraces from a wide blue river, crowned by domes, slender towers, and aqueducts, with green garden-terraces and bursts of flowers spilling between the buildings. Brilliant sunlight, vivid color, prosperous and alive — a hundred thousand souls. Banners and garlands tiny in the distance hint at a festival. Epic wide shot. *[style]* `--ar 16:9 --v 6`

### 2 · The river and the bridges
> The wide slow river running through the heart of the city at midday under a bright blue sky, spanned by several grand arched stone bridges crowded with people, market-boats and flower-barges drifting below, sunlit marble quays draped in midsummer garlands, café-terraces at the water's edge. Sparkling blue water, vivid summer color, lush and bustling. *[style]* `--ar 16:9 --v 6`

### 3 · The great plaza at festival
> A vast sunlit public plaza in the city during a midsummer flower-festival, bright midday, clear blue sky: a huge central fountain, white marble colonnades and a domed civic hall, the whole square thronged with thousands of revelers, flower-stalls, dancers, musicians, and drifting petals, colorful banners and garlands strung between the buildings. Joyful, brilliant, saturated color. Wide shot. *[style]* `--ar 16:9 --v 6`

### 4 · The city at festival night
> The city at festival night, seen across the rooftops from a high terrace: warm lantern-light and glowing windows spilling down the terraced hill to a dark river, fireworks and floating sky-lanterns above a deep blue night sky, distant music, garlands and blossom everywhere. Festive and beautiful, with the unlit gardens and lower lanes below falling into quiet shadow. Atmospheric, cinematic. *[style]* `--ar 16:9 --v 6`

---

## The Verdance — the district

### 5 · The Verdance, mid-festival
> A terraced garden-quarter of the city in the heart of a midsummer flower-festival, bright midday under a clear blue sky: pale stone buildings draped in colorful garlands, streets packed with revelers, music and flowers everywhere, petals drifting in the air. Above it all on the high hill, a terraced public rose-garden of deep vermilion roses blazing against the green and the blue sky. Lush, joyful, vivid summer color. Wide establishing shot. *[style]* `--ar 16:9 --v 6`

### 6 · The Vermilion Garden
> A magnificent terraced public rose-garden climbing a city hill in bright summer sun under a blue sky, terrace upon terrace of enormous deep-vermilion roses, white marble paths and fountains, the sunlit city spread below. Breathtakingly beautiful and vividly colorful — and, at the foot of the lowest terrace, a small patch roped off by the city Watch around trampled blooms and a dark stain. *[style]* `--ar 2:3 --v 6`

### 7 · The tea-garden crime scene
> A lush terraced pleasure-garden of tea-houses and pavilions in soft early-morning light, cool but bright, jasmine and roses everywhere, dew on the grass. A stretch trampled and roped off; a single perfect **deep-vermilion rose** lying bright on the green where something was taken. Beautiful, quiet, sad. *[style]* `--ar 16:9 --v 6`

### 8 · The Bloommarket
> A vast, crowded city flower-and-honey market square at festival, bright midday under a blue sky, packed with stalls of blooms and candied petals and sweet-sellers, a great fountain at the center, colorful garlands strung overhead, joyful chaos in brilliant sunlight. The vibrant social heart of the district — with one corner roped off and quiet near the fountain. *[style]* `--ar 16:9 --v 6`

### 9 · The Witherrows
> A run-down, overgrown low corner of the otherwise bright festival city, in shadow where the celebration doesn't reach: crumbling sun-baked walls choked in wild ivy and bramble, narrow shaded lanes, shuttered windows, a walled garden of dark common red roses behind a barred gate daubed with warding-paint. Deep greens and reds, cool shade contrasting the bright blue sky and sunlit rooftops just beyond. *[style]* `--ar 16:9 --v 6`

---

## The people

> *The trick of the cast: nearly everyone is warm, charming, and hiding something. Draw them all likable — the one murderer should look no guiltier than the four innocents.*

### 10 · Florian Sael, the perfumer *(the killer — play him kind)*
> Portrait of a gentle, handsome artisan in his forties in a bright sunlit perfumery full of glass bottles and hanging roses, a soft warm smile, kind eyes, a deep-vermilion rose tucked in his apron, his hands stained green and red from grafting. He looks utterly trustworthy — the most beloved man in the district. Clear bright daylight, vivid color. Nothing in the image hints he is a murderer; that is the point. *[style]* `--ar 2:3 --v 6`

### 11 · Castellan Vane, the impresario *(the decoy villain)*
> Portrait of a magnetic, theatrical man in his fifties in a sumptuous private gallery of curiosities, flamboyant brocade coat and rings, a knowing delighted smile, one eyebrow raised. Around him: funerary masks, antique mourning-jewelry, glass cases of macabre relics, a poster for his play *The Briar Bride's Kiss.* He looks *exactly* like the killer a clever party wants him to be — and he is innocent. Warm gallery lamplight, rich theatrical color. *[style]* `--ar 2:3 --v 6`

### 12 · Madame Ysolde, the patroness *(red herring)*
> Portrait of an elegant, witty noblewoman in her forties at a sunlit festival soirée, gorgeous summer gown and jewels, a warm generous hostess's smile, a glass of wine in hand and tiny ornate perfume-vials on the table beside her. Beloved and gracious — with the faintest shadow of strain behind the smile. Bright airy daylight, vivid festive color. *[style]* `--ar 2:3 --v 6`

### 13 · Deputy Roon, the Watch officer *(corrupt, helpful)*
> Portrait of an easy-going city Watch officer in his thirties in light festival-duty armor and tabard, an approachable, friendly, accommodating smile, a hand resting just a little too comfortably on a coin-purse at his belt. The cooperative face of the law — and quietly on the take. Bright street daylight, warm tone. *[style]* `--ar 2:3 --v 6`

### 14 · Skein, the resurrection-man *(the linchpin)*
> Portrait of a gaunt, wary grave-robber in a shadowed overgrown slum alley at dusk, patched dark clothes, dirt and grave-soil under broken nails, a spade and sacking half-hidden behind him, darting nervous eyes. Furtive, dangerous, for-sale-to-the-highest-bidder. Cool blue shadow with one shaft of fading warm light. *[style]* `--ar 2:3 --v 6`

### 15 · Dama Vesh, the poison-gardener *(innocent scapegoat)*
> Portrait of a proud, sharp-faced old woman in an overgrown walled garden of dark red roses, wrapped in herb-hung shawls, grafting-shears in work-stained hands, a defiant unfriendly stare. She looks exactly like the witch a frightened festival crowd wants to blame — and she is innocent. Bright daylight filtered through leaves, deep greens and reds. *[style]* `--ar 2:3 --v 6`

### 16 · The mob in the Witherrows
> Night in an overgrown slum lane lit by festival torches: a crowd of forty frightened revelers, garlands still in their hair, wine-courage and fury on their faces, advancing on a barred garden gate daubed with paint. Ordinary celebrants — the tavern-keeper, a theater-man — turned into a mob by terror. Torchlight against deep green shadow and a dark blue night sky. Tense, human. *[style]* `--ar 16:9 --v 6`

---

## The conservatory (the reveal & climax)

### 17 · The Daughter-Rose *(the smoking gun)*
> A sunlit, humid private glass conservatory choked with enormous vermilion roses climbing every wall, bright light pouring through the glass. At its center, rooted in a great urn of dark earth, a briar grown into the shape of a girl of about eight — life-size, her face half-formed in rose and thorn, hollow stems veined with dark blood. Woven into her branches like jewels: a pearl earring, a worn locket, a silver garland-pin. Empty fresh stems wait for one more. Beautiful and unsettling. Lush vivid crimson and green. *[style]* `--ar 2:3 --v 6`

### 18 · The Bloomwake wakes *(boss — only if the ritual completes)*
> A life-size girl of crimson roses and thorn come horribly to life in a wrecked glass conservatory at night, lit warm by lanterns — drifting petals, mouth open in a child's keening cry, a pearl earring and locket and silver pin glowing in her briar chest, dark blood threading her hollow stems, thorned arms reaching to embrace. Sorrowful and frightening. Deep vivid reds and greens, torn petals, broken glass. *[style]* `--ar 2:3 --v 6`

### 19 · Thornling *(minion)*
> A writhing knee-high tangle of animated rose-cane, root, and thorn, skittering fast across a sunlit conservatory floor on grasping briar-limbs, deep red and green, leaving a trail of torn petals and barbs. Quick, fragile, mindless. Bright light, vivid color, glint of thorns. *[style]* `--ar 1:1 --v 6`

### 20 · The keepsakes returned *(resolution)*
> Close-up on a Watch-sergeant's plain wooden table in warm daylight: a pearl earring, a worn locket, and a silver garland-pin laid in a row on a cloth, returned to the families of the dead, a single wilting vermilion petal beside them. Quiet, mournful, resolved — three small objects that cost three lives. *[style]* `--ar 3:2 --v 6`
