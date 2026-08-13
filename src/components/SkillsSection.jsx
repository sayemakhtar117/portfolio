import { NavLink, Link } from 'react-router-dom'
import { skills } from '../data/skillsData'

export default function SkillsSection() {
  return (
    <section className="about-page-shell">
      <div className="about-page-panel">
        <header className="about-topbar">
          <div className="about-brand">Sayem A.</div>

          <nav className="about-links" aria-label="Skills page navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/contact" className="about-icon-button" aria-label="Contact">
              <span>✉</span>
            </Link>
          </nav>
        </header>

        <main className="about-main">
          <div className="about-header-row">
            <button type="button" className="about-tab active">Skills</button>
          </div>

          <div className="about-content">
            <h1>
              My <span>Skills</span>
            </h1>

            <p className="about-intro">
              Backend engineering, scalable APIs, and reliable delivery across Java, data, and cloud-native systems.
            </p>

            <div className="skills-block">
              <div className="skill-grid">
                {skills.map((row) => (
                  <div className="skill-item" key={row.key}>
                    <span>{row.key.replace(/_/g, ' ')}</span>
                    <div className="skill-bar"><i style={{ width: `${row.progress}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
