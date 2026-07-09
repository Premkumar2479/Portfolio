import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pravatar.cc/500"
            alt="About"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            I'm <span className="font-bold text-blue-600">Prem Kumar</span>,
            an MCA student passionate about software development,
            data analytics, and solving real-world problems.

            I enjoy creating responsive web applications using
            React, Java, Spring Boot, SQL, and Flutter.

            I'm continuously improving my programming,
            problem-solving, and data analysis skills to prepare
            for placements and software engineering roles.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600">10+</h3>
              <p className="mt-2">Projects</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600">15+</h3>
              <p className="mt-2">Technologies</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600">2026</h3>
              <p className="mt-2">MCA Graduation</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600">100%</h3>
              <p className="mt-2">Learning Mindset</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;