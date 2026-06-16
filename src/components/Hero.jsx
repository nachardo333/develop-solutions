import { useEffect, useRef } from 'react';
import LivePreview from './LivePreview.jsx';

// Floating glass orbs — positions, sizes, depth (parallax strength), tint and float anim.
const ORBS_BACK = [
  { left: '7%', top: '20%', size: 160, depth: 0.16, tint: 'e', anim: 'floatA' },
  { right: '9%', top: '16%', size: 110, depth: 0.3, tint: 't', anim: 'floatB' },
  { left: '15%', bottom: '14%', size: 130, depth: 0.22, tint: 'e', anim: 'floatC' },
  { right: '16%', bottom: '18%', size: 74, depth: 0.4, tint: 'e', anim: 'floatA' },
  { left: '30%', top: '10%', size: 56, depth: 0.12, tint: 't', anim: 'floatB' },
  { right: '30%', top: '62%', size: 48, depth: 0.34, tint: 'e', anim: 'floatC' },
];
const ORBS_FRONT = [
  { left: '4%', bottom: '8%', size: 92, depth: 0.6, tint: 'e', anim: 'floatB', blur: 3 },
  { right: '6%', top: '30%', size: 64, depth: 0.7, tint: 't', anim: 'floatA', blur: 3 },
];

function Orb({ o }) {
  const { size, depth, tint, anim, blur = 2, ...pos } = o;
  return (
    <div className="bubble" data-depth={depth} style={{ width: size, height: size, ...pos }}>
      <div className={`bubble-inner ${tint} ${anim}`} style={{ backdropFilter: `blur(${blur}px)` }} />
    </div>
  );
}

export function Hero({ t }) {
  const heroRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    let tick = false;

    const render = () => {
      const hH = hero.offsetHeight || 1;
      const sy = window.scrollY || 0;
      const prog = Math.min(1, sy / (hH * 0.85));
      const { x: mx, y: my } = mouse.current;
      hero.querySelectorAll('.bubble').forEach((b) => {
        const d = parseFloat(b.dataset.depth) || 0.2;
        const tx = mx * 46 * d;
        const ty = my * 46 * d - sy * d * 0.9;
        const sc = 1 + prog * (0.5 + d);
        b.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${sc})`;
        b.style.opacity = String(Math.max(0, 1 - prog * 1.15));
      });
    };

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      mouse.current = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 };
      render();
    };
    const onScroll = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => { tick = false; render(); });
    };

    render();
    hero.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      hero.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <div className="mesh mesh-1" />
      <div className="mesh mesh-2" />
      <div className="mesh mesh-3" />

      <div className="orb-layer back">
        {ORBS_BACK.map((o, i) => <Orb key={i} o={o} />)}
      </div>

      <div className="hero-content">
        <span className="kicker">
          <span className="kicker-dot" />
          {t.hero.kicker}
        </span>
        <h1 className="h1">
          {t.heroA.pre}
          <span className="grad">{t.heroA.em}</span>
          {t.heroA.post}
        </h1>
        <p className="lead hero-lead">{t.heroA.sub}</p>
        <div className="btn-row">
          <a href="#contacto" className="btn-primary">{t.hero.ctaPrimary} →</a>
          <a href="#proyectos" className="btn-ghost">{t.hero.ctaSecondary}</a>
        </div>
        <div className="availability">
          <span className="pulse-dot" />
          {t.hero.availability}
        </div>
      </div>

      <div className="orb-layer front">
        {ORBS_FRONT.map((o, i) => <Orb key={i} o={o} />)}
      </div>
    </div>
  );
}

export function HeroSplit({ t }) {
  return (
    <div className="container hero-split">
      <div>
        <span className="kicker">
          <span className="kicker-dot" />
          {t.hero.kicker}
        </span>
        <h1 className="h1 h1-left">
          {t.heroB.pre}
          <span className="grad">{t.heroB.em}</span>
          {t.heroB.post}
        </h1>
        <p className="lead">{t.heroB.sub}</p>
        <div className="btn-row">
          <a href="#contacto" className="btn-primary">{t.hero.ctaPrimary} →</a>
          <a href="#proyectos" className="btn-ghost">{t.hero.ctaSecondary}</a>
        </div>
        <div className="availability">
          <span className="pulse-dot" />
          {t.hero.availability}
        </div>
      </div>
      <div className="hero-split-visual">
        <LivePreview url={t.projects[0].live} label={t.projects[0].url} ratio="4 / 3" />
        <div className="floating-card">
          <span className="floating-card-icon">●</span>
          <div>
            <div className="floating-card-title">{t.heroB.cardTitle}</div>
            <div className="floating-card-sub">{t.heroB.cardSub}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
