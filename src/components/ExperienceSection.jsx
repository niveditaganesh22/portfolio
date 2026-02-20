import React from "react";
import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section className="experience" id="experience">
      <div className="section-head">
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        {experience.map((item, idx) => (
          <article className="timeline-item" key={`${item.company}-${idx}`}>
            <header className="timeline-header">
              <h3 className="timeline-role">{item.role}</h3>

              <p className="timeline-company">
                {item.company} <span className="timeline-sep">•</span>{" "}
                {item.location} <span className="timeline-sep">•</span>{" "}
                <span className="timeline-period">{item.period}</span>
              </p>
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
