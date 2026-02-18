import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertificationsSection from "./components/CertificationsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="app"
      style={{
        background: "linear-gradient(to right, #014421, #022c22, #001f1f)",
        fontFamily: "'Georgia'",
        lineHeight: 2,
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
