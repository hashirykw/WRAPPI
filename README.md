# Wrappi — website

Site for **Wrappi · Wrapping Art Design**, a PPF, wrapping, polishing and ceramic coating studio in Oslo.

- Strømsveien 324, 1081 Oslo
- +47 462 28 133 · +47 463 61 675
- Instagram [@wrappi_](https://www.instagram.com/wrappi_/)

## Files

Everything sits flat in one folder, same as the Verzish build. `index.html` links every file directly by name.

- `index.html` — the whole site (HTML, CSS and JS in one file)
- `logo.png` / `logo.webp` — wordmark cut from the Instagram profile picture (swap for the original vector when the client sends it)
- `favicon.png` / `apple-touch-icon.png` — the W mark with the red/blue rule
- `car.glb` (6 MB) + `car_ao.png` — the 3D car and its contact shadow. They load after the page has settled; until then, and on browsers without WebGL or with data saver on, the drawn SVG car shows instead

### Photos and video: just drop them in

Any image that isn't in the folder yet shows a labelled placeholder with its filename. Add the file with that exact name and it appears.

| File | Where it shows |
| --- | --- |
| `hero.mp4` | Hero background reel. Replaces the animated car automatically once it's there (10–20 s, muted, under ~6 MB) |
| `ppf_01.webp` … `ppf_04.webp` | Services → PPF tab (01 is the big one) |
| `wrap_01.webp` … `wrap_04.webp` | Services → Wrapping tab |
| `polish_01.webp` … `polish_04.webp` | Services → Polishing tab |
| `ceramic_01.webp` … `ceramic_04.webp` | Services → Ceramic tab |
| `before.webp` + `after.webp` | Before/after slider (same framing, same panel). Without them the slider shows a drawn paint demo |
| `work_01.webp` … `work_12.webp` | "Out of the bay" gallery. Edit the `WORK` list in the script to change captions and categories |
| `ig_01.webp` … `ig_06.webp` | Instagram strip (vertical, 9:14) |

## Prices, hours and contact

All of it is in one block at the top of the main `<script>` — search for `EDIT HERE`.

- `services` — from/to prices per service in NOK (currently **sample numbers**)
- `sizes` — the multiplier for each car size
- `hours` — opening hours per day, used by the open/closed badge and the Oslo clock
- `PRICES_CONFIRMED` — set to `true` once the real prices are in. That hides every red dashed "sample price / to confirm" tag on the page in one go

## The 3D car

One WebGL canvas moves between the hero and the wrap bay, so only one car is ever loaded and rendered, and nothing renders when neither is on screen.

- **Hero:** turntable spins a full 360°, keeps re-wrapping itself, and turns further as you scroll
- **Wrap bay:** colour + finish wipe on with the squeegee, PPF coverage glows on the panels each package covers, ceramic shows water beading, and there are 3/4 · Front · Side · Rear · Top views plus a 360° spin toggle
- Drag sideways to spin the car. Vertical swipes still scroll the page on phones
- **Demo car:** Ferrari 458 Italia by vicent091036 (CC BY 4.0), from the three.js examples. Credited in the footer. Check the licence on Sketchfab before launch, or swap `car.glb` for another model. The body mesh must be named `body` for the wrap shader to find it

## What's on the page

Loader (film peeled off by a squeegee) → hero with a car that keeps getting re-wrapped → marquee → four service slabs → service tabs → **wrap bay configurator** (colour + finish, PPF coverage packages, ceramic beading toggle, sends the build to WhatsApp or into the price builder) → finishes stack → polishing before/after slider → filterable gallery + lightbox → 7-step process (horizontal scroll on desktop) → **price builder** with live guide price and a pre-written WhatsApp message → FAQ → map, hours and Oslo clock → Instagram strip → footer → rule-based "Ask Wrappi" assistant (understands a few Norwegian keywords too).

## Deploy

Upload every file to the root of a GitHub repo, then import it on Vercel (Framework preset: **Other**, no build command) or turn on GitHub Pages for the `main` branch.

## To confirm with the client

- Real prices for every service and car size (then flip `PRICES_CONFIRMED`)
- Opening hours (placeholder: Mon–Fri 08–17, Sat by appointment)
- Which PPF film, wrap film and ceramic brands they use, and the warranty on each
- Typical turnaround times (FAQ has a placeholder)
- Which WhatsApp number should take quotes (currently +47 462 28 133)
- Original logo file (SVG/PNG) — the current one is cut from the profile picture
- Photos and reels for every slot in the table above
- English only, or English + Norwegian?
- Keep the Ferrari as the demo car, or use a model closer to their customers (lots of Teslas on their Instagram)?

Site by Nexlyr Solutions — nexlyr.solutions
