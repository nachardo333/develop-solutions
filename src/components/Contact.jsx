import { useState } from 'react';

const ICONS = ['◎', '↺', '⌘'];

export default function Contact({ t }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: conecta esto a tu email/Formspree/Backend.
    // Por ahora solo muestra el estado de éxito.
    setSent(true);
  };

  return (
    <section id="contacto" className="contact">
      <div className="contact-glow" />
      <div className="container contact-grid">
        <div>
          <div className="kicker-line">— {t.contact.kicker}</div>
          <h2 className="h2">{t.contact.title}</h2>
          <p className="lead contact-sub">{t.contact.sub}</p>
          <div className="contact-info">
            {t.contact.info.map((line, i) => (
              <div className="contact-info-row" key={i}>
                <span className="contact-icon">{ICONS[i]}</span>
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="form-card">
          {!sent ? (
            <form className="form" onSubmit={onSubmit}>
              <div className="form-row">
                <label className="field">
                  <span>{t.form.name}</span>
                  <input type="text" required />
                </label>
                <label className="field">
                  <span>{t.form.business}</span>
                  <input type="text" />
                </label>
              </div>
              <div className="form-row">
                <label className="field">
                  <span>{t.form.email}</span>
                  <input type="email" required />
                </label>
                <label className="field">
                  <span>{t.form.phone}</span>
                  <input type="tel" />
                </label>
              </div>
              <label className="field">
                <span>{t.form.message}</span>
                <textarea rows={4} required placeholder={t.form.messagePh} />
              </label>
              <button type="submit" className="form-submit">{t.form.submit} →</button>
            </form>
          ) : (
            <div className="form-success">
              <div className="success-check">✓</div>
              <h3>{t.form.sentTitle}</h3>
              <p>{t.form.sentMsg}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
