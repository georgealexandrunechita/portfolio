interface TagProps {
  label: string
  className?: string
}

export function Tag({ label, className = '' }: TagProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-glow text-accent border border-accent/20 ${className}`}>
      {label}
    </span>
  )
}
