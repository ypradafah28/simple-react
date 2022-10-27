import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import Skill from "./components/skill";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import { useRef } from 'react'

function App() {

  const linkHead = useRef(null)

  const scroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <section>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <section>
        <Hero />
      </section>
      <section className="bg-sky-300">
        <Aboutme />
        <Skill />
      </section>
      <section className="bg-yellow-300">
        <Portfolio />
      </section>
      <section className="bg-sky-300">
        <Contact />
      </section>
    </section>
  );
}

export default App;
