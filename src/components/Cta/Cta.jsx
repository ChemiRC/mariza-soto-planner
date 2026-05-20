import data from '../../data/events.json';
import './Cta.css';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.4-1.4-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 2.1 3.2 5 4.4c1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.1-.5-.3z"/>
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3a8.2 8.2 0 1 1 6.9 3.9z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" width="18" height="18">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1l-1.3 1.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" width="18" height="18">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
    <path d="m22 6-10 7L2 6"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" width="18" height="18">
    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

export default function Cta() {
  const { company } = data;

  return (
    <section className="cta-section" id="contacto">
      <div className="cta-section__bg" aria-hidden="true" />

      <div className="container cta-section__inner">
        <div className="cta-section__content reveal">
          <span className="eyebrow cta-section__eyebrow">Hablemos</span>
          <h2 className="cta-section__title">
            ¿Lista para crear un<br />
            <em>evento inolvidable?</em>
          </h2>
          <p className="cta-section__lead">
            Cuéntanos tu idea y te damos una cotización sin compromiso.
            Estamos a un mensaje de distancia.
          </p>

          <div className="cta-section__actions">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              className="btn cta-section__wa"
              target="_blank"
              rel="noreferrer noopener"
            >
              <WhatsAppIcon />
              Escríbenos por WhatsApp
            </a>
          </div>

          <ul className="cta-section__info">
            <li>
              <PhoneIcon />
              <a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <LocationIcon />
              <span>{company.location}</span>
            </li>
          </ul>
        </div>

        <div className="cta-section__deco reveal" aria-hidden="true">
          <div className="cta-section__card">
            <span className="cta-section__card-quote">"</span>
            <p>Cada detalle cuenta.<br />Cada momento importa.</p>
            <cite>— {company.name}</cite>
          </div>
          <div className="cta-section__stat">
            <strong>{data.stats[0].number}</strong>
            <span>{data.stats[0].label}</span>
          </div>
          <div className="cta-section__stat">
            <strong>{data.stats[1].number}</strong>
            <span>{data.stats[1].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
