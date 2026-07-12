import { motion } from "framer-motion";
import profile from "../assets/images/nick.jpg";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-600 text-lg font-semibold">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-extrabold mt-3 leading-tight">
            Prem Kumar
          </h1>

          <h2 className="text-3xl text-gray-700 mt-5">
            Full Stack Developer
          </h2>

          <h3 className="text-xl text-blue-600 mt-2">
            React • Spring Boot • Flutter • Data Analytics
          </h3>

          <p className="mt-8 text-gray-600 leading-8">
            I'm an MCA student passionate about building responsive web
            applications, mobile apps, and solving real-world problems through
            software development and data analytics.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl flex items-center gap-2 transition"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-7 py-3 rounded-xl transition"
            >
              Hire Me
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:prem@example.com"
              className="hover:text-blue-600 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute -inset-4 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>

            <img
  src={profile}
  alt="Prem Kumar"
  className="relative w-80 h-80 rounded-full border-8 border-white shadow-2xl object-cover"
/>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;