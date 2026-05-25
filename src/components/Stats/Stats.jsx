import data from '../../data/events.json';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats" id="impacto" aria-label="Estadísticas de la empresa">
      <div className="container stats__inner">
        {data.stats.map((s, i) => (
          <div className="stats__item reveal" key={s.label} style={{ transitionDelay: `${i * 100}ms` }}>
            <span className="stats__number">{s.number}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
