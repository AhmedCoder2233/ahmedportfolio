"use client";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaRocket, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-6 py-20 md:px-16 bg-gradient-to-br from-blue-950 via-purple-900 to-black text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-[400px] h-[400px] bg-purple-700 rounded-full blur-3xl absolute top-10 left-10 animate-pulse" />
        <div className="w-[300px] h-[300px] bg-blue-700 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 z-10 text-center"
      >
        About <span className="text-purple-400">Me</span>
      </motion.h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl z-10">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <p>
            I’m <span className="text-purple-400 font-semibold">Ahmed</span>, a
            passionate{" "}
            <span className="text-blue-400 font-semibold">
              Full Stack Web & Agentic AI Developer
            </span>
            . With expertise in building modern, scalable applications, I love
            blending creativity with technology to craft digital experiences
            that truly stand out.
          </p>
          <p>
            From designing sleek frontends to building powerful backends and
            AI-powered systems, my goal is to deliver solutions that are{" "}
            <span className="text-purple-300 font-semibold">efficient</span>,{" "}
            <span className="text-purple-300 font-semibold">innovative</span>,
            and <span className="text-purple-300 font-semibold">impactful</span>
            .
          </p>
        </motion.div>

        {/* Right - Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {[
            {
              icon: <FaCode size={32} />,
              title: "Clean Code",
              desc: "Writing optimized and maintainable code.",
            },
            {
              icon: <FaBrain size={32} />,
              title: "AI Expertise",
              desc: "Building smart agentic AI solutions.",
            },
            {
              icon: <FaRocket size={32} />,
              title: "Scalability",
              desc: "Creating apps that grow with your business.",
            },
            {
              icon: <FaLaptopCode size={32} />,
              title: "Full Stack",
              desc: "Frontend to backend, complete solutions.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              <div className="text-purple-400 mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
