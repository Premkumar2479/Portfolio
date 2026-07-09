// import { Link } from "react-scroll";

// function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
//         <h1 className="text-2xl font-bold text-blue-600">
//           Prem Kumar
//         </h1>

//         <ul className="hidden md:flex gap-8 font-medium">
//           <li>
//             <Link to="home" smooth duration={500} className="cursor-pointer hover:text-blue-600">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-600">
//               About
//             </Link>
//           </li>

//           <li>
//             <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-blue-600">
//               Skills
//             </Link>
//           </li>

//           <li>
//             <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-600">
//               Projects
//             </Link>
//           </li>

//           <li>
//             <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-600">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", to: "home" },
    { title: "About", to: "about" },
    { title: "Skills", to: "skills" },
    { title: "Projects", to: "projects" },
    { title: "Education", to: "education" },
    { title: "Experience", to: "experience" },
    { title: "Certificates", to: "certificates" },
    { title: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Prem Kumar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 font-medium">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-blue-600"
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden lg:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col text-center py-5">

            {navLinks.map((item) => (
              <li key={item.to} className="py-3">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:text-blue-600"
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <li className="mt-3">
              <a
                href="/resume.pdf"
                download
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Download Resume
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;