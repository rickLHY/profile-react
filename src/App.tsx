import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { useTranslation } from 'react-i18next';
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
