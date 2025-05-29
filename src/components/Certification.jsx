import React from "react";
import emc from "../assets/Full Stack Certificate -Sriram(1).png";
import softtech from "../assets/softtech certificate.jpg";
import emcfun from "../assets/emc fundamentals.png";

const Certification = () => {
  const certifications = [
    {
      title: "Full Stack Web Development -[ MERN STACK ]",
      description:
        "Completed full MERN stack bootcamp at Error Makes Clever Institute.",
      image: emc,
    },
    {
      title: "Fundamentas of Web Development Program",
      description:"Completed Fundamentas of Web Development Program at Error Makes Clever Institute.",
      image: emcfun,
    },
    {
      title: "Frontend Developer Certificate -[ HTML , CSS , Java Script ]",
      description: "Completed Frontend at Soft Tech Institute.",
      image: softtech,
    },
  ];

  return (
    <section id="certifications" className="">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-black">
          CERTIFICATIONS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 border border-white/30 bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-40 rounded-lg shadow-md hover:bg-opacity-30 transition"
          >
            <div>
              <h3 className="text-xl font-bold text-black dark:text-black hover:underline">
                {certification.title}
              </h3>
              <p className="text-black dark:text-gray-600 mt-2 mb-3">
                {certification.description}
              </p>
            </div>
            <img
              src={certification.image}
              alt={certification.title}
              className="w-full h-full object-cover rounded "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
