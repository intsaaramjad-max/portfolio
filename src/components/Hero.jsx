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
          <span className="eyebrow">Full Stack Developer</span>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Intsaar Amjad</span>
          </h1>
          <p className="hero-subtitle">
            I build clean, accessible, and modern digital products that turn ideas into smooth user
            experiences.
          </p>
          <p className="hero-description">
            Software Engineering student focused on front-end craftsmanship, scalable web apps, and
            practical problem-solving with a love for polished design and great UX.
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
              className="btn btn-ghost"
              onClick={(e) => handleCtaClick(e, 'contact')}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="hero-visual reveal-on-scroll delay-1">
          <div className="avatar-wrap" aria-hidden="true">
            <div className="avatar-blob"></div>
            <div className="float-shape float-shape-one"></div>
            <div className="float-shape float-shape-two"></div>

            <svg className="avatar-svg bob" viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff9a63" />
                  <stop offset="100%" stopColor="#8c7cf0" />
                </linearGradient>
              </defs>

              <ellipse cx="200" cy="360" rx="95" ry="18" fill="rgba(50,42,66,0.12)" />
              <g>
                <circle cx="200" cy="150" r="72" fill="#FFD7BF" />
                <path d="M125 145C125 82 174 52 200 52C226 52 275 82 275 145V164C275 190 251 210 225 210H175C149 210 125 190 125 164V145Z" fill="#3A2E4A" />
                <path className="wave" d="M258 150C278 140 294 148 298 164C285 173 272 177 257 176C256 168 256 160 258 150Z" fill="#3A2E4A" />
                <circle cx="174" cy="149" r="8" fill="#2B2438" />
                <circle cx="226" cy="149" r="8" fill="#2B2438" />
                <path d="M176 185C192 196 208 196 224 185" fill="none" stroke="#2B2438" strokeWidth="5" strokeLinecap="round" />
                <path d="M92 176C94 122 116 95 146 76C164 76 180 86 188 100C170 108 156 124 148 142C130 145 117 156 108 171L92 176Z" fill="#3A2E4A" opacity="0.95" />
                <path d="M308 176C306 122 284 95 254 76C236 76 220 86 212 100C230 108 244 124 252 142C270 145 283 156 292 171L308 176Z" fill="#3A2E4A" opacity="0.95" />
                <path d="M120 260C145 225 170 212 200 212C230 212 255 225 280 260L298 325H102L120 260Z" fill="url(#shirtGradient)" />
                <path d="M175 212L155 323H92L120 260L145 224L175 212Z" fill="#FFB38B" opacity="0.78" />
                <path d="M225 212L245 323H308L280 260L255 224L225 212Z" fill="#8C7CF0" opacity="0.7" />
                <path d="M142 230L165 268L153 323H108L120 260L142 230Z" fill="#FFC9A0" opacity="0.7" />
                <path d="M258 230L235 268L247 323H292L280 260L258 230Z" fill="#A194FF" opacity="0.7" />
                <path d="M164 285L150 323H190L200 286L210 323H250L236 285L200 270L164 285Z" fill="#FFFFFF" opacity="0.22" />
                <rect x="145" y="318" width="60" height="54" rx="18" fill="#FFAD6E" />
                <rect x="195" y="318" width="60" height="54" rx="18" fill="#8C7CF0" />
                <rect x="145" y="360" width="110" height="12" rx="6" fill="#DDB7A0" opacity="0.7" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
