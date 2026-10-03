# Wrappi — website

Site for **Wrappi · Wrapping Art Design**, a PPF, Color PPF, wrapping, polishing, ceramic coating and window tint studio in Oslo.

- Strømsveien 324, 1081 Oslo (Furuset, by IKEA Furuset)
- +47 462 28 133 · +47 463 61 675
- Instagram [@wrappi__](https://www.instagram.com/wrappi__/) · Facebook: Wrapping Art Design

## Files

Everything sits flat in one folder. `index.html` links every file directly by name.

- `index.html` — the whole site (HTML, CSS and JS in one file)
- `car.glb` + `car_ao.png` — the 3D car and its contact shadow (unchanged)
- `logo.png` / `logo.webp` / `favicon.png` / `apple-touch-icon.png` — unchanged
- `og.jpg` — link preview for WhatsApp, Instagram and Facebook
- `th-*.webp` — small thumbnails for the "From our bay" presets in the wrap studio
- every other `*.webp` — photos from Wrappi's own Instagram, cropped and compressed. Readable number plates are blurred. AI-made posters were left out

## Language

Norwegian browsers get Norwegian, everyone else gets English, and the NO / EN switch in the nav remembers the choice. Every translated line sits next to the English one in the HTML as a `data-no="…"` attribute, so a wording change is a single edit.

## Prices

All prices come from Wrappi's own posts. They live in the `WRAPPI` block at the top of the main `<script>` (search for `EDIT HERE`) and in the price section of the HTML.

- PPF, full car: 30 000 (small) · 33 000 (mid-size) · 36 000 (large / SUV) · from 45 000 (XL / van)
- Color PPF autumn campaign: from 33 000 (car) · from 38 000 (SUV) · from 45 000 (van), booking for November and December
- Front PPF from 12 900 · Full Shine 5 999 · Full Shine + ceramic 6 999 · 1-step polish from 2 990 · 2-step polish from 4 990
- Colour-change wraps, chrome delete, stripes, fleet graphics, window tint and ceramic on its own: price on request

When the autumn campaign ends, change the Color PPF block in the price section and the `colorPpf` line in `WRAPPI.services`.

## The wrap studio (3D)

One WebGL canvas moves between the hero and the studio, so only one car is ever loaded and rendered.

- **From our bay:** nine presets copied from Wrappi's real jobs (Taycan teal chrome, Urus purple, lime Model Y, rose-gold Leaf, satin titanium Model Y, satin red Tesla, Touareg side bands, Gladiator two-tone, BMW twin stripes)
- **Finishes:** gloss, metallic (with flake), satin, matte, chrome, plus an optional colour shift that changes colour with the viewing angle
- **Skins:** twin stripes, side bands, contrast roof and bonnet, Wrappi split, carbon, pixel camo, distressed, colour fade. Each one takes the visitor's own colours
- **Door decal:** type a company name or upload a logo and it goes on both doors, reading the right way on each side. Uploaded logos never leave the visitor's browser
- **Details:** wheel colour, brake calipers, window tint level, chrome delete
- **PPF:** shows what Front PPF and full-car PPF cover, with the prices; ceramic coating shows water beading
- **Save image:** renders the build into a branded 1080×1350 poster to download or share
- **Copy link:** a link that reopens the exact build (it's also added to the WhatsApp message)

Demo car: Ferrari 458 Italia by vicent091036 (CC BY 4.0), credited in the footer. Check the licence on Sketchfab before launch, or swap `car.glb` for another model. The body mesh must be named `body`.

## Deploy

Upload every file to the root of the GitHub repo, then import it on Vercel (Framework preset: **Other**, no build command) or turn on GitHub Pages for the `main` branch.

## To confirm with the client

- Opening hours (the site says "ask on WhatsApp" until they confirm)
- Whether prices include MVA (the April post said "+ MVA"; the price list posts don't say)
- Whether the second number, +47 463 61 675, should stay
- The Facebook page link (only the page name is shown for now)
- Original logo file (SVG/PNG) — the current one is cut from the profile picture
- A short reel for the hero, if they want one

Left out on purpose: the XPEL / STEK comparison from their film post (comparative claims about other brands are risky on a website), the expired summer, September and April offers, and every AI-made poster.

Site by Nexlyr Solutions — nexlyr.solutions
