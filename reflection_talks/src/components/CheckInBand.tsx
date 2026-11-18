import { links } from '../data/content'
import Spiral from './Spiral'

type CheckInBandProps = {
  title?: string
  text?: string
}

export default function CheckInBand({
  title = 'Not sure where to start?',
  text = 'Book a free 20-minute check-in call. We get to know each other, explore where you are at, and find the perfect match for you.',
}: CheckInBandProps) {
  return (
    <section className="band tone--clay">
      <div className="container band__inner reveal">
        <Spiral className="band__spiral" />
        <div>
          <h2 className="band__title">{title}</h2>
          <p className="band__text">{text}</p>
        </div>
        <a className="btn btn--cream" href={links.checkIn}>
          Book a free check-in call
        </a>
      </div>
    </section>
  )
}
