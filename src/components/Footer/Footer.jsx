import data from '../../data/events.json';
import './Footer.css';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.5 3a4.5 4.5 0 0 0 4 3.5v3a7.5 7.5 0 0 1-4-1.2V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.4-1.4-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 2.1 3.2 5 4.4c1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.1-.5-.3z"/>
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3a8.2 8.2 0 1 1 6.9 3.9z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  const { company } = data;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <span className="footer__logo-mark" aria-hidden="true">M</span>
            <span className="footer__logo-text">
              <strong>Mariza Soto</strong>
              <em>Planner</em>
            </span>
          </a>
          <p className="footer__tagline">{company.tagline}</p>
        </div>

        <div className="footer__col">
          <h4>Eventos</h4>
          <ul>
            {data.categories.map((c) => (
              <li key={c.id}><a href="#eventos">{c.name}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Servicios</h4>
          <ul>
            {data.services.map((s) => (
              <li key={s.id}><a href="#servicios">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <ul>
            <li>{company.location}</li>
            <li><a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
          </ul>

          <div className="footer__social">
            <a href={company.instagram} aria-label="Instagram" target="_blank" rel="noreferrer noopener"><InstagramIcon /></a>
            <a href={company.facebook} aria-label="Facebook" target="_blank" rel="noreferrer noopener"><FacebookIcon /></a>
            <a href={company.tiktok} aria-label="TikTok" target="_blank" rel="noreferrer noopener"><TikTokIcon /></a>
            <a href={`https://wa.me/${company.whatsapp}`} aria-label="WhatsApp" target="_blank" rel="noreferrer noopener"><WhatsAppIcon /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} {company.name}. Todos los derechos reservados.</span>
          <span className="footer__credit">Hecho con cariño en Guadalajara, Jalisco.</span>
        </div>
      </div>

      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/${company.whatsapp}`}
        className="float-wa"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </footer>
  );
}
