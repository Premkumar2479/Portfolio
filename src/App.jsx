import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollTop />
    </div>
  );
}

export default App;