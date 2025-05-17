import React from "react";
import Home from "./Home/Home";
import Course from "./Course/course";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <div className="dark:bg-slate-300 dark:text-black">
      <Routes>
          <Route path="/" element={ <Home />} />
        <Route path="/courses" element={ <Course />} />
      </Routes>
       </div>
    </>
  );
};

export default App;
