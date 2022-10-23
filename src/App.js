import Navbar from "./components/navbar";
import Hero from "./components/hero";
function App() {

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
    </section>
  );
}

export default App;
