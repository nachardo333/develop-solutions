// Todo el copy del sitio, bilingüe (ES / EN).
// Edita aquí los textos, proyectos y testimonios.
export const T = {
  es: {
    nav: { value: 'Valor', work: 'Proyectos', contact: 'Contacto', cta: 'Hablemos' },
    hero: {
      kicker: 'Desarrollador · Sistemas web a medida',
      ctaPrimary: 'Quiero más clientes',
      ctaSecondary: 'Ver proyectos',
      availability: 'Disponible para nuevos proyectos · Respuesta en 24h',
    },
    heroA: {
      pre: 'Convierto negocios locales en ',
      em: 'máquinas digitales',
      post: ' que venden solas.',
      sub: 'Soy desarrollador: resuelvo los problemas de tu negocio con sistemas web a medida. Menos llamadas perdidas, más clientes reservando y pagando online — las 24 horas.',
    },
    heroB: {
      pre: 'Tu negocio, ',
      em: 'funcionando online',
      post: ', mientras tú trabajas.',
      sub: 'Sistemas de reservas, pagos y captación de clientes hechos a medida. Tú atiendes; la web vende por ti.',
      cardTitle: 'Reserva confirmada',
      cardSub: 'sin una sola llamada',
    },
    value: {
      kicker: 'Por qué Develop Solutions',
      pre: 'No vendo tecnología. Resuelvo ',
      em: 'problemas de negocio',
      post: ' con sistemas web.',
      sub: 'Convierto los cuellos de botella de tu negocio en sistemas web que captan clientes y operan solos. Tú te enfocas en atender; el sistema trabaja por ti.',
    },
    pillars: [
      { n: '01', title: 'Más clientes, en automático', desc: 'Webs y sistemas que capturan leads, reservas y pagos las 24 horas, sin que tengas que estar pendiente del teléfono.' },
      { n: '02', title: 'Hecho a tu medida', desc: 'Nada de plantillas genéricas. Construyo la herramienta exacta que tu negocio necesita para crecer.' },
      { n: '03', title: 'Perfecto en el celular', desc: 'Veloz e impecable en cualquier pantalla, justo donde tus clientes realmente te buscan.' },
      { n: '04', title: 'Comunicación directa contigo', desc: 'Hablas directo con quien construye tu sistema, en tu idioma. Un socio técnico, no un ticket de soporte.' },
    ],
    work: {
      kicker: 'Proyectos',
      title: 'Resultados que un dueño de negocio entiende.',
      sub: 'No te muestro tecnicismos. Te muestro el problema que resolví y lo que tu negocio gana con ello.',
    },
    labels: { challenge: 'El reto', built: 'Lo que construí', value: 'El valor para el negocio', live: 'Ver sitio en vivo' },
    projects: [
      {
        idx: '01', tag: 'Reservas deportivas', name: 'CanchAPP',
        tagline: 'Sistema de gestión y reservas para centros deportivos (fútbol / pádel).',
        url: 'canchapp-web.vercel.app', live: 'https://canchapp-web.vercel.app',
        challenge: 'Gestionar reservas por WhatsApp y cuaderno es un caos: dobles reservas, canchas vacías y horas perdidas contestando mensajes.',
        built: 'Una plataforma donde los clientes ven la disponibilidad en tiempo real y reservan solos, mientras el dueño controla todo desde un panel central.',
        values: ['Agenda llena sin contestar llamadas', 'Cero dobles reservas', 'Pagos confirmados al instante'],
        stack: ['Reservas online', 'Panel de control', 'Pagos integrados', 'Disponibilidad en tiempo real'],
      },
      {
        idx: '02', tag: 'Servicios técnicos', name: 'Fast Garage Doors',
        tagline: 'Landing page de alta conversión para servicios técnicos.',
        url: 'fast-garage-doors-opcion1.vercel.app', live: 'https://fast-garage-doors-opcion1.vercel.app',
        challenge: 'El negocio dependía del boca a boca y perdía llamadas: sin presencia online seria, los clientes elegían al competidor que sí aparecía.',
        built: 'Una landing rápida y mobile-first diseñada para una sola cosa: convertir la visita en una llamada o solicitud de presupuesto.',
        values: ['Más solicitudes de presupuesto', 'Imagen profesional que genera confianza', 'Lista para Google y anuncios'],
        stack: ['Landing de alta conversión', 'Mobile-first', 'Captación de leads', 'Listo para anuncios'],
      },
    ],
    testi: {
      kicker: 'Testimonios', title: 'Lo que dicen los dueños de negocio.', note: 'Ejemplos — reemplázalos con reseñas reales',
      items: [
        { quote: 'Antes vivía contestando WhatsApp para cuadrar reservas. Ahora el sistema lo hace solo y mi cancha está siempre llena.', name: '[ Nombre del cliente ]', role: 'Dueño, Centro deportivo' },
        { quote: 'La web nueva se ve profesional y por fin recibo solicitudes desde el celular. Cambió mi forma de conseguir trabajos.', name: '[ Nombre del cliente ]', role: 'Dueño, Servicios técnicos' },
        { quote: 'Entendió mi negocio sin que yo supiera nada de tecnología. Me entregó algo que de verdad uso todos los días.', name: '[ Nombre del cliente ]', role: 'Dueña, Negocio local' },
      ],
    },
    contact: {
      kicker: 'Contacto', title: '¿Listo para digitalizar tu negocio?',
      sub: 'Cuéntame qué necesitas. Te respondo en menos de 24 horas con una propuesta clara, sin tecnicismos.',
      info: ['Trabajo 100% online, con clientes de cualquier ciudad', 'Respuesta en menos de 24 horas', 'Hablamos español & English'],
    },
    form: {
      name: 'Nombre', business: 'Negocio', email: 'Email', phone: 'Teléfono', message: '¿Qué necesitas?',
      messagePh: 'Ej: quiero una web para captar más clientes, o un sistema de reservas…',
      submit: 'Enviar mensaje', sentTitle: '¡Mensaje recibido!', sentMsg: 'Gracias. Te responderé en menos de 24 horas con los próximos pasos.',
    },
    footer: { line: '© 2026 Develop Solutions' },
    switcher: 'HERO',
  },

  en: {
    nav: { value: 'Value', work: 'Work', contact: 'Contact', cta: "Let's talk" },
    hero: {
      kicker: 'Developer · Custom web systems',
      ctaPrimary: 'Get more clients',
      ctaSecondary: 'View work',
      availability: 'Available for new projects · 24h response',
    },
    heroA: {
      pre: 'I turn local businesses into ',
      em: 'digital machines',
      post: ' that sell on their own.',
      sub: "I'm a developer: I solve your business problems with custom web systems. Fewer missed calls, more customers booking and paying online — around the clock.",
    },
    heroB: {
      pre: 'Your business, ',
      em: 'running online',
      post: ', while you work.',
      sub: 'Custom booking, payment and lead-capture systems. You handle the work; the website sells for you.',
      cardTitle: 'Booking confirmed',
      cardSub: 'without a single call',
    },
    value: {
      kicker: 'Why Develop Solutions',
      pre: "I don't sell tech. I solve ",
      em: 'business problems',
      post: ' with web systems.',
      sub: 'I turn your business bottlenecks into web systems that capture customers and run on their own. You focus on serving; the system works for you.',
    },
    pillars: [
      { n: '01', title: 'More clients, on autopilot', desc: 'Websites and systems that capture leads, bookings and payments 24/7, so you never have to babysit the phone.' },
      { n: '02', title: 'Built for you', desc: 'No generic templates. I build the exact tool your business needs to grow.' },
      { n: '03', title: 'Flawless on mobile', desc: 'Fast and perfect on any screen — right where your customers actually look for you.' },
      { n: '04', title: 'Talk straight to your developer', desc: 'You speak directly with the person building your system, in your language. A technical partner, not a support ticket.' },
    ],
    work: {
      kicker: 'Work',
      title: 'Results a business owner can understand.',
      sub: "I don't show you technical jargon. I show you the problem I solved and what your business gains from it.",
    },
    labels: { challenge: 'The challenge', built: 'What I built', value: 'The business value', live: 'View live site' },
    projects: [
      {
        idx: '01', tag: 'Sports booking', name: 'CanchAPP',
        tagline: 'Management & booking system for sports centers (soccer / padel).',
        url: 'canchapp-web.vercel.app', live: 'https://canchapp-web.vercel.app',
        challenge: 'Managing bookings over WhatsApp and a notebook is chaos: double bookings, empty courts and hours lost replying to messages.',
        built: 'A platform where customers see real-time availability and book themselves, while the owner controls everything from one central dashboard.',
        values: ['Full schedule without answering calls', 'Zero double bookings', 'Payments confirmed instantly'],
        stack: ['Online booking', 'Control panel', 'Integrated payments', 'Real-time availability'],
      },
      {
        idx: '02', tag: 'Technical services', name: 'Fast Garage Doors',
        tagline: 'High-converting landing page for technical services.',
        url: 'fast-garage-doors-opcion1.vercel.app', live: 'https://fast-garage-doors-opcion1.vercel.app',
        challenge: 'The business relied on word of mouth and lost calls: without a serious online presence, customers picked the competitor who showed up.',
        built: 'A fast, mobile-first landing page built for one thing: turning a visit into a call or a quote request.',
        values: ['More quote requests', 'A professional image that builds trust', 'Ready for Google and ads'],
        stack: ['High-converting landing', 'Mobile-first', 'Lead capture', 'Ad-ready'],
      },
    ],
    testi: {
      kicker: 'Testimonials', title: 'What business owners say.', note: 'Examples — replace with real reviews',
      items: [
        { quote: 'I used to live answering WhatsApp to juggle bookings. Now the system does it on its own and my court is always full.', name: '[ Client name ]', role: 'Owner, Sports center' },
        { quote: 'The new site looks professional and I finally get requests from my phone. It changed how I land jobs.', name: '[ Client name ]', role: 'Owner, Technical services' },
        { quote: 'He understood my business without me knowing anything about tech. He delivered something I actually use every day.', name: '[ Client name ]', role: 'Owner, Local business' },
      ],
    },
    contact: {
      kicker: 'Contact', title: 'Ready to digitize your business?',
      sub: 'Tell me what you need. I reply in under 24 hours with a clear proposal — no jargon.',
      info: ['Fully online — I work with clients anywhere', 'Reply in under 24 hours', 'We speak Spanish & English'],
    },
    form: {
      name: 'Name', business: 'Business', email: 'Email', phone: 'Phone', message: 'What do you need?',
      messagePh: 'e.g. I want a website to get more clients, or a booking system…',
      submit: 'Send message', sentTitle: 'Message received!', sentMsg: "Thanks. I'll get back to you within 24 hours with next steps.",
    },
    footer: { line: '© 2026 Develop Solutions' },
    switcher: 'HERO',
  },
};
