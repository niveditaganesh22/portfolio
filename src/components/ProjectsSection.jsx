import React from "react";
import { featuredProjects, otherProjects } from "../data/projects";

function ProjectCard({ p, isCompact = false }) {
  return (
    <article className="project" key={p.title}>
      <header className="project-header">
        <div>
          <h3>{p.title}</h3>
          <p className="project-oneLiner">{p.oneLiner}</p>
        </div>

        {p.status ? <span className="project-status">{p.status}</span> : null}
      </header>

      {Array.isArray(p.details) && p.details.length > 0 && (
        <ul className="project-details">
          {p.details.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      )}

      {Array.isArray(p.decisions) && p.decisions.length > 0 && (
        <div className="project-decisions">
          <h4>Architecture & decisions</h4>
          <dl>
            {p.decisions.map((d, idx) => (
              <div className="decision" key={idx}>
                <dt>{d.label}</dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="project-footer">
        <div className="project-tags">
          {p.tags?.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-links">
          {!p.links || p.links.length === 0 ? (
            <span className="muted">Links coming soon</span>
          ) : (
            p.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      {featuredProjects.map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}

      <h2 style={{ marginTop: "48px" }}>Other Projects</h2>
{otherProjects.map((p) => (
  <ProjectCard key={p.title} p={p} isCompact />
))}
    </section>
  );
}
