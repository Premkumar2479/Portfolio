import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-blue-600">
          Prem Kumar
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link to="home" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              About
            </Link>
          </li>

          <li>
            <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Skills
            </Link>
          </li>

          <li>
            <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Projects
            </Link>
          </li>

          <li>
            <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;