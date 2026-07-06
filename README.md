# SlaapUniek

Een moderne website/web-app voor bijzondere overnachtingsplekken in Nederland.

## Nieuwe richting

SlaapUniek is geen website over vakantielanden meer. Het concept is om unieke slaapplekken in Nederland te verzamelen en te verkopen via sterke visuals, AI-content en TikTok-advertenties.

Voorbeelden van plekken:

- boomhutten
- tiny houses
- woonboten
- yurts
- kaslofts
- molenhuisjes
- wellnessplekken met hottub of sauna

## Positionering

Bestaande partijen zoals Natuurhuisje zijn sterk in natuurhuisjes en rust. SlaapUniek focust scherper op plekken met een duidelijke wow-factor die goed werken in short-form video.

Kernbelofte:

> Boek geen hotel. Boek een verhaal.

## Eerste versie

Deze MVP bevat:

- nieuwe branding: SlaapUniek
- Nederland als enige markt
- fictieve voorbeeldplekken
- zoekfunctie op plek, regio en vibe
- detailpaneel per overnachtingsplek
- wow-factor per plek
- AI/TikTok-advertentiehooks per geselecteerde plek
- MVP-roadmap richting affiliate, leads en later boekingen
- PWA-basis voor iOS/web-app gebruik

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

## Nieuwe plekken toevoegen

Voeg nieuwe plekken toe in `app.js` in de `STAYS` array. Gebruik dezelfde structuur als de bestaande voorbeeldplekken.

Belangrijke velden:

- `slug`
- `title`
- `type`
- `region`
- `price`
- `audience`
- `vibe`
- `tags`
- `summary`
- `wow`
- `whyTikTok`
- `cta`
- `url`

## Verdienmodel later

Begin realistisch met een affiliate- of leadmodel:

1. Curated pagina's met doorverwijzingen naar bestaande aanbieders.
2. TikTok/Meta ads testen per categorie.
3. Winnaars omzetten naar SEO-landingspagina's.
4. Verhuurders laten betalen per lead, plaatsing of commissie.
5. Pas later directe boekingen, accounts en beschikbaarheidskalender bouwen.

## Bewuste keuzes

- Geen zware dependency-stack toegevoegd.
- Geen backend/Supabase toegevoegd.
- Geen echte affiliate-trackingcodes toegevoegd.
- Geen echte verhuurderformulieren of betalingen toegevoegd.
- Geen build-stap nodig voor deze MVP.
- Focus op een snelle, testbare landingspagina die later kan doorgroeien.
