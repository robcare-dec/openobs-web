import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const TERMINAL_LINES = [
  { type: 'input', text: 'Why is checkout latency high right now?' },
  { type: 'blank' },
  { type: 'agent', label: 'Investigation Agent', text: 'building evidence window...' },
  { type: 'metric', text: 'latency spike started 14:08 UTC; p95 180ms -> 920ms' },
  { type: 'detail', text: 'metric: histogram_quantile(0.95, checkout_request_duration_seconds_bucket)' },
  { type: 'blank' },
  { type: 'agent', label: 'Logs', text: 'searching correlated errors...' },
  { type: 'check', text: 'timeout errors concentrated on checkout-api-7d9c' },
  { type: 'check', text: 'no matching 5xx spike upstream' },
  { type: 'blank' },
  { type: 'agent', label: 'Kubernetes', text: 'checking pods, events, and rollout...' },
  { type: 'check', text: 'new pod revision deployed at 14:06 UTC' },
  { type: 'check', text: 'CPU throttling increased 8x on affected pods' },
  { type: 'blank' },
  { type: 'agent', label: 'Approval', text: 'prepared safe remediation request...' },
  { type: 'success', text: 'recommended: raise CPU limit and restart affected deployment' },
  { type: 'blank' },
  { type: 'done', text: 'Investigation complete — root cause found, fix waiting for approval' },
] as const

export function Demo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold tracking-tight mb-5 leading-tight">
              From symptom to fix,
              <br />
              with evidence
            </h2>
            <p className="text-text-secondary text-[1.05rem] mb-8 max-w-[440px] leading-relaxed">
              OpenObs does not stop at a chat answer. It gathers telemetry,
              checks cluster state, writes an investigation report, and gates
              risky actions behind approval.
            </p>

            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: 'Evidence-first',
                  desc: 'queries real metrics, logs, and cluster state before reaching a conclusion',
                },
                {
                  num: '02',
                  title: 'Operator-safe',
                  desc: 'read-only investigation can run directly; mutations require approval',
                },
                {
                  num: '03',
                  title: 'Auditable',
                  desc: 'permissions, approvals, and actions are recorded for team review',
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-[0.65rem] font-mono bg-bg-elevated border border-border-light text-accent mt-0.5">
                    {item.num}
                  </span>
                  <span className="text-[0.9rem] text-text-secondary">
                    <strong className="text-text font-medium">{item.title}</strong> — {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-bg-secondary border border-border overflow-hidden font-mono text-[0.78rem] leading-[1.9]"
          >
            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-bg-elevated border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
              <span className="flex-1 text-center text-[0.7rem] text-text-muted">
                openobs — session
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-5 max-h-[450px] overflow-y-auto">
              {TERMINAL_LINES.map((line, i) => {
                if (line.type === 'blank') return <div key={i} className="h-4" />
                if (line.type === 'input')
                  return (
                    <div key={i} className="flex gap-2">
                      <span className="text-accent select-none">&#10095;</span>
                      <span className="text-text">{line.text}</span>
                    </div>
                  )
                if (line.type === 'agent')
                  return (
                    <div key={i} className="pl-3 border-l border-border ml-1 mt-1">
                      <span className="text-accent">&#9672; {line.label}</span>{' '}
                      <span className="text-text-secondary">{line.text}</span>
                    </div>
                  )
                if (line.type === 'metric')
                  return (
                    <div key={i} className="pl-3 border-l border-border ml-1">
                      <span className="text-text">&nbsp; {line.text}</span>
                    </div>
                  )
                if (line.type === 'detail')
                  return (
                    <div key={i} className="pl-3 border-l border-border ml-1 text-text-muted">
                      &nbsp; {line.text}
                    </div>
                  )
                if (line.type === 'check')
                  return (
                    <div key={i} className="pl-3 border-l border-border ml-1 text-text-muted">
                      &nbsp; &#10003; {line.text}
                    </div>
                  )
                if (line.type === 'success')
                  return (
                    <div key={i} className="pl-3 border-l border-border ml-1">
                      <span className="text-accent">&nbsp; &#10003; {line.text}</span>
                    </div>
                  )
                if (line.type === 'done')
                  return (
                    <div key={i}>
                      <span className="text-accent">&#10003; {line.text}</span>
                    </div>
                  )
                return null
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
