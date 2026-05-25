/**
 * Manifest dinámico de galería.
 * Mapea cada categoría a sus assets reales en /public/images/.
 *
 * Para agregar nuevas fotos:
 *   1. Súbelas a public/images/{categoria}/
 *   2. Añade el nombre del archivo al array correspondiente
 *
 * Los nombres con espacios se codifican automáticamente.
 */

const enc = (str) => str.replace(/ /g, '%20');

const make = (folder, filename, alt) => ({
  type: 'image',
  src: enc(`/images/${folder}/${filename}`),
  alt,
});

const video = (folder, filename, poster, alt) => ({
  type: 'video',
  src: enc(`/images/${folder}/${filename}`),
  poster: poster ? enc(`/images/${folder}/${poster}`) : undefined,
  alt,
});

// ============================================================
//  BODAS
// ============================================================
const bodas = [
  'WhatsApp Image 2026-05-24 at 11.33.32 AM.jpeg',
  'WhatsApp Image 2026-05-24 at 11.33.32 AM2.jpeg',
  'WhatsApp Image 2026-05-24 at 11.33.32 AM3.jpeg',
  'WhatsApp Image 2026-05-24 at 11.38.28 AM4.jpeg',
  'WhatsApp Image 2026-05-24 at 11.38.29 AM5.jpeg',
  'WhatsApp Image 2026-05-24 at 11.38.29 AM6.jpeg',
  'WhatsApp Image 2026-05-24 at 11.38.29 AM7.jpeg',
  'WhatsApp Image 2026-05-24 at 11.38.29 AM8.jpeg',
  'WhatsApp Image 2026-05-24 at 11.38.29 AM9.jpeg',
  'WhatsApp Image 2026-05-24 at 11.38.29 AM10.jpeg',
  'WhatsApp Image 2026-05-24 at 11.55.59 AM11.jpeg',
].map((file, i) => make('bodas', file, `Boda diseñada por Mariza Soto Planner — montaje ${i + 1}`));

// ============================================================
//  BABY SHOWERS
// ============================================================
const babyshowers = [
  'WhatsApp Image 2026-05-24 at 11.56.57 AM.jpeg',
  'WhatsApp Image 2026-05-24 at 11.56.57 AM (1).jpeg',
  'WhatsApp Image 2026-05-24 at 11.56.57 AM (2).jpeg',
  'WhatsApp Image 2026-05-24 at 11.56.57 AM (3).jpeg',
  'WhatsApp Image 2026-05-24 at 11.57.42 AM.jpeg',
  'WhatsApp Image 2026-05-24 at 11.57.42 AM (1).jpeg',
  'WhatsApp Image 2026-05-24 at 11.57.42 AM (2).jpeg',
  'WhatsApp Image 2026-05-24 at 11.57.42 AM (3).jpeg',
  'WhatsApp Image 2026-05-24 at 11.57.42 AM (4).jpeg',
  'WhatsApp Image 2026-05-24 at 11.57.42 AM (5).jpeg',
  'WhatsApp Image 2026-05-24 at 11.57.42 AM (6).jpeg',
].map((file, i) => make('babyshowers', file, `Baby shower con decoración pastel — detalle ${i + 1}`));

babyshowers.push(
  video(
    'babyshowers',
    'WhatsApp Video 2026-05-24 at 11.57.42 AM.mp4',
    null,
    'Video de baby shower diseñado por Mariza Soto Planner'
  )
);

// ============================================================
//  BAUTIZOS
// ============================================================
const bautizosLegacy = [
  ['bautizo2.jpeg', 'Mesa de regalos elegante para bautizo'],
  ['bautizo3.jpeg', 'Piscina bautismal decorada con flores blancas'],
  ['bautizo5.jpeg', 'Mesa de banquete para celebración de bautizo'],
  ['bautizo6.jpeg', 'Pastel decorado para bautizo con detalles dorados'],
  ['bautizo7.jpeg', 'Cajas de regalos y flores para bautizo'],
  ['bautizo8.jpeg', 'Foto familiar en ceremonia de bautizo'],
].map(([file, alt]) => make('bautizos', file, alt));

