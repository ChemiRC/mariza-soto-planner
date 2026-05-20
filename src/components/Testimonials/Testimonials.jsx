import data from '../../data/events.json';
import './Testimonials.css';

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
            <figure className="testimonial" key={i}>
              <div className="testimonial__quote-mark" aria-hidden="true">”</div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.event}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
