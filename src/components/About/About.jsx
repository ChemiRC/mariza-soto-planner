import data from '../../data/events.json';
import './About.css';

const philosophy = [
  {
    title: 'Excelencia',
    text: 'Cada evento es único: aplicamos altos estándares de producción y la sensibilidad de quien ya ha vivido cientos de celebraciones.',
  },
  {
    title: 'Atención al detalle',
    text: 'Lo que distingue una buena fiesta de una experiencia inolvidable está en los detalles. Nosotros los cuidamos todos.',
  },
  {
    title: 'Confianza',
    text: 'Acompañamos a nuestros clientes desde la primera conversación. Comunicación clara, presupuestos transparentes y cero sorpresas.',
  },
];

export default function About() {
  return (
    <section className="about section" id="sobre-nosotros">
      <div className="container about__inner">
        <div className="about__intro">
          <span className="eyebrow">Sobre nosotros</span>
          <h2 className="about__title">
            Eventos diseñados con <em>alma, oficio y elegancia</em>.
          </h2>
          <p className="about__lead">
            Con sede en <strong>{data.company.location}</strong> y disponibilidad para trasladarnos
            a cualquier rincón de la República, llevamos más de
            <strong> {data.company.yearsOfExperience} años </strong>
            transformando ideas en celebraciones memorables. Coordinamos cada elemento —mobiliario,
            decoración, banquete, candybar, mesas de queso— para que tú solo te ocupes de disfrutar.
          </p>

          <div className="about__quote">
            <span className="about__quote-mark" aria-hidden="true">“</span>
            <p>
              Nuestra misión es traducir tu visión en una experiencia auténtica:
              que cada invitado sienta que entró a un mundo creado especialmente para ti.
            </p>
            <cite>— Mariza Soto</cite>
          </div>
        </div>

        <div className="about__pillars">
          {philosophy.map((p) => (
            <article key={p.title} className="pillar">
              <div className="pillar__bar" aria-hidden="true" />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
