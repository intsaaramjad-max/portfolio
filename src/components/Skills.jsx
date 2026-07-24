import { useState } from 'react';

const CATEGORIES = [
  { id: 'frontend', label: 'Frontend', position: 'north' }, { id: 'backend', label: 'Backend', position: 'north-east' },
  { id: 'database', label: 'Database' }, { id: 'programming', label: 'Programming' }, { id: 'mobile', label: 'Mobile' },
  { id: 'tools', label: 'Tools' }, { id: 'learning', label: 'Learning' }, { id: 'soft-skills', label: 'Soft Skills' },
];

const SKILLS = {
  Frontend: [['HTML', 95], ['CSS', 90], ['JavaScript', 85], ['React', 75]],
  Backend: [['Node.js', 70], ['Express.js', 65]], Database: [['MongoDB', 80], ['Firebase', 70]],
  Programming: [['Java', 75], ['Python', 65], ['C++', 60]], Mobile: [['React Native', 70]],
  Tools: [['Git', 85], ['GitHub', 85], ['VS Code', 95], ['Postman', 75]],
  Learning: [['ServiceNow', 60], ['REST APIs', 75]],
};

const SOFT_SKILLS = ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability', 'Time Management', 'Quick Learner', 'Leadership'];
const CATEGORY_META = {
  Frontend: { id: 'frontend', icon: '</>', tone: 'coral' }, Backend: { id: 'backend', icon: '{}', tone: 'blue' },
  Database: { id: 'database', icon: 'DB', tone: 'green' }, Programming: { id: 'programming', icon: '01', tone: 'gold' },
  Mobile: { id: 'mobile', icon: '⌁', tone: 'cyan' }, Tools: { id: 'tools', icon: '✦', tone: 'purple' }, Learning: { id: 'learning', icon: '↗', tone: 'pink' },
};

function SkillGroup({ name, skills }) {
  const meta = CATEGORY_META[name];
  return (
    <article className="skill-group">
      <div className="skill-group-heading"><span className={`skill-group-icon ${meta.tone}`} aria-hidden="true">{meta.icon}</span><div><p className="skill-group-kicker">Category</p><h3>{name}</h3></div><span className="skill-count">{skills.length} skills</span></div>
      <div className="progress-list">
        {skills.map(([skill, value]) => <div className="progress-item" key={skill}><div className="progress-label"><span>{skill}</span><strong>{value}%</strong></div><div className="progress-track" role="progressbar" aria-label={`${skill} proficiency`} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"><span className={`progress-value ${meta.tone}`} style={{ '--skill-level': `${value}%` }} /></div></div>)}
      </div>
    </article>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);
  const selectedName = Object.keys(SKILLS).find((name) => CATEGORY_META[name].id === activeCategory);
  const groups = activeCategory === 'all' ? Object.entries(SKILLS) : selectedName ? [[selectedName, SKILLS[selectedName]]] : [];
  const openTree = () => setActiveCategory(null);

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <div className="section-header reveal-on-scroll"><span className="section-subtitle">My toolkit</span><h2 className="section-title">Skills &amp; Technologies</h2><p className="section-description">A living map of the tools, technologies, and people skills I bring to every build.</p><div className="header-line" /></div>
        {!activeCategory && <div className="skill-tree-intro">
          <span className="section-subtitle">Explore my toolkit</span>
          <h3>A map of how I build</h3>
          <p>Click a node to explore a skill path.</p>
        </div>}
        {!activeCategory && <div className="radial-skill-map" aria-label="Circular skill categories">
          <svg className="radial-connectors" viewBox="0 0 1000 700" role="presentation" aria-hidden="true">
            <defs><linearGradient id="skill-line" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--clr-accent)" stopOpacity=".75" /><stop offset="1" stopColor="var(--clr-secondary)" stopOpacity=".25" /></linearGradient></defs>
            <path d="M500 350 Q500 220 500 86" /><path d="M500 350 Q650 205 780 150" /><path d="M500 350 Q755 350 900 350" /><path d="M500 350 Q650 495 780 550" /><path d="M500 350 Q500 480 500 614" /><path d="M500 350 Q350 495 220 550" /><path d="M500 350 Q245 350 100 350" /><path d="M500 350 Q350 205 220 150" />
          </svg>
          <button className="radial-center-node" type="button" onClick={() => setActiveCategory('all')} aria-label="Show all skills"><span className="center-orbit" />MY SKILLS</button>
          {CATEGORIES.map((category) => <button className={`radial-category-node ${category.position || category.id}`} type="button" key={category.id} onClick={() => setActiveCategory(category.id)}><span className="radial-node-dot" />{category.label}</button>)}
        </div>}
        {activeCategory && <div className="skills-results" key={activeCategory}>
          <div className="skills-results-heading"><div><span className="section-subtitle">Exploring</span><h3>{activeCategory === 'all' ? 'Everything in my toolkit' : CATEGORIES.find(({ id }) => id === activeCategory)?.label}</h3></div><button className="tree-back-btn" type="button" onClick={openTree} aria-label="Return to skill tree">← Back to skill tree</button></div>
          <div className="skill-groups-grid">
            {groups.map(([name, skills]) => <SkillGroup key={name} name={name} skills={skills} />)}
            {(activeCategory === 'all' || activeCategory === 'soft-skills') && <article className="soft-skills-panel"><div className="skill-group-heading"><span className="skill-group-icon orange" aria-hidden="true">♥</span><div><p className="skill-group-kicker">Category</p><h3>Soft Skills</h3></div><span className="skill-count">7 strengths</span></div><div className="soft-skill-list">{SOFT_SKILLS.map((skill, index) => <span className="soft-skill-badge" key={skill}><i>0{index + 1}</i>{skill}</span>)}</div></article>}
          </div>
        </div>}
      </div>
    </section>
  );
}
