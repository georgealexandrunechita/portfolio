import { GraduationCap, Briefcase } from 'lucide-react'

type EntryType = 'education' | 'experience'

interface TimelineItemProps {
  type: EntryType
  title: string
  institution: string
  location: string
  period: string
  description: string
  isLast?: boolean
}

const icons: Record<EntryType, React.ElementType> = {
  education:  GraduationCap,
  experience: Briefcase,
}

export function TimelineItem({ type, title, institution, location, period, description, isLast }: TimelineItemProps) {
  const Icon = icons[type]

  return (
    <div className="relative flex gap-6">
      {/* line */}
      {!isLast && (
        <div className="absolute left-5 top-10 bottom-0 w-px bg-border" />
      )}

      {/* dot */}
      <div className="shrink-0 w-10 h-10 rounded-full bg-surface-2 border border-accent/30 flex items-center justify-center text-accent z-10">
        <Icon size={18} />
      </div>

      {/* content */}
      <div className="flex flex-col gap-1 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-text font-semibold">{title}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent-glow text-accent border border-accent/20">
            {period}
          </span>
        </div>
        <p className="text-text-muted text-sm">{institution} · {location}</p>
        <p className="text-text-faint text-sm mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
