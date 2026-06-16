import { useEffect, useRef } from 'react';

// Renders a live website inside a browser frame, scaled down like a desktop thumbnail.
export default function LivePreview({ url, label, ratio = '16 / 11' }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const iframe = el.querySelector('iframe');
    const fit = () => {
      const w = el.clientWidth;
      if (w > 0 && iframe) iframe.style.transform = `scale(${w / 1280})`;
    };
    fit();
    const id = setTimeout(fit, 300);
    window.addEventListener('resize', fit);
    return () => {
      window.removeEventListener('resize', fit);
      clearTimeout(id);
    };
  }, []);

  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="browser-url">{label}</span>
      </div>
      <div className="live-frame" ref={wrapRef} style={{ aspectRatio: ratio }}>
        <iframe src={url} title={label} loading="lazy" scrolling="no" tabIndex={-1} />
        <a className="live-overlay" href={url} target="_blank" rel="noopener" aria-label={label} />
      </div>
    </div>
  );
}
