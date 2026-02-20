import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <h2>About</h2>
        <p className="section-subtitle">
          Cloud infrastructure and platform engineering — built to last, not just deploy.
        </p>
      </div>

      <div className="prose">
        <p>
          I design and operate AWS and Azure environments with a strong focus on 
          Terraform-driven infrastructure, CI/CD automation, and production reliability. 
          My work centers on building systems that scale predictably under real-world load — 
          not just in staging.
        </p>

        <p>
          I’m particularly interested in platform-level engineering: how systems are structured, 
          how they evolve over time, and how infrastructure decisions influence long-term 
          performance, maintainability, and cost.
        </p>

        <p>
          More recently, I’ve been working with Databricks — building ingestion pipelines, 
          implementing medallion architectures, and supporting analytics systems that power 
          AI and ML workloads.
        </p>
      </div>
    </section>
  );
}
