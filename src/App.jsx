import './App.css'
import ScrollProgress from './components/ScrollProgress'
import Navbar    from './components/Navbar'
import About     from './components/About'
import Stats     from './components/Stats'
import Projects  from './components/Projects'
import Skills    from './components/Skills'
import Timeline  from './components/Timeline'
import Contact   from './components/Contact'
import Guestbook from './components/Guestbook'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
        <Guestbook />
      </main>
      <Footer />
    </>
  )
}
