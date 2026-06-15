import Navbar from "./components/layout/Navbar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";
import Certificates from "./sections/Certificates/Certificates";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div className="relative bg-[var(--bg)] text-[var(--heading)] overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Education />

      <Contact />

      <Certificates />

      <Footer />
    </div>
  );
}

export default App;