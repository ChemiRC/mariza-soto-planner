# 🖼️ Imágenes de Bautizos Actualizadas

## ✅ Cambio completado

Las imágenes JPEG reales han sido **integradas exitosamente** en la categoría de bautizos.

---

## 📊 Estado de imágenes

```
bautizos/ (8 imágenes)
✓ bautizo1.jpeg     94.8 KB   ← Excelente
✓ bautizo2.jpeg    121.6 KB   ← Excelente
✓ bautizo3.jpeg    116.6 KB   ← Excelente
✓ bautizo4.jpeg    119.4 KB   ← Excelente
✓ bautizo5.jpeg    139.8 KB   ← Excelente
⚠ bautizo6.jpeg    256.9 KB   ← Posible comprimir
⚠ bautizo7.jpeg    226.3 KB   ← Posible comprimir
⚠ bautizo8.jpeg    202.2 KB   ← Excelente

Total: 1.2 MB (8 imágenes)
Promedio: 150 KB/imagen
```

---

## 🔧 Cambios realizados

### 1. **Actualizado `src/data/events.json`**
```diff
- "src": "/images/bautizos/bautizo1.svg"
+ "src": "/images/bautizos/bautizo1.jpeg"
```

Todas las 8 referencias ahora apuntan a `.jpeg` en lugar de `.svg`.

### 2. **Eliminados archivos SVG antiguos**
- `bautizo1.svg` — ❌ Eliminado
- `bautizo2.svg` — ❌ Eliminado
- ... hasta `bautizo8.svg` — ❌ Eliminado

### 3. **Renombrado archivo incorrecto**
- `bautiz6.jpeg` → `bautizo6.jpeg` ✅

---

## 🚀 Visualizar cambios

El servidor ya está corriendo. **Recarga el navegador** en:
```
http://localhost:5173/#eventos
```

Y haz clic en la categoría **"Bautizos"** para ver las nuevas imágenes.

---

## 💡 Optimización de imágenes (opcional)

Las imágenes están bien optimizadas. Si quieres reducirlas más:

### Opción 1: TinyPNG (Online, fácil)
1. Sube imágenes a https://tinypng.com
2. Descarga las versiones comprimidas
3. Reemplaza en `public/images/bautizos/`

### Opción 2: ImageOptim (Mac)
```bash
brew install imageoptim
open public/images/bautizos/
# Arrastra imágenes a ImageOptim
```

### Opción 3: FileOptimizer (Windows)
1. Descarga en https://nikkhokkho.sourceforge.io/
2. Abre `public/images/bautizos/`
3. Comprime automáticamente

### Opción 4: FFmpeg (Terminal)
```bash
# Para cada imagen:
ffmpeg -i bautizo1.jpeg -q:v 5 bautizo1-optimized.jpeg
```

---

## 📋 Checklist

- [x] Imágenes JPEG copiadas a `public/images/bautizos/`
- [x] Archivo `events.json` actualizado (`.svg` → `.jpeg`)
- [x] Archivos SVG antiguos eliminados
- [x] Archivo renombrado (`bautiz6` → `bautizo6`)
- [x] Imágenes verificadas (no mayores a 300 KB)
- [ ] Servidor recargado (F5 en navegador)
- [ ] Galería de bautizos verificada visualmente

---

## 🎨 Próximas categorías

Para agregar imágenes a otras categorías:

1. **Bodas** → Copia fotos a `public/images/bodas/`
2. **Baby Showers** → `public/images/babyshowers/`
3. **Graduaciones** → `public/images/graduaciones/`
4. **Comuniones** → `public/images/comuniones/`
5. **Cumpleaños** → `public/images/cumpleaños/`
6. **Fiestas Infantiles** → `public/images/fiestas-infantiles/`

Luego, actualiza `src/data/events.json` con las rutas de las nuevas imágenes.

---

## ✨ Listo

Tu galería de bautizos ahora muestra fotos reales de eventos auténticos. ¡Hermoso!
