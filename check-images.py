#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Verifica tamaño de imágenes en public/images/
Genera reporte sin dependencias externas
"""

import os
import sys
from pathlib import Path

# Fix encoding para Windows
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def get_image_size_kb(filepath):
    """Obtiene tamaño de archivo en KB"""
    return os.path.getsize(filepath) / 1024

def main():
    base_path = Path('public/images')

    if not base_path.exists():
        print("❌ Carpeta public/images/ no encontrada")
        return

    categories = ['bodas', 'bautizos', 'babyshowers', 'graduaciones', 'comuniones', 'cumpleaños', 'fiestas-infantiles']

    print("="*60)
    print("📊 REPORTE DE IMÁGENES")
    print("="*60)

    total_size = 0
    total_images = 0

    for category in categories:
        folder = base_path / category
        if not folder.exists():
            continue

        images = list(folder.glob('*.jpeg')) + list(folder.glob('*.jpg')) + list(folder.glob('*.png'))

        if images:
            print(f"\n📁 {category}/ ({len(images)} imágenes)")
            print("-" * 60)

            for img_file in sorted(images):
                size_kb = get_image_size_kb(img_file)
                total_size += size_kb
                total_images += 1

                status = "✓" if size_kb < 200 else "⚠" if size_kb < 500 else "❌"
                print(f"  {status} {img_file.name:30s} {size_kb:7.1f} KB")

    print("\n" + "="*60)
    print(f"📊 TOTAL: {total_images} imágenes, {total_size/1024:.1f} MB")
    print("="*60)

    if total_size / 1024 > 10:
        print("⚠️  Las imágenes pesan más de 10 MB")
        print("💡 Considera optimizarlas con:")
        print("   - ImageOptim (Mac)")
        print("   - FileOptimizer (Windows)")
        print("   - TinyPNG (online)")
        print("   - ffmpeg para comprimir automático")
    else:
        print("✅ Peso óptimo para carga web")

if __name__ == '__main__':
    main()
