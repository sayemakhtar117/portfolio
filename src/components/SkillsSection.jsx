import PageNav from './PageNav'
import { skills } from '../data/skillsData'

export default function SkillsSection() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <section className="about-page-shell">
      <div className="about-page-panel">
        <header className="about-topbar">
          <div className="about-brand">Sayem A.</div>

          <PageNav links={links} />
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
