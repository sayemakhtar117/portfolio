import { NavLink, Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <header className="landing-hero-shell">
      <div className="landing-hero-panel">
        <div className="landing-topbar">
          <div className="landing-brand">Sayem A.</div>
          <nav className="landing-nav" aria-label="Main navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/certifications">Certs</NavLink>
            <NavLink to="/contact" className="primary-pill">Contact</NavLink>
          </nav>
        </div>

        <div className="landing-content">
          <div className="landing-kicker">Hi, I'm Sayem Akhtar!</div>

          <div className="landing-underline" aria-hidden="true">
            <span className="dot-group" />
            <span className="line" />
          </div>

          <h1 className="landing-title">
            Senior Software Developer
            <br />
            Building Scalable
            <br />
            <span className="word-highlight">{'{Backend}'}</span> Systems
          </h1>

          <p className="landing-copy">
            I design and deliver enterprise-grade backend solutions with Java, Spring Boot, and
            microservices — from REST API design and database optimization to production support,
            performance tuning, and cloud-native application delivery.
          </p>

          <div className="cta-row">
            <Link to="/about" className="primary-btn">About me</Link>
            <a href="mailto:sayemakhtar40@gmail.com" className="secondary-btn">Let's talk</a>
          </div>

          <div className="polka-dots" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="dot-item" />
            ))}
          </div>
        </div>

        <div className="social-stack" aria-label="Social media links">
          <span className="follow-me">Follow me</span>
          <div className="follow-divider" aria-hidden="true" />

          <a href="https://github.com" className="social-icon" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 18c-4 1.5-5-2-7-2" />
              <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.56 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          <a href="https://www.linkedin.com" className="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9v9" />
              <path d="M6 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
              <path d="M11 18v-5.2c0-1.7 1.2-3 2.8-3 1.6 0 2.7 1.1 2.7 3.2V18" />
              <path d="M11 9v9" />
            </svg>
          </a>

          <a href="mailto:sayemakhtar40@gmail.com" className="social-icon" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
