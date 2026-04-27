import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/GithubIcon'
import { GITHUB_URL } from '@/lib/constants'

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-32 text-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-5 leading-tight"
        >
          Close the SRE loop
          <br />
          with{' '}
          <span className="spectral-text">AI</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary text-lg max-w-[480px] mx-auto mb-10"
        >
          Start with natural-language dashboards and grow into alert-driven
          investigations with approval-gated fixes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-5 py-3 bg-text text-bg text-[0.9rem] font-medium hover:bg-accent transition-colors"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-[0.9rem] text-text-secondary border border-border-light hover:bg-bg-secondary hover:text-text transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Star on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
