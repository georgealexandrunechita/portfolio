interface StatCardProps {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`flex flex-col items-center gap-1 px-6 py-4 rounded-sm bg-surface border border-border ${className}`}>
      <span className="text-3xl font-bold text-accent">{value}</span>
      <span className="text-xs text-text-muted text-center">{label}</span>
    </div>
  )
}
