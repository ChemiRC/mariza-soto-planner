import { featured } from '../../data/galleryManifest';
import { whatsappUrl } from '../../utils/whatsapp';
import './Cta.css';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="24" height="24">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.4-1.4-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 2.1 3.2 5 4.4c1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.1-.5-.3z" />
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3a8.2 8.2 0 1 1 6.9 3.9z" />
  </svg>
);

const bgImage = featured[1]?.src || featured[0]?.src;

export default function Cta() {
  return (
    <section className="cta-section" id="contacto" aria-labelledby="cta-title">
      <div
        className="cta-section__bg"
        aria-hidden="true"
        style={bgImage ? { backgroundImage: `url("${bgImage}")` } : undefined}
      />
      <div className="cta-section__overlay" aria-hidden="true" />

      <div className="container cta-section__inner">
        <span className="eyebrow cta-section__eyebrow">Hablemos</span>
        <h2 className="cta-section__title" id="cta-title">
          Hagamos de tu evento<br />
          algo <em>extraordinario</em>
        </h2>
        <p className="cta-section__lead">
          Cuéntanos tu idea por WhatsApp y te respondemos con una cotización
          personalizada. La primera conversación es siempre sin compromiso.
        </p>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer noopener"
          className="cta-wa"
          aria-label="Cotiza tu evento por WhatsApp"
        >
          <span className="cta-wa__icon" aria-hidden="true">
            <WhatsAppIcon />
          </span>
          <span className="cta-wa__text">Cotiza tu evento por WhatsApp</span>
        </a>

        <p className="cta-section__note">Respuesta el mismo día · Guadalajara y toda la República</p>
      </div>
    </section>
  );
}
