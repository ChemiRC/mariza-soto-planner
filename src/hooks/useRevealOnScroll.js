import { useEffect } from 'react';

/**
 * Observa cualquier elemento con la clase `.reveal` y le agrega
 * `.is-visible` cuando entra en el viewport. La animación se define
 * en globals.css para mantener separadas la lógica y la presentación.
 */
export default function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
