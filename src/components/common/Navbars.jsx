import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-4 py-2 sm:py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-lg sm:text-2xl font-bold text-black">My Portfolio</h1>

      <div className="hidden md:flex space-x-4 text-2xl sm:text-base">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/blog" className="hover:underline">
          Blogs
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/certification" className="hover:underline">
          Certification
        </Link>
        <Link
          to="/login"
          className="hover:underline bg-orange-500 px-3 py-1 rounded-xl text-white hover:bg-green-400 hover:text-black"
        >
          Login
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-black focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50 text-base">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Home
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Blogs
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            About
          </Link>
          <Link
            to="/certification"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Certification
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="hover:underline bg-orange-500 px-4 py-2 rounded-xl text-white hover:bg-green-400 hover:text-black"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
