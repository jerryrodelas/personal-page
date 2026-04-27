import { useInView } from '../hooks/useInView'
import './ProjectCard.css'

export default function ProjectCard({ project, delay = 0 }) {
  const [ref, inView] = useInView()
  const { title, tagline, description, status, tags, appStoreLink, playStoreLink, githubLink, liveLink, image } = project

  return (
    <article
      ref={ref}
      className={`card fade-up${inView ? ' visible' : ''}${delay ? ` delay-${delay}` : ''}`}
    >
      {image && (
        <div className="card__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="card__body">
        <div className="card__header">
          <h3 className="card__title">{title}</h3>
          <span className={`card__badge card__badge--${status}`}>
            {status === 'in-progress' ? 'In Progress' : 'Completed'}
          </span>
        </div>

        <p className="card__tagline">{tagline}</p>
        <p className="card__desc">{description}</p>

        {tags.length > 0 && (
          <div className="card__tags">
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}

        {(appStoreLink || playStoreLink || githubLink || liveLink) && (
          <div className="card__links">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="card__link">
                Live Demo ↗
              </a>
            )}
            {appStoreLink && (
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="card__link">
                App Store ↗
              </a>
            )}
            {playStoreLink && (
              <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="card__link">
                Play Store ↗
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card__link">
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
