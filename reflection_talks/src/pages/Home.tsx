import { Link } from 'react-router-dom'
import CheckInBand from '../components/CheckInBand'
import PhotoImg from '../components/PhotoImg'
import Spiral from '../components/Spiral'
import { brand, images, lifepath, links, welcome } from '../data/content'

export default function Home() {
  return (
    <>
      <section className="hero tone--brown">
        <Spiral className="hero__spiral" spinning />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow reveal">Welcome to</p>
            <h1 className="hero__title reveal">{brand.name}</h1>
            <p className="hero__lead reveal" style={{ transitionDelay: '100ms' }}>
              A place to experience and deepen your inner calmness and peace — and to find your
              way back to your natural Self.
            </p>
            <div className="hero__cta reveal" style={{ transitionDelay: '160ms' }}>
              <a className="btn btn--solid" href={links.checkIn}>
                Book a free check-in call
              </a>
              <Link className="btn btn--outline" to="/gifts">
                Explore my gifts
              </Link>
            </div>
          </div>
          <figure className="hero__media reveal" style={{ transitionDelay: '200ms' }}>
            <div className="arch">
              <PhotoImg photo={images.hero} />
            </div>
            <figcaption>
              {brand.person}
              <span>Founder of {brand.name}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section tone--brown section--tight">
        <div className="container">
          <blockquote className="quote reveal">
            <p>“{brand.quote}”</p>
          </blockquote>
        </div>
      </section>

      <section className="section tone--rose">
        <div className="container letter">
          <p className="eyebrow reveal">A note from me</p>
          <h2 className="section__title reveal">This place was made for you</h2>
          <div className="prose reveal">
            {welcome.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="signoff reveal">
            <span>Much love,</span>
            <img className="signature" src={images.signature} alt={brand.person} />
          </div>
        </div>
      </section>

      <section className="section tone--brown">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow reveal">Ways to work together</p>
            <h2 className="section__title reveal">Find your perfect match</h2>
          </div>
          <div className="offers">
            {welcome.offers.map((offer, i) => (
              <Link
                key={offer.to}
                to={offer.to}
                className="offer reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="offer__eyebrow">{offer.eyebrow}</span>
                <h3 className="offer__title">{offer.title}</h3>
                <p>{offer.text}</p>
                <span className="offer__more">
                  Discover <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section tone--clay" id="lifepath">
        <div className="container">
          <div className="lifepath__head">
            <Spiral className="lifepath__spiral" />
            <div>
              <p className="eyebrow reveal">My story</p>
              <h2 className="section__title reveal">My Lifepath</h2>
            </div>
          </div>
          <div className="lifepath__intro prose reveal">
            <p className="lifepath__greeting">{lifepath.greeting}</p>
            <p>{lifepath.intro}</p>
          </div>

          <figure className="banner reveal">
            <PhotoImg photo={images.banner} lazy />
          </figure>

          <div className="pillars">
            {lifepath.pillars.map((pillar, i) => (
              <article
                key={pillar.title}
                className="pillar reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="pillar__number">{pillar.number}</span>
                <h3 className="pillar__title">{pillar.title}</h3>
                {pillar.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tone--brown">
        <div className="container family">
          <div className="family__grid">
            {images.family.map((img, i) => (
              <figure
                key={img.src}
                className={`family__item family__item--${i + 1} reveal`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <PhotoImg photo={img} lazy />
              </figure>
            ))}
          </div>
          <div className="family__copy">
            <p className="eyebrow reveal">As it’s meant to be</p>
            <div className="prose reveal">
              {lifepath.closing.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="signoff reveal">
              <span>Lots of Love,</span>
              <img className="signature" src={images.signature} alt={brand.person} />
            </div>
          </div>
        </div>
      </section>

      <CheckInBand />
    </>
  )
}
