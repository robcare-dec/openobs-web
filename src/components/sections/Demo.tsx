import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const TERMINAL_LINES = [
  { type: 'input', text: 'Create a dashboard for API latency monitoring' },
  { type: 'blank' },
  { type: 'agent', label: 'Discovery Agent', text: 'scanning datasources...' },
  { type: 'metric', text: 'found 24 metrics matching "api" "latency" "http"' },
  { type: 'detail', text: 'http_request_duration_seconds_bucket' },
  { type: 'detail', text: 'http_request_duration_seconds_sum' },
  { type: 'detail', text: 'http_requests_total' },
  { type: 'blank' },
  { type: 'agent', label: 'Dashboard Generator', text: 'building panels...' },
  { type: 'check', text: 'P50/P95/P99 Latency (histogram_quantile)' },
  { type: 'check', text: 'Request Rate by Status Code' },
  { type: 'check', text: 'Error Rate (5xx / total)' },
  { type: 'check', text: 'Latency Heatmap' },
  { type: 'blank' },
  { type: 'agent', label: 'Verification', text: 'validating queries...' },
  { type: 'success', text: 'All 4 panels verified against Prometheus' },
  { type: 'blank' },
  { type: 'done', text: 'Dashboard created — 4 panels, all queries validated' },
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
              Grounded in real data,
              <br />
              not hallucination
            </h2>
            <p className="text-text-secondary text-[1.05rem] mb-8 max-w-[440px] leading-relaxed">
              OpenObs discovers actual metrics from your infrastructure before generating
              anything. No assumed standard metrics. No fabricated queries.
            </p>

            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: 'Discovery-first',
                  desc: 'always queries real datasources before generating dashboards or alerts',
                },
                {
                  num: '02',
                  title: 'Conservative uncertainty',
                  desc: 'prefers narrower results grounded in data over comprehensive guesses',
                },
                {
                  num: '03',
                  title: 'Verification built-in',
                  desc: 'every artifact is validated against the actual infrastructure',
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-[0.65rem] font-mono bg-bg-elevated border border-border-light text-sp-cyan mt-0.5">
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
            className="bg-bg-secondary border border-border rounded-xl overflow-hidden font-mono text-[0.78rem] leading-[1.9]"
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
                      <span className="text-sp-cyan/70 select-none">&#10095;</span>
                      <span className="text-text">{line.text}</span>
                    </div>
                  )
                if (line.type === 'agent')
                  return (
                    <div key={i} className="pl-3 border-l border-border ml-1 mt-1">
                      <span className="text-sp-violet">&#9672; {line.label}</span>{' '}
                      <span className="text-text-secondary">{line.text}</span>
                    </div>
                  )
                if (line.type === 'metric')
                  return (
                    <div key={i} className="pl-3 border-l border-border ml-1">
                      <span className="text-sp-yellow">&nbsp; {line.text}</span>
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
                      <span className="text-sp-green">&nbsp; &#10003; {line.text}</span>
                    </div>
                  )
                if (line.type === 'done')
                  return (
                    <div key={i}>
                      <span className="text-sp-green">&#10003; {line.text}</span>
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
