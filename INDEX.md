# 📚 Índice de Documentación — Mariza Soto Planner

## 🚀 Comienza aquí

| Documento | Para quién | Tiempo |
|-----------|-----------|--------|
| [QUICK_START.md](QUICK_START.md) | **Todos** — Quiero empezar ya | 3 min |
| [VER_CAMBIOS.md](VER_CAMBIOS.md) | **Tú** — Quiero ver las imágenes nuevas | 5 min |
| [STATUS.md](STATUS.md) | **Gestores** — Quiero el estado actual | 5 min |

---

## 📖 Guías por tema

### 🎨 Personalización
- [SETUP.md](SETUP.md) — Cambiar colores, contenido, contacto, imágenes
- [README.md](README.md) — Descripción general y características

### 📸 Imágenes
- [IMAGES_UPDATED.md](IMAGES_UPDATED.md) — Qué cambió en bautizos
- [CAMBIOS_REALIZADOS.md](CAMBIOS_REALIZADOS.md) — Resumen de cambios

### 🔧 Técnico
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) — Arquitectura, stack, estructura
- [.claude-config.json](.claude-config.json) — Metadata del proyecto

---

## 🎯 Casos de uso

### "Quiero ver el sitio funcionando"
1. Lee: [QUICK_START.md](QUICK_START.md)
2. Ejecuta: `npm install && npm run dev`
3. Abre: http://127.0.0.1:5173

### "Quiero ver las nuevas imágenes de bautizos"
1. Lee: [VER_CAMBIOS.md](VER_CAMBIOS.md)
2. Abre: http://127.0.0.1:5173/#eventos
3. Haz clic en "Bautizos"

### "Quiero cambiar teléfono/email/colores"
1. Lee: [SETUP.md](SETUP.md)
2. Edita: `src/data/events.json` (contacto)
3. Edita: `src/styles/globals.css` (colores)

### "Quiero agregar imágenes a otros eventos"
1. Lee: [IMAGES_UPDATED.md](IMAGES_UPDATED.md) (sección "Próximas categorías")
2. Copia fotos a `public/images/bodas/`, etc.
3. Actualiza `src/data/events.json`

### "Quiero entender la estructura técnica"
1. Lee: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
2. Lee: [.claude-config.json](.claude-config.json)

---

## 📊 Estado actual

✅ **Sitio web:** Completamente funcional  
✅ **Galería bautizos:** 8 imágenes JPEG reales (1.2 MB)  
✅ **Servidor:** Activo en http://127.0.0.1:5173  
✅ **Documentación:** Completa (8 guías)  
✅ **Performance:** Optimizado (~62 KB gzip)  

---

## 🔗 Archivos clave del proyecto

```
mariza-soto-planer/
├── 📖 Documentación/
│   ├── INDEX.md                    ← Estás aquí
│   ├── QUICK_START.md              ← 3 min setup
│   ├── README.md                   ← Descripción general
│   ├── SETUP.md                    ← Guía de edición
│   ├── STATUS.md                   ← Estado actual
│   ├── VER_CAMBIOS.md              ← Cómo ver cambios
│   ├── IMAGES_UPDATED.md           ← Info de imágenes
│   └── CAMBIOS_REALIZADOS.md       ← Lo que cambió
│
├── 🎨 Código/
│   ├── src/
│   │   ├── data/events.json        ← TODO el contenido
│   │   ├── styles/globals.css      ← Colores y tipografía
│   │   └── components/             ← Componentes React
│   │
│   ├── public/
│   │   └── images/
│   │       └── bautizos/           ← 8 JPEG reales ✨
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── ⚙️ Config/
    ├── .claude-config.json         ← Metadata
    ├── .gitignore
    └── optimize-images.py          ← Utilidad
```

---

## 💬 Preguntas frecuentes

### "¿Cómo cambio el teléfono?"
→ Ve a `src/data/events.json` y busca `"company"` → `"phone"`

### "¿Cómo agrego más imágenes?"
→ Copia fotos a `public/images/categoría/` y actualiza `events.json`

### "¿Cómo cambio los colores?"
→ Edita `:root` en `src/styles/globals.css`

### "¿Cómo deploy?"
→ Lee "Deploy a producción" en [SETUP.md](SETUP.md)

### "¿Dónde está el servidor?"
→ http://127.0.0.1:5173 (mientras tengas `npm run dev` activo)

### "¿Las imágenes son demasiado grandes?"
→ Usa TinyPNG o ImageOptim (ver [IMAGES_UPDATED.md](IMAGES_UPDATED.md))

---

## 📞 Contacto dentro del sitio

- **WhatsApp flotante:** En toda la página (abajo derecha)
- **Formulario contacto:** Sección "Contacto" → envía a WhatsApp
- **Email:** En footer
- **Redes sociales:** En footer (Instagram, Facebook, TikTok)

---

## 🎓 Recursos externos

- [React docs](https://react.dev)
- [Vite docs](https://vitejs.dev)
- [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web accessibility](https://www.w3.org/WAI/)

---

## ✨ Tecnología usada

- React 18 — Framework
- Vite 5 — Build tool
- CSS3 — Estilos (sin frameworks)
- JavaScript ES2020+ — Lógica
- Google Fonts — Tipografía

**Sin librerías pesadas.** Solo lo esencial, optimizado para performance.

---

## 🎉 ¡Listo para usar!

1. **Abre** http://127.0.0.1:5173
2. **Explora** la galería de bautizos
3. **Personaliza** según necesites (SETUP.md)
4. **Deploy** cuando esté listo (SETUP.md)

**Enjoy!** 🚀
