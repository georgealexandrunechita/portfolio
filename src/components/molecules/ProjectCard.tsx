import { ExternalLink, Code2 } from 'lucide-react'
import { Tag } from '../atoms/Tag'
import { Button } from '../atoms/Button'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  image: string
  repo: string
  demo: string
  featured?: boolean
}

export function ProjectCard({ title, description, tech, image, repo, demo, featured }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl overflow-hidden bg-surface border border-border transition-all duration-300 hover:-translate-y-1 hover:border-t-accent hover:shadow-[0_0_24px_var(--color-accent-glow),0_4px_24px_rgba(0,0,0,0.4)]">
      {featured && (
        <span className="absolute top-3 right-3 z-10 text-xs font-semibold px-2 py-0.5 rounded-full bg-accent text-bg">
          Destacado
        </span>
      )}

      <div className="aspect-video w-full overflow-hidden bg-surface-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/projects/placeholder.svg'
          }}
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-text font-semibold text-lg leading-snug">{title}</h3>

        <p className="text-text-muted text-sm leading-relaxed flex-1">{description}</p>

        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => <Tag key={t} label={t} />)}
        </div>

        <div className="flex gap-2 pt-1">
          {repo && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(repo, '_blank')}
            >
              <Code2 size={14} /> Código
            </Button>
          )}
          {demo && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(demo, '_blank')}
            >
              <ExternalLink size={14} /> Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
