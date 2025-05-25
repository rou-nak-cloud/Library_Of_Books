import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Course from "./Course/course";
import Signup from "./Components/Signup";
import Contact from "./Contact/Contact";
import About from "./Components/About";

import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider";



const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
    <div className="dark:bg-slate-300 dark:text-black">
      <Routes>
          <Route path="/" element={ <Home />} />
        <Route path="/courses" element={ authUser? <Course /> : <Navigate to="/signup" />} />
        <Route path="/contacts" element={ <Contact />} />
        <Route path="/about" element={ <About />} />
        <Route path="/signup" element={ <Signup />} />
      </Routes>
      <Toaster />
       </div>
    </>
  );
};

export default App;
