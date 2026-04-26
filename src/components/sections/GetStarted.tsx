import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CodeBlock } from '@/components/ui/CodeBlock'

type Step = {
  num: string
  title: string
  description: string
  code: string
  codeTitle: string
  helmNote?: {
    prefix: string
    linkText: string
    href: string
    suffix: string
  }
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Install from npm',
    description: 'OpenObs ships as a single self-contained npm package. Node.js 20+ is the only prerequisite.',
    helmNote: {
      prefix: ' Running on Kubernetes? Install with the official ',
      linkText: 'Helm chart',
      href: 'https://docs.openobs.com/install/kubernetes',
      suffix: ' instead.',
    },
    code: `$ npm install -g openobs`,
    codeTitle: 'terminal',
  },
  {
    num: '02',
    title: 'Launch',
    description: 'A single command starts the API gateway and the web dashboard on :3000.',
    code: `$ openobs

✓ OpenObs listening on :3000
✓ Opening setup wizard in your browser...`,
    codeTitle: 'terminal',
  },
  {
    num: '03',
    title: 'Connect your stack',
    description: 'The setup wizard walks you through picking an LLM provider and pointing OpenObs at your Prometheus. No config files required.',
    code: `# The wizard captures everything interactively:
#   • LLM provider (Anthropic, OpenAI, Gemini, DeepSeek, Ollama, ...)
#   • Prometheus URL (optional — dashboards work without it)
#   • First admin account
#
# Secrets land encrypted in ~/.openobs/ on your laptop.`,
    codeTitle: 'setup wizard',
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
            One npm install, one command to launch, then point it at your
            Prometheus from the browser wizard.
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
                <p className="text-[0.9rem] text-text-secondary mb-4">
                  {step.description}
                  {step.helmNote && (
                    <>
                      {step.helmNote.prefix}
                      <a
                        href={step.helmNote.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-text transition-colors"
                      >
                        {step.helmNote.linkText}
                      </a>
                      {step.helmNote.suffix}
                    </>
                  )}
                </p>
                <CodeBlock title={step.codeTitle}>{step.code}</CodeBlock>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
