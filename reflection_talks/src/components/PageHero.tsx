import type { ReactNode } from 'react'
import type { Photo } from '../data/content'
import PhotoImg from './PhotoImg'
import Spiral from './Spiral'

type PageHeroProps = {
  eyebrow: string
  title: string
  image: Photo
  tone?: 'brown' | 'rose' | 'clay'
  children: ReactNode
}

export default function PageHero({
  eyebrow,
  title,
  image,
  tone = 'brown',
  children,
}: PageHeroProps) {
  return (
    <section className={`page-hero tone--${tone}`}>
      <Spiral className="page-hero__spiral" spinning />
      <div className="container page-hero__inner">
        <div className="page-hero__copy">
          <p className="eyebrow reveal">{eyebrow}</p>
          <h1 className="page-hero__title reveal">{title}</h1>
          <div className="page-hero__body reveal" style={{ transitionDelay: '120ms' }}>
            {children}
          </div>
        </div>
        <figure className="page-hero__media reveal" style={{ transitionDelay: '180ms' }}>
          <div className="arch">
            <PhotoImg photo={image} />
          </div>
        </figure>
      </div>
    </section>
  )
}
