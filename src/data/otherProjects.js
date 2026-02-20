export const otherProjects = [
  {
    title: "Admin Application",
    description:
      "Internal dashboard for reprocessing failed media jobs and managing operational workflows.",
    tags: ["Angular", "Node.js", "MongoDB", "Docker"],
    links: [],
  },
  {
    title: "Public Media Library",
    description:
      "Backend-heavy media upload + analytics workflows with cloud storage integration.",
    tags: ["Angular", "Node.js", "MongoDB", "AWS S3"],
    links: [],
  },
  /* Featured */
  {
    title: "Backend Systems Lab (APIs + Reliability)",
    status: "Planned / Building",
    oneLiner:
      "Backend service focused on system design, performance baselines, and production-grade operations.",
    details: [
      "Designing a clean REST API with validation, pagination, and consistent error contracts.",
      "Adding background processing (queues/jobs) for async workloads and failure handling.",
      "Operational readiness: structured logs, metrics, and clear runbooks for debugging and on-call style triage.",
    ],
    decisions: [
      {
        label: "Why this in a DevOps-heavy portfolio?",
        text: "Strong platform work requires backend judgment: API boundaries, data consistency, and failure modes.",
      },
      {
        label: "What makes it credible (not a toy)?",
        text: "Performance baselines, documented tradeoffs, and deployment + monitoring — not just local execution.",
      },
      {
        label: "How it will be proven",
        text: "A running service with load-tested endpoints, dashboards, and a short incident-style postmortem write-up.",
      },
    ],
    tags: [
      "Node.js",
      "REST APIs",
      "Reliability",
      "Observability",
      "Performance",
    ],
    links: [],
    linkHint: "Work in progress",
  },
];
