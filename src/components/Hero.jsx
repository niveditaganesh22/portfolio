import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <h1>Nivedita Ganesh</h1>
        <h2>Cloud & DevOps Engineer</h2>
        <p>AWS • Azure • Terraform • Databricks • CI/CD • Infrastructure Automation</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a
            href="/NiveditaGanesh_2025.pdf"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/profile.JPG" alt="Nivedita Ganesh" />
      </div>
    </section>
  );
}
