import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { navItems } from '../siteData.js'

function SiteLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className={`site-header ${isHome ? 'site-header--overlay' : 'site-header--solid'}`}>
        <div className={`nav-shell ${isMenuOpen ? 'nav-shell--open' : ''}`}>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={`top-nav ${isMenuOpen ? 'top-nav--open' : ''}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a key={item.to} href={item.to} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                )
              }

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">Jennifer Luong and Brian Nguyen</footer>
    </div>
  )
}

export default SiteLayout