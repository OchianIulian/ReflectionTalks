import PageHero from '../components/PageHero'
import { contact, images, links } from '../data/content'

const CHANNELS = [
  {
    title: 'Instagram',
    text: 'For extra inspiration and interaction, follow me on Instagram.',
    action: `Follow ${contact.instagramHandle}`,
    href: contact.instagram,
    external: true,
  },
  {
    title: 'Newsletter',
    text: 'Stay up to date on the Monthly Themes, the PodcastTalks and the Gifts I send into the world.',
    action: 'Sign up',
    href: links.newsletter,
  },
  {
    title: 'Email the team',
    text: 'For PodcastTalks requests, speaking at events, or any other requests and questions.',
    action: contact.personalEmail,
    href: links.team,
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Great to have you here"
        image={images.contact}
        tone="rose"
      >
        <p className="lead">Love you, and hope to see you soon!</p>
        <p>Forever connected.</p>
      </PageHero>

      <section className="section tone--brown">
        <div className="container channels">
          {CHANNELS.map((c, i) => (
            <article key={c.title} className="channel reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <h2 className="channel__title">{c.title}</h2>
              <p>{c.text}</p>
              <a
                className="channel__link"
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {c.action} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
