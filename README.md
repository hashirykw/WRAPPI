# Wrappi – Wrapping Art Design

Website for **Wrappi – Wrapping Art Design**, a car wrapping and paint-protection studio at Strømsveien 324, Furuset, Oslo.
Norwegian is the main language; every page has an English twin in the `en/` folder (served at `/en/…`).

Website built by [Nexlyr Solutions](https://nexlyr.solutions/).

## Pages

| Norwegian (address) | English (address) | What it is |
|---|---|---|
| `index.html` (`/`) | `en/index.html` (`/en`) | Home: every page as a button, rotating 3D car |
| `ppf.html` (`/ppf`) | `en/ppf.html` (`/en/ppf`) | PPF — full PPF and front PPF, with its own 3D studio |
| `farget-ppf.html` (`/farget-ppf`) | `en/color-ppf.html` (`/en/color-ppf`) | Color PPF, with its own 3D studio |
| `bilfoliering.html` (`/bilfoliering`) | `en/car-wrapping.html` (`/en/car-wrapping`) | Car wrapping (vinyl and PET), with its own 3D studio |
| `polering.html` (`/polering`) | `en/polishing.html` (`/en/polishing`) | Polishing (1-/2-step) and ceramic coating, with its own 3D studio |
| `design.html` (`/design`) | `en/design.html` (`/en/design`) | Full 3D wrap studio |
| `priser.html` (`/priser`) | `en/prices.html` (`/en/prices`) | Prices and price builder |
| `carlise-ppf.html` (`/carlise-ppf`) | `en/carlise-ppf.html` (`/en/carlise-ppf`) | CARLISE PPF — exclusive authorised distributor in Norway, B2B, certificate |
| `om-oss.html` (`/om-oss`) | `en/about.html` (`/en/about`) | About the team and company |
| `kontakt.html` (`/kontakt`) | `en/contact.html` (`/en/contact`) | Contact |
| `404.html` | | Not-found page |

Old addresses (`/design-din-bil`, `/polering-og-keramisk-coating`, `/en-ppf` …) 301-redirect to the new ones in `vercel.json`. The Google Search Console verification tag is in the `<head>` of `index.html` — keep it there.

## Files

- `styles.css` — all styles (dark and light theme)
- `site.js` — shared site script; **prices, phone numbers and WhatsApp number are at the top** (`window.WRAPPI`)
- `studio.js` — 3D engine and wrap studio (loads after the page is up)
- `films.js` — the film colour library: 3M 2080 and Avery Dennison wrap films, plus the Carlise TPU Color PPF range (112 colours, codes as printed on the sample cards)
- `boot.js` — runs first: theme, language and clean links
- `gsap.min.js`, `ScrollTrigger.min.js`, `lenis.min.js` — animation and smooth scroll
- `car-*.glb` — 3D car models (credits in the footer of every page)
- `*.webp`, `*.jpg`, `*.png` — photos, share images and icons
- `*.woff2` — self-hosted fonts
- `vercel.json` — clean URLs, redirects from old addresses, blocks opening code/3D/font files directly in a browser tab, security and cache headers
- `.vercelignore` — keeps this README and other repo files off the live site
- `sitemap.xml`, `robots.txt` — for search engines

## Deploy

1. Create a new GitHub repository and upload **everything in this folder** to its root (pages and assets at the root, English pages in `en/`). Asset paths are root-based (`/styles.css`), so the site must be served from the domain root.
2. In Vercel: **Add New → Project**, import the repository, framework preset **Other**, no build command, output directory `./`.
3. Deploy. Clean URLs (`/ppf`, `/priser`, `/en-ppf` …) work automatically through `vercel.json`.

If the site moves to its own domain, replace `https://wrappingartdesign.no` in the HTML `<head>` tags, `sitemap.xml` and `robots.txt`.

## Run locally

Any static server works, for example:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Links get `.html` added automatically when the site runs locally. Opening files straight from disk (file://) doesn't work, since paths start at the site root.
