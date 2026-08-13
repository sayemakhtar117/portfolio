import { NavLink, Link } from 'react-router-dom'

export default function ContactSection() {
  return (
    <section className="about-page-shell">
      <div className="about-page-panel">
        <header className="about-topbar">
          <div className="about-brand">Sayem A.</div>

          <nav className="about-links" aria-label="Contact page navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <Link to="/contact" className="about-icon-button" aria-label="Contact">
              <span>✉</span>
            </Link>
          </nav>
        </header>

        <main className="about-main">
          <div className="about-header-row">
            <button type="button" className="about-tab active">Contact</button>
          </div>

          <div className="about-content">
            <h1>
              Let&apos;s <span>Connect</span>
            </h1>

            <p className="about-intro">
              I&apos;m open to backend engineering roles, architecture work, and product-focused development opportunities.
            </p>

            <div className="services-block">
              <div className="service-grid contact-grid">
                <article className="service-card contact-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </div>
                  <h3>Email</h3>
                  <p>sayemakhtar40@gmail.com</p>
                  <a href="mailto:sayemakhtar40@gmail.com" className="contact-link">Send mail</a>
                </article>

                <article className="service-card contact-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M6 9v9" />
                      <path d="M6 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                      <path d="M11 18v-5.2c0-1.7 1.2-3 2.8-3 1.6 0 2.7 1.1 2.7 3.2V18" />
                      <path d="M11 9v9" />
                    </svg>
                  </div>
                  <h3>LinkedIn</h3>
                  <p>Professional profile and project history</p>
                  <a href="https://www.linkedin.com/in/sayem-akhtar-475682143/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    View profile
                  </a>
                </article>

                <article className="service-card contact-card">
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M22 16.9v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72l.4 2.54a2 2 0 0 1-.45 1.7L8.5 9.9a16 16 0 0 0 7.6 7.6l.94-.94a2 2 0 0 1 1.7-.45l2.54.4A2 2 0 0 1 22 16.9Z" />
                    </svg>
                  </div>
                  <h3>Phone</h3>
                  <p>+91 7301308575</p>
                  <a href="tel:+917301308575" className="contact-link">Call now</a>
                </article>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
