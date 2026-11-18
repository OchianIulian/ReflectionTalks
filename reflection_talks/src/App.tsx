import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gifts from './pages/Gifts'
import Destiny from './pages/Destiny'
import Community from './pages/Community'
import Podcast from './pages/Podcast'
import Contact from './pages/Contact'

const TITLES: Record<string, string> = {
  '/': 'ReflectionTalks — Return to your natural Self',
  '/gifts': 'My Gifts to You — ReflectionTalks',
  '/destiny': 'Your Next Destiny Program — ReflectionTalks',
  '/community': 'Our Monthly Community — ReflectionTalks',
  '/podcast': 'My PodcastTalks — ReflectionTalks',
  '/contact': 'Get in Touch — ReflectionTalks',
}

function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] ?? TITLES['/']

    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        requestAnimationFrame(() => {
          window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
        })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (elements.length === 0) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <RouteEffects />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/destiny" element={<Destiny />} />
          <Route path="/community" element={<Community />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
