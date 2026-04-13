import { OpenObsLogo } from '@/components/ui/OpenObsLogo'
import { SpectralBar } from '@/components/ui/SpectralBar'
import { GithubIcon } from '@/components/ui/GithubIcon'
import { DOCS_URL, GITHUB_URL } from '@/lib/constants'

const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Get Started', href: '#get-started' },
    { label: 'FAQ', href: '#faq' },
  ],
  Resources: [
    { label: 'Documentation', href: DOCS_URL },
    { label: 'GitHub', href: GITHUB_URL },
    { label: 'Issues', href: `${GITHUB_URL}/issues` },
    { label: 'Discussions', href: `${GITHUB_URL}/discussions` },
  ],
  Community: [
    { label: 'Contributing', href: `${GITHUB_URL}/blob/main/CONTRIBUTING.md` },
    { label: 'Code of Conduct', href: `${GITHUB_URL}/blob/main/CODE_OF_CONDUCT.md` },
    { label: 'Changelog', href: `${GITHUB_URL}/releases` },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <a href="#" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight mb-4">
              <OpenObsLogo size={24} />
              OpenObs
            </a>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-[280px]">
              Open-source AI-powered observability platform. Generate dashboards, investigate incidents, and manage alerts with natural language.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[0.8rem] text-text-secondary border border-border-light rounded-lg hover:bg-bg-elevated hover:text-text transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              Star on GitHub
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="font-mono text-[0.65rem] font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[0.85rem] text-text-secondary hover:text-text transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 font-mono text-[0.7rem] text-text-muted">
            <SpectralBar />
            OpenObs &mdash; MIT License &mdash; {new Date().getFullYear()}
          </div>
          <div className="font-mono text-[0.65rem] text-text-muted">
            Built with care by the community
          </div>
        </div>
      </div>
    </footer>
  )
}


