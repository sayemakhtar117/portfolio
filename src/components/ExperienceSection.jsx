import { NavLink, Link } from 'react-router-dom'
import { experience } from '../data/experienceData'

export default function ExperienceSection() {
  return (
    <section className="about-page-shell">
      <div className="about-page-panel">
        <header className="about-topbar">
          <div className="about-brand">Sayem A.</div>

          <nav className="about-links" aria-label="Experience page navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/contact" className="about-icon-button" aria-label="Contact">
              <span>✉</span>
            </Link>
          </nav>
        </header>

        <main className="about-main">
          <div className="about-header-row">
            <button type="button" className="about-tab active">Experience</button>
          </div>

          <div className="about-content">
            <h1>
              Where I&apos;ve <span>Worked</span>
            </h1>

            <p className="about-intro">
              Building backend systems, translating business needs into resilient services, and supporting teams in production.
            </p>

            <div className="services-block">
              <div className="timeline-grid">
                {experience.map((job) => (
                  <article className="job" key={job.role}>
                    <div className="job-head">
                      <div>
                        <h3 className="job-role">{job.role}</h3>
                        <p className="job-meta">{job.company} · {job.location} · {job.period}</p>
                      </div>
                    </div>
                    <ul className="job-list">
                      {job.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
