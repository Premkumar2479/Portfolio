import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Experience
          </h2>

          <p className="mt-4 text-gray-600">
            My professional journey.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <FaLaptopCode className="text-5xl text-blue-600 mb-5"/>

          <h3 className="text-2xl font-bold">
            Fresher
          </h3>

          <p className="mt-3 text-gray-600">
            MCA student looking for Software Developer,
            Full Stack Developer and Data Analyst opportunities.
          </p>

          <ul className="list-disc ml-6 mt-5 text-gray-600 space-y-2">
            <li>Built Full Stack Projects</li>
            <li>React + Spring Boot</li>
            <li>Flutter Development</li>
            <li>Data Analytics Projects</li>
          </ul>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;