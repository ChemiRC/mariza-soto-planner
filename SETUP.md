# Setup & Personalización — Mariza Soto Planner

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev
# Abre http://localhost:5173 automáticamente

# 3. Build para producción
npm run build

# 4. Previsualizar el build
npm run preview
```

---

## 📝 Editar contenido (sin tocar código)

Toda la información vive en **[src/data/events.json](src/data/events.json)**:

### Información de contacto
```json
"company": {
  "name": "Mariza Soto Planner",
  "phone": "+52 33 0000 0000",  // Tu teléfono
  "whatsapp": "523300000000",    // Tu número WhatsApp (sin +)
  "email": "contacto@...",
  "instagram": "https://instagram.com/...",
  "facebook": "https://facebook.com/...",
  "tiktok": "https://tiktok.com/..."
}
```

### Estadísticas del hero
```json
"stats": [
  { "number": "15+", "label": "Años de experiencia" },
  { "number": "850+", "label": "Eventos realizados" }
]
```

### Servicios
```json
"services": [
  {
    "id": "mobiliario",
    "title": "Mobiliario",
    "description": "Mesas, sillas, lounges...",
    "icon": "chair"  // Opciones: chair, sparkles, utensils, candy, cheese, clipboard
  }
]
```

### Categorías de eventos y galerías
```json
"categories": [
  {
    "id": "bautizos",
    "name": "Bautizos",
    "description": "Descripción del evento...",
    "services": ["Mobiliario", "Decoración", ...],
    "gallery": [
      {
        "type": "image",          // o "video"
        "src": "/images/bautizos/bautizo1.svg",
        "alt": "Descripción para accesibilidad",
        "poster": "..." // Solo si type="video" (thumbnail)
      }
    ]
  }
]
```

### Testimonios
```json
"testimonials": [
  {
    "name": "Andrea & Carlos",
    "event": "Boda — Chapala, Jalisco",
    "quote": "Mariza convirtió cada idea en realidad..."
  }
]
```

---

## 🖼️ Actualizar imágenes

### Estructura de carpetas
```
public/images/
├── bodas/
├── bautizos/            ← Actualmente con 8 imágenes SVG
├── babyshowers/
├── graduaciones/
├── comuniones/
├── cumpleaños/
└── fiestas-infantiles/
```

### Opción 1: Reemplazar SVG por fotos reales

1. **Guarda tus imágenes** en la carpeta correspondiente:
   ```
   public/images/bautizos/bautizo1.jpg
   public/images/bautizos/bautizo2.jpg
   ... hasta bautizo8.jpg
   ```

2. **Actualiza `events.json`** para apuntar a las nuevas imágenes:
   ```json
   "src": "/images/bautizos/bautizo1.jpg"  // cambia .svg por .jpg
   ```

3. **Recomendaciones de tamaño**:
   - Ancho: 1200–1600 px
   - Formato: JPG/WebP optimizado (50–200 KB)
   - Aspect ratio: 1.5:1 (1200x800) funciona mejor en el grid

### Opción 2: Usar URLs externas (Cloudinary, ImgBB, etc.)

Si hostas imágenes en la nube, simplemente actualiza `src` en `events.json`:

```json
"src": "https://res.cloudinary.com/tu-cuenta/image/upload/v123/bautizo1.jpg"
```

### Opción 3: Agregar videos

Para videos (YouTube, Vimeo, etc.), usa `type: "video"`:

```json
{
  "type": "video",
  "src": "https://www.youtube.com/embed/video-id",  // URL embed
  "poster": "/images/bautizos/bautizo-thumbnail.jpg",
  "alt": "Video del bautizo"
}
```

O si es un archivo local `mp4`:

```json
{
  "type": "video",
  "src": "/videos/bautizo.mp4",
  "poster": "/images/bautizos/bautizo-thumbnail.jpg",
  "alt": "Video del bautizo"
}
```

---

## 🎨 Personalizar colores

Abre **[src/styles/globals.css](src/styles/globals.css)** y edita las variables en `:root`:

```css
:root {
  --color-gold: #c9a96a;        /* Dorado suave → tu color */
  --color-silver-300: #b8b8bd;  /* Gris plata → tu color */
  --color-ink: #2b2b2e;         /* Texto oscuro → tu color */
  --color-pearl: #ececef;       /* Perla → tu color */
  /* ... más variables */
}
```

Todos los componentes usan estas variables, así que un cambio aquí afecta todo el sitio.

---

## 📊 SEO & Meta tags

En **[index.html](index.html)**:

- `<title>`: Título en pestaña del navegador
- `<meta name="description">`: Resumen para Google
- `<meta property="og:...">`: Cómo se ve al compartir en redes
- `<script type="application/ld+json">`: Datos estructurados (LocalBusiness)

Actualiza estos valores con tu información real para mejor SEO.

---

## 🔗 Conexión del formulario de contacto

Actualmente, el formulario de contacto **envía directamente a WhatsApp** sin necesidad de backend.

Para recibir también un correo, integra uno de estos:

### EmailJS (recomendado — gratis, sin backend)
1. Regístrate en [emailjs.com](https://www.emailjs.com)
2. Crea un servicio de correo (Gmail, Outlook, etc.)
3. En **[Contact.jsx](src/components/Contact/Contact.jsx)**, en el `handleSubmit`:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send('service_id', 'template_id', {
    from_name: form.name,
    from_email: form.email,
    event_type: form.eventType,
    message: form.message,
  }, 'public_key').then(() => {
    // Éxito — mostrar mensaje y enviar a WhatsApp también
  });
};
```

### Formspree (alternativa rápida)
1. En **Contact.jsx**, cambia el `<form>` a:
```jsx
<form action="https://formspree.io/f/your-form-id" method="POST">
  {/* inputs */}
</form>
```

---

## 🚀 Deploy

### Vercel (recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta `dist/` a Netlify
```

### GitHub Pages
Añade a `vite.config.js`:
```javascript
export default defineConfig({
  base: '/mariza-soto-planer/'  // si es repo secundario
});
```

---

## 📱 Performance

- **Bundle actual**: ~42 KB JS + 26 KB CSS (gzip)
- **Imágenes**: Usa lazy loading automático en la galería
- **Fonts**: Google Fonts (Playfair Display + Inter) — considera self-host si buscas máxima velocidad

---

## ✨ Próximas mejoras sugeridas

- [ ] Conexión de formulario a base de datos (Firebase, Supabase)
- [ ] Chatbot de WhatsApp integrado
- [ ] Galería dinámica (subir fotos desde admin panel)
- [ ] Versión en inglés (i18n)
- [ ] Modo oscuro toggle
- [ ] Blog / Consejos para eventos

---

**¿Preguntas?** Revisa el README.md o contacta al equipo de desarrollo.
