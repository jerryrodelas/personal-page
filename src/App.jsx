import './App.css'
import Navbar    from './components/Navbar'
import About     from './components/About'
import Projects  from './components/Projects'
import Skills    from './components/Skills'
import Contact   from './components/Contact'
import Guestbook from './components/Guestbook'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Guestbook />
      </main>
      <Footer />
    </>
  )
}
