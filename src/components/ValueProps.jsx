export default function ValueProps({ t }) {
  return (
    <section id="valor" className="container section">
      <div className="section-head">
        <div className="kicker-line">— {t.value.kicker}</div>
        <h2 className="h2">
          {t.value.pre}
          <span className="accent">{t.value.em}</span>
          {t.value.post}
        </h2>
        <p className="lead">{t.value.sub}</p>
      </div>
      <div className="pillars">
        {t.pillars.map((p) => (
          <div className="pillar" key={p.n}>
            <div className="pillar-n">{p.n}</div>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
