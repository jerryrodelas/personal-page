import { skillCategories } from '../data/skills'
import { useInView } from '../hooks/useInView'
import './Skills.css'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with.</p>

        <div ref={ref} className="skills__grid">
          {skillCategories.map(({ category, skills }, i) => (
            <div
              key={category}
              className={`skills__group fade-up delay-${i + 1}${inView ? ' visible' : ''}`}
            >
              <h3 className="skills__category">{category}</h3>
              <div className="skills__list">
                {skills.map(({ name }) => (
                  <span key={name} className="skills__item">{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
