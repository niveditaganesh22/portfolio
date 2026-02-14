export const featuredProjects = [
  {
    title: "Event-Driven Cloud Platform",
    status: "Completed",
    oneLiner:
      "Production-style AWS event-driven architecture focused on decoupling, reliability, and scalable ingestion.",
    details: [
      "Built an event-driven flow using API Gateway → Lambda → SQS → S3 (Bronze/Silver) with DynamoDB where needed.",
      "Designed for asynchronous processing to isolate failures and handle bursty workloads.",
      "Provisioned infrastructure with Terraform for repeatable deployments and modular upgrades.",
    ],
    decisions: [
      {
        label: "Why SQS in the middle?",
        text: "To decouple producers/consumers, absorb spikes, and make retries/failures a first-class part of the design.",
      },
      {
        label: "Why Bronze/Silver on S3?",
        text: "To separate raw ingestion from curated outputs and keep the pipeline auditable and analytics-ready.",
      },
      {
        label: "Terraform approach",
        text: "Modular Terraform to reduce drift, enforce consistency, and make the system reproducible across environments.",
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
      "SaaS-style operational analytics platform on Databricks/Delta Lake using a publishing workflow event model.",
    details: [
      "Modeling realistic creator workflow events (draft_created, chapter_written, feedback, publish, engagement).",
      "Implementing Delta Lake medallion architecture with scalable ingestion and incremental transforms.",
      "Designing for observability and evolution: schema changes, revisions, and operational metrics.",
    ],
    decisions: [
      {
        label: "Why this domain?",
        text: "It’s a product-style analytics system (not a demo dataset) with realistic event flows and operational reporting needs.",
      },
      {
        label: "Why medallion?",
        text: "It supports auditability and iterative refinement — raw events remain intact while curated tables evolve safely.",
      },
      {
        label: "How you’ll prove it",
        text: "A working pipeline + clear data model + queryable operational metrics (drop-off, engagement, revision rates).",
      },
    ],
    tags: ["Databricks", "Delta Lake", "PySpark", "Lakehouse"],
    links: [],
  },
  {
    title: "Platform Automation (CI/CD + IaC Patterns)",
    status: "Planned / Building",
    oneLiner:
      "Reusable CI/CD patterns, environment promotion, and safe deployments you can apply across projects.",
    details: [
      "Reusable pipeline templates (lint/test/build/deploy) with environment-based configuration.",
      "Deployment safety: preview deploys, manual approvals, and quality gates where appropriate.",
      "Automation patterns: baseline Terraform modules, policy checks, secrets hygiene.",
    ],
    decisions: [
      {
        label: "Why this matters",
        text: "DevOps hiring is about repeatability and safety. This shows delivery as a system, not a manual process.",
      },
      {
        label: "What makes it non-generic",
        text: "Same conventions across repos: consistent pipeline stages, tagging/versioning, and rollback strategy.",
      },
    ],
    tags: ["CI/CD", "GitHub Actions", "Terraform", "Release Automation"],
    links: [],
  },
  {
    title: "Backend Depth (Systems Engineering Focus)",
    status: "Planned / Building",
    oneLiner:
      "Backend systems project emphasizing system design, performance, reliability, and pragmatic tradeoffs.",
    details: [
      "A backend service with clear boundaries: API design, data access patterns, background jobs, and caching where needed.",
      "Operational depth: structured logs, failure modes, and performance baselines.",
      "Designed to be deployed and monitored — not just run locally.",
    ],
    decisions: [
      {
        label: "Why include this alongside cloud projects?",
        text: "Platform work and backend judgment are connected: APIs, data consistency, and operational reliability.",
      },
      {
        label: "How you’ll prove depth",
        text: "Document tradeoffs, add runbooks, and define measurable performance/availability goals.",
      },
    ],
    tags: ["API Design", "Reliability", "Performance", "Observability"],
    links: [],
  },
];

export const otherProjects = [
  {
    title: "Admin Application",
    oneLiner:
      "Internal dashboard for reprocessing failed media jobs and managing operational workflows.",
    tags: ["Angular", "Node.js", "MongoDB", "Docker"],
    links: [],
  },
  {
    title: "Public Media Library",
    oneLiner:
      "Backend-heavy media upload + analytics workflows with cloud storage integration.",
    tags: ["Angular", "Node.js", "MongoDB", "AWS S3"],
    links: [],
  },
  {
    title: "Construction Delegation Tool",
    oneLiner:
      "Issue tracking and real-time alerts with scalable API patterns and background processing.",
    tags: ["React", "Node.js", "MongoDB", "AWS EC2"],
    links: [],
  },
  {
    title: "Money Manager App",
    oneLiner:
      "Personal finance tracker with reporting dashboards and backend services.",
    tags: ["React", "Node.js", "MySQL", "AWS QuickSight"],
    links: [],
  },
  {
    title: "Help Desk Portal",
    oneLiner:
      "Ticketing platform with severity tagging and workflow status tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: [],
  },
  {
    title: "S.M.A.R.T Blood Monitoring",
    oneLiner:
      "Alerting system to notify donors when inventory dips below threshold levels.",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    links: [],
  },
];
