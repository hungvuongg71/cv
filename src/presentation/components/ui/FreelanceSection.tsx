import type { FreelanceProject } from '@domain/entities/Resume'
import { SectionTitle } from './SectionTitle'

interface FreelanceSectionProps {
  projects: FreelanceProject[]
}

export function FreelanceSection({ projects }: FreelanceSectionProps) {
  return (
    <section className="py-12 animate-slide-up" id="freelance">
      <SectionTitle>Freelance Experience</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <FreelanceCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

function FreelanceCard({ project }: { project: FreelanceProject }) {
  return (
    <div
      className="
      rounded-xl border border-brand-gray-border dark:border-brand-black-light
      p-5 bg-white dark:bg-brand-black-light/20
      hover:border-brand-orange/50 hover:shadow-sm
      transition-all duration-200
    "
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-serif text-base text-brand-black dark:text-white leading-snug">
          {project.client}
        </h3>
        <span className="font-sans text-xs text-brand-gray dark:text-gray-500 shrink-0 mt-0.5">
          {project.period}
        </span>
      </div>
      <p className="font-sans text-xs text-brand-orange mb-2">{project.role}</p>
      <p className="font-sans text-sm text-brand-gray dark:text-gray-400 leading-relaxed">
        {project.description}
      </p>
    </div>
  )
}
