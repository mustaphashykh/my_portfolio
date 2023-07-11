import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Project from './Components/Project';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_me" element={<About />} />
          <Route path="/my_skills" element={<Skills />} />
          <Route path="/my_projects" element={<Project />} />
          <Route path="/contact_me" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
