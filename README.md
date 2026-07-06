# VakantieKompas

Een moderne website/web-app voor vakantielanden, gebouwd als lichte PWA met Nederland als eerste voorbeeldland.

## Doel

VakantieKompas helpt bezoekers snel een vakantieland te kiezen en daarna door te klikken naar relevante affiliate-aanbiedingen, zoals hotels, uitjes, routes en praktische reistips.

## Eerste versie

Deze eerste versie bevat:

- Nederland als voorbeeldland
- Moderne responsive UI
- iOS-vriendelijke web-app basis
- PWA manifest
- Service worker met eenvoudige offline cache
- Affiliate-blokken voor hotels, uitjes en routes
- Duidelijke affiliate-transparantie
- Schaalbare datastructuur voor extra landen

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

Omdat dit een statische site is, kan de website direct vanuit een lokale server worden bekeken.

```bash
python3 -m http.server 5173
```

Open daarna:

```text
http://localhost:5173
```

## Nieuwe landen toevoegen

Voeg nieuwe landen toe in `app.js` in de `COUNTRIES` array. Gebruik dezelfde structuur als het Nederland-object.

Belangrijke velden:

- `slug`
- `name`
- `tagline`
- `summary`
- `heroFacts`
- `highlights`
- `hotelDeals`
- `activities`
- `itinerary`
- `practical`

## Affiliate-links

De huidige knoppen gebruiken placeholder-links (`#`). Vervang deze later door echte trackinglinks van bijvoorbeeld:

- Booking.com Partner Programme
- GetYourGuide Affiliate Partner Program
- Tiqets Partner Program
- ANWB of reisverzekeringspartners
- Lokale hotelketens of vakantieparken

Zorg dat affiliate-content altijd herkenbaar blijft voor bezoekers.

## iOS web-app aandachtspunten

De site bevat:

- `apple-mobile-web-app-capable`
- `apple-mobile-web-app-title`
- `theme-color`
- veilige spacing met `env(safe-area-inset-*)`
- grote touch targets
- sticky mobiele navigatie
- manifest voor installatie als web-app

Voor productie is het verstandig om nog echte PNG app-icons toe te voegen, minimaal 180x180, 192x192 en 512x512.

## Bewuste keuzes

- Geen zware dependency-stack toegevoegd.
- Geen backend/Supabase toegevoegd.
- Geen echte affiliate-trackingcodes toegevoegd.
- Geen betaalde API's toegevoegd.
- Geen build-stap nodig voor deze MVP.
- Focus op snelle eerste MVP die later kan doorgroeien.
