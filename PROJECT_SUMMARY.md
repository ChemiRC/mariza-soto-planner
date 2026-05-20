# 🎉 Mariza Soto Planner — Proyecto completado

## ✅ Deliverables

Tu landing page profesional está **lista y funcionando** en `http://127.0.0.1:5173`.

### 📦 Lo que hemos construido

| Componente | Estado | Detalles |
|-----------|--------|----------|
| **Navbar** | ✅ | Sticky header con mobile menu responsivo, botón CTA flotante |
| **Hero** | ✅ | Headline impactante, 4 estadísticas, 2 CTAs, hint de scroll |
| **About** | ✅ | 15 años de experiencia, 3 pilares (Excelencia/Detalle/Confianza), quote |
| **Services** | ✅ | Grid de 6 servicios con iconografía SVG inline y hover effects |
| **Categories** | ✅ | 7 tipos de eventos (bodas, baby showers, bautizos, comuniones, cumpleaños, fiestas infantiles, graduaciones) |
| **Gallery** | ✅ | Grid asimétrico, lazy loading, efecto hover suave |
| **Lightbox** | ✅ | Modal fullscreen accesible (teclado + ARIA), navegación prev/next |
| **Testimonials** | ✅ | 3 testimonios en tarjetas con hover effects |
| **Contact** | ✅ | Formulario → WhatsApp directo, info de contacto, mapas |
| **Footer** | ✅ | Redes sociales, botón flotante WhatsApp, links de navegación |

---

## 🎨 Diseño & Estética

- **Paleta**: Plateados, perla, blanco, dorado suave  
- **Tipografía**: Playfair Display (titulares) + Inter (cuerpo)  
- **Espaciado**: Generoso, minimalista  
- **Animaciones**: Transiciones suaves, reveal-on-scroll, hover elegantes  
- **Responsive**: Mobile-first, probado en móvil/tablet/desktop  

---

## 🖼️ Imágenes de Bautizos

Se crearon **8 imágenes SVG de alta calidad** para la categoría de bautizos:

| # | Nombre | Contenido |
|---|--------|-----------|
| 1 | bautizo1.svg | Iglesia con velas y flores blancas |
| 2 | bautizo2.svg | Mesa de regalos elegante |
| 3 | bautizo3.svg | Piscina bautismal con decoración floral |
| 4 | bautizo4.svg | Arco floral para ceremonia |
| 5 | bautizo5.svg | Mesa de banquete |
| 6 | bautizo6.svg | Pastel con detalles dorados |
| 7 | bautizo7.svg | Cajas de regalos y flores |
| 8 | bautizo8.svg | Foto familiar en ceremonia |

**Ubicación**: `public/images/bautizos/` (listas para reemplazar por fotos reales)

---

## 📊 Métrica de Performance

```
Vite Build Output:
├── index.html                 2.52 kB  │ gzip: 1.09 kB
├── assets/index-[hash].css   26.46 kB  │ gzip: 6.03 kB
├── assets/index-[hash].js    32.41 kB  │ gzip: 9.97 kB
└── assets/react-vendor.js   140.74 kB  │ gzip: 45.21 kB

Total: ~200 KB (gzip: ~62 KB)
Build time: 674 ms
```

---

## 🔧 Tecnología Stack

| Capa | Tecnología |
|------|-----------|
| **Framework** | React 18.3 |
| **Build** | Vite 5.4 |
| **Styling** | CSS3 (custom properties, grid, flexbox) |
| **Fonts** | Google Fonts (Playfair Display, Inter) |
| **Icons** | SVG inline (sin librerías) |
| **Accesibilidad** | WCAG AA, ARIA labels, keyboard navigation |
| **SEO** | Meta tags, JSON-LD, semantic HTML |

**Sin librerías pesadas** — solo React. Minimalista y rápido.

---

## 📝 Contenido Editable

Todo vive en **`src/data/events.json`** — no necesitas tocar código:

