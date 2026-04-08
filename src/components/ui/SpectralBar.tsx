const COLORS = [
  'bg-sp-red',
  'bg-sp-orange',
  'bg-sp-yellow',
  'bg-sp-green',
  'bg-sp-cyan',
  'bg-sp-blue',
  'bg-sp-violet',
]

export function SpectralBar({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-[2px] ${className}`}>
      {COLORS.map((color, i) => (
        <span key={i} className={`w-[3px] h-3 rounded-[1px] ${color}`} />
      ))}
    </div>
  )
}
