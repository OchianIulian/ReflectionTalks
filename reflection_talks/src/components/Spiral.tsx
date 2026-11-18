// Swirl mark from the original logo, drawn as SVG so it stays crisp and themable.
const RAYS = 26
const R = 50
const TWIST = 1.05

const point = (radius: number, angle: number) =>
  `${(radius * Math.cos(angle)).toFixed(2)} ${(radius * Math.sin(angle)).toFixed(2)}`

const RAY_PATHS = Array.from({ length: RAYS }, (_, i) => {
  const start = (i / RAYS) * Math.PI * 2
  const end = start + (Math.PI * 2) / RAYS / 2
  return [
    'M0 0',
    `Q${point(R * 0.55, start - TWIST)} ${point(R, start)}`,
    `A${R} ${R} 0 0 1 ${point(R, end)}`,
    `Q${point(R * 0.55, end - TWIST)} 0 0`,
    'Z',
  ].join(' ')
})

type SpiralProps = {
  className?: string
  spinning?: boolean
}

export default function Spiral({ className = '', spinning = false }: SpiralProps) {
  return (
    <svg
      className={`spiral ${spinning ? 'spiral--spin' : ''} ${className}`}
      viewBox="-50 -50 100 100"
      aria-hidden="true"
      focusable="false"
    >
      {RAY_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
