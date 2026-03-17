import { describe, it, expect } from 'vitest'
import { StaticResumeRepository } from '../../src/infrastructure/repositories/StaticResumeRepository'

describe('StaticResumeRepository', () => {
  const repo = new StaticResumeRepository()

  it('should return a resume object', async () => {
    const resume = await repo.getResume()
    expect(resume).toBeDefined()
    expect(resume.name).toBe('Hung Vuong')
  })

  it('should return correct contact info', async () => {
    const resume = await repo.getResume()
    expect(resume.contact.email).toBe('hungvuongg71@gmail.com')
  })

  it('should return work experiences', async () => {
    const resume = await repo.getResume()
    expect(resume.workExperiences.length).toBeGreaterThan(0)
    expect(resume.workExperiences[0].company).toBe('DSOFT Software')
  })

  it('should return skill groups', async () => {
    const resume = await repo.getResume()
    expect(resume.skillGroups.length).toBeGreaterThan(0)
  })

  it('should return education entries', async () => {
    const resume = await repo.getResume()
    expect(resume.education.length).toBe(2)
  })

  it('should return freelance projects', async () => {
    const resume = await repo.getResume()
    expect(resume.freelanceProjects.length).toBeGreaterThan(0)
  })
})
