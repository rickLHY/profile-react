import './Navbar.css';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

type ThemeKey = 'light' | 'dark' | 'system';

const THEME_ICON: Record<ThemeKey, string> = { light: '☀', dark: '☾', system: '⊙' };
const THEME_LABEL: Record<ThemeKey, string> = { light: 'Light', dark: 'Dark', system: 'System' };

const PROJECTS = [{ title: 'Tetris', url: import.meta.env.VITE_PROJECT_TETRIS_URL }];

export default function Navbar() {
  const { theme, cycleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
      setMenuOpen(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav id="navbar" className={show ? 'visible' : 'hidden'}>
      <div id="navbar-left">
        <div id="logo">hy-Liao</div>
      </div>

      {/* Desktop */}
      <div id="navbar-right">
        <div onClick={() => scrollTo('about-me')}>{t('navbar.aboutMe')}</div>
        <div className="nav-dropdown" ref={dropdownRef}>
          <div className="nav-dropdown-trigger" onClick={() => setDropdownOpen((o) => !o)}>
            {t('navbar.myProject')}{' '}
            <span className="dropdown-arrow">{dropdownOpen ? '▲' : '▼'}</span>
          </div>
          {dropdownOpen && (
            <div className="nav-dropdown-menu">
              {PROJECTS.map((p) => (
                <a
                  key={p.title}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setDropdownOpen(false)}
                >
                  {p.title}
                </a>
              ))}
            </div>
          )}
        </div>
        <div onClick={() => scrollTo('contact')}>{t('navbar.contactMe')}</div>
        <button id="lang-toggle" onClick={toggleLang}>
          {i18n.language === 'en' ? '中文' : 'EN'}
        </button>
        <button id="theme-toggle" onClick={cycleTheme} title={`Theme: ${THEME_LABEL[theme]}`}>
          <span id="theme-icon">{THEME_ICON[theme]}</span>
          <span id="theme-label">{THEME_LABEL[theme]}</span>
        </button>
      </div>

      {/* Mobile */}
      <div id="navbar-mobile">
        <button id="lang-toggle" onClick={toggleLang}>
          {i18n.language === 'en' ? '中文' : 'EN'}
        </button>
        <button id="theme-toggle" onClick={cycleTheme} title={`Theme: ${THEME_LABEL[theme]}`}>
          <span id="theme-icon">{THEME_ICON[theme]}</span>
        </button>
        <button id="hamburger" onClick={() => setMenuOpen((o) => !o)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu">
          <div onClick={() => scrollTo('about-me')}>{t('navbar.aboutMe')}</div>
          <div>
            {t('navbar.myProject')}
            <div id="mobile-project-links">
              {PROJECTS.map((p) => (
                <a key={p.title} href={p.url} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
                  {p.title}
                </a>
              ))}
            </div>
          </div>
          <div onClick={() => scrollTo('contact')}>{t('navbar.contactMe')}</div>
        </div>
      )}
    </nav>
  );
}
