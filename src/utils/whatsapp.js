import data from '../data/events.json';

const DEFAULT_MESSAGE =
  data.company.whatsappMessage ||
  'Hola, me interesa cotizar un evento con Mariza Soto Planner';

/**
 * Construye el enlace de WhatsApp con un mensaje predeterminado.
 * Pasa `customText` para sobrescribir el mensaje (ej. desde el formulario).
 */
export function whatsappUrl(customText) {
  const text = customText && customText.trim() ? customText : DEFAULT_MESSAGE;
  return `https://wa.me/${data.company.whatsapp}?text=${encodeURIComponent(text)}`;
}
