import { NavLink, Link } from 'react-router-dom'
import { certifications, educationHighlights, awards } from '../data/certificationsData'

export default function CertificationsSection() {
  return (
    <section className="about-page-shell">
      <div className="about-page-panel">
        <header className="about-topbar">
          <div className="about-brand">Sayem A.</div>

          <nav className="about-links" aria-label="Certifications page navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/contact" className="about-icon-button" aria-label="Contact">
              <span>✉</span>
            </Link>
          </nav>
        </header>

        <main className="about-main">
          <div className="about-header-row">
            <button type="button" className="about-tab active">Certifications</button>
          </div>

          <div className="about-content">
            <h1>
              Certifications <span>&amp; Education</span>
            </h1>

            <p className="about-intro">
              Continuous learning and structured technical validation across backend engineering and platform competencies.
            </p>

            <div className="services-block">
              <div className="service-grid cert-grid">
                {certifications.map((cert) => (
                  <article className="service-card cert-card" key={cert.title}>
                    <div className="service-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M7 12.5 10.5 16 17 9.5" />
                      </svg>
                    </div>
                    <h3>{cert.title}</h3>
                    <p>{cert.sub}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="skills-block">
              <h2>
                Awards <span className="accent-line" />
              </h2>

              <div className="service-grid cert-grid">
                {awards.map((item) => (
                  <article className="service-card cert-card" key={item.title}>
                    <div className="service-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1L3.2 9.4l6.1-.9L12 3Z" />
                      </svg>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.sub}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="skills-block">
              <h2>
                Education <span className="accent-line" />
              </h2>

              <div className="service-grid cert-grid">
                {educationHighlights.map((item) => (
                  <article className="service-card cert-card" key={item.title}>
                    <div className="service-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M3 10.5 12 5l9 5.5-9 5.5-9-5.5Z" />
                        <path d="M7 12.5V16c0 1.7 2.2 3 5 3s5-1.3 5-3v-3.5" />
                      </svg>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.sub}</p>
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
