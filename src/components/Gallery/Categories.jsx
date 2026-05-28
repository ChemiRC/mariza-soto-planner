import { useState, useMemo, useRef, useEffect } from 'react';
import data from '../../data/events.json';
import { galleries, covers } from '../../data/galleryManifest';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';
import './Categories.css';

const PREVIEW_COUNT = 8;

export default function Categories() {
  // Sólo mostramos categorías con al menos una foto.
  const categories = useMemo(
    () => data.categories.filter((c) => (galleries[c.id] || []).length > 0),
    []
  );

  const [activeId, setActiveId] = useState(categories[0]?.id);
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryRef = useRef(null);

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeId) || categories[0],
    [activeId, categories]
  );

  const gallery = activeCategory ? galleries[activeCategory.id] || [] : [];
  const hasMore = gallery.length > PREVIEW_COUNT;
  const visibleGallery = expanded || !hasMore ? gallery : gallery.slice(0, PREVIEW_COUNT);

  useEffect(() => {
    setExpanded(false);
  }, [activeId]);

  if (!activeCategory) return null;

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () =>
    setLightboxIndex((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const goNext = () =>
    setLightboxIndex((i) => (i === gallery.length - 1 ? 0 : i + 1));

  const selectCategory = (id) => {
    setActiveId(id);
    setTimeout(() => {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <section className="categories section" id="eventos" aria-labelledby="categories-title">
      <div className="container">
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Portafolio
        </span>
        <h2 className="section-title" id="categories-title">Explora nuestras categorías</h2>
        <p className="lead">
          Cada evento es una historia diferente, pensada para sus protagonistas.
          Selecciona una categoría para ver el trabajo.
        </p>

        <div className="cat-cards" role="tablist" aria-label="Categorías de eventos">
          {categories.map((c) => {
            const cover = covers[c.id];
            const count = (galleries[c.id] || []).length;
            const isActive = activeId === c.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="category-gallery"
                className={`cat-card ${isActive ? 'is-active' : ''}`}
                onClick={() => selectCategory(c.id)}
                style={cover ? { backgroundImage: `url("${cover}")` } : undefined}
              >
                <span className="cat-card__overlay" aria-hidden="true" />
                <span className="cat-card__content">
                  <span className="cat-card__name">{c.name}</span>
                  <span className="cat-card__count">{count} fotos</span>
                  <span className="cat-card__cta">Ver galería →</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          ref={galleryRef}
          className="categories__panel"
          role="tabpanel"
          id="category-gallery"
          aria-labelledby={`tab-${activeCategory.id}`}
          key={activeCategory.id}
        >
          <header className="panel__header">
            <h3 className="panel__title">{activeCategory.name}</h3>
            <p className="panel__description">{activeCategory.description}</p>

            {activeCategory.services?.length > 0 && (
              <ul className="panel__services" aria-label="Servicios incluidos">
                {activeCategory.services.map((s) => (
                  <li key={s}>
                    <span className="dot" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </header>

          <div className="masonry">
            {visibleGallery.map((item, idx) => (
              <div className="masonry__item" key={`${activeCategory.id}-${idx}`}>
                <GalleryItem
                  item={item}
                  index={idx}
                  onOpen={openLightbox}
                />
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="panel__actions">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
              >
                {expanded ? 'Ver menos' : `Ver más (${gallery.length - PREVIEW_COUNT})`}
              </button>
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={gallery}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
