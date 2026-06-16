export default function HeroSwitcher({ t, variant, setVariant }) {
  return (
    <div className="hero-switcher">
      <span className="switcher-label">{t.switcher}</span>
      <div className="switcher-pills">
        <button
          className={'switcher-btn' + (variant === 1 ? ' active' : '')}
          onClick={() => setVariant(1)}
        >
          01
        </button>
        <button
          className={'switcher-btn' + (variant === 2 ? ' active' : '')}
          onClick={() => setVariant(2)}
        >
          02
        </button>
      </div>
    </div>
  );
}
