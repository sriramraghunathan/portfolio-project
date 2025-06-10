import React from "react";
import { motion } from "framer-motion";
import emc from "../assets/Full Stack Certificate -Sriram(1).png";
import softtech from "../assets/softtech certificate.jpg";
import emcfun from "../assets/emc fundamentals.png";

const Certification = () => {
  const certifications = [
    {
      title: "Full Stack Web Development - [MERN STACK]",
      description:
        "Completed full MERN stack bootcamp at Error Makes Clever Institute.",
      image: emc,
    },
    {
      title: "Fundamentals of Web Development Program",
      description:
        "Completed Fundamentals of Web Development Program at Error Makes Clever Institute.",
      image: emcfun,
    },
    {
      title: "Frontend Developer Certificate - [HTML, CSS, JavaScript]",
      description: "Completed Frontend training at Soft Tech Institute.",
      image: softtech,
    },
  ];

  return (
    <section
      id="certifications"
      className="px-4 py-10 sm:px-6 lg:px-8 bg-yellow-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase">
            Certifications
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Verified achievements from tech institutes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 sm:h-52 md:h-56 object-cover"
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 hover:underline">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
