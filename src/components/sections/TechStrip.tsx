import { TECH_STACK } from '@/lib/constants'

export function TechStrip() {
  return (
    <div className="border-y border-border py-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 font-mono text-[0.75rem] text-text-muted tracking-wide hover:text-text-secondary transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-border-light" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
