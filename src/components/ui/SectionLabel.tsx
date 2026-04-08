export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-mono text-[0.7rem] font-medium tracking-[0.2em] uppercase text-text-muted mb-4">
      <span className="text-sp-cyan/50">// </span>
      {children}
    </span>
  )
}
