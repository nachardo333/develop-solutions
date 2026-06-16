import { useState } from 'react';
import { T } from './data/content.js';
import Navbar from './components/Navbar.jsx';
import { Hero, HeroSplit } from './components/Hero.jsx';
import ValueProps from './components/ValueProps.jsx';
import Projects from './components/Projects.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import HeroSwitcher from './components/HeroSwitcher.jsx';

export default function App() {
  const [lang, setLang] = useState('es');
  const [variant, setVariant] = useState(1);
  const t = T[lang];

  return (
    <div className="root" id="top">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <header>
        {variant === 1 ? <Hero t={t} /> : <HeroSplit t={t} />}
      </header>
      <ValueProps t={t} />
      <Projects t={t} />
      <Testimonials t={t} />
      <Contact t={t} />
      <Footer t={t} />
      <HeroSwitcher t={t} variant={variant} setVariant={setVariant} />
    </div>
  );
}
