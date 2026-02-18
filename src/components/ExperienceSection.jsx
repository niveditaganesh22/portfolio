import React from "react";
import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section className="experience" id="experience">
      <div className="section-head">
        <h2>Experience</h2>
        <p className="section-subtitle">
          Platform automation, IaC, CI/CD, integrations, and reliability engineering across enterprise environments.
        </p>
      </div>

      <div className="timeline">
        {experience.map((item, idx) => (
          <article className="timeline-item" key={`${item.company}-${idx}`}>
            <div className="timeline-dot" aria-hidden="true" />

            <header className="timeline-header">
              <div>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">
                  {item.company} <span className="timeline-sep">•</span>{" "}
                  {item.location} <span className="timeline-sep">•</span>{" "}
                  <span className="timeline-period">{item.period}</span>
                </p>
              </div>
            </header>

            <ul className="timeline-bullets">
              {item.impact.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <p className="timeline-scope">{item.scope}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
