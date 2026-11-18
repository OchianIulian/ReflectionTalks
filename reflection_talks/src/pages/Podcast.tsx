import PageHero from '../components/PageHero'
import { contact, images, podcast } from '../data/content'

export default function Podcast() {
  return (
    <>
      <PageHero
        eyebrow="Coming soon"
        title="My PodcastTalks"
        image={images.podcast}
      >
        <p className="lead">{podcast.lead}</p>
        {podcast.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <a className="btn btn--outline" href={contact.instagram} target="_blank" rel="noreferrer">
          Follow on Instagram for updates
        </a>
      </PageHero>

      <section className="section tone--rose">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow reveal">Upcoming talks</p>
            <h2 className="section__title reveal">Episodes</h2>
          </div>
          <ol className="episodes">
            {podcast.episodes.map((ep, i) => (
              <li key={ep.number} className="episode reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="episode__number">{String(ep.number).padStart(2, '0')}</span>
                <div>
                  <h3 className="episode__title">{ep.title}</h3>
                  <p>{ep.subtitle}</p>
                </div>
                <span className="episode__tag">Soon</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
