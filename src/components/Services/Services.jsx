import data from '../../data/events.json';
import './Services.css';

/* Iconos SVG inline — sin dependencias */
const Icons = {
  chair: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M6 11V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
      <path d="M4 11h16v3H4z" />
      <path d="M6 14v6M18 14v6" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
      <path d="M5 4l.6 1.6L7 6l-1.4.4L5 8l-.6-1.6L3 6l1.4-.4L5 4z" />
    </svg>
  ),
  utensils: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M7 3v8a2 2 0 0 0 2 2v8" />
      <path d="M5 3v6M9 3v6" />
      <path d="M17 3c-2 1-3 3-3 6s1 4 3 4v8" />
    </svg>
  ),
  candy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M7 7l-3-2 1 3-2 1 3 1-1 3 2-1" />
      <path d="M17 17l3 2-1-3 2-1-3-1 1-3-2 1" />
    </svg>
  ),
  cheese: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M3 12l10-7 8 5v6H3z" />
      <circle cx="9" cy="14" r="0.8" fill="currentColor" />
      <circle cx="14" cy="13" r="0.8" fill="currentColor" />
      <circle cx="17" cy="15" r="0.8" fill="currentColor" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4h6v3H9z" />
      <path d="M9 11h6M9 15h4" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section className="services section section-alt" id="servicios">
      <div className="container">
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Servicios
        </span>
        <h2 className="section-title">Todo lo que tu celebración necesita</h2>
        <p className="lead">
          Coordinamos cada elemento bajo un mismo concepto creativo, asegurando coherencia visual,
          tiempos perfectos y una experiencia impecable para tus invitados.
        </p>

        <div className="services__grid">
          {data.services.map((service, idx) => (
            <article
              className="service-card reveal"
              key={service.id}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <span className="service-card__number" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="service-card__icon">
                {Icons[service.icon] || Icons.sparkles}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
