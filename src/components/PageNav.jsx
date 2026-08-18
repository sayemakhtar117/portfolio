import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function PageNav({ links, showMailButton = true }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className={`page-nav-toggle ${menuOpen ? 'is-open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`about-links ${menuOpen ? 'is-open' : ''}`} aria-label="Page navigation">
        {links.map(({ to, label, className }) => (
          <NavLink key={to} to={to} className={className} onClick={() => setMenuOpen(false)}>
            {label}
          </NavLink>
        ))}

        {showMailButton && (
          <Link to="/contact" className="about-icon-button" aria-label="Contact" onClick={() => setMenuOpen(false)}>
            <span>✉</span>
          </Link>
        )}
      </nav>
    </>
  )
}
