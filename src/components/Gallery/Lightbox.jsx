import { useEffect, useCallback } from 'react';
import './Lightbox.css';

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (index === null || index === undefined || !items[index]) return null;

  const item = items[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galería ampliada">
      <button
        type="button"
        className="lightbox__close"
        aria-label="Cerrar"
        onClick={onClose}
      >
        <span /><span />
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        aria-label="Anterior"
        onClick={onPrev}
      >
        ‹
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        aria-label="Siguiente"
        onClick={onNext}
      >
        ›
      </button>

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        {item.type === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img src={item.src} alt={item.alt || ''} loading="eager" />
        )}
        {item.alt && <p className="lightbox__caption">{item.alt}</p>}
        <p className="lightbox__counter">
          {index + 1} / {items.length}
        </p>
      </div>

      <button
        type="button"
        className="lightbox__backdrop"
        aria-label="Cerrar"
        onClick={onClose}
      />
    </div>
  );
}
