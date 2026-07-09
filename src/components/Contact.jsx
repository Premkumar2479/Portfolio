import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-100">

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity:0,y:-40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Contact Me
          </h2>

          <p className="mt-4 text-gray-600">
            Let's build something amazing together.
          </p>

        </motion.div>

        <form className="mt-16 bg-white rounded-2xl shadow-xl p-8 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-4"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full border rounded-lg p-4"
          ></textarea>

          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;