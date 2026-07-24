export default function Footer({ setActiveTab }) {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-column reveal-on-scroll">
            <h3 className="footer-heading">Intsaar Amjad</h3>
            <p className="footer-text">
              Software Engineering student passionate about building responsive web applications,
              learning modern technologies, and creating clean digital experiences.
            </p>
            <p>© 2027 Intsaar Amjad. All Rights Reserved.</p>
          </div>

          <div className="footer-column reveal-on-scroll delay-1">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links" aria-label="Quick links">
              <li>
                <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
                  About
                </a>
              </li>
              <li>
                <a href="#education" onClick={(e) => handleLinkClick(e, 'education')}>
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column reveal-on-scroll delay-2">
            <h3 className="footer-heading">Contact Information</h3>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:intsaar.amjad@gmail.com">
                  <span className="contact-item-icon" aria-hidden="true">
                    📧
                  </span>
                  <span>intsaar.amjad@gmail.com</span>
                </a>
              </li>
              <li>
                <span className="contact-item-icon" aria-hidden="true">
                  📍
                </span>
                <span>Lahore, Pakistan</span>
              </li>
              <li>
                <span className="contact-item-icon" aria-hidden="true">
                  💼
                </span>
                <span>Available for Internship Opportunities</span>
              </li>
            </ul>

            <div className="footer-socials" aria-label="Social media links">
              <a
                href="https://github.com/intsaaramjad-max"
                target="_blank"
                rel="noopener"
                className="social-icon"
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 1.6 18.3 2 18.3 2c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/intsaar-amjad"
                target="_blank"
                rel="noopener"
                className="social-icon"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:intsaar.amjad@gmail.com"
                className="social-icon"
                aria-label="Email Profile"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
