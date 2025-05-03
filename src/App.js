import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import About from "./components/About";
import Navbars from "./components/common/Navbars";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className='px-10 bg-white border rounded-md'>
      <BrowserRouter>
      <Navbars/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
