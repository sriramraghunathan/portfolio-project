import React from "react";

export default function About() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my work and skills.",
      link: "https://portfolio-project-fba3.vercel.app/",
    },
    {
      title: "Todo App",
      description: "A simple task management app built with React.",
      link: "https://actodo-zeta-one.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app that uses an external API to display weather data.",
      link: "https://weather-app-lemon-delta-52.vercel.app/",
    },
    {
      title: "Greenden",
      description: "A Plants shopping site.",
      link: "https://greenden-tailwind-tan.vercel.app/",
    },
    {
      title: "Nostra",
      description: "A clothes shopping site.",
      link: "https://nostra-rouge-iota.vercel.app/contact.html",
    },
    {
      title: "Tripadvisor",
      description: "Get custom recs for your next trip",
      link: "https://tripadvisor-sigma.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500  to-gray-500 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h1 className="text-4xl text-black font-bold mb-6 text-center">
          About Me
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-lg text-black">
            Hi! I'm a passionate web developer with a focus on building modern
            and interactive applications. I'm constantly learning and
            experimenting with new technologies to expand my skill set.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col justify-between h-64 p-4 border border-white/30 bg-white bg-opacity-20 rounded-lg shadow-md hover:bg-opacity-30 transition"
              >
                <div>
                  <h3 className="text-xl text-black font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-black mt-2">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 mt-4 inline-block hover:text-green-500 hover:border-green-200 hover:rounded-full hover:w-20 hover:p-4 hover:bg-yellow-200 "
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
