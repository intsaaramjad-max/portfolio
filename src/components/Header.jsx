import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ activeTab, setActiveTab, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Synchronize body overflow lock with menuOpen state
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        const menuToggleBtn = document.getElementById('menu-toggle');
        if (menuToggleBtn) menuToggleBtn.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (menuOpen) {
      setMenuOpen(false);
    }
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'instant' }); // Reset view scroll immediately on change
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <a
          href="#hero"
          className="logo"
          aria-label="Intsaar Amjad Home"
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          <span className="logo-accent">I</span>A
        </a>

        {/* Navigation Menu */}
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <ul className="nav-links" id="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                  onClick={(e) => handleLinkClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions: Theme Toggle and Mobile Menu Button */}
        <div className="header-actions">
          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            type="button"
            onClick={toggleTheme}
          >
            {/* Sun Icon (Visible in Dark Mode) */}
            <svg
              className="sun-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
            </svg>
            {/* Moon Icon (Visible in Light Mode) */}
            <svg
              className="moon-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </button>

          {/* Hamburger Button for Mobile Nav */}
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-controls="nav-links"
            aria-expanded={menuOpen}
            type="button"
            onClick={toggleMenu}
          >
            <svg
              className="menu-hamburger"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
            <svg
              className="menu-close"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