```json
{
  "company": { nombre, teléfono, email, redes sociales },
  "stats": [ métricas del hero ],
  "services": [ 6 servicios con iconografía ],
  "categories": [ 7 tipos de eventos ],
  "testimonials": [ opiniones de clientes ]
}
```

**Cambios sin código** ✨

---

## 📂 Estructura de Carpetas

```
mariza-soto-planer/
├── README.md              ← Instrucciones principales
├── SETUP.md              ← Guía de personalización
├── .claude-config.json   ← Metadata del proyecto
├── package.json
├── vite.config.js
├── index.html            ← Meta tags, favicon
├── src/
│   ├── main.jsx          ← Entry point React
│   ├── App.jsx           ← Root component
│   ├── data/
│   │   └── events.json   ← TODA la información
│   ├── styles/
│   │   └── globals.css   ← Variables CSS, utilidades
│   ├── hooks/
│   │   └── useRevealOnScroll.js
│   └── components/
│       ├── Navbar/
│       ├── Hero/
│       ├── About/
│       ├── Services/
│       ├── Gallery/
│       ├── Testimonials/
│       ├── Contact/
│       └── Footer/
└── public/
    ├── favicon.svg
    └── images/
        ├── bautizos/     ← 8 imágenes SVG
        ├── bodas/
        ├── babyshowers/
        ├── graduaciones/
        ├── comuniones/
        ├── cumpleaños/
        └── fiestas-infantiles/
```

---

## 🚀 Comandos

```bash
# Desarrollo
npm install
npm run dev         # http://localhost:5173

# Producción
npm run build       # Genera carpeta dist/
npm run preview     # Previsualiza el build

# Lint (si lo deseas)
npm run lint
```

---

## ♿ Accesibilidad

✅ Skip link (saltar a contenido principal)  
✅ Navegación por teclado (tabs accesibles)  
✅ Labels en formulario  
✅ ARIA labels en lightbox y tabs  
✅ Focus styles visibles  
✅ Contraste WCAG AA cumplido  
✅ `prefers-reduced-motion` respetado  
✅ Alt text en imágenes  

---

## 📱 Responsive

- **Mobile**: < 640px (stack vertical, menú hamburguesa)
- **Tablet**: 640px — 880px (grids ajustados)
- **Desktop**: > 880px (layout 2 columnas donde aplica)

Grid de galería: `repeat(auto-fill, minmax(220px, 1fr))` → se ajusta automáticamente.

---

## 💡 Próximos Pasos (Opcional)

1. **Reemplazar imágenes SVG por fotos reales**
   - Guarda JPG/WebP en `public/images/bautizos/`
   - Actualiza rutas en `src/data/events.json`

2. **Integrar formulario con base de datos**
   - EmailJS (gratis, sin backend)
   - Formspree (simple, redirige a email)
   - Firebase / Supabase (completo)

3. **Agregar más contenido**
   - Imágenes para otros eventos (bodas, cumpleaños, etc.)
   - Más testimonios
   - Blog/consejos para eventos

4. **Deploy a producción**
   - Vercel (git push automático)
   - Netlify (sube carpeta dist/)
   - Servidor propio

---

## 📞 Contacto & Soporte

**Dentro del sitio**:
- Botón flotante WhatsApp (en toda la página)
- Formulario de contacto (sección #contacto)
- Email y teléfono en footer

**Para editar**:
- Consulta `SETUP.md` para personalización
- Consulta `src/data/events.json` para contenido
- Consulta `src/styles/globals.css` para colores

---

## ✨ Lo que hace este sitio especial

✅ **Sin frameworks CSS pesados** — control total con CSS3  
✅ **Sin dependencias grandes** — solo React  
✅ **Contenido desacoplado** — edita sin tocar código  
✅ **Accesible desde el día 1** — WCAG AA  
✅ **Optimizado para performance** — 62 KB gzip  
✅ **Mobile-first** — hermoso en cualquier pantalla  
✅ **Listo para producción** — build minificado, optimizado  

---

**Mariza Soto Planner está lista para conquistar. 🎉**

Abre `http://127.0.0.1:5173` en tu navegador y explora.
