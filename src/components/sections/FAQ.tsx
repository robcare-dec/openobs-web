import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Accordion } from '@/components/ui/Accordion'
import { FAQ_ITEMS } from '@/lib/constants'

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,900px)] h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16" ref={ref}>
          {/* Left: heading */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-[clamp(2rem,3.5vw,2.5rem)] font-bold tracking-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-text-secondary text-[0.95rem] leading-relaxed">
              Can't find what you're looking for? Open an issue on GitHub and we'll
              get back to you.
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Accordion items={FAQ_ITEMS} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
