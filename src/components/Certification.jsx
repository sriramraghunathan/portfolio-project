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
    <section id="certifications" className="py-16 bg-yellow-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 uppercase tracking-wide">
            Certifications
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            My learning journey through certified programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:underline">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
