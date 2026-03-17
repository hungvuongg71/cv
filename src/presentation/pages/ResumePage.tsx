import { useResume } from '@presentation/hooks/useResume'
import { HeroSection } from '@presentation/components/ui/HeroSection'
import { ExperienceSection } from '@presentation/components/ui/ExperienceSection'
import { SkillsSection } from '@presentation/components/ui/SkillsSection'
import { FreelanceSection } from '@presentation/components/ui/FreelanceSection'
import { EducationSection } from '@presentation/components/ui/EducationSection'

export default function ResumePage() {
  const { data, loading, error } = useResume()

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-brand-orange border-t-transparent rounded-full animate-spin" />
          <p className="font-sans text-sm text-brand-gray dark:text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="font-sans text-sm text-red-500">Failed to load resume data: {error}</p>
      </div>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection resume={data} />

      <div className="h-px w-full bg-brand-gray-border dark:bg-brand-black-light" />

      <ExperienceSection experiences={data.workExperiences} />

      <div className="h-px w-full bg-brand-gray-border dark:bg-brand-black-light" />

      <SkillsSection skillGroups={data.skillGroups} languages={data.languages} />

      <div className="h-px w-full bg-brand-gray-border dark:bg-brand-black-light" />

      <FreelanceSection projects={data.freelanceProjects} />

      <div className="h-px w-full bg-brand-gray-border dark:bg-brand-black-light" />

      <EducationSection education={data.education} />
    </main>
  )
}
