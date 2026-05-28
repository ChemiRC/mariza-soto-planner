import { useEffect, useCallback, useRef } from 'react';
import './Lightbox.css';

// Distance thresholds (in px) for triggering an action.
// Lower thresholds when the gesture is fast (flick) vs. slow drag.
const H_THRESHOLD_FAST = 40;
const H_THRESHOLD_SLOW = 80;
const V_THRESHOLD_FAST = 70;
const V_THRESHOLD_SLOW = 110;
const FAST_GESTURE_MS = 300;
const AXIS_LOCK_PX = 10;

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

  // ── Touch gestures ─────────────────────────────────────────
  const contentRef = useRef(null);
  const gesture = useRef({
    x: 0, y: 0, dx: 0, dy: 0,
    time: 0, axis: null, active: false,
  });

  const applyTransform = (dx, dy, animated) => {
    const node = contentRef.current;
    if (!node) return;
    node.style.transition = animated
      ? 'transform 280ms cubic-bezier(0.4,0,0.2,1), opacity 280ms ease'
      : 'none';
    node.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    node.style.opacity = dy > 0 ? String(Math.max(0.35, 1 - dy / 500)) : '1';
  };

  // Reset position whenever the displayed item changes.
  useEffect(() => {
    applyTransform(0, 0, false);
  }, [index]);

  const onTouchStart = (e) => {
    // Don't hijack gestures on video controls (user wants to scrub).
    if (e.target.tagName === 'VIDEO') return;
    const t = e.touches[0];
    gesture.current = {
      x: t.clientX, y: t.clientY,
      dx: 0, dy: 0,
      time: Date.now(),
      axis: null,
      active: true,
    };
  };

  const onTouchMove = (e) => {
    const g = gesture.current;
    if (!g.active) return;
    const t = e.touches[0];
    const dx = t.clientX - g.x;
    const dy = t.clientY - g.y;

    // Lock movement to the dominant axis once past a small threshold.
    if (!g.axis) {
      if (Math.abs(dx) < AXIS_LOCK_PX && Math.abs(dy) < AXIS_LOCK_PX) return;
      g.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    }

    if (g.axis === 'x') {
      g.dx = dx;
      g.dy = 0;
      applyTransform(dx, 0, false);
    } else {
      // Only react to downward swipes; ignore upward drift.
      const clamped = Math.max(0, dy);
      g.dx = 0;
      g.dy = clamped;
      applyTransform(0, clamped, false);
    }
  };

  const onTouchEnd = () => {
    const g = gesture.current;
    if (!g.active) return;
    g.active = false;

    const elapsed = Date.now() - g.time;
    const fast = elapsed < FAST_GESTURE_MS;
    const hThreshold = fast ? H_THRESHOLD_FAST : H_THRESHOLD_SLOW;
    const vThreshold = fast ? V_THRESHOLD_FAST : V_THRESHOLD_SLOW;

    let action = null;
    if (g.axis === 'x') {
      if (g.dx <= -hThreshold) action = 'next';
      else if (g.dx >= hThreshold) action = 'prev';
    } else if (g.axis === 'y') {
      if (g.dy >= vThreshold) action = 'close';
    }

    if (action) {
      // Reset transform synchronously so the next image appears centered,
      // then trigger the state change.
      applyTransform(0, 0, false);
      if (action === 'next') onNext();
      else if (action === 'prev') onPrev();
      else if (action === 'close') onClose();
    } else {
      // Animate snap back.
      applyTransform(0, 0, true);
    }
  };

  if (index === null || index === undefined || !items[index]) return null;

  const item = items[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galería ampliada"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
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
