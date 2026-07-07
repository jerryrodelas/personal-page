import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

const FILTERS = ['All', 'Mobile', 'Web', 'In Progress']

function matchFilter(project, filter) {
  if (filter === 'All') return true
  if (filter === 'In Progress') return project.status === 'in-progress'
  return project.category.toLowerCase() === filter.toLowerCase()
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = projects.filter(p => matchFilter(p, active))

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built — shipped, old, and in the works.</p>

        <div className="projects__filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' filter-btn--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="projects__empty">No projects in this category yet.</p>
        ) : active === 'All' ? (
          <>
            <div className="projects__section-header">
              <span className="projects__section-label">⚡ AI &amp; Agentic Projects</span>
            </div>
            <div className="projects__grid">
              {filtered.filter(p => p.agentic).map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="projects__section-header projects__section-header--spaced">
              <span className="projects__section-label">📱 Mobile Apps</span>
            </div>
            <div className="projects__grid">
              {filtered.filter(p => p.mobileApp).map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="projects__section-header projects__section-header--spaced">
              <span className="projects__section-label">Other Projects</span>
            </div>
            <div className="projects__grid">
              {filtered.filter(p => !p.agentic && !p.mobileApp).map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        ) : (
          <div className="projects__grid">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
