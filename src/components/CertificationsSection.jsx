import React from "react";
import { certifications } from "../data/certifications";

export default function CertificationsSection() {
  return (
    <section className="certifications" id="certifications">
      <div className="section-head">
        <h2>Certifications</h2>
        <p className="section-subtitle">
          Credentials that back up the work — with verifiable links.
        </p>
      </div>

      <div className="cards">
        {certifications.map((c) => (
          <article className="card" key={c.title}>
            <h3 className="card-title">{c.title}</h3>
            <p className="card-subtitle">
              {c.issuer} <span className="dot">•</span> {c.meta}
            </p>

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
