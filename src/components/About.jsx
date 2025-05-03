import React from "react";

export default function About() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my work and skills.",
      link: "https://portfolio-project-fba3.vercel.app/", // Replace with your portfolio link
    },
    {
      title: "Todo App",
      description: "A simple task management app built with React.",
      link: "https://actodo-zeta-one.vercel.app/", // Replace with your GitHub link
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app that uses an external API to display weather data.",
      link: "https://weather-app-lemon-delta-52.vercel.app/", // Replace with your GitHub link
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-lg text-gray-700">
          Hi! I'm a passionate web developer with a focus on building modern and
          interactive applications. I'm constantly learning and experimenting
          with new technologies to expand my skill set.
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md hover:bg-yellow-200">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-4 inline-block hover:text-red-500"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
