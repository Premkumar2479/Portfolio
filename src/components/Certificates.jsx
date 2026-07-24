import { motion } from "framer-motion";

const certificates = [
  {
    title: "Java Programming",
    image: `${import.meta.env.BASE_URL}certificates/java.jpg`,
  },
  {
    title: "Python",
    image: `${import.meta.env.BASE_URL}certificates/python.jpg`,
  },
  {
    title: "SQL",
    image: `${import.meta.env.BASE_URL}certificates/sql.jpg`,
  },
  {
    title: "Power BI",
    image: `${import.meta.env.BASE_URL}certificates/powerbi.jpg`,
  },
  {
    title: "React",
    image: `${import.meta.env.BASE_URL}certificates/react.jpg`,
  },
  {
    title: "Flutter",
    image: `${import.meta.env.BASE_URL}certificates/flutter.jpg`,
  },
];

function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          My <span className="text-blue-600">Certificates</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {certificate.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;