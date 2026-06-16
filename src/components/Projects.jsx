import LivePreview from './LivePreview.jsx';

function Project({ t, p, reverse }) {
  const text = (
    <div className="project-text">
      <div className="project-meta">
        <span className="project-index">{p.idx}</span>
        <span className="chip">{p.tag}</span>
      </div>
      <h3 className="project-title">{p.name}</h3>
      <p className="project-tagline">{p.tagline}</p>

      <div className="project-blocks">
        <div className="block">
          <div className="block-label">{t.labels.challenge}</div>
          <p>{p.challenge}</p>
        </div>
        <div className="block">
          <div className="block-label">{t.labels.built}</div>
          <p>{p.built}</p>
        </div>
      </div>

      <div className="value-block">
        <div className="block-label accent-label">{t.labels.value}</div>
        <div className="value-list">
          {p.values.map((v, i) => (
            <div className="value-item" key={i}>
              <span className="check">✓</span>
              {v}
            </div>
          ))}
        </div>
      </div>

      <div className="stack">
        {p.stack.map((s, i) => (
          <span className="stack-chip" key={i}>{s}</span>
        ))}
      </div>

      <a href={p.live} target="_blank" rel="noopener" className="live-btn">
        {t.labels.live} <span className="mono">↗</span>
      </a>
    </div>
  );

  const visual = (
    <div className="project-visual">
      <LivePreview url={p.live} label={p.url} />
    </div>
  );

  return (
    <article className={'project' + (reverse ? ' reverse' : '')}>
      {reverse ? <>{visual}{text}</> : <>{text}{visual}</>}
    </article>
  );
}

export default function Projects({ t }) {
  return (
    <section id="proyectos" className="container section">
      <div className="section-head">
        <div className="kicker-line">— {t.work.kicker}</div>
        <h2 className="h2">{t.work.title}</h2>
        <p className="lead">{t.work.sub}</p>
      </div>
      <div className="projects">
        {t.projects.map((p, i) => (
          <Project key={p.name} t={t} p={p} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
