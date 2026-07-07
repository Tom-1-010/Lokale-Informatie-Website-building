const ICONS = {
  forest:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 7 10h2l-3.5 5H9v3h6v-3h3.5L15 10h2l-5-7Z"/></svg>',
  tiny:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m4 11 8-7 8 7"/><path d="M6 10v9h12v-9"/><rect x="10" y="13" width="4" height="6"/></svg>',
  wellness:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z"/><path d="M8 9c0-1.5 1-1.5 1-3M13 9c0-1.5 1-1.5 1-3"/></svg>',
  romantic:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.6-9-9c-1.2-2.7.6-6 3.8-6 2 0 3.4 1.2 5.2 3.3C13.8 6.2 15.2 5 17.2 5c3.2 0 5 3.3 3.8 6-2 4.4-9 9-9 9Z"/></svg>',
  mirror:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z"/></svg>',
  glamping:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 3 19h18L12 4Z"/><path d="M12 12l-3.5 7h7L12 12Z"/></svg>',
  nature:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 4c-8 0-13 4-13 10 0 3 2 6 6 6 6 0 10-6 7-16Z"/><path d="M6 20C9 14 13 10 17 8"/></svg>',
  pin:
    '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z"/><circle cx="12" cy="11" r="2.2"/></svg>'
};

const STAYS = [
  {
    slug: "boshuisje-met-hottub",
    title: "Boshuisje met hottub",
    location: "Veluwe, Nederland",
    description:
      "Overnacht midden in het bos en ontspan in je eigen hottub onder de sterrenhemel. Knus, warm en heerlijk afgelegen.",
    price: "€129",
    tag: "Toplocatie",
    theme: "Boshuisjes",
    scene: "scene-forest",
    href: "/go/boshuisje-met-hottub"
  },
  {
    slug: "spiegelhuisje-aan-het-kanaal",
    title: "Spiegelhuisje aan het kanaal",
    location: "Den Bosch, Nederland",
    description:
      "Een huisje dat volledig opgaat in het landschap. Vanuit bed kijk je door de spiegelwand zó het water en de sterren in.",
    price: "€154",
    tag: "Bijzonder",
    theme: "Spiegelhuisjes",
    scene: "scene-mirror",
    href: "/go/spiegelhuisje-aan-het-kanaal"
  },
  {
    slug: "wellness-lodge-met-sauna",
    title: "Wellness lodge met sauna",
    location: "Limburg, Nederland",
    description:
      "Privésauna, regendouche en een terras met heuvelzicht. Volledige ontspanning voor een romantisch weekend met z'n tweeën.",
    price: "€179",
    tag: "Wellness",
    theme: "Wellness",
    scene: "scene-wellness",
    href: "/go/wellness-lodge-met-sauna"
  },
  {
    slug: "tiny-house-tussen-de-bomen",
    title: "Tiny house tussen de bomen",
    location: "Drenthe, Nederland",
    description:
      "Compact designhuisje op een stille plek tussen de bomen. Wakker worden met vogels, koffie op de veranda en totale rust.",
    price: "€99",
    tag: "Rust",
    theme: "Tiny houses",
    scene: "scene-tiny",
    href: "/go/tiny-house-tussen-de-bomen"
  }
];

const CATEGORIES = [
  { name: "Boshuisjes", query: "boshuisje", icon: ICONS.forest, text: "Verscholen tussen de bomen" },
  { name: "Tiny houses", query: "tiny house", icon: ICONS.tiny, text: "Klein wonen, groots slapen" },
  { name: "Wellness", query: "wellness", icon: ICONS.wellness, text: "Sauna, hottub en ontspanning" },
  { name: "Romantisch", query: "romantisch", icon: ICONS.romantic, text: "Voor een nachtje samen" },
  { name: "Spiegelhuisjes", query: "spiegelhuisje", icon: ICONS.mirror, text: "Slapen in het landschap" },
  { name: "Glamping", query: "glamping", icon: ICONS.glamping, text: "Kamperen met comfort" },
  { name: "Natuurhuisjes", query: "natuur", icon: ICONS.nature, text: "Middenin het groen" },
  { name: "Aan het water", query: "water", icon: ICONS.pin, text: "Uitzicht over het water" }
];

const INSPIRATION = [
  {
    label: "Romantisch",
    title: "Verrassing voor je lief",
    text: "Hottub, sterrenhemel en niemand in de buurt. De mooiste plekken voor een romantisch nachtje weg.",
    style: "inspo-two"
  },
  {
    label: "Natuur",
    title: "Wakker worden in het bos",
    text: "Ochtendmist tussen de bomen en koffie op de veranda. Deze boshuisjes voelen als een andere wereld.",
    style: "inspo-one"
  },
  {
    label: "Uniek slapen",
    title: "Plekken die je niet gelooft",
    text: "Spiegelhuisjes, kaslofts en huisjes op het water: overnachtingen die je nog jaren navertelt.",
    style: "inspo-three"
  }
];

