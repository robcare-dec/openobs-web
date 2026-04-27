import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FeatureIcon } from '@/components/ui/FeatureIcon'
import { FEATURES } from '@/lib/constants'

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="relative py-32">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,900px)] h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16" ref={ref}>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
            The AI SRE loop
          </h2>
          <p className="text-text-secondary text-lg max-w-[520px] mx-auto">
            A single workflow for dashboards, alerts, investigations, approvals,
            and safe remediation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-bg p-8 hover:bg-bg-secondary transition-colors border-t-2 border-transparent hover:border-t-accent"
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
