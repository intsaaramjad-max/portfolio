const EDUCATION_DATA = [
  {
    date: 'Expected Graduation: 2027',
    degree: 'Bachelor of Science in Software Engineering',
    school: 'University of Central Punjab (UCP)',
    desc: 'Focusing on core software architecture principles, data structures, algorithms, object-oriented design, database architectures, and human-computer interactions.',
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section section-padding">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">Academic Credentials</span>
          <h2 className="section-title">Education</h2>
          <div className="header-line"></div>
        </div>

        <div className="education-grid">
          {EDUCATION_DATA.map((edu, idx) => (
            <article key={idx} className="education-card reveal-on-scroll">
              <div className="edu-icon-wrap" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <span className="edu-date">{edu.date}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-school">{edu.school}</h4>
              <p className="edu-desc">{edu.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
