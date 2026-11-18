import type { CSSProperties } from 'react'
import type { Photo } from '../data/content'

type PhotoImgProps = {
  photo: Photo
  lazy?: boolean
}

export default function PhotoImg({ photo, lazy = false }: PhotoImgProps) {
  const style = {
    '--focus': photo.focus ?? '50% 50%',
    '--zoom': photo.zoom ?? 1,
  } as CSSProperties

  return (
    <img
      className="photo"
      src={photo.src}
      alt={photo.alt}
      style={style}
      loading={lazy ? 'lazy' : undefined}
    />
  )
}
