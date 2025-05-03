import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center mb-2">
    <h1 className="text-xl font-bold">My Portfolio</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/blog" className="hover:underline">
        Blogs
      </Link>
      <Link to="/about" className="hover:underline">
        About
      </Link>
      <Link
        to="/login"
        className="hover:underline bg-orange-500 p-3 hover:bg-green-400 hover:text-black hover:rounded-full border-orange-500 rounded-xl text-white"
      >
        Login
      </Link>
    </div>
  </nav>
);

export default Navbar;
