import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import SideNav from "./components/SideNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./components/Education";
import About from "./components/About";
import Projects from "./components/Projects";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex gap-96">
      <ul className="flex gap-60 justify-between text-white">
        <li>
          <button>
            <Link to="/">Home</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/education">Education</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/about">About</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/projects">Projects</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          {" "}
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
