import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from '../molecules/ProjectCard'
import { Button } from '../atoms/Button'
import { FadeIn } from '../atoms/FadeIn'
import { projects } from '../../data/projects'

export function FeaturedProjects() {
  const navigate = useNavigate()
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        <FadeIn>
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-accent text-sm font-medium">Proyectos</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">Trabajo destacado</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate('/projects')}>
              Ver todos <ArrowRight size={14} />
            </Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
