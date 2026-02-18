import React from "react";
import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="section-head">
        <h2>Skills</h2>
        <p className="section-subtitle">
          A practical toolkit I use to ship reliable systems and keep them running.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
