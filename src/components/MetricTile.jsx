import clsx from 'clsx'

export default function MetricTile({ label, value, trend }) {
  return (
    <div role="button" tabIndex={0} className="rounded-[18px] bg-glass p-5 shadow-glass focus-visible:accent-ring outline-none" aria-label={`${label} ${value}`}>
      <div className="text-secondary text-sm mb-1 capitalize">{label}</div>
      <div className="text-[28px] font-bold leading-none text-white">{value}</div>
      {trend && (
        <div className={clsx('inline-flex items-center gap-1 mt-2 px-2 py-1 rounded-full text-sm', trend.direction === 'up' ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-300/30' : 'bg-rose-500/20 text-rose-200 border border-rose-300/30')} aria-label={`trend ${trend.direction} ${trend.value}%`}>
          <span>{trend.direction === 'up' ? '↑' : '↓'}</span>
          <span>{trend.value}%</span>
        </div>
      )}
    </div>
  )
}
