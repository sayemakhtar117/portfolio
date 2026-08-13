import { NavLink, Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <section className="about-page-shell">
      <div className="about-page-panel">
        <header className="about-topbar">
          <div className="about-brand">Sayem A.</div>

          <nav className="about-links" aria-label="About page navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/experience">Experience</NavLink>
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
            <button type="button" className="about-tab active">Overview</button>
          </div>

          <div className="about-content">
            <h1>
              About <span>Me</span>
            </h1>

            <p className="about-intro">
              I&apos;m Sayem Akhtar, a backend software developer focused on building scalable systems,
              resilient APIs, and production-ready Java applications.
            </p>

            <p className="about-body">
              I design and deliver enterprise-grade backend solutions with Java, Spring Boot, and
              microservices — covering REST API design, database optimization, cloud-ready delivery,
              and performance tuning in real-world production environments. My work blends strong
              engineering fundamentals with a practical, business-aware approach to software delivery.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">4 <span>+</span></div>
                <div className="stat-label">Years of experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99 <span>%</span></div>
                <div className="stat-label">Ownership and quality mindset</div>
              </div>
            </div>

            <div className="services-block">
              <h2>
                My Services <span className="accent-line" />
              </h2>

              <div className="service-grid">
                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="m8 8-4 4 4 4" />
                      <path d="m16 8 4 4-4 4" />
                      <path d="m14 4-4 16" />
                    </svg>
                  </div>
                  <h3>Backend development</h3>
                  <p>
                    Enterprise application development, API design, and scalable service implementation
                    using Java and Spring ecosystems.
                  </p>
                </article>

                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2v20" />
                      <path d="M2 12h20" />
                      <circle cx="12" cy="12" r="6" />
                    </svg>
                  </div>
                  <h3>System architecture</h3>
                  <p>
                    Designing modular microservice patterns, data flows, and maintainable application
                    structures aligned with business needs.
                  </p>
                </article>

                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="4" y="7" width="16" height="12" rx="2" />
                      <path d="M8 7V5h8v2" />
                      <path d="M9 12h6" />
                    </svg>
                  </div>
                  <h3>Production support</h3>
                  <p>
                    Debugging, performance tuning, production triage, and ensuring stable post-deployment
                    operations for application teams.
                  </p>
                </article>
              </div>
            </div>

            <div className="skills-block">
              <h2>
                My Skills <span className="accent-line" />
              </h2>

              <div className="skill-grid">
                <div className="skill-item">
                  <span>Java</span>
                  <div className="skill-bar"><i style={{ width: '92%' }} /></div>
                </div>
                <div className="skill-item">
                  <span>Spring Boot</span>
                  <div className="skill-bar"><i style={{ width: '90%' }} /></div>
                </div>
                <div className="skill-item">
                  <span>SQL</span>
                  <div className="skill-bar"><i style={{ width: '84%' }} /></div>
                </div>
                <div className="skill-item">
                  <span>Microservices</span>
                  <div className="skill-bar"><i style={{ width: '88%' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
