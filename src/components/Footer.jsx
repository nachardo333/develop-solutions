export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <span className="brand-logo small">D</span>
          <span className="brand-name">Develop Solutions</span>
        </div>
        <div className="footer-line">{t.footer.line}</div>
      </div>
    </footer>
  );
}
