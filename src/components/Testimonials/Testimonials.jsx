import data from '../../data/events.json';
import './Testimonials.css';

const Stars = () => (
  <div className="testimonial__stars" aria-label="5 estrellas">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
        <path d="M12 2l2.9 8.7H23l-7.4 5.4 2.8 8.7L12 19.5l-6.4 4.3 2.8-8.7L2 9.7h8.1z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="testimonials section section-alt" id="testimonios">
      <div className="container">
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Testimonios
        </span>
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>

        <div className="testimonials__grid">
          {data.testimonials.map((t, i) => (
            <figure className="testimonial reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <Stars />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <div className="testimonial__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.event}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
