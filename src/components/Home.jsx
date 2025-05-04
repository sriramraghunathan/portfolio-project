import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaLinkedin, FaInstagram } from "react-icons/fa";
import sriramimg from "../assets/sriram.jpg"
import sriram1 from "../assets/SRIRAM1.pdf";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiGoogle,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center px-4  pb-40">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex gap-20 ">
          <img
            src={sriramimg}
            alt="no"
            className="w-24 h-24 border-black rounded-full mt-2"
          />
          <p className="text-center mt-5 ">
            Hi, I'm <span className="text-blue-500 ">SRIRAM</span>
          </p>
          <a href={sriram1} target="_blank">
            <button className="bg-orange-400 text-black animate-bounce font-medium w-13 h-15 text-xs mt-8  p-2 border-yellow-300 border-2 rounded-full ">
              Download CV
            </button>
          </a>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Fullstack Developer | Passionate about building powerful and
          user-friendly web apps.
        </p>

        {/* Tech Stack Icons */}
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-4xl text-white mb-10">
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
        </div>

        <Link
          to="/about"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg transition"
        >
          View My Work
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-10 mb-8">
        <a
          href="sriram:sriramragunathan2002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-3xl hover:scale-110 transition"
        >
          <SiGoogle />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-3xl hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-3xl hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
      </div>
      <div>
        <Link
          to="/blog"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-l-full text-lg transition"
        >
          I Like To Write Blogs.
        </Link>
        <Link
          to="/blog"
          className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-r-full text-lg transition"
        >
          Click Here..
        </Link>
      </div>
    </div>
  );
}
