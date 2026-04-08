import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CodeBlock } from '@/components/ui/CodeBlock'

const STEPS = [
  {
    num: '01',
    title: 'Clone and install',
    description: 'OpenObs is a TypeScript monorepo managed with npm workspaces.',
    code: `$ git clone https://github.com/AgenticObs/openobs.git
$ cd openobs
$ npm install`,
    codeTitle: 'terminal',
  },
  {
    num: '02',
    title: 'Configure your environment',
    description: 'Set up your LLM provider and datasource connection.',
    code: `$ cp .env.example .env

# .env
LLM_PROVIDER=anthropic
LLM_API_KEY=sk-ant-...
PROMETHEUS_URL=http://localhost:9090`,
    codeTitle: '.env',
  },
  {
    num: '03',
    title: 'Start OpenObs',
    description: 'A single command starts the API gateway and the web dashboard.',
    code: `$ npm run start

✓ API Gateway listening on :3000
✓ Web Dashboard ready on :5173`,
    codeTitle: 'terminal',
  },
]

export function GetStarted() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="get-started" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,900px)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <SectionLabel>Quick Start</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
            Up and running in minutes
          </h2>
          <p className="text-text-secondary text-lg max-w-[480px] mx-auto">
            Clone, configure your datasource, and start generating dashboards with
            natural language.
          </p>
        </div>

        <div className="max-w-[680px] mx-auto space-y-12" ref={ref}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-border-light rounded-lg font-mono text-[0.75rem] text-text-muted">
                {step.num}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[1rem] font-medium mb-1.5">{step.title}</h3>
                <p className="text-[0.9rem] text-text-secondary mb-4">{step.description}</p>
                <CodeBlock title={step.codeTitle}>{step.code}</CodeBlock>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
