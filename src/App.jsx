import { useEffect, useRef, useState } from 'react';

const whatsapp = 'https://wa.me/34667799023?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20entrenamientos%20y%20la%20preparaci%C3%B3n%20f%C3%ADsica.';

const dossiers = [
  { n: '01', title: 'Formación académica superior', label: 'Universidad · Dirección · Educación', groups: [
    ['Licenciado en Educación Física', 'Universidad de Granada'],
    ['Máster en Dirección de Entidades Deportivas', 'Universidad de Estudios del Deporte de Barcelona'],
    ['Máster en Dirección y Organización de Eventos Deportivos', 'Universidad del Deporte de Barcelona'],
    ['Máster de Educación', 'Universidad de Granada'],
    ['Miembro del Comité de Expertos COLEF Andalucía', 'Base de Expertos de la Junta de Andalucía']
  ]},
  { n: '02', title: 'Preparación física de élite', label: 'Competición · Rendimiento · Técnica', groups: [
    ['Selección Andaluza de Karate Senior Masculina', 'Preparador físico oficial'],
    ['Jugadores profesionales de golf', 'Real Club de Golf'],
    ['Danza y ballet profesional', 'Escuela de Danza de Sevilla'],
    ['Escuela Taurina de Gerena', 'Acondicionamiento físico específico'],
    ['Seguridad y escoltas', 'Ministerio del Interior · Presidencia · IESPA']
  ]},
  { n: '03', title: 'Acreditaciones institucionales', label: 'Docencia · Seguridad · Tribunales', groups: [
    ['Docencia en Seguridad y Centros de Adiestramiento', 'Acreditado por el Director General de la Policía'],
    ['Escuela de Seguridad Pública de Andalucía (ESPA)', 'Docente en Defensa Personal y Preparación Física'],
    ['Asesor en Tribunal de Oposiciones a Bomberos', 'Ayuntamiento de Chiclana · Colegio de Licenciados de Educación Física'],
    ['Docencia en Formación Profesional y Centros de Profesorado', 'Monitores Deportivos, Consejería de Empleo · Acrosport Avanzado, CEP']
  ]},
  { n: '04', title: 'Salud, readaptación y prevención', label: 'Hospital · Recuperación · Prevención', groups: [
    ['Prescripción de ejercicio en hospitales', 'Educador Deportivo · Escuela Andaluza de Salud Pública / Consejería de Salud'],
    ['Readaptador de bipedestación en UCI Oncológica', 'Hospital Universitario Virgen del Rocío'],
    ['Readaptación psicomotriz en enfermos neurológicos', 'Programas especializados de recuperación funcional'],
    ['Monitor de Psicomotricidad', 'Parálisis flácida y prematuros · estimulación temprana y desarrollo psicomotor'],
    ['Prevención lesional', 'Especialista en prevención de lesiones de rodilla, codo y hombro'],
    ['Soporte vital y prevención', 'Soporte Vital Básico, Instrumentalizado y DESA · Prevención de Riesgos Laborales']
  ]},
  { n: '05', title: 'Titulaciones federativas', label: 'Voleibol · Natación · Artes marciales', groups: [
    ['Entrenador Nacional de Voleibol', 'Habilitación Oficial Internacional'],
    ['Entrenador Nacional de Natación', 'Real Federación Española de Natación · Club Natación Sevilla'],
    ['Jornadas Técnicas de Fuerza y Planificación', 'Escuela Nacional de Entrenadores de Natación'],
    ['Outdoor Environmental Education', 'Comenius In Service Training Course · Chequia'],
    ['Cinturón Negro 2º Dan de Karate', 'Federación Española de Karate (FEK)'],
    ['7º Khan y Árbitro Nacional de Muay Thai', 'Federación Española de Boxeo (FEB) · Federación Internacional de Muay Thai (FIMT)'],
    ['Docente de Fisiología del Ejercicio y Anatomía', 'Federación Andaluza de Gimnasia Artística Deportiva · Departamento de Aeróbic']
  ]},
  { n: '06', title: 'Dirección técnica y eventos', label: 'Gestión · Instalaciones · Organización', groups: [
    ['Watervoley', 'Creador, Director Técnico y Organizador · Campeonato de España de Watervoley (Larios)'],
    ['Campeonatos de vóley playa y fútbol', 'Director Técnico del Campeonato Nacional Femenino (OB) · Coordinador Nacional de Fútbol Larios · Coordinador General del 1er Campeonato Andaluz'],
    ['Competiciones mundiales y universitarias', 'Equipo estadístico del Campeonato del Mundo de Voleibol Femenino y Vóley Playa · Delegado del Campeonato Andaluz Universitario'],
    ['Gestión de centros e instalaciones', 'Director de Instalaciones y Coordinador de Eventos · Real Club de Golf'],
    ['Coordinación pública y profesional', 'Actividades Acuáticas del Ayuntamiento de El Viso del Alcor · Escuelas Deportivas Municipales de Sevilla · Comité Organizador del I Congreso COLEF Andalucía']
  ]}
];

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5"/></svg>;
}

function WhatsAppMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0 11.9 11.9 0 0 0 1.8 17.8L.1 24l6.4-1.7a12 12 0 0 0 5.6 1.4h.1A11.8 11.8 0 0 0 24 11.9c0-3.2-1.3-6.2-3.5-8.4Zm-8.3 18.2h-.1c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4A9.8 9.8 0 1 1 22 11.9a9.8 9.8 0 0 1-9.8 9.8Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 8.9 8.9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.8c.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.4.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z"/></svg>;
}

function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }}>{children}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className={`topbar ${open ? 'menu-open' : ''}`}>
    <a className="brand" href="#inicio" onClick={() => setOpen(false)} aria-label="Inicio">rmeb<span>.</span></a>
    <nav aria-label="Navegación principal">
      <a href="#perfil" onClick={() => setOpen(false)}>Perfil</a>
      <a href="#areas" onClick={() => setOpen(false)}>Áreas</a>
      <a href="#trayectoria" onClick={() => setOpen(false)}>Trayectoria</a>
    </nav>
    <a className="nav-contact" href={whatsapp} target="_blank" rel="noreferrer"><span>Contacto</span><Arrow /></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menú"><i/><i/></button>
  </header>;
}

function Dossier({ item, open, onToggle }) {
  return <article className={`dossier ${open ? 'is-open' : ''}`}>
    <button className="dossier-trigger" onClick={onToggle} aria-expanded={open}>
      <span className="dossier-number">{item.n}</span>
      <span className="dossier-name"><b>{item.title}</b><small>{item.label}</small></span>
      <span className="dossier-action">{open ? '−' : '+'}</span>
    </button>
    <div className="dossier-clip"><div className="dossier-content">
      {item.groups.map(([title, detail]) => <div className="credential" key={title}><strong>{title}</strong><span>{detail}</span></div>)}
    </div></div>
  </article>;
}

function FlipCard({ number, image, alt, eyebrow, title, text, link }) {
  const [flipped, setFlipped] = useState(false);
  return <article className={`flip-card ${flipped ? 'is-flipped' : ''}`}>
    <button className="flip-card-inner" onClick={() => setFlipped(!flipped)} aria-pressed={flipped} aria-label={`${flipped ? 'Cerrar' : 'Abrir'} ${title}`}>
      <span className="flip-face flip-front">
        <img src={image} alt={alt}/><span className="flip-shade"/><span className="flip-number">{number}</span>
        <span className="flip-front-copy"><small>{eyebrow}</small><strong>{title}</strong><i>{flipped ? 'Cerrar' : 'Tocar para descubrir'} <b>↗</b></i></span>
      </span>
      <span className="flip-face flip-back">
        <span className="flip-number">{number}</span><small>{eyebrow}</small><strong>{title}</strong><span className="flip-text">{text}</span><span className="flip-link">{link} <b>→</b></span>
      </span>
    </button>
  </article>;
}

