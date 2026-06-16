export default function Navbar({ t, lang, setLang }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-logo">D</span>
          <span className="brand-name">Develop Solutions</span>
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#valor">{t.nav.value}</a>
            <a href="#proyectos">{t.nav.work}</a>
            <a href="#contacto">{t.nav.contact}</a>
          </div>
          <div className="lang-toggle">
            <button
              className={'lang-btn' + (lang === 'es' ? ' active' : '')}
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <button
              className={'lang-btn' + (lang === 'en' ? ' active' : '')}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <a href="#contacto" className="nav-cta">{t.nav.cta}</a>
        </div>
      </div>
    </nav>
  );
}
