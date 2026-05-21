import { TimelineItem } from '../molecules/TimelineItem'
import { FadeIn } from '../atoms/FadeIn'
import { experience } from '../../data/experience'

export function ExperienceTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto flex flex-col gap-10">

        <FadeIn>
          <div className="flex flex-col gap-2">
            <span className="text-accent text-sm font-medium">Trayectoria</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">Experiencia y formación</h2>
          </div>
        </FadeIn>

        <div className="flex flex-col">
          {experience.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.15}>
              <TimelineItem
                {...item}
                isLast={index === experience.length - 1}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
