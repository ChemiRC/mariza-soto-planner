import data from '../../data/events.json';
import { featured } from '../../data/galleryManifest';
import './About.css';

const portrait = featured[2]?.src || featured[0]?.src;

export default function About() {
  const { about, company } = data;

  return (
    <section className="about section" id="sobre-nosotros" aria-labelledby="about-title">
      <div className="container about__inner">
        <div className="about__media reveal">
          <div className="about__media-frame">
            {portrait && (
              <img
                src={portrait}
                alt="Trabajo de Mariza Soto Planner"
                loading="lazy"
                decoding="async"
              />
            )}
            <span className="about__media-deco" aria-hidden="true" />
          </div>
          <div className="about__badge" aria-hidden="true">
            <span className="about__badge-num">{company.yearsOfExperience}+</span>
            <span className="about__badge-text">años creando recuerdos</span>
          </div>
        </div>

        <div className="about__content reveal">
          <span className="eyebrow">Sobre nosotros</span>
          <h2 className="about__title" id="about-title">
            {about.headline}
          </h2>

          {about.paragraphs.map((p, i) => (
            <p key={i} className="about__paragraph">{p}</p>
          ))}

          <div className="about__signature">
            <span className="about__signature-line" aria-hidden="true" />
            <div>
              <span className="about__signature-name">{about.signature}</span>
              <span className="about__signature-role">Event Planner & Founder</span>
            </div>
          </div>

          <div className="about__meta">
            <div className="about__meta-item">
              <span className="about__meta-label">Sede</span>
              <span className="about__meta-value">{company.location}</span>
            </div>
            <div className="about__meta-item">
              <span className="about__meta-label">Cobertura</span>
              <span className="about__meta-value">Toda la República</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
