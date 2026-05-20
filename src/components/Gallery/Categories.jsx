import { useState, useMemo } from 'react';
import data from '../../data/events.json';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';
import './Categories.css';

export default function Categories() {
  const categories = data.categories;
  const [activeId, setActiveId] = useState(categories[0].id);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeId) || categories[0],
    [activeId, categories]
  );

  const gallery = activeCategory.gallery || [];

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () =>
    setLightboxIndex((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const goNext = () =>
    setLightboxIndex((i) => (i === gallery.length - 1 ? 0 : i + 1));

  return (
    <section className="categories section" id="eventos">
      <div className="container">
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Portafolio
        </span>
        <h2 className="section-title">Eventos que hemos creado</h2>
        <p className="lead">
          Explora nuestro trabajo por categoría. Cada evento es una historia diferente,
          pensada para sus protagonistas.
        </p>

        {/* Tabs */}
        <div className="categories__tabs" role="tablist" aria-label="Categorías de eventos">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={activeId === c.id}
              aria-controls={`panel-${c.id}`}
              id={`tab-${c.id}`}
              className={`tab ${activeId === c.id ? 'is-active' : ''}`}
              onClick={() => setActiveId(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          className="categories__panel"
          role="tabpanel"
          id={`panel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
          key={activeCategory.id}
        >
          <div className="panel__header">
            <h3 className="panel__title">{activeCategory.name}</h3>
            <p className="panel__description">{activeCategory.description}</p>

            {activeCategory.services && activeCategory.services.length > 0 && (
              <ul className="panel__services" aria-label="Servicios incluidos">
                {activeCategory.services.map((s) => (
                  <li key={s}>
                    <span className="dot" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {gallery.length > 0 ? (
            <div className="gallery-grid">
              {gallery.map((item, idx) => (
                <GalleryItem
                  key={`${activeCategory.id}-${idx}`}
                  item={item}
                  index={idx}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          ) : (
            <p className="gallery-empty">Próximamente compartiremos imágenes de esta categoría.</p>
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
