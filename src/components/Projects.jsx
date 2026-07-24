const PROJECTS_DATA = [
  {
    category: 'Final Year Project (FYP)',
    title: 'RoadRescue AI',
    role: 'AI-Powered Roadside Assistance Platform',
    description:
      'Designed and developed an intelligent roadside assistance platform that helps users quickly find nearby mechanics and emergency services. The application focuses on real-time assistance, location-based services, service booking, and a seamless user experience while addressing common roadside emergencies.',
    tech: ['React Native', 'JavaScript', 'Firebase', 'Google Maps API', 'REST APIs'],
    detailsLink: '#',
    githubLink: '#',
    revealDelay: 'delay-1',
  },
  {
    category: 'Software Project Management Semester Project',
    title: 'Vehicle Service Booking & Management System',
    role: 'Vehicle Service Management Platform',
    description:
      'Developed a vehicle service booking and management system that allows customers to schedule appointments, manage vehicle service history, and communicate with service providers. The project emphasizes efficient booking workflows and an intuitive user interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    detailsLink: '#',
    githubLink: '#',
    revealDelay: '',
  },
  {
    category: 'Database Semester Project',
    title: 'Event Management Company',
    role: 'Database Management System',
    description:
      'Designed and implemented a database-driven event management system for handling clients, events, bookings, payments, and staff records. The project focuses on efficient data organization, relationship management, and database normalization.',
    tech: ['MySQL', 'SQL', 'Database Design'],
    detailsLink: '#',
    githubLink: '#',
    revealDelay: 'delay-1',
  },
  {
    category: 'Human Computer Interaction (HCI) Semester Project',
    title: 'Parking System',
    role: 'User-Centered Parking Management System',
    description:
      'Designed a user-friendly parking management system with a focus on usability, accessibility, and intuitive user interaction. The project emphasizes effective interface design and an improved user experience for managing parking operations.',
    tech: ['Java', 'MySQL', 'UI/UX Design'],
    detailsLink: '#',
    githubLink: '#',
    revealDelay: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="header-line"></div>
        </div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((proj, idx) => (
            <article
              key={idx}
              className={`project-card reveal-on-scroll ${proj.revealDelay}`}
              role="article"
            >
              <div className="project-card-content">
                <span className="project-category">{proj.category}</span>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-role">{proj.role}</p>
                <p className="project-description">{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={proj.detailsLink}
                    className="btn-link"
                    aria-label={`View details for ${proj.title}`}
                  >
                    <span>View Details</span>
                  </a>
                  <a
                    href={proj.githubLink}
                    className="btn-link secondary-link"
                    aria-label={`View GitHub for ${proj.title}`}
                  >
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
