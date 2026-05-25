import { useEffect, useState } from 'react';
import data from '../../data/events.json';
import './Navbar.css';

const navItems = [
  { id: 'destacados',     label: 'Portafolio' },
  { id: 'eventos',        label: 'Eventos' },
  { id: 'sobre-nosotros', label: 'Nosotros' },
  { id: 'servicios',      label: 'Servicios' },
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
            href={`https://wa.me/${data.company.whatsapp}`}
            target="_blank"
            rel="noreferrer noopener"
            onClick={closeMenu}
          >
            Cotizar evento
          </a>
        </nav>

        <a
          className="btn btn-gold navbar__cta"
          href={`https://wa.me/${data.company.whatsapp}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          Cotizar evento
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
