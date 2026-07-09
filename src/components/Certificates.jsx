import { motion } from "framer-motion";

const certificates = [
  "Java Programming",
  "Python",
  "SQL",
  "Power BI",
  "React",
  "Flutter",
];

function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity:0,y:-50 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
        >
          <h2 className="text-center text-5xl font-bold">
            Certificates
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {certificates.map((item,index)=>(
            <motion.div
              key={index}
              whileHover={{ scale:1.05 }}
              className="bg-slate-100 rounded-xl p-8 shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>

              <p className="mt-3 text-gray-600">
                Certificate
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;