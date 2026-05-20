import data from '../../data/events.json';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-image" />
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__inner">
        <span className="eyebrow hero__eyebrow fade-up" style={{ animationDelay: '0.05s' }}>
          {data.company.yearsOfExperience} años creando momentos eternos
        </span>

        <h1 className="hero__title fade-up" style={{ animationDelay: '0.15s' }}>
          Tu evento, <em>una historia</em><br />que merece ser contada.
        </h1>

        <p className="hero__lead fade-up" style={{ animationDelay: '0.25s' }}>
          {data.company.name} es un estudio de planeación integral de eventos en {data.company.location}.
          Diseñamos bodas, baby showers, bautizos, primeras comuniones, cumpleaños,
          fiestas infantiles y graduaciones con la atención al detalle que tu celebración merece.
        </p>

        <div className="hero__cta fade-up" style={{ animationDelay: '0.35s' }}>
          <a href="#eventos" className="btn btn-primary">
            Ver nuestro portafolio
          </a>
          <a href="#contacto" className="btn btn-outline">
            Cotizar mi evento
          </a>
        </div>

        <ul className="hero__stats fade-up" style={{ animationDelay: '0.45s' }}>
          {data.stats.map((s) => (
            <li key={s.label}>
              <span className="hero__stat-number">{s.number}</span>
              <span className="hero__stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <a className="hero__scroll" href="#sobre-nosotros" aria-label="Bajar a la siguiente sección">
        <span /> Descubre más
      </a>
    </section>
  );
}
