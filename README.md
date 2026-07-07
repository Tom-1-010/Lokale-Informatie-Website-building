# BijzonderNachtje

Een moderne, mobile-first affiliate website voor bijzondere overnachtingen: boshuisjes, tiny houses, wellnesshuisjes, romantische verblijven, spiegelhuisjes, glamping en natuurhuisjes.

## Kernbelofte

> Jouw bijzondere nachtje weg begint hier.

## Branding

- Dromerig, modern, zacht, vriendelijk, betrouwbaar
- Kleuren: nachtpaars `#4C1D95`, CTA-paars `#6D28D9`, lavendel `#A78BFA`, warm crème `#FFFDF8`, zandwit `#F7F2EA`, natuur-groen `#1F6B3A`, warm goud `#F59E0B`
- Afgeronde vormen, maan/sterren/wolken als subtiele details
- Typografie: Rubik (via Google Fonts, met systeemfont-fallback)

## Deze versie

De homepage/landingpage bevat:

- Header met logo, navigatie en CTA
- Hero met dromerige nachtscene-illustratie
- Zoek/filterblok (filtert op plek, regio en sfeer)
- Categoriekaarten die het aanbod filteren
- Uitgelichte overnachtingen met voorlopige affiliate-links (`/go/...`)
- Inspiratieblok
- Uitleg in 3 stappen
- Newsletterblok (front-end only, geen echte verzending)
- Footer met affiliate-disclaimer
- Mobiele bottom-navigatie en PWA-basis (manifest + service worker)

## Bestanden

```text
index.html
styles.css
app.js
manifest.webmanifest
sw.js
assets/icon.svg
```

## Lokaal openen

Dit is een statische site zonder build-stap:

```bash
python3 -m http.server 5173
```

Open daarna `http://localhost:5173`.

## Nieuwe accommodaties toevoegen

Voeg plekken toe aan de `STAYS`-array in `app.js`. Velden per plek:

- `slug`
- `title`
- `location`
- `description`
- `price`
- `tag`
- `theme`
- `scene` (CSS-klasse voor de kaartvisual)
- `href` (affiliate-link, voorlopig `/go/<slug>`)

Categorieën staan in `CATEGORIES`; de `query` van een categorie bepaalt waarop gefilterd wordt.

## Bewuste keuzes

- Geen framework, geen npm, geen build-stap — pure HTML/CSS/JS.
- Geen boekingssysteem, betaalflow, accounts, CMS of backend in deze fase.
- Affiliate-links en newsletter zijn placeholders tot echte partners/tooling gekoppeld worden.
- Bij elke contentwijziging: verhoog `CACHE_NAME` in `sw.js` zodat de PWA-cache ververst.
