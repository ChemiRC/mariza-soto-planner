import { useState } from 'react';
import data from '../../data/events.json';
import './Contact.css';

const EVENT_TYPES = [
  'Boda',
  'Baby Shower',
  'Bautizo',
  'Primera Comunión',
  'Cumpleaños',
  'Fiesta Infantil',
  'Graduación',
  'Otro',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: EVENT_TYPES[0],
    date: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sin backend: redirigimos a WhatsApp con el mensaje pre-llenado.
    const text =
      `Hola Mariza, soy ${form.name}.%0A` +
      `Me interesa organizar un evento (${form.eventType})` +
      (form.date ? ` para el ${form.date}.%0A` : `.%0A`) +
      (form.message ? `${encodeURIComponent(form.message)}%0A` : '') +
      (form.email ? `Email: ${form.email}%0A` : '') +
      (form.phone ? `Tel: ${form.phone}` : '');
    const url = `https://wa.me/${data.company.whatsapp}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('sent');
  };

  return (
    <section className="contact section" id="contacto">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="eyebrow">Contacto</span>
          <h2 className="contact__title">
            Hagamos realidad <em>tu próximo evento</em>.
          </h2>
          <p>
            Cuéntanos tu idea. Te respondemos en menos de 24 horas con una propuesta
            personalizada y sin compromiso.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M12 22s-7-7.5-7-13a7 7 0 0 1 14 0c0 5.5-7 13-7 13z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <div>
                <strong>Ubicación</strong>
                <span>{data.company.location}</span>
                <span className="muted">{data.company.coverage}</span>
              </div>
            </li>

            <li>
              <span className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L7.9 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9z" />
                </svg>
              </span>
              <div>
                <strong>Teléfono</strong>
                <a href={`tel:${data.company.phone.replace(/\s+/g, '')}`}>{data.company.phone}</a>
              </div>
            </li>

            <li>
              <span className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 7 9-7" />
                </svg>
              </span>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${data.company.email}`}>{data.company.email}</a>
              </div>
            </li>
          </ul>

          <a
            href={`https://wa.me/${data.company.whatsapp}`}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-gold contact__wa"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.4-1.4-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 2.1 3.2 5 4.4c1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.1-.5-.3z"/>
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3a8.2 8.2 0 1 1 6.9 3.9z"/>
            </svg>
            Escribir por WhatsApp
          </a>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <h3 className="contact__form-title">Solicita una cotización</h3>

          <div className="field">
            <label htmlFor="name">Nombre completo</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Teléfono</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="eventType">Tipo de evento</label>
              <select
                id="eventType"
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
              >
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="date">Fecha tentativa</label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Cuéntanos sobre tu evento</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Número de invitados, lugar, estilo, servicios que te interesan..."
            />
          </div>

          <button type="submit" className="btn btn-primary contact__submit">
            Enviar solicitud
          </button>

          {status === 'sent' && (
            <p className="contact__status" role="status">
              ¡Listo! Se abrió WhatsApp con tu mensaje. Si no se abrió, escríbenos directamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
