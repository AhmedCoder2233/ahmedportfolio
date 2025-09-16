// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
    className="h-[720px] pt-20 relative flex items-center justify-center px-6 md:h-[600px] pb-10 md:px-16 bg-gradient-to-br from-blue-950 via-purple-900 to-black text-white overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600/20 blur-3xl rounded-full"></div>

      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-5"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Ahmed Memon
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 blur opacity-30 rounded-lg"></span>
              <span className="relative bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
                Full Stack Web & Agentic AI Developer
              </span>
            </span>
          </h1>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            I design and build modern web apps & intelligent AI agents with
            performance, scalability, and elegance.
          </p>

          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow hover:shadow-lg transition"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-5 py-2 rounded-lg font-semibold border border-gray-500 hover:bg-white hover:text-black transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="ahmed.JPG"
              alt="Profile"
              className="w-full h-full"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
