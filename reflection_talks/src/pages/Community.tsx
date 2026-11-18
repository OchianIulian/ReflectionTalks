import PageHero from '../components/PageHero'
import { community, images, links } from '../data/content'

export default function Community() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Our Monthly Community"
        image={images.community}
        tone="clay"
      >
        <p className="lead">{community.lead}</p>
        <p className="motto">{community.motto}</p>
        <a className="btn btn--solid" href={links.community}>
          Join now — first month free
        </a>
      </PageHero>

      <section className="section tone--brown">
        <div className="container letter">
          <p className="eyebrow reveal">Why a community</p>
          <h2 className="section__title reveal">The power is in the Reflection</h2>
          <div className="prose reveal">
            {community.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section tone--rose">
        <div className="container">
          <article className="ticket ticket--light reveal">
            <div className="ticket__info">
              <p className="eyebrow">The gift · monthly subscription</p>
              <h2 className="section__title">What’s included</h2>
              <p>{community.themeNote}</p>
              <ul className="hearts">
                {community.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ticket__price">
              <p className="plan__price">
                <strong>€{community.price}</strong>
                <span>per month</span>
              </p>
              <p className="ticket__note">Launch offer: your first month is free!</p>
              <ul className="bundles">
                {community.bundles.map((b) => (
                  <li key={b.months}>
                    <span>{b.months} months</span>
                    <strong>€{b.price}</strong>
                    <s>€{b.normal}</s>
                  </li>
                ))}
              </ul>
              <a className="btn btn--solid" href={links.community}>
                Join now
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
