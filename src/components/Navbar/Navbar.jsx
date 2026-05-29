import { useEffect, useState } from 'react';
import { whatsappUrl } from '../../utils/whatsapp';
import './Navbar.css';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="16" height="16">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.4-1.4-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 2.1 3.2 5 4.4c1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.1-.5-.3z" />
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3a8.2 8.2 0 1 1 6.9 3.9z" />
  </svg>
);

const navItems = [
  { id: 'destacados',     label: 'Portafolio' },
  { id: 'eventos',        label: 'Eventos' },
  { id: 'sobre-nosotros', label: 'Nosotros' },
  { id: 'servicios',      label: 'Servicios' },
  { id: 'testimonios',    label: 'Testimonios' },
  { id: 'contacto',       label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#inicio" className="navbar__brand" onClick={closeMenu} aria-label="Ir al inicio">
          <span className="navbar__brand-mark" aria-hidden="true">M</span>
          <span className="navbar__brand-text">
            <strong>Mariza Soto</strong>
            <em>Planner</em>
          </span>
        </a>

        <nav
          className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>

          <a
            className="btn btn-gold navbar__cta-mobile"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer noopener"
            onClick={closeMenu}
          >
            <WhatsAppIcon />
            Cotiza por WhatsApp
          </a>
        </nav>

        <a
          className="btn btn-gold navbar__cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Cotiza tu evento por WhatsApp"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
