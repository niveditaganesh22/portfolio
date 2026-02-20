import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="section-head">
          <h2>Contact</h2>
          <p className="section-subtitle">
            If you’re hiring for cloud / DevOps / platform roles, I’m happy to connect.
          </p>
        </div>

        <div className="footer-links">
          <a className="link" href="mailto:nivedita.ganesh.94@gmail.com">
            nivedita.ganesh.94@gmail.com
          </a>

          <a
            className="link"
            href="https://www.linkedin.com/in/niveditaganesh/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/niveditaganesh
          </a>

          <a
            className="link"
            href="https://github.com/niveditaganesh22"
            target="_blank"
            rel="noreferrer"
          >
            github.com/niveditaganesh22
          </a>
        </div>

        <p className="footer-note">© {new Date().getFullYear()} Nivedita Ganesh</p>
      </div>
    </footer>
  );
}
