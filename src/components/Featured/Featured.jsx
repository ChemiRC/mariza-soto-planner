import { useRef, useState, useEffect } from 'react';
import { featured } from '../../data/galleryManifest';
import Lightbox from '../Gallery/Lightbox';
import './Featured.css';

const ZoomIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M16.5 16.5L21 21" />
    <path d="M11 8v6M8 11h6" />
  </svg>
);

function FeaturedItem({ item, onOpen, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.05 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible]);

  return (
    <button
      ref={ref}
      type="button"
      className={`featured__item ${loaded ? 'is-loaded' : ''}`}
      onClick={() => onOpen(index)}
      aria-label={`Ampliar: ${item.alt}`}
    >
      {!loaded && <div className="featured__skeleton skeleton" aria-hidden="true" />}
      {visible && (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      )}
      <span className="featured__overlay" aria-hidden="true">
        <span className="featured__zoom">
          <ZoomIcon />
        </span>
      </span>
    </button>
  );
}

export default function Featured() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!featured.length) return null;

  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === 0 ? featured.length - 1 : i - 1));
  const next = () => setLightboxIndex((i) => (i === featured.length - 1 ? 0 : i + 1));

  return (
    <section className="featured section section-alt" id="destacados" aria-labelledby="featured-title">
      <div className="container">
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Destacados
        </span>
        <h2 className="section-title" id="featured-title">Una mirada a nuestro trabajo</h2>
        <p className="lead">
          Selección de momentos creados con cariño y atención al detalle.
        </p>
      </div>

      <div className="featured__container">
        <div className="featured__grid">
          {featured.map((item, idx) => (
            <FeaturedItem
              key={`${item.src}-${idx}`}
              item={item}
              index={idx}
              onOpen={setLightboxIndex}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={featured}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
