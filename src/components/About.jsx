export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <div className="header-line"></div>
        </div>

        <div className="about-content reveal-on-scroll">
          <div className="about-intro">
            <h3>
              Hi, I'm <span className="highlight">Intsaar Amjad</span>
            </h3>
            <p>
              I am a Software Engineering student at the University of Central Punjab (UCP), Lahore.
              I am passionate about web development and continuously learning modern technologies to
              build responsive, accessible, and user-friendly applications. Through academic
              projects and hands-on practice, I enjoy solving real-world problems, improving my
              programming skills, and creating clean, maintainable, and efficient solutions. My
              goal is to grow as a Full Stack Developer while contributing to impactful software
              projects.
            </p>
          </div>

          <div className="about-info-grid" role="list" aria-label="About details">
            <article className="info-item" role="listitem">
              <div className="info-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l8 4v6c0 5-3.5 8.8-8 10-4.5-1.2-8-5-8-10V6l8-4z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <span className="info-label">Degree</span>
              <h4 className="info-title">BS Software Engineering</h4>
              <p className="info-subtitle">Undergraduate Student</p>
            </article>

            <article className="info-item" role="listitem">
              <div className="info-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <path d="M16 2v4"></path>
                  <path d="M8 2v4"></path>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <span className="info-label">Expected Graduation</span>
              <h4 className="info-title">Class of 2027</h4>
              <p className="info-subtitle">Expected Graduation Year</p>
            </article>

            <article className="info-item" role="listitem">
              <div className="info-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19V9"></path>
                  <path d="M20 19V5"></path>
                  <path d="M4 9l8-4 8 4"></path>
                  <path d="M8 19v-5"></path>
                  <path d="M16 19v-7"></path>
                </svg>
              </div>
              <span className="info-label">University</span>
              <h4 className="info-title">University of Central Punjab (UCP)</h4>
              <p className="info-subtitle">Lahore, Pakistan</p>
            </article>

            <article className="info-item" role="listitem">
              <div className="info-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 7 12 3 20 7"></polyline>
                  <path d="M4 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7"></path>
                  <path d="M9 13h6"></path>
                  <path d="M9 17h6"></path>
                </svg>
              </div>
              <span className="info-label">Focus Areas</span>
              <h4 className="info-title">Full-Stack Web Development</h4>
              <p className="info-subtitle">Frontend • JavaScript • React • MongoDB</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
