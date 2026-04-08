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
      {/* Background glow */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-sp-red/5 via-sp-cyan/8 to-sp-violet/5 blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-5 leading-tight"
        >
          See your infrastructure
          <br />
          in full{' '}
          <span className="spectral-text">color</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary text-lg max-w-[480px] mx-auto mb-10"
        >
          Join the open-source community building the future of AI-powered
          observability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text text-bg text-[0.9rem] font-medium rounded-lg hover:shadow-[0_8px_30px_rgba(232,230,227,0.15)] hover:-translate-y-0.5 transition-all"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-[0.9rem] text-text-secondary border border-border-light rounded-lg hover:bg-bg-elevated hover:text-text hover:border-text-muted transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            Star on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
