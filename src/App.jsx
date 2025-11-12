import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
          </BrowserRouter>

    
  );
}

export default App;
