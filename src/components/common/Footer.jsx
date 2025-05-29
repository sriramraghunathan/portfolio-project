import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center mb-10 mt-20">
      <a
        href="https://www.linkedin.com/in/sriram-r-b22a73348/"
        target="_blank"
        className="p-6 bg-blue-600 hover:bg-blue-500 text-white rounded-l-full text-base transition w-full sm:w-auto text-center"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/sriramraghunathan"
        target="_blank"
        className="p-6 bg-orange-600 hover:bg-orange-500 text-white rounded-r-full text-base transition w-full sm:w-auto text-center"
      >
        GitHub
      </a>
    </div>
  );
}

export default Footer
