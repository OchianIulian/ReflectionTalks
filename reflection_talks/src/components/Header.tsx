import { useEffect, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { brand, links, nav } from '../data/content'
import Spiral from './Spiral'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const renderLinks = () =>
    nav.map((link, i) => (
      <NavLink
        key={link.to}
        to={link.to}
        end
        className={({ isActive }) => (isActive ? 'is-active' : '')}
        style={{ '--i': i } as CSSProperties}
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
      </NavLink>
    ))

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__bar">
        <Link to="/" className="header__brand" aria-label={`${brand.name} — home`}>
          <Spiral className="header__mark" />
          {brand.name}
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          {renderLinks()}
        </nav>

        <a className="btn btn--solid btn--sm header__cta" href={links.checkIn}>
          Free check-in call
        </a>

        <button
          type="button"
          className={`header__toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {createPortal(
        <div className={`header__mobile ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen}>
          <nav aria-label="Mobile navigation">{renderLinks()}</nav>
          <a className="btn btn--solid header__mobile-cta" href={links.checkIn}>
            Book a free check-in call
          </a>
        </div>,
        document.body,
      )}
    </header>
  )
}
