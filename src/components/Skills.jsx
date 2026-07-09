import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiFlutter,
  SiJavascript,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    title: "Java",
    icon: <FaJava className="text-orange-600 text-5xl" />,
    level: "Advanced",
  },
  {
    title: "Python",
    icon: <FaPython className="text-blue-500 text-5xl" />,
    level: "Intermediate",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    level: "Intermediate",
  },
  {
    title: "React",
    icon: <FaReact className="text-cyan-500 text-5xl" />,
    level: "Intermediate",
  },
  {
    title: "Spring Boot",
    icon: <SiSpringboot className="text-green-600 text-5xl" />,
    level: "Learning",
  },
  {
    title: "Flutter",
    icon: <SiFlutter className="text-sky-500 text-5xl" />,
    level: "Learning",
  },
  {
    title: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    level: "Advanced",
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt className="text-blue-600 text-5xl" />,
    level: "Advanced",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
    level: "Intermediate",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600 text-5xl" />,
    level: "Advanced",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs className="text-green-600 text-5xl" />,
    level: "Intermediate",
  },
  {
    title: "MySQL",
    icon: <SiMysql className="text-blue-500 text-5xl" />,
    level: "Advanced",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-5xl" />,
    level: "Intermediate",
  },
  {
    title: "Git",
    icon: <FaGitAlt className="text-red-500 text-5xl" />,
    level: "Intermediate",
  },
  {
    title: "GitHub",
    icon: <FaGithub className="text-gray-900 text-5xl" />,
    level: "Intermediate",
  },
  {
    title: "Postman",
    icon: <SiPostman className="text-orange-500 text-5xl" />,
    level: "Intermediate",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-600">Skills</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Technologies and tools I use to build modern web and mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center"
            >
              <div className="flex justify-center mb-5">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold">
                {skill.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {skill.level}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;