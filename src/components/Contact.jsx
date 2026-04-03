import { useInView } from '../hooks/useInView'
import './Contact.css'

const CONTACT = {
  email: 'jerriandrodelas@gmail.com',
  github: 'https://github.com/jerryrodelas',
  linkedin: 'https://www.linkedin.com/in/jerriand-rodelas-2013b5183/',
  twitter: '',
}

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div ref={ref} className={`contact__inner fade-up${inView ? ' visible' : ''}`}>
          <p className="contact__label">Let's connect</p>
          <h2 className="contact__heading">Open to opportunities</h2>
          <p className="contact__sub">
            Whether you're hiring, have a project in mind, or just want to say hello —
            my inbox is always open.
          </p>

          <a href={`mailto:${CONTACT.email}`} className="contact__cta">
            {CONTACT.email}
          </a>

          <div className="contact__links">
            {CONTACT.github && (
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact__link">
                GitHub ↗
              </a>
            )}
            {CONTACT.linkedin && (
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                LinkedIn ↗
              </a>
            )}
            {CONTACT.twitter && (
              <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" className="contact__link">
                Twitter / X ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
