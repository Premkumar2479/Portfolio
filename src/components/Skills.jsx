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
  SiVisualstudiocode,
} from "react-icons/si";

const skills = [
  {
    title: "Java",
    icon: <FaJava size={45} className="text-orange-600" />,
    level: "Advanced",
  },
  {
    title: "Python",
    icon: <FaPython size={45} className="text-blue-500" />,
    level: "Intermediate",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={45} className="text-yellow-400" />,
    level: "Intermediate",
  },
  {
    title: "React",
    icon: <FaReact size={45} className="text-cyan-500" />,
    level: "Intermediate",
  },
  {
    title: "Spring Boot",
    icon: <SiSpringboot size={45} className="text-green-600" />,
    level: "Learning",
  },
  {
    title: "Flutter",
    icon: <SiFlutter size={45} className="text-sky-500" />,
    level: "Learning",
  },
  {
    title: "HTML5",
    icon: <FaHtml5 size={45} className="text-orange-500" />,
    level: "Advanced",
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt size={45} className="text-blue-600" />,
    level: "Advanced",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss size={45} className="text-cyan-400" />,
    level: "Intermediate",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap size={45} className="text-purple-600" />,
    level: "Advanced",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs size={45} className="text-green-600" />,
    level: "Intermediate",
  },
  {
    title: "MySQL",
    icon: <SiMysql size={45} className="text-blue-500" />,
    level: "Advanced",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={45} className="text-green-600" />,
    level: "Intermediate",
  },
  {
    title: "Git",
    icon: <FaGitAlt size={45} className="text-red-500" />,
    level: "Intermediate",
  },
  {
    title: "GitHub",
    icon: <FaGithub size={45} />,
    level: "Intermediate",
  },
  {
    title: "VS Code",
    icon: <SiVisualstudiocode size={45} className="text-blue-500" />,
    level: "Daily Use",
  },
  {
    title: "Postman",
    icon: <SiPostman size={45} className="text-orange-500" />,
    level: "Intermediate",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-600">Skills</span>
          </h2>

          <p className="mt-5 text-gray-600">
            Technologies I use to build modern applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >

              <div className="flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {skill.title}
              </h3>

              <p className="text-gray-500 mt-2">
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

