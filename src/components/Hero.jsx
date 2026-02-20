import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-left">
          <p className="hero-kicker">DEVOPS • SITE RELIABILITY • CLOUD PLATFORM</p>

          <h1>
            Cloud & DevOps <br />
            Engineer
          </h1>

          <p className="hero-summary">
            I build and automate production-ready cloud platforms on AWS and Azure, with a focus on
            Terraform IaC, CI/CD automation, and reliability-first delivery.
          </p>

          <p className="hero-stackline">
            Terraform <span className="dotsep">•</span> Azure DevOps{" "}
            <span className="dotsep">•</span> Observability{" "}
            <span className="dotsep">•</span> Databricks ingestion (Delta Lake / Medallion)
          </p>

          <div className="hero-actions">
            <div className="hero-actions-row">
              <a className="btn-primary" href="#projects">View Projects</a>

              <a className="btn-secondary" href="/resume.docx" target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </div>

            <div className="hero-linkedin-row">
              <a
                className="btn-linkedin"
                href="https://www.linkedin.com/in/niveditaganesh/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="linkedin-icon" aria-hidden="true">in</span>
                View my LinkedIn profile
              </a>

              <span className="hero-linkedin-hint">
                1-click access to experience, projects & recommendations.
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hero-right">
          <aside className="hero-card" aria-label="Profile summary card">
            <div className="hero-card-top">
              <div className="hero-avatar">
                <img src="/profile.jpg" alt="Nivedita Ganesh" />
              </div>

              <div className="hero-card-name">Nivedita Ganesh</div>

              <div className="hero-card-tagline">
                Cloud/DevOps/SRE <span className="dotsep">•</span> AWS & Azure{" "}
                <span className="dotsep">•</span> Databricks
              </div>
            </div>

            <div className="hero-card-divider" />

            <div className="hero-metrics">
              <div className="metric">
                <div className="label">Location</div>
                <div className="value">Concord, Canada</div>
              </div>

              <div className="metric">
                <div className="label">Target</div>
                <div className="value">Cloud / DevOps / SRE</div>
              </div>

              <div className="metric">
                <div className="label">Experience</div>
                <div className="value">5+ years</div>
              </div>

              <div className="metric">
                <div className="label">Specialization</div>
                <div className="value">Platform automation</div>
              </div>

              <div className="metric metric-wide">
                <div className="label">Data</div>
                <div className="value">
                  Databricks <span className="dotsep">•</span> Delta Lake
                </div>
              </div>
            </div>

            <div className="hero-pills" aria-label="Key skills">
              <span className="pill">AWS</span>
              <span className="pill">Azure</span>
              <span className="pill">Terraform</span>
              <span className="pill">CI/CD</span>
              <span className="pill">Databricks</span>
              <span className="pill">SRE</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
