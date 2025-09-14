// src/components/Header.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-extrabold text-xl tracking-wide"
        >
          &lt;Ahmed.Dev/&gt;
        </motion.h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-gray-200 transition font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {open ? (
            <FaTimes onClick={() => setOpen(false)} />
          ) : (
            <FaBars onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-4 space-y-4"
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="block text-white text-lg hover:text-gray-200 font-medium"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
