import Navbar from "./components/layout/Navbar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";


function App() {
  return (
    <div className="relative bg-[var(--bg)] text-[var(--heading)] overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />
    </div>
  );
}

export default App;