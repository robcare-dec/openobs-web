export const GITHUB_URL = 'https://github.com/openobs/openobs'
export const DOCS_URL = 'https://docs.openobs.com'

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Loop', href: '#architecture' },
  { label: 'Get Started', href: '#get-started' },
  { label: 'Docs', href: DOCS_URL },
  { label: 'FAQ', href: '#faq' },
] as const

export const FEATURES = [
  {
    title: 'Observe',
    description:
      'Create, edit, clone, explain, and delete dashboards from natural language. OpenObs discovers real metrics and validates every query.',
    icon: 'layout-dashboard',
    color: 'red' as const,
  },
  {
    title: 'Detect',
    description:
      'Create and tune alert rules through chat. When an alert fires, start an investigation from the alert context.',
    icon: 'bell',
    color: 'orange' as const,
  },
  {
    title: 'Investigate',
    description:
      'Ask why latency, errors, or saturation changed. The agent queries metrics, logs, recent changes, and Kubernetes when configured.',
    icon: 'search',
    color: 'yellow' as const,
  },
  {
    title: 'Act safely',
    description:
      'OpenObs can propose fixes. Mutating cluster operations become approval requests with RBAC and audit logging before execution.',
    icon: 'shield-check',
    color: 'green' as const,
  },
  {
    title: 'Enterprise controls',
    description:
      'Grafana-like RBAC, service accounts, audit logs, and approval workflows are built into the open-source project.',
    icon: 'puzzle',
    color: 'cyan' as const,
  },
  {
    title: 'Transparent agents',
    description:
      'Watch tool calls, intermediate evidence, and final reports stream live instead of trusting a black-box answer.',
    icon: 'activity',
    color: 'violet' as const,
  },
] as const

export const AGENTS = [
  { name: 'Observe', desc: 'Dashboards', color: 'sp-red' },
  { name: 'Detect', desc: 'Alerts', color: 'sp-orange' },
  { name: 'Investigate', desc: 'Evidence', color: 'sp-yellow' },
  { name: 'Approve', desc: 'Fixes', color: 'sp-green' },
  { name: 'Govern', desc: 'RBAC', color: 'sp-cyan' },
  { name: 'Extend', desc: 'Adapters', color: 'sp-violet' },
] as const

export const FAQ_ITEMS = [
  {
    question: 'What data sources does OpenObs support?',
    answer:
      'OpenObs supports Prometheus-compatible metrics, Loki-style logs, and Kubernetes operations connectors. The adapter SDK is designed for adding more telemetry, cloud, and internal systems.',
  },
  {
    question: 'How does OpenObs avoid hallucinated queries?',
    answer:
      'OpenObs follows a "discovery-first" approach. Before generating any dashboard or alert, the Discovery Agent queries your actual data sources to find real metrics. The Verification Agent then validates every generated PromQL query against your Prometheus instance before returning results.',
  },
  {
    question: 'What makes OpenObs different from an observability chatbot?',
    answer:
      'The product is built around the SRE loop: observe, detect, investigate, and act safely. OpenObs can create dashboards, create alerts, investigate incidents with evidence, and route risky cluster fixes through approval.',
  },
  {
    question: 'Which LLM providers are supported?',
    answer:
      'OpenObs supports Anthropic, OpenAI, Gemini, DeepSeek, Ollama, Azure OpenAI, Bedrock, and OpenAI-compatible APIs through the LLM gateway.',
  },
  {
    question: 'Is OpenObs production-ready?',
    answer:
      'OpenObs is under active development. It includes built-in safety features like dry-run execution, approval workflows, query validation, and permission modes. We recommend starting with read-only mode and gradually enabling more capabilities as you gain confidence.',
  },
  {
    question: 'Can I self-host OpenObs?',
    answer:
      'Yes. OpenObs is fully self-hosted. A single command starts the API gateway and web dashboard. It uses SQLite by default (no external database required), with optional PostgreSQL support for larger deployments. Redis is needed only if you use the job queue features.',
  },
  {
    question: 'How do I contribute?',
    answer:
      'Check out the contributing guide in the repository. The adapter SDK makes it especially easy to contribute new infrastructure integrations. We welcome issues, PRs, and adapter contributions.',
  },
] as const

export const TECH_STACK = [
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'Socket.IO',
  'Drizzle ORM',
  'Tailwind CSS',
  'OpenTelemetry',
] as const


