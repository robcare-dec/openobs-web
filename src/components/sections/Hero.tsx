import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Copy, Terminal } from 'lucide-react'
import { GithubIcon } from '@/components/ui/GithubIcon'
import { GITHUB_URL } from '@/lib/constants'

const INSTALL_COMMANDS = [
  { label: 'npm', cmd: 'npm install -g openobs && openobs' },
  { label: 'helm', cmd: 'helm install openobs oci://ghcr.io/openobs/charts/openobs' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMANDS[activeTab].cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-bg-secondary font-mono text-[0.7rem] text-text-secondary mb-8">
              <span className="w-1.5 h-1.5 bg-accent" />
              Open Source AI SRE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-[clamp(2.75rem,6.5vw,5rem)] font-semibold leading-[1.05] tracking-tight mb-6"
          >
            The AI SRE
            <br />
            <span className="spectral-text">closed loop</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-lg text-text-secondary leading-relaxed max-w-[560px] mb-10"
          >
            Observe with dashboards, detect with alerts, investigate with evidence,
            and approve safe fixes from natural language.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap justify-center items-center gap-3 mb-10">
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
              View on GitHub
            </a>
          </motion.div>

          {/* Install command */}
          <motion.div variants={item}>
            <div className="inline-flex flex-col sm:flex-row bg-bg-secondary border border-border overflow-hidden max-w-full">
              {/* Package manager tabs */}
              <div className="flex border-b sm:border-b-0 sm:border-r border-border">
                {INSTALL_COMMANDS.map((cmd, i) => (
                  <button
                    key={cmd.label}
                    onClick={() => setActiveTab(i)}
                    className={`px-3 py-2.5 font-mono text-[0.7rem] transition-colors cursor-pointer ${
                      activeTab === i
                        ? 'text-text bg-bg-elevated'
                        : 'text-text-muted hover:text-text-secondary'
                    }`}
                  >
                    {cmd.label}
                  </button>
                ))}
              </div>
              {/* Command */}
              <div className="flex items-center gap-3 px-4 py-2.5 min-w-0">
                <Terminal size={14} className="text-accent flex-shrink-0" />
                <code className="font-mono text-[0.8rem] text-text-secondary truncate">
                  {INSTALL_COMMANDS[activeTab].cmd}
                </code>
                <button
                  onClick={handleCopy}
                  className="flex-shrink-0 p-1 text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
