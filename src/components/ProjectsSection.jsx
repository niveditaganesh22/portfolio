import React, { useMemo, useState } from "react";
import { featuredProjects, enterpriseHighlights } from "../data/projects";

function FeaturedProjectCard({ p }) {
  const [open, setOpen] = useState(false);

  const hasDetails = Array.isArray(p.details) && p.details.length > 0;
  const hasDecisions = Array.isArray(p.decisions) && p.decisions.length > 0;
  const hasAnyDeep = hasDetails || hasDecisions;

  const hasLinks = Array.isArray(p.links) && p.links.length > 0;
  const github = hasLinks ? p.links.find((l) => (l.label || "").toLowerCase() === "github") : null;

  return (
    <article className="project project--featured">
      <header className="project-head">
        <h3 className="project-title">{p.title}</h3>

        <div className="project-meta">
          {p.status ? <span className="project-status">{p.status}</span> : null}

          {hasAnyDeep ? (
            <button
              type="button"
              className="project-detailsLink"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Hide details" : "View details"}
            </button>
          ) : (
            <span className="project-detailsLink project-detailsLink--disabled">
              Details coming soon
            </span>
          )}
        </div>
      </header>

      {p.oneLiner ? <p className="project-desc">{p.oneLiner}</p> : null}

      {Array.isArray(p.tags) && p.tags.length > 0 ? (
        <p className="project-tech">
          <span className="project-techLabel">Tech:</span>{" "}
          {p.tags.join(" · ")}
        </p>
      ) : null}

      {open && hasDetails && (
        <ul className="project-details">
          {p.details.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      )}

      {open && hasDecisions && (
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

      <footer className="project-footer">
        <div className="project-footerLeft">
          {github ? (
            <a className="project-github" href={github.href} target="_blank" rel="noreferrer">
              GitHub →
            </a>
          ) : (
            <span className="project-muted">{p.linkHint ?? "Repo in progress"}</span>
          )}
        </div>

        <div className="project-footerRight">
          {/* optional space for future: demo link / docs link */}
        </div>
      </footer>
    </article>
  );
}

function EnterpriseRow({ p }) {
  return (
    <article className="project project--enterprise">
      <div className="enterprise-top">
        <div className="enterprise-main">
          <h3 className="project-title">{p.title}</h3>
          {p.oneLiner ? <p className="project-desc">{p.oneLiner}</p> : null}
        </div>

        <span className="project-status project-status--quiet">Non-public</span>
      </div>

      {p.impact ? <p className="enterprise-impact">{p.impact}</p> : null}

      {Array.isArray(p.tags) && p.tags.length > 0 ? (
        <p className="enterprise-tech">
          <span className="project-techLabel">Tech:</span>{" "}
          {p.tags.join(" · ")}
        </p>
      ) : null}
    </article>
  );
}

export default function ProjectsSection() {
  // ✅ default collapsed (button shows "Show")
  const [showEnterprise, setShowEnterprise] = useState(false);

  const featured = useMemo(() => featuredProjects ?? [], []);
  const enterprise = useMemo(() => enterpriseHighlights ?? [], []);

  return (
    <section className="projects" id="projects">
      <div className="section-head">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">
          End-to-end builds that show architecture, automation, and reliability thinking.
        </p>
      </div>

      <div className="projects-grid">
        {featured.map((p) => (
          <FeaturedProjectCard key={p.title} p={p} />
        ))}
      </div>

      <div className="projects-split">
        <div className="projects-split-head">
          <div>
            <h2>Enterprise Highlights</h2>
            <p className="projects-note">
              Selected production work summaries (source code is private due to client confidentiality).
            </p>
          </div>

          <button
            type="button"
            className="project-toggle secondary"
            aria-expanded={showEnterprise}
            onClick={() => setShowEnterprise((v) => !v)}
          >
            {showEnterprise ? "Hide highlights" : "Show highlights"}
          </button>
        </div>

        {showEnterprise && (
          <div className="enterprise-list">
            {enterprise.map((p) => (
              <EnterpriseRow key={p.title} p={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}