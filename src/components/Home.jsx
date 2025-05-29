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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white text-black">
      <div className="w-full max-w-3xl text-center space-y-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={sriramimg}
            alt="Sriram"
            className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h1 className="text-3xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-500">SRIRAM</span>
          </h1>
          <a href={sriram1} target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-400 text-black font-semibold mt-5 px-5 py-2 text-sm border border-yellow-300 rounded-full shadow-md hover:bg-orange-500 transition animate-bounce">
              Download CV
            </button>
          </a>
        </div>

        {/* Bio */}
        <p className="text-base md:text-xl text-gray-600">
          Fullstack Developer | Passionate about building powerful, scalable,
          and user-friendly web apps.
        </p>

        {/* Tech Stack */}
        <div className="mt-6">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-20 text-6xl md:text-6xl mt-10 mb-20">
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

        {/* About Section */}
        <div className="mt-10">
          <About />
        </div>
      </div>
    </div>
  );
}
