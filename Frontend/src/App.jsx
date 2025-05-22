import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Course from "./Course/course";
import Signup from "./Components/Signup";
import Contact from "./Contact/Contact";
import About from "./Components/About";



const App = () => {
  return (
    <>
    <div className="dark:bg-slate-300 dark:text-black">
      <Routes>
          <Route path="/" element={ <Home />} />
        <Route path="/courses" element={ <Course />} />
        <Route path="/contacts" element={ <Contact />} />
        <Route path="/about" element={ <About />} />
        <Route path="/signup" element={ <Signup />} />
      </Routes>
       </div>
    </>
  );
};

export default App;
