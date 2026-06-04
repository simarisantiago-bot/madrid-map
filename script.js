// =============================================
// Datos de lugares — Ruta de 3 días por Madrid
// =============================================
const places = [
  // ===== DÍA 1: Malasaña y Chueca =====
  {
    id: 1,
    day: 1,
    order: 1,
    name: "Plaza del Dos de Mayo",
    category: "Plazas y Calles",
    coords: [40.42679, -3.70374],
    description: "Comienza la mañana disfrutando del ambiente bohemio de Malasaña en su plaza más icónica.",
  },
  {
    id: 2,
    day: 1,
    order: 2,
    name: "Plaza de San Ildefonso",
    category: "Plazas y Calles",
    coords: [40.42441, -3.70171],
    description: "Baja paseando por las calles de Malasaña hacia esta plaza llena de terrazas.",
  },
  {
    id: 3,
    day: 1,
    order: 3,
    name: "Calle de Fuencarral",
    category: "Compras",
    coords: [40.42301, -3.70093],
    description: "Famosa calle peatonal repleta de tiendas de moda y de moda alternativa.",
  },
  {
    id: 4,
    day: 1,
    order: 4,
    name: "Nikita Nipone",
    category: "Compras",
    coords: [40.42499, -3.70227],
    description: "Tienda ideal para ver ropa y artículos vintage o curiosos por la zona de Malasaña.",
  },
  {
    id: 5,
    day: 1,
    order: 5,
    name: "Mercado de San Antón",
    category: "Restaurantes",
    coords: [40.42220, -3.69702],
    description: "Cruza hacia Chueca para tapear delicioso en sus diferentes puestos o subir a su terraza.",
  },
  {
    id: 6,
    day: 1,
    order: 6,
    name: "Bocadillos Oink Infantas",
    category: "Restaurantes",
    coords: [40.42178, -3.69910],
    description: "Opción rápida de bocadillos o algo para llevar, a pocos pasos de San Antón.",
  },

  // ===== DÍA 2: Gran Vía, Sol y Plaza Mayor =====
  {
    id: 7,
    day: 2,
    order: 1,
    name: "Espacio Fundación Telefónica",
    category: "Cultura",
    coords: [40.41992, -3.70347],
    description: "Empieza el día en plena Gran Vía visitando sus exposiciones gratuitas de arte y tecnología (abre 10:00 h).",
  },
  {
    id: 8,
    day: 2,
    order: 2,
    name: "Puerta del Sol",
    category: "Plazas y Calles",
    coords: [40.41686, -3.70348],
    description: "Camina al kilómetro cero de Madrid para ver la estatua del Oso y el Madroño y el famoso reloj.",
  },
  {
    id: 9,
    day: 2,
    order: 3,
    name: "Chocolatería San Ginés",
    category: "Restaurantes",
    coords: [40.41682, -3.70697],
    description: "Baja por el Pasadizo de San Ginés para desayunar tardío o merendar sus icónicos churros con chocolate.",
  },
  {
    id: 10,
    day: 2,
    order: 4,
    name: "Plaza Mayor",
    category: "Plazas y Calles",
    coords: [40.41551, -3.70744],
    description: "Admira la arquitectura barroca de esta majestuosa plaza y la estatua de Felipe III.",
  },
  {
    id: 11,
    day: 2,
    order: 5,
    name: "La Carbonería · Restaurante Plaza Mayor",
    category: "Restaurantes",
    coords: [40.41522, -3.70808],
    description: "El broche de oro para cenar junto a la plaza (L-V desde las 19:00 h).",
  },

  // ===== DÍA 3: La Latina, Lavapiés y Madrid Río =====
  {
    id: 12,
    day: 3,
    order: 1,
    name: "Bar La Ideal",
    category: "Restaurantes",
    coords: [40.41441, -3.70878],
    description: "Comienza junto a Plaza Mayor con un auténtico bocadillo de calamares antes de bajar a los barrios tradicionales.",
  },
  {
    id: 13,
    day: 3,
    order: 2,
    name: "Calle del Humilladero, 6",
    category: "Plazas y Calles",
    coords: [40.41193, -3.70936],
    description: "Epicentro del castizo barrio de La Latina: terraceo, balcones de forja y tapas tradicionales.",
  },
  {
    id: 14,
    day: 3,
    order: 3,
    name: "Calle de la Paloma, 6",
    category: "Plazas y Calles",
    coords: [40.41201, -3.71204],
    description: "Calle con encanto en La Latina, ambiente castizo y cercanía a la iglesia de la Virgen de la Paloma.",
  },
  {
    id: 15,
    day: 3,
    order: 4,
    name: "Lavapiés",
    category: "Cultura",
    coords: [40.40903, -3.70094],
    description: "Barrio multicultural lleno de arte urbano, cafés con encanto y calles empinadas.",
  },
  {
    id: 16,
    day: 3,
    order: 5,
    name: "Puente de Segovia",
    category: "Cultura",
    coords: [40.41441, -3.72225],
    description: "Para terminar la tarde en Madrid Río: vistas espectaculares al Palacio Real y la Catedral de la Almudena al atardecer.",
  },

  // ===== Día 1 — Alojamiento =====
  {
    id: 17,
    day: 1,
    order: 7,
    name: "Bastardo Hostel",
    category: "Alojamiento",
    coords: [40.42562, -3.69825],
    description: "Hostel boutique en Malasaña (Calle de San Mateo 3). Calificación 4.2 ★. Buena base para los recorridos del día 1.",
  },
  {
    id: 23,
    day: 1,
    order: 8,
    name: "TOY PANDA",
    category: "Compras",
    coords: [40.42453, -3.70008],
    description: "⚠️ Cerrado permanentemente. Lo dejamos marcado para recorrer la zona (Malasaña, calles aledañas a Pl. San Ildefonso).",
  },

  // ===== Otros lugares recomendados (lista MADRID) =====
  {
    id: 18,
    day: "otros",
    order: 1,
    name: "Pacifico Smash Burger",
    category: "Restaurantes",
    coords: [40.40400, -3.67780],
    description: "Hamburguesa estilo smash en la zona de Pacífico. €10-20 · 4.1 ★ (797).",
  },
  {
    id: 19,
    day: "otros",
    order: 2,
    name: "Los 33 Restaurante",
    category: "Restaurantes",
    coords: [40.42550, -3.68550],
    description: "Parrilla argentina en barrio Salamanca. €30-80 · 4.2 ★ (2089).",
  },
  {
    id: 20,
    day: "otros",
    order: 3,
    name: "Zíngara · Restaurante Fusión Madrid",
    category: "Restaurantes",
    coords: [40.42250, -3.68450],
    description: "Restaurante de fusión con ambiente nocturno. €30-40 · 4.5 ★ (622).",
  },
  {
    id: 21,
    day: "otros",
    order: 4,
    name: "Casa Canito",
    category: "Restaurantes",
    coords: [40.42180, -3.68080],
    description: "Bar de tapas tradicional en Goya. €20-30 · 4.4 ★ (1966).",
  },
  {
    id: 22,
    day: "otros",
    order: 5,
    name: "LE CLAN",
    category: "Restaurantes",
    coords: [40.42530, -3.68900],
    description: "Parrilla cerca de Serrano. €10-20 · 4.6 ★ (119).",
  },
];

