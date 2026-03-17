// Domain Entity – core business object, no framework dependencies

export interface ContactInfo {
  city: string
  phone: string
  email: string
  linkedin: string
}

export interface WorkExperience {
  id: string
  company: string
  location: string
  description: string
  role: string
  period: string
  bullets: string[]
}

export interface FreelanceProject {
  id: string
  client: string
  role: string
  period: string
  description: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  location: string
  period: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Resume {
  name: string
  nameVi: string
  title: string
  summary: string
  contact: ContactInfo
  workExperiences: WorkExperience[]
  freelanceProjects: FreelanceProject[]
  education: Education[]
  skillGroups: SkillGroup[]
  languages: { name: string; level: string }[]
}