const HOW_IT_WORKS = [
  {
    title: "Zoek jouw plek",
    text: "Blader door categorieën of zoek op regio en sfeer. Wij selecteren alleen plekken met een echte wow-factor."
  },
  {
    title: "Vergelijk en droom",
    text: "Bekijk prijzen, sfeer en bijzonderheden per plek. Bewaar je favorieten en laat je verleiden."
  },
  {
    title: "Boek via onze partner",
    text: "Je boekt veilig bij onze boekingspartners, tegen dezelfde prijs. Wij verdienen soms een kleine commissie — jij betaalt niets extra."
  }
];

const state = { query: "" };

const byId = (id) => document.getElementById(id);

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function stayMatches(stay, query) {
  if (!query) return true;
  const haystack = normalize(
    [stay.title, stay.location, stay.description, stay.tag, stay.theme].join(" ")
  );
  return normalize(query)
    .split(/\s+/)
    .every((word) => haystack.includes(word));
}

function renderStays() {
  const stays = STAYS.filter((stay) => stayMatches(stay, state.query));
  const hint = byId("searchHint");

  if (!stays.length) {
    byId("stayGrid").innerHTML =
      '<div class="empty-state">Geen bijzondere plek gevonden. Probeer bijvoorbeeld "hottub", "Veluwe", "wellness" of "tiny house".</div>';
    hint.textContent = "Geen resultaten voor deze zoekopdracht.";
    return;
  }

  hint.textContent = state.query
    ? `${stays.length} ${stays.length === 1 ? "plek" : "plekken"} gevonden voor "${state.query}"`
    : "";

  byId("stayGrid").innerHTML = stays
    .map(
      (stay) => `
        <article class="stay-card">
          <div class="stay-media ${stay.scene}">
            <span class="stay-tag">✦ ${stay.tag}</span>
          </div>
          <div class="stay-body">
            <h3>${stay.title}</h3>
            <span class="stay-location">${ICONS.pin} ${stay.location}</span>
            <p>${stay.description}</p>
            <div class="stay-foot">
              <span class="stay-price">vanaf ${stay.price}<small>per nacht</small></span>
              <a class="button button-primary stay-cta" href="${stay.href}" aria-label="Bekijk beschikbaarheid: ${stay.title}">Bekijk beschikbaarheid</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCategories() {
  const grid = byId("categoryGrid");

  grid.innerHTML = CATEGORIES.map(
    (category) => `
      <button class="category-card ${state.query === category.query ? "active" : ""}" type="button" data-query="${category.query}">
        <span class="category-icon" aria-hidden="true">${category.icon}</span>
        <strong>${category.name}</strong>
        <small>${category.text}</small>
      </button>
    `
  ).join("");

  grid.querySelectorAll("[data-query]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextQuery = button.dataset.query === state.query ? "" : button.dataset.query;
      state.query = nextQuery;
      byId("staySearch").value = nextQuery;
      renderCategories();
      renderStays();
      byId("uitgelicht").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderInspiration() {
  byId("inspirationGrid").innerHTML = INSPIRATION.map(
    (item) => `
      <article class="inspo-card ${item.style}">
        <span>${item.label}</span>
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </article>
    `
  ).join("");
}

function renderSteps() {
  byId("stepsList").innerHTML = HOW_IT_WORKS.map(
    (step, index) => `
      <article class="step-card">
        <div class="step-num" aria-hidden="true">${index + 1}</div>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </article>
    `
  ).join("");
}

function initSearch() {
  const input = byId("staySearch");
  const clearButton = byId("clearSearch");

  input.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderCategories();
    renderStays();
  });

  clearButton.addEventListener("click", () => {
    input.value = "";
    state.query = "";
    renderCategories();
    renderStays();
    input.focus();
  });
}

function initNewsletter() {
  const form = byId("newsletterForm");
  const message = byId("newsletterMsg");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = byId("newsletterEmail");

    if (!email.value.trim() || !email.checkValidity()) {
      message.textContent = "Vul een geldig e-mailadres in om mee te dromen.";
      email.focus();
      return;
    }

    message.textContent = "Dankjewel! Zodra de nieuwsbrief live is, ben jij een van de eersten. ✦";
    form.reset();
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
initNewsletter();
renderCategories();
renderStays();
renderInspiration();
renderSteps();
registerServiceWorker();
