import React from "react";
import { certifications } from "../data/certifications";

export default function CertificationsSection() {
  return (
    <section className="certifications" id="certifications">
      <div className="section-head">
        <h2>Certifications</h2>
      </div>

      <div className="cards">
        {certifications.map((c) => (
          <article className="card" key={c.title}>
            <div className="card-top">
              <h3 className="card-title">{c.title}</h3>

              <p className="card-subtitle card-meta">
                {c.issuer} <span className="dot">•</span> {c.meta}
              </p>
            </div>

            <div className="card-actions">
              <a className="link" href={c.link} target="_blank" rel="noreferrer">
                View credential →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
