import { useState } from 'react';
import data from '../../data/events.json';
import { featured } from '../../data/galleryManifest';
import './Cta.css';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.4-1.4-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 2.1 3.2 5 4.4c1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.1-.5-.3z" />
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3a8.2 8.2 0 1 1 6.9 3.9z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" width="20" height="20">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const InstaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" width="20" height="20">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const eventTypes = [
  'Boda',
  'Baby shower',
  'Bautizo',
  'Primera comunión',
  'Cumpleaños',
  'Fiesta infantil',
  'Graduación',
  'Otro',
];

const bgImage = featured[1]?.src || featured[0]?.src;

export default function Cta() {
  const { company } = data;
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Hola Mariza, soy ${form.name}.`,
      form.type && `Quiero información para: ${form.type}.`,
      form.message && `\n${form.message}`,
      form.email && `\n\nMi correo: ${form.email}`,
    ]
      .filter(Boolean)
      .join(' ');

    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="cta-section" id="contacto" aria-labelledby="cta-title">
      <div
        className="cta-section__bg"
        aria-hidden="true"
        style={bgImage ? { backgroundImage: `url("${bgImage}")` } : undefined}
      />
      <div className="cta-section__overlay" aria-hidden="true" />

      <div className="container cta-section__inner">
        <div className="cta-section__content reveal">
          <span className="eyebrow cta-section__eyebrow">Hablemos</span>
          <h2 className="cta-section__title" id="cta-title">
            Hagamos de tu evento<br />
            algo <em>extraordinario</em>
          </h2>
          <p className="cta-section__lead">
            Cuéntanos tu idea y te respondemos con una cotización personalizada.
            La primera conversación es siempre sin compromiso.
          </p>

          <div className="cta-section__quick">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer noopener"
              className="quick quick--wa"
              aria-label="Contactar por WhatsApp"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
            <a href={`mailto:${company.email}`} className="quick" aria-label="Enviar correo">
              <MailIcon />
              <span>Email</span>
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="quick"
              aria-label="Visitar Instagram"
            >
              <InstaIcon />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <form className="cta-form reveal" onSubmit={handleSubmit} aria-label="Formulario de contacto">
          <div className="cta-form__row">
            <label className="cta-form__field">
              <span>Nombre</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </label>

            <label className="cta-form__field">
              <span>Correo</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                autoComplete="email"
              />
            </label>
          </div>

          <label className="cta-form__field">
            <span>Tipo de evento</span>
            <select name="type" value={form.type} onChange={handleChange}>
              <option value="">Selecciona…</option>
              {eventTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>

          <label className="cta-form__field">
            <span>Cuéntanos tu idea</span>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Fecha tentativa, número de invitados, estilo..."
            />
          </label>

          <button type="submit" className="btn btn-primary cta-form__submit">
            <WhatsAppIcon />
            Enviar por WhatsApp
          </button>

          <p className="cta-form__note">
            Tu mensaje se abrirá en WhatsApp para que lo envíes directamente.
          </p>
        </form>
      </div>
    </section>
  );
}
