import { Link } from 'react-router-dom'
import { brand, contact, links, nav } from '../data/content'
import Spiral from './Spiral'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <Spiral className="footer__mark" />
            {brand.name}
          </Link>
          <p className="footer__quote">“{brand.quote}”</p>
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <h2 className="footer__title">Explore</h2>
          {nav.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer__col">
          <h2 className="footer__title">Stay connected</h2>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            Instagram {contact.instagramHandle}
          </a>
          <a href={links.newsletter}>Monthly newsletter</a>
          <a href={`mailto:${contact.bookingEmail}`}>{contact.bookingEmail}</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {YEAR} {brand.name} · {brand.person}
        </span>
        <span>Forever connected ♡</span>
      </div>
    </footer>
  )
}
