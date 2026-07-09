import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <h1 className="text-5xl font-bold">About Section</h1>
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl font-bold">Skills Section</h1>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <h1 className="text-5xl font-bold">Projects Section</h1>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl font-bold">Contact Section</h1>
      </section>
    </>
  );
}

export default App;