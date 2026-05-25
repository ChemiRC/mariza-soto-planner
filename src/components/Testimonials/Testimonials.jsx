import { useEffect, useRef, useState } from 'react';
import data from '../../data/events.json';
import './Testimonials.css';

const AUTOPLAY_MS = 6000;

const Stars = () => (
  <div className="testimonial__stars" aria-label="5 estrellas">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
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

export default function Testimonials() {
  const items = data.testimonials;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = (i) => setActive(((i % items.length) + items.length) % items.length);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => next(), AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [active, paused]);

  return (
    <section
      className="testimonials section section-alt"
      id="testimonios"
      aria-labelledby="testimonials-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Testimonios
        </span>
        <h2 className="section-title" id="testimonials-title">Lo que dicen nuestros clientes</h2>

        <div
          className="carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonios de clientes"
        >
          <button
            type="button"
            className="carousel__nav carousel__nav--prev"
            onClick={prev}
            aria-label="Testimonio anterior"
          >
            <ChevronLeft />
          </button>

          <div className="carousel__track">
            {items.map((t, i) => {
              const isActive = i === active;
              return (
                <figure
                  key={i}
                  className={`testimonial ${isActive ? 'is-active' : ''}`}
                  aria-hidden={!isActive}
                >
                  <div className="testimonial__avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <Stars />
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="testimonial__name">{t.name}</span>
                    <span className="testimonial__event">{t.event}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <button
            type="button"
            className="carousel__nav carousel__nav--next"
            onClick={next}
            aria-label="Siguiente testimonio"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="carousel__dots" role="tablist" aria-label="Seleccionar testimonio">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-label={`Ir al testimonio ${i + 1}`}
              aria-selected={i === active}
              className={`carousel__dot ${i === active ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
