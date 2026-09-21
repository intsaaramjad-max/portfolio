import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);

  useEffect(() => {
    document.body.classList.add('loading');

    const exitTimer = window.setTimeout(() => {
      setIsLoaderExiting(true);
    }, 1500);

    const removeTimer = window.setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 2100);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove('loading');
    };
  }, []);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'sunset';
  });

  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-mode');
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('portfolio-theme', theme);
    localStorage.setItem('portfolio-mode', mode);
  }, [theme, mode]);

  // Manage the active tab / view state
  const [activeTab, setActiveTab] = useState('hero');

  // Hook to handle entry animations whenever tab changes
  useScrollReveal(activeTab);

  // Helper to render only the selected page section
  const renderSection = () => {
    switch (activeTab) {
      case 'hero':
        return <Hero setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      {isLoading && (
        <div id="preloader" className={isLoaderExiting ? 'is-exiting' : ''} aria-hidden="true">
          <div className="loader-stage">
            <div className="loader-blob"></div>
            <svg className="loader-avatar loader-bounce" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="90" r="52" fill="#FFD8B8" />
              <path d="M50 78 C50 44 150 44 150 78 C150 58 135 50 100 50 C65 50 50 58 50 78 Z" fill="#3a2e4a" />
              <rect x="76" y="86" width="10" height="10" rx="5" fill="#2b2438" />
              <rect x="114" y="86" width="10" height="10" rx="5" fill="#2b2438" />
              <path d="M84 108 Q100 120 116 108" stroke="#2b2438" strokeWidth="4" fill="none" strokeLinecap="round" />
              <g stroke="#2b2438" strokeWidth="3" fill="none">
                <circle cx="81" cy="91" r="13" />
                <circle cx="119" cy="91" r="13" />
                <line x1="94" y1="90" x2="106" y2="90" />
              </g>
              <rect x="70" y="150" width="60" height="44" rx="18" fill="var(--clr-accent)" />
            </svg>
          </div>
          <div className="loader-text">
            Booting up the portfolio
            <span className="loader-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className="loader-bar">
            <div className="loader-bar-fill" id="loaderBarFill"></div>
          </div>
        </div>
      )}

      <div className="app-content">
          {/* Skip to Main Content Link for Keyboard Navigation (WCAG) */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          {/* Navigation Header */}
          <Header
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            theme={theme}
            setTheme={setTheme}
            mode={mode}
            toggleTheme={toggleTheme}
          />

          {/* Main Content Wrapper */}
          <main id="main-content" tabIndex="-1">
            {renderSection()}
          </main>

          {/* Footer */}
          <Footer setActiveTab={setActiveTab} />

          {/* Scroll to Top Trigger */}
          <ScrollToTop />
      </div>
    </>
  );
}
