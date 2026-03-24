import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Navbar from './components/Navbar';
import DonutFrame from './components/DonutFrame';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <DonutFrame />
      <AboutMe />
      <Projects />
      <Contact />
      <ScrollToTop />
      <footer>
        <p>{t('footer.rights')}</p>
        <a
          href="https://github.com/rickLHY/profile-react"
          target="_blank"
          rel="noreferrer"
          id="footer-github"
        >
          <GitHubLogoIcon width={20} height={20} />
        </a>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
