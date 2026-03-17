import type { Resume } from '@domain/entities/Resume'

interface HeroSectionProps {
  resume: Resume
}

export function HeroSection({ resume }: HeroSectionProps) {
  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 animate-fade-in">
      {/* Name & title */}
      <div className="mb-6">
        <p className="text-sm font-sans uppercase tracking-widest text-brand-orange mb-3">
          Software Engineer
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-brand-black dark:text-white leading-none tracking-tight">
          {resume.name}
        </h1>
        <p className="font-serif text-lg sm:text-xl text-brand-gray dark:text-gray-400 mt-1 italic">
          {resume.nameVi}
        </p>
      </div>

      {/* Summary */}
      <p className="font-sans text-base sm:text-lg text-brand-gray dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
        {resume.summary}
      </p>

      {/* Contact pills */}
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${resume.contact.email}`}>
          <ContactPill icon="✉" label={resume.contact.email} hoverable />
        </a>
        <a href={resume.contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <ContactPill icon="💼" label={resume.contact.linkedin} hoverable />
        </a>
      </div>
    </section>
  )
}

function ContactPill({
  icon,
  label,
  hoverable,
}: {
  icon: string
  label: string
  hoverable?: boolean
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans
        border border-brand-gray-border dark:border-brand-black-light
        bg-brand-gray-light dark:bg-brand-black-light
        text-brand-black dark:text-gray-200
        ${hoverable ? 'hover:border-brand-orange hover:text-brand-orange transition-colors duration-150 cursor-pointer' : ''}
      `}
    >
      <span className="text-xs">{icon}</span>
      {label}
    </span>
  )
}
