# ⚡ Quick Start — 3 minutos para estar online

## 1️⃣ Instalar y correr

```bash
cd c:\Users\Acer\Documents\ProyectosWeb\mariza-soto-planer

npm install
npm run dev
```

Abre en navegador: **http://localhost:5173**

---

## 2️⃣ Editar información (sin código)

Abre: **`src/data/events.json`**

### Cambiar teléfono y WhatsApp
```json
"company": {
  "phone": "+52 33 TU-TELÉFONO",
  "whatsapp": "52TU-TELEFONNO-SIN-+",
  "email": "tu-email@ejemplo.com"
}
```

### Cambiar nombres de eventos
```json
"categories": [
  {
    "name": "Mi Evento Personalizado",
    "description": "Descripción corta..."
  }
]
```

### Agregar imágenes reales
1. Guarda tus fotos en `public/images/bautizos/`
2. Actualiza `events.json`:
```json
"gallery": [
  {
    "type": "image",
    "src": "/images/bautizos/mi-foto.jpg",
    "alt": "Descripción de la foto"
  }
]
```

---

## 3️⃣ Cambiar colores

Abre: **`src/styles/globals.css`** (líneas 1–20)

```css
:root {
  --color-gold: #c9a96a;      /* Tu color dorado */
  --color-silver-300: #b8b8bd; /* Tu color plateado */
  --color-ink: #2b2b2e;        /* Tu color de texto */
}
```

Guarda. El sitio se actualiza automáticamente.

---

## 4️⃣ Deploy (cuando esté listo)

### Vercel (más fácil)
```bash
npm run build
npm install -g vercel
vercel
# Sigue las instrucciones
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist/' a https://netlify.com
```

---

## 📂 Archivos clave

| Archivo | Para qué |
|---------|----------|
| `src/data/events.json` | **TODO el contenido** (teléfono, eventos, fotos) |
| `src/styles/globals.css` | **Colores y tipografía** |
| `public/images/` | **Tus fotos y videos** |
| `index.html` | Meta tags para SEO |

---

## 🆘 Problemas comunes

### "El servidor no abre"
```bash
# Asegúrate de estar en la carpeta correcta
cd c:\Users\Acer\Documents\ProyectosWeb\mariza-soto-planer

# Mata procesos en puerto 5173
lsof -ti :5173 | xargs kill -9

# Intenta de nuevo
npm run dev
```

### "Las imágenes no aparecen"
- Verifica que el archivo esté en `public/images/bautizos/`
- En `events.json`, la ruta empieza con `/images/...`
- No uses `./images` ni `images/` sin el slash inicial

### "Los colores no cambian"
- Asegúrate de cambiar en `globals.css` (líneas 1–20)
- Recarga el navegador con `Ctrl+Shift+R` (hard refresh)

---

## 📚 Documentación completa

Dentro del proyecto:
- **README.md** — Descripción general
- **SETUP.md** — Guía de personalización detallada
- **PROJECT_SUMMARY.md** — Resumen técnico
- **.claude-config.json** — Metadata del proyecto

---

**¿Listo? Abre http://localhost:5173 y empieza a personalizar.**
