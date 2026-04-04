import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Projects', 'Skills', 'Journey', 'Contact', 'Guestbook']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('About')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    links.forEach(link => {
      const el = document.getElementById(link.toLowerCase())
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(link) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a className="navbar__logo" href="/" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        JR<span>.dev</span>
      </a>

      <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {links.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={e => handleNav(e, link)}
            className={active === link ? 'navbar__link--active' : ''}
          >
            {link}
          </a>
        ))}
      </nav>

      <button
        className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </header>
  )
}
