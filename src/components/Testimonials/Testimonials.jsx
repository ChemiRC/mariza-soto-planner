import { useState, useEffect, useRef, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import data from '../../data/events.json';
import './Testimonials.css';

const AUTOPLAY_MS = 5000;

const Stars = () => (
  <div className="t-card__stars" aria-label="5 de 5 estrellas">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M12 2l2.9 8.7H23l-7.4 5.4 2.8 8.7L12 19.5l-6.4 4.3 2.8-8.7L2 9.7h8.1z" />
      </svg>
    ))}
  </div>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

function getItemsPerView() {
  if (typeof window === 'undefined') return 1;
  const w = window.innerWidth;
  if (w >= 1024) return 3;
  if (w >= 640) return 2;
  return 1;
}

export default function Testimonials() {
  const items = data.testimonials || [];
  const [perView, setPerView] = useState(getItemsPerView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const maxIndex = Math.max(0, items.length - perView);

  useEffect(() => {
    const onResize = () => setPerView(getItemsPerView());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Keep index within bounds when the viewport (perView) changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, items.length - perView)));
  }, [perView, items.length]);

  const goTo = useCallback(
    (i) => {
      const span = Math.max(0, items.length - perView) + 1;
      setIndex(((i % span) + span) % span);
    },
    [items.length, perView]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay (paused on hover/focus).
  useEffect(() => {
    if (paused || items.length <= perView) return undefined;
    timer.current = setTimeout(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer.current);
  }, [index, paused, perView, items.length, maxIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: false,
    delta: 40,
    preventScrollOnSwipe: false,
  });

  if (!items.length) return null;

  const slideWidth = 100 / perView;
  const trackStyle = { transform: `translateX(-${index * slideWidth}%)` };
  const dotCount = maxIndex + 1;

  return (
    <section
      className="testimonials section"
      id="testimonios"
      aria-labelledby="testimonials-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container">
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Testimonios
        </span>
        <h2 className="section-title" id="testimonials-title">Lo que dicen nuestros clientes</h2>
        <p className="lead">Cada celebración deja una historia. Estas son algunas de ellas.</p>

        <div className="t-carousel">
          <button
            type="button"
            className="t-nav t-nav--prev"
            onClick={prev}
            aria-label="Testimonios anteriores"
          >
            <ChevronLeft />
          </button>

          <div className="t-viewport" {...handlers}>
            <ul className="t-track" style={trackStyle} role="list">
              {items.map((t, i) => (
                <li
                  className="t-slide"
                  key={i}
                  style={{ flex: `0 0 ${slideWidth}%`, maxWidth: `${slideWidth}%` }}
                >
                  <figure className="t-card">
                    <Stars />
                    <blockquote className="t-card__quote">{t.quote}</blockquote>
                    <figcaption className="t-card__caption">
                      <span className="t-card__name">{t.name}</span>
                      <span className="t-card__event">{t.event}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="t-nav t-nav--next"
            onClick={next}
            aria-label="Siguientes testimonios"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="t-dots" role="tablist" aria-label="Navegación de testimonios">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir al grupo de testimonios ${i + 1}`}
              className={`t-dot ${i === index ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
