const COUNTRIES = [
  {
    slug: "nederland",
    name: "Nederland",
    label: "Citytrips, kust en natuur dicht bij huis",
    tagline: "Compact vakantieland met veel afwisseling: Amsterdam, Rotterdam, Waddeneilanden, Zeeland, Veluwe, musea en attracties.",
    summary:
      "Nederland is sterk voor korte vakanties, gezinsweekenden en citytrips. De afstanden zijn klein, het openbaar vervoer is goed geregeld en bijna elke regio heeft een mix van cultuur, natuur en horeca.",
    heroFacts: ["Beste reistijd: april t/m september", "Ideaal: 2 tot 10 dagen", "Type: steden, kust, natuur", "Budget: gemiddeld tot hoog"],
    themes: ["citytrip", "familie", "strand", "musea", "natuur", "fietsroute"],
    highlights: [
      {
        title: "Amsterdam en musea",
        text: "Sterk voor cultuur, grachten, foodhallen, winkels en bekende musea. Goede hotelmarkt, maar prijzen liggen vaak hoger."
      },
      {
        title: "Kust en eilanden",
        text: "Zeeland, Scheveningen, Texel en de Waddeneilanden zijn geschikt voor strand, wandelen, fietsen en familievakanties."
      },
      {
        title: "Natuur en rust",
        text: "De Veluwe, Utrechtse Heuvelrug en Limburg zijn logisch voor natuurhuisjes, wellnesshotels en actieve weekenden."
      }
    ],
    hotelDeals: [
      {
        title: "Boutique hotel in Amsterdam",
        region: "Noord-Holland",
        price: "vanaf €129",
        text: "Voor citytrips met musea, horeca en grachten op loopafstand.",
        cta: "Bekijk hotels",
        url: "#"
      },
      {
        title: "Strandhotel aan de kust",
        region: "Zeeland / Zuid-Holland",
        price: "vanaf €99",
        text: "Voor weekendjes weg met strand, boulevard, duinen en familiekamers.",
        cta: "Bekijk kustdeals",
        url: "#"
      },
      {
        title: "Natuurhotel op de Veluwe",
        region: "Gelderland",
        price: "vanaf €89",
        text: "Voor wandelen, fietsen, wellness en korte autoroutes door de natuur.",
        cta: "Bekijk verblijven",
        url: "#"
      }
    ],
    activities: [
      {
        title: "Rondvaart door de grachten",
        text: "Laagdrempelige activiteit voor eerste keer Amsterdam en goed geschikt voor ticketpartners.",
        cta: "Tickets bekijken",
        url: "#"
      },
      {
        title: "Keukenhof en tulpenregio",
        text: "Seizoensgebonden trekker rond Lisse, sterk voor lentecontent en dagtrips.",
        cta: "Dagtrips bekijken",
        url: "#"
      },
      {
        title: "Efteling of pretparkweekend",
        text: "Interessant voor gezinnen, hotelarrangementen en tickets in één funnel.",
        cta: "Familie-uitjes",
        url: "#"
      },
      {
        title: "Fietsroute door natuurgebied",
        text: "Past bij binnenlandse vakanties, natuurhuisjes en verhuurpartners.",
        cta: "Routes bekijken",
        url: "#"
      }
    ],
    itinerary: [
      {
        day: "Dag 1",
        title: "Aankomst en stadswandeling",
        text: "Start in Amsterdam, Utrecht of Rotterdam. Kies een centraal hotel en plan één duidelijke hoofdactiviteit."
      },
      {
        day: "Dag 2",
        title: "Museum, rondvaart of foodtour",
        text: "Combineer een betaalde activiteit met vrije tijd. Dit is het beste moment voor ticket-affiliates."
      },
      {
        day: "Dag 3",
        title: "Natuur of kust",
        text: "Rijd of reis door naar strand, Veluwe of een kleinere stad. Voeg hotel- en routepartners toe."
      }
    ],
    practical: [
      {
        title: "Vervoer",
        text: "Trein en auto werken allebei goed. Parkeren in grote steden is duur; P+R is vaak slimmer."
      },
      {
        title: "Weer",
        text: "Reken op wisselvallig weer. Voor buitenactiviteiten is een regenalternatief verstandig."
      },
      {
        title: "Kosten",
        text: "Hotels in Amsterdam, kustplaatsen en schoolvakanties zijn meestal het duurst."
      },
      {
        title: "Boekmoment",
        text: "Voor populaire weekenden en vakanties loont vroeg boeken; last-minute werkt beter buiten het hoogseizoen."
      }
    ]
  }
];

