import { useRef, useState, useEffect } from 'react';

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ZoomIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M16.5 16.5L21 21" />
    <path d="M11 8v6M8 11h6" />
  </svg>
);

export default function GalleryItem({ item, onOpen, index }) {
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

  const isVideo = item.type === 'video';
  const previewSrc = isVideo ? item.poster : item.src;

  return (
    <button
      ref={ref}
      type="button"
      className={`gallery-item ${isVideo ? 'is-video' : ''} ${loaded ? 'is-loaded' : ''}`}
      onClick={() => onOpen(index)}
      aria-label={isVideo ? `Reproducir video: ${item.alt || ''}` : `Ampliar imagen: ${item.alt || ''}`}
    >
      {!loaded && <div className="gallery-item__skeleton skeleton" aria-hidden="true" />}

      {visible && previewSrc && (
        <img
          src={previewSrc}
          alt={item.alt || ''}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      )}

      <span className="gallery-item__overlay" aria-hidden="true">
        <span className="gallery-item__icon">
          {isVideo ? <PlayIcon /> : <ZoomIcon />}
        </span>
      </span>
    </button>
  );
}