// =============================================
// Inicialización del mapa
// =============================================
const MADRID_CENTER = [40.4180, -3.7060];
const DEFAULT_ZOOM = 14;

const map = L.map("map", {
  center: MADRID_CENTER,
  zoom: DEFAULT_ZOOM,
  zoomControl: true,
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
  maxZoom: 20,
  subdomains: "abcd",
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors · © <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);

// =============================================
// Estado y helpers
// =============================================
const state = {
  filter: "all",
  day: "all",
  query: "",
  markers: new Map(), // id -> { marker, place }
};

function buildGoogleMapsUrl(place) {
  const [lat, lon] = place.coords;
  const query = encodeURIComponent(place.name);
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lon}&query_place_id=${query}`;
}

function buildPopupHtml(place) {
  const mapsUrl = buildGoogleMapsUrl(place);
  const dayLabel = place.day === "otros"
    ? `Otros lugares · #${place.order}`
    : `Día ${place.day} · Parada ${place.order}`;
  return `
    <div class="popup">
      <div class="popup__day">${dayLabel}</div>
      <div class="popup__title">${place.name}</div>
      <div class="popup__desc">${place.description}</div>
      <a class="popup__btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
        </svg>
        Abrir en Google Maps · Cómo llegar
      </a>
    </div>
  `;
}

