# 👀 Cómo Ver los Cambios

## 🔄 El servidor está corriendo

El sitio web está activo en:

```
http://127.0.0.1:5173
```

---

## 📍 Dónde ver las imágenes nuevas

### Opción 1: Navegar por el sitio (recomendado)

1. **Abre el navegador**
   ```
   http://127.0.0.1:5173
   ```

2. **Desplázate hasta la sección "Eventos"**
   - O haz clic en "Eventos" en el navbar superior

3. **Verás 7 pestañas de eventos:**
   ```
   [Bodas] [Baby Showers] [Bautizos] [Comuniones] [Cumpleaños] [Fiestas] [Graduaciones]
   ```

4. **Haz clic en "Bautizos"**
   - Se abrirá la galería con las 8 nuevas imágenes JPEG

5. **Verás:**
   - 8 imágenes en un grid responsivo
   - Efecto hover suave (zoom ligero)
   - Icono de zoom al pasar el mouse
   - Click para ampliar en lightbox fullscreen

### Opción 2: Enlace directo

Si el servidor está corriendo, abre:
```
http://127.0.0.1:5173/#eventos
```

Luego haz clic en "Bautizos".

---

## 🖼️ Qué verás

### Grid de galería

```
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│         │ │         │ │         │ │         │
│ Bautizo │ │ Bautizo │ │ Bautizo │ │ Bautizo │
│    1    │ │    2    │ │    3    │ │    4    │
│ 94.8 KB │ │121.6 KB │ │116.6 KB │ │119.4 KB │
└─────────┘ └─────────┘ └─────────┘ └─────────┘

┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│         │ │         │ │         │ │         │
│ Bautizo │ │ Bautizo │ │ Bautizo │ │ Bautizo │
│    5    │ │    6    │ │    7    │ │    8    │
│139.8 KB │ │256.9 KB │ │226.3 KB │ │202.2 KB │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
```

**Cada imagen:**
- ✨ Se carga con efecto suave (lazy loading)
- 🔍 Zoom al pasar el mouse
- 🖱️ Click para ver en pantalla completa (lightbox)
- ⌨️ Navega con ← → en el lightbox
- ✕ Cierra con ESC

---

## 🔄 Forzar recarga (si las imágenes no aparecen)

Si ves las imágenes antiguas (SVG), fuerza una recarga:

### Windows / Linux
```
Ctrl + Shift + R
```

### Mac
```
Cmd + Shift + R
```

O en el navegador:
1. Presiona `F12` (abre Developer Tools)
2. Haz clic derecho en el botón de recarga
3. Selecciona "Vaciar caché y descargar duro"
4. Recarga la página

---

## 📱 Responsive

Las imágenes se adaptan automáticamente:

- **Mobile (< 640px):** Grid de 2 columnas
- **Tablet (640-880px):** Grid de 3 columnas
- **Desktop (> 880px):** Grid de 4 columnas

Prueba redimensionando el navegador.

---

## 🎬 Características de la galería

### 1. Lazy loading
- Las imágenes se cargan solo cuando entran en el viewport
- Optimiza performance y bandwidth

### 2. Lightbox accesible
```
Navegación:
  ← Anterior      → Siguiente
  ESC Cerrar      Click afuera Cerrar
```

### 3. Alt text
Cada imagen tiene texto descriptivo para accesibilidad.

### 4. Performance
Total: **1.2 MB** en 8 imágenes
Promedio: **150 KB/imagen**
→ Carga rápida en cualquier conexión

---

## 🔧 Técnicamente qué pasó

### Cambios en el código

1. **JSON actualizado:**
   ```json
   // Antes:
   "src": "/images/bautizos/bautizo1.svg"

   // Ahora:
   "src": "/images/bautizos/bautizo1.jpeg"
   ```

2. **Archivos reemplazados:**
   ```
   public/images/bautizos/
   ├── bautizo1.jpeg  ← Real
   ├── bautizo2.jpeg  ← Real
   ├── bautizo3.jpeg  ← Real
   ├── bautizo4.jpeg  ← Real
   ├── bautizo5.jpeg  ← Real
   ├── bautizo6.jpeg  ← Real
   ├── bautizo7.jpeg  ← Real
   └── bautizo8.jpeg  ← Real
   ```

3. **Sin cambios en React:**
   - El componente de galería funciona igual
   - Soporta automáticamente JPEG, JPG, PNG, SVG
   - La optimización es automática (lazy loading, etc.)

---

## ✅ Checklist visual

- [ ] Abre http://127.0.0.1:5173
- [ ] Navega a sección "Eventos"
- [ ] Haz clic en pestaña "Bautizos"
- [ ] Ves 8 imágenes reales (JPEG)
- [ ] Hover muestra efecto zoom
- [ ] Click abre lightbox fullscreen
- [ ] Teclas ← → navegan en lightbox
- [ ] ESC cierra el lightbox
- [ ] Redimensiona el navegador (responsive)

---

## 🎉 ¡Listo!

Ya estás viendo las imágenes reales de bautizos. El sitio está completamente funcional con contenido auténtico.

### Próximo paso (opcional)

Agregar imágenes a otros eventos:
- Bodas → `public/images/bodas/`
- Baby Showers → `public/images/babyshowers/`
- etc.

Ver `IMAGES_UPDATED.md` para más detalles.
