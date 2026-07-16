import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Aryabhatta Knowledge University",
    location: "Patna, Bihar",
    year: "2024 - 2026",
    cgpa: "CGPA: 8.29",
    description:
      "Studying software engineering, data structures, web development, database management, Java, Python, Flutter, React, and data analytics.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Patna University",
    location: "Patna, Bihar",
    year: "2021 - 2024",
    cgpa: "CGPA: 8.50",
    description:
      "Learned programming fundamentals, Java, Python, DBMS, Operating Systems, Networking, and Software Engineering.",
  },
  {
    degree: "Intermediate (PCM)",
    college: "Bihar School Examination Board",
    location: "Bihar",
    year: "2019 - 2021",
    Percentage: "75%",
    description:
      "Completed Physics, Chemistry and Mathematics.",
  },
  {
    degree: "Matriculation",
    college: "Central Board of Secondary Education (CBSE)",
    location: "Bihar",
    year: "2019",
    Percentage: "58%",
    description:
      "Completed secondary education with strong interest in computers.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Education
          </h2>

          <p className="mt-4 text-gray-600">
            My academic journey
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative border-l-4 border-blue-600 ml-5">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >

              {/* Circle */}

              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full shadow-lg">
                <FaGraduationCap className="text-white" />
              </span>

              {/* Card */}

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">

                <h3 className="text-2xl font-bold">
                  {item.degree}
                </h3>

                <h4 className="text-blue-600 mt-2">
                  {item.college}
                </h4>

                <p className="text-gray-500 mt-1">
                  {item.location}
                </p>

                <div className="flex flex-wrap gap-4 mt-4">

                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                    {item.year}
                  </span>

                  {item.cgpa && (
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                      {item.cgpa}
                    </span>
                  )}

                </div>

                <p className="mt-5 text-gray-600 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;