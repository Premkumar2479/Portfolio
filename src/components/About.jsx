import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-blue-600">Me</span>
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Get to know me better.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.pravatar.cc/500"
              alt="Prem Kumar"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6">
              MCA Student & Full Stack Developer
            </h3>

            <p className="text-gray-600 leading-8 mb-6">
              Hi! I'm <span className="font-semibold text-blue-600">Prem Kumar</span>,
              currently pursuing a Master of Computer Applications (MCA).
              I enjoy building responsive web applications, solving real-world
              problems, and continuously learning new technologies.
            </p>

            <p className="text-gray-600 leading-8">
              My interests include React, Spring Boot, Flutter,
              Java, Python, SQL, Data Analytics, and Cloud Computing.
              I'm currently preparing for software developer and data analyst roles.
            </p>

            {/* Information */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              <div>
                <p><strong>Name :</strong> Prem Kumar</p>
                <p><strong>Degree :</strong> MCA</p>
                <p><strong>University :</strong> Aryabhatta Knowledge University</p>
              </div>

              <div>
                <p><strong>Email :</strong> yourmail@gmail.com</p>
                <p><strong>Location :</strong> Patna, Bihar</p>
                <p><strong>Status :</strong> Open to Work</p>
              </div>

            </div>

            <a
              href="/resume.pdf"
              className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Download Resume
            </a>

          </motion.div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <FaProjectDiagram className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-gray-500 mt-2">Projects Completed</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <FaLaptopCode className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="text-gray-500 mt-2">Technologies Learned</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold">2026</h3>
            <p className="text-gray-500 mt-2">MCA Graduation</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;