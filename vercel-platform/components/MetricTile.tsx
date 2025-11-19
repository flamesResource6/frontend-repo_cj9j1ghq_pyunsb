/** MetricTile – large number with tiny trend badge and sparkline placeholder */
'use client'
import clsx from 'clsx'

type Trend = { value: number; direction: 'up' | 'down' }
export default function MetricTile({ label, value, trend }: { label: string; value: number | string; trend?: Trend }) {
  return (
    <div role="button" tabIndex={0} className="rounded-[18px] bg-glass p-5 shadow-glass focus-visible:accent-ring outline-none">
      <div className="text-secondary small mb-1">{label}</div>
      <div className="display leading-none">{value}</div>
      {trend && (
        <div className={clsx('inline-flex items-center gap-1 mt-2 px-2 py-1 rounded-full small', trend.direction === 'up' ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200')} aria-label={`trend ${trend.direction} ${trend.value}%`}>
          <span>{trend.direction === 'up' ? '↑' : '↓'}</span>
          <span>{trend.value}%</span>
        </div>
      )}
    </div>
  )
}
