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
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync theme with HTML data-theme attribute and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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
      {/* Skip to Main Content Link for Keyboard Navigation (WCAG) */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
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
    </>
  );
}
