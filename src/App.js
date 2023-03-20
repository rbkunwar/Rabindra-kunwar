import './App.css';

import "./style.css";

import { Hero }from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
  <>
<Routes>
  <Route path="/" element={<Hero />} />
  <Route path="skills" element={<Skills />} />
  <Route path="projects" element={<Projects />} />
  <Route path="about-me" element={<AboutMe />} />
  <Route path="contact" element={<Contact />} />
</Routes>
</>
  );
}

export default App;
