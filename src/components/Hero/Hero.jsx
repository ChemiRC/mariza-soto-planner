import data from '../../data/events.json';
import { featured } from '../../data/galleryManifest';
import { whatsappUrl } from '../../utils/whatsapp';
import './Hero.css';

// Cycling background images from featured portfolio
const heroImages = featured.slice(0, 4).map((f) => f.src);

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="hero__bg-slide"
            style={{
              backgroundImage: `url("${src}")`,
              animationDelay: `${i * 6}s`,
            }}
          />
        ))}
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__inner">
        <span className="hero__eyebrow fade-up" style={{ animationDelay: '0.05s' }}>
          {data.company.yearsOfExperience} años creando momentos eternos
        </span>

        <h1 className="hero__title fade-up" style={{ animationDelay: '0.2s' }}>
          {data.company.name}
        </h1>

        <p className="hero__lead fade-up" style={{ animationDelay: '0.35s' }}>
          {data.company.tagline}
        </p>

        <div className="hero__cta fade-up" style={{ animationDelay: '0.5s' }}>
          <a href="#destacados" className="btn btn-primary">
            Descubre nuestro trabajo
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline"
          >
            Cotiza tu evento
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#impacto" aria-label="Bajar a la siguiente sección">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  );
}
