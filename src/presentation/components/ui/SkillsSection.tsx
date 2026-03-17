import type { SkillGroup } from '@domain/entities/Resume'
import { SectionTitle } from './SectionTitle'

interface SkillsSectionProps {
  skillGroups: SkillGroup[]
  languages: { name: string; level: string }[]
}

export function SkillsSection({ skillGroups, languages }: SkillsSectionProps) {
  return (
    <section className="py-12 animate-slide-up" id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <SkillCard key={group.category} group={group} />
        ))}
        {/* Languages card */}
        <div className="rounded-xl border border-brand-gray-border dark:border-brand-black-light p-5 bg-brand-gray-light dark:bg-brand-black-light/30">
          <h4 className="font-serif text-sm text-brand-orange mb-3 uppercase tracking-wider">
            Languages
          </h4>
          <div className="flex flex-col gap-2">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between">
                <span className="font-sans text-sm text-brand-black dark:text-gray-200">
                  {lang.name}
                </span>
                <span className="font-sans text-xs text-brand-gray dark:text-gray-400 border border-brand-gray-border dark:border-brand-black-light px-2 py-0.5 rounded-full">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div className="rounded-xl border border-brand-gray-border dark:border-brand-black-light p-5 bg-brand-gray-light dark:bg-brand-black-light/30 hover:border-brand-orange/40 transition-colors duration-200">
      <h4 className="font-serif text-sm text-brand-orange mb-3 uppercase tracking-wider">
        {group.category}
      </h4>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="font-sans text-xs text-brand-black dark:text-gray-300 bg-white dark:bg-brand-black border border-brand-gray-border dark:border-brand-black-light rounded-full px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
