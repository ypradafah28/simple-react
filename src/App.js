import Navbar from "./components/navbar";
import ListTujuan from "./components/ListTujuan";
function App() {
  
  return (
    <section>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <section>
        <ListTujuan />
      </section>
    </section>
  );
}

export default App;
