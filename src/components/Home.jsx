import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import sriramimg from "../assets/sriram.jpg";
import sriram1 from "../assets/SRIRAM1.pdf";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center px-4 py-10 md:py-20">
      <div className="text-center w-full max-w-3xl space-y-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src={sriramimg}
            alt="Sriram"
            className="w-36 h-36 rounded-full border-2 border-white"
          />
          <h1 className="text-3xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-500">SRIRAM</span>
          </h1>
          <a href={sriram1} target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-400 text-black font-medium px-4 py-2 text-sm border-2 border-yellow-300 rounded-full animate-bounce">
              Download CV
            </button>
          </a>
        </div>

        {/* Subheading */}
        <p className="text-base md:text-xl text-gray-300">
          Fullstack Developer | Passionate about building powerful and
          user-friendly web apps.
        </p>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-3xl md:text-4xl">
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
        </div>

        {/* Button to Work Page */}
        <Link
          to="/about"
          className="inline-block px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base transition"
        >
          View My Work
        </Link>
      </div>

      {/* Blog CTA */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-2">
        <Link
          to="/blog"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-l-full text-base transition w-full sm:w-auto text-center"
        >
          I Like To Write Blogs.
        </Link>
        <Link
          to="/blog"
          className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-r-full text-base transition w-full sm:w-auto text-center"
        >
          Click Here..
        </Link>
      </div>
      
    </div>
  );
}
