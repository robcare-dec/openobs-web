import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FeatureIcon } from '@/components/ui/FeatureIcon'
import { FEATURES } from '@/lib/constants'

const HOVER_BORDER_COLORS: Record<string, string> = {
  red: 'group-hover:border-t-sp-red',
  orange: 'group-hover:border-t-sp-orange',
  yellow: 'group-hover:border-t-sp-yellow',
  green: 'group-hover:border-t-sp-green',
  cyan: 'group-hover:border-t-sp-cyan',
  violet: 'group-hover:border-t-sp-violet',
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="relative py-32">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,900px)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16" ref={ref}>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
            Six agents, one platform
          </h2>
          <p className="text-text-secondary text-lg max-w-[520px] mx-auto">
            Every feature is powered by specialized AI agents that collaborate through
            an intelligent orchestrator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl border border-border overflow-hidden">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`group bg-bg p-8 hover:bg-bg-secondary transition-colors border-t border-transparent ${HOVER_BORDER_COLORS[feature.color]}`}
            >
              <FeatureIcon icon={feature.icon} color={feature.color} />
              <h3 className="text-[1rem] font-medium mt-5 mb-2">{feature.title}</h3>
              <p className="text-[0.88rem] text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
