export const featuredProjects = [
  {
    title: "Event-Driven Cloud Platform",
    status: "Completed",
    oneLiner:
      "AWS event-driven platform designed for decoupling, reliability, and scalable ingestion.",
    details: [
      "Built an async flow: API Gateway → Lambda → SQS → S3 (Bronze/Silver), with DynamoDB where state was needed.",
      "Designed for burst handling and failure isolation with retries + DLQ patterns.",
      "Provisioned the full stack using modular Terraform for repeatable deployments.",
    ],
    decisions: [
      {
        label: "Why SQS in the middle?",
        text: "To decouple producers and consumers, absorb spikes, and make retries/failures a first-class design concern.",
      },
      {
        label: "Why Bronze/Silver on S3?",
        text: "To keep raw ingestion immutable while curated outputs evolve safely — auditability + analytics readiness.",
      },
      {
        label: "Terraform approach",
        text: "Reusable modules to reduce drift, enforce consistency, and reproduce environments quickly.",
      },
    ],
    tags: [
      "AWS",
      "Lambda",
      "SQS",
      "S3",
      "API Gateway",
      "DynamoDB",
      "Terraform",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/niveditaganesh22/event-driven-cloud-platform",
      },
    ],
  },

  {
    title: "CreatorOps Lakehouse",
    status: "In Progress",
    oneLiner:
      "Databricks + Delta Lake product-style analytics system for creator publishing workflow events.",
    details: [
      "Modeled realistic workflow events (draft → revise → feedback → publish → engagement/drop-off).",
      "Implementing a Delta medallion architecture with incremental ingestion and transformations.",
      "Designing for evolution: schema changes, revisions, and operational metrics over time.",
    ],
    decisions: [
      {
        label: "Why this domain?",
        text: "It’s a realistic operational analytics system with event flows and reporting needs — not a toy dataset.",
      },
      {
        label: "Why medallion?",
        text: "Keeps raw events intact while curated tables evolve with confidence and traceability.",
      },
      {
        label: "How it will be proven",
        text: "Working pipeline + documented data model + queryable KPIs (revision rates, engagement, drop-off).",
      },
    ],
    tags: ["Databricks", "Delta Lake", "PySpark", "Lakehouse"],
    links: [{
        label: "GitHub",
        href: "https://github.com/niveditaganesh22/creatorops-lakehouse",
      },],

  },

  {
    title: "Platform Automation (CI/CD + IaC Patterns)",
    status: "Building",
    oneLiner:
      "Reusable pipeline patterns for safe delivery: promotions, gates, versioning, and rollback habits.",
    details: [
      "Reusable CI/CD templates (lint/test/build/deploy) with environment-based configuration.",
      "Delivery safety: preview deploys, approvals where needed, and quality gates.",
      "IaC hygiene: baseline Terraform modules, policy checks, and secrets best practices.",
    ],
    decisions: [
      {
        label: "Why this matters",
        text: "DevOps hiring is about repeatability. This shows delivery as a system, not manual steps.",
      },
      {
        label: "What makes it non-generic",
        text: "Same conventions across repos: consistent stages, tagging/versioning, and rollback strategy.",
      },
    ],
    tags: ["CI/CD", "GitHub Actions", "Terraform", "Release Automation"],
    links: [{
        label: "GitHub",
        href: "https://github.com/niveditaganesh22/deliveryops",
      },],
  },
];

/**
 * Enterprise Highlights: real work that can’t be open-sourced.
 * Keep these short + impact-based.
 */
export const enterpriseHighlights = [
  {
    title: "Admin Application (Operations & Reprocessing)",
    oneLiner:
      "Internal dashboard for reprocessing failed jobs and managing operational workflows.",
    impact:
      "Improved operational handling of failed runs with clear retries + status tracking.",
    tags: ["Angular", "Node.js", "MongoDB", "Docker"],
  },
  {
    title: "Public Media Library (Upload + Analytics Workflows)",
    oneLiner:
      "Backend-heavy media upload workflows with cloud storage integration and analytics hooks.",
    impact:
      "Built resilient upload flows and backend processing patterns for large media workloads.",
    tags: ["Angular", "Node.js", "MongoDB", "AWS S3"],
  },
  {
    title: "Construction Delegation Tool (Alerts + Tracking)",
    oneLiner:
      "Issue tracking with alerts and scalable API patterns for operational teams.",
    impact:
      "Reduced coordination overhead with structured workflows and automated notifications.",
    tags: ["React", "Node.js", "MongoDB", "AWS EC2"],
  },
  {
    title: "Help Desk Portal (Ticketing Workflows)",
    oneLiner:
      "Ticketing platform with severity tagging and workflow status tracking.",
    impact:
      "Improved triage speed and visibility with consistent status + severity conventions.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
];
