import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top shadow-sm py-2">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#top">
          <img
            src="/logo.webp"
            alt="Nivedita Ganesh Logo"
            style={{ height: "36px" }}
          />
          <span className="d-none d-sm-inline" style={{ fontSize: "1rem", fontWeight: 500 }}>
            Nivedita Ganesh
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="justify-content-end d-flex">

          <ul className="navbar-nav text-end">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
