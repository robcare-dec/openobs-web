import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AGENTS } from '@/lib/constants'

const AGENT_BORDER_COLORS: Record<string, string> = {
  'sp-red': 'border-b-accent',
  'sp-orange': 'border-b-accent',
  'sp-yellow': 'border-b-accent',
  'sp-green': 'border-b-accent',
  'sp-cyan': 'border-b-accent',
  'sp-violet': 'border-b-accent',
}

const INTERFACES = ['Web Dashboard', 'REST API', 'WebSocket']
const INFRA = ['Prometheus', 'Logs', 'Kubernetes', 'Custom Adapters']

function Connector() {
  return (
    <div className="flex justify-center py-3">
      <div className="w-px h-7 bg-border-light relative">
        <div className="absolute -bottom-[3px] -left-[3px] w-[7px] h-[7px] border-r border-b border-border-light rotate-45" />
      </div>
    </div>
  )
}

function FanOut() {
  return (
    <div className="flex justify-center py-4 relative">
      <div className="w-[80%] h-px bg-border relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-border-light" />
      </div>
    </div>
  )
}

export function Architecture() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="architecture" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,900px)] h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
            Built for controlled autonomy
          </h2>
          <p className="text-text-secondary text-lg max-w-[520px] mx-auto">
            Agents can investigate across systems, but permissions, RBAC, and approval
            gates decide what they are allowed to change.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[860px] mx-auto"
        >
          {/* Interface layer */}
          <div className="mb-2">
            <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-text-muted mb-2 pl-1">
              Interface
            </div>
            <div className="flex justify-center gap-2">
              {INTERFACES.map((name) => (
                <div
                  key={name}
                  className="px-5 py-2.5 bg-bg-secondary border border-border-light text-[0.85rem] hover:bg-bg-elevated transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          <Connector />

          {/* Orchestrator */}
          <div className="mb-2">
            <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-text-muted mb-2 pl-1">
              Orchestration
            </div>
            <div className="flex justify-center">
              <div className="px-6 py-3 bg-bg-secondary border border-accent text-center relative overflow-hidden">
                <div className="relative">
                  <div className="text-[0.9rem] font-medium">Orchestrator Agent</div>
                  <div className="font-mono text-[0.65rem] text-text-muted mt-0.5">
                    plan, tool routing, policy checks
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FanOut />

          {/* Specialized agents */}
          <div className="mb-2">
            <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-text-muted mb-2 pl-1">
              Specialized Agents
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {AGENTS.map((agent) => (
                <motion.div
                  key={agent.name}
                  whileHover={{ y: -3 }}
                  className={`p-3 bg-bg-secondary border border-border text-center border-b-2 ${AGENT_BORDER_COLORS[agent.color]} hover:border-border-light transition-colors`}
                >
                  <div className="text-[0.78rem] font-medium">{agent.name}</div>
                  <div className="font-mono text-[0.6rem] text-text-muted">{agent.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <FanOut />

          {/* Infrastructure */}
          <div>
            <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-text-muted mb-2 pl-1">
              Infrastructure Adapters
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {INFRA.map((name) => (
                <div
                  key={name}
                  className="py-2.5 bg-bg-secondary border border-border text-center font-mono text-[0.75rem] text-text-secondary hover:border-border-light transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
