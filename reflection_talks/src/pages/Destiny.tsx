import CheckInBand from '../components/CheckInBand'
import PageHero from '../components/PageHero'
import { destiny, images, links } from '../data/content'

export default function Destiny() {
  return (
    <>
      <PageHero
        eyebrow="6-week group program"
        title="Your Next Destiny"
        image={images.destiny}
      >
        {destiny.questions.map((q) => (
          <p key={q} className="lead">
            {q}
          </p>
        ))}
        <p>{destiny.lead}</p>
        <div className="hero__cta">
          <a className="btn btn--solid" href={links.destiny}>
            Reserve your seat
          </a>
          <a className="btn btn--outline" href={links.checkIn}>
            Free check-in call
          </a>
        </div>
      </PageHero>

      <section className="section tone--rose">
        <div className="container split">
          <div>
            <p className="eyebrow reveal">How to hold your future potential</p>
            <h2 className="section__title reveal">What can you expect?</h2>
            <ul className="hearts reveal">
              {destiny.expect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow reveal">What does it look like?</p>
            <h2 className="section__title reveal">The format</h2>
            <ul className="hearts reveal">
              {destiny.format.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="motto reveal">{destiny.motto}</p>
          </div>
        </div>
      </section>

      <section className="section tone--brown">
        <div className="container">
          <article className="ticket reveal">
            <div className="ticket__info">
              <p className="eyebrow">Start</p>
              <h2 className="section__title">{destiny.start}</h2>
              <p>
                {destiny.forWhom} There is room for <strong>{destiny.seats} people</strong> — don’t
                wait too long!
              </p>
            </div>
            <div className="ticket__price">
              <p className="plan__price">
                <strong>€{destiny.earlyPrice}</strong>
                <s>€{destiny.price}</s>
              </p>
              <p className="ticket__note">Early-bird price until {destiny.earlyUntil}</p>
              <a className="btn btn--cream" href={links.destiny}>
                Reserve your seat
              </a>
            </div>
          </article>
        </div>
      </section>

      <CheckInBand title="Want to talk it through first?" />
    </>
  )
}
