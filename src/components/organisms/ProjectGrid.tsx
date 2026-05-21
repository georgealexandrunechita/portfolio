import { useState, useMemo } from 'react'
import { ProjectCard } from '../molecules/ProjectCard'
import { Button } from '../atoms/Button'
import { FadeIn } from '../atoms/FadeIn'
import { projects } from '../../data/projects'

const PAGE_SIZE = 6

function getAllTechs() {
  const techs = new Set<string>()
  projects.forEach((p) => p.tech.forEach((t) => techs.add(t)))
  return ['Todos', ...Array.from(techs).sort()]
}

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [page, setPage] = useState(1)
  const techs = useMemo(getAllTechs, [])

  const filtered = useMemo(() =>
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.tech.includes(activeFilter)),
    [activeFilter]
  )

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleFilter(tech: string) {
    setActiveFilter(tech)
    setPage(1)
  }

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        <FadeIn>
          <div className="flex flex-col gap-2">
            <span className="text-accent text-sm font-medium">Proyectos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">Todos los proyectos</h2>
          </div>
        </FadeIn>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <button
              key={tech}
              onClick={() => handleFilter(tech)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer
                ${activeFilter === tech
                  ? 'bg-accent text-bg border-accent'
                  : 'bg-transparent text-text-muted border-border hover:border-accent/50 hover:text-text'
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Anterior
            </Button>
            <span className="text-text-muted text-sm px-2">
              {page} / {totalPages}
            </span>
            <Button
              variant="secondary"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Siguiente
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
