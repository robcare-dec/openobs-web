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
  red: 'bg-sp-red/10 text-sp-red',
  orange: 'bg-sp-orange/10 text-sp-orange',
  yellow: 'bg-sp-yellow/10 text-sp-yellow',
  green: 'bg-sp-green/10 text-sp-green',
  cyan: 'bg-sp-cyan/10 text-sp-cyan',
  violet: 'bg-sp-violet/10 text-sp-violet',
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
    <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${COLOR_MAP[color]}`}>
      <Icon size={20} />
    </div>
  )
}