function createCustomIcon(place) {
  const safeCategory = place.category.replace(/\s+/g, "");
  return L.divIcon({
    className: "",
    html: `<div class="custom-marker ${safeCategory}"><span>${place.order}</span></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28],
  });
}

// =============================================
// Crear marcadores
// =============================================
places.forEach((place) => {
  const marker = L.marker(place.coords, { icon: createCustomIcon(place) })
    .addTo(map)
    .bindPopup(buildPopupHtml(place), { closeButton: true, maxWidth: 280 });

  marker.on("click", () => highlightPlace(place.id));
  state.markers.set(place.id, { marker, place });
});

// =============================================
// Render del sidebar
// =============================================
const placesList = document.getElementById("placesList");

function renderPlacesList() {
  placesList.innerHTML = "";
  const q = state.query.trim().toLowerCase();
  const filtered = places.filter((p) => {
    const matchFilter = state.filter === "all" || p.category === state.filter;
    const matchDay = state.day === "all" || String(p.day) === state.day;
    const matchQuery = q === "" || p.name.toLowerCase().includes(q);
    return matchFilter && matchDay && matchQuery;
  });

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.className = "places-list__empty";
    li.textContent = q
      ? `Sin resultados para "${state.query}"`
      : "Sin lugares para los filtros actuales";
    placesList.appendChild(li);
    fitToFiltered(filtered);
    return;
  }

  // Agrupar por día
  const byDay = {};
  filtered.forEach((p) => {
    if (!byDay[p.day]) byDay[p.day] = [];
    byDay[p.day].push(p);
  });

  Object.keys(byDay)
    .sort()
    .forEach((day) => {
      const dayHeader = document.createElement("li");
      const headerLabel = day === "otros" ? "Otros lugares" : `Día ${day}`;
      dayHeader.innerHTML = `<div style="padding:0.75rem 1.25rem 0.4rem;font-size:0.7rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.05em;">${headerLabel}</div>`;
      placesList.appendChild(dayHeader);

      byDay[day]
        .sort((a, b) => a.order - b.order)
        .forEach((place) => {
          const li = document.createElement("li");
          li.className = "place-item";
          li.dataset.id = place.id;
          const safeCategory = place.category.replace(/\s+/g, "");
          li.innerHTML = `
            <div class="place-item__index">${place.order}</div>
            <div class="place-item__body">
              <div class="place-item__name">${place.name}</div>
              <div class="place-item__meta">
                <span class="tag ${safeCategory}">${place.category}</span>
              </div>
            </div>
          `;
          li.addEventListener("click", () => {
            focusPlace(place.id);
            // En móvil, cerrar el sidebar tras seleccionar
            if (window.innerWidth <= 768) {
              document.getElementById("sidebar").classList.remove("is-open");
            }
          });
          placesList.appendChild(li);
        });
    });

  // Ajustar vista a los marcadores filtrados
  fitToFiltered(filtered);
}

function focusPlace(id) {
  const entry = state.markers.get(id);
  if (!entry) return;
  map.flyTo(entry.place.coords, 16, { duration: 0.7 });
  entry.marker.openPopup();
  highlightPlace(id);
}

function highlightPlace(id) {
  document.querySelectorAll(".place-item").forEach((el) => {
    el.classList.toggle("is-active", Number(el.dataset.id) === id);
  });
  const active = document.querySelector(".place-item.is-active");
  if (active) active.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function fitToFiltered(filtered) {
  if (filtered.length === 0) return;
  // Ocultar marcadores no filtrados, mostrar los filtrados
  const visibleIds = new Set(filtered.map((p) => p.id));
  state.markers.forEach(({ marker, place }) => {
    if (visibleIds.has(place.id)) {
      if (!map.hasLayer(marker)) marker.addTo(map);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });

  if (filtered.length === 1) {
    map.flyTo(filtered[0].coords, 16, { duration: 0.6 });
  } else {
    const bounds = L.latLngBounds(filtered.map((p) => p.coords));
    map.flyToBounds(bounds, { padding: [50, 50], duration: 0.7 });
  }
}

// =============================================
// Filtros y pestañas de día
// =============================================
document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  state.filter = btn.dataset.filter;
  renderPlacesList();
});

document.getElementById("dayTabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".day-btn");
  if (!btn) return;
  document.querySelectorAll(".day-btn").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  state.day = btn.dataset.day;
  renderPlacesList();
});

// =============================================
// Buscador por nombre
// =============================================
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const searchWrap = document.querySelector(".sidebar__search");

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  searchWrap.classList.toggle("has-query", state.query.length > 0);
  renderPlacesList();
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  state.query = "";
  searchWrap.classList.remove("has-query");
  renderPlacesList();
  searchInput.focus();
});

// =============================================
// Toggle sidebar (móvil)
// =============================================
document.getElementById("sidebarToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("is-open");
});

// =============================================
// Render inicial
// =============================================
renderPlacesList();