const state = {
  selectedCountry: COUNTRIES[0],
  query: ""
};

const byId = (id) => document.getElementById(id);

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function countryMatches(country, query) {
  if (!query) return true;
  const haystack = normalize([
    country.name,
    country.label,
    country.tagline,
    country.summary,
    country.themes.join(" "),
    country.highlights.map((item) => `${item.title} ${item.text}`).join(" ")
  ].join(" "));
  return haystack.includes(normalize(query));
}

function renderCountryList() {
  const list = byId("countryList");
  const countries = COUNTRIES.filter((country) => countryMatches(country, state.query));

  if (!countries.length) {
    list.innerHTML = '<div class="empty-state">Geen land gevonden. Probeer bijvoorbeeld "strand", "musea" of "Nederland".</div>';
    return;
  }

  if (!countries.some((country) => country.slug === state.selectedCountry.slug)) {
    state.selectedCountry = countries[0];
  }

  list.innerHTML = countries
    .map(
      (country) => `
        <button class="country-button ${country.slug === state.selectedCountry.slug ? "active" : ""}" type="button" data-country="${country.slug}">
          <strong>${country.name}</strong>
          <small>${country.label}</small>
        </button>
      `
    )
    .join("");

  list.querySelectorAll("[data-country]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextCountry = COUNTRIES.find((country) => country.slug === button.dataset.country);
      if (!nextCountry) return;
      state.selectedCountry = nextCountry;
      renderAll();
    });
  });
}

function renderCountryDetail() {
  const country = state.selectedCountry;
  byId("countryDetail").innerHTML = `
    <div class="country-detail-header">
      <div>
        <p class="eyebrow">Voorbeeldland</p>
        <h3>${country.name}</h3>
        <p>${country.summary}</p>
      </div>
      <ul class="fact-list" aria-label="Snelle feiten">
        ${country.heroFacts.map((fact) => `<li>${fact}</li>`).join("")}
      </ul>
    </div>

    <ul class="tags" aria-label="Thema's">
      ${country.themes.map((theme) => `<li class="tag">${theme}</li>`).join("")}
    </ul>

    <div class="highlight-grid">
      ${country.highlights
        .map(
          (item) => `
            <div class="highlight">
              <strong>${item.title}</strong>
              <p>${item.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderHotels() {
  const country = state.selectedCountry;
  byId("hotelCards").innerHTML = country.hotelDeals
    .map(
      (deal) => `
        <article class="card">
          <div class="card-topline">
            <span class="badge">Affiliate plek</span>
            <span class="price">${deal.price}</span>
          </div>
          <strong>${deal.title}</strong>
          <p>${deal.region}</p>
          <p>${deal.text}</p>
          <a class="button button-primary" href="${deal.url}" aria-label="${deal.cta}: ${deal.title}">${deal.cta}</a>
        </article>
      `
    )
    .join("");
}

function renderActivities() {
  const country = state.selectedCountry;
  byId("activityGrid").innerHTML = country.activities
    .map(
      (activity) => `
        <article class="activity-card">
          <span class="badge">Uitje</span>
          <strong>${activity.title}</strong>
          <p>${activity.text}</p>
          <a class="button button-secondary" href="${activity.url}" aria-label="${activity.cta}: ${activity.title}">${activity.cta}</a>
        </article>
      `
    )
    .join("");
}

function renderItinerary() {
  const country = state.selectedCountry;
  byId("timeline").innerHTML = country.itinerary
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-day">${item.day}</div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPractical() {
  const country = state.selectedCountry;
  byId("practicalGrid").innerHTML = country.practical
    .map(
      (item) => `
        <article class="practical-card">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderAll() {
  renderCountryList();
  renderCountryDetail();
  renderHotels();
  renderActivities();
  renderItinerary();
  renderPractical();
}

function initSearch() {
  const input = byId("countrySearch");
  const clearButton = byId("clearSearch");

  input.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderAll();
  });

  clearButton.addEventListener("click", () => {
    input.value = "";
    state.query = "";
    state.selectedCountry = COUNTRIES[0];
    renderAll();
    input.focus();
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((error) => {
      console.warn("Service worker kon niet worden geregistreerd:", error);
    });
  });
}

byId("year").textContent = new Date().getFullYear();
initSearch();
renderAll();
registerServiceWorker();
