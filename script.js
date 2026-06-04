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
    coords: [40.42719105618915, -3.7045087356367],
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
    day: 2,
    order: 6,
    name: "Calle de Fuencarral",
    category: "Compras",
    coords: [40.43346041317356, -3.704367924006934],
    description: "Famosa calle peatonal repleta de tiendas de moda y de moda alternativa.",
  },
  {
    id: 4,
    day: 1,
    order: 3,
    name: "Nikita Nipone",
    category: "Compras",
    coords: [40.42509698332999, -3.702668962064208],
    description: "Tienda ideal para ver ropa y artículos vintage o curiosos por la zona de Malasaña.",
  },
  {
    id: 5,
    day: 1,
    order: 4,
    name: "Mercado de San Antón",
    category: "Restaurantes",
    coords: [40.42216566120614, -3.697736579826599],
    description: "Cruza hacia Chueca para tapear delicioso en sus diferentes puestos o subir a su terraza.",
  },
  {
    id: 6,
    day: 1,
    order: 5,
    name: "Bocadillos Oink Infantas",
    category: "Restaurantes",
    coords: [40.4208927171649, -3.6997648663514022],
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
    coords: [40.41679283126895, -3.703347549164849],
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
    coords: [40.41566211775997, -3.7074277221917944],
    description: "Admira la arquitectura barroca de esta majestuosa plaza y la estatua de Felipe III.",
  },
  {
    id: 11,
    day: 2,
    order: 5,
    name: "La Carbonería · Restaurante Plaza Mayor",
    category: "Restaurantes",
    coords: [40.41674882576155, -3.7071158798296566],
    description: "El broche de oro para cenar junto a la plaza (L-V desde las 19:00 h).",
  },

  // ===== DÍA 3: La Latina, Lavapiés y Madrid Río =====
  {
    id: 12,
    day: 3,
    order: 1,
    name: "Bar La Ideal",
    category: "Restaurantes",
    coords: [40.41513846194439, -3.7068312933184298],
    description: "Comienza junto a Plaza Mayor con un auténtico bocadillo de calamares antes de bajar a los barrios tradicionales.",
  },
  {
    id: 13,
    day: 3,
    order: 2,
    name: "Calle del Humilladero, 6",
    category: "Plazas y Calles",
    coords: [40.41124535860405, -3.710787908649034],
    description: "Epicentro del castizo barrio de La Latina: terraceo, balcones de forja y tapas tradicionales.",
  },
  {
    id: 14,
    day: 3,
    order: 3,
    name: "Calle de la Paloma, 6",
    category: "Plazas y Calles",
    coords: [40.408415734023826, -3.711828520316728],
    description: "Calle con encanto en La Latina, ambiente castizo y cercanía a la iglesia de la Virgen de la Paloma.",
  },
  {
    id: 15,
    day: "otros",
    order: 18,
    name: "Lavapiés",
    category: "Cultura",
    coords: [40.40903, -3.70094],
    description: "Barrio multicultural lleno de arte urbano, cafés con encanto y calles empinadas.",
  },
  {
    id: 16,
    day: 3,
    order: 4,
    name: "Puente de Segovia",
    category: "Cultura",
    coords: [40.414235367364405, -3.722825586629771],
    description: "Para terminar la tarde en Madrid Río: vistas espectaculares al Palacio Real y la Catedral de la Almudena al atardecer.",
  },

  // ===== Día 1 — Alojamiento =====
  {
    id: 17,
    day: 1,
    order: 6,
    name: "Bastardo Hostel",
    category: "Alojamiento",
    coords: [40.42537588976469, -3.700123777952472],
    description: "Hostel boutique en Malasaña (Calle de San Mateo 3). Calificación 4.2 ★. Buena base para los recorridos del día 1.",
  },
  {
    id: 23,
    day: 1,
    order: 7,
    name: "TOY PANDA",
    category: "Compras",
    coords: [40.425055125528445, -3.702623364510198],
    description: "⚠️ Cerrado permanentemente. Lo dejamos marcado para recorrer la zona (Malasaña, calles aledañas a Pl. San Ildefonso).",
  },

  // ===== Otros lugares recomendados (lista MADRID) =====
  {
    id: 18,
    day: "otros",
    order: 1,
    name: "Pacifico",
    category: "Restaurantes",
    coords: [40.42221521347408, -3.694269154974502],
    description: "Hamburguesa estilo smash. €10-20 · 4.1 ★ (797).",
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
    coords: [40.42393716411497, -3.6946821933143488],
    description: "Restaurante de fusión con ambiente nocturno. €30-40 · 4.5 ★ (622).",
  },
  {
    id: 21,
    day: "otros",
    order: 4,
    name: "Casa Canito",
    category: "Restaurantes",
    coords: [40.4220771000819, -3.690071449124489],
    description: "Bar de tapas tradicional en Goya. €20-30 · 4.4 ★ (1966).",
  },
  {
    id: 22,
    day: "otros",
    order: 5,
    name: "LE CLAN",
    category: "Restaurantes",
    coords: [40.426143690651415, -3.6938641491507886],
    description: "Parrilla cerca de Serrano. €10-20 · 4.6 ★ (119).",
  },

  // ===== Nuevos lugares (lista MADRID, coordenadas exactas) =====
  {
    id: 24,
    day: "otros",
    order: 6,
    name: "Urban Outfitters",
    category: "Compras",
    coords: [40.420862573985346, -3.7069771779111127],
    description: "Tienda de moda y lifestyle internacional, sucursal de Madrid centro.",
  },
  {
    id: 25,
    day: "otros",
    order: 7,
    name: "Casa del Libro",
    category: "Cultura",
    coords: [40.42003119993031, -3.70318477796659],
    description: "Librería emblemática en plena Gran Vía. Ideal para curiosear y tomar un café.",
  },
  {
    id: 26,
    day: "otros",
    order: 8,
    name: "Pasaje del Comercio",
    category: "Plazas y Calles",
    coords: [40.41916285429602, -3.7023513393188465],
    description: "Pasaje peatonal con encanto cerca de Sol y Gran Vía.",
  },
  {
    id: 27,
    day: "otros",
    order: 9,
    name: "New Balance",
    category: "Compras",
    coords: [40.42179001268358, -3.7012908470063315],
    description: "Flagship de la marca en el centro de Madrid.",
  },
  {
    id: 28,
    day: "otros",
    order: 10,
    name: "WOW Concept",
    category: "Compras",
    coords: [40.42005593989013, -3.6996989644561107],
    description: "Concept store multimarca: moda, diseño, gastronomía y arte bajo un mismo techo.",
  },
  {
    id: 29,
    day: "otros",
    order: 11,
    name: "El Castizo de Serrano",
    category: "Restaurantes",
    coords: [40.421136070490526, -3.688309808365003],
    description: "Restaurante de cocina tradicional madrileña en barrio Salamanca.",
  },
  {
    id: 30,
    day: "otros",
    order: 12,
    name: "Magasand Retiro",
    category: "Restaurantes",
    coords: [40.42240615976036, -3.6886584962550515],
    description: "Cafetería con sándwiches gourmet, ideal para almuerzo rápido cerca de Retiro.",
  },
  {
    id: 31,
    day: "otros",
    order: 13,
    name: "Edificio Lamarca",
    category: "Compras",
    coords: [40.42473426481814, -3.69566562213077],
    description: "Edificio comercial con tiendas de moda y deporte (Ropa Deportiva).",
  },
  {
    id: 32,
    day: "otros",
    order: 14,
    name: "WOW Concept Serrano",
    category: "Compras",
    coords: [40.42791042434478, -3.6870160626077446],
    description: "Sucursal de WOW Concept en la calle Serrano, corazón de Salamanca.",
  },
  {
    id: 33,
    day: "otros",
    order: 15,
    name: "Álex Cordobés | Velázquez",
    category: "Restaurantes",
    coords: [40.42812585571518, -3.683577533805992],
    description: "Restaurante en barrio Salamanca (zona Velázquez).",
  },
  {
    id: 34,
    day: "otros",
    order: 16,
    name: "Perfumerías Primor",
    category: "Compras",
    coords: [40.42518975328403, -3.6833146775810657],
    description: "Cadena de perfumería y cosmética con buenos precios.",
  },
  {
    id: 35,
    day: 2,
    order: 7,
    name: "Plaza de Olavide",
    category: "Plazas y Calles",
    coords: [40.43322834710105, -3.7012149933128438],
    description: "Plaza con muchas terrazas en barrio Chamberí, ambiente local.",
  },
  {
    id: 36,
    day: "otros",
    order: 17,
    name: "Museo del Prado",
    category: "Cultura",
    coords: [40.41387574051428, -3.692111006821329],
    description: "Pinacoteca imprescindible de Madrid. Velázquez, Goya, El Bosco. Entrada gratuita las últimas 2 horas (18:00-20:00 L-S).",
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
    const matchFilter =
      state.filter === "all" ||
      (state.filter === "Lugares" && p.category !== "Restaurantes") ||
      p.category === state.filter;
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
        .sort((a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }))
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
