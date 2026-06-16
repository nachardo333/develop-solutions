function Avatar() {
  return (
    <span className="avatar" aria-hidden="true">
      <svg viewBox="0 0 40 40" width="40" height="40">
        <circle cx="20" cy="15" r="7" fill="rgba(255,255,255,.30)" />
        <path d="M7 36c0-7.2 5.8-13 13-13s13 5.8 13 13" fill="rgba(255,255,255,.30)" />
      </svg>
    </span>
  );
}

export default function Testimonials({ t }) {
  return (
    <section className="container section">
      <div className="testi-head">
        <div>
          <div className="kicker-line">— {t.testi.kicker}</div>
          <h2 className="h2">{t.testi.title}</h2>
        </div>
        <div className="testi-note">{t.testi.note}</div>
      </div>
      <div className="testi-grid">
        {t.testi.items.map((ti, i) => (
          <div className="testi-card" key={i}>
            <div className="quote-mark">&ldquo;</div>
            <p className="testi-quote">{ti.quote}</p>
            <div className="testi-author">
              <Avatar />
              <div>
                <div className="testi-name">{ti.name}</div>
                <div className="testi-role">{ti.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
