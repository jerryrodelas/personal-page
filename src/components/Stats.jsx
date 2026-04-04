import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import './Stats.css'

const STATS = [
  { value: 2,   suffix: '',  label: 'Apps on the App Store', icon: '📱' },
  { value: 15,  suffix: '+', label: 'Years in Tech',         icon: '🔧' },
  { value: 6,   suffix: '+', label: 'Certifications',        icon: '🎓' },
  { value: 1,   suffix: '',  label: 'Bold Career Pivot',     icon: '🚀' },
]

function Counter({ value, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1200
    const step = Math.ceil(duration / value)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= value) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [active, value])

  return <span className="stat__value">{active ? count : 0}{suffix}</span>
}

export default function Stats() {
  const [ref, inView] = useInView()

  return (
    <section className="stats">
      <div className="container">
        <div ref={ref} className="stats__grid">
          {STATS.map(({ value, suffix, label, icon }, i) => (
            <div key={label} className={`stat fade-up delay-${i + 1}${inView ? ' visible' : ''}`}>
              <span className="stat__icon">{icon}</span>
              <Counter value={value} suffix={suffix} active={inView} />
              <p className="stat__label">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
