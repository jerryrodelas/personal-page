import { useState } from 'react'
import './About.css'

export default function About() {
  const [avatarLoaded, setAvatarLoaded] = useState(false)

  return (
    <section id="about" className="about section">
      <div className="about__glow" aria-hidden="true" />
      <div className="container">
        <div className="about__inner">
          <div className="about__text">
            <div className="about__name-row">
              <img
                className="about__avatar"
                src="/avatar.jpg"
                alt="Jerriand Rodelas"
                style={{ display: avatarLoaded ? 'block' : 'none' }}
                onLoad={() => setAvatarLoaded(true)}
              />
              <div>
                <p className="about__greeting">Hey, I'm</p>
                <h1 className="about__name">Jerriand<br />Rodelas</h1>
              </div>
            </div>
            <p className="about__role">
              <span>Mobile App Developer</span> &amp; Full-Stack Engineer
            </p>
            <p className="about__bio">
              I build apps and products that live on people's phones and screens.
              I've shipped two iOS apps to the App Store — handling everything from
              architecture to release — and I'm actively seeking a junior engineering
              role where I can contribute to production systems and keep growing.
            </p>
            <div className="about__badges">
              <span className="about__badge">📱 2 Apps on the App Store</span>
              <span className="about__badge">🚀 Open to Junior Roles</span>
              <span className="about__badge">📍 Sydney, NSW</span>
            </div>
            <div className="about__actions">
              <a
                className="btn btn--primary"
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                See my work ↓
              </a>
              <a
                className="btn btn--ghost"
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
