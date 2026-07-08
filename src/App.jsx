import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div
        id="home"
        className="h-screen flex justify-center items-center text-5xl font-bold"
      >
        Home Section
      </div>

      <div
        id="about"
        className="h-screen flex justify-center items-center text-5xl font-bold bg-gray-100"
      >
        About Section
      </div>

      <div
        id="skills"
        className="h-screen flex justify-center items-center text-5xl font-bold"
      >
        Skills Section
      </div>

      <div
        id="projects"
        className="h-screen flex justify-center items-center text-5xl font-bold bg-gray-100"
      >
        Projects Section
      </div>

      <div
        id="contact"
        className="h-screen flex justify-center items-center text-5xl font-bold"
      >
        Contact Section
      </div>
    </>
  );
}

export default App;