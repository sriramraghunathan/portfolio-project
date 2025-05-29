import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import About from "./components/About";
import Certification from "./components/Certification";
import Navbars from "./components/common/Navbars";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from "./components/common/Footer";
function App() {
  return (
    <div className="px-10 bg-white border rounded-md">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/certification" element={<Certification/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
