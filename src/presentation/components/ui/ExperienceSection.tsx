import type { WorkExperience } from '@domain/entities/Resume'
import { SectionTitle } from './SectionTitle'

interface ExperienceSectionProps {
  experiences: WorkExperience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="py-12 animate-slide-up">
      <SectionTitle id="experience">Work Experience</SectionTitle>
      <div className="space-y-10">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({ exp }: { exp: WorkExperience }) {
  const isCurrent = exp.period.includes('Current')
  return (
    <div className="group relative pl-6 border-l-2 border-brand-gray-border dark:border-brand-black-light hover:border-brand-orange transition-colors duration-200">
      {/* Dot */}
      <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-brand-gray-border dark:bg-brand-black-light group-hover:bg-brand-orange transition-colors duration-200" />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
        <div>
          <h3 className="font-serif text-xl text-brand-black dark:text-white font-normal">
            {exp.role}
          </h3>
          <p className="font-sans text-sm text-brand-orange font-medium mt-0.5">
            {exp.company}
            <span className="text-brand-gray dark:text-gray-500 font-normal ml-1">
              — {exp.location}
            </span>
          </p>
        </div>
        <span
          className={`
            shrink-0 font-sans text-xs px-3 py-1 rounded-full border self-start
            ${
              isCurrent
                ? 'border-brand-orange text-brand-orange bg-brand-orange/5'
                : 'border-brand-gray-border dark:border-brand-black-light text-brand-gray dark:text-gray-400 bg-transparent'
            }
          `}
        >
          {exp.period}
        </span>
      </div>

      <p className="font-sans text-sm text-brand-gray dark:text-gray-500 italic mb-3">
        {exp.description}
      </p>

      <ul className="space-y-1.5">
        {exp.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-2 font-sans text-sm text-brand-black dark:text-gray-300 leading-relaxed"
          >
            <span className="text-brand-orange shrink-0 mt-0.5">–</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}
