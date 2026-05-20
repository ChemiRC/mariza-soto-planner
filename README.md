# Mariza Soto Planner — Landing page

Sitio web profesional (catálogo + portafolio) para **Mariza Soto Planner**, organizadora
de eventos con 15 años de experiencia en Guadalajara y disponibilidad para toda la República.

Construido con **React 18 + Vite** y CSS puro (sin frameworks pesados) para mantener
el bundle ligero y la estética minimalista y elegante en tonos plata, perla y dorado suave.

---

## ✨ Características

- **Hero / Sobre nosotros** con headline editorial, estadísticas y CTAs.
- **Servicios** en grid con tarjetas e iconografía SVG inline.
- **Catálogo de eventos** con 7 categorías (Bodas, Baby Showers, Bautizos,
  Primeras Comuniones, Cumpleaños, Fiestas Infantiles, Graduaciones).
- **Galería responsiva** con grid asimétrico, lazy loading y reveal on scroll.
- **Lightbox accesible** (teclado + ARIA) para fotos y videos.
- **Testimonios** y **formulario de contacto** que se envía directo a WhatsApp.
- **Footer** con accesos a redes sociales, info de contacto y botón flotante de WhatsApp.
- SEO básico (meta tags, Open Graph, JSON-LD `LocalBusiness`).
- Accesibilidad: navegación por teclado, foco visible, `prefers-reduced-motion`,
  skip link, etiquetas ARIA en tabs/lightbox.

---

## 🚀 Cómo correr el proyecto

```bash
# 1. Instala dependencias
npm install

# 2. Levanta el servidor de desarrollo
npm run dev
# Abre automáticamente http://localhost:5173

# 3. Build de producción
npm run build

# 4. Previsualizar el build
npm run preview
```

**✨ Nota:** La galería de **bautizos** ya contiene 8 imágenes JPEG reales y optimizadas (1.2 MB total).

---

## 🗂️ Estructura

```
mariza-soto-planer/
├── index.html              ← meta tags + fuentes Google
├── package.json
├── vite.config.js          ← code-splitting y minify
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── events.json     ← 🔑 todo el contenido editable
    ├── hooks/
    │   └── useRevealOnScroll.js
    ├── styles/
    │   └── globals.css     ← paleta, tipografía, utilidades
    └── components/
        ├── Navbar/
        ├── Hero/
        ├── About/
        ├── Services/
        ├── Gallery/        ← Categories + GalleryItem + Lightbox
        ├── Testimonials/
        ├── Contact/
        └── Footer/
```

---

## 📝 Editar contenido sin tocar código

Todo el contenido vive en [src/data/events.json](src/data/events.json):

- `company` — nombre, teléfono, email, redes, WhatsApp.
- `stats` — métricas mostradas en el hero.
- `services` — tarjetas en la sección Servicios (clave `icon` admite:
  `chair`, `sparkles`, `utensils`, `candy`, `cheese`, `clipboard`).
- `categories[]` — cada categoría incluye:
  - `id`, `name`, `description`
  - `services[]` — chips de servicios incluidos en esa categoría
  - `gallery[]` — array de items `{ type, src, alt, poster }`
    - `type`: `"image"` o `"video"`
    - `poster` solo aplica a videos (thumbnail antes de reproducir)
- `testimonials[]` — testimonios mostrados como tarjetas.

**Agregar una nueva foto:** simplemente añade un objeto al array `gallery`
de la categoría correspondiente. No es necesario tocar el código React.

**Recomendación de assets:**

- Imágenes: 1200–1600 px de ancho, formato `webp` o `jpg` optimizado.
- Videos: `mp4` H.264 + un `poster` `jpg/webp` para la preview.
- Subirlas a `public/gallery/` y referenciarlas como `/gallery/archivo.jpg`,
  o usar una URL externa (Cloudinary, etc.) directamente.

---

## 🎨 Paleta

| Token                | Color   | Uso                     |
| -------------------- | ------- | ----------------------- |
| `--color-bg`         | #FBFBFC | Fondo principal         |
| `--color-pearl`      | #ECECEF | Acentos suaves          |
| `--color-silver-300` | #B8B8BD | Bordes, iconos          |
| `--color-ink`        | #2B2B2E | Texto, botón primario   |
| `--color-gold`       | #C9A96A | Acento dorado, líneas   |
| `--color-gold-pale`  | #ECE1C8 | Backgrounds suaves      |

Tipografías: **Playfair Display** (titulares + cursivas editoriales) e **Inter** (cuerpo).

---

## ✅ Pendientes / próximos pasos sugeridos

- Reemplazar imágenes de Unsplash por fotos reales del portafolio.
- Conectar el formulario a un backend (EmailJS / Formspree / API propia) si
  se quiere recibir copia por correo además del envío a WhatsApp.
- Añadir `sitemap.xml` y `robots.txt` para SEO.
- Comprimir y servir imágenes locales en formato AVIF/WebP responsive.

---

Hecho con cariño para Mariza Soto Planner.
