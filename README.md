# Wrappi – Wrapping Art Design

Website for **Wrappi – Wrapping Art Design**, a car wrapping and paint-protection studio at Strømsveien 324, Furuset, Oslo.
Norwegian is the main language; every page has an English twin (`en-…`).

Website built by [Nexlyr Solutions](https://nexlyr.solutions/).

## Pages

| Norwegian | English | What it is |
|---|---|---|
| `index.html` | `en.html` | Home: every page as a button, rotating 3D car |
| `ppf.html` | `en-ppf.html` | PPF — full PPF and front PPF, with its own 3D studio |
| `farget-ppf.html` | `en-color-ppf.html` | Color PPF, with its own 3D studio |
| `bilfoliering.html` | `en-car-wrapping.html` | Car wrapping (vinyl and PET), with its own 3D studio |
| `polering-og-keramisk-coating.html` | `en-polishing-and-ceramic-coating.html` | Polishing (1-/2-step) and ceramic coating, with its own 3D studio |
| `design-din-bil.html` | `en-wrap-studio.html` | Full 3D wrap studio |
| `prosjekter.html` | `en-projects.html` | Projects and gallery |
| `priser.html` | `en-prices.html` | Prices (all starting prices) and price builder |
| `om-oss.html` | `en-about-us.html` | About the team and company |
| `kontakt.html` | `en-contact.html` | Contact |
| `404.html` | | Not-found page |

## Files

- `styles.css` — all styles (dark and light theme)
- `site.js` — shared site script; **prices, phone numbers and WhatsApp number are at the top** (`window.WRAPPI`)
- `studio.js` — 3D engine and wrap studio (loads after the page is up)
- `films.js` — the 3M 2080 and Avery Dennison film colour library
- `boot.js` — runs first: theme, language and clean links
- `gsap.min.js`, `ScrollTrigger.min.js`, `lenis.min.js` — animation and smooth scroll
- `car-*.glb` — 3D car models (credits in the footer of every page)
- `*.webp`, `*.jpg`, `*.png` — photos, share images and icons
- `*.woff2` — self-hosted fonts
- `vercel.json` — clean URLs, redirects, security and cache headers
- `sitemap.xml`, `robots.txt` — for search engines

## Deploy

1. Create a new GitHub repository and upload **everything in this folder** to its root (keep the flat layout — no subfolders).
2. In Vercel: **Add New → Project**, import the repository, framework preset **Other**, no build command, output directory `./`.
3. Deploy. Clean URLs (`/ppf`, `/priser`, `/en-ppf` …) work automatically through `vercel.json`.

If the site moves to its own domain, replace `https://wrappii.vercel.app` in the HTML `<head>` tags, `sitemap.xml` and `robots.txt`.

## Run locally

Any static server works, for example:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Links get `.html` added automatically when the site runs locally.
