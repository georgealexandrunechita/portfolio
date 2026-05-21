import { SkillBar } from '../molecules/SkillBar'
import { FadeIn } from '../atoms/FadeIn'
import { skills } from '../../data/skills'

export function SkillsGrid() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        <FadeIn>
          <div className="flex flex-col gap-2">
            <span className="text-accent text-sm font-medium">Skills</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">Tecnologías</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(({ category, skills: categorySkills }, i) => (
            <FadeIn key={category} delay={i * 0.1}>
              <div className="flex flex-col gap-4 p-5 rounded-sm bg-surface border border-border">
                <h3 className="text-text font-semibold text-sm uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-col gap-3">
                  {categorySkills.map(({ name, level }) => (
                    <SkillBar key={name} name={name} level={level} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
