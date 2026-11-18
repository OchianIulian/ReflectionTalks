import CheckInBand from '../components/CheckInBand'
import PageHero from '../components/PageHero'
import { contact, gifts, images, links, mailto } from '../data/content'

export default function Gifts() {
  return (
    <>
      <PageHero
        eyebrow="1:1 guidance"
        title="My Gifts to You"
        image={images.gifts}
        tone="rose"
      >
        <p className="lead">{gifts.lead}</p>
        {gifts.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <a className="btn btn--solid" href={links.checkIn}>
          Book a free check-in call
        </a>
      </PageHero>

      <section className="section tone--brown">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">For whom?</p>
            <h2 className="section__title">Beginners & practitioners alike</h2>
            <p className="prose">{gifts.forWhom}</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <p className="eyebrow">Free check-in call</p>
            <h2 className="section__title">20 minutes to meet</h2>
            <p className="prose">{gifts.checkIn}</p>
          </div>
        </div>
      </section>

      <section className="section tone--rose">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow reveal">Topics & forms</p>
            <h2 className="section__title reveal">What we can explore</h2>
            <p className="section__lead reveal">{gifts.topicsIntro}</p>
          </div>
          <div className="lists">
            <div className="list-card reveal">
              <h3>Topics</h3>
              <ul className="hearts hearts--columns">
                {gifts.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="list-card reveal" style={{ transitionDelay: '100ms' }}>
              <h3>Forms</h3>
              <ul className="hearts">
                {gifts.forms.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section tone--clay" id="trajectories">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow reveal">The three trajectories</p>
            <h2 className="section__title reveal">Choose your path</h2>
            <p className="section__lead reveal">{gifts.trajectoriesIntro}</p>
          </div>
          <div className="plans">
            {gifts.trajectories.map((plan, i) => (
              <article
                key={plan.title}
                className={`plan reveal ${plan.featured ? 'plan--featured' : ''}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {plan.featured && (
                  <span className="plan__badge">
                    Launch offer −{Math.round((1 - plan.launchPrice / plan.price) * 100)}%
                  </span>
                )}
                <h3 className="plan__title">{plan.title}</h3>
                <p className="plan__duration">{plan.duration}</p>
                <p className="plan__price">
                  <strong>€{plan.launchPrice}</strong>
                  <s>€{plan.price}</s>
                  <span>launch price</span>
                </p>
                <p className="plan__text">{plan.text}</p>
                <ul className="hearts">
                  {plan.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="btn btn--solid plan__cta" href={mailto(contact.bookingEmail, plan.subject)}>
                  Book now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CheckInBand />
    </>
  )
}
