import {
  LayoutDashboard,
  Search,
  Bell,
  ShieldCheck,
  Puzzle,
  Activity,
} from 'lucide-react'

const ICON_MAP = {
  'layout-dashboard': LayoutDashboard,
  search: Search,
  bell: Bell,
  'shield-check': ShieldCheck,
  puzzle: Puzzle,
  activity: Activity,
} as const

const COLOR_MAP = {
  red: 'bg-bg-elevated text-accent',
  orange: 'bg-bg-elevated text-accent',
  yellow: 'bg-bg-elevated text-accent',
  green: 'bg-bg-elevated text-accent',
  cyan: 'bg-bg-elevated text-accent',
  violet: 'bg-bg-elevated text-accent',
} as const

export function FeatureIcon({
  icon,
  color,
}: {
  icon: keyof typeof ICON_MAP
  color: keyof typeof COLOR_MAP
}) {
  const Icon = ICON_MAP[icon]
  return (
    <div className={`w-10 h-10 border border-border flex items-center justify-center ${COLOR_MAP[color]}`}>
      <Icon size={20} />
    </div>
  )
}
