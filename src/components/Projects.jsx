import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Website",
    image: "/projects/ecommerce.png",
    description:
      "A full-stack e-commerce platform with authentication, shopping cart, admin dashboard, and payment integration.",
    tech: ["React", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/yourusername/ecommerce",
    live: "#",
  },
  {
    title: "Flutter App",
    image: "/projects/flutter.png",
    description:
      "A cross-platform mobile app built using Flutter with Firebase authentication and REST API integration.",
    tech: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/yourusername/flutter-app",
    live: "#",
  },
  {
    title: "Data Analytics Dashboard",
    image: "/projects/dashboard.png",
    description:
      "Interactive dashboard created using Python, Pandas, Excel, and Power BI for sales analysis.",
    tech: ["Python", "Power BI", "Excel"],
    github: "https://github.com/yourusername/dashboard",
    live: "#",
  },
  {
    title: "Library Management System",
    image: "/projects/library.png",
    description:
      "A CRUD-based library management system with login, issue books, and return book functionality.",
    tech: ["Java", "MySQL"],
    github: "https://github.com/yourusername/library",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-gray-600 mt-4">
            Here are some of the projects I've built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;