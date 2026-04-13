export const GITHUB_URL = 'https://github.com/openobs/openobs'
export const DOCS_URL = 'https://docs.openobs.com'

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Get Started', href: '#get-started' },
  { label: 'Docs', href: DOCS_URL },
  { label: 'FAQ', href: '#faq' },
] as const

export const FEATURES = [
  {
    title: 'Natural Language Dashboards',
    description:
      'Describe what you want to monitor in plain English. OpenObs discovers real metrics from your infrastructure and generates precise, queryable dashboard panels.',
    icon: 'layout-dashboard',
    color: 'red' as const,
  },
  {
    title: 'Automated Investigation',
    description:
      'When issues arise, AI agents automatically collect evidence from metrics, correlate anomalies, and generate detailed investigation reports.',
    icon: 'search',
    color: 'orange' as const,
  },
  {
    title: 'Intelligent Alerting',
    description:
      'Conversationally create alert rules with validated PromQL queries and sensible thresholds. Every rule is verified before deployment.',
    icon: 'bell',
    color: 'yellow' as const,
  },
  {
    title: 'Safe Execution',
    description:
      'Execute remediation with built-in dry-run capability, approval workflows, and full audit logging. Every action goes through permission checks.',
    icon: 'shield-check',
    color: 'green' as const,
  },
  {
    title: 'Adapter Ecosystem',
    description:
      'Extensible SDK for Prometheus, Kubernetes, cloud providers, and custom integrations. Build your own adapter with the scaffolding CLI.',
    icon: 'puzzle',
    color: 'cyan' as const,
  },
  {
    title: 'Real-time Streaming',
    description:
      'WebSocket-based live updates during dashboard generation and investigation. See every agent decision and intermediate result as it happens.',
    icon: 'activity',
    color: 'violet' as const,
  },
] as const

export const AGENTS = [
  { name: 'Dashboard', desc: 'Generation', color: 'sp-red' },
  { name: 'Investigation', desc: 'Analysis', color: 'sp-orange' },
  { name: 'Alerting', desc: 'Rules', color: 'sp-yellow' },
  { name: 'Execution', desc: 'Remediation', color: 'sp-green' },
  { name: 'Verification', desc: 'Validation', color: 'sp-cyan' },
  { name: 'Discovery', desc: 'Metrics', color: 'sp-violet' },
] as const

export const FAQ_ITEMS = [
  {
    question: 'What data sources does OpenObs support?',
    answer:
      'OpenObs ships with a Prometheus adapter out of the box. The adapter SDK lets you build integrations for any data source — Datadog, CloudWatch, InfluxDB, or your own custom APIs. Kubernetes and cloud provider adapters are also available.',
  },
  {
    question: 'How does OpenObs avoid hallucinated queries?',
    answer:
      'OpenObs follows a "discovery-first" approach. Before generating any dashboard or alert, the Discovery Agent queries your actual data sources to find real metrics. The Verification Agent then validates every generated PromQL query against your Prometheus instance before returning results.',
  },
  {
    question: 'Which LLM providers are supported?',
    answer:
      'OpenObs supports Anthropic (Claude), OpenAI, and any OpenAI-compatible API through the LLM Gateway abstraction layer. You configure your preferred provider via environment variables.',
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


