import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero/Hero";

function App() {
  return (
    <div className="relative bg-[var(--bg)] text-[var(--heading)] overflow-x-hidden">

      <Navbar />

      <Hero />

    </div>
  );
}

export default App;