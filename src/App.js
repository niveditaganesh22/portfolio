import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  return (
    <div
      className="min-vh-100 text-light"
      style={{
        background: "linear-gradient(to right, #014421, #022c22, #001f1f)",
        fontFamily: "'Georgia'",
        lineHeight: 2,
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
    </div>
  );
}
