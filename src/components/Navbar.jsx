import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Projects', 'Skills', 'Contact', 'Guestbook']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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
          <a key={link} href={`#${link.toLowerCase()}`} onClick={e => handleNav(e, link)}>
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
