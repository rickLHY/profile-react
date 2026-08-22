import './App.css';
import { useTranslation } from 'react-i18next';
import { GitHubLogoIcon, EnvelopeClosedIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const projects = [
  {
    title: 'Taiwan HSR Booking System',
    labelKey: 'projects.hsrLabel',
    descriptionKey: 'projects.hsrDescription',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT / OAuth'],
    demo: 'https://final-project-frontend-bu6q.vercel.app',
    source: 'https://github.com/rickLHY/final-project-frontend',
    featured: true,
  },
  {
    title: 'Margin Call Simulator',
    labelKey: 'projects.marginLabel',
    descriptionKey: 'projects.marginDescription',
    tags: ['React', 'TypeScript', 'Data Visualization', 'Gemini TTS'],
    demo: 'https://multimedia-final-project.vercel.app',
    source: 'https://github.com/rickLHY/multimedia-final-project',
  },
  {
    title: 'Interleaving Pomodoro',
    labelKey: 'projects.pomodoroLabel',
    descriptionKey: 'projects.pomodoroDescription',
    tags: ['React', 'TypeScript', 'RWD', 'i18n'],
    demo: 'https://interleaving-pomodoro.vercel.app',
    source: 'https://github.com/rickLHY/interleaving-pomodoro',
  },
];

function AppContent() {
  const { t, i18n } = useTranslation();
  const { theme, cycleTheme } = useTheme();
  const isEnglish = i18n.language === 'en';
  const navItems = [
    ['services', t('nav.services')],
    ['work', t('nav.work')],
    ['skills', t('nav.skills')],
    ['contact', t('nav.contact')],
  ];
  const services = [
    ['01', t('services.websiteTitle'), t('services.websiteDescription')],
    ['02', t('services.systemTitle'), t('services.systemDescription')],
    ['03', t('services.integrationTitle'), t('services.integrationDescription')],
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">HL</span>
          <span>Hong-You Liao</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          <button
            className="text-button"
            onClick={() => i18n.changeLanguage(isEnglish ? 'zh' : 'en')}
          >
            {isEnglish ? '中' : 'EN'}
          </button>
          <button className="text-button" onClick={cycleTheme} aria-label={`Theme: ${theme}`}>
            {theme === 'dark' ? '☾' : theme === 'light' ? '☀' : '◐'}
          </button>
        </div>
      </header>
      <main id="top">
        <section className="hero section-wrap">
          <div className="availability">
            <span />
            {t('hero.availability')}
          </div>
          <p className="eyebrow">REACT · TYPESCRIPT · FULL-STACK</p>
          <h1>
            {t('hero.title')}
            <em>{t('hero.highlight')}</em>
          </h1>
          <p className="hero-copy">{t('hero.description')}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              {t('hero.cta')}
            </a>
            <a className="button secondary" href="#work">
              {t('hero.secondary')}
            </a>
          </div>
          <div className="portrait-stage">
            <span className="portrait-shape portrait-triangle" aria-hidden="true" />
            <span className="portrait-shape portrait-circle" aria-hidden="true" />
            <figure className="portrait-card">
              <div className="portrait-window">
                <img src={`${import.meta.env.BASE_URL}profile-photo.webp`} alt="Hong-You Liao" />
              </div>
              <figcaption>
                <strong>HONG-YOU LIAO</strong>
                <span>WEB · SYSTEM · INTERACTION</span>
              </figcaption>
            </figure>
            <svg className="portrait-line" viewBox="0 0 320 160" aria-hidden="true">
              <path d="M4 139 C57 130 81 53 131 73 S205 143 245 82 S293 35 316 23" />
            </svg>
          </div>
          <div className="proof-row">
            <div>
              <strong>Frontend</strong>
              <span>React · TypeScript · RWD</span>
            </div>
            <div>
              <strong>Backend</strong>
              <span>FastAPI · REST API · Auth</span>
            </div>
            <div>
              <strong>Database</strong>
              <span>PostgreSQL · SQLAlchemy</span>
            </div>
          </div>
        </section>
        <section id="services" className="section-wrap section-block">
          <div className="section-heading">
            <p className="eyebrow">01 / SERVICES</p>
            <h2>{t('services.title')}</h2>
          </div>
          <div className="service-grid">
            {services.map(([number, title, description]) => (
              <article className="service-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="work" className="section-wrap section-block">
          <div className="section-heading">
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>{t('projects.title')}</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project-card ${project.featured ? 'featured' : ''}`}
                key={project.title}
              >
                <div className="project-topline">
                  <span>{t(project.labelKey)}</span>
                  {project.featured && <b>{t('projects.featured')}</b>}
                </div>
                <h3>{project.title}</h3>
                <p>{t(project.descriptionKey)}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    {t('projects.liveDemo')} <ExternalLinkIcon />
                  </a>
                  <a href={project.source} target="_blank" rel="noreferrer">
                    GitHub <GitHubLogoIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="skills" className="section-wrap section-block skills-section">
          <div className="section-heading">
            <p className="eyebrow">03 / CAPABILITIES</p>
            <h2>{t('skills.title')}</h2>
          </div>
          <div className="skills-grid">
            <div>
              <h3>Frontend</h3>
              <p>React, TypeScript, Vite, HTML, CSS, Responsive Web Design, i18n</p>
            </div>
            <div>
              <h3>Backend & Data</h3>
              <p>Python, FastAPI, REST API, PostgreSQL, SQLAlchemy, JWT, OAuth</p>
            </div>
            <div>
              <h3>Delivery</h3>
              <p>Git, GitHub, Vercel, API integration, testing, documentation</p>
            </div>
          </div>
        </section>
        <section className="section-wrap section-block process-section">
          <div className="section-heading">
            <p className="eyebrow">04 / PROCESS</p>
            <h2>{t('process.title')}</h2>
          </div>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>{t('process.scopeTitle')}</h3>
                <p>{t('process.scopeDescription')}</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>{t('process.buildTitle')}</h3>
                <p>{t('process.buildDescription')}</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>{t('process.deliverTitle')}</h3>
                <p>{t('process.deliverDescription')}</p>
              </div>
            </li>
          </ol>
        </section>
        <section id="contact" className="contact-section">
          <div className="section-wrap">
            <p className="eyebrow">05 / CONTACT</p>
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.description')}</p>
            <div className="hero-actions">
              <a className="button primary light" href="mailto:lhy.mg13@nycu.edu.tw">
                <EnvelopeClosedIcon /> lhy.mg13@nycu.edu.tw
              </a>
              <a
                className="button secondary light"
                href="https://github.com/rickLHY"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubLogoIcon /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 Hong-You Liao</span>
        <span>{t('footer.line')}</span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
