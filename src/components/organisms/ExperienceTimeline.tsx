import { TimelineItem } from '../molecules/TimelineItem'
import { experience } from '../../data/experience'

export function ExperienceTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-accent text-sm font-medium">Trayectoria</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">Experiencia y formación</h2>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.title}
              {...item}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
