import { useEffect, useCallback, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Lightbox.css';

// Commit thresholds (px). Horizontal = next/prev, vertical-down = close.
const H_THRESHOLD = 50;
const V_THRESHOLD = 80;

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const contentRef = useRef(null);

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

  // Move/fade the content node directly (no re-render during the drag).
  const applyTransform = useCallback((dx, dy, animated) => {
    const node = contentRef.current;
    if (!node) return;
    node.style.transition = animated
      ? 'transform 280ms cubic-bezier(0.4,0,0.2,1), opacity 280ms ease'
      : 'none';
    node.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    node.style.opacity = dy > 0 ? String(Math.max(0.4, 1 - dy / 450)) : '1';
  }, []);

  // Reset position whenever the displayed item changes.
  useEffect(() => {
    applyTransform(0, 0, false);
  }, [index, applyTransform]);

  const isOnVideo = (e) => e?.event?.target?.tagName === 'VIDEO';

  const swipeHandlers = useSwipeable({
    onSwiping: (e) => {
      if (isOnVideo(e)) return;
      if (e.dir === 'Left') applyTransform(-e.absX, 0, false);
      else if (e.dir === 'Right') applyTransform(e.absX, 0, false);
      else if (e.dir === 'Down') applyTransform(0, e.absY, false);
      // 'Up' is intentionally ignored.
    },
    onSwiped: (e) => {
      if (isOnVideo(e)) return;
      if (e.dir === 'Left' && e.absX >= H_THRESHOLD) {
        applyTransform(0, 0, false);
        onNext();
      } else if (e.dir === 'Right' && e.absX >= H_THRESHOLD) {
        applyTransform(0, 0, false);
        onPrev();
      } else if (e.dir === 'Down' && e.absY >= V_THRESHOLD) {
        onClose();
      } else {
        // Gesture didn't reach the threshold → animate back to center.
        applyTransform(0, 0, true);
      }
    },
    delta: 10,                  // start tracking early for smooth drag feedback
    preventScrollOnSwipe: true, // block page scroll while swiping the lightbox
    trackTouch: true,
    trackMouse: false,
  });

  if (index === null || index === undefined || !items[index]) return null;

  const item = items[index];

  return (
    <div
      {...swipeHandlers}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galería ampliada"
    >
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

      <div
        ref={contentRef}
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt || ''}
            loading="eager"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        )}
        {item.alt && <p className="lightbox__caption">{item.alt}</p>}
        <p className="lightbox__counter">
          {index + 1} / {items.length}
        </p>
        <p className="lightbox__hint" aria-hidden="true">
          Desliza para navegar · Desliza abajo para cerrar
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
