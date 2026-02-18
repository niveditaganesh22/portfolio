import React from "react";
import { education } from "../data/education";

export default function EducationSection() {
  return (
    <section className="education" id="education">
      <div className="section-head">
        <h2>Education</h2>
        <p className="section-subtitle">
          A solid engineering base + leadership and teaching experience.
        </p>
      </div>

      <div className="cards">
        {education.map((e) => (
          <article className="card" key={e.school}>
            <h3 className="card-title">{e.school}</h3>
            <p className="card-subtitle">
              {e.degree} <span className="dot">•</span> {e.location}
            </p>

            <ul className="card-list">
              {e.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
