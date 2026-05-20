#!/usr/bin/env python3
"""
Optimizar imágenes JPEG para web
- Reduce tamaño sin perder calidad visual
- Máximo 150KB por imagen para performance óptima
"""

import os
from pathlib import Path
from PIL import Image

def optimize_image(image_path, quality=85, max_width=1600):
    """Optimiza una imagen JPEG"""
    try:
        img = Image.open(image_path)

        # Convertir a RGB si es necesario
        if img.mode in ('RGBA', 'LA', 'P'):
            bg = Image.new('RGB', img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = bg

        # Redimensionar si es muy grande
        if img.width > max_width:
            ratio = max_width / img.width
            new_size = (max_width, int(img.height * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)

        # Guardar optimizado
        img.save(image_path, 'JPEG', quality=quality, optimize=True)

        size_kb = os.path.getsize(image_path) / 1024
        print(f"✓ {Path(image_path).name}: {size_kb:.1f} KB")
        return True
    except Exception as e:
        print(f"✗ Error en {image_path}: {e}")
        return False

def main():
    """Optimiza todas las imágenes en public/images/"""
    base_path = Path(__file__).parent / 'public' / 'images'

    if not base_path.exists():
        print(f"❌ No se encontró {base_path}")
        return

    categories = ['bodas', 'bautizos', 'babyshowers', 'graduaciones', 'comuniones', 'cumpleaños', 'fiestas-infantiles']

    total = 0
    optimized = 0

    for category in categories:
        folder = base_path / category
        if not folder.exists():
            continue

        print(f"\n📁 {category}/")

        for img_file in sorted(folder.glob('*.jpeg')) + sorted(folder.glob('*.jpg')):
            total += 1
            if optimize_image(str(img_file)):
                optimized += 1

    print(f"\n{'='*50}")
    print(f"✅ Optimizadas {optimized}/{total} imágenes")
    print(f"🚀 Listo para producción")

if __name__ == '__main__':
    main()
