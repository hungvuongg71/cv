import type { Education } from '@domain/entities/Resume'
import { SectionTitle } from './SectionTitle'

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="py-12 animate-slide-up" id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="
              flex flex-col sm:flex-row sm:items-center sm:justify-between
              rounded-xl border border-brand-gray-border dark:border-brand-black-light
              px-6 py-4 bg-white dark:bg-brand-black-light/20
              hover:border-brand-orange/40 transition-colors duration-200
            "
          >
            <div>
              <h3 className="font-serif text-lg text-brand-black dark:text-white font-normal">
                {edu.institution}
              </h3>
              <p className="font-sans text-sm text-brand-orange mt-0.5">{edu.degree}</p>
              <p className="font-sans text-xs text-brand-gray dark:text-gray-500 mt-0.5">
                {edu.location}
              </p>
            </div>
            <span className="font-sans text-xs text-brand-gray dark:text-gray-500 mt-2 sm:mt-0 shrink-0">
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
