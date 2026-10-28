import { useEffect } from 'react'
import Navigation from './components/Navigation.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Skills from './sections/Skills.jsx'
import Writing from './sections/Writing.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
     <Navigation />
    <div className="portfolio-layout">
      <ProfileCard />
      <div className="portfolio-main">
        <main className="main-content">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Writing />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
    </>
  )
}