export function App() {
  const [openDossier, setOpenDossier] = useState(0);
  const root = useRef(null);

  useEffect(() => {
    const progress = document.querySelector('.scroll-progress');
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress?.style.setProperty('--progress', `${max ? (scrollY / max) * 100 : 0}%`);
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    root.current?.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  return <main ref={root}>
    <div className="scroll-progress" aria-hidden="true" />
    <Header />

    <section className="hero" id="inicio">
      <div className="hero-media" aria-hidden="true"><img src="/assets/rafael-playa.jpg" alt="" /></div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy">
        <p className="overline hero-overline">Preparación física · Salud · Readaptación</p>
        <h1><span>Rafael</span><span>Montero</span><span className="hero-last"><em>de</em><em>Espinosa</em></span></h1>
        <p className="hero-role">Licenciado en Educación Física<br/>Director y preparador físico</p>
        <a className="button button-copper" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppMark/><span>Conocer los entrenamientos</span><Arrow /></a>
      </div>
      <div className="hero-rail"><span>COLEF Andalucía</span><i/><span>Alto rendimiento</span><i/><span>Ámbito sanitario</span></div>
      <a className="scroll-cue" href="#perfil"><span>Descubrir</span><i/></a>
    </section>

    <div className="marquee" aria-hidden="true"><div><span>Fisiología del esfuerzo</span><b>•</b><span>Biomecánica</span><b>•</b><span>Alto rendimiento</span><b>•</b><span>Readaptación física</span><b>•</b><span>Dirección deportiva</span><b>•</b><span>Fisiología del esfuerzo</span><b>•</b><span>Biomecánica</span><b>•</b><span>Alto rendimiento</span><b>•</b><span>Readaptación física</span><b>•</b><span>Dirección deportiva</span><b>•</b></div></div>

    <section className="profile" id="perfil">
      <div className="profile-title">
        <Reveal><p className="overline dark">01 / Perfil profesional</p></Reveal>
        <Reveal delay={80}><h2>Perfil<br/><em>profesional.</em></h2></Reveal>
      </div>
      <Reveal className="profile-photo" delay={120}><img src="/assets/rafael-retrato.jpg" alt="Retrato de Rafael Montero de Espinosa"/><span>Rafael Montero de Espinosa Barroso</span></Reveal>
      <div className="profile-copy">
        <Reveal delay={100}><p className="lead">Profesional del deporte con titulación superior universitaria y una trayectoria multidisciplinar.</p></Reveal>
        <Reveal delay={170}><p>Integra el alto rendimiento competitivo, la dirección de instalaciones y eventos deportivos, y la readaptación física y prescripción del ejercicio en el ámbito sanitario.</p></Reveal>
        <Reveal delay={240}><p>Su enfoque combina el rigor científico de la fisiología del esfuerzo y la biomecánica con una contrastada capacidad organizativa: desde selecciones autonómicas y deportistas profesionales hasta programas de salud clínica especializada y cuerpos docentes de seguridad.</p></Reveal>
        <Reveal className="profile-facts" delay={300}><div><strong>3</strong><span>Másteres universitarios</span></div><div><strong>COLEF</strong><span>Comité de expertos</span></div><div><strong>360º</strong><span>Deporte, salud y gestión</span></div></Reveal>
      </div>
    </section>

    <section className="practice" id="areas">
      <div className="practice-head">
        <Reveal><p className="overline">02 / Áreas de trabajo</p></Reveal>
        <Reveal delay={100}><h2>Rendimiento.<br/>Salud. Dirección.</h2></Reveal>
        <Reveal delay={180}><p>Alto rendimiento, ejercicio en el ámbito sanitario y dirección deportiva.</p></Reveal>
      </div>

      <div className="practice-stories" aria-label="Áreas de trabajo">
        <FlipCard number="01" image="/assets/training-atmosphere.png" alt="Material de entrenamiento en un espacio de preparación física" eyebrow="Rendimiento" title="Preparación física de élite" text="Trabajo específico para competición y práctica profesional: karate, golf, natación, voleibol, danza, seguridad y artes marciales." link="Ver experiencia" />
        <FlipCard number="02" image="/assets/health-atmosphere.png" alt="Espacio profesional para readaptación y ejercicio terapéutico" eyebrow="Salud" title="Readaptación y prevención" text="Prescripción del ejercicio, recuperación funcional y prevención lesional en contextos hospitalarios y programas especializados." link="Ver acreditaciones" />
        <FlipCard number="03" image="/assets/rafael-playa.jpg" alt="Rafael Montero de Espinosa junto al mar" eyebrow="Dirección" title="Gestión, eventos y docencia" text="Dirección de instalaciones, organización técnica de competiciones y formación para entidades públicas y profesionales." link="Consultar trayectoria" />
      </div>
    </section>

    <section className="career" id="trayectoria">
      <div className="career-intro">
        <Reveal><p className="overline">03 / Trayectoria completa</p></Reveal>
        <Reveal delay={80}><h2>Formación y<br/><em>experiencia.</em></h2></Reveal>
      </div>
      <div className="dossiers">
        {dossiers.map((item, index) => <Dossier key={item.n} item={item} open={index === openDossier} onToggle={() => setOpenDossier(index === openDossier ? -1 : index)} />)}
      </div>
    </section>

    <footer className="site-footer" id="contacto">
      <img src="/assets/closing-horizon.png" alt="Paisaje mediterráneo al atardecer" />
      <div className="footer-shade" />
      <div className="footer-main">
        <Reveal className="footer-message"><p className="overline dark">04 / Contacto directo</p><h2>La experiencia<br/>también es fuerza.</h2><p>Información sobre entrenamientos, preparación física, salud y readaptación.</p></Reveal>
        <Reveal className="footer-action" delay={120}><a className="button button-copper footer-button" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppMark/><span>Escribir por WhatsApp</span><Arrow /></a><a className="phone" href="tel:+34667799023">+34 667 799 023</a></Reveal>
      </div>
      <div className="footer-bottom"><a className="brand footer-brand" href="#inicio">rmeb<span>.</span></a><p>Rafael Montero de Espinosa Barroso</p><p>Preparación física · Salud · Readaptación</p><a href="#inicio">Volver arriba ↑</a></div>
    </footer>
    <a className="mobile-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><WhatsAppMark/><span>WhatsApp</span></a>
  </main>;
}
