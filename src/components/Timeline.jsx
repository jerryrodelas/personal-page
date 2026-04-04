import { timelineItems } from '../data/timeline'
import { useInView } from '../hooks/useInView'
import './Timeline.css'

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`timeline__item fade-up${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="timeline__icon">{item.icon}</div>
      <div className="timeline__content">
        <span className="timeline__year">{item.year}</span>
        <h3 className="timeline__title">{item.title}</h3>
        <p className="timeline__place">{item.place}</p>
        <p className="timeline__desc">{item.description}</p>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="journey" className="timeline section">
      <div className="container">
        <h2 className="section-title">The Journey</h2>
        <p className="section-subtitle">
          From electronics to App Store — a non-traditional path to software development.
        </p>
        <div className="timeline__list">
          {timelineItems.map((item, i) => (
            <TimelineItem key={item.year + item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
