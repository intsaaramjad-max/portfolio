const EXPERIENCE_DATA = [
  {
    date: 'Jun 2026 - Present',
    role: 'My Journey',
    desc: 'Software Engineering student currently exploring Full Stack Development, Mobile App Development, AI integration, and modern software solutions.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          
          <span className="section-subtitle">Work History</span>
          <h2 className="section-title">Experience</h2>
          <div className="header-line"></div>
        </div>

        <div className="timeline-container">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <article key={idx} className="timeline-item reveal-on-scroll">
              <div className="experience-card-topline">
                <span className="experience-pulse" aria-hidden="true"></span>
                <span className="timeline-date">{exp.date}</span>
                <span className="experience-status">Current focus</span>
              </div>
              <div className="timeline-content">
                <div className="experience-heading">
                  <div className="experience-icon" aria-hidden="true">✦</div>
                  <div>
                    <p className="experience-eyebrow">Personal development</p>
                    <h3 className="timeline-role">{exp.role}</h3>
                  </div>
                </div>
                <p className="timeline-desc">{exp.desc}</p>
                <div className="experience-tags" aria-label="Current areas of focus">
                  <span>Full Stack</span>
                  <span>Mobile Apps</span>
                  <span>AI Integration</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
