import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import { library } from '@fortawesome/fontawesome-svg-core'
import Skill from "./components/skill";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {

  library.add()
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
