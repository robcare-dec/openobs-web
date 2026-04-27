import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  children: string
  title?: string
}

export function CodeBlock({ children, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const text = children
      .replace(/^[$#]\s*/gm, '')
      .replace(/^#.*$/gm, '')
      .trim()
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group border border-border bg-bg-secondary overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-elevated">
          <span className="font-mono text-[0.7rem] text-text-muted">{title}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-[0.8rem] leading-[1.8] font-mono">
          <code>{children}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-bg-elevated border border-border text-text-muted hover:text-text-secondary hover:border-border-light transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  )
}
