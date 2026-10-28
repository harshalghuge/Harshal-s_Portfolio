import { useEffect, useState } from 'react'
import { House, Folder, BriefcaseBusiness, Wrench, Mail } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home', Icon: House },
  { label: 'Projects', href: '#projects', Icon: Folder },
  { label: 'Experience', href: '#experience', Icon: BriefcaseBusiness },
  { label: 'Skills', href: '#skills', Icon: Wrench },
  { label: 'Contact', href: '#contact', Icon: Mail },
]

export default function Navigation() {
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = links.map(({ href }) => document.querySelector(href)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(`#${visible.target.id}`)
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav-wrap">
      <nav className="floating-nav" aria-label="Main navigation">
        {links.map(({ label, href, Icon }) => (
          <a key={href} href={href} aria-label={label} title={label} className={`nav-link ${active === href ? 'nav-link-active' : ''}`}>
            <Icon size={21} strokeWidth={1.9} aria-hidden="true" />
            <span className="nav-tooltip">{label}</span>
          </a>
        ))}
      </nav>
    </header>
  )
}