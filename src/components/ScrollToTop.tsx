import './ScrollToTop.css';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="scroll-to-top">
      <button onClick={scrollToTop} className={top ? 'block' : 'hidden'}>
        <i className="fi fi-rr-arrow-small-up"></i>
      </button>
    </div>
  );
}
