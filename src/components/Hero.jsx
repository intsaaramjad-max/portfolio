export default function Hero({ setActiveTab }) {
  const handleCtaClick = (e, targetId) => {
    e.preventDefault();
    setActiveTab(targetId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content reveal-on-scroll">
          <span className="badge">Welcome to my Portfolio</span>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Intsaar Amjad</span>
          </h1>
          <p className="hero-subtitle">
            Software Engineering student passionate about building modern web applications,
            exploring full-stack development, and creating clean, user-friendly digital experiences.
          </p>

          <div className="hero-ctas">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => handleCtaClick(e, 'projects')}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => handleCtaClick(e, 'contact')}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual reveal-on-scroll delay-1">
          <div className="illustration-wrapper">
            <img
              src="/images/hero.png"
              alt="Abstract modern engineering graphic containing coffee brown and terracotta shapes"
              className="hero-img"
              width="500"
              height="500"
            />
            <div className="bg-shape-1"></div>
            <div className="bg-shape-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