const bautizosNuevos = [
  'WhatsApp Image 2026-05-24 at 10.56.11 AM (2).jpeg',
  'WhatsApp Image 2026-05-24 at 10.56.11 AM (4).jpeg',
  'WhatsApp Image 2026-05-24 at 10.57.04 AM (1).jpeg',
  'WhatsApp Image 2026-05-24 at 10.57.04 AM (2).jpeg',
  'WhatsApp Image 2026-05-24 at 10.57.04 AM (3).jpeg',
  'WhatsApp Image 2026-05-24 at 10.57.04 AM (4).jpeg',
  'WhatsApp Image 2026-05-24 at 10.57.04 AM (5).jpeg',
  'WhatsApp Image 2026-05-24 at 10.58.30 AM.jpeg',
  'WhatsApp Image 2026-05-24 at 10.58.30 AM (1).jpeg',
  'WhatsApp Image 2026-05-24 at 10.58.30 AM (2).jpeg',
  'WhatsApp Image 2026-05-24 at 10.58.30 AM (3).jpeg',
  'WhatsApp Image 2026-05-24 at 10.58.30 AM (4).jpeg',
  'WhatsApp Image 2026-05-24 at 10.58.30 AM (5).jpeg',
  'WhatsApp Image 2026-05-24 at 10.58.30 AM (6).jpeg',
  'WhatsApp Image 2026-05-24 at 10.58.30 AM (7).jpeg',
  'WhatsApp Image 2026-05-24 at 10.58.30 AM (8).jpeg',
].map((file, i) => make('bautizos', file, `Bautizo decorado por Mariza Soto Planner — momento ${i + 1}`));

const bautizos = [...bautizosNuevos, ...bautizosLegacy];

// ============================================================
//  FIESTAS INFANTILES
// ============================================================
const fiestasInfantiles = [
  'WhatsApp Image 2026-05-24 at 10.24.42 AM.jpeg',
  'WhatsApp Image 2026-05-24 at 10.24.42 AM (1).jpeg',
  'WhatsApp Image 2026-05-24 at 10.24.42 AM (2).jpeg',
  'WhatsApp Image 2026-05-24 at 10.24.42 AM (3).jpeg',
  'WhatsApp Image 2026-05-24 at 10.24.42 AM (4).jpeg',
  'WhatsApp Image 2026-05-24 at 11.09.46 AM.jpeg',
  'WhatsApp Image 2026-05-24 at 11.09.46 AM (1).jpeg',
  'WhatsApp Image 2026-05-24 at 11.09.46 AM (2).jpeg',
  'WhatsApp Image 2026-05-24 at 11.09.46 AM (3).jpeg',
  'WhatsApp Image 2026-05-24 at 11.09.46 AM (4).jpeg',
  'WhatsApp Image 2026-05-24 at 11.11.00 AM.jpeg',
  'WhatsApp Image 2026-05-24 at 11.11.00 AM (1).jpeg',
  'WhatsApp Image 2026-05-24 at 11.11.01 AM (1).jpeg',
  'WhatsApp Image 2026-05-24 at 11.11.01 AM (2).jpeg',
  'WhatsApp Image 2026-05-24 at 11.11.01 AM (3).jpeg',
].map((file, i) => make('fiestas-infantiles', file, `Fiesta infantil temática diseñada por Mariza Soto Planner — ${i + 1}`));

// ============================================================
//  CATEGORÍAS SIN ASSETS (placeholders vacíos por ahora)
// ============================================================
export const galleries = {
  bodas,
  'baby-showers': babyshowers,
  bautizos,
  'fiestas-infantiles': fiestasInfantiles,
  'primeras-comuniones': [],
  cumpleanos: [],
  graduaciones: [],
};

/**
 * Cover (imagen de portada) de cada categoría — usada en los cards.
 */
export const covers = {
  bodas: bodas[0]?.src,
  'baby-showers': babyshowers[0]?.src,
  bautizos: bautizos[0]?.src,
  'fiestas-infantiles': fiestasInfantiles[0]?.src,
  'primeras-comuniones': null,
  cumpleanos: null,
  graduaciones: null,
};

/**
 * Selección de fotos destacadas (mix de las mejores) para la sección Featured.
 * Mezclamos fotos de las categorías con más material.
 */
export const featured = [
  bodas[0],
  bautizos[0],
  babyshowers[0],
  fiestasInfantiles[0],
  bodas[3],
  bautizos[2],
  babyshowers[3],
  fiestasInfantiles[5],
  bodas[6],
  bautizos[7],
  babyshowers[6],
  fiestasInfantiles[10],
].filter(Boolean);
