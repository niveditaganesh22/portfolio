import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <h2>About</h2>
<p>
          I work at the intersection of cloud infrastructure and platform
          engineering. Over the past few years, I’ve focused on designing and
          operating AWS and Azure systems that are meant to last — not just
          deploy.
        </p>

        <p>
          My core work revolves around Terraform-driven infrastructure, CI/CD
          automation, and building systems that are reliable under real
          production pressure. I’m particularly drawn to platform-level problems
          — how systems are structured, how they evolve, and how infrastructure
          decisions affect long-term scalability.
        </p>

        <p>
          More recently, I’ve been working with Databricks — building ingestion
          pipelines, experimenting with medallion architectures, and exploring
          how operational analytics systems support AI and ML workloads.
        </p>
    </section>
  );
}
