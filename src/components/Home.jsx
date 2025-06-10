import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import sriramimg from "../assets/sriram.jpg";
import sriram1 from "../assets/SRIRAM1.pdf";
import About from "./About";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-3xl text-center space-y-6">
        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={sriramimg}
            alt="Sriram"
            className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-blue-500 shadow-lg"
            whileHover={{ scale: 1.1 }}
          />
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Hi, I'm <span className="text-blue-500">SRIRAM</span>
          </motion.h1>
          <a href={sriram1} target="_blank" rel="noopener noreferrer">
            <motion.button
              className="bg-orange-400 text-black font-semibold mt-5 px-5 py-2 text-sm border border-yellow-300 rounded-full shadow-md hover:bg-orange-500 transition animate-bounce"
              whileHover={{ scale: 1.1 }}
            >
              Download CV
            </motion.button>
          </a>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-base md:text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Fullstack Developer | Passionate about building powerful, scalable,
          and user-friendly web apps.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mb-3">
            Tech Stack
          </h2>
          <motion.div
            className="flex flex-wrap justify-center gap-20 text-6xl md:text-6xl mt-10 mb-20"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <FaReact
              className="text-cyan-400 hover:scale-110 transition"
              title="React"
            />
            <FaNodeJs
              className="text-green-500 hover:scale-110 transition"
              title="Node.js"
            />
            <SiExpress
              className="text-gray-400 hover:scale-110 transition"
              title="Express.js"
            />
            <SiMongodb
              className="text-green-600 hover:scale-110 transition"
              title="MongoDB"
            />
            <SiTailwindcss
              className="text-sky-400 hover:scale-110 transition"
              title="Tailwind CSS"
            />
            <SiJavascript
              className="text-yellow-400 hover:scale-110 transition"
              title="JavaScript"
            />
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>
      </div>
    </motion.div>
  );
}
